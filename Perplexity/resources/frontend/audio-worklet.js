/**
 * Audio worklet to resample audio from the device sample rate to 24000 Hz using a polyphase FIR low-pass filter for proper anti-aliasing.
 */
class PCMWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.deviceSampleRate = sampleRate;
    // our target sample rate
    this.targetSampleRate = 24000;
    // the ratio by which to advance the input sample pointer for each output sample
    this.ratio = this.deviceSampleRate / this.targetSampleRate;

    // Buffer to hold incoming samples between process calls.
    this.inputBuffer = [];
    // Floating-point pointer into inputBuffer (may be fractional)
    this.currentTime = 0;

    // Polyphase filter parameters:
    // Number of phases for fractional delay quantization.
    this.numPhases = 256;
    // Length of the filter (number of taps). Choosing an even number here is fine.
    this.filterLength = 16;
    // Precompute the polyphase filter table.
    // The normalized cutoff is chosen to be half the target Nyquist.
    const normalizedCutoff = 0.5 * (this.targetSampleRate / this.deviceSampleRate);
    this.polyphaseFilters = [];
    for (let phase = 0; phase < this.numPhases; phase++) {
      const coeffs = new Float32Array(this.filterLength);
      const center = (this.filterLength - 1) / 2;
      // phase offset in [0, 1) for the current phase.
      const phaseOffset = phase / this.numPhases;
      for (let i = 0; i < this.filterLength; i++) {
        // Calculate time offset relative to the center with the fractional delay.
        const t = i - center - phaseOffset;
        // Compute sinc (with cutoff); sinc(0)==1.
        const sincVal =
          t === 0
            ? 1
            : Math.sin(Math.PI * t * 2 * normalizedCutoff) / (Math.PI * t * 2 * normalizedCutoff);
        // Apply the ideal lowpass impulse response.
        let h = 2 * normalizedCutoff * sincVal;
        // Apply a Hann window to reduce sidelobes.
        h *= 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (this.filterLength - 1));
        coeffs[i] = h;
      }
      // Normalize filter coefficients so that their sum equals 1.
      const sum = coeffs.reduce((a, b) => a + b, 0);
      for (let i = 0; i < this.filterLength; i++) {
        coeffs[i] /= sum;
      }
      this.polyphaseFilters.push(coeffs);
    }
  }

  process(inputs) {
    // Get the first channel of the first input.
    const input = inputs[0];
    if (!input || input.length === 0) return true;
    const floatData = input[0];
    if (!floatData) return true;

    // Append the new samples to the buffer.
    for (let i = 0; i < floatData.length; i++) {
      this.inputBuffer.push(floatData[i]);
    }

    const outputSamples = [];

    // Process as many output samples as possible.
    // We require that the convolution window fits within the buffer.
    while (this.currentTime + this.filterLength < this.inputBuffer.length) {
      // Determine the filter phase based on the fractional part.
      const phaseFraction = this.currentTime - Math.floor(this.currentTime);
      const phaseIndex = Math.floor(phaseFraction * this.numPhases);
      const filterCoeffs = this.polyphaseFilters[phaseIndex];

      let sample = 0;
      const start = Math.floor(this.currentTime);
      // Apply the FIR filter (dot product) over filterLength taps.
      for (let i = 0; i < this.filterLength; i++) {
        sample += this.inputBuffer[start + i] * filterCoeffs[i];
      }

      // Clamp the filtered sample and convert to 16-bit PCM.
      const clamped = Math.max(-1, Math.min(1, sample));
      const int16 = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;
      outputSamples.push(int16);

      // Advance the input pointer by the ratio.
      this.currentTime += this.ratio;
    }

    // Remove consumed samples from the buffer.
    const consumed = Math.floor(this.currentTime);
    if (consumed > 0) {
      this.inputBuffer.splice(0, consumed);
      this.currentTime -= consumed;
    }

    if (outputSamples.length > 0) {
      this.port.postMessage(new Int16Array(outputSamples));
    }

    return true; // Keep processor alive.
  }
}

registerProcessor('pcm-worklet-processor', PCMWorkletProcessor);

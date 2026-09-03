import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{$ as t}from"./vendors-B0VRXiug.js";import{t as n}from"./client-iUU9I9sy.js";var r={AutomationRunsPaneRelayQuery:{operationName:`AutomationRunsPaneRelayQuery`,sha256Hash:`0c91254bc6c76001811c6698a71a17d24e58369db0cbfb386d494a1592a6c18e`,text:`query AutomationRunsPaneRelayQuery($automationId: String!) {
	viewer {
		...AutomationRunsPaneDetail_viewer_11anNN
		...AutomationRunsPaneRuns_viewer_11anNN
	}
}
fragment AutomationRunsPaneDetail_viewer_11anNN on Viewer {
	automationByAutomationId(automationId: $automationId) {
		id
		automationId
		collectionUUID
		name
		prompt
		state
		isPinned
		modelPreference
		notificationSettings {
			shouldSendEmail
			shouldSendInApp
			shouldSendPush
		}
		primaryTriggerLabel
		createdFromThread {
			contextUUID
			name
			id
		}
		outputKind
		outputThread {
			contextUUID
			name
			id
		}
		latestRun {
			id
			contextUUID
		}
		triggers {
			__typename
			id
			kind
			label
			createdAt
			... on AutomationConnectorTrigger {
				provider
				eventType
				accountIdentifier
				scope {
					__typename
					... on AutomationGoogleDriveConnectorTriggerScope {
						itemId
						itemName
						kind
					}
				}
				enabled
				display {
					icon
					primary
					preposition
					target
				}
				filters {
					field
					matcher
					values
				}
			}
			... on AutomationNumericThresholdTrigger {
				nextRunAt
				eventGroup
				eventEntity
				eventType
				valueUpperBound
				valueLowerBound
				eligibility {
					rrule
					tzid
					startAtLocal
					endAtLocal
					parsed {
						__typename
						kind
						tzid
						isEditable
						... on AutomationOneTimeSchedule {
							startAtLocal
						}
						... on AutomationDailySchedule {
							startTime
						}
						... on AutomationHourlySchedule {
							everyHours
							startHour
							minute
						}
						... on AutomationWeeklySchedule {
							weekday
							startTime
						}
						... on AutomationWeekdaysSchedule {
							startTime
						}
						... on AutomationMonthlySchedule {
							day
							startTime
						}
						... on AutomationYearlySchedule {
							month
							day
							startTime
						}
						... on AutomationCustomSchedule {
							rrule
							reason
						}
					}
				}
			}
			... on AutomationScheduleTrigger {
				nextRunAt
				scheduleVersion
				schedule {
					rrule
					tzid
					startAtLocal
					endAtLocal
					parsed {
						__typename
						kind
						tzid
						isEditable
						... on AutomationOneTimeSchedule {
							startAtLocal
						}
						... on AutomationDailySchedule {
							startTime
						}
						... on AutomationHourlySchedule {
							everyHours
							startHour
							minute
						}
						... on AutomationWeeklySchedule {
							weekday
							startTime
						}
						... on AutomationWeekdaysSchedule {
							startTime
						}
						... on AutomationMonthlySchedule {
							day
							startTime
						}
						... on AutomationYearlySchedule {
							month
							day
							startTime
						}
						... on AutomationCustomSchedule {
							rrule
							reason
						}
					}
				}
			}
		}
	}
}
fragment AutomationRunsPaneRunFields on AutomationRun {
	id
	contextUUID
	entryUUID
	status
	createdAt
	collectingWindow {
		closesAt
		eventCount
	}
	thread {
		id
		entryId
		isUnread
		status
		statusSummary
	}
}
fragment AutomationRunsPaneRuns_viewer_11anNN on Viewer {
	automationByAutomationId(automationId: $automationId) {
		id
		runs(first: 25) {
			edges {
				node {
					...AutomationRunsPaneRunFields
					id
					__typename
				}
				cursor
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},ThreadAutomationsPaneRelaySubscription:{operationName:`ThreadAutomationsPaneRelaySubscription`,sha256Hash:`546c2d70afd12886ec6eca08cd9903c15f445b8da399434a535695e7f7aa52c4`,text:`subscription ThreadAutomationsPaneRelaySubscription($contextUUID: String!) {
	thread(contextUUID: $contextUUID) {
		id
		automations {
			automations {
				id
				automationId
				name
				state
				type
				outputKind
				primaryTriggerLabel
				nextRunAt
				triggers {
					__typename
					kind
					... on AutomationScheduleTrigger {
						schedule {
							parsed {
								__typename
								kind
							}
						}
					}
					... on AutomationConnectorTrigger {
						provider
						display {
							icon
							primary
						}
					}
					id
				}
			}
			legacyAutomations {
				id
				legacyAutomationId
				name
				state
				scheduleLabel
				nextRunAt
				subagentType
			}
		}
	}
}`},AutomationsDashboardRelayQuery:{operationName:`AutomationsDashboardRelayQuery`,sha256Hash:`a0d5f0b20354f7c9b5ee41759326c850b731cb31a6c0188024b96044ab9175ec`,text:`query AutomationsDashboardRelayQuery($searchTerm: String, $typeFilter: AutomationType, $status: AutomationStatusFilter, $collectionUUID: String) {
	viewer {
		...AutomationsDashboardAllGroup_viewer_16LOId
		...AutomationsDashboardPinnedGroup_viewer_16LOId
		...AutomationsDashboardCompletedGroup_viewer_16LOId
		...AutomationsDashboardLegacy_viewer_16LOId
	}
}
fragment AutomationsDashboardAllGroup_viewer_16LOId on Viewer {
	allGroup: automationGroup(type: ALL, filter: {searchTerm:$searchTerm,typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}) {
		id
		type
		automations(first: 30) {
			edges {
				cursor
				node {
					...AutomationsDashboardAutomationFields
					id
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}
fragment AutomationsDashboardAutomationFields on Automation {
	id
	automationId
	collectionUUID
	name
	prompt
	previewText
	state
	outputKind
	modelPreference
	notificationSettings {
		shouldSendEmail
		shouldSendInApp
		shouldSendPush
	}
	isPinned
	primaryTriggerLabel
	nextRunAt
	createdAt
	updatedAt
	latestRun {
		id
		status
		contextUUID
		createdAt
		updatedAt
		thread {
			id
			isUnread
			status
			statusSummary
		}
	}
	triggers {
		__typename
		id
		kind
		label
		createdAt
		... on AutomationConnectorTrigger {
			provider
			eventType
			accountIdentifier
			scope {
				__typename
				... on AutomationGoogleDriveConnectorTriggerScope {
					itemId
					itemName
					kind
				}
			}
			enabled
			display {
				icon
				primary
				preposition
				target
			}
			filters {
				field
				matcher
				values
			}
		}
		... on AutomationNumericThresholdTrigger {
			nextRunAt
			eventGroup
			eventEntity
			eventType
			valueUpperBound
			valueLowerBound
			eligibility {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
		... on AutomationScheduleTrigger {
			nextRunAt
			scheduleVersion
			schedule {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
	}
}
fragment AutomationsDashboardCompletedGroup_viewer_16LOId on Viewer {
	completedGroup: automationGroup(type: COMPLETED, filter: {searchTerm:$searchTerm,typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}) {
		id
		type
		automations(first: 30) {
			edges {
				cursor
				node {
					...AutomationsDashboardAutomationFields
					id
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}
fragment AutomationsDashboardLegacyFields on LegacyAutomation {
	id
	legacyAutomationId
	name
	prompt
	previewText
	state
	scheduleLabel
	nextRunAt
	createdAt
	contextUUID
	thread {
		id
		isUnread
		status
		statusSummary
	}
}
fragment AutomationsDashboardLegacy_viewer_16LOId on Viewer {
	legacyAutomations(filter: {searchTerm:$searchTerm,typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}) {
		...AutomationsDashboardLegacyFields
		id
	}
}
fragment AutomationsDashboardPinnedGroup_viewer_16LOId on Viewer {
	pinnedGroup: automationGroup(type: PINNED, filter: {searchTerm:$searchTerm,typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}) {
		id
		type
		automations(first: 100) {
			edges {
				cursor
				node {
					...AutomationsDashboardAutomationFields
					id
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},AutomationRunDataRelayQuery:{operationName:`AutomationRunDataRelayQuery`,sha256Hash:`f11971e32e7bb1fdcb260926f9ef58e99797c0b14d22f290b2a3501a45bde5d7`,text:`query AutomationRunDataRelayQuery($automationId: String!, $runId: ID!) {
	viewer {
		automationByAutomationId(automationId: $automationId) {
			id
			run(id: $runId) {
				...AutomationRunsPaneRunFields
				id
			}
		}
	}
}
fragment AutomationRunsPaneRunFields on AutomationRun {
	id
	contextUUID
	entryUUID
	status
	createdAt
	collectingWindow {
		closesAt
		eventCount
	}
	thread {
		id
		entryId
		isUnread
		status
		statusSummary
	}
}`},AutomationsDashboardCompletedGroupPaginationQuery:{operationName:`AutomationsDashboardCompletedGroupPaginationQuery`,sha256Hash:`6a02c5c0c8a79d57d2f2b6bdf757adfafa68a30f68bba24bae4daf56011cc776`,text:`query AutomationsDashboardCompletedGroupPaginationQuery($collectionUUID: String, $count: Int = 30, $cursor: String, $searchTerm: String, $status: AutomationStatusFilter, $typeFilter: AutomationType) {
	viewer {
		...AutomationsDashboardCompletedGroup_viewer_3GbCD6
	}
}
fragment AutomationsDashboardAutomationFields on Automation {
	id
	automationId
	collectionUUID
	name
	prompt
	previewText
	state
	outputKind
	modelPreference
	notificationSettings {
		shouldSendEmail
		shouldSendInApp
		shouldSendPush
	}
	isPinned
	primaryTriggerLabel
	nextRunAt
	createdAt
	updatedAt
	latestRun {
		id
		status
		contextUUID
		createdAt
		updatedAt
		thread {
			id
			isUnread
			status
			statusSummary
		}
	}
	triggers {
		__typename
		id
		kind
		label
		createdAt
		... on AutomationConnectorTrigger {
			provider
			eventType
			accountIdentifier
			scope {
				__typename
				... on AutomationGoogleDriveConnectorTriggerScope {
					itemId
					itemName
					kind
				}
			}
			enabled
			display {
				icon
				primary
				preposition
				target
			}
			filters {
				field
				matcher
				values
			}
		}
		... on AutomationNumericThresholdTrigger {
			nextRunAt
			eventGroup
			eventEntity
			eventType
			valueUpperBound
			valueLowerBound
			eligibility {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
		... on AutomationScheduleTrigger {
			nextRunAt
			scheduleVersion
			schedule {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
	}
}
fragment AutomationsDashboardCompletedGroup_viewer_3GbCD6 on Viewer {
	completedGroup: automationGroup(type: COMPLETED, filter: {searchTerm:$searchTerm,typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}) {
		id
		type
		automations(first: $count, after: $cursor) {
			edges {
				cursor
				node {
					...AutomationsDashboardAutomationFields
					id
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},AutomationsDashboardAllGroupPaginationQuery:{operationName:`AutomationsDashboardAllGroupPaginationQuery`,sha256Hash:`127dc806200a806af73c52374c907d8789b1eea06f509920f4c5a68fd2553584`,text:`query AutomationsDashboardAllGroupPaginationQuery($collectionUUID: String, $count: Int = 30, $cursor: String, $searchTerm: String, $status: AutomationStatusFilter, $typeFilter: AutomationType) {
	viewer {
		...AutomationsDashboardAllGroup_viewer_3GbCD6
	}
}
fragment AutomationsDashboardAllGroup_viewer_3GbCD6 on Viewer {
	allGroup: automationGroup(type: ALL, filter: {searchTerm:$searchTerm,typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}) {
		id
		type
		automations(first: $count, after: $cursor) {
			edges {
				cursor
				node {
					...AutomationsDashboardAutomationFields
					id
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}
fragment AutomationsDashboardAutomationFields on Automation {
	id
	automationId
	collectionUUID
	name
	prompt
	previewText
	state
	outputKind
	modelPreference
	notificationSettings {
		shouldSendEmail
		shouldSendInApp
		shouldSendPush
	}
	isPinned
	primaryTriggerLabel
	nextRunAt
	createdAt
	updatedAt
	latestRun {
		id
		status
		contextUUID
		createdAt
		updatedAt
		thread {
			id
			isUnread
			status
			statusSummary
		}
	}
	triggers {
		__typename
		id
		kind
		label
		createdAt
		... on AutomationConnectorTrigger {
			provider
			eventType
			accountIdentifier
			scope {
				__typename
				... on AutomationGoogleDriveConnectorTriggerScope {
					itemId
					itemName
					kind
				}
			}
			enabled
			display {
				icon
				primary
				preposition
				target
			}
			filters {
				field
				matcher
				values
			}
		}
		... on AutomationNumericThresholdTrigger {
			nextRunAt
			eventGroup
			eventEntity
			eventType
			valueUpperBound
			valueLowerBound
			eligibility {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
		... on AutomationScheduleTrigger {
			nextRunAt
			scheduleVersion
			schedule {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
	}
}`},AutomationsDashboardLegacyThreadUpdatesRelaySubscription:{operationName:`AutomationsDashboardLegacyThreadUpdatesRelaySubscription`,sha256Hash:`4daaf75f3b1c156f3eb3b7c3e1705857110e574bea3edf00cd86e9fdf0c1bbed`,text:`subscription AutomationsDashboardLegacyThreadUpdatesRelaySubscription($contextUUIDs: [String!]!) {
	legacyAutomationThreadUpdates(contextUUIDs: $contextUUIDs) {
		id
		isUnread
		status
		statusSummary
	}
}`},AutomationRunsPaneUpdatesRelaySubscription:{operationName:`AutomationRunsPaneUpdatesRelaySubscription`,sha256Hash:`30391d52940c93bd53a507dcb24f551c36c54d3d87da9e39e0260ff68d8f5d77`,text:`subscription AutomationRunsPaneUpdatesRelaySubscription($id: ID!, $first: Int) {
	automationRuns(id: $id, first: $first) {
		edges {
			cursor
			node {
				id
				contextUUID
				entryUUID
				status
				createdAt
				collectingWindow {
					closesAt
					eventCount
				}
				thread {
					id
					entryId
					isUnread
					status
					statusSummary
				}
			}
		}
	}
}`},AutomationsDashboardGroupsUpdatesRelaySubscription:{operationName:`AutomationsDashboardGroupsUpdatesRelaySubscription`,sha256Hash:`c5064105c6272acd6731a20a91678d68b3e7d6247e948024b4fe5bd1cf5aeb10`,text:`subscription AutomationsDashboardGroupsUpdatesRelaySubscription($first: Int, $typeFilter: AutomationType, $status: AutomationStatusFilter, $collectionUUID: String) {
	automationGroups(types: [ALL,PINNED,COMPLETED], filter: {typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}, first: $first) {
		id
		type
		automations(first: $first) {
			edges {
				cursor
				node {
					...AutomationsDashboardAutomationFields
					id
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}
fragment AutomationsDashboardAutomationFields on Automation {
	id
	automationId
	collectionUUID
	name
	prompt
	previewText
	state
	outputKind
	modelPreference
	notificationSettings {
		shouldSendEmail
		shouldSendInApp
		shouldSendPush
	}
	isPinned
	primaryTriggerLabel
	nextRunAt
	createdAt
	updatedAt
	latestRun {
		id
		status
		contextUUID
		createdAt
		updatedAt
		thread {
			id
			isUnread
			status
			statusSummary
		}
	}
	triggers {
		__typename
		id
		kind
		label
		createdAt
		... on AutomationConnectorTrigger {
			provider
			eventType
			accountIdentifier
			scope {
				__typename
				... on AutomationGoogleDriveConnectorTriggerScope {
					itemId
					itemName
					kind
				}
			}
			enabled
			display {
				icon
				primary
				preposition
				target
			}
			filters {
				field
				matcher
				values
			}
		}
		... on AutomationNumericThresholdTrigger {
			nextRunAt
			eventGroup
			eventEntity
			eventType
			valueUpperBound
			valueLowerBound
			eligibility {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
		... on AutomationScheduleTrigger {
			nextRunAt
			scheduleVersion
			schedule {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
	}
}`},AutomationRunsPaneRunsPaginationQuery:{operationName:`AutomationRunsPaneRunsPaginationQuery`,sha256Hash:`89d2873dccfb74ec186289f4104417e41b01694fede1a84dade33394586aa97c`,text:`query AutomationRunsPaneRunsPaginationQuery($automationId: String!, $count: Int = 25, $cursor: String) {
	viewer {
		...AutomationRunsPaneRuns_viewer_3R9UNH
	}
}
fragment AutomationRunsPaneRunFields on AutomationRun {
	id
	contextUUID
	entryUUID
	status
	createdAt
	collectingWindow {
		closesAt
		eventCount
	}
	thread {
		id
		entryId
		isUnread
		status
		statusSummary
	}
}
fragment AutomationRunsPaneRuns_viewer_3R9UNH on Viewer {
	automationByAutomationId(automationId: $automationId) {
		id
		runs(first: $count, after: $cursor) {
			edges {
				node {
					...AutomationRunsPaneRunFields
					id
					__typename
				}
				cursor
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},AutomationsDashboardPinnedGroupPaginationQuery:{operationName:`AutomationsDashboardPinnedGroupPaginationQuery`,sha256Hash:`f3cd88b4107557429466c8e55c643535c75e5edbf80a064c5c9f2c523b7fc0b7`,text:`query AutomationsDashboardPinnedGroupPaginationQuery($collectionUUID: String, $count: Int = 100, $cursor: String, $searchTerm: String, $status: AutomationStatusFilter, $typeFilter: AutomationType) {
	viewer {
		...AutomationsDashboardPinnedGroup_viewer_3GbCD6
	}
}
fragment AutomationsDashboardAutomationFields on Automation {
	id
	automationId
	collectionUUID
	name
	prompt
	previewText
	state
	outputKind
	modelPreference
	notificationSettings {
		shouldSendEmail
		shouldSendInApp
		shouldSendPush
	}
	isPinned
	primaryTriggerLabel
	nextRunAt
	createdAt
	updatedAt
	latestRun {
		id
		status
		contextUUID
		createdAt
		updatedAt
		thread {
			id
			isUnread
			status
			statusSummary
		}
	}
	triggers {
		__typename
		id
		kind
		label
		createdAt
		... on AutomationConnectorTrigger {
			provider
			eventType
			accountIdentifier
			scope {
				__typename
				... on AutomationGoogleDriveConnectorTriggerScope {
					itemId
					itemName
					kind
				}
			}
			enabled
			display {
				icon
				primary
				preposition
				target
			}
			filters {
				field
				matcher
				values
			}
		}
		... on AutomationNumericThresholdTrigger {
			nextRunAt
			eventGroup
			eventEntity
			eventType
			valueUpperBound
			valueLowerBound
			eligibility {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
		... on AutomationScheduleTrigger {
			nextRunAt
			scheduleVersion
			schedule {
				rrule
				tzid
				startAtLocal
				endAtLocal
				parsed {
					__typename
					kind
					tzid
					isEditable
					... on AutomationOneTimeSchedule {
						startAtLocal
					}
					... on AutomationDailySchedule {
						startTime
					}
					... on AutomationHourlySchedule {
						everyHours
						startHour
						minute
					}
					... on AutomationWeeklySchedule {
						weekday
						startTime
					}
					... on AutomationWeekdaysSchedule {
						startTime
					}
					... on AutomationMonthlySchedule {
						day
						startTime
					}
					... on AutomationYearlySchedule {
						month
						day
						startTime
					}
					... on AutomationCustomSchedule {
						rrule
						reason
					}
				}
			}
		}
	}
}
fragment AutomationsDashboardPinnedGroup_viewer_3GbCD6 on Viewer {
	pinnedGroup: automationGroup(type: PINNED, filter: {searchTerm:$searchTerm,typeFilter:$typeFilter,status:$status,collectionUUID:$collectionUUID}) {
		id
		type
		automations(first: $count, after: $cursor) {
			edges {
				cursor
				node {
					...AutomationsDashboardAutomationFields
					id
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`}},i=e(t(),1),a=new Map;function o(e){let t=a.get(e);if(t)return t;let i=n({persistedOperations:r,usePersistedQuery:e});return a.set(e,i),i}function s(){return(0,i.useMemo)(()=>o(!0),[!0])}export{s as t};
//# sourceMappingURL=automationsRelayEnvironment-Da_1e-vs.js.map
import{o as e}from"../rolldown-runtime-CNgF_TGW.js";import{$ as t,et as n}from"../vendors-B0VRXiug.js";import{Mi as r,fi as i,pi as a,ui as o}from"../platform-core-D8IQmtf1.js";import{f as s,gt as c,m as l,s as u}from"../aether-core-6TfbVOZ_.js";import{o as d}from"../platform-components-BSNYlERV.js";import{i as f}from"../pplx-icons-DwPCRnON.js";import{n as p,r as m}from"../useAetherContext-DTB3hWrS.js";import{t as h}from"../Popover-DKsEI6vN.js";import{t as g}from"../Badge-DvAtUu3I.js";import{n as _,t as v}from"../react-relay-DuJ9gA7S.js";import{t as y}from"../Skeleton-DAWyZw6o.js";import{n as b,t as x}from"../lib-B1xHknnr.js";import{d as S,l as C,u as w}from"./restricted-feature-teammate-workstream-DO3j79d5.js";var T=n(),E=x().use(b);function D(e){return e.type===`html`?``:e.type===`image`?e.alt??``:typeof e.value==`string`?e.value:(e.children??[]).map(D).join(``)}function O(e){if(!e)return``;let t=E.parse(e).children?.find(e=>e.type===`paragraph`);return t?D(t).replace(/\s+/g,` `).trim():``}var k=`\xA0`,A=i({mergeable:{defaultMessage:`Mergeable`,id:`8375f1d4c9`},conflicts:{defaultMessage:`Conflicts`,id:`2d22617242`},mergeStatusPending:{defaultMessage:`Merge status pending`,id:`c9abe52a23`},checksPassing:{defaultMessage:`Checks passing`,id:`375f50a135`},checksRunning:{defaultMessage:`Checks running`,id:`5324b6b65d`},checksFailing:{defaultMessage:`Checks failing`,id:`4e83bc73f5`},noChecks:{defaultMessage:`No checks`,id:`9a1d60bfae`},approved:{defaultMessage:`Approved`,id:`2ac800d6c1`},changesRequested:{defaultMessage:`Changes requested`,id:`84835264e2`},reviewRequired:{defaultMessage:`Review required`,id:`d152ac9ef3`},noReviews:{defaultMessage:`No reviews`,id:`95ac0795ef`},draft:{defaultMessage:`Draft`,id:`6acbfb557e`},merged:{defaultMessage:`Merged`,id:`6b9cb73b90`},closed:{defaultMessage:`Closed`,id:`a1a4e96dc2`},lifecycleGroup:{defaultMessage:`Pull request lifecycle`,id:`7fed7dc659`},checksAndReviewsGroup:{defaultMessage:`Checks and reviews`,id:`44bebcb1ca`}});function j(e,t,n,r){return{icon:n,label:e.formatMessage(t),variant:r}}function M(e,t,n){switch(e){case`draft`:return j(n,A.draft,f(`git-pull-request-draft`),`neutral`);case`merged`:return j(n,A.merged,f(`git-merge`),`info`);case`closed`:return j(n,A.closed,f(`git-pull-request-closed`),`error`);case`open`:case`blocked`:case`unknown`:return P(t,n);default:return r(e)}}function N(e){switch(e){case`merged`:return!1;case`open`:case`draft`:case`closed`:case`blocked`:case`unknown`:return!0;default:return r(e)}}function P(e,t){switch(e){case`CONFLICTING`:return j(t,A.conflicts,f(`git-branch`),`error`);case`MERGEABLE`:return j(t,A.mergeable,f(`git-pull-request`),`success`);case`UNKNOWN`:case`%future added value`:case null:case void 0:return j(t,A.mergeStatusPending,f(`git-pull-request`),`neutral`);default:return r(e)}}function F(e,t){switch(e){case`PASSING`:return j(t,A.checksPassing,f(`circle-check`),`success`);case`PENDING`:return j(t,A.checksRunning,f(`clock`),`warning`);case`FAILING`:return j(t,A.checksFailing,f(`circle-x`),`error`);case`NONE`:case`%future added value`:case null:case void 0:return j(t,A.noChecks,f(`circle-dashed`),`neutral`);default:return r(e)}}function I(e,t){let n=w(e);switch(n){case`approved`:return j(t,A.approved,f(`circle-check`),`success`);case`changes_requested`:return j(t,A.changesRequested,f(`circle-minus`),`error`);case`required`:return j(t,A.reviewRequired,f(`progress-check`),`warning`);case`unknown`:return j(t,A.noReviews,f(`circle-dashed`),`neutral`);default:return r(n)}}var L={neutral:`ultraLight`,info:`super`,success:`positive`,warning:`warning`,error:`negative`};function R({isEnriched:e,mergeability:t,state:n}){let r=a(),i=C(n,r),o=e?M(n,t,r):{icon:i.icon,label:i.label,variant:i.badgeVariant};return(0,T.jsx)(`div`,{role:`group`,"aria-label":r.formatMessage(A.lifecycleGroup),className:`inline-flex max-w-full self-start [&>span>span]:max-w-full [&>span>span]:min-w-0 [&>span]:max-w-full`,children:(0,T.jsx)(g,{variant:o.variant,children:(0,T.jsxs)(`span`,{className:`flex min-w-0 max-w-full items-start gap-1`,children:[(0,T.jsx)(`span`,{className:`shrink-0`,children:(0,T.jsx)(c,{"aria-hidden":!0,icon:o.icon,size:`tiny`})}),(0,T.jsx)(`span`,{className:`min-w-0 break-words whitespace-normal leading-tight`,children:o.label})]})})})}function z({checkRollup:e,reviewStatus:t}){let n=a(),r=[F(e,n),I(t,n)];return(0,T.jsx)(`ul`,{"aria-label":n.formatMessage(A.checksAndReviewsGroup),className:`flex min-w-0 flex-col gap-0.5 border-t border-subtlest pt-2.5`,children:r.map(({icon:e,label:t,variant:n})=>(0,T.jsxs)(`li`,{className:`flex min-w-0 items-start gap-1`,children:[(0,T.jsx)(`span`,{className:`flex h-4 shrink-0 items-center`,children:(0,T.jsx)(c,{"aria-hidden":!0,color:L[n],icon:e,size:`tiny`})}),(0,T.jsx)(u,{as:`span`,variant:`tiny`,color:`light`,leading:`4`,wordBreak:`words`,children:t})]},t))})}function B({children:e}){return(0,T.jsx)(`div`,{className:`flex min-h-28 w-80 flex-col justify-center gap-2.5 p-1`,children:e})}function V({pullRequest:e}){let t=e.enrichment,n=O(t?.markdownBody),r=`#${e.number}`,i=S(e.state,e.isDraft);return(0,T.jsxs)(B,{children:[(0,T.jsxs)(`header`,{className:`flex flex-col gap-1.5`,children:[(0,T.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,T.jsx)(c,{"aria-hidden":!0,color:`ultraLight`,icon:f(`brand-github`),size:`tiny`}),(0,T.jsx)(u,{as:`span`,variant:`tiny`,color:`light`,children:e.repository})]}),(0,T.jsxs)(u,{as:`div`,variant:`baseSemi`,lineClamp:2,children:[e.title,k,(0,T.jsx)(u,{as:`span`,variant:`baseSemi`,color:`ultraLight`,tabularNums:!0,children:r})]}),(0,T.jsx)(R,{isEnriched:t!=null,mergeability:t?.mergeability,state:i})]}),n?(0,T.jsx)(`div`,{className:`border-t border-subtlest pt-2.5`,children:(0,T.jsx)(u,{variant:`small`,color:`light`,lineClamp:3,children:n})}):null,t&&N(i)?(0,T.jsx)(z,{checkRollup:t.checkRollup,reviewStatus:t.reviewStatus}):null]})}_();var H=(function(){var e={defaultValue:null,kind:`LocalArgument`,name:`number`},t={defaultValue:null,kind:`LocalArgument`,name:`owner`},n={defaultValue:null,kind:`LocalArgument`,name:`repo`},r=[{kind:`Variable`,name:`number`,variableName:`number`},{kind:`Variable`,name:`owner`,variableName:`owner`},{kind:`Variable`,name:`repository`,variableName:`repo`}],i={alias:null,args:[{kind:`Literal`,name:`first`,value:50}],concreteType:`GitHubPullRequestFileConnection`,kind:`LinkedField`,name:`files`,plural:!1,selections:[{alias:null,args:null,concreteType:`GitHubPullRequestFileEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`GitHubPullRequestFile`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`path`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`diffAnchor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`additions`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`deletions`,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:`files(first:50)`},a={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`number`,storageKey:null},s={alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null},c={alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},l={alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null},u={alias:null,args:null,kind:`ScalarField`,name:`baseBranch`,storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`headBranch`,storageKey:null},f={alias:null,args:null,kind:`ScalarField`,name:`isDraft`,storageKey:null},p={alias:null,args:null,kind:`ScalarField`,name:`avatarUrl`,storageKey:null},m=[{alias:null,args:null,kind:`ScalarField`,name:`login`,storageKey:null},p,s],h={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null};return{fragment:{argumentDefinitions:[e,t,n],kind:`Fragment`,metadata:null,name:`TeammateGitHubPullRequestPreviewRelayQuery`,selections:[{alias:null,args:r,concreteType:`GitHubPullRequestMetadata`,kind:`LinkedField`,name:`teammatePullRequestByRepository`,plural:!1,selections:[{args:null,kind:`FragmentSpread`,name:`TeammatePullRequestMetadata_pullRequest`},i],storageKey:null}],type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:[t,n,e],kind:`Operation`,name:`TeammateGitHubPullRequestPreviewRelayQuery`,selections:[{alias:null,args:r,concreteType:`GitHubPullRequestMetadata`,kind:`LinkedField`,name:`teammatePullRequestByRepository`,plural:!1,selections:[a,{alias:null,args:null,kind:`ScalarField`,name:`repository`,storageKey:null},o,s,c,l,{alias:null,args:null,kind:`ScalarField`,name:`stackPosition`,storageKey:null},{alias:null,args:null,concreteType:`GitHubPullRequestStack`,kind:`LinkedField`,name:`stack`,plural:!1,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`size`,storageKey:null},u,{alias:null,args:[{kind:`Literal`,name:`first`,value:100}],concreteType:`GitHubPullRequestStackItemConnection`,kind:`LinkedField`,name:`pullRequests`,plural:!1,selections:[{alias:null,args:null,concreteType:`GitHubPullRequestStackItemEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{alias:null,args:null,concreteType:`GitHubPullRequestStackItem`,kind:`LinkedField`,name:`node`,plural:!1,selections:[u,d,f,o,l,c],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null}],storageKey:`pullRequests(first:100)`},a],storageKey:null},f,{alias:null,args:null,concreteType:`TeammateGitHubUser`,kind:`LinkedField`,name:`authorUser`,plural:!1,selections:m,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`linesAdded`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`linesRemoved`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`changedFiles`,storageKey:null},u,d,{alias:null,args:null,kind:`ScalarField`,name:`headOid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`checkRollup`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`commentCount`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`markdownBody`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`createdAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`baseOid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`labels`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`reviewStatus`,storageKey:null},{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`requestedReviewers`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:m,type:`TeammateGitHubBot`,abstractKey:null},{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`combinedSlug`,storageKey:null},h],type:`TeammateGitHubEnterpriseTeam`,abstractKey:null},{kind:`InlineFragment`,selections:m,type:`TeammateGitHubMannequin`,abstractKey:null},{kind:`InlineFragment`,selections:[h,p,s],type:`TeammateGitHubTeam`,abstractKey:null},{kind:`InlineFragment`,selections:m,type:`TeammateGitHubUser`,abstractKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`commitCount`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mergeability`,storageKey:null},i],storageKey:null}]},params:{cacheID:`464e0f37a616aff660251556e6ceef28`,id:`c5b901acd6a5859a38310b7e9a1ef91b9049c3d7fca1d249a18cc116d01f6fbb`,metadata:{},name:`TeammateGitHubPullRequestPreviewRelayQuery`,operationKind:`query`,text:`query TeammateGitHubPullRequestPreviewRelayQuery(
  $owner: String!
  $repo: String!
  $number: Int!
) {
  teammatePullRequestByRepository(owner: $owner, repository: $repo, number: $number) {
    ...TeammatePullRequestMetadata_pullRequest
    files(first: 50) {
      edges {
        node {
          path
          diffAnchor
          status
          additions
          deletions
        }
      }
    }
    id
  }
}

fragment TeammatePullRequestMetadata_pullRequest on GitHubPullRequestMetadata {
  id
  repository
  number
  url
  title
  state
  stackPosition
  stack {
    number
    size
    baseBranch
    pullRequests(first: 100) {
      edges {
        cursor
        node {
          baseBranch
          headBranch
          isDraft
          number
          state
          title
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    id
  }
  isDraft
  authorUser {
    login
    avatarUrl
    url
  }
  linesAdded
  linesRemoved
  changedFiles
  baseBranch
  headBranch
  headOid
  updatedAt
  checkRollup
  commentCount
  markdownBody
  createdAt
  baseOid
  labels
  reviewStatus
  requestedReviewers {
    __typename
    ... on TeammateGitHubBot {
      login
      avatarUrl
      url
    }
    ... on TeammateGitHubEnterpriseTeam {
      combinedSlug
      slug
    }
    ... on TeammateGitHubMannequin {
      login
      avatarUrl
      url
    }
    ... on TeammateGitHubTeam {
      slug
      avatarUrl
      url
    }
    ... on TeammateGitHubUser {
      login
      avatarUrl
      url
    }
  }
  commitCount
  mergeability
}
`}}})();H.hash=`2d0db87a4af2a69c5ab5654d04d8bbaa`;var U=(function(){var e={alias:null,args:null,kind:`ScalarField`,name:`number`,storageKey:null},t={alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null},n={alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`baseBranch`,storageKey:null},a={alias:null,args:null,kind:`ScalarField`,name:`headBranch`,storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`isDraft`,storageKey:null},s={alias:null,args:null,kind:`ScalarField`,name:`avatarUrl`,storageKey:null},c=[{alias:null,args:null,kind:`ScalarField`,name:`login`,storageKey:null},s,t],l={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null};return{argumentDefinitions:[],kind:`Fragment`,metadata:null,name:`TeammatePullRequestMetadata_pullRequest`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`repository`,storageKey:null},e,t,n,r,{alias:null,args:null,kind:`ScalarField`,name:`stackPosition`,storageKey:null},{alias:null,args:null,concreteType:`GitHubPullRequestStack`,kind:`LinkedField`,name:`stack`,plural:!1,selections:[e,{alias:null,args:null,kind:`ScalarField`,name:`size`,storageKey:null},i,{alias:null,args:[{kind:`Literal`,name:`first`,value:100}],concreteType:`GitHubPullRequestStackItemConnection`,kind:`LinkedField`,name:`pullRequests`,plural:!1,selections:[{alias:null,args:null,concreteType:`GitHubPullRequestStackItemEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{alias:null,args:null,concreteType:`GitHubPullRequestStackItem`,kind:`LinkedField`,name:`node`,plural:!1,selections:[i,a,o,e,r,n],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null}],storageKey:`pullRequests(first:100)`}],storageKey:null},o,{alias:null,args:null,concreteType:`TeammateGitHubUser`,kind:`LinkedField`,name:`authorUser`,plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`linesAdded`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`linesRemoved`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`changedFiles`,storageKey:null},i,a,{alias:null,args:null,kind:`ScalarField`,name:`headOid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`checkRollup`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`commentCount`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`markdownBody`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`createdAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`baseOid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`labels`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`reviewStatus`,storageKey:null},{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`requestedReviewers`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:c,type:`TeammateGitHubBot`,abstractKey:null},{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`combinedSlug`,storageKey:null},l],type:`TeammateGitHubEnterpriseTeam`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`TeammateGitHubMannequin`,abstractKey:null},{kind:`InlineFragment`,selections:[l,s,t],type:`TeammateGitHubTeam`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`TeammateGitHubUser`,abstractKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`commitCount`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mergeability`,storageKey:null}],type:`GitHubPullRequestMetadata`,abstractKey:null}})();U.hash=`3cdef02e5a85e2a1f6006df165c5d11d`;var W=e(t(),1),G=v(),K=l;function q(){return(0,T.jsx)(B,{children:(0,T.jsxs)(`div`,{role:`status`,"aria-busy":`true`,children:[(0,T.jsx)(`span`,{className:`sr-only`,children:(0,T.jsx)(o,{defaultMessage:`Loading pull request preview…`,id:`7c5e7d79dd`})}),(0,T.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,T.jsx)(y,{size:`sm`,width:`sm`}),(0,T.jsx)(y,{size:`md`}),(0,T.jsx)(y,{size:`sm`,width:`lg`}),(0,T.jsx)(y,{size:`sm`,width:`md`})]})]})})}function J({identity:e}){return(0,T.jsxs)(B,{children:[(0,T.jsx)(u,{variant:`tiny`,color:`light`,children:`${e.owner}/${e.repo}#${e.number}`}),(0,T.jsx)(u,{variant:`small`,weight:`medium`,children:(0,T.jsx)(o,{defaultMessage:`Pull request preview unavailable`,id:`e9db6d946c`})}),(0,T.jsx)(u,{variant:`small`,color:`light`,children:(0,T.jsx)(o,{defaultMessage:`Open the link to view it on GitHub.`,id:`3247a4b8aa`})})]})}function Y({identity:e,previewFallback:t}){let n=(0,G.useFragment)(U,(0,G.useLazyLoadQuery)(H,{owner:e.owner,repo:e.repo,number:e.number},{fetchPolicy:`store-or-network`}).teammatePullRequestByRepository);return n?(0,T.jsx)(V,{pullRequest:{isDraft:n.isDraft??!1,number:n.number??e.number,repository:n.repository??`${e.owner}/${e.repo}`,state:n.state,title:n.title??`${e.owner}/${e.repo}`,enrichment:{checkRollup:n.checkRollup,markdownBody:n.markdownBody,mergeability:n.mergeability,reviewStatus:n.reviewStatus}}}):t}function X({identity:e,onReady:t,openOnMount:n,previewFallback:r,side:i=`top`,source:o=`message`,triggerElement:c}){let l=a(),{isMobileStyle:u}=p(),f=m(),{track:g}=s(),_=(0,W.useRef)(n===!0),v=(0,W.useRef)(n===!0);(0,W.useLayoutEffect)(t,[t]);let y=(0,W.useCallback)(e=>{_.current&&(e?f.open():f.close()),e&&g(K({name:`teammate pull request link preview opened`,data:{source:o}}))},[f,o,g]);(0,W.useLayoutEffect)(()=>{u||!v.current||(v.current=!1,y(!0))},[y,u]);let b=r??(0,T.jsx)(q,{}),x=r??(0,T.jsx)(J,{identity:e});return(0,T.jsx)(h,{interaction:`hover`,openDelayMs:350,closeDelayMs:200,side:i,align:`start`,matchTriggerWidth:!1,minWidthPx:320,maxWidthPx:360,disabled:u,..._.current?{open:f.isOpen}:{},onOpenChange:y,title:l.formatMessage({defaultMessage:`Pull request preview`,id:`21bfaf6692`}),triggerElement:c,children:(0,T.jsx)(d,{fallback:()=>x,children:(0,T.jsx)(W.Suspense,{fallback:b,children:(0,T.jsx)(Y,{identity:e,previewFallback:x})})})})}export{X as TeammateGitHubPullRequestPreview};
//# sourceMappingURL=restricted-feature-teammate-workstream-Bod4av_X.js.map
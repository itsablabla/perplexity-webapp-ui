import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{$ as t,et as n}from"./vendors-B0VRXiug.js";import{Et as r,pi as i,ua as a}from"./platform-core-D8IQmtf1.js";import{bt as o}from"./aether-core-6TfbVOZ_.js";import{o as s}from"./platform-components-BSNYlERV.js";import{t as c}from"./canonicalizeLegacyPermalink-C2mcAKvo.js";import{n as l,t as u}from"./react-relay-DuJ9gA7S.js";import{c as d,f,l as p,u as m}from"./useComputerTaskArchive-C76Iniji.js";import{t as h}from"./client-iUU9I9sy.js";import{a as g,c as _,i as v,t as y}from"./localThreadRows-Rg1MfELr.js";import{t as ee}from"./LoadMoreSentinel-BmPkquue.js";import{At as b,Mt as x,bt as S,it as C,jt as w,rt as T,wt as E}from"./index.html-BwioOl2-.js";import{t as D}from"./recentThreadLink-BzwAb8gU.js";var O=n(),k=l(),A=`LibraryRecentThreads_viewer_threads`;function j(e,t,n,r,i,a){let o=e.getRootField(`sidebarRecentThreads`),s=t?e.get(t):null,c=s?k.ConnectionHandler.getConnection(s,A):null,l=o?.getLinkedRecord(`threads`,i);if(!l||!c)return r.apply(e),a?.({hadNewThread:!1,missingQueryConnection:!c,missingSubscriptionConnection:!l}),n;let{hadNewThread:u,headIDs:d}=f(c,l,n,i.first);return r.apply(e),a?.({hadNewThread:u,missingQueryConnection:!1,missingSubscriptionConnection:!1}),d}var M=(function(){var e={defaultValue:null,kind:`LocalArgument`,name:`includeSearchPreview`},t={defaultValue:null,kind:`LocalArgument`,name:`includeTemporary`},n={defaultValue:null,kind:`LocalArgument`,name:`searchTerm`},r={defaultValue:null,kind:`LocalArgument`,name:`sortOrder`},i={defaultValue:null,kind:`LocalArgument`,name:`sources`},a={defaultValue:null,kind:`LocalArgument`,name:`statuses`},o={defaultValue:null,kind:`LocalArgument`,name:`threadTypes`},s={kind:`Variable`,name:`includeTemporary`,variableName:`includeTemporary`},c={kind:`Variable`,name:`searchTerm`,variableName:`searchTerm`},l={kind:`Variable`,name:`sortOrder`,variableName:`sortOrder`},u={kind:`Variable`,name:`sources`,variableName:`sources`},d={kind:`Variable`,name:`statuses`,variableName:`statuses`},f={kind:`Variable`,name:`threadTypes`,variableName:`threadTypes`},p={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},m=[{kind:`Literal`,name:`first`,value:25}],h={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null},g={alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},_={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},v={alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null};return{fragment:{argumentDefinitions:[e,t,n,r,i,a,o],kind:`Fragment`,metadata:null,name:`LibraryThreadsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{args:[{kind:`Variable`,name:`includeSearchPreview`,variableName:`includeSearchPreview`},s,c,l,u,d,f],kind:`FragmentSpread`,name:`LibraryRecentThreads_viewer`}],storageKey:null}],type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:[e,n,r,a,o,i,t],kind:`Operation`,name:`LibraryThreadsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{alias:`recentGroup`,args:[{fields:[{fields:[s,l,u,d,f],kind:`ObjectValue`,name:`library`},{kind:`Literal`,name:`modes`,value:[]},c],kind:`ObjectValue`,name:`filter`},{kind:`Literal`,name:`type`,value:`RECENT`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[p,{alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},{alias:null,args:m,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{condition:`includeSearchPreview`,kind:`Condition`,passingValue:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`searchPreview`,storageKey:null}]},{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[p,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`readWriteToken`,storageKey:null},h,{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,concreteType:`DisplayModel`,kind:`LinkedField`,name:`displayModel`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`modelID`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPinned`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isArchived`,storageKey:null},g,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`statusSummary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},_,h,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[v,{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[_],type:`EmojiAppearance`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ThreadAsset`,kind:`LinkedField`,name:`topAssets`,plural:!0,selections:[p,{alias:null,args:null,kind:`ScalarField`,name:`assetType`,storageKey:null},g,h,{alias:null,args:null,kind:`ScalarField`,name:`backendUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPrimary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`previewURL`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAssetExternalMetadata`,kind:`LinkedField`,name:`externalMetadata`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`attachmentURLs`,storageKey:null},{alias:null,args:null,concreteType:`ThreadTaskSchedule`,kind:`LinkedField`,name:`taskSchedule`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`wakeAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`nextRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasCron`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`recurringCronState`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAutomation`,kind:`LinkedField`,name:`automations`,plural:!0,selections:[p,{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null}],storageKey:null}],storageKey:null},v],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null}],storageKey:`threads(first:25)`},{alias:null,args:m,filters:null,handle:`connection`,key:`LibraryRecentThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null}],storageKey:null}]},params:{cacheID:`7e9df09515f23562a3be6a5b8d5d885a`,id:`d43d56d790ad77ff540e822d8b503624a649475b34143a2210b0fb354e1a24b4`,metadata:{},name:`LibraryThreadsRelayQuery`,operationKind:`query`,text:`query LibraryThreadsRelayQuery(
  $includeSearchPreview: Boolean!
  $searchTerm: String
  $sortOrder: ThreadSortOrder
  $statuses: [ThreadStatus!]
  $threadTypes: [ThreadTypeFilter!]
  $sources: [ThreadSourceFilter!]
  $includeTemporary: Boolean
) {
  viewer {
    ...LibraryRecentThreads_viewer_3f0Y5L
  }
}

fragment LibraryQueryEdgeFields_JxMfA on ThreadEdge {
  searchPreview @include(if: $includeSearchPreview)
}

fragment LibraryRecentThreads_viewer_3f0Y5L on Viewer {
  recentGroup: threadGroup(type: RECENT, filter: {modes: [], searchTerm: $searchTerm, library: {sortOrder: $sortOrder, statuses: $statuses, threadTypes: $threadTypes, sources: $sources, includeTemporary: $includeTemporary}}) {
    id
    type
    threads(first: 25) {
      edges {
        cursor
        ...LibraryQueryEdgeFields_JxMfA
        node {
          ...LibraryThreadFields
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

fragment LibraryThreadFields on Thread {
  id
  contextUUID
  entryId
  readWriteToken
  slug
  mode
  variant
  displayModel {
    modelID
  }
  isPinned
  isArchived
  name
  status
  statusSummary
  answerPreview
  isUnread
  updatedAt
  space {
    spaceUuid
    title
    emoji
    slug
    appearance {
      __typename
      ... on IconAppearance {
        icon
        color
      }
      ... on EmojiAppearance {
        emoji
      }
    }
  }
  topAssets {
    id
    assetType
    name
    slug
    backendUUID
    isPrimary
    previewURL
    externalMetadata {
      url
    }
  }
  attachmentURLs
  taskSchedule {
    wakeAt
    nextRun
    hasCron
    recurringCronState
    automations {
      id
      state
    }
  }
}
`}}})();M.hash=`88ce6bc76fbf5ebbf2bfe5a72c5cc732`;var N={LibraryRecentThreadsUpdatesRelaySubscription:{operationName:`LibraryRecentThreadsUpdatesRelaySubscription`,sha256Hash:`88774fb26e91e12b4aa16d56df3158e74f8bfb6100aa329d135999af7a2dc00f`,text:`subscription LibraryRecentThreadsUpdatesRelaySubscription($first: Int) {
	sidebarRecentThreads(first: $first) {
		id
		type
		threads(first: $first) {
			edges {
				cursor
				node {
					...LibraryThreadFields
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
fragment LibraryThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	mode
	variant
	displayModel {
		modelID
	}
	isPinned
	isArchived
	name
	status
	statusSummary
	answerPreview
	isUnread
	updatedAt
	space {
		spaceUuid
		title
		emoji
		slug
		appearance {
			__typename
			... on IconAppearance {
				icon
				color
			}
			... on EmojiAppearance {
				emoji
			}
		}
	}
	topAssets {
		id
		assetType
		name
		slug
		backendUUID
		isPrimary
		previewURL
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},LibraryThreadsRelayQuery:{operationName:`LibraryThreadsRelayQuery`,sha256Hash:`1c1f9e86416eddf3dfed6ede99575a5cc241b59cf079f2e9295ed927f2908006`,text:`query LibraryThreadsRelayQuery($includeSearchPreview: Boolean!, $searchTerm: String, $sortOrder: ThreadSortOrder, $statuses: [ThreadStatus!], $threadTypes: [ThreadTypeFilter!], $sources: [ThreadSourceFilter!], $includeTemporary: Boolean) {
	viewer {
		...LibraryRecentThreads_viewer_3f0Y5L
	}
}
fragment LibraryQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment LibraryRecentThreads_viewer_3f0Y5L on Viewer {
	recentGroup: threadGroup(type: RECENT, filter: {modes:[],searchTerm:$searchTerm,library:{sortOrder:$sortOrder,statuses:$statuses,threadTypes:$threadTypes,sources:$sources,includeTemporary:$includeTemporary}}) {
		id
		type
		threads(first: 25) {
			edges {
				cursor
				...LibraryQueryEdgeFields_JxMfA
				node {
					...LibraryThreadFields
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
fragment LibraryThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	mode
	variant
	displayModel {
		modelID
	}
	isPinned
	isArchived
	name
	status
	statusSummary
	answerPreview
	isUnread
	updatedAt
	space {
		spaceUuid
		title
		emoji
		slug
		appearance {
			__typename
			... on IconAppearance {
				icon
				color
			}
			... on EmojiAppearance {
				emoji
			}
		}
	}
	topAssets {
		id
		assetType
		name
		slug
		backendUUID
		isPrimary
		previewURL
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},LibraryRecentThreadsPaginationQuery:{operationName:`LibraryRecentThreadsPaginationQuery`,sha256Hash:`e207cce86b2c9b67fca3ea7d8450d675ec86c0c429b38e42e88f3b027e7c8729`,text:`query LibraryRecentThreadsPaginationQuery($count: Int = 25, $cursor: String, $includeSearchPreview: Boolean!, $includeTemporary: Boolean, $searchTerm: String, $sortOrder: ThreadSortOrder, $sources: [ThreadSourceFilter!], $statuses: [ThreadStatus!], $threadTypes: [ThreadTypeFilter!]) {
	viewer {
		...LibraryRecentThreads_viewer_2rZMOI
	}
}
fragment LibraryQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment LibraryRecentThreads_viewer_2rZMOI on Viewer {
	recentGroup: threadGroup(type: RECENT, filter: {modes:[],searchTerm:$searchTerm,library:{sortOrder:$sortOrder,statuses:$statuses,threadTypes:$threadTypes,sources:$sources,includeTemporary:$includeTemporary}}) {
		id
		type
		threads(first: $count, after: $cursor) {
			edges {
				cursor
				...LibraryQueryEdgeFields_JxMfA
				node {
					...LibraryThreadFields
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
fragment LibraryThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	mode
	variant
	displayModel {
		modelID
	}
	isPinned
	isArchived
	name
	status
	statusSummary
	answerPreview
	isUnread
	updatedAt
	space {
		spaceUuid
		title
		emoji
		slug
		appearance {
			__typename
			... on IconAppearance {
				icon
				color
			}
			... on EmojiAppearance {
				emoji
			}
		}
	}
	topAssets {
		id
		assetType
		name
		slug
		backendUUID
		isPrimary
		previewURL
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`}},P=e(t(),1),F=u(),I=new Map,L={search:`SEARCH`,research:`RESEARCH`,labs:`LABS`,model_council:`MODEL_COUNCIL`,asi:`ASI`,assistant:`BUSINESS_ASSISTANT`},te={comet:`COMET`,non_comet:`NON_COMET`,health:`HEALTH`,meeting_notes:`MEETING_NOTES`,computer_dream:`COMPUTER_DREAM`};function ne(){return(0,P.useMemo)(()=>ce(!0),[!0])}function re(e,t){return(0,F.loadQuery)(e,M,t,{fetchPolicy:`store-or-network`})}function ie(e){let t=e.searchTerm.trim();return{includeSearchPreview:t.length>0,searchTerm:t.length>0?t:null,sortOrder:e.ascending?`OLDEST`:`NEWEST`,statuses:null,threadTypes:oe(e.threadType),sources:se(e.source),includeTemporary:e.showTemporary?null:!1}}function ae(e){return e.searchTerm.trim().length===0&&e.source===`all`&&e.threadType===`all`&&e.showTemporary&&!e.ascending}function oe(e){return e===`all`?null:e===`local`?[`ASI`]:[L[e]]}function se(e){return e===`all`?null:[te[e]]}function ce(e){let t=I.get(e);if(t)return t;let n=h({persistedOperations:N,usePersistedQuery:e});return I.set(e,n),n}function le(e,t){if(t===`ARTICLE`)return`article`;if(e===`COMPUTER`)return`asi`}var R={href:e=>{let t=e.entryId??e.contextUUID;if(t)return D({entryUuid:t,mode:e.mode,variant:e.variant});let n=e.slug?.trim();if(!n)return``;let r=encodeURIComponent(n);return e.variant===`ARTICLE`?c(`/page/${r}`):e.mode===`COMPUTER`?c(`/computer/tasks/${r}`):c(`/search/${r}`)},mode:e=>le(e.mode,e.variant),source:null,displayModel:e=>e.displayModel?.modelID??null};function z(e,t){return C(e,{untitledTaskTitle:t,presentation:R})}function B(e,t){return[{threads:e.map(e=>z(e,t))}]}var V={href:(e,t)=>t?c(`/computer/tasks/${encodeURIComponent(t)}`):``,mode:()=>`asi`,source:null,displayModel:()=>null};function H(e){return e.source===`all`&&(e.threadType===`all`||e.threadType===`asi`||e.threadType===`local`)}function U({threads:e,localRows:t,filters:n,untitledTitle:r,hasNextPage:i}){if(!H(n))return n.threadType===`local`?[]:e;let a=g(n.searchTerm),o=y(t).filter(e=>v(e,a)).map(T).filter(e=>e!==null).map(e=>C(e,{untitledTaskTitle:r,presentation:V}));if(n.threadType===`local`)return[...o].sort((e,t)=>n.ascending?e.lastUpdated.localeCompare(t.lastUpdated):t.lastUpdated.localeCompare(e.lastUpdated));let s=i&&e.length>0?e[e.length-1].lastUpdated:null,c=s===null?o:o.filter(e=>n.ascending?e.lastUpdated<=s:e.lastUpdated>=s);if(c.length===0)return e;let l=[...e];for(let e of c){if(l.some(t=>t.contextUUID===e.contextUUID))continue;let t=l.findIndex(t=>n.ascending?t.lastUpdated>e.lastUpdated:t.lastUpdated<e.lastUpdated);l.splice(t===-1?l.length:t,0,e)}return l}var ue=3e4;function de(e,t,n,r=Date.now()){let i=new Set(e.flatMap(W)),a=fe(e,t),o=new Set(a.map(e=>e.listKey)),s=new Map(a.map(e=>[e.listKey,{thread:e,cachedAt:r}])),c=[];for(let[e,t]of n){if(o.has(e)||r-t.cachedAt>ue||W(t.thread).some(e=>i.has(e)))continue;let n=t.thread.threadStatus===`completed`?t.thread:{...t.thread,threadStatus:`completed`};s.set(e,{thread:n,cachedAt:t.cachedAt}),c.push(n)}let l=[...a,...c];return{threads:l.length>0?[...l,...e]:e,cache:s}}function fe(e,t){let n=new Set(e.flatMap(W));return t.map(pe).filter(e=>{let t=W(e);return t.length>0&&t.every(e=>!n.has(e))})}function W(e){return[e.listKey,e.contextUUID,e.slug,e.entryUUID].filter(e=>!!e)}function pe(e){return{...E(e),listKey:e.frontendContextUUID??e.contextUUID??e.entryUUID??e.slug??``}}var G={kind:`InlineDataFragment`,name:`LibraryQueryEdgeFields`};G.hash=`9e7d8934a7aff047a2725375c362eb03`;var K=(function(){var e=[{defaultValue:25,kind:`LocalArgument`,name:`count`},{defaultValue:null,kind:`LocalArgument`,name:`cursor`},{defaultValue:null,kind:`LocalArgument`,name:`includeSearchPreview`},{defaultValue:null,kind:`LocalArgument`,name:`includeTemporary`},{defaultValue:null,kind:`LocalArgument`,name:`searchTerm`},{defaultValue:null,kind:`LocalArgument`,name:`sortOrder`},{defaultValue:null,kind:`LocalArgument`,name:`sources`},{defaultValue:null,kind:`LocalArgument`,name:`statuses`},{defaultValue:null,kind:`LocalArgument`,name:`threadTypes`}],t={kind:`Variable`,name:`includeTemporary`,variableName:`includeTemporary`},n={kind:`Variable`,name:`searchTerm`,variableName:`searchTerm`},r={kind:`Variable`,name:`sortOrder`,variableName:`sortOrder`},i={kind:`Variable`,name:`sources`,variableName:`sources`},a={kind:`Variable`,name:`statuses`,variableName:`statuses`},o={kind:`Variable`,name:`threadTypes`,variableName:`threadTypes`},s={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},c=[{kind:`Variable`,name:`after`,variableName:`cursor`},{kind:`Variable`,name:`first`,variableName:`count`}],l={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null},u={alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},f={alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null};return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`LibraryRecentThreadsPaginationQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{args:[{kind:`Variable`,name:`count`,variableName:`count`},{kind:`Variable`,name:`cursor`,variableName:`cursor`},{kind:`Variable`,name:`includeSearchPreview`,variableName:`includeSearchPreview`},t,n,r,i,a,o],kind:`FragmentSpread`,name:`LibraryRecentThreads_viewer`}],storageKey:null}],type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`LibraryRecentThreadsPaginationQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{alias:`recentGroup`,args:[{fields:[{fields:[t,r,i,a,o],kind:`ObjectValue`,name:`library`},{kind:`Literal`,name:`modes`,value:[]},n],kind:`ObjectValue`,name:`filter`},{kind:`Literal`,name:`type`,value:`RECENT`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[s,{alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},{alias:null,args:c,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{condition:`includeSearchPreview`,kind:`Condition`,passingValue:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`searchPreview`,storageKey:null}]},{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[s,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`readWriteToken`,storageKey:null},l,{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,concreteType:`DisplayModel`,kind:`LinkedField`,name:`displayModel`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`modelID`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPinned`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isArchived`,storageKey:null},u,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`statusSummary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},d,l,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[f,{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[d],type:`EmojiAppearance`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ThreadAsset`,kind:`LinkedField`,name:`topAssets`,plural:!0,selections:[s,{alias:null,args:null,kind:`ScalarField`,name:`assetType`,storageKey:null},u,l,{alias:null,args:null,kind:`ScalarField`,name:`backendUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPrimary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`previewURL`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAssetExternalMetadata`,kind:`LinkedField`,name:`externalMetadata`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`attachmentURLs`,storageKey:null},{alias:null,args:null,concreteType:`ThreadTaskSchedule`,kind:`LinkedField`,name:`taskSchedule`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`wakeAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`nextRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasCron`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`recurringCronState`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAutomation`,kind:`LinkedField`,name:`automations`,plural:!0,selections:[s,{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null}],storageKey:null}],storageKey:null},f],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:c,filters:null,handle:`connection`,key:`LibraryRecentThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null}],storageKey:null}]},params:{cacheID:`77730e39d55b47e9885ba6f9d5d0c052`,id:`e674860e2a53fc5cc788efcd4f0c843d2a9efb118c29c5c116da439f97e7719f`,metadata:{},name:`LibraryRecentThreadsPaginationQuery`,operationKind:`query`,text:`query LibraryRecentThreadsPaginationQuery(
  $count: Int = 25
  $cursor: String
  $includeSearchPreview: Boolean!
  $includeTemporary: Boolean
  $searchTerm: String
  $sortOrder: ThreadSortOrder
  $sources: [ThreadSourceFilter!]
  $statuses: [ThreadStatus!]
  $threadTypes: [ThreadTypeFilter!]
) {
  viewer {
    ...LibraryRecentThreads_viewer_2rZMOI
  }
}

fragment LibraryQueryEdgeFields_JxMfA on ThreadEdge {
  searchPreview @include(if: $includeSearchPreview)
}

fragment LibraryRecentThreads_viewer_2rZMOI on Viewer {
  recentGroup: threadGroup(type: RECENT, filter: {modes: [], searchTerm: $searchTerm, library: {sortOrder: $sortOrder, statuses: $statuses, threadTypes: $threadTypes, sources: $sources, includeTemporary: $includeTemporary}}) {
    id
    type
    threads(first: $count, after: $cursor) {
      edges {
        cursor
        ...LibraryQueryEdgeFields_JxMfA
        node {
          ...LibraryThreadFields
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

fragment LibraryThreadFields on Thread {
  id
  contextUUID
  entryId
  readWriteToken
  slug
  mode
  variant
  displayModel {
    modelID
  }
  isPinned
  isArchived
  name
  status
  statusSummary
  answerPreview
  isUnread
  updatedAt
  space {
    spaceUuid
    title
    emoji
    slug
    appearance {
      __typename
      ... on IconAppearance {
        icon
        color
      }
      ... on EmojiAppearance {
        emoji
      }
    }
  }
  topAssets {
    id
    assetType
    name
    slug
    backendUUID
    isPrimary
    previewURL
    externalMetadata {
      url
    }
  }
  attachmentURLs
  taskSchedule {
    wakeAt
    nextRun
    hasCron
    recurringCronState
    automations {
      id
      state
    }
  }
}
`}}})();K.hash=`c714d58dbaac311d7c928bb351e076d7`;var q=(function(){var e={defaultValue:null,kind:`LocalArgument`,name:`includeSearchPreview`},t=[`recentGroup`,`threads`],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},a={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null};return{argumentDefinitions:[{defaultValue:25,kind:`LocalArgument`,name:`count`},{defaultValue:null,kind:`LocalArgument`,name:`cursor`},e,{defaultValue:null,kind:`LocalArgument`,name:`includeTemporary`},{defaultValue:null,kind:`LocalArgument`,name:`searchTerm`},{defaultValue:null,kind:`LocalArgument`,name:`sortOrder`},{defaultValue:null,kind:`LocalArgument`,name:`sources`},{defaultValue:null,kind:`LocalArgument`,name:`statuses`},{defaultValue:null,kind:`LocalArgument`,name:`threadTypes`}],kind:`Fragment`,metadata:{connection:[{count:`count`,cursor:`cursor`,direction:`forward`,path:t}],refetch:{connection:{forward:{count:`count`,cursor:`cursor`},backward:null,path:t},fragmentPathInResult:[`viewer`],operation:K}},name:`LibraryRecentThreads_viewer`,selections:[{alias:`recentGroup`,args:[{fields:[{fields:[{kind:`Variable`,name:`includeTemporary`,variableName:`includeTemporary`},{kind:`Variable`,name:`sortOrder`,variableName:`sortOrder`},{kind:`Variable`,name:`sources`,variableName:`sources`},{kind:`Variable`,name:`statuses`,variableName:`statuses`},{kind:`Variable`,name:`threadTypes`,variableName:`threadTypes`}],kind:`ObjectValue`,name:`library`},{kind:`Literal`,name:`modes`,value:[]},{kind:`Variable`,name:`searchTerm`,variableName:`searchTerm`}],kind:`ObjectValue`,name:`filter`},{kind:`Literal`,name:`type`,value:`RECENT`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},{alias:`threads`,args:null,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`__LibraryRecentThreads_viewer_threads_connection`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{kind:`InlineDataFragmentSpread`,name:`LibraryQueryEdgeFields`,selections:[{condition:`includeSearchPreview`,kind:`Condition`,passingValue:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`searchPreview`,storageKey:null}]}],args:[{kind:`Variable`,name:`includeSearchPreview`,variableName:`includeSearchPreview`}],argumentDefinitions:[e]},{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`LibraryThreadFields`,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`readWriteToken`,storageKey:null},r,{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,concreteType:`DisplayModel`,kind:`LinkedField`,name:`displayModel`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`modelID`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPinned`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isArchived`,storageKey:null},i,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`statusSummary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},a,r,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[o,{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[a],type:`EmojiAppearance`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ThreadAsset`,kind:`LinkedField`,name:`topAssets`,plural:!0,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`assetType`,storageKey:null},i,r,{alias:null,args:null,kind:`ScalarField`,name:`backendUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPrimary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`previewURL`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAssetExternalMetadata`,kind:`LinkedField`,name:`externalMetadata`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`attachmentURLs`,storageKey:null},{alias:null,args:null,concreteType:`ThreadTaskSchedule`,kind:`LinkedField`,name:`taskSchedule`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`wakeAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`nextRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasCron`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`recurringCronState`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAutomation`,kind:`LinkedField`,name:`automations`,plural:!0,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null}],storageKey:null}],storageKey:null}],args:null,argumentDefinitions:[]},o],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:`Viewer`,abstractKey:null}})();q.hash=`c714d58dbaac311d7c928bb351e076d7`;var J=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`first`}],t=[{kind:`Variable`,name:`first`,variableName:`first`}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},a={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},s={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},c=[n,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`readWriteToken`,storageKey:null},a,{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,concreteType:`DisplayModel`,kind:`LinkedField`,name:`displayModel`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`modelID`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPinned`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isArchived`,storageKey:null},o,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`statusSummary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},s,a,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[s],type:`EmojiAppearance`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ThreadAsset`,kind:`LinkedField`,name:`topAssets`,plural:!0,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`assetType`,storageKey:null},o,a,{alias:null,args:null,kind:`ScalarField`,name:`backendUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPrimary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`previewURL`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAssetExternalMetadata`,kind:`LinkedField`,name:`externalMetadata`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`attachmentURLs`,storageKey:null},{alias:null,args:null,concreteType:`ThreadTaskSchedule`,kind:`LinkedField`,name:`taskSchedule`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`wakeAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`nextRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasCron`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`recurringCronState`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAutomation`,kind:`LinkedField`,name:`automations`,plural:!0,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null}],storageKey:null}],storageKey:null}],l={alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`LibraryRecentThreadsUpdatesRelaySubscription`,selections:[{alias:null,args:t,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`sidebarRecentThreads`,plural:!1,selections:[n,r,{alias:null,args:t,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[i,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`LibraryThreadFields`,selections:c,args:null,argumentDefinitions:[]}],storageKey:null}],storageKey:null},l],storageKey:null}],storageKey:null}],type:`Subscription`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`LibraryRecentThreadsUpdatesRelaySubscription`,selections:[{alias:null,args:t,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`sidebarRecentThreads`,plural:!1,selections:[n,r,{alias:null,args:t,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[i,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:c,storageKey:null}],storageKey:null},l],storageKey:null}],storageKey:null}]},params:{cacheID:`e9d4276ffa9cba8124e7f918552870d5`,id:`9b9d52ad18eb3f2f96ba7b7fcfc04080ae336a0e300a3172ce73a7a4868ce107`,metadata:{},name:`LibraryRecentThreadsUpdatesRelaySubscription`,operationKind:`subscription`,text:`subscription LibraryRecentThreadsUpdatesRelaySubscription(
  $first: Int
) {
  sidebarRecentThreads(first: $first) {
    id
    type
    threads(first: $first) {
      edges {
        cursor
        node {
          ...LibraryThreadFields
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

fragment LibraryThreadFields on Thread {
  id
  contextUUID
  entryId
  readWriteToken
  slug
  mode
  variant
  displayModel {
    modelID
  }
  isPinned
  isArchived
  name
  status
  statusSummary
  answerPreview
  isUnread
  updatedAt
  space {
    spaceUuid
    title
    emoji
    slug
    appearance {
      __typename
      ... on IconAppearance {
        icon
        color
      }
      ... on EmojiAppearance {
        emoji
      }
    }
  }
  topAssets {
    id
    assetType
    name
    slug
    backendUUID
    isPrimary
    previewURL
    externalMetadata {
      url
    }
  }
  attachmentURLs
  taskSchedule {
    wakeAt
    nextRun
    hasCron
    recurringCronState
    automations {
      id
      state
    }
  }
}
`}}})();J.hash=`667499588d56b0dfb2804217a3da4017`;var Y={kind:`InlineDataFragment`,name:`LibraryThreadFields`};Y.hash=`3682a822a2737d7db76b7cd405ec7977`;var X=25,Z={first:X},me=`library-threads-loaded`;function he({chrome:e,filterBar:t,emptyState:n,resetSelectionOn:r,selectionBridge:i,scrollContainerRef:a,streamingThreads:o}){let s=ne(),{ascending:c,searchTerm:l,showTemporary:u,source:d,threadType:f}=e,p=ae(e),m=(0,P.useMemo)(()=>ie({ascending:c,searchTerm:l,showTemporary:u,source:d,threadType:f}),[c,l,u,d,f]),[h,g]=(0,P.useState)(null);return(0,P.useEffect)(()=>{let e=re(s,m);return g({variables:m,queryRef:e}),()=>e.dispose()},[s,m]),h?.variables===m?(0,O.jsx)(ge,{environment:s,chrome:e,preloadedQueryRef:h.queryRef,filterBar:t,emptyState:n,resetSelectionOn:r,selectionBridge:i,scrollContainerRef:a,liveUpdatesEnabled:p,streamingThreads:o}):(0,O.jsx)(Q,{filterBar:t,resetOn:r,selectionBridge:i,scrollContainerRef:a,children:(0,O.jsx)(S.Skeleton,{})})}function ge({environment:e,...t}){return(0,O.jsx)(F.RelayEnvironmentProvider,{environment:e,children:(0,O.jsx)(s,{fallback:({resetErrorBoundary:e})=>(0,O.jsx)(Q,{filterBar:t.filterBar,resetOn:t.resetSelectionOn,selectionBridge:t.selectionBridge,scrollContainerRef:t.scrollContainerRef,children:(0,O.jsx)(S.Error,{onRetry:e})}),children:(0,O.jsx)(P.Suspense,{fallback:(0,O.jsx)(Q,{filterBar:t.filterBar,resetOn:t.resetSelectionOn,selectionBridge:t.selectionBridge,scrollContainerRef:t.scrollContainerRef,children:(0,O.jsx)(S.Skeleton,{})}),children:(0,O.jsx)($,{...t})})})})}function Q({children:e,filterBar:t,resetOn:n,sections:r=b,optimisticMutations:i,selectionBridge:a,scrollContainerRef:o}){return(0,O.jsxs)(S.Root,{sections:r,cells:w,actions:x,resetOn:n,optimisticMutations:i,children:[a,(0,O.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col`,children:[t,(0,O.jsx)(`div`,{ref:o,className:`min-h-0 flex-1 overflow-auto scrollbar-subtle`,children:e})]})]})}function $({chrome:e,preloadedQueryRef:t,filterBar:n,emptyState:a,resetSelectionOn:s,selectionBridge:c,scrollContainerRef:l,liveUpdatesEnabled:u,streamingThreads:f}){let{$t:p}=i(),h=(0,F.useRelayEnvironment)(),{data:g,hasNext:v,isLoadingNext:y,loadNext:b}=(0,F.usePaginationFragment)(q,(0,F.usePreloadedQuery)(M,t).viewer??null),x=g?.recentGroup??null,C=e.searchTerm,w=(0,P.useMemo)(()=>ve(x),[x]);r(me);let T=p({defaultMessage:`Untitled`,id:`6c3942da4d`}),E=(0,P.useRef)(new Map),D=_(),k=(0,P.useMemo)(()=>{let t=U({threads:B(w,T)[0]?.threads??[],localRows:D,filters:{searchTerm:e.searchTerm,ascending:e.ascending,source:e.source,threadType:e.threadType},untitledTitle:T,hasNextPage:v});if(!u)return E.current=new Map,[{threads:t}];let n=de(t,f,E.current);return E.current=n.cache,[{threads:n.threads}]},[e.ascending,e.searchTerm,e.source,e.threadType,v,u,D,w,f,T]),{overrides:j,relayGroupIDs:N}=(0,P.useMemo)(()=>({overrides:new d,relayGroupIDs:{recent:x?.id}}),[x?.id]),I=(0,P.useMemo)(()=>({...m(h,N,j,{connectionKeys:{recent:A}}),setThreadPinned:(e,t)=>_e(h,j,e,t)}),[h,j,N]),L=(0,P.useCallback)(()=>{v&&!y&&b(X)},[v,y,b]);return(0,O.jsxs)(Q,{filterBar:n,resetOn:s,sections:k,optimisticMutations:I,selectionBridge:c,scrollContainerRef:l,children:[u&&x?.id&&(0,O.jsx)(ye,{recentGroupId:x.id,overrides:j}),(0,O.jsx)(S.List,{searchTerm:C,emptyState:a,enableModeCellSelection:!0,openThreadsInNewTab:C.trim().length>0}),y&&(0,O.jsx)(`div`,{className:`flex justify-center py-4`,children:(0,O.jsx)(o,{size:20,color:`quiet`})}),e.threadType!==`local`&&(0,O.jsx)(ee,{loadMore:L,count:w.length})]})}function _e(e,t,n,r){return p(e,n,`library-pinned`,e=>e.setValue(r,`isPinned`),t,(e,t)=>e.get(t)?.getValue(`isPinned`)===r)}function ve(e){return e?.threads?.edges.filter(e=>!!e.node).map(e=>{let t=(0,F.readInlineData)(Y,e.node),n=(0,F.readInlineData)(G,e);return{...t,searchPreview:n.searchPreview}})??[]}function ye({recentGroupId:e,overrides:t}){let n=(0,P.useRef)(void 0);return(0,F.useSubscription)((0,P.useMemo)(()=>({subscription:J,variables:Z,updater:r=>{n.current=j(r,e,n.current,t,Z,({hadNewThread:e,missingQueryConnection:t,missingSubscriptionConnection:n})=>{(e||t||n)&&a.info(`Library GraphQL live update reconciled.`,{hadNewThread:e,missingQueryConnection:t,missingSubscriptionConnection:n})})},onError:e=>{a.warn(`Library GraphQL live updates subscription errored.`,e)},onCompleted:()=>{a.warn(`Library GraphQL live updates subscription completed.`)}}),[e,t])),null}export{he as LibraryThreadsGraphQLContainer};
//# sourceMappingURL=LibraryThreadsGraphQL-CxsQIsB5.js.map
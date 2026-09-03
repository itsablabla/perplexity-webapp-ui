import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{$ as t}from"./vendors-B0VRXiug.js";import{t as n}from"./computerDashboardGraphQLCacheState-BERxXYCs.js";import{n as r,t as i}from"./react-relay-DuJ9gA7S.js";import{t as a}from"./client-iUU9I9sy.js";r();var o=(function(){var e={defaultValue:null,kind:`LocalArgument`,name:`includeActive`},t={defaultValue:null,kind:`LocalArgument`,name:`includeArchived`},n={defaultValue:null,kind:`LocalArgument`,name:`includeScheduled`},r={defaultValue:null,kind:`LocalArgument`,name:`includeSearchPreview`},i={defaultValue:null,kind:`LocalArgument`,name:`includeSpace`},a={defaultValue:null,kind:`LocalArgument`,name:`searchTerm`},o={defaultValue:null,kind:`LocalArgument`,name:`spaceId`},s={kind:`Variable`,name:`includeSearchPreview`,variableName:`includeSearchPreview`},c={kind:`Variable`,name:`searchTerm`,variableName:`searchTerm`},l=[s,c],u={fields:[{kind:`Literal`,name:`modes`,value:[`COMPUTER`]},c],kind:`ObjectValue`,name:`filter`},d={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},f={alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},p=[{kind:`Literal`,name:`first`,value:25}],m={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null},h={alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},g={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},_={alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},v={alias:null,args:p,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{condition:`includeSearchPreview`,kind:`Condition`,passingValue:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`searchPreview`,storageKey:null}]},{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[d,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`readWriteToken`,storageKey:null},m,{alias:null,args:null,kind:`ScalarField`,name:`isPinned`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isArchived`,storageKey:null},h,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`statusSummary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`lockedReason`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},g,m,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[_,{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[g],type:`EmojiAppearance`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ThreadAsset`,kind:`LinkedField`,name:`topAssets`,plural:!0,selections:[d,{alias:null,args:null,kind:`ScalarField`,name:`assetType`,storageKey:null},h,m,{alias:null,args:null,kind:`ScalarField`,name:`backendUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPrimary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`previewURL`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mediaType`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAssetExternalMetadata`,kind:`LinkedField`,name:`externalMetadata`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`attachmentURLs`,storageKey:null},{alias:null,args:null,concreteType:`ThreadTaskSchedule`,kind:`LinkedField`,name:`taskSchedule`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`wakeAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`nextRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`lastRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasCron`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`recurringCronState`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAutomation`,kind:`LinkedField`,name:`automations`,plural:!0,selections:[d,{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null}],storageKey:null}],storageKey:null},_],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null}],storageKey:`threads(first:25)`};return{fragment:{argumentDefinitions:[e,t,n,r,i,a,o],kind:`Fragment`,metadata:null,name:`ComputerDashboardThreadsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{condition:`includeActive`,kind:`Condition`,passingValue:!0,selections:[{args:l,kind:`FragmentSpread`,name:`ComputerDashboardRecentThreads_viewer`},{args:l,kind:`FragmentSpread`,name:`ComputerDashboardNeedsAttentionThreads_viewer`},{args:l,kind:`FragmentSpread`,name:`ComputerDashboardPinnedThreads_viewer`}]},{args:[{kind:`Variable`,name:`includeScheduled`,variableName:`includeScheduled`},s,c],kind:`FragmentSpread`,name:`ComputerDashboardScheduledThreads_viewer`},{condition:`includeArchived`,kind:`Condition`,passingValue:!0,selections:[{args:l,kind:`FragmentSpread`,name:`ComputerDashboardArchivedThreads_viewer`}]},{condition:`includeSpace`,kind:`Condition`,passingValue:!0,selections:[{args:[s,c,{kind:`Variable`,name:`spaceId`,variableName:`spaceId`}],kind:`FragmentSpread`,name:`ComputerDashboardSpaceThreads_viewer`}]}],storageKey:null}],type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:[e,t,n,i,r,a,o],kind:`Operation`,name:`ComputerDashboardThreadsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{condition:`includeActive`,kind:`Condition`,passingValue:!0,selections:[{alias:`recentGroup`,args:[u,{kind:`Literal`,name:`type`,value:`RECENT`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[d,f,v,{alias:null,args:p,filters:null,handle:`connection`,key:`ComputerDashboardRecentThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null},{alias:`needsAttentionGroup`,args:[u,{kind:`Literal`,name:`type`,value:`NEEDS_ATTENTION`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[d,f,v,{alias:null,args:p,filters:null,handle:`connection`,key:`ComputerDashboardNeedsAttentionThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null},{alias:`pinnedGroup`,args:[u,{kind:`Literal`,name:`type`,value:`PINNED`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[d,f,v,{alias:null,args:p,filters:null,handle:`connection`,key:`ComputerDashboardPinnedThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null}]},{condition:`includeScheduled`,kind:`Condition`,passingValue:!0,selections:[{alias:`scheduledGroup`,args:[u,{kind:`Literal`,name:`type`,value:`SCHEDULED`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[d,f,v,{alias:null,args:p,filters:null,handle:`connection`,key:`ComputerDashboardScheduledThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null}]},{condition:`includeArchived`,kind:`Condition`,passingValue:!0,selections:[{alias:`archivedGroup`,args:[u,{kind:`Literal`,name:`type`,value:`ARCHIVED`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[d,f,v,{alias:null,args:p,filters:null,handle:`connection`,key:`ComputerDashboardArchivedThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null}]},{condition:`includeSpace`,kind:`Condition`,passingValue:!0,selections:[{alias:`selectedSpace`,args:[{kind:`Variable`,name:`id`,variableName:`spaceId`}],concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:`allGroup`,args:[u,{kind:`Literal`,name:`type`,value:`ALL`}],concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[d,f,v,{alias:null,args:p,filters:null,handle:`connection`,key:`ComputerDashboardSpaceThreads_viewer_threads`,kind:`LinkedHandle`,name:`threads`}],storageKey:null}],storageKey:null}]}],storageKey:null}]},params:{cacheID:`149f6f74092ae4885aa566c899213668`,id:`e99f46fde448d87c5d209d93f00b7c4bc7a0328ca351b06bf43e7ff60a9cf6cf`,metadata:{},name:`ComputerDashboardThreadsRelayQuery`,operationKind:`query`,text:`query ComputerDashboardThreadsRelayQuery(
  $includeActive: Boolean!
  $includeArchived: Boolean!
  $includeScheduled: Boolean!
  $includeSpace: Boolean!
  $includeSearchPreview: Boolean!
  $searchTerm: String
  $spaceId: ID!
) {
  viewer {
    ...ComputerDashboardRecentThreads_viewer_380ucN @include(if: $includeActive)
    ...ComputerDashboardNeedsAttentionThreads_viewer_380ucN @include(if: $includeActive)
    ...ComputerDashboardPinnedThreads_viewer_380ucN @include(if: $includeActive)
    ...ComputerDashboardScheduledThreads_viewer_PUBhB
    ...ComputerDashboardArchivedThreads_viewer_380ucN @include(if: $includeArchived)
    ...ComputerDashboardSpaceThreads_viewer_3efXNw @include(if: $includeSpace)
  }
}

fragment ComputerDashboardArchivedThreads_viewer_380ucN on Viewer {
  archivedGroup: threadGroup(type: ARCHIVED, filter: {modes: [COMPUTER], searchTerm: $searchTerm}) {
    id
    type
    threads(first: 25) {
      edges {
        cursor
        ...ComputerDashboardQueryEdgeFields_JxMfA
        node {
          ...ComputerDashboardThreadFields
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

fragment ComputerDashboardNeedsAttentionThreads_viewer_380ucN on Viewer {
  needsAttentionGroup: threadGroup(type: NEEDS_ATTENTION, filter: {modes: [COMPUTER], searchTerm: $searchTerm}) {
    id
    type
    threads(first: 25) {
      edges {
        cursor
        ...ComputerDashboardQueryEdgeFields_JxMfA
        node {
          ...ComputerDashboardThreadFields
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

fragment ComputerDashboardPinnedThreads_viewer_380ucN on Viewer {
  pinnedGroup: threadGroup(type: PINNED, filter: {modes: [COMPUTER], searchTerm: $searchTerm}) {
    id
    type
    threads(first: 25) {
      edges {
        cursor
        ...ComputerDashboardQueryEdgeFields_JxMfA
        node {
          ...ComputerDashboardThreadFields
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

fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
  searchPreview @include(if: $includeSearchPreview)
}

fragment ComputerDashboardRecentThreads_viewer_380ucN on Viewer {
  recentGroup: threadGroup(type: RECENT, filter: {modes: [COMPUTER], searchTerm: $searchTerm}) {
    id
    type
    threads(first: 25) {
      edges {
        cursor
        ...ComputerDashboardQueryEdgeFields_JxMfA
        node {
          ...ComputerDashboardThreadFields
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

fragment ComputerDashboardScheduledThreads_viewer_PUBhB on Viewer {
  scheduledGroup: threadGroup(type: SCHEDULED, filter: {modes: [COMPUTER], searchTerm: $searchTerm}) @include(if: $includeScheduled) {
    id
    type
    threads(first: 25) {
      edges {
        cursor
        ...ComputerDashboardQueryEdgeFields_JxMfA
        node {
          ...ComputerDashboardThreadFields
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

fragment ComputerDashboardSpaceThreads_viewer_3efXNw on Viewer {
  selectedSpace: space(id: $spaceId) {
    allGroup: threadGroup(type: ALL, filter: {modes: [COMPUTER], searchTerm: $searchTerm}) {
      id
      type
      threads(first: 25) {
        edges {
          cursor
          ...ComputerDashboardQueryEdgeFields_JxMfA
          node {
            ...ComputerDashboardThreadFields
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
}

fragment ComputerDashboardThreadFields on Thread {
  id
  contextUUID
  entryId
  readWriteToken
  slug
  isPinned
  isArchived
  name
  status
  statusSummary
  lockedReason
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
    mediaType
    externalMetadata {
      url
    }
  }
  attachmentURLs
  taskSchedule {
    wakeAt
    nextRun
    lastRun
    hasCron
    recurringCronState
    automations {
      id
      state
    }
  }
}
`}}})();o.hash=`851eeee1e9c0c0d630f5df912b063578`;var s={ComputerDashboardSpaceThreadsPaginationQuery:{operationName:`ComputerDashboardSpaceThreadsPaginationQuery`,sha256Hash:`96a5e4e56acee6c3ad092befdfefc3d703d8b246a534b48c1773af5cc96a3d11`,text:`query ComputerDashboardSpaceThreadsPaginationQuery($count: Int = 25, $cursor: String, $includeSearchPreview: Boolean!, $searchTerm: String, $spaceId: ID!) {
	viewer {
		...ComputerDashboardSpaceThreads_viewer_3x44lN
	}
}
fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment ComputerDashboardSpaceThreads_viewer_3x44lN on Viewer {
	selectedSpace: space(id: $spaceId) {
		allGroup: threadGroup(type: ALL, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
			id
			type
			threads(first: $count, after: $cursor) {
				edges {
					cursor
					...ComputerDashboardQueryEdgeFields_JxMfA
					node {
						...ComputerDashboardThreadFields
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
}
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},SpaceProjectThreadsUpdatesRelaySubscription:{operationName:`SpaceProjectThreadsUpdatesRelaySubscription`,sha256Hash:`872b164e2ba48946e513fa5cb1a024636cc0326a357b9d14595dabc38cd91eef`,text:`subscription SpaceProjectThreadsUpdatesRelaySubscription($spaceId: ID!, $first: Int) {
	space(id: $spaceId) {
		threadGroup(type: ALL, filter: {modes:[],project:{}}) {
			id
			type
			threads(first: $first) {
				edges {
					cursor
					node {
						...SpaceProjectThreadFields
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
}
fragment SpaceProjectThreadFields on Thread {
	id
	contextUUID
	frontendContextUUID
	entryId
	readWriteToken
	name
	slug
	mode
	variant
	displayModel {
		modelID
	}
	updatedAt
	status
	statusSummary
	answerPreview
	isUnread
	isArchived
	access
	author {
		name
		username
		avatarUrl
	}
	space {
		spaceUuid
		title
		slug
	}
	topAssets {
		id
		assetType
		name
		slug
		backendUUID
		isPrimary
		previewURL
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		hasCron
		automations {
			id
			state
		}
	}
}`},SidebarRecentThreadsRelayQuery:{operationName:`SidebarRecentThreadsRelayQuery`,sha256Hash:`54fe025c6b86507e78086a4a1b11a39818b6102d3d7fb7bc6bf9f36f06c6669e`,text:`query SidebarRecentThreadsRelayQuery($first: Int) {
	viewer {
		sidebarRecentThreads(first: $first) {
			id
			type
			threads(first: $first) {
				edges {
					cursor
					node {
						id
						contextUUID
						frontendContextUUID
						entryId
						name
						mode
						variant
						status
						answerPreview
						space {
							title
							emoji
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
							spaceUuid
						}
						isUnread
						updatedAt
					}
				}
			}
		}
	}
}`},SpaceProjectThreadsRelayQuery:{operationName:`SpaceProjectThreadsRelayQuery`,sha256Hash:`db13bf755b93bc2645f536609fb6e70c4f7da4093a93fa103d9fa109bb31d066`,text:`query SpaceProjectThreadsRelayQuery($spaceId: ID!, $ownThreadsOnly: Boolean, $searchTerm: String, $groupType: ThreadGroupType!, $count: Int, $cursor: String) {
	viewer {
		space(id: $spaceId) {
			threadGroup(type: $groupType, filter: {modes:[],searchTerm:$searchTerm,project:{ownThreadsOnly:$ownThreadsOnly}}) {
				id
				threads(first: $count, after: $cursor) {
					edges {
						cursor
						node {
							...SpaceProjectThreadFields
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
	}
}
fragment SpaceProjectThreadFields on Thread {
	id
	contextUUID
	frontendContextUUID
	entryId
	readWriteToken
	name
	slug
	mode
	variant
	displayModel {
		modelID
	}
	updatedAt
	status
	statusSummary
	answerPreview
	isUnread
	isArchived
	access
	author {
		name
		username
		avatarUrl
	}
	space {
		spaceUuid
		title
		slug
	}
	topAssets {
		id
		assetType
		name
		slug
		backendUUID
		isPrimary
		previewURL
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		hasCron
		automations {
			id
			state
		}
	}
}`},ComputerDashboardNeedsAttentionThreadsPaginationQuery:{operationName:`ComputerDashboardNeedsAttentionThreadsPaginationQuery`,sha256Hash:`c07c9a008688b807558ad0864d812c0a7a241139f6bb0d984ffb21f69f0ffea2`,text:`query ComputerDashboardNeedsAttentionThreadsPaginationQuery($count: Int = 25, $cursor: String, $includeSearchPreview: Boolean!, $searchTerm: String) {
	viewer {
		...ComputerDashboardNeedsAttentionThreads_viewer_2LHxx8
	}
}
fragment ComputerDashboardNeedsAttentionThreads_viewer_2LHxx8 on Viewer {
	needsAttentionGroup: threadGroup(type: NEEDS_ATTENTION, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: $count, after: $cursor) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},SidebarRecentItemsRelayQuery:{operationName:`SidebarRecentItemsRelayQuery`,sha256Hash:`7d723f9afd24d749d5d326bb0c7867b84b7d71cc4cb2b5f2e3b71b702ae942fd`,text:`query SidebarRecentItemsRelayQuery($first: Int) {
	viewer {
		recentSidebarItems(types: [THREAD,AUTOMATION]) {
			id
			items(first: $first) {
				edges {
					node {
						...SidebarRecentItemFields
					}
				}
			}
		}
	}
}
fragment SidebarRecentItemFields on RecentSidebarItem {
	title
	activityAt
	object {
		__typename
		... on Thread {
			id
			contextUUID
			entryId
			mode
			variant
			status
			answerPreview
			isUnread
			updatedAt
			space {
				spaceUuid
				title
				emoji
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
		}
		... on Automation {
			id
			automationId
			collectionUUID
			state
			isPinned
			latestRun {
				id
				contextUUID
				status
				thread {
					id
					contextUUID
					status
					isUnread
					answerPreview
				}
			}
		}
	}
}`},ComputerDashboardScheduledThreadsPaginationQuery:{operationName:`ComputerDashboardScheduledThreadsPaginationQuery`,sha256Hash:`d5d2c0258e26fc2788de956fe01023171a065acaef06ba3c51b7d64c96d4f460`,text:`query ComputerDashboardScheduledThreadsPaginationQuery($count: Int = 25, $cursor: String, $includeScheduled: Boolean!, $includeSearchPreview: Boolean!, $searchTerm: String) {
	viewer {
		...ComputerDashboardScheduledThreads_viewer_4C4lkB
	}
}
fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment ComputerDashboardScheduledThreads_viewer_4C4lkB on Viewer {
	scheduledGroup: threadGroup(type: SCHEDULED, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) @include(if: $includeScheduled) {
		id
		type
		threads(first: $count, after: $cursor) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},SidebarRecentThreadsUpdatesRelaySubscription:{operationName:`SidebarRecentThreadsUpdatesRelaySubscription`,sha256Hash:`41422b88457a5138b3c1bbce997e24307525b6ec84bb852e150814ba636541af`,text:`subscription SidebarRecentThreadsUpdatesRelaySubscription($first: Int) {
	sidebarRecentThreads(first: $first) {
		id
		type
		threads(first: $first) {
			edges {
				cursor
				node {
					id
					contextUUID
					frontendContextUUID
					entryId
					name
					mode
					variant
					status
					answerPreview
					space {
						title
						emoji
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
						spaceUuid
					}
					isUnread
					updatedAt
				}
			}
		}
	}
}`},ComputerDashboardRecentThreadsPaginationQuery:{operationName:`ComputerDashboardRecentThreadsPaginationQuery`,sha256Hash:`471ebde0c3e5eb8d948a8d46e32e44ccd0b5518a911f3f3088fed4b5b8c296a7`,text:`query ComputerDashboardRecentThreadsPaginationQuery($count: Int = 25, $cursor: String, $includeSearchPreview: Boolean!, $searchTerm: String) {
	viewer {
		...ComputerDashboardRecentThreads_viewer_2LHxx8
	}
}
fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment ComputerDashboardRecentThreads_viewer_2LHxx8 on Viewer {
	recentGroup: threadGroup(type: RECENT, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: $count, after: $cursor) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},ComputerDashboardArchivedThreadsPaginationQuery:{operationName:`ComputerDashboardArchivedThreadsPaginationQuery`,sha256Hash:`e4fd88c8c9affc1554a221d1bf9756bcce1e54acb9ec893b62e3d3486715807b`,text:`query ComputerDashboardArchivedThreadsPaginationQuery($count: Int = 25, $cursor: String, $includeSearchPreview: Boolean!, $searchTerm: String) {
	viewer {
		...ComputerDashboardArchivedThreads_viewer_2LHxx8
	}
}
fragment ComputerDashboardArchivedThreads_viewer_2LHxx8 on Viewer {
	archivedGroup: threadGroup(type: ARCHIVED, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: $count, after: $cursor) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},SidebarRecentItemsUpdatesRelaySubscription:{operationName:`SidebarRecentItemsUpdatesRelaySubscription`,sha256Hash:`cd3e4e95ceec7f1291ae91315446ab2c351b859242cbcff8168fcc8100d9fd19`,text:`subscription SidebarRecentItemsUpdatesRelaySubscription($first: Int) {
	recentSidebarItems(first: $first, types: [THREAD,AUTOMATION]) {
		id
		items(first: $first) {
			edges {
				node {
					...SidebarRecentItemFields
				}
			}
		}
	}
}
fragment SidebarRecentItemFields on RecentSidebarItem {
	title
	activityAt
	object {
		__typename
		... on Thread {
			id
			contextUUID
			entryId
			mode
			variant
			status
			answerPreview
			isUnread
			updatedAt
			space {
				spaceUuid
				title
				emoji
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
		}
		... on Automation {
			id
			automationId
			collectionUUID
			state
			isPinned
			latestRun {
				id
				contextUUID
				status
				thread {
					id
					contextUUID
					status
					isUnread
					answerPreview
				}
			}
		}
	}
}`},ComputerDashboardThreadGroupsUpdatesRelaySubscription:{operationName:`ComputerDashboardThreadGroupsUpdatesRelaySubscription`,sha256Hash:`8b77bfecbe7fb8b4fc97da2d9569160e271b1eb48fef8d3610d928f566e56ff0`,text:`subscription ComputerDashboardThreadGroupsUpdatesRelaySubscription($first: Int) {
	computerDashboardThreadGroups(first: $first) {
		id
		type
		threads(first: $first) {
			edges {
				cursor
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},ComputerDashboardThreadsRelayQuery:{operationName:`ComputerDashboardThreadsRelayQuery`,sha256Hash:`1a39dee569b45e1bd0cafc9a6536da8aefd9c478e5bf369d278f5eff3f522f71`,text:`query ComputerDashboardThreadsRelayQuery($includeActive: Boolean!, $includeArchived: Boolean!, $includeScheduled: Boolean!, $includeSpace: Boolean!, $includeSearchPreview: Boolean!, $searchTerm: String, $spaceId: ID!) {
	viewer {
		...ComputerDashboardRecentThreads_viewer_380ucN @include(if: $includeActive)
		...ComputerDashboardNeedsAttentionThreads_viewer_380ucN @include(if: $includeActive)
		...ComputerDashboardPinnedThreads_viewer_380ucN @include(if: $includeActive)
		...ComputerDashboardScheduledThreads_viewer_PUBhB
		...ComputerDashboardArchivedThreads_viewer_380ucN @include(if: $includeArchived)
		...ComputerDashboardSpaceThreads_viewer_3efXNw @include(if: $includeSpace)
	}
}
fragment ComputerDashboardArchivedThreads_viewer_380ucN on Viewer {
	archivedGroup: threadGroup(type: ARCHIVED, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: 25) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardNeedsAttentionThreads_viewer_380ucN on Viewer {
	needsAttentionGroup: threadGroup(type: NEEDS_ATTENTION, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: 25) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardPinnedThreads_viewer_380ucN on Viewer {
	pinnedGroup: threadGroup(type: PINNED, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: 25) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment ComputerDashboardRecentThreads_viewer_380ucN on Viewer {
	recentGroup: threadGroup(type: RECENT, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: 25) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardScheduledThreads_viewer_PUBhB on Viewer {
	scheduledGroup: threadGroup(type: SCHEDULED, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) @include(if: $includeScheduled) {
		id
		type
		threads(first: 25) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardSpaceThreads_viewer_3efXNw on Viewer {
	selectedSpace: space(id: $spaceId) {
		allGroup: threadGroup(type: ALL, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
			id
			type
			threads(first: 25) {
				edges {
					cursor
					...ComputerDashboardQueryEdgeFields_JxMfA
					node {
						...ComputerDashboardThreadFields
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
}
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`},ComputerDashboardPinnedThreadsPaginationQuery:{operationName:`ComputerDashboardPinnedThreadsPaginationQuery`,sha256Hash:`ef0c4fdf76311c15b6f68e325a0e879ca548ed483a6c8879407a3c36751a6400`,text:`query ComputerDashboardPinnedThreadsPaginationQuery($count: Int = 25, $cursor: String, $includeSearchPreview: Boolean!, $searchTerm: String) {
	viewer {
		...ComputerDashboardPinnedThreads_viewer_2LHxx8
	}
}
fragment ComputerDashboardPinnedThreads_viewer_2LHxx8 on Viewer {
	pinnedGroup: threadGroup(type: PINNED, filter: {modes:[COMPUTER],searchTerm:$searchTerm}) {
		id
		type
		threads(first: $count, after: $cursor) {
			edges {
				cursor
				...ComputerDashboardQueryEdgeFields_JxMfA
				node {
					...ComputerDashboardThreadFields
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
fragment ComputerDashboardQueryEdgeFields_JxMfA on ThreadEdge {
	searchPreview @include(if: $includeSearchPreview)
}
fragment ComputerDashboardThreadFields on Thread {
	id
	contextUUID
	entryId
	readWriteToken
	slug
	isPinned
	isArchived
	name
	status
	statusSummary
	lockedReason
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
		mediaType
		externalMetadata {
			url
		}
	}
	attachmentURLs
	taskSchedule {
		wakeAt
		nextRun
		lastRun
		hasCron
		recurringCronState
		automations {
			id
			state
		}
	}
}`}},c=e(t(),1),l=i(),u=new Map,d=new WeakMap,f=new WeakSet;function p(){return(0,c.useMemo)(()=>b({usePersistedQuery:!0}),[!0])}function m(){return b({usePersistedQuery:!0})}function h({automationsEnabled:e,environment:t,searchTerm:n,selectedArchiveTab:r,spaceUUID:i}){v(t);let a=x(e,r,n,i);if(a.searchTerm!==null||a.includeSpace)return y(t,a);let o=S(a),s=C(t),c=s.get(o);if(c)return c;let l=y(t,a);return s.set(o,l),l}function g({automationsEnabled:e,environment:t,searchTerm:n,selectedArchiveTab:r,spaceUUID:i}){v(t);let a=x(e,r,n,i),o=y(t,a,f.delete(t)?`network-only`:`store-or-network`);if(a.searchTerm===null&&!a.includeSpace){let e=d.get(t),n=S(a),r=e?.get(n);e?.delete(n),r?.dispose()}return o}function _(e){let t=d.get(e);t?.forEach(e=>e.dispose()),t?.clear(),f.add(e)}function v(e){n()&&_(e)}function y(e,t,n=`store-or-network`){return(0,l.loadQuery)(e,o,t,{fetchPolicy:n})}function b({usePersistedQuery:e}){let t=u.get(e);if(t)return t;let n=a({persistedOperations:s,usePersistedQuery:e});return u.set(e,n),n}function x(e,t,n,r){let i=t===`all`&&r!==null,a=t!==`archived`&&!i;return{includeActive:a,includeArchived:t===`archived`,includeScheduled:a&&!e,includeSpace:i,includeSearchPreview:n.trim().length>0,searchTerm:n.trim().toLowerCase()||null,spaceId:r??``}}function S(e){return[e.includeActive,e.includeArchived,e.includeScheduled].join(`:`)}function C(e){let t=d.get(e);if(t)return t;let n=new Map;return d.set(e,n),n}export{o as a,p as i,g as n,h as r,m as t};
//# sourceMappingURL=graphql-preload-BXRh_MEx.js.map
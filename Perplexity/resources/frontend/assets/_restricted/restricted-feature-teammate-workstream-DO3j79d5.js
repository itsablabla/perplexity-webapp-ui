import{o as e}from"../rolldown-runtime-CNgF_TGW.js";import{$ as t,et as n}from"../vendors-B0VRXiug.js";import{fi as r}from"../platform-core-D8IQmtf1.js";import{u as i}from"../aether-core-6TfbVOZ_.js";import{i as a}from"../pplx-icons-DwPCRnON.js";var o=r({install:{defaultMessage:`Install in GitHub`,id:`bae6c0133f`},addInstallation:{defaultMessage:`Add installation`,id:`490db9b15b`}});function s(e){return e>0?o.addInstallation:o.install}var c=r({open:{defaultMessage:`Open`,id:`a0db6ade21`},draft:{defaultMessage:`Draft`,id:`6acbfb557e`},merged:{defaultMessage:`Merged`,id:`6b9cb73b90`},closed:{defaultMessage:`Closed`,id:`a1a4e96dc2`},blocked:{defaultMessage:`Blocked`,id:`cb8fe6721f`},unknown:{defaultMessage:`Unknown`,id:`23d3246caf`},approved:{defaultMessage:`Approved`,id:`2ac800d6c1`},changesRequested:{defaultMessage:`Changes requested`,id:`84835264e2`},needsYourReview:{defaultMessage:`Needs your review`,id:`c33d38a377`}});function l(e,t=!1){let n=e?.toLowerCase();return n===`open`?t?`draft`:`open`:n===`draft`||n===`merged`||n===`closed`||n===`blocked`?n:t?`draft`:`unknown`}function u(e){switch(e?.toLowerCase()){case`required`:case`review_required`:return`required`;case`approved`:return`approved`;case`changes_requested`:return`changes_requested`;default:return`unknown`}}function d(e,t,n=!1){let r=l(e,n);return{...{open:{badgeVariant:`success`,color:`positive`,icon:a(`git-pull-request`)},draft:{badgeVariant:`neutral`,color:`ultraLight`,icon:a(`git-pull-request-draft`)},merged:{badgeVariant:`info`,color:`super`,icon:a(`git-merge`)},closed:{badgeVariant:`error`,color:`negative`,icon:a(`git-pull-request-closed`)},blocked:{badgeVariant:`warning`,color:`warning`,icon:a(`git-branch`)},unknown:{badgeVariant:`neutral`,color:`ultraLight`,icon:a(`git-pull-request`)}}[r],label:t.formatMessage(c[r])}}var f=`min-w-0 max-w-full [overflow-wrap:anywhere] [word-break:break-word] [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre_code]:!whitespace-pre [&_pre_code]:![overflow-wrap:normal] [&_pre_code]:![word-break:normal] [&_table]:[overflow-wrap:normal] [&_table]:[word-break:normal]`,p={TeammateWorkstreamMessagesListPaginationQuery:{operationName:`TeammateWorkstreamMessagesListPaginationQuery`,sha256Hash:`10e201576da3e966f55351064f93c36f23635210427211f46a9654efdf2c63e3`,text:`query TeammateWorkstreamMessagesListPaginationQuery($after: String, $first: Int = 50, $workstreamId: ID!) {
	viewer {
		...TeammateWorkstreamMessagesList_viewer_3Ae5vl
	}
}
fragment TeammateWorkstreamAssistantMessageRow_message on TeammateWorkstreamAssistantMessage {
	id
	role
	sender
	markdownBody
	mailBeadId
}
fragment TeammateWorkstreamMessagesList_viewer_3Ae5vl on Viewer {
	teammateWorkstream(id: $workstreamId) {
		id
		assistantMessages(first: $first, after: $after) {
			edges {
				cursor
				node {
					id
					...TeammateWorkstreamAssistantMessageRow_message
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},CreateTeammateRelayMutation:{operationName:`CreateTeammateRelayMutation`,sha256Hash:`0ea79c42a8e3e36cecad6c030d087a28f68e1aa342d0c3a8cb68bdbfae77b9f0`,text:`mutation CreateTeammateRelayMutation($input: CreateTeammateInput!) {
	createTeammate(input: $input) {
		teammate {
			collectionUuid
			slug
			title
		}
		userErrors {
			code
			field
			message
		}
	}
}`},LinkTeammatePullRequestToSessionRelayMutation:{operationName:`LinkTeammatePullRequestToSessionRelayMutation`,sha256Hash:`f9208815121187f44546ddfff47939a80067a3218faa12c7269ca7e1f29e27a8`,text:`mutation LinkTeammatePullRequestToSessionRelayMutation($input: LinkTeammatePullRequestToSessionInput!) {
	linkTeammatePullRequestToSession(input: $input) {
		artifactId
		created
		userErrors {
			code
			field
			message
		}
	}
}`},TeammateWorkstreamMessagesPageRelayQuery:{operationName:`TeammateWorkstreamMessagesPageRelayQuery`,sha256Hash:`fe7c779e2f1b51c7a6e317b9ed72f40e41d0772aa5642e769c2c151de81a2f02`,text:`query TeammateWorkstreamMessagesPageRelayQuery($workstreamId: ID!, $first: Int) {
	viewer {
		teammateWorkstream(id: $workstreamId) {
			id
			workstreamSlug
			title
			devboxId
			devboxSlug
			config {
				goal {
					id
					markdownBody
				}
			}
			memory {
				goal {
					id
					markdownBody
				}
				id
			}
		}
		...TeammateWorkstreamMessagesList_viewer_1CjDrz
	}
}
fragment TeammateWorkstreamAssistantMessageRow_message on TeammateWorkstreamAssistantMessage {
	id
	role
	sender
	markdownBody
	mailBeadId
}
fragment TeammateWorkstreamMessagesList_viewer_1CjDrz on Viewer {
	teammateWorkstream(id: $workstreamId) {
		id
		assistantMessages(first: $first) {
			edges {
				cursor
				node {
					id
					...TeammateWorkstreamAssistantMessageRow_message
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},TeammateWorkersPanelPaginationQuery:{operationName:`TeammateWorkersPanelPaginationQuery`,sha256Hash:`2b327bd8283bc6943770f246631b2e4ed4cbc86a01e5fc9f338d2bfbe6a5a27e`,text:`query TeammateWorkersPanelPaginationQuery($after: String, $first: Int = 50, $workspaceId: ID!) {
	viewer {
		...TeammateWorkersPanel_viewer_2H2m50
	}
}
fragment TeammateWorkersPanel_viewer_2H2m50 on Viewer {
	teammateWorkstream(id: $workspaceId) {
		id
		workers(first: $first, after: $after) {
			edges {
				cursor
				node {
					id
					contextUuid
					createdAt
					updatedAt
					expiresAt
					state
					runtime
					runtimeId
					harness
					model {
						id
						displayName
						reasoningEffort
					}
					ownedTasks(first: 3) {
						edges {
							node {
								id
								taskId
								title
							}
						}
						pageInfo {
							hasNextPage
						}
					}
					thread {
						id
						title: name
						slug
						status
					}
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},TeammateWorkstreamActivityListPaginationQuery:{operationName:`TeammateWorkstreamActivityListPaginationQuery`,sha256Hash:`edbc26d0bc6f64e0d88b5ca69293d79826ac53afc706177de308818181170059`,text:`query TeammateWorkstreamActivityListPaginationQuery($after: String, $first: Int = 50, $workstreamId: ID!) {
	viewer {
		...TeammateWorkstreamActivityList_viewer_3Ae5vl
	}
}
fragment TeammateWorkstreamActivityList_viewer_3Ae5vl on Viewer {
	teammateWorkstream(id: $workstreamId) {
		id
		activity(first: $first, after: $after) {
			edges {
				cursor
				node {
					__typename
					id
					...TeammateWorkstreamActivityRow_activity
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}
fragment TeammateWorkstreamActivityRow_activity on TeammateActivityEvent {
	__isTeammateActivityEvent: __typename
	__typename
	id
	actor {
		__typename
		id
		... on TeammateActivityAgentActor {
			agent {
				id
				displayName
				thread {
					id
					slug
				}
			}
		}
		... on TeammateActivitySystemActor {
			displayName
		}
		... on TeammateActivityServiceActor {
			displayName
		}
		... on TeammateActivityUnknownActor {
			displayName
		}
	}
	... on TeammateCreatedActivityEvent {
		snapshot {
			title
		}
	}
	... on TeammateTaskCreatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		snapshot {
			title
			status
		}
	}
	... on TeammateTaskUpdatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		before {
			title
			status
		}
		after {
			title
			status
		}
		changedFields
	}
	... on TeammateTaskLinkCreatedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateTaskLinkDeletedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateMailSentActivityEvent {
		senderAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		recipientAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		snapshot {
			messagePreview
		}
	}
	... on TeammateEnvironmentCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeActivatedActivityEvent {
		id
	}
	... on TeammateUnknownActivityEvent {
		snapshot {
			previewText
		}
	}
	createdAt
}`},TeammateWorkstreamTasksListPaginationQuery:{operationName:`TeammateWorkstreamTasksListPaginationQuery`,sha256Hash:`dd87f62da2af3ec0efca41bedf8564fc32afd9a15222b034c2cf167a5e627572`,text:`query TeammateWorkstreamTasksListPaginationQuery($after: String, $first: Int = 50, $workstreamId: ID!) {
	viewer {
		...TeammateWorkstreamTasksList_viewer_3Ae5vl
	}
}
fragment TeammateProjectPullRequestArtifacts_project on TeammateWorkstream {
	projectPullRequestArtifacts: artifacts(assetTypeFilter: "PULL_REQUEST", first: 100) {
		edges {
			node {
				id
				url
				attachedAt
				task {
					id
					taskId
				}
				pullRequest {
					number
					title
					repository
					id
				}
			}
		}
	}
}
fragment TeammateWorkstreamTasksList_viewer_3Ae5vl on Viewer {
	teammateTasks(collectionUuid: $workstreamId, first: $first, after: $after) {
		edges {
			cursor
			node {
				id
				taskId
				collectionUuid
				threadContextUuid
				worker {
					contextUuid
					id
				}
				title
				description
				status
				createdBy
				createdAt
				updatedAt
				__typename
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
	teammateWorkstream(id: $workstreamId) {
		id
		workstreamSlug
		title
		createdBy
		createdAt
		...TeammateProjectPullRequestArtifacts_project
	}
}`},TeammateGitHubPullRequestCommentsRelayQuery:{operationName:`TeammateGitHubPullRequestCommentsRelayQuery`,sha256Hash:`d2201cbb3325c9ddb906b1f847dcc3bd596dacda681573bec71633166e4bc1d9`,text:`query TeammateGitHubPullRequestCommentsRelayQuery($owner: String!, $repo: String!, $number: Int!, $first: Int) {
	...TeammateGitHubPullRequestComments_query_3x28Ce
}
fragment TeammateGitHubPullRequestComments_query_3x28Ce on Query {
	teammatePullRequestByRepository(owner: $owner, repository: $repo, number: $number) {
		comments(first: $first) {
			edges {
				cursor
				node {
					id
					kind
					author {
						login
						avatarUrl
						url
					}
					markdownBody
					createdAt
					updatedAt
					url
					path
					subjectType
					line
					side
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
		id
	}
}`},TeammateChatWorkersRelaySubscription:{operationName:`TeammateChatWorkersRelaySubscription`,sha256Hash:`09a27ddf30ace0980ae58e4f54eedbc57e5d5ed8f00a36162357c3dbed4a12f5`,text:`subscription TeammateChatWorkersRelaySubscription($workstreamId: ID!, $chatId: ID!, $first: Int) {
	teammateWorkstream(id: $workstreamId) {
		worker(contextUuid: $chatId) {
			id
			contextUuid
			createdAt
			updatedAt
			expiresAt
			state
			runtime
			runtimeId
			harness
			model {
				id
				displayName
				reasoningEffort
			}
			branch
			worktree
			latestPullRequestUrl
			thread {
				id
				name
				status
			}
		}
		chat(chatId: $chatId) {
			...TeammateChatWorkers_chat_3ASum4
			id
			workers(first: $first, stateFilter: ALL) {
				edges {
					node {
						id
						contextUuid
						createdAt
						updatedAt
						expiresAt
						state
						runtime
						runtimeId
						harness
						model {
							id
							displayName
							reasoningEffort
						}
						thread {
							id
							slug
							name
							status
						}
						branch
						worktree
						latestPullRequestUrl
					}
				}
				pageInfo {
					hasNextPage
				}
			}
		}
		id
	}
}
fragment TeammateChatWorkers_chat_3ASum4 on TeammateChat {
	id
	thread {
		id
		contextUUID
	}
	workers(first: $first, stateFilter: ALL) {
		edges {
			node {
				id
				contextUuid
				createdAt
				updatedAt
				expiresAt
				state
				runtime
				runtimeId
				harness
				model {
					id
					displayName
					reasoningEffort
				}
				thread {
					id
					slug
					name
					status
				}
				branch
				worktree
				latestPullRequestUrl
			}
		}
		pageInfo {
			hasNextPage
		}
	}
}`},TeammateProjectArtifactsPanelPaginationQuery:{operationName:`TeammateProjectArtifactsPanelPaginationQuery`,sha256Hash:`a771cb6ae8c031ca37935b263134266a6f4ce882dbd5bca09809f5d09d123d34`,text:`query TeammateProjectArtifactsPanelPaginationQuery($after: String, $first: Int = 50, $workspaceId: ID!) {
	viewer {
		...TeammateProjectArtifactsPanel_viewer_2H2m50
	}
}
fragment TeammateProjectArtifactsPanel_viewer_2H2m50 on Viewer {
	teammateWorkstream(id: $workspaceId) {
		id
		artifacts(first: $first, after: $after) {
			edges {
				cursor
				node {
					id
					asset {
						id
						name
					}
					task {
						id
						taskId
						title
						status
					}
					url
					attachedBy
					attachedAt
					checkedAt
					assetType
					pullRequest {
						number
						title
						state
						isDraft
						author
						repository
						baseBranch
						headBranch
						createdAt
						updatedAt
						mergedAt
						reviewStatus
						id
					}
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}`},TeammateFeedActivityPaginationQuery:{operationName:`TeammateFeedActivityPaginationQuery`,sha256Hash:`8f9c3ccddaec587395f359f79c04237f2f05cb0d39b69c370d1ec074cb51d34a`,text:`query TeammateFeedActivityPaginationQuery($after: String, $first: Int = 50) {
	viewer {
		...TeammateFeedActivity_viewer_2HEEH6
	}
}
fragment TeammateFeedActivity_viewer_2HEEH6 on Viewer {
	teammateActivity(first: $first, after: $after) {
		edges {
			cursor
			node {
				__typename
				id
				workstream {
					id
					workstreamSlug
					title
				}
				...TeammateWorkstreamActivityRow_activity
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}
fragment TeammateWorkstreamActivityRow_activity on TeammateActivityEvent {
	__isTeammateActivityEvent: __typename
	__typename
	id
	actor {
		__typename
		id
		... on TeammateActivityAgentActor {
			agent {
				id
				displayName
				thread {
					id
					slug
				}
			}
		}
		... on TeammateActivitySystemActor {
			displayName
		}
		... on TeammateActivityServiceActor {
			displayName
		}
		... on TeammateActivityUnknownActor {
			displayName
		}
	}
	... on TeammateCreatedActivityEvent {
		snapshot {
			title
		}
	}
	... on TeammateTaskCreatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		snapshot {
			title
			status
		}
	}
	... on TeammateTaskUpdatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		before {
			title
			status
		}
		after {
			title
			status
		}
		changedFields
	}
	... on TeammateTaskLinkCreatedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateTaskLinkDeletedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateMailSentActivityEvent {
		senderAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		recipientAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		snapshot {
			messagePreview
		}
	}
	... on TeammateEnvironmentCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeActivatedActivityEvent {
		id
	}
	... on TeammateUnknownActivityEvent {
		snapshot {
			previewText
		}
	}
	createdAt
}`},TeammateInboxProjectTasksRelayQuery:{operationName:`TeammateInboxProjectTasksRelayQuery`,sha256Hash:`ffcb275a27bf24933a0829a3e17c047632553242fcd3463752afb9ec77950e6f`,text:`query TeammateInboxProjectTasksRelayQuery($workstreamId: ID!, $tasksFirst: Int) {
	viewer {
		teammateTasks(collectionUuid: $workstreamId, first: $tasksFirst) {
			edges {
				node {
					id
					taskId
					collectionUuid
					threadContextUuid
					title
					description
					status
					createdBy
					createdAt
					updatedAt
				}
			}
		}
	}
}`},TeammateEnvironmentSettingsRelayQuery:{operationName:`TeammateEnvironmentSettingsRelayQuery`,sha256Hash:`61cc92f8f5a2dc1573424e400c4fc4593f63196bac2af71d8e5c31fd46b4bb2e`,text:`query TeammateEnvironmentSettingsRelayQuery($collectionUuid: ID!) {
	viewer {
		teammateEnvironment(collectionUuid: $collectionUuid) {
			...TeammateEnvironmentSettings_environment
			id
		}
	}
}
fragment TeammateEnvironmentSettings_environment on TeammateEnvironment {
	id
	collectionUuid
	name
	activeRecipe {
		id
		createdAt
		active
	}
	version
	createdAt
	updatedAt
	recipes(first: 20) {
		edges {
			node {
				id
				createdAt
				active
			}
		}
		pageInfo {
			hasNextPage
			endCursor
		}
	}
}`},TeammateWorkstreamPageRelayQuery:{operationName:`TeammateWorkstreamPageRelayQuery`,sha256Hash:`d953d3e4de91cbe73014a7b5f67c406d54d7bdabce9c744db67eddbbf89230b2`,text:`query TeammateWorkstreamPageRelayQuery($workstreamId: ID!, $first: Int) {
	viewer {
		...TeammateProjectCombinedView_viewer_1CjDrz
	}
}
fragment TeammateProjectArtifactsPanel_viewer_3qMyfk on Viewer {
	teammateWorkstream(id: $workstreamId) {
		id
		artifacts(first: $first) {
			edges {
				cursor
				node {
					id
					asset {
						id
						name
					}
					task {
						id
						taskId
						title
						status
					}
					url
					attachedBy
					attachedAt
					checkedAt
					assetType
					pullRequest {
						number
						title
						state
						isDraft
						author
						repository
						baseBranch
						headBranch
						createdAt
						updatedAt
						mergedAt
						reviewStatus
						id
					}
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
fragment TeammateProjectCombinedView_viewer_1CjDrz on Viewer {
	teammateWorkstream(id: $workstreamId) {
		id
		workstreamSlug
		title
		createdBy
		createdAt
	}
	...TeammateWorkstreamTasksList_viewer_1CjDrz
	...TeammateWorkstreamActivityList_viewer_1CjDrz
	...TeammateProjectArtifactsPanel_viewer_3qMyfk
	...TeammateWorkersPanel_viewer_3qMyfk
}
fragment TeammateProjectPullRequestArtifacts_project on TeammateWorkstream {
	projectPullRequestArtifacts: artifacts(assetTypeFilter: "PULL_REQUEST", first: 100) {
		edges {
			node {
				id
				url
				attachedAt
				task {
					id
					taskId
				}
				pullRequest {
					number
					title
					repository
					id
				}
			}
		}
	}
}
fragment TeammateWorkersPanel_viewer_3qMyfk on Viewer {
	teammateWorkstream(id: $workstreamId) {
		id
		workers(first: $first) {
			edges {
				cursor
				node {
					id
					contextUuid
					createdAt
					updatedAt
					expiresAt
					state
					runtime
					runtimeId
					harness
					model {
						id
						displayName
						reasoningEffort
					}
					ownedTasks(first: 3) {
						edges {
							node {
								id
								taskId
								title
							}
						}
						pageInfo {
							hasNextPage
						}
					}
					thread {
						id
						title: name
						slug
						status
					}
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
fragment TeammateWorkstreamActivityList_viewer_1CjDrz on Viewer {
	teammateWorkstream(id: $workstreamId) {
		id
		activity(first: $first) {
			edges {
				cursor
				node {
					__typename
					id
					...TeammateWorkstreamActivityRow_activity
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
}
fragment TeammateWorkstreamActivityRow_activity on TeammateActivityEvent {
	__isTeammateActivityEvent: __typename
	__typename
	id
	actor {
		__typename
		id
		... on TeammateActivityAgentActor {
			agent {
				id
				displayName
				thread {
					id
					slug
				}
			}
		}
		... on TeammateActivitySystemActor {
			displayName
		}
		... on TeammateActivityServiceActor {
			displayName
		}
		... on TeammateActivityUnknownActor {
			displayName
		}
	}
	... on TeammateCreatedActivityEvent {
		snapshot {
			title
		}
	}
	... on TeammateTaskCreatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		snapshot {
			title
			status
		}
	}
	... on TeammateTaskUpdatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		before {
			title
			status
		}
		after {
			title
			status
		}
		changedFields
	}
	... on TeammateTaskLinkCreatedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateTaskLinkDeletedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateMailSentActivityEvent {
		senderAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		recipientAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		snapshot {
			messagePreview
		}
	}
	... on TeammateEnvironmentCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeActivatedActivityEvent {
		id
	}
	... on TeammateUnknownActivityEvent {
		snapshot {
			previewText
		}
	}
	createdAt
}
fragment TeammateWorkstreamTasksList_viewer_1CjDrz on Viewer {
	teammateTasks(collectionUuid: $workstreamId, first: $first) {
		edges {
			cursor
			node {
				id
				taskId
				collectionUuid
				threadContextUuid
				worker {
					contextUuid
					id
				}
				title
				description
				status
				createdBy
				createdAt
				updatedAt
				__typename
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
	teammateWorkstream(id: $workstreamId) {
		id
		workstreamSlug
		title
		createdBy
		createdAt
		...TeammateProjectPullRequestArtifacts_project
	}
}`},SendTeammateWorkstreamMessageRelayMutation:{operationName:`SendTeammateWorkstreamMessageRelayMutation`,sha256Hash:`b8c8f0de70259629a0ff3036ea299665a03dbe655f3054b2e468be9e7967b6e8`,text:`mutation SendTeammateWorkstreamMessageRelayMutation($input: SendTeammateWorkstreamMessageInput!) {
	sendTeammateWorkstreamMessage(input: $input) {
		mailBeadId
		sender
		workstream {
			id
		}
	}
}`},TeammateBuildHomeProjectRelayQuery:{operationName:`TeammateBuildHomeProjectRelayQuery`,sha256Hash:`fc6d64b233b175d129ee399f99ac79e0dd8733ded09972d6d8d52f1a03149d50`,text:`query TeammateBuildHomeProjectRelayQuery($collectionUuid: ID!) {
	viewer {
		teammateWorkstream(id: $collectionUuid) {
			id
			workstreamSlug
			title
		}
		teammateTasks(collectionUuid: $collectionUuid, first: 100) {
			edges {
				node {
					id
					taskId
					collectionUuid
					threadContextUuid
					worker {
						contextUuid
						id
					}
					title
					status
					createdAt
					updatedAt
				}
			}
		}
	}
}`},UpdateTeammateTaskRelayMutation:{operationName:`UpdateTeammateTaskRelayMutation`,sha256Hash:`2c2c7305a7a35113a66d68fefb232200a8ea40afd193ba565bf8c749b0476c8e`,text:`mutation UpdateTeammateTaskRelayMutation($input: UpdateTeammateTaskInput!) {
	updateTeammateTask(input: $input) {
		task {
			id
			title
			description
			status
			version
			updatedAt
		}
		userErrors {
			code
			field
			message
		}
	}
}`},TeammateEnvironmentRecipeRelayQuery:{operationName:`TeammateEnvironmentRecipeRelayQuery`,sha256Hash:`09e52a43c43956f976d8e234dd49098c810f18110eea05b01ed5d4e05477af14`,text:`query TeammateEnvironmentRecipeRelayQuery($collectionUuid: ID!, $recipeId: ID!) {
	viewer {
		teammateEnvironmentRecipe(collectionUuid: $collectionUuid, recipeId: $recipeId) {
			id
			buildScript
			launchScript
			pluginDirectories
		}
	}
}`},UpdateTeammateOrchestratorProfileRelayMutation:{operationName:`UpdateTeammateOrchestratorProfileRelayMutation`,sha256Hash:`afe81327b3089c806c19b4929f20a396c4dea91782da43deb3e69f4a853fb0af`,text:`mutation UpdateTeammateOrchestratorProfileRelayMutation($input: UpdateTeammateOrchestratorProfileInput!) {
	updateTeammateOrchestratorProfile(input: $input) {
		profile {
			id
			innerColor
			outerColor
			centerX
			centerY
			role
			conversationStyle
			defaultModel
		}
	}
}`},SetTeammatePullRequestFileViewedRelayMutation:{operationName:`SetTeammatePullRequestFileViewedRelayMutation`,sha256Hash:`0ed03e88b359f42b61426275f7ad62c1e23bec3531875db0a3328e7073a1b54a`,text:`mutation SetTeammatePullRequestFileViewedRelayMutation($input: SetTeammatePullRequestFileViewedInput!) {
	setTeammatePullRequestFileViewed(input: $input) {
		pullRequestId
		path
		viewerViewedState
		userErrors {
			code
			message
		}
	}
}`},TransitionTeammateTaskRelayMutation:{operationName:`TransitionTeammateTaskRelayMutation`,sha256Hash:`e45579b3ea5b79d2c62784854f814631318329f38a139c1cc71d3d5ae5e63cc4`,text:`mutation TransitionTeammateTaskRelayMutation($input: TransitionTeammateTaskInput!) {
	transitionTeammateTask(input: $input) {
		task {
			id
			title
			description
			status
			version
			updatedAt
		}
		userErrors {
			code
			field
			message
		}
	}
}`},TeammateTaskPermalinkRelayQuery:{operationName:`TeammateTaskPermalinkRelayQuery`,sha256Hash:`0de5135239a012a4e1c950ebe32fcb3a3541d81c4a6ef9f05970ca41b1f5f1d0`,text:`query TeammateTaskPermalinkRelayQuery($taskId: ID!) {
	viewer {
		teammateTask(taskId: $taskId) {
			collectionUuid
			taskId
			id
		}
	}
}`},TeammateGitHubPullRequestCommentsPaginationQuery:{operationName:`TeammateGitHubPullRequestCommentsPaginationQuery`,sha256Hash:`56d84706cef89ba6e3812be7af286eb69f096ccc2a09327e8deedaaba55ebf7c`,text:`query TeammateGitHubPullRequestCommentsPaginationQuery($after: String, $first: Int = 50, $number: Int!, $owner: String!, $repo: String!) {
	...TeammateGitHubPullRequestComments_query_43Zonx
}
fragment TeammateGitHubPullRequestComments_query_43Zonx on Query {
	teammatePullRequestByRepository(owner: $owner, repository: $repo, number: $number) {
		comments(first: $first, after: $after) {
			edges {
				cursor
				node {
					id
					kind
					author {
						login
						avatarUrl
						url
					}
					markdownBody
					createdAt
					updatedAt
					url
					path
					subjectType
					line
					side
					__typename
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
		id
	}
}`},TeammateWorkstreamUpdatesRelaySubscription:{operationName:`TeammateWorkstreamUpdatesRelaySubscription`,sha256Hash:`0cc277769e71e9b586e0b2a0d865a8106681f8184866136c2b15f0bd2b175d4b`,text:`subscription TeammateWorkstreamUpdatesRelaySubscription($workstreamId: ID!) {
	teammateWorkstream(id: $workstreamId) {
		id
		workstreamSlug
		title
		createdBy
		createdAt
	}
}`},CreateTeammateTaskCommentRelayMutation:{operationName:`CreateTeammateTaskCommentRelayMutation`,sha256Hash:`3f715a91f5e4bb3467d16ef5f3b486c9afa6a324a35ed4dd4955d74caba5e9a1`,text:`mutation CreateTeammateTaskCommentRelayMutation($input: CreateTeammateTaskCommentInput!) {
	createTeammateTaskComment(input: $input) {
		comment {
			...TeammateTaskCommentFields_comment
			id
		}
		userErrors {
			code
			field
			message
		}
	}
}
fragment TeammateTaskCommentFields_comment on TeammateTaskComment {
	id
	author {
		__typename
		id
		name
	}
	markdownBody
	createdAt
	updatedAt
}`},TeammateTaskArtifactsRelayQuery:{operationName:`TeammateTaskArtifactsRelayQuery`,sha256Hash:`fc17d5c0a98c18f72af009e5171ac7ddbb97cc5683f6d7ba098b33859a59fe28`,text:`query TeammateTaskArtifactsRelayQuery($collectionUuid: ID!) {
	viewer {
		teammateWorkstream(id: $collectionUuid) {
			id
			artifacts(first: 100) {
				edges {
					node {
						id
						asset {
							id
							name
						}
						task {
							id
							taskId
						}
						url
						attachedBy
						attachedAt
						checkedAt
						assetType
						pullRequest {
							number
							title
							state
							author
							repository
							baseBranch
							headBranch
							createdAt
							updatedAt
							mergedAt
							reviewStatus
							id
						}
					}
				}
			}
		}
	}
}`},TeammateInboxProjectsPaginationQuery:{operationName:`TeammateInboxProjectsPaginationQuery`,sha256Hash:`991c0bb98fda8b9747dc6b21402e748e05c31545703456a6a8e592c20223dae3`,text:`query TeammateInboxProjectsPaginationQuery($after: String, $first: Int = 25) {
	viewer {
		...TeammateInboxProjects_viewer_2HEEH6
	}
}
fragment TeammateInboxProjects_viewer_2HEEH6 on Viewer {
	teammateWorkstreams(first: $first, after: $after) {
		edges {
			cursor
			node {
				id
				workstreamSlug
				title
				createdBy
				devboxId
				devboxSlug
				createdAt
				__typename
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}`},TeammateTaskCommentsSectionRelayQuery:{operationName:`TeammateTaskCommentsSectionRelayQuery`,sha256Hash:`ffb0358a9a5ee66b975844f4b90312749f5801ea23c329ee5fdf5050d53986a4`,text:`query TeammateTaskCommentsSectionRelayQuery($collectionUuid: ID!, $taskId: ID!, $first: Int) {
	viewer {
		...TeammateTaskCommentsSection_viewer_18l9ia
	}
}
fragment TeammateTaskCommentFields_comment on TeammateTaskComment {
	id
	author {
		__typename
		id
		name
	}
	markdownBody
	createdAt
	updatedAt
}
fragment TeammateTaskCommentsSection_viewer_18l9ia on Viewer {
	teammateTaskByCollection(collectionUuid: $collectionUuid, taskId: $taskId) {
		id
		comments(first: $first) {
			edges {
				cursor
				node {
					...TeammateTaskCommentFields_comment
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
}`},TeammateWorkspacePrototypeProjectUpdatesRelaySubscription:{operationName:`TeammateWorkspacePrototypeProjectUpdatesRelaySubscription`,sha256Hash:`a1ddd2ba3fd8d9e81d22c9c02996fd46a0f0e6b8419383ddaaff77162cf5d06b`,text:`subscription TeammateWorkspacePrototypeProjectUpdatesRelaySubscription($projectUuid: ID!, $first: Int) {
	teammateWorkstream(id: $projectUuid) {
		...TeammateProjectCanvas_project_3ASum4
		id
	}
}
fragment TeammateAgentProfilePane_project_3ASum4 on TeammateWorkstream {
	workers(first: $first, stateFilter: ALL) {
		edges {
			node {
				id
				contextUuid
				createdAt
				updatedAt
				expiresAt
				state
				runtime
				runtimeId
				harness
				model {
					id
					displayName
					reasoningEffort
				}
				thread {
					id
					slug
					name
					status
				}
			}
		}
	}
}
fragment TeammateProjectCanvas_project_3ASum4 on TeammateWorkstream {
	id
	workstreamSlug
	title
	...TeammateWorkspaceSidebar_project_3ASum4
	...TeammateAgentProfilePane_project_3ASum4
}
fragment TeammateWorkspaceSidebar_project_3ASum4 on TeammateWorkstream {
	chats(first: $first) {
		edges {
			node {
				id
				createdAt
				status
				updatedAt
				orchestratorProfile {
					id
					innerColor
					outerColor
					centerX
					centerY
					role
					conversationStyle
					defaultModel
				}
				thread {
					id
					contextUUID
					frontendContextUUID
					entryId
					slug
					name
					mode
					isUnread
				}
			}
		}
	}
}`},TeammatePullRequestReviewRelayQuery:{operationName:`TeammatePullRequestReviewRelayQuery`,sha256Hash:`63fcc510c561000c32650d142c466aaa60d94348d9a94a1f87d7c3f37e172902`,text:`query TeammatePullRequestReviewRelayQuery($owner: String!, $repo: String!, $number: Int!) {
	teammatePullRequestByRepository(owner: $owner, repository: $repo, number: $number) {
		...TeammatePullRequestMetadata_pullRequest
		mergeability
		files(first: 3000) {
			baseOid
			headOid
			returnedCount
			totalCount
			edges {
				node {
					path
					diffAnchor
					previousPath
					status
					additions
					deletions
					patch
					patchAvailable
					viewerViewedState
				}
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
		checks(first: 50) {
			edges {
				node {
					name
					conclusion
					detailsUrl
					summary
				}
			}
		}
		comments(first: 100) {
			edges {
				node {
					id
					kind
					isResolved
					author {
						login
						avatarUrl
						url
					}
					markdownBody
					createdAt
					updatedAt
					url
					path
					subjectType
					line
					side
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
}`},TeammateWorkstreamPickerPageRelayQuery:{operationName:`TeammateWorkstreamPickerPageRelayQuery`,sha256Hash:`9df5f29b0f38253d43994e8e5b051bb7a83457c6255b28210be38c41ab6f2e98`,text:`query TeammateWorkstreamPickerPageRelayQuery($first: Int) {
	viewer {
		...TeammateWorkstreamPickerList_viewer_3ASum4
	}
}
fragment TeammateWorkstreamPickerList_viewer_3ASum4 on Viewer {
	teammateWorkstreams(first: $first) {
		edges {
			cursor
			node {
				id
				workstreamSlug
				title
				createdBy
				devboxId
				devboxSlug
				createdAt
				__typename
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}`},TeammateSessionPullRequestsRelayQuery:{operationName:`TeammateSessionPullRequestsRelayQuery`,sha256Hash:`773f4b3992a35ae8478481600d690001362c4839c9e865ec39c44654dc83bb63`,text:`query TeammateSessionPullRequestsRelayQuery($collectionUuid: ID!, $orchestratorContextUuid: ID!) {
	viewer {
		teammateWorkstream(id: $collectionUuid) {
			id
			chat(chatId: $orchestratorContextUuid) {
				id
				artifacts(assetTypeFilter: "PULL_REQUEST", first: 100) {
					edges {
						node {
							id
							url
							assetType
							pullRequest {
								number
								title
								state
								isDraft
								author
								repository
								updatedAt
								stackPosition
								stack {
									size
									id
								}
								id
							}
						}
					}
				}
			}
		}
	}
}`},TeammateInboxPageRelayQuery:{operationName:`TeammateInboxPageRelayQuery`,sha256Hash:`febdac4f35e350533f475bd8d129e31df8883211158e6c39e7e3ffda14f9e7b8`,text:`query TeammateInboxPageRelayQuery($first: Int) {
	viewer {
		...TeammateInboxProjects_viewer_3ASum4
		...TeammateFeedActivity_viewer
	}
}
fragment TeammateFeedActivity_viewer on Viewer {
	teammateActivity(first: 50) {
		edges {
			cursor
			node {
				__typename
				id
				workstream {
					id
					workstreamSlug
					title
				}
				...TeammateWorkstreamActivityRow_activity
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}
fragment TeammateInboxProjects_viewer_3ASum4 on Viewer {
	teammateWorkstreams(first: $first) {
		edges {
			cursor
			node {
				id
				workstreamSlug
				title
				createdBy
				devboxId
				devboxSlug
				createdAt
				__typename
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}
fragment TeammateWorkstreamActivityRow_activity on TeammateActivityEvent {
	__isTeammateActivityEvent: __typename
	__typename
	id
	actor {
		__typename
		id
		... on TeammateActivityAgentActor {
			agent {
				id
				displayName
				thread {
					id
					slug
				}
			}
		}
		... on TeammateActivitySystemActor {
			displayName
		}
		... on TeammateActivityServiceActor {
			displayName
		}
		... on TeammateActivityUnknownActor {
			displayName
		}
	}
	... on TeammateCreatedActivityEvent {
		snapshot {
			title
		}
	}
	... on TeammateTaskCreatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		snapshot {
			title
			status
		}
	}
	... on TeammateTaskUpdatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		before {
			title
			status
		}
		after {
			title
			status
		}
		changedFields
	}
	... on TeammateTaskLinkCreatedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateTaskLinkDeletedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateMailSentActivityEvent {
		senderAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		recipientAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		snapshot {
			messagePreview
		}
	}
	... on TeammateEnvironmentCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeActivatedActivityEvent {
		id
	}
	... on TeammateUnknownActivityEvent {
		snapshot {
			previewText
		}
	}
	createdAt
}`},EnableTeammateProjectRelayMutation:{operationName:`EnableTeammateProjectRelayMutation`,sha256Hash:`321ca79c0304e47b7140448bb5fa89c8d8a2198a51476a1d4413d752d1042a90`,text:`mutation EnableTeammateProjectRelayMutation($input: EnableTeammateProjectInput!) {
	enableTeammateProject(input: $input) {
		teammate {
			collectionUuid
		}
		userErrors {
			code
			message
		}
	}
}`},TeammatePullRequestFileLinesRelayQuery:{operationName:`TeammatePullRequestFileLinesRelayQuery`,sha256Hash:`24a44091319efb1d9d719999853788521e775bae04150e149972a9bc38145f46`,text:`query TeammatePullRequestFileLinesRelayQuery($owner: String!, $repo: String!, $number: Int!, $path: String!, $oid: String!, $startLine: Int!, $lineCount: Int!) {
	teammatePullRequestByRepository(owner: $owner, repository: $repo, number: $number) {
		fileLines(path: $path, oid: $oid, startLine: $startLine, lineCount: $lineCount) {
			startLine
			lines
			totalLineCount
		}
		id
	}
}`},TeammateEnvironmentRecipesRelayQuery:{operationName:`TeammateEnvironmentRecipesRelayQuery`,sha256Hash:`eb6b013ecde74905364a5f001ff25de2a0d468b09c430a2072dff20f2282f5cd`,text:`query TeammateEnvironmentRecipesRelayQuery($collectionUuid: ID!, $first: Int, $after: String!) {
	viewer {
		teammateEnvironment(collectionUuid: $collectionUuid) {
			recipes(first: $first, after: $after) {
				edges {
					node {
						id
						createdAt
						active
					}
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
			id
		}
	}
}`},ActivateTeammateEnvironmentRecipeRelayMutation:{operationName:`ActivateTeammateEnvironmentRecipeRelayMutation`,sha256Hash:`f5237bcd10d30d392c7821b9f0bfb6aa16753eeed9120e7dfab117164f83d9b6`,text:`mutation ActivateTeammateEnvironmentRecipeRelayMutation($input: ActivateTeammateEnvironmentRecipeInput!) {
	activateTeammateEnvironmentRecipe(input: $input) {
		environment {
			...TeammateEnvironmentSettings_environment
			id
		}
		userErrors {
			code
			field
			message
		}
	}
}
fragment TeammateEnvironmentSettings_environment on TeammateEnvironment {
	id
	collectionUuid
	name
	activeRecipe {
		id
		createdAt
		active
	}
	version
	createdAt
	updatedAt
	recipes(first: 20) {
		edges {
			node {
				id
				createdAt
				active
			}
		}
		pageInfo {
			hasNextPage
			endCursor
		}
	}
}`},TeammateTaskDetailsRelayQuery:{operationName:`TeammateTaskDetailsRelayQuery`,sha256Hash:`f548c298b5fabfbb78721a5e03cfde2f9cbdbbcd86fa34d3203af2fea01731dc`,text:`query TeammateTaskDetailsRelayQuery($collectionUuid: ID!, $taskId: ID!) {
	viewer {
		teammateTaskByCollection(collectionUuid: $collectionUuid, taskId: $taskId) {
			id
			taskId
			collectionUuid
			threadContextUuid
			title
			description
			status
			version
			createdBy
			createdAt
			updatedAt
			worker {
				id
				contextUuid
				createdAt
				updatedAt
				expiresAt
				state
				runtime
				runtimeId
				harness
				model {
					id
					displayName
					reasoningEffort
				}
				ownedTasks(first: 3) {
					edges {
						node {
							id
							taskId
							title
						}
					}
					pageInfo {
						hasNextPage
					}
				}
				thread {
					id
					slug
					title: name
					status
					statusSummary
					updatedAt
				}
			}
		}
	}
}`},TeammateWorkstreamTasksUpdatesRelaySubscription:{operationName:`TeammateWorkstreamTasksUpdatesRelaySubscription`,sha256Hash:`0ee9823f23142f1c21ba5b6cf7352a9fa0049ca206c6b7eb6cacae3ba5493e78`,text:`subscription TeammateWorkstreamTasksUpdatesRelaySubscription($workstreamId: ID!, $first: Int) {
	teammateTasks(collectionUuid: $workstreamId, first: $first) {
		edges {
			cursor
			node {
				id
				taskId
				collectionUuid
				threadContextUuid
				worker {
					contextUuid
					id
				}
				title
				description
				status
				createdBy
				createdAt
				updatedAt
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}`},TeammateWorkstreamMessagesUpdatesRelaySubscription:{operationName:`TeammateWorkstreamMessagesUpdatesRelaySubscription`,sha256Hash:`283db8f3b1a379404934deee02808171be194e9c23e1207999ca55f69516be6a`,text:`subscription TeammateWorkstreamMessagesUpdatesRelaySubscription($workstreamId: ID!, $first: Int) {
	teammateWorkstreamAssistantMessages(workstreamId: $workstreamId, first: $first) {
		edges {
			cursor
			node {
				id
				...TeammateWorkstreamAssistantMessageRow_message
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}
fragment TeammateWorkstreamAssistantMessageRow_message on TeammateWorkstreamAssistantMessage {
	id
	role
	sender
	markdownBody
	mailBeadId
}`},TeammateWorkspaceBootstrapRelayQuery:{operationName:`TeammateWorkspaceBootstrapRelayQuery`,sha256Hash:`0f2c834b8ae6fb968812f65d3b2ebb725111efbcf81193267587800878ffe2b1`,text:`query TeammateWorkspaceBootstrapRelayQuery($projectUuid: ID!, $hasProject: Boolean!, $first: Int, $projectsFirst: Int, $selectedChatId: ID!, $hasSelectedChat: Boolean!, $workersFirst: Int) {
	viewer {
		...TeammateWorkspaceBootstrap_viewer_1PpaTF
	}
}
fragment TeammateAgentProfilePane_project_3ASum4 on TeammateWorkstream {
	workers(first: $first, stateFilter: ALL) {
		edges {
			node {
				id
				contextUuid
				createdAt
				updatedAt
				expiresAt
				state
				runtime
				runtimeId
				harness
				model {
					id
					displayName
					reasoningEffort
				}
				thread {
					id
					slug
					name
					status
				}
			}
		}
	}
}
fragment TeammateChatWorkers_chat_4zwNJR on TeammateChat {
	id
	thread {
		id
		contextUUID
	}
	workers(first: $workersFirst, stateFilter: ALL) {
		edges {
			node {
				id
				contextUuid
				createdAt
				updatedAt
				expiresAt
				state
				runtime
				runtimeId
				harness
				model {
					id
					displayName
					reasoningEffort
				}
				thread {
					id
					slug
					name
					status
				}
				branch
				worktree
				latestPullRequestUrl
			}
		}
		pageInfo {
			hasNextPage
		}
	}
}
fragment TeammateProjectCanvas_project_3ASum4 on TeammateWorkstream {
	id
	workstreamSlug
	title
	...TeammateWorkspaceSidebar_project_3ASum4
	...TeammateAgentProfilePane_project_3ASum4
}
fragment TeammateProjectInitialChatWorkers_project_1J4iTE on TeammateWorkstream {
	initialChat: chats(first: 1) {
		edges {
			node {
				...TeammateChatWorkers_chat_4zwNJR
				id
			}
		}
	}
	selectedChat: chat(chatId: $selectedChatId) @include(if: $hasSelectedChat) {
		id
		createdAt
		status
		updatedAt
		orchestratorProfile {
			id
			innerColor
			outerColor
			centerX
			centerY
			role
			conversationStyle
			defaultModel
		}
		thread {
			id
			contextUUID
			frontendContextUUID
			entryId
			slug
			name
			mode
			isUnread
		}
		...TeammateChatWorkers_chat_4zwNJR
	}
}
fragment TeammateWorkspaceBootstrapProject_project_2TTNOn on TeammateWorkstream {
	id
	title
	workstreamSlug
	...TeammateProjectCanvas_project_3ASum4
	...TeammateProjectInitialChatWorkers_project_1J4iTE
}
fragment TeammateWorkspaceBootstrap_viewer_1PpaTF on Viewer {
	teammateWorkstreams(first: $projectsFirst) {
		edges {
			cursor
			node {
				id
				title
				workstreamSlug
				__typename
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
	selectedProject: teammateWorkstream(id: $projectUuid) @include(if: $hasProject) {
		...TeammateWorkspaceBootstrapProject_project_2TTNOn
		id
	}
	firstProject: teammateWorkstreams(first: 1) {
		edges {
			node {
				...TeammateWorkspaceBootstrapProject_project_2TTNOn
				id
			}
		}
	}
}
fragment TeammateWorkspaceSidebar_project_3ASum4 on TeammateWorkstream {
	chats(first: $first) {
		edges {
			node {
				id
				createdAt
				status
				updatedAt
				orchestratorProfile {
					id
					innerColor
					outerColor
					centerX
					centerY
					role
					conversationStyle
					defaultModel
				}
				thread {
					id
					contextUUID
					frontendContextUUID
					entryId
					slug
					name
					mode
					isUnread
				}
			}
		}
	}
}`},TeammateProjectSidebarItemsRelayQuery:{operationName:`TeammateProjectSidebarItemsRelayQuery`,sha256Hash:`a13287db407f3478b426a92a8e9eae5b8df8c95a644c16bbd35f8812ab354301`,text:`query TeammateProjectSidebarItemsRelayQuery($workspaceId: ID!, $first: Int) {
	viewer {
		teammateWorkstream(id: $workspaceId) {
			id
			workers(first: $first) {
				edges {
					node {
						id
						contextUuid
						thread {
							id
							slug
							name
						}
					}
				}
			}
			chats(first: $first) {
				edges {
					node {
						id
						status
						thread {
							id
							contextUUID
							entryId
							slug
							name
							mode
							isUnread
						}
					}
				}
			}
		}
	}
}`},CreateTeammateEnvironmentRelayMutation:{operationName:`CreateTeammateEnvironmentRelayMutation`,sha256Hash:`3fb58645b3078cf8dc32babf97bee0a488d3d6e9709633a75ace4687fef10335`,text:`mutation CreateTeammateEnvironmentRelayMutation($input: CreateTeammateEnvironmentInput!) {
	createTeammateEnvironment(input: $input) {
		environment {
			...TeammateEnvironmentSettings_environment
			id
		}
		userErrors {
			code
			field
			message
		}
	}
}
fragment TeammateEnvironmentSettings_environment on TeammateEnvironment {
	id
	collectionUuid
	name
	activeRecipe {
		id
		createdAt
		active
	}
	version
	createdAt
	updatedAt
	recipes(first: 20) {
		edges {
			node {
				id
				createdAt
				active
			}
		}
		pageInfo {
			hasNextPage
			endCursor
		}
	}
}`},TeammateGitHubPullRequestPreviewRelayQuery:{operationName:`TeammateGitHubPullRequestPreviewRelayQuery`,sha256Hash:`9a8c9fe836a2fbcc3cdfc5f96bb5a6e7f4d1f63d3cbbd84a08ccfd2f010cf682`,text:`query TeammateGitHubPullRequestPreviewRelayQuery($owner: String!, $repo: String!, $number: Int!) {
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
}`},TeammateRoutedPullRequestOwnershipRelayQuery:{operationName:`TeammateRoutedPullRequestOwnershipRelayQuery`,sha256Hash:`bccf25f81f1d8558894f7ed21e880244e9d4bd9d8ee1fb1765f9772118cffaac`,text:`query TeammateRoutedPullRequestOwnershipRelayQuery($collectionUuid: ID!, $orchestratorContextUuid: ID!, $after: String) {
	viewer {
		teammateWorkstream(id: $collectionUuid) {
			chat(chatId: $orchestratorContextUuid) {
				artifacts(assetTypeFilter: "PULL_REQUEST", first: 100, after: $after) {
					edges {
						node {
							id
						}
					}
					pageInfo {
						endCursor
						hasNextPage
					}
				}
				id
			}
			id
		}
	}
}`},CreateTeammateEnvironmentRecipeRelayMutation:{operationName:`CreateTeammateEnvironmentRecipeRelayMutation`,sha256Hash:`b7b629ad35851b5a7dcb90d0d383b73b0adbd15d680a5376af64dc0e6c8d2018`,text:`mutation CreateTeammateEnvironmentRecipeRelayMutation($input: CreateTeammateEnvironmentRecipeInput!) {
	createTeammateEnvironmentRecipe(input: $input) {
		environment {
			...TeammateEnvironmentSettings_environment
			id
		}
		userErrors {
			code
			field
			message
		}
	}
}
fragment TeammateEnvironmentSettings_environment on TeammateEnvironment {
	id
	collectionUuid
	name
	activeRecipe {
		id
		createdAt
		active
	}
	version
	createdAt
	updatedAt
	recipes(first: 20) {
		edges {
			node {
				id
				createdAt
				active
			}
		}
		pageInfo {
			hasNextPage
			endCursor
		}
	}
}`},TeammateWorkstreamPickerListPaginationQuery:{operationName:`TeammateWorkstreamPickerListPaginationQuery`,sha256Hash:`64d8a159d838b05a5f5872969479e0b5d9529a581a663b9829ec33e7b7a2b4af`,text:`query TeammateWorkstreamPickerListPaginationQuery($after: String, $first: Int = 25) {
	viewer {
		...TeammateWorkstreamPickerList_viewer_2HEEH6
	}
}
fragment TeammateWorkstreamPickerList_viewer_2HEEH6 on Viewer {
	teammateWorkstreams(first: $first, after: $after) {
		edges {
			cursor
			node {
				id
				workstreamSlug
				title
				createdBy
				devboxId
				devboxSlug
				createdAt
				__typename
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}`},TeammateProjectSidebarItemsUpdatesRelaySubscription:{operationName:`TeammateProjectSidebarItemsUpdatesRelaySubscription`,sha256Hash:`95230aaf8ea26703b021dd4e94702f5d12c2fd9fc6e180e30d376d213d192d0a`,text:`subscription TeammateProjectSidebarItemsUpdatesRelaySubscription($workspaceId: ID!, $first: Int) {
	teammateWorkstream(id: $workspaceId) {
		id
		workers(first: $first) {
			edges {
				node {
					id
					contextUuid
					thread {
						id
						slug
						name
					}
				}
			}
		}
		chats(first: $first) {
			edges {
				node {
					id
					status
					thread {
						id
						contextUUID
						entryId
						slug
						name
						mode
						isUnread
					}
				}
			}
		}
	}
}`},TeammatePullRequestFileContentRelayQuery:{operationName:`TeammatePullRequestFileContentRelayQuery`,sha256Hash:`74a0b52c863bae95f3a84510be21934da837b3de735d077e695d11e2ff211801`,text:`query TeammatePullRequestFileContentRelayQuery($owner: String!, $repo: String!, $number: Int!, $path: String!, $oid: String!) {
	teammatePullRequestByRepository(owner: $owner, repository: $repo, number: $number) {
		fileContent(path: $path, oid: $oid)
		id
	}
}`},SessionPullRequestsRelayQuery:{operationName:`SessionPullRequestsRelayQuery`,sha256Hash:`2c498f6638b8b4459abff47d84d3874ba5abda57896759ba7330b5c91859008e`,text:`query SessionPullRequestsRelayQuery($projectId: ID!, $sessionId: ID!, $first: Int) {
	viewer {
		...SessionPullRequestsPanel_viewer_3zpwKJ
	}
}
fragment SessionPullRequestsPanel_viewer_3zpwKJ on Viewer {
	teammateWorkstream(id: $projectId) {
		id
		chat(chatId: $sessionId) {
			id
			artifacts(assetTypeFilter: "PULL_REQUEST", first: $first) {
				edges {
					cursor
					node {
						id
						url
						pullRequest {
							number
							title
							repository
							id
						}
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
}`},TeammatePullRequestPreviewRelayQuery:{operationName:`TeammatePullRequestPreviewRelayQuery`,sha256Hash:`7255efc9c351465e4bc2f958e43d29d72f690522a8e1cf6b61305dad3619d9f4`,text:`query TeammatePullRequestPreviewRelayQuery($workstreamId: ID!, $artifactId: ID!) {
	viewer {
		teammateWorkstream(id: $workstreamId) {
			pullRequestArtifact(id: $artifactId) {
				id
				url
				task {
					taskId
					threadContextUuid
					title
					description
					status
					handoffMessage
					id
				}
				pullRequest {
					number
					url
					title
					state
					isDraft
					author
					repository
					baseBranch
					headBranch
					linesAdded
					linesRemoved
					changedFiles
					commentCount
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
					markdownBody
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
			id
		}
	}
}`},TeammateWorkstreamActivityUpdatesRelaySubscription:{operationName:`TeammateWorkstreamActivityUpdatesRelaySubscription`,sha256Hash:`2dce8296ca3a35671927d054c67d433100417026951ed1b6721da1e0023326a8`,text:`subscription TeammateWorkstreamActivityUpdatesRelaySubscription($workstreamId: ID!, $first: Int) {
	teammateActivity(workstreamId: $workstreamId, first: $first) {
		edges {
			cursor
			node {
				__typename
				id
				...TeammateWorkstreamActivityRow_activity
			}
		}
		pageInfo {
			endCursor
			hasNextPage
		}
	}
}
fragment TeammateWorkstreamActivityRow_activity on TeammateActivityEvent {
	__isTeammateActivityEvent: __typename
	__typename
	id
	actor {
		__typename
		id
		... on TeammateActivityAgentActor {
			agent {
				id
				displayName
				thread {
					id
					slug
				}
			}
		}
		... on TeammateActivitySystemActor {
			displayName
		}
		... on TeammateActivityServiceActor {
			displayName
		}
		... on TeammateActivityUnknownActor {
			displayName
		}
	}
	... on TeammateCreatedActivityEvent {
		snapshot {
			title
		}
	}
	... on TeammateTaskCreatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		snapshot {
			title
			status
		}
	}
	... on TeammateTaskUpdatedActivityEvent {
		task {
			id
			taskId
			title
			status
		}
		before {
			title
			status
		}
		after {
			title
			status
		}
		changedFields
	}
	... on TeammateTaskLinkCreatedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateTaskLinkDeletedActivityEvent {
		sourceTask {
			id
			taskId
			title
			status
		}
		targetTask {
			id
			taskId
			title
			status
		}
		snapshot {
			linkType
			sourceTask {
				title
			}
			targetTask {
				title
			}
		}
	}
	... on TeammateMailSentActivityEvent {
		senderAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		recipientAgent {
			id
			displayName
			thread {
				id
				slug
			}
		}
		snapshot {
			messagePreview
		}
	}
	... on TeammateEnvironmentCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeCreatedActivityEvent {
		id
	}
	... on TeammateEnvironmentRecipeActivatedActivityEvent {
		id
	}
	... on TeammateUnknownActivityEvent {
		snapshot {
			previewText
		}
	}
	createdAt
}`},SessionPullRequestsPanelPaginationQuery:{operationName:`SessionPullRequestsPanelPaginationQuery`,sha256Hash:`98e27aac75e37ceb4c427ff8f9c191acba9ca5601bf3992ababa49b71a24af3c`,text:`query SessionPullRequestsPanelPaginationQuery($after: String, $first: Int = 100, $projectId: ID!, $sessionId: ID!) {
	viewer {
		...SessionPullRequestsPanel_viewer_1vW2cb
	}
}
fragment SessionPullRequestsPanel_viewer_1vW2cb on Viewer {
	teammateWorkstream(id: $projectId) {
		id
		chat(chatId: $sessionId) {
			id
			artifacts(assetTypeFilter: "PULL_REQUEST", first: $first, after: $after) {
				edges {
					cursor
					node {
						id
						url
						pullRequest {
							number
							title
							repository
							id
						}
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
}`},TeammateTaskCommentsSectionPaginationQuery:{operationName:`TeammateTaskCommentsSectionPaginationQuery`,sha256Hash:`f2040b8016558fc5000ac836e147695dfe2ab7a15e08520e5477c5e7a29f396f`,text:`query TeammateTaskCommentsSectionPaginationQuery($after: String, $collectionUuid: ID!, $first: Int = 50, $taskId: ID!) {
	viewer {
		...TeammateTaskCommentsSection_viewer_1RicVH
	}
}
fragment TeammateTaskCommentFields_comment on TeammateTaskComment {
	id
	author {
		__typename
		id
		name
	}
	markdownBody
	createdAt
	updatedAt
}
fragment TeammateTaskCommentsSection_viewer_1RicVH on Viewer {
	teammateTaskByCollection(collectionUuid: $collectionUuid, taskId: $taskId) {
		id
		comments(first: $first, after: $after) {
			edges {
				cursor
				node {
					...TeammateTaskCommentFields_comment
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
}`}};function m(e,t){if(typeof e!=`string`||!e)return null;let n=new Date(e);return Number.isNaN(n.getTime())?null:{date:n,dateTime:n.toISOString(),text:`${t.formatDate(n,{day:`numeric`,month:`short`,year:`numeric`})} ${t.formatTime(n,{hour:`numeric`,minute:`2-digit`})}`}}function h(e){return(e??``).trim().toLowerCase().replaceAll(/[\s-]+/g,`_`)}var g=new Set([`active`,`in_progress`,`open`,`pending`,`ready_for_review`,`running`,`started`,`todo`]),_=new Set([`blocked`,`needs_attention`,`waiting`,`waiting_for_user`,`waiting_on_user`]),v=new Set([`closed`,`complete`,`completed`,`done`,`fixed`,`resolved`]);function y(e){let t=h(e);return g.has(t)?`active`:_.has(t)?`blocked`:v.has(t)?`completed`:`neutral`}var b={minimal:`Minimal`,low:`Low`,medium:`Medium`,high:`High`,xhigh:`XHigh`,max:`Max`};function x(e){return!e||e===`none`?null:b[e]??e}var S={Forbidden:`FORBIDDEN`,InvalidArgument:`INVALID_ARGUMENT`,NotFound:`NOT_FOUND`,Conflict:`CONFLICT`,InvalidWorkstreamSlug:`INVALID_WORKSTREAM_SLUG`,WorkstreamAlreadyExists:`WORKSTREAM_ALREADY_EXISTS`,DevboxSlugConflict:`DEVBOX_SLUG_CONFLICT`,UpstreamUnavailable:`UPSTREAM_UNAVAILABLE`,RequestFailed:`REQUEST_FAILED`,MissingProject:`MISSING_PROJECT`,RepositoryBindingFailed:`REPOSITORY_BINDING_FAILED`,MissingTaskComment:`MISSING_TASK_COMMENT`,Unknown:`UNKNOWN`},C=new Set([S.Forbidden,S.InvalidArgument,S.NotFound,S.Conflict,S.InvalidWorkstreamSlug,S.WorkstreamAlreadyExists,S.DevboxSlugConflict,S.UpstreamUnavailable,S.Unknown]);function w(e){return e&&C.has(e)?e:S.Unknown}function T(e){return{code:w(e?.code),field:e?.field,message:e?.message}}var E=n(),D=e(t(),1),O=D.memo(function({children:e,className:t,hasNext:n,isLoadingNext:r,loadNext:a,pageSize:o,variant:s=`secondary`}){let c=(0,D.useCallback)(()=>{!n||r||a(o)},[n,r,a,o]);return n?(0,E.jsx)(`div`,{className:t,children:(0,E.jsx)(i,{size:`small`,type:`button`,variant:s,isLoading:r,disabled:r,onClick:c,children:e})}):null});export{y as a,f as c,l as d,s as f,x as i,d as l,S as n,m as o,T as r,p as s,O as t,u};
//# sourceMappingURL=restricted-feature-teammate-workstream-DO3j79d5.js.map
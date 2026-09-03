import{n as e,t}from"./react-relay-DuJ9gA7S.js";import{t as n}from"./graphql-preload-BXRh_MEx.js";e();var r={kind:`InlineDataFragment`,name:`SpaceProjectThreadFields`};r.hash=`57557e5326a17665e3838c492feda1db`;var i=(function(){var e={defaultValue:null,kind:`LocalArgument`,name:`count`},t={defaultValue:null,kind:`LocalArgument`,name:`cursor`},n={defaultValue:null,kind:`LocalArgument`,name:`groupType`},r={defaultValue:null,kind:`LocalArgument`,name:`ownThreadsOnly`},i={defaultValue:null,kind:`LocalArgument`,name:`searchTerm`},a={defaultValue:null,kind:`LocalArgument`,name:`spaceId`},o=[{kind:`Variable`,name:`id`,variableName:`spaceId`}],s=[{fields:[{kind:`Literal`,name:`modes`,value:[]},{fields:[{kind:`Variable`,name:`ownThreadsOnly`,variableName:`ownThreadsOnly`}],kind:`ObjectValue`,name:`project`},{kind:`Variable`,name:`searchTerm`,variableName:`searchTerm`}],kind:`ObjectValue`,name:`filter`},{kind:`Variable`,name:`type`,variableName:`groupType`}],c={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},l=[{kind:`Variable`,name:`after`,variableName:`cursor`},{kind:`Variable`,name:`first`,variableName:`count`}],u={alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},f={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null},p=[c,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`frontendContextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`readWriteToken`,storageKey:null},d,f,{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,concreteType:`DisplayModel`,kind:`LinkedField`,name:`displayModel`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`modelID`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`statusSummary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isArchived`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`access`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAuthor`,kind:`LinkedField`,name:`author`,plural:!1,selections:[d,{alias:null,args:null,kind:`ScalarField`,name:`username`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`avatarUrl`,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},f],storageKey:null},{alias:null,args:null,concreteType:`ThreadAsset`,kind:`LinkedField`,name:`topAssets`,plural:!0,selections:[c,{alias:null,args:null,kind:`ScalarField`,name:`assetType`,storageKey:null},d,f,{alias:null,args:null,kind:`ScalarField`,name:`backendUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPrimary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`previewURL`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mediaType`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAssetExternalMetadata`,kind:`LinkedField`,name:`externalMetadata`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`attachmentURLs`,storageKey:null},{alias:null,args:null,concreteType:`ThreadTaskSchedule`,kind:`LinkedField`,name:`taskSchedule`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`wakeAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`nextRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasCron`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAutomation`,kind:`LinkedField`,name:`automations`,plural:!0,selections:[c,{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null}],storageKey:null}],storageKey:null}],m={alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[e,t,n,r,i,a],kind:`Fragment`,metadata:null,name:`SpaceProjectThreadsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{alias:null,args:o,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:s,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[c,{alias:null,args:l,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[u,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`SpaceProjectThreadFields`,selections:p,args:null,argumentDefinitions:[]}],storageKey:null}],storageKey:null},m],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:[a,r,i,n,e,t],kind:`Operation`,name:`SpaceProjectThreadsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{alias:null,args:o,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:s,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[c,{alias:null,args:l,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[u,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:p,storageKey:null}],storageKey:null},m],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:`040d1d621e5be27209ce590ed86997b2`,id:`514fbfaecf863ad204ceb5531ad60d9be069bab832a6d29d39536caceb8c0d3f`,metadata:{},name:`SpaceProjectThreadsRelayQuery`,operationKind:`query`,text:`query SpaceProjectThreadsRelayQuery(
  $spaceId: ID!
  $ownThreadsOnly: Boolean
  $searchTerm: String
  $groupType: ThreadGroupType!
  $count: Int
  $cursor: String
) {
  viewer {
    space(id: $spaceId) {
      threadGroup(type: $groupType, filter: {modes: [], searchTerm: $searchTerm, project: {ownThreadsOnly: $ownThreadsOnly}}) {
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
}
`}}})();i.hash=`6bd7ef1fc3de5903c7eab8cde7687ab6`;var a=(function(){var e={defaultValue:null,kind:`LocalArgument`,name:`first`},t={defaultValue:null,kind:`LocalArgument`,name:`spaceId`},n=[{kind:`Variable`,name:`id`,variableName:`spaceId`}],r=[{kind:`Literal`,name:`filter`,value:{modes:[],project:{}}},{kind:`Literal`,name:`type`,value:`ALL`}],i={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},a={alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},o=[{kind:`Variable`,name:`first`,variableName:`first`}],s={alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},c={alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},l={alias:null,args:null,kind:`ScalarField`,name:`slug`,storageKey:null},u=[i,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`frontendContextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`readWriteToken`,storageKey:null},c,l,{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,concreteType:`DisplayModel`,kind:`LinkedField`,name:`displayModel`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`modelID`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`statusSummary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isArchived`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`access`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAuthor`,kind:`LinkedField`,name:`author`,plural:!1,selections:[c,{alias:null,args:null,kind:`ScalarField`,name:`username`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`avatarUrl`,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:`ThreadAsset`,kind:`LinkedField`,name:`topAssets`,plural:!0,selections:[i,{alias:null,args:null,kind:`ScalarField`,name:`assetType`,storageKey:null},c,l,{alias:null,args:null,kind:`ScalarField`,name:`backendUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPrimary`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`previewURL`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mediaType`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAssetExternalMetadata`,kind:`LinkedField`,name:`externalMetadata`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`url`,storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`attachmentURLs`,storageKey:null},{alias:null,args:null,concreteType:`ThreadTaskSchedule`,kind:`LinkedField`,name:`taskSchedule`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`wakeAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`nextRun`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasCron`,storageKey:null},{alias:null,args:null,concreteType:`ThreadAutomation`,kind:`LinkedField`,name:`automations`,plural:!0,selections:[i,{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null}],storageKey:null}],storageKey:null}],d={alias:null,args:null,concreteType:`PageInfo`,kind:`LinkedField`,name:`pageInfo`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`endCursor`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`hasNextPage`,storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[e,t],kind:`Fragment`,metadata:null,name:`SpaceProjectThreadsUpdatesRelaySubscription`,selections:[{alias:null,args:n,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:r,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[i,a,{alias:null,args:o,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[s,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`SpaceProjectThreadFields`,selections:u,args:null,argumentDefinitions:[]}],storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:`threadGroup(filter:{"modes":[],"project":{}},type:"ALL")`}],storageKey:null}],type:`Subscription`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:[t,e],kind:`Operation`,name:`SpaceProjectThreadsUpdatesRelaySubscription`,selections:[{alias:null,args:n,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:r,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`threadGroup`,plural:!1,selections:[i,a,{alias:null,args:o,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[s,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:u,storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:`threadGroup(filter:{"modes":[],"project":{}},type:"ALL")`}],storageKey:null}]},params:{cacheID:`a0aa9ed6bb491469b1cd1064bf82b82b`,id:`1230a5f9ace88db2dcb8f27c1528d746a0bc0fd3a9f2944781a1445c24547b8f`,metadata:{},name:`SpaceProjectThreadsUpdatesRelaySubscription`,operationKind:`subscription`,text:`subscription SpaceProjectThreadsUpdatesRelaySubscription(
  $spaceId: ID!
  $first: Int
) {
  space(id: $spaceId) {
    threadGroup(type: ALL, filter: {modes: [], project: {}}) {
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
}
`}}})();a.hash=`2e80b5ec34d0d99549b7880e1741c109`;var o=t();async function s({spaceUuid:e,ownThreadsOnly:t,searchTerm:r,groupType:a,count:s,cursor:c}){let u=(await(0,o.fetchQuery)(n(),i,{spaceId:e,ownThreadsOnly:t,searchTerm:r||null,groupType:a,count:s,cursor:c}).toPromise())?.viewer?.space?.threadGroup.threads;return u?{rows:l(u.edges,a),endCursor:u.pageInfo.endCursor??null,hasNextPage:u.pageInfo.hasNextPage}:null}function c({spaceUuid:e,first:t,onSnapshot:r,onTerminalError:i}){let s=(0,o.requestSubscription)(n(),{subscription:a,variables:{spaceId:e,first:t},onNext:e=>{let t=e?.space.threadGroup.threads;t&&r({rows:l(t.edges,`ALL`),endCursor:t.pageInfo.endCursor??null,hasNextPage:t.pageInfo.hasNextPage})},onError:i,onCompleted:()=>{i(Error(`subscription completed by server`))}});return()=>s.dispose()}function l(e,t){let n=[];for(let i of e){if(!i.node)continue;let e=(0,o.readInlineData)(r,i.node);e.isArchived===(t===`ARCHIVED`)&&n.push({id:e.id,node:e})}return n}export{s as fetchSpaceProjectThreadsPage,c as subscribeSpaceProjectThreads};
//# sourceMappingURL=spaceProjectThreadsGraphQLClient-DclGesm3.js.map
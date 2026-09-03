import{o as e}from"./rolldown-runtime-CNgF_TGW.js";import{$ as t,et as n}from"./vendors-B0VRXiug.js";import{f as r}from"./aether-core-6TfbVOZ_.js";import{t as i}from"./ArtifactCommentsContext-gWSJgcOw.js";import{n as a,t as o}from"./react-relay-DuJ9gA7S.js";import{t as s}from"./provider-D4tWJj6C.js";import{n as c,t as l}from"./artifactCommentAnalytics-ULDE7N2O.js";var u=n(),d=a(),f={kind:`InlineDataFragment`,name:`ArtifactCommentConversationFields`};f.hash=`145e8afbace7f6efc16ea9f9a4f1fca6`;var p=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`assetId`}],t=[{kind:`Variable`,name:`id`,variableName:`assetId`}],n=[{kind:`Literal`,name:`first`,value:50},{kind:`Literal`,name:`sortOrder`,value:`NEWEST`}],r={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`body`,storageKey:null},a={alias:null,args:null,kind:`ScalarField`,name:`createdAt`,storageKey:null},o={alias:null,args:null,concreteType:`ArtifactCommentAuthor`,kind:`LinkedField`,name:`author`,plural:!1,selections:[r,{alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`username`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`image`,storageKey:null}],storageKey:null},s={alias:null,args:null,kind:`ScalarField`,name:`kind`,storageKey:null},c=[{alias:null,args:null,kind:`ScalarField`,name:`blockIndex`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`offset`,storageKey:null}],l=[s],u=[{alias:null,args:null,kind:`ScalarField`,name:`x`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`y`,storageKey:null}],d={alias:null,args:null,concreteType:`ArtifactCommentNormalizedRegion`,kind:`LinkedField`,name:`region`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`start`,plural:!1,selections:u,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`end`,plural:!1,selections:u,storageKey:null}],storageKey:null},f={alias:null,args:null,kind:`ScalarField`,name:`pageNumber`,storageKey:null},p=[{alias:null,args:null,concreteType:`ArtifactComment`,kind:`LinkedField`,name:`comment`,plural:!1,selections:[r,{alias:null,args:null,kind:`ScalarField`,name:`sourceAssetId`,storageKey:null},i,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`revision`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`replyCount`,storageKey:null},a,{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`resolvedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`canResolve`,storageKey:null},o,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`anchor`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[s,{alias:null,args:null,kind:`ScalarField`,name:`textRepresentation`,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`start`,plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`end`,plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`selection`,storageKey:null}],type:`ArtifactCommentTextSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:l,type:`ArtifactCommentCodeSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[s,d,f],type:`ArtifactCommentVisualRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[s,{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`point`,plural:!1,selections:u,storageKey:null},f],type:`ArtifactCommentVisualPointAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:l,type:`ArtifactCommentSpreadsheetRangeAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[s,{alias:null,args:null,kind:`ScalarField`,name:`slideNumber`,storageKey:null},d],type:`ArtifactCommentSlideRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:l,type:`ArtifactCommentGeneralAnchor`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentReply`,kind:`LinkedField`,name:`replies`,plural:!0,selections:[r,i,a,o],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`ArtifactCommentConversationsRelayQuery`,selections:[{alias:null,args:t,concreteType:`Artifact`,kind:`LinkedField`,name:`artifact`,plural:!1,selections:[{alias:null,args:n,concreteType:`ArtifactCommentConversationConnection`,kind:`LinkedField`,name:`commentConversations`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversationEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`ArtifactCommentConversationFields`,selections:p,args:null,argumentDefinitions:[]}],storageKey:null}],storageKey:null}],storageKey:`commentConversations(first:50,sortOrder:"NEWEST")`}],storageKey:null}],type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`ArtifactCommentConversationsRelayQuery`,selections:[{alias:null,args:t,concreteType:`Artifact`,kind:`LinkedField`,name:`artifact`,plural:!1,selections:[{alias:null,args:n,concreteType:`ArtifactCommentConversationConnection`,kind:`LinkedField`,name:`commentConversations`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversationEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`node`,plural:!1,selections:p,storageKey:null}],storageKey:null}],storageKey:`commentConversations(first:50,sortOrder:"NEWEST")`},r],storageKey:null}]},params:{cacheID:`fef19026113002764f04fb677a17a510`,id:`f5f956dc75f3b6416f4733f6662e50cc79200a397b4039471e20ee04f97ff19a`,metadata:{},name:`ArtifactCommentConversationsRelayQuery`,operationKind:`query`,text:`query ArtifactCommentConversationsRelayQuery(
  $assetId: ID!
) {
  artifact(id: $assetId) {
    commentConversations(first: 50, sortOrder: NEWEST) {
      edges {
        node {
          ...ArtifactCommentConversationFields
        }
      }
    }
    id
  }
}

fragment ArtifactCommentConversationFields on ArtifactCommentConversation {
  comment {
    id
    sourceAssetId
    body
    status
    revision
    replyCount
    createdAt
    updatedAt
    resolvedAt
    canResolve
    author {
      id
      name
      username
      image
    }
    anchor {
      __typename
      ... on ArtifactCommentTextSelectionAnchor {
        kind
        textRepresentation
        start {
          blockIndex
          offset
        }
        end {
          blockIndex
          offset
        }
        selection
      }
      ... on ArtifactCommentCodeSelectionAnchor {
        kind
      }
      ... on ArtifactCommentVisualRegionAnchor {
        kind
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
        pageNumber
      }
      ... on ArtifactCommentVisualPointAnchor {
        kind
        point {
          x
          y
        }
        pageNumber
      }
      ... on ArtifactCommentSpreadsheetRangeAnchor {
        kind
      }
      ... on ArtifactCommentSlideRegionAnchor {
        kind
        slideNumber
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
      }
      ... on ArtifactCommentGeneralAnchor {
        kind
      }
    }
  }
  replies {
    id
    body
    createdAt
    author {
      id
      name
      username
      image
    }
  }
}
`}}})();p.hash=`5623fd15ab102aa69629d4a3bb777286`;var m=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`assetId`}],t=[{kind:`Variable`,name:`assetId`,variableName:`assetId`},{kind:`Literal`,name:`first`,value:50}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`body`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`createdAt`,storageKey:null},a={alias:null,args:null,concreteType:`ArtifactCommentAuthor`,kind:`LinkedField`,name:`author`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`username`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`image`,storageKey:null}],storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`kind`,storageKey:null},s=[{alias:null,args:null,kind:`ScalarField`,name:`blockIndex`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`offset`,storageKey:null}],c=[o],l=[{alias:null,args:null,kind:`ScalarField`,name:`x`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`y`,storageKey:null}],u={alias:null,args:null,concreteType:`ArtifactCommentNormalizedRegion`,kind:`LinkedField`,name:`region`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`start`,plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`end`,plural:!1,selections:l,storageKey:null}],storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`pageNumber`,storageKey:null},f=[{alias:null,args:null,concreteType:`ArtifactComment`,kind:`LinkedField`,name:`comment`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`sourceAssetId`,storageKey:null},r,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`revision`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`replyCount`,storageKey:null},i,{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`resolvedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`canResolve`,storageKey:null},a,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`anchor`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`textRepresentation`,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`start`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`end`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`selection`,storageKey:null}],type:`ArtifactCommentTextSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentCodeSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,u,d],type:`ArtifactCommentVisualRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`point`,plural:!1,selections:l,storageKey:null},d],type:`ArtifactCommentVisualPointAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentSpreadsheetRangeAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`slideNumber`,storageKey:null},u],type:`ArtifactCommentSlideRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentGeneralAnchor`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentReply`,kind:`LinkedField`,name:`replies`,plural:!0,selections:[n,r,i,a],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`ArtifactCommentConversationsUpdatedRelaySubscription`,selections:[{alias:null,args:t,concreteType:`ArtifactCommentConversationConnection`,kind:`LinkedField`,name:`artifactCommentConversations`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversationEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`ArtifactCommentConversationFields`,selections:f,args:null,argumentDefinitions:[]}],storageKey:null}],storageKey:null}],storageKey:null}],type:`Subscription`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`ArtifactCommentConversationsUpdatedRelaySubscription`,selections:[{alias:null,args:t,concreteType:`ArtifactCommentConversationConnection`,kind:`LinkedField`,name:`artifactCommentConversations`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversationEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`node`,plural:!1,selections:f,storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:`51f1e66242d76b611321ccc745238304`,id:`29d761519d3b07d96b36b232cd7efb8eae33856a086b127c4a32e1329fe6f802`,metadata:{},name:`ArtifactCommentConversationsUpdatedRelaySubscription`,operationKind:`subscription`,text:`subscription ArtifactCommentConversationsUpdatedRelaySubscription(
  $assetId: ID!
) {
  artifactCommentConversations(assetId: $assetId, first: 50) {
    edges {
      node {
        ...ArtifactCommentConversationFields
      }
    }
  }
}

fragment ArtifactCommentConversationFields on ArtifactCommentConversation {
  comment {
    id
    sourceAssetId
    body
    status
    revision
    replyCount
    createdAt
    updatedAt
    resolvedAt
    canResolve
    author {
      id
      name
      username
      image
    }
    anchor {
      __typename
      ... on ArtifactCommentTextSelectionAnchor {
        kind
        textRepresentation
        start {
          blockIndex
          offset
        }
        end {
          blockIndex
          offset
        }
        selection
      }
      ... on ArtifactCommentCodeSelectionAnchor {
        kind
      }
      ... on ArtifactCommentVisualRegionAnchor {
        kind
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
        pageNumber
      }
      ... on ArtifactCommentVisualPointAnchor {
        kind
        point {
          x
          y
        }
        pageNumber
      }
      ... on ArtifactCommentSpreadsheetRangeAnchor {
        kind
      }
      ... on ArtifactCommentSlideRegionAnchor {
        kind
        slideNumber
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
      }
      ... on ArtifactCommentGeneralAnchor {
        kind
      }
    }
  }
  replies {
    id
    body
    createdAt
    author {
      id
      name
      username
      image
    }
  }
}
`}}})();m.hash=`eb0af87a733915e8cbda40837ea2574c`;var h=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`input`}],t=[{kind:`Variable`,name:`input`,variableName:`input`}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`body`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`createdAt`,storageKey:null},a={alias:null,args:null,concreteType:`ArtifactCommentAuthor`,kind:`LinkedField`,name:`author`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`username`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`image`,storageKey:null}],storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`kind`,storageKey:null},s=[{alias:null,args:null,kind:`ScalarField`,name:`blockIndex`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`offset`,storageKey:null}],c=[o],l=[{alias:null,args:null,kind:`ScalarField`,name:`x`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`y`,storageKey:null}],u={alias:null,args:null,concreteType:`ArtifactCommentNormalizedRegion`,kind:`LinkedField`,name:`region`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`start`,plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`end`,plural:!1,selections:l,storageKey:null}],storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`pageNumber`,storageKey:null},f=[{alias:null,args:null,concreteType:`ArtifactComment`,kind:`LinkedField`,name:`comment`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`sourceAssetId`,storageKey:null},r,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`revision`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`replyCount`,storageKey:null},i,{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`resolvedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`canResolve`,storageKey:null},a,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`anchor`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`textRepresentation`,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`start`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`end`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`selection`,storageKey:null}],type:`ArtifactCommentTextSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentCodeSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,u,d],type:`ArtifactCommentVisualRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`point`,plural:!1,selections:l,storageKey:null},d],type:`ArtifactCommentVisualPointAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentSpreadsheetRangeAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`slideNumber`,storageKey:null},u],type:`ArtifactCommentSlideRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentGeneralAnchor`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentReply`,kind:`LinkedField`,name:`replies`,plural:!0,selections:[n,r,i,a],storageKey:null}],p={alias:null,args:null,concreteType:`ArtifactCommentMutationError`,kind:`LinkedField`,name:`error`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`code`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`message`,storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`CreateArtifactCommentRelayMutation`,selections:[{alias:null,args:t,concreteType:`CreateArtifactCommentPayload`,kind:`LinkedField`,name:`createArtifactComment`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`conversation`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`ArtifactCommentConversationFields`,selections:f,args:null,argumentDefinitions:[]}],storageKey:null},p],storageKey:null}],type:`Mutation`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`CreateArtifactCommentRelayMutation`,selections:[{alias:null,args:t,concreteType:`CreateArtifactCommentPayload`,kind:`LinkedField`,name:`createArtifactComment`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`conversation`,plural:!1,selections:f,storageKey:null},p],storageKey:null}]},params:{cacheID:`60407c29e2bbd0465f3ef69b9fe6c3e0`,id:`5f31e8082b45a0d14ac7e6b328b164921252b52cb5e2c0a4081cfdbfbf1b626f`,metadata:{},name:`CreateArtifactCommentRelayMutation`,operationKind:`mutation`,text:`mutation CreateArtifactCommentRelayMutation(
  $input: CreateArtifactCommentInput!
) {
  createArtifactComment(input: $input) {
    conversation {
      ...ArtifactCommentConversationFields
    }
    error {
      code
      message
    }
  }
}

fragment ArtifactCommentConversationFields on ArtifactCommentConversation {
  comment {
    id
    sourceAssetId
    body
    status
    revision
    replyCount
    createdAt
    updatedAt
    resolvedAt
    canResolve
    author {
      id
      name
      username
      image
    }
    anchor {
      __typename
      ... on ArtifactCommentTextSelectionAnchor {
        kind
        textRepresentation
        start {
          blockIndex
          offset
        }
        end {
          blockIndex
          offset
        }
        selection
      }
      ... on ArtifactCommentCodeSelectionAnchor {
        kind
      }
      ... on ArtifactCommentVisualRegionAnchor {
        kind
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
        pageNumber
      }
      ... on ArtifactCommentVisualPointAnchor {
        kind
        point {
          x
          y
        }
        pageNumber
      }
      ... on ArtifactCommentSpreadsheetRangeAnchor {
        kind
      }
      ... on ArtifactCommentSlideRegionAnchor {
        kind
        slideNumber
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
      }
      ... on ArtifactCommentGeneralAnchor {
        kind
      }
    }
  }
  replies {
    id
    body
    createdAt
    author {
      id
      name
      username
      image
    }
  }
}
`}}})();h.hash=`335d352e10baa431c8c19fa832e022c6`;var g=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`input`}],t=[{kind:`Variable`,name:`input`,variableName:`input`}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`body`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`createdAt`,storageKey:null},a={alias:null,args:null,concreteType:`ArtifactCommentAuthor`,kind:`LinkedField`,name:`author`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`username`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`image`,storageKey:null}],storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`kind`,storageKey:null},s=[{alias:null,args:null,kind:`ScalarField`,name:`blockIndex`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`offset`,storageKey:null}],c=[o],l=[{alias:null,args:null,kind:`ScalarField`,name:`x`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`y`,storageKey:null}],u={alias:null,args:null,concreteType:`ArtifactCommentNormalizedRegion`,kind:`LinkedField`,name:`region`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`start`,plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`end`,plural:!1,selections:l,storageKey:null}],storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`pageNumber`,storageKey:null},f=[{alias:null,args:null,concreteType:`ArtifactComment`,kind:`LinkedField`,name:`comment`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`sourceAssetId`,storageKey:null},r,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`revision`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`replyCount`,storageKey:null},i,{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`resolvedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`canResolve`,storageKey:null},a,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`anchor`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`textRepresentation`,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`start`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`end`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`selection`,storageKey:null}],type:`ArtifactCommentTextSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentCodeSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,u,d],type:`ArtifactCommentVisualRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`point`,plural:!1,selections:l,storageKey:null},d],type:`ArtifactCommentVisualPointAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentSpreadsheetRangeAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`slideNumber`,storageKey:null},u],type:`ArtifactCommentSlideRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentGeneralAnchor`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentReply`,kind:`LinkedField`,name:`replies`,plural:!0,selections:[n,r,i,a],storageKey:null}],p={alias:null,args:null,concreteType:`ArtifactCommentMutationError`,kind:`LinkedField`,name:`error`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`code`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`message`,storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`ReplyToArtifactCommentRelayMutation`,selections:[{alias:null,args:t,concreteType:`ReplyToArtifactCommentPayload`,kind:`LinkedField`,name:`replyToArtifactComment`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`conversation`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`ArtifactCommentConversationFields`,selections:f,args:null,argumentDefinitions:[]}],storageKey:null},p],storageKey:null}],type:`Mutation`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`ReplyToArtifactCommentRelayMutation`,selections:[{alias:null,args:t,concreteType:`ReplyToArtifactCommentPayload`,kind:`LinkedField`,name:`replyToArtifactComment`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`conversation`,plural:!1,selections:f,storageKey:null},p],storageKey:null}]},params:{cacheID:`004106df32a90e11c70dfc66e14f2c5c`,id:`b1523285478ee2cf7f9c7d3c0ef66420b8e9eb94b4e04b64309e1aac4715fe60`,metadata:{},name:`ReplyToArtifactCommentRelayMutation`,operationKind:`mutation`,text:`mutation ReplyToArtifactCommentRelayMutation(
  $input: ReplyToArtifactCommentInput!
) {
  replyToArtifactComment(input: $input) {
    conversation {
      ...ArtifactCommentConversationFields
    }
    error {
      code
      message
    }
  }
}

fragment ArtifactCommentConversationFields on ArtifactCommentConversation {
  comment {
    id
    sourceAssetId
    body
    status
    revision
    replyCount
    createdAt
    updatedAt
    resolvedAt
    canResolve
    author {
      id
      name
      username
      image
    }
    anchor {
      __typename
      ... on ArtifactCommentTextSelectionAnchor {
        kind
        textRepresentation
        start {
          blockIndex
          offset
        }
        end {
          blockIndex
          offset
        }
        selection
      }
      ... on ArtifactCommentCodeSelectionAnchor {
        kind
      }
      ... on ArtifactCommentVisualRegionAnchor {
        kind
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
        pageNumber
      }
      ... on ArtifactCommentVisualPointAnchor {
        kind
        point {
          x
          y
        }
        pageNumber
      }
      ... on ArtifactCommentSpreadsheetRangeAnchor {
        kind
      }
      ... on ArtifactCommentSlideRegionAnchor {
        kind
        slideNumber
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
      }
      ... on ArtifactCommentGeneralAnchor {
        kind
      }
    }
  }
  replies {
    id
    body
    createdAt
    author {
      id
      name
      username
      image
    }
  }
}
`}}})();g.hash=`17eac262c3b91e38abc72089112ed6f6`;var _=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`input`}],t=[{kind:`Variable`,name:`input`,variableName:`input`}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`body`,storageKey:null},i={alias:null,args:null,kind:`ScalarField`,name:`createdAt`,storageKey:null},a={alias:null,args:null,concreteType:`ArtifactCommentAuthor`,kind:`LinkedField`,name:`author`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`username`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`image`,storageKey:null}],storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`kind`,storageKey:null},s=[{alias:null,args:null,kind:`ScalarField`,name:`blockIndex`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`offset`,storageKey:null}],c=[o],l=[{alias:null,args:null,kind:`ScalarField`,name:`x`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`y`,storageKey:null}],u={alias:null,args:null,concreteType:`ArtifactCommentNormalizedRegion`,kind:`LinkedField`,name:`region`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`start`,plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`end`,plural:!1,selections:l,storageKey:null}],storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`pageNumber`,storageKey:null},f=[{alias:null,args:null,concreteType:`ArtifactComment`,kind:`LinkedField`,name:`comment`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`sourceAssetId`,storageKey:null},r,{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`revision`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`replyCount`,storageKey:null},i,{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`resolvedAt`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`canResolve`,storageKey:null},a,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`anchor`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`textRepresentation`,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`start`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentTextPosition`,kind:`LinkedField`,name:`end`,plural:!1,selections:s,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`selection`,storageKey:null}],type:`ArtifactCommentTextSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentCodeSelectionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,u,d],type:`ArtifactCommentVisualRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,concreteType:`ArtifactCommentNormalizedPoint`,kind:`LinkedField`,name:`point`,plural:!1,selections:l,storageKey:null},d],type:`ArtifactCommentVisualPointAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentSpreadsheetRangeAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:[o,{alias:null,args:null,kind:`ScalarField`,name:`slideNumber`,storageKey:null},u],type:`ArtifactCommentSlideRegionAnchor`,abstractKey:null},{kind:`InlineFragment`,selections:c,type:`ArtifactCommentGeneralAnchor`,abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:`ArtifactCommentReply`,kind:`LinkedField`,name:`replies`,plural:!0,selections:[n,r,i,a],storageKey:null}],p={alias:null,args:null,concreteType:`ArtifactCommentMutationError`,kind:`LinkedField`,name:`error`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`code`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`message`,storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`ResolveArtifactCommentRelayMutation`,selections:[{alias:null,args:t,concreteType:`ResolveArtifactCommentPayload`,kind:`LinkedField`,name:`resolveArtifactComment`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`conversation`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`ArtifactCommentConversationFields`,selections:f,args:null,argumentDefinitions:[]}],storageKey:null},p],storageKey:null}],type:`Mutation`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`ResolveArtifactCommentRelayMutation`,selections:[{alias:null,args:t,concreteType:`ResolveArtifactCommentPayload`,kind:`LinkedField`,name:`resolveArtifactComment`,plural:!1,selections:[{alias:null,args:null,concreteType:`ArtifactCommentConversation`,kind:`LinkedField`,name:`conversation`,plural:!1,selections:f,storageKey:null},p],storageKey:null}]},params:{cacheID:`63e135a0b0e525b5ac3b969e9fc3bd55`,id:`3be594e461ee24d7112abf57cbb9c07dde7569a7b81f739ef4f7a7cf31730010`,metadata:{},name:`ResolveArtifactCommentRelayMutation`,operationKind:`mutation`,text:`mutation ResolveArtifactCommentRelayMutation(
  $input: ResolveArtifactCommentInput!
) {
  resolveArtifactComment(input: $input) {
    conversation {
      ...ArtifactCommentConversationFields
    }
    error {
      code
      message
    }
  }
}

fragment ArtifactCommentConversationFields on ArtifactCommentConversation {
  comment {
    id
    sourceAssetId
    body
    status
    revision
    replyCount
    createdAt
    updatedAt
    resolvedAt
    canResolve
    author {
      id
      name
      username
      image
    }
    anchor {
      __typename
      ... on ArtifactCommentTextSelectionAnchor {
        kind
        textRepresentation
        start {
          blockIndex
          offset
        }
        end {
          blockIndex
          offset
        }
        selection
      }
      ... on ArtifactCommentCodeSelectionAnchor {
        kind
      }
      ... on ArtifactCommentVisualRegionAnchor {
        kind
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
        pageNumber
      }
      ... on ArtifactCommentVisualPointAnchor {
        kind
        point {
          x
          y
        }
        pageNumber
      }
      ... on ArtifactCommentSpreadsheetRangeAnchor {
        kind
      }
      ... on ArtifactCommentSlideRegionAnchor {
        kind
        slideNumber
        region {
          start {
            x
            y
          }
          end {
            x
            y
          }
        }
      }
      ... on ArtifactCommentGeneralAnchor {
        kind
      }
    }
  }
  replies {
    id
    body
    createdAt
    author {
      id
      name
      username
      image
    }
  }
}
`}}})();_.hash=`b07b65387b62f5a701c619766b3bac10`;var v=e(t(),1),y=o(),b={code:`INTERNAL`,message:`Comments are temporarily unavailable.`};function x(e){return{id:e.id??null,name:e.name??null,username:e.username??null,image:e.image??null}}function S(e){switch(e.__typename){case`ArtifactCommentTextSelectionAnchor`:return e.textRepresentation===`MARKDOWN_V1`?{kind:`TEXT_SELECTION`,textRepresentation:`MARKDOWN_V1`,start:e.start,end:e.end,selection:e.selection}:{kind:`GENERAL`};case`ArtifactCommentSlideRegionAnchor`:return{kind:`SLIDE_REGION`,slideNumber:e.slideNumber,region:e.region};case`ArtifactCommentVisualPointAnchor`:return{kind:`VISUAL_POINT`,point:e.point,pageNumber:e.pageNumber??null};case`ArtifactCommentCodeSelectionAnchor`:return{kind:`CODE_SELECTION`};case`ArtifactCommentVisualRegionAnchor`:return{kind:`VISUAL_REGION`,region:e.region,pageNumber:e.pageNumber??null};case`ArtifactCommentSpreadsheetRangeAnchor`:return{kind:`SPREADSHEET_RANGE`};default:return{kind:`GENERAL`}}}function C(e,t){let n=(0,d.readInlineData)(f,e);return n.comment.sourceAssetId!==t||n.comment.status!==`OPEN`&&n.comment.status!==`RESOLVED`?null:{comment:{id:n.comment.id,sourceAssetId:n.comment.sourceAssetId,body:n.comment.body,author:x(n.comment.author),anchor:S(n.comment.anchor),status:n.comment.status,revision:n.comment.revision,createdAtMs:Date.parse(n.comment.createdAt),updatedAtMs:Date.parse(n.comment.updatedAt),resolvedAtMs:n.comment.resolvedAt?Date.parse(n.comment.resolvedAt):null,canResolve:n.comment.canResolve},replies:n.replies.map(e=>({id:e.id,body:e.body,author:x(e.author),createdAtMs:Date.parse(e.createdAt)}))}}function w(e,t){try{return C(e,t)}catch{return null}}function T(e,t){return e.map(e=>w(e,t)).filter(e=>e!==null)}function E(e){return e?{code:e.code,message:e.message}:null}function D(e){return e.kind===`TEXT_SELECTION`?{kind:`TEXT_SELECTION`,textSelection:{textRepresentation:e.textRepresentation,start:e.start,end:e.end,selection:e.selection}}:e.kind===`VISUAL_POINT`?{kind:`VISUAL_POINT`,visualPoint:{point:e.point,pageNumber:e.pageNumber}}:e.kind===`VISUAL_REGION`?{kind:`VISUAL_REGION`,visualRegion:{region:e.region,pageNumber:e.pageNumber}}:{kind:`SLIDE_REGION`,slideRegion:{slideNumber:e.slideNumber,region:e.region}}}function O(e,t){let n=e.findIndex(e=>e.comment.id===t.comment.id);return n===-1?[t,...e]:e.map((e,r)=>r===n?t:e)}function k(e,t){let n=e.find(e=>e.comment.id===t)?.comment.anchor;return n?c(n):`text_selection`}var A=v.memo(j);function j({assetId:e,assetType:t,anchorKind:n,textAnchorLayout:a,conversationPresentation:o=`popover`,onAvailabilityChange:s,children:d}){let f=(0,y.useRelayEnvironment)(),{track:x}=r(),S=(0,v.useRef)(e);S.current=e;let[C,A]=(0,v.useState)(`loading`),[j,M]=(0,v.useState)([]),[N,P]=(0,v.useState)(!1),[F,I]=(0,v.useState)(null),[L,R]=(0,v.useState)(null),[z]=(0,y.useMutation)(h),[B]=(0,y.useMutation)(g),[V]=(0,y.useMutation)(_),H=(0,v.useCallback)(()=>{A(`unavailable`),M([])},[]),U=(0,v.useCallback)(()=>{try{return(0,y.fetchQuery)(f,p,{assetId:e},{fetchPolicy:`network-only`}).subscribe({next:t=>{if(S.current!==e)return;let n=t.artifact?.commentConversations;if(!n?.edges){H();return}let r=T(n.edges.map(e=>e.node),e);A(`available`),M(r)},error:()=>{S.current===e&&H()}})}catch{return H(),null}},[e,f,H]);(0,v.useEffect)(()=>{A(`loading`),M([]);let t=()=>{};try{let n=(0,y.requestSubscription)(f,{subscription:m,variables:{assetId:e},onNext:t=>{if(!t||S.current!==e)return;let n=t.artifactCommentConversations;if(!n?.edges){H();return}A(`available`),M(T(n.edges.map(e=>e.node),e))},onError:()=>{U()}});t=()=>n.dispose()}catch{U()}return t},[e,f,U,H]),(0,v.useEffect)(()=>{C!==`loading`&&s?.(C===`available`)},[C,s]),(0,v.useEffect)(()=>{if(!N)return;let e=e=>{e.key===`Escape`&&(P(!1),I(null))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[N]);let W=(0,v.useCallback)(()=>{x(l({name:`computer artifact comment creation started`,data:{assetType:t,anchorKind:n}})),I(null),P(!0)},[n,t,x]),G=(0,v.useCallback)(()=>{P(!1),I(null),R(null)},[]),K=(0,v.useCallback)(e=>{R(e)},[]),q=(0,v.useCallback)(()=>{U()},[U]),J=(0,v.useCallback)((n,r)=>new Promise(i=>{z({variables:{input:{assetId:e,commentId:crypto.randomUUID(),body:r,anchor:D(n)}},onCompleted:r=>{let a=E(r.createArtifactComment.error),o=r.createArtifactComment.conversation;if(a||!o){i({conversation:null,error:a??b});return}let s=w(o,e);if(!s){i({conversation:null,error:b});return}M(e=>O(e,s)),x(l({name:`computer artifact comment created`,data:{assetType:t,anchorKind:c(n),selectedAction:`created`}})),i({conversation:s,error:null})},onError:()=>i({conversation:null,error:b})})}),[e,t,z,x]),Y=(0,v.useCallback)((n,r,i)=>new Promise(a=>{B({variables:{input:{assetId:e,commentId:n,replyId:crypto.randomUUID(),body:i,expectedRevision:r}},onCompleted:r=>{let i=E(r.replyToArtifactComment.error),o=r.replyToArtifactComment.conversation;if(i||!o){i?.code===`CONFLICT`&&q(),a(i??b);return}let s=w(o,e);if(!s){a(b);return}M(e=>O(e,s)),x(l({name:`computer artifact comment replied`,data:{assetType:t,anchorKind:k(j,n),selectedAction:`replied`}})),a(null)},onError:()=>a(b)})}),[e,t,B,j,q,x]),X=(0,v.useCallback)((n,r)=>new Promise(i=>{V({variables:{input:{assetId:e,commentId:n,expectedRevision:r}},onCompleted:r=>{let a=E(r.resolveArtifactComment.error),o=r.resolveArtifactComment.conversation;if(a||!o){a?.code===`CONFLICT`&&q(),i(a??b);return}let s=w(o,e);if(!s){i(b);return}M(e=>O(e,s)),x(l({name:`computer artifact comment resolved`,data:{assetType:t,anchorKind:k(j,n),selectedAction:`resolved`}})),i(null)},onError:()=>i(b)})}),[e,t,V,j,q,x]),Z=(0,v.useMemo)(()=>({assetId:e,assetType:t,anchorKind:n,textAnchorLayout:a,conversationPresentation:o,conversations:j,unresolvedCount:j.filter(e=>e.comment.status===`OPEN`).length,activeConversationId:L,isCreating:N,visualDraftAnchor:F,setVisualDraftAnchor:I,selectConversation:K,startCreating:W,cancelCreating:G,createComment:J,replyToComment:Y,resolveComment:X,refresh:q}),[n,L,e,t,o,a,G,j,J,N,F,q,Y,X,K,W]);return(0,u.jsx)(i.Provider,{value:C===`available`?Z:null,children:d})}var M=v.memo(function(e){return(0,u.jsx)(s,{children:(0,u.jsx)(A,{...e})})});export{M as ArtifactCommentsProvider};
//# sourceMappingURL=ArtifactCommentsProvider-DdaNAKKN.js.map
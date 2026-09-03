import{ca as e,ia as t,ua as n}from"./platform-core-D8IQmtf1.js";import"./useRecentItemsQuery-Y30pQap8.js";import{o as r}from"./stringUtils-DrAJOcLc.js";import{n as i,t as a}from"./react-relay-DuJ9gA7S.js";import{t as o}from"./graphql-preload-BXRh_MEx.js";import{a as s,c,i as l,o as u,s as d,t as f}from"./sidebarRecentItemsState-DILdl22P.js";import{t as p}from"./createRetainedSubscription-DZ8uIk33.js";import{r as m}from"./automationRunRoute-B34W3edU.js";import{t as h}from"./recentThreadLink-BzwAb8gU.js";i();var g={kind:`InlineDataFragment`,name:`SidebarRecentItemFields`};g.hash=`8731e1f1404bff61924d8b65d7b3eab2`;var _=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`first`}],t=[{kind:`Literal`,name:`types`,value:[`THREAD`,`AUTOMATION`]}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r=[{kind:`Variable`,name:`first`,variableName:`first`}],i={alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},a={alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},s={alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},c={alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},l={alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},u={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},d=[i,{alias:null,args:null,kind:`ScalarField`,name:`activityAt`,storageKey:null},{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`object`,plural:!1,selections:[a,{kind:`InlineFragment`,selections:[n,o,{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},s,c,l,{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},i,u,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[a,{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[u],type:`EmojiAppearance`,abstractKey:null}],storageKey:null}],storageKey:null}],type:`Thread`,abstractKey:null},{kind:`InlineFragment`,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`automationId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`collectionUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPinned`,storageKey:null},{alias:null,args:null,concreteType:`AutomationRun`,kind:`LinkedField`,name:`latestRun`,plural:!1,selections:[n,o,s,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`thread`,plural:!1,selections:[n,o,s,l,c],storageKey:null}],storageKey:null}],type:`Automation`,abstractKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`SidebarRecentItemsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{alias:null,args:t,concreteType:`RecentSidebarItemGroup`,kind:`LinkedField`,name:`recentSidebarItems`,plural:!1,selections:[n,{alias:null,args:r,concreteType:`RecentSidebarItemConnection`,kind:`LinkedField`,name:`items`,plural:!1,selections:[{alias:null,args:null,concreteType:`RecentSidebarItemEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`RecentSidebarItem`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`SidebarRecentItemFields`,selections:d,args:null,argumentDefinitions:[]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:`recentSidebarItems(types:["THREAD","AUTOMATION"])`}],storageKey:null}],type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`SidebarRecentItemsRelayQuery`,selections:[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{alias:null,args:t,concreteType:`RecentSidebarItemGroup`,kind:`LinkedField`,name:`recentSidebarItems`,plural:!1,selections:[n,{alias:null,args:r,concreteType:`RecentSidebarItemConnection`,kind:`LinkedField`,name:`items`,plural:!1,selections:[{alias:null,args:null,concreteType:`RecentSidebarItemEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`RecentSidebarItem`,kind:`LinkedField`,name:`node`,plural:!1,selections:d,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:`recentSidebarItems(types:["THREAD","AUTOMATION"])`}],storageKey:null}]},params:{cacheID:`c7dcc479beb09dfaea4bca5e87efbcaf`,id:`6a8a299f2db77cd359e8b9770f751a25711ced95b88e400432d89b3f48319f39`,metadata:{},name:`SidebarRecentItemsRelayQuery`,operationKind:`query`,text:`query SidebarRecentItemsRelayQuery(
  $first: Int
) {
  viewer {
    recentSidebarItems(types: [THREAD, AUTOMATION]) {
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
}
`}}})();_.hash=`c1e59a5c0b73bb267d25459997f138ac`;var v=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`first`}],t={kind:`Variable`,name:`first`,variableName:`first`},n=[t,{kind:`Literal`,name:`types`,value:[`THREAD`,`AUTOMATION`]}],r={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},i=[t],a={alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},o={alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},s={alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},c={alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},l={alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},u={alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},d={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},f=[a,{alias:null,args:null,kind:`ScalarField`,name:`activityAt`,storageKey:null},{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`object`,plural:!1,selections:[o,{kind:`InlineFragment`,selections:[r,s,{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},c,l,u,{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null},a,d,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[o,{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[d],type:`EmojiAppearance`,abstractKey:null}],storageKey:null}],storageKey:null}],type:`Thread`,abstractKey:null},{kind:`InlineFragment`,selections:[r,{alias:null,args:null,kind:`ScalarField`,name:`automationId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`collectionUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`state`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isPinned`,storageKey:null},{alias:null,args:null,concreteType:`AutomationRun`,kind:`LinkedField`,name:`latestRun`,plural:!1,selections:[r,s,c,{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`thread`,plural:!1,selections:[r,s,c,u,l],storageKey:null}],storageKey:null}],type:`Automation`,abstractKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`SidebarRecentItemsUpdatesRelaySubscription`,selections:[{alias:null,args:n,concreteType:`RecentSidebarItemGroup`,kind:`LinkedField`,name:`recentSidebarItems`,plural:!1,selections:[r,{alias:null,args:i,concreteType:`RecentSidebarItemConnection`,kind:`LinkedField`,name:`items`,plural:!1,selections:[{alias:null,args:null,concreteType:`RecentSidebarItemEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`RecentSidebarItem`,kind:`LinkedField`,name:`node`,plural:!1,selections:[{kind:`InlineDataFragmentSpread`,name:`SidebarRecentItemFields`,selections:f,args:null,argumentDefinitions:[]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:`Subscription`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`SidebarRecentItemsUpdatesRelaySubscription`,selections:[{alias:null,args:n,concreteType:`RecentSidebarItemGroup`,kind:`LinkedField`,name:`recentSidebarItems`,plural:!1,selections:[r,{alias:null,args:i,concreteType:`RecentSidebarItemConnection`,kind:`LinkedField`,name:`items`,plural:!1,selections:[{alias:null,args:null,concreteType:`RecentSidebarItemEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,concreteType:`RecentSidebarItem`,kind:`LinkedField`,name:`node`,plural:!1,selections:f,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:`64f2b1ba1db5f06b4ab4bc77dea20b0d`,id:`ae5c13dbf50b4049a5117581dc6a7cb5cf63a75a106f75b6918fbbb86d339d89`,metadata:{},name:`SidebarRecentItemsUpdatesRelaySubscription`,operationKind:`subscription`,text:`subscription SidebarRecentItemsUpdatesRelaySubscription(
  $first: Int
) {
  recentSidebarItems(first: $first, types: [THREAD, AUTOMATION]) {
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
}
`}}})();v.hash=`739a0089bc13442b156aa314c87eed93`;var y=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`first`}],t=[{kind:`Variable`,name:`first`,variableName:`first`}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},i=[{alias:null,args:null,concreteType:`Viewer`,kind:`LinkedField`,name:`viewer`,plural:!1,selections:[{alias:null,args:t,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`sidebarRecentThreads`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},{alias:null,args:t,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`frontendContextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},r,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[r],type:`EmojiAppearance`,abstractKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`SidebarRecentThreadsRelayQuery`,selections:i,type:`Query`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`SidebarRecentThreadsRelayQuery`,selections:i},params:{cacheID:`277244147e8ca025e6d58dde1e365705`,id:`30708478f974c6df874ff662f5c02c80926f5a1fd84bf489560957c59476b04c`,metadata:{},name:`SidebarRecentThreadsRelayQuery`,operationKind:`query`,text:`query SidebarRecentThreadsRelayQuery(
  $first: Int
) {
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
}
`}}})();y.hash=`c6aed3693a02fec1f89cdeec43142370`;var b=(function(){var e=[{defaultValue:null,kind:`LocalArgument`,name:`first`}],t=[{kind:`Variable`,name:`first`,variableName:`first`}],n={alias:null,args:null,kind:`ScalarField`,name:`id`,storageKey:null},r={alias:null,args:null,kind:`ScalarField`,name:`emoji`,storageKey:null},i=[{alias:null,args:t,concreteType:`ThreadGroup`,kind:`LinkedField`,name:`sidebarRecentThreads`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`type`,storageKey:null},{alias:null,args:t,concreteType:`ThreadConnection`,kind:`LinkedField`,name:`threads`,plural:!1,selections:[{alias:null,args:null,concreteType:`ThreadEdge`,kind:`LinkedField`,name:`edges`,plural:!0,selections:[{alias:null,args:null,kind:`ScalarField`,name:`cursor`,storageKey:null},{alias:null,args:null,concreteType:`Thread`,kind:`LinkedField`,name:`node`,plural:!1,selections:[n,{alias:null,args:null,kind:`ScalarField`,name:`contextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`frontendContextUUID`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`entryId`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`name`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`mode`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`variant`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`status`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`answerPreview`,storageKey:null},{alias:null,args:null,concreteType:`ThreadSpace`,kind:`LinkedField`,name:`space`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`title`,storageKey:null},r,{alias:null,args:null,concreteType:null,kind:`LinkedField`,name:`appearance`,plural:!1,selections:[{alias:null,args:null,kind:`ScalarField`,name:`__typename`,storageKey:null},{kind:`InlineFragment`,selections:[{alias:null,args:null,kind:`ScalarField`,name:`icon`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`color`,storageKey:null}],type:`IconAppearance`,abstractKey:null},{kind:`InlineFragment`,selections:[r],type:`EmojiAppearance`,abstractKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`spaceUuid`,storageKey:null}],storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`isUnread`,storageKey:null},{alias:null,args:null,kind:`ScalarField`,name:`updatedAt`,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:`Fragment`,metadata:null,name:`SidebarRecentThreadsUpdatesRelaySubscription`,selections:i,type:`Subscription`,abstractKey:null},kind:`Request`,operation:{argumentDefinitions:e,kind:`Operation`,name:`SidebarRecentThreadsUpdatesRelaySubscription`,selections:i},params:{cacheID:`202f49d477b7ebe5de18c12018ea84cc`,id:`8166d513e343095336c56d1dfacbe4fb72fdb9fd743e3fb96ce8d488a63d2323`,metadata:{},name:`SidebarRecentThreadsUpdatesRelaySubscription`,operationKind:`subscription`,text:`subscription SidebarRecentThreadsUpdatesRelaySubscription(
  $first: Int
) {
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
`}}})();b.hash=`6f7e526696767ad0be71dbe459610b9f`;var x=a(),S=20,C={BLOCKED:`blocked`,COMPLETED:`completed`,PENDING:`pending`,SLEEPING:`sleeping`};function w(e){let t=e?.emoji==null?{}:{emoji:e.emoji},n=e?.appearance;return n?.__typename===`IconAppearance`?{...t,appearance:{icon:n.icon,color:n.color??`neutral`,emoji:null}}:n?.__typename===`EmojiAppearance`?{...t,appearance:{icon:null,color:null,emoji:n.emoji}}:t}function T(e){return e.entryId?{uuid:e.entryId,context_uuid:e.contextUUID??null,title:e.name??``,link:h({entryUuid:e.entryId,mode:e.mode,variant:e.variant}),mode_type:e.mode===`COMPUTER`?4:null,variant:e.variant===`ARTICLE`?`article`:`thread`,unread:e.isUnread,collection_uuid:e.space?.spaceUuid??null,...e.answerPreview==null?{}:{answer_preview:e.answerPreview},...e.space?.title==null?{}:{projectTitle:e.space.title,projectIcon:w(e.space)},...e.updatedAt==null?{}:{updated_at:e.updatedAt},status:e.status&&C[e.status]||null}:null}function E(e){if(e.status===`COMPLETED`)return`completed`;if(e.status!==`IN_PROGRESS`)return null;let t=e.thread?.status,n=t?C[t]:null;return n===`blocked`||n===`sleeping`?n:`pending`}function D(e){let t=e.latestRun;if(!e.automationId||!t)return null;let n=t.thread?.contextUUID??t.contextUUID,r=E(t);return{uuid:e.automationId,context_uuid:n??null,title:e.title,link:m(e.automationId,t.id),mode_type:4,variant:`thread`,unread:r===`pending`?!1:t.thread?.isUnread??!1,...t.thread?.answerPreview==null?{}:{answer_preview:t.thread.answerPreview},...e.activityAt==null?{}:{updated_at:e.activityAt},status:r,sidebarItemType:`automation`,automationId:e.automationId,automationIsPinned:e.isPinned??void 0,automationState:e.state?.toLowerCase()??`active`,collection_uuid:e.collectionUUID??null}}function O(e){let t=[];for(let n of e){if(!n.node)continue;let e=(0,x.readInlineData)(g,n.node),r=e.object;if(r.__typename===`Thread`){let n=T({...r,name:e.title});n&&t.push({...n,sidebarItemType:`thread`});continue}if(r.__typename===`Automation`){let n=D({...r,title:e.title,activityAt:e.activityAt});n&&t.push(n)}}return t}function k(e){return e.flatMap(e=>{let t=e.node?T(e.node):null;return t?[t]:[]})}function A(e){return k(e.sidebarRecentThreads.threads?.edges??[])}function j(e){return k(e.viewer?.sidebarRecentThreads.threads?.edges??[])}function M(e){return O(e.recentSidebarItems.items?.edges??[])}function N(e){return O(e.viewer?.recentSidebarItems?.items?.edges??[])}async function P(){let e=await(0,x.fetchQuery)(o(),y,{first:S}).toPromise();return e?j(e):[]}async function F(){let e=await(0,x.fetchQuery)(o(),_,{first:S}).toPromise();return e?N(e):[]}function I({onSnapshot:e,onError:t}){let r=(0,x.requestSubscription)(o(),{subscription:b,variables:{first:S},onNext:t=>{t&&e(A(t))},onError:e=>{n.error(`Sidebar recent threads subscription failed.`,e),t(e)},onCompleted:()=>{t(Error(`subscription completed by server`))}});return()=>r.dispose()}function L({onSnapshot:e,onError:t}){let r=(0,x.requestSubscription)(o(),{subscription:v,variables:{first:S},onNext:t=>{t&&e(M(t))},onError:e=>{n.error(`Sidebar recent items subscription failed.`,e),t(e)},onCompleted:()=>{t(Error(`subscription completed by server`))}});return()=>r.dispose()}var R=5*6e4,z=200;function B(e){return r(e instanceof Error?e.message:String(e),z)}var V=0,H=!1,U=`initial`,W=null;function G(e){return e?F():P()}function K({requestAutomations:e,onSnapshot:t,onError:n}){return e?L({onSnapshot:t,onError:n}):I({onSnapshot:t,onError:n})}function q(){let e=V,t=H;G(t).then(n=>{e!==V||!l()||s()||d(n,{includesAutomations:t})}).catch(t=>{e!==V||!l()||s()||(n.error(`Sidebar recent items initial query failed.`,t),u())})}var J=p({hiddenParkAfterMs:()=>R,open:({onActive:n,onTerminated:r})=>{let i=V,a=H,o=U,s=e({connection_kind:o}),c=!1;return t(`web.frontend.sidebar_graphql.lifecycle`,{connection_kind:o,stage:`subscription_opened`}),K({requestAutomations:a,onSnapshot:e=>{i===V&&(n(),c||(c=!0,s.addTimingOnce(`web.frontend.sidebar_graphql.time_to_first_snapshot`,{item_count:e.length}),t(`web.frontend.sidebar_graphql.lifecycle`,{connection_kind:o,item_count:e.length,stage:`snapshot_received`})),d(e,{includesAutomations:a}))},onError:e=>{i===V&&(t(`web.frontend.sidebar_graphql.lifecycle`,{connection_kind:o,error_message:B(e),received_snapshot:c,stage:`terminal_error`}),U=`reconnect`,u(),r())}})}});function Y(e){H=e,V+=1,U=`initial`,c(),q(),W?.(),W=J.retain()}function X(e,{includeAutomations:t=!1}={}){t&&!H&&l()&&Y(!0);let n=f(e,{includeAutomations:t});n.isFirst&&(H=t,V+=1,q(),W=J.retain());let r=!1;return()=>{r||(r=!0,n.release()&&(V+=1,W?.(),W=null,c(),H=!1,U=`initial`))}}export{X as retainSidebarRecentItems};
//# sourceMappingURL=sidebarLiveUpdatesManager-cIJDPw3h.js.map
(function(t){function e(e){for(var n,i,c=e[0],o=e[1],u=e[2],h=0,m=[];h<c.length;h++)i=c[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/twitch-dashboard/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"28e1":function(t,e,r){"use strict";var n=r("b53d"),a=r.n(n);a.a},"4e74":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("5f5b"),s=r("2ef0"),i=r.n(s),c=(r("f9e3"),r("2dd8"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Games")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/top-streams"}},[t._v("Top streams")])],1),r("b-container",{attrs:{fluid:""}},[r("router-view")],1)],1)}),o=[],u=(r("5c0b"),r("2877")),l={},h=Object(u["a"])(l,c,o,!1,null,null,null),m=h.exports,p=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-view-container"},[r("h1",[t._v("Most Popular Games")]),r("Search"),r("b-row",t._l(t.GAMES,(function(e){return r("b-col",{key:e.id,attrs:{xl:"2",lg:"3",md:"4",sm:"8",mt:"5"}},[r("b-card",{attrs:{"bg-variant":"dark","text-variant":"white","img-src":e.box_art_url,"img-alt":"Image"}},[r("b-button",{attrs:{variant:"primary"},on:{click:function(r){return t.$router.push({path:"/games/"+e.id})}}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)],1)})),1)],1)},f=[],g=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),b=r("2f62"),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-row",{staticClass:"justify-content-md-center"},[r("b-col",{attrs:{cols:"12",md:"6"}},[r("b-form-input",{attrs:{type:"search",placeholder:"Enter Game Name or Channel Name"},model:{value:t.searchField,callback:function(e){t.searchField=e},expression:"searchField"}}),t.SEARCH_CHANNEL&&t.searchField?r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"},model:{value:t.SEARCH_CHANNEL,callback:function(e){t.SEARCH_CHANNEL=e},expression:"SEARCH_CHANNEL"}},[r("b-card",{staticClass:"mb-3",attrs:{id:"search-card","img-src":t.SEARCH_CHANNEL.profile_image_url,"img-alt":"Card image","img-left":"","bg-variant":"dark","text-variant":"white"}},[r("router-link",{attrs:{to:"/streams/"+this.SEARCH_CHANNEL.login}},[r("b-card-text",[r("p",{staticClass:"search-desc"},[t._v("Channel: "+t._s(t.SEARCH_CHANNEL.display_name))])])],1)],1)],1):t._e(),t.SEARCH_GAME&&t.searchField?r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"},model:{value:t.SEARCH_GAME,callback:function(e){t.SEARCH_GAME=e},expression:"SEARCH_GAME"}},[r("b-card",{staticClass:"mb-3",attrs:{id:"search-card","img-src":t.SEARCH_GAME.box_art_url,"img-alt":"Card image","img-left":"","bg-variant":"dark","text-variant":"white"}},[r("router-link",{attrs:{to:"/games/"+t.SEARCH_GAME.id}},[r("b-card-text",[r("p",{staticClass:"search-desc"},[t._v("Game: "+t._s(t.SEARCH_GAME.name))])])],1)],1)],1):t._e(),t.games.length>0&&t.searchField?r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"},model:{value:t.games[0],callback:function(e){t.$set(t.games,0,e)},expression:"games[0]"}},t._l(t.games,(function(e){return r("b-card",{key:e.id,staticClass:"mb-3",attrs:{id:"search-card","img-src":e.box_art_url,"img-alt":"Card image","img-left":"","bg-variant":"dark","text-variant":"white"}},[r("router-link",{attrs:{to:"/games/"+e.id}},[r("b-card-text",[r("p",{staticClass:"search-desc"},[t._v("Game: "+t._s(e.name))])])],1)],1)})),1):t._e(),t.channels.length>0&&t.searchField?r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"},model:{value:t.channels[0],callback:function(e){t.$set(t.channels,0,e)},expression:"channels[0]"}},t._l(t.channels,(function(e){return r("b-card",{key:e.id,staticClass:"mb-3",attrs:{id:"search-card","img-src":e.thumbnail_url,"img-alt":"Card image","img-left":"","bg-variant":"dark","text-variant":"white"}},[r("router-link",{attrs:{to:"/streams/"+e.user_name}},[r("b-card-text",[r("p",{staticClass:"search-desc"},[t._v("Channel: "+t._s(e.user_name))])])],1)],1)})),1):t._e()],1)],1)],1)},S=[];r("7f7f"),r("6762"),r("2fdb");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach((function(e){Object(g["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var A={data:function(){return{searchField:null,games:[],channels:[]}},computed:w({},Object(b["b"])({SEARCH_CHANNEL:"SEARCH_CHANNEL",SEARCH_GAME:"SEARCH_GAME",SEARCH_GAMES:"GAMES",SEARCH_STREAMS:"GAME_STREAMS",SEARCH_TOP_STREAMS:"GAME_TOP_STREAMS"})),watch:{searchField:function(t,e){this.searchField&&this.debouncedGetAnswer()},$route:function(){this.searchField=null}},created:function(){this.debouncedGetAnswer=_.debounce(this.getAnswer,500),this.$store.dispatch("GET_GAMES"),this.$store.dispatch("GET_TOP_STREAMS",[])},methods:{getAnswer:function(){var t=this;this.$store.dispatch("GET_SEARCH_CHANNEL",this.searchField),this.$store.dispatch("GET_SEARCH_GAME",this.searchField),this.games=[],this.channels=[],this.searchField.length>2&&(this.SEARCH_GAMES.map((function(e){e.name.toLowerCase().includes(t.searchField.toLowerCase())&&t.games.push(e)})),this.SEARCH_STREAMS.map((function(e){e.user_name.toLowerCase().includes(t.searchField.toLowerCase())&&t.channels.push(e)})),this.SEARCH_TOP_STREAMS.map((function(e){e.user_name.toLowerCase().includes(t.searchField.toLowerCase())&&t.channels.push(e)})))}}},O=A,R=(r("65c4"),Object(u["a"])(O,E,S,!1,null,"4586f4c6",null)),y=R.exports;function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(r,!0).forEach((function(e){Object(g["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T={name:"games",components:{Search:y},data:function(){return{}},computed:G({},Object(b["b"])(["GAMES"])),created:function(){this.$store.dispatch("GET_GAMES")},methods:{}},M=T,j=Object(u["a"])(M,d,f,!1,null,null,null),x=j.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-view-container"},[r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Language: "+t.realLang}},["all"!==t.lang?r("b-dropdown-item",{on:{click:function(e){return t.changeLang("all")}}},[t._v("\n      All\n    ")]):t._e(),"ru"!==t.lang?r("b-dropdown-item",{on:{click:function(e){return t.changeLang("ru")}}},[t._v("\n      Russian\n    ")]):t._e(),"en"!==t.lang?r("b-dropdown-item",{on:{click:function(e){return t.changeLang("en")}}},[t._v("\n      English\n    ")]):t._e()],1),r("h1",[t._v("Top 100 Streamers")]),r("Search"),r("b-row",t._l(t.GAME_TOP_STREAMS,(function(e){return r("b-col",{key:e.id,attrs:{xl:"2",lg:"3",md:"4",sm:"8",mt:"5"}},[r("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",title:e.user_name,"img-src":e.thumbnail_url,"img-alt":"Image"}},[r("b-card-text",[e.game_id?r("p",{staticClass:"gameName"},[t._v("\n          "+t._s(t.gameName(e.game_id))+"\n        ")]):t._e(),r("h5",[t._v(t._s(e.title))]),r("h6",[t._v("Currently watching: "+t._s(e.viewer_count))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(r){return t.getUserName(e.user_id)}}},[t._v("\n        "+t._s(e.user_name)+" Stream\n      ")])],1)],1)})),1)],1)},k=[];function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(r,!0).forEach((function(e){Object(g["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $={name:"top-streams",components:{Search:y},data:function(){return{lang:"all"}},computed:H({},Object(b["b"])(["GAME_TOP_STREAMS","GAMES","USER"]),{realLang:function(){var t={all:"All",ru:"Russian",en:"English"};return t[this.lang]}}),created:function(){this.$store.dispatch("GET_GAMES"),this.$store.dispatch("GET_TOP_STREAMS")},methods:{gameName:function(t){if(this.GAMES)for(var e=0;e<this.GAMES.length;e++)if(this.GAMES[e]["id"]===t)return this.GAMES[e]["name"]},getUserName:function(t){var e=this;this.$store.dispatch("GET_USER",t).then((function(){e.$router.push({path:"/streams/".concat(e.USER.login)})}))},changeLang:function(t){this.lang=t,"all"!==this.lang?this.$store.dispatch("GET_TOP_STREAMS",this.lang):this.$store.dispatch("GET_TOP_STREAMS")}}},L=$,D=(r("28e1"),Object(u["a"])(L,P,k,!1,null,"e99d6374",null)),U=D.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-view-container"},[r("h1",[t._v(t._s(t.gameNameVal))]),t._v("\n  Total Viewers: "+t._s(t.totalViewersCount)+"\n  "),r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Language: "+t.realLang}},["all"!==t.lang?r("b-dropdown-item",{on:{click:function(e){return t.changeLang("all")}}},[t._v("\n      All\n    ")]):t._e(),"ru"!==t.lang?r("b-dropdown-item",{on:{click:function(e){return t.changeLang("ru")}}},[t._v("\n      Russian\n    ")]):t._e(),"en"!==t.lang?r("b-dropdown-item",{on:{click:function(e){return t.changeLang("en")}}},[t._v("\n      English\n    ")]):t._e()],1),r("Search"),r("b-row",t._l(t.GAME_STREAMS,(function(e){return r("b-col",{key:e.id,attrs:{xl:"2",lg:"3",md:"4",sm:"8",mt:"5"}},[r("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",title:e.user_name,"img-src":e.thumbnail_url,"img-alt":"Image"}},[r("b-card-text",[r("h5",[t._v(t._s(e.title))]),r("h6",[t._v("Currently watching: "+t._s(e.viewer_count))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(r){return t.getUserName(e.user_id)}}},[t._v("\n        "+t._s(e.user_name)+" Stream\n      ")])],1)],1)})),1)],1)},V=[];function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(r,!0).forEach((function(e){Object(g["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B={name:"gameStreams",components:{Search:y},data:function(){return{lang:"all",totalViewersCount:0,gameNameVal:null}},computed:W({},Object(b["b"])(["GAME_STREAMS","GAMES","USER"]),{realLang:function(){var t={all:"All",ru:"Russian",en:"English"};return t[this.lang]}}),created:function(){var t=this,e=this.$route.params.id,r=["game_id="+e];this.$store.dispatch("GET_GAME_STREAMS",r).then((function(){t.totalViewers()})),this.$store.dispatch("GET_GAMES").then((function(){t.gameName()}))},methods:{totalViewers:function(){this.totalViewersCount=this.GAME_STREAMS.reduce((function(t,e){return t+e.viewer_count}),0)},gameName:function(){for(var t=0;t<this.GAMES.length;t++)this.GAMES[t]["id"]===this.$route.params.id&&(this.gameNameVal=this.GAMES[t]["name"])},getUserName:function(t){var e=this;this.$store.dispatch("GET_USER",t).then((function(){e.$router.push({path:"/streams/".concat(e.USER.login)})}))},changeLang:function(t){this.lang=t;var e=[];e="all"===this.lang?["game_id="+this.$route.params.id]:["game_id="+this.$route.params.id,"&language="+this.lang],this.$store.dispatch("GET_GAME_STREAMS",e)}},watch:{$route:function(){var t=this,e=this.$route.params.id,r=["game_id="+e];this.$store.dispatch("GET_GAME_STREAMS",r).then((function(){t.totalViewers()})),this.$store.dispatch("GET_GAMES").then((function(){t.gameName()}))}}},J=B,Y=Object(u["a"])(J,F,V,!1,null,null,null),z=Y.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-view-container"},[r("Search"),r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-img",{attrs:{rounded:"circle",src:t.USER.profile_image_url,fluid:"",alt:"Responsive image"}}),r("h1",[r("b",[t._v(t._s(t.USER.display_name))])])],1)],1),r("hr"),r("b-row",{staticClass:"justify-content-md-center"},[r("b-col",{attrs:{cols:"9"}},[r("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://player.twitch.tv/?channel="+t.streamName,allowfullscreen:""}})],1),r("b-col",{attrs:{cols:"3"}},[r("b-embed",{attrs:{type:"iframe",aspect:"",src:"https://www.twitch.tv/embed/"+t.streamName+"/chat?darkpopout"}})],1)],1),r("hr"),t._v("\n  "+t._s(t.USER.description)+"\n")],1)},K=[];function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(r,!0).forEach((function(e){Object(g["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Z={name:"streams",components:{Search:y},data:function(){return{streamName:this.$route.params.streamname}},computed:X({},Object(b["b"])(["USER"])),methods:{},mounted:function(){this.$store.dispatch("GET_USER_BY_LOGIN",this.streamName)}},tt=Z,et=(r("a274"),Object(u["a"])(tt,q,K,!1,null,"a8177a4c",null)),rt=et.exports;n["default"].use(p["a"]);var nt=new p["a"]({mode:"history",base:"/twitch-dashboard/",routes:[{path:"/",name:"games",component:x},{path:"/top-streams",name:"top-streams",component:U},{path:"/games/:id",name:"gameStreams",component:z},{path:"/streams/:streamname",name:"streams",component:rt}]}),at={games:null,gameStreams:null,gameTopStreams:null,user:null,searchChannel:null,searchGame:null},st=(r("a481"),{SET_GAME_PREVIEW:function(t,e){var r=e.map((function(t){var e=t.box_art_url.replace("{width}","300").replace("{height}","300");return t.box_art_url=e,t}));t.games=r},SET_STREAM_PREVIEW:function(t,e){var r=e.map((function(t){var e=t.thumbnail_url.replace("{width}","426").replace("{height}","240");return t.thumbnail_url=e,t}));t.gameStreams=r},SET_TOP_STREAM_PREVIEW:function(t,e){var r=e.map((function(t){var e=t.thumbnail_url.replace("{width}","426").replace("{height}","240");return t.thumbnail_url=e,t}));t.gameTopStreams=r},SET_USER:function(t,e){t.user=e[0]},SET_SEARCH_CHANNEL:function(t,e){t.searchChannel=e[0]},SET_SEARCH_GAME:function(t,e){var r=e.map((function(t){var e=t.box_art_url.replace("{width}","100").replace("{height}","100");return t.box_art_url=e,t}));t.searchGame=r[0]}}),it=(r("96cf"),r("3b8d")),ct=r("bc3a"),ot=r.n(ct),ut=ot.a.create({headers:{"Client-ID":"57sp3gfmuynhhntab2znwu88s8cjxi"}}),lt=ut,ht={GET_GAMES:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,lt.get("https://api.twitch.tv/helix/games/top?first=100&");case 2:n=t.sent,e.commit("SET_GAME_PREVIEW",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_GAME_STREAMS:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,lt.get("https://api.twitch.tv/helix/streams?first=100&".concat(r[0]).concat(r[1]?r[1]:""));case 2:n=t.sent,e.commit("SET_STREAM_PREVIEW",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_TOP_STREAMS:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=r?"&language="+r:"",t.next=3,lt.get("https://api.twitch.tv/helix/streams?first=100".concat(r));case 3:n=t.sent,e.commit("SET_TOP_STREAM_PREVIEW",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_USER:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,lt.get("https://api.twitch.tv/helix/users?id=".concat(r));case 3:n=t.sent,e.commit("SET_USER",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_USER_BY_LOGIN:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,lt.get("https://api.twitch.tv/helix/users?login=".concat(r));case 3:n=t.sent,e.commit("SET_USER",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_SEARCH_GAME:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,lt.get("https://api.twitch.tv/helix/games?name=".concat(r));case 3:n=t.sent,e.commit("SET_SEARCH_GAME",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),GET_SEARCH_CHANNEL:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,lt.get("https://api.twitch.tv/helix/users?login=".concat(r));case 3:n=t.sent,e.commit("SET_SEARCH_CHANNEL",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}()},mt={GAMES:function(t){return t.games},GAME_STREAMS:function(t){return t.gameStreams},GAME_TOP_STREAMS:function(t){return t.gameTopStreams},USER:function(t){return t.user},SEARCH_CHANNEL:function(t){return t.searchChannel},SEARCH_GAME:function(t){return t.searchGame}};n["default"].use(b["a"]);var pt=new b["a"].Store({state:at,mutations:st,actions:ht,getters:mt});n["default"].use(a["a"]),n["default"].use(i.a),n["default"].config.productionTip=!1,new n["default"]({router:nt,store:pt,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("e332"),a=r.n(n);a.a},"65c4":function(t,e,r){"use strict";var n=r("4e74"),a=r.n(n);a.a},a274:function(t,e,r){"use strict";var n=r("b5d4"),a=r.n(n);a.a},b53d:function(t,e,r){},b5d4:function(t,e,r){},e332:function(t,e,r){}});
//# sourceMappingURL=app.c143cb70.js.map
webpackJsonp([4],{MT0x:function(t,s){},o4DC:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),a=i.n(e),l=i("NYxO"),n=i("uxit"),o=i("kvay"),c=i("6Pj+"),r=i("N3MO"),m=i("G3uJ"),d={name:"play-list",mixins:[i("5jRo").a],data:function(){return{show:!1}},components:{MusicList:o.a,MmLoading:c.a,MmDialog:r.a},created:function(){var t=this;this.playlist.length>0?this.mmLoadShow=!1:Object(n.f)(1).then(function(s){if(200===s.status){var i=t._formatSongs(s.data.playlist.tracks);t.setPlaylist({list:i}),t._hideLoad()}})},computed:a()({},Object(l.c)(["playing","playlist","currentMusic"])),methods:a()({clearList:function(){this.clearPlayList(),this.$mmToast("列表清空成功")},selectItem:function(t,s){t.id!==this.currentMusic.id||this.playing?(this.setCurrentIndex(s),this.setPlaying(!0)):this.setPlaying(!0)},deleteItem:function(t){var s=this.playlist.slice();s.splice(t,1),this.removerPlayListItem({list:s,index:t}),this.$mmToast("删除成功")},_formatSongs:function(t){var s=[];return t.forEach(function(t){var i=t;i.id&&s.push(Object(m.b)(i))}),s}},Object(l.d)({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"}),Object(l.b)(["setPlaylist","removerPlayListItem","clearPlayList"]))},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"playList"},[i("mm-loading",{attrs:{loadingBgColor:"rgba(0,0,0,.6)"},model:{value:t.mmLoadShow,callback:function(s){t.mmLoadShow=s},expression:"mmLoadShow"}}),t._v(" "),i("music-list",{attrs:{list:t.playlist,listType:1},on:{select:t.selectItem,del:t.deleteItem}},[i("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[i("span",{on:{click:function(s){t.$refs.dialog.show()}}},[t._v("清空列表")])])]),t._v(" "),i("mm-dialog",{ref:"dialog",attrs:{bodyText:"是否清空正在播放列表",confirmBtnText:"清空"},on:{confirm:t.clearList}})],1)},staticRenderFns:[]};var f=i("VU/8")(d,u,!1,function(t){i("MT0x")},null,null);s.default=f.exports}});
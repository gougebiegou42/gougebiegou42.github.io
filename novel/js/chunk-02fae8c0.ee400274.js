(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02fae8c0","chunk-2beaa0d6"],{"006a":function(t,a,s){"use strict";s("f83a")},"1b77":function(t,a,s){"use strict";s("c7a8")},"537b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"chapters"},[s("van-nav-bar",{attrs:{title:t.bookInfo.title,"left-arrow":""},on:{"click-left":function(a){return t.$router.back()}},scopedSlots:t._u([{key:"right",fn:function(){return[s("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])}),t._m(0),t.chapterlist?s("div",{staticClass:"catelogX"},[s("div",{staticClass:"header"},[s("div",{staticClass:"header-l"},[s("h4",[t._v("共"+t._s(t.chapterlist.length)+"章")])]),s("div",{staticClass:"header-r"},[s("span",{on:{click:t.show}},[t.flag?s("span",[t._v("倒序")]):s("span",[t._v("正序")])])])]),s("van-divider",{attrs:{"content-position":"left"}},[t._v("正文")]),s("ul",{staticClass:"titlelist"},t._l(t.chapterlist,(function(a,e){return s("li",{key:e,staticClass:"titlelist-item",on:{click:function(s){return t.abc(a.link)}}},[s("span",[t._v(t._s(a.title))])])})),0)],1):t._e()],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"chapterNav-tab"},[s("div",{staticClass:"group"},[s("h3",{staticClass:"cell"},[t._v(" 目录 ")])])])}],i=s("5530"),r=s("2f62"),c={data:function(){return{chapterlist:null,flag:!0}},computed:Object(i["a"])({},Object(r["c"])(["chapter","bookInfo"])),created:function(){this.chapter&&(this.chapterlist=this.chapter.chapters)},methods:{abc:function(t){this.$store.commit("getLinks",t),this.$router.push("/book/"+this.$route.params.id+"/read")},show:function(){this.flag=!this.flag,this.chapterlist.reverse()}}},o=c,l=(s("006a"),s("2877")),u=Object(l["a"])(o,e,n,!1,null,null,null);a["default"]=u.exports},"857a":function(t,a,s){var e=s("1d80"),n=/"/g;t.exports=function(t,a,s,i){var r=String(e(t)),c="<"+a;return""!==s&&(c+=" "+s+'="'+String(i).replace(n,"&quot;")+'"'),c+">"+r+"</"+a+">"}},9911:function(t,a,s){"use strict";var e=s("23e7"),n=s("857a"),i=s("af03");e({target:"String",proto:!0,forced:i("link")},{link:function(t){return n(this,"a","href",t)}})},af03:function(t,a,s){var e=s("d039");t.exports=function(t){return e((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},c7a8:function(t,a,s){},c844:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"read",on:{click:t.getshow}},[t.datashow?s("div",{staticClass:"readheader"},[s("span",{staticClass:"readspan",on:{click:function(a){return t.$router.back()}}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("span",{staticClass:"readspan"},[t._v(t._s(t.bookInfo.title))]),s("span",[s("van-icon",{attrs:{name:"search"}})],1)]):t._e(),t.datashow?s("div",{staticClass:"readheaders"},[t.bookrack.find((function(a){return a==t.$route.params.id}))?s("van-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return a.stopPropagation(),t.removeBookrack(t.$route.params.id)}}},[t._v("移除书架")]):s("van-button",{staticStyle:{color:""},attrs:{type:"default",size:"small"},on:{click:function(a){return a.stopPropagation(),t.addBookrack(t.$route.params.id)}}},[t._v("加入书架")])],1):t._e(),t.datashow?s("div",{staticClass:"bottom-controll-panel"},[t._m(0),s("div",{staticClass:"item clearfix"},[s("span",{staticClass:"btn chapter-btn-w f-l"},[t._v("上一章")]),s("span",{staticClass:"btn directory",on:{click:function(a){return a.stopPropagation(),t.onshow()}}},[t._v("目录")]),s("span",{staticClass:"btn chapter-btn-w f-r"},[t._v("下一章")])])]):t._e(),s("v-touch",{staticClass:"wrapper",on:{swipeleft:t.swiperleft,swiperight:t.swiperright}},[t.content?s("div",{staticClass:"readInside"},[s("h1",[t._v(t._s(t.content.title))]),s("div",{staticClass:"readContent"},[t._v(t._s(t.content.cpContent))])]):t._e()]),s("chapter",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]})],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item clearfix"},[s("span",{staticClass:"btn square"},[t._v("默认")]),s("span",{staticClass:"btn square"},[t._v("夜间")]),s("span",{staticClass:"btn square"},[t._v("护眼")])])}],i=(s("9911"),s("5530")),r=s("2f62"),c=s("537b"),o={components:{chapter:c["default"]},data:function(){return{content:null,datashow:!1,readlist:null,link:null,isnum:0,show:!1}},computed:Object(i["a"])({},Object(r["c"])(["chapter","links","bookInfo","bookrack"])),methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["addBookrack","removeBookrack"])),{},{menu:function(){window.scrollTo(0,0)},getshow:function(){this.datashow=!this.datashow},onshow:function(){this.show=!this.show},swiperleft:function(){console.log("左划")},swiperright:function(){console.log("右滑")}}),created:function(){var t=this;this.readlist=this.chapter.chapters,this.menu(),this.link=this.links,this.chapter?this.axios.get("http://novel.kele8.cn/chapters/"+encodeURIComponent(this.link?this.link:this.chapter.chapters[0].link)).then((function(a){console.log(a.data),t.content=a.data.chapter})):console.log("无内容")}},l=o,u=(s("1b77"),s("2877")),h=Object(u["a"])(l,e,n,!1,null,null,null);a["default"]=h.exports},f83a:function(t,a,s){}}]);
//# sourceMappingURL=chunk-02fae8c0.ee400274.js.map
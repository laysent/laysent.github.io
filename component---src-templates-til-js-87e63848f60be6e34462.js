(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{CeX6:function(e,t,a){"use strict";a("pIFo");var r=a("q1tI"),n=a.n(r),l=a("p3AD"),o=a("Wbzz");var i=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.withLink,a=e.title,r=e.date,i=e.category,c=e.html;return n.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.a.createElement("h1",{style:{marginBottom:Object(l.a)(.25)}},a,t&&n.a.createElement(o.Link,{to:"/til/"+r+"_"+a.toLowerCase().replace(/ /g,"-"),className:"no-link-style",style:{fontSize:Object(l.a)(.5),marginLeft:Object(l.a)(.5)}},"🔗")),n.a.createElement("p",null,n.a.createElement("small",null,n.a.createElement("time",{itemProp:"datePublished",dateTime:r},r)),!!i&&n.a.createElement("small",null," • ",n.a.createElement(o.Link,{to:"/til/category/"+i.toLowerCase()},i)),n.a.createElement("small",null,n.a.createElement("span",{itemScope:!0,itemType:"http://schema.org/Person",itemProp:"author"}," • by ",n.a.createElement("span",{itemProp:"name"},"LaySent")))),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:c},itemProp:"articleBody"}),n.a.createElement("hr",null))},r}(n.a.Component);t.a=i},P9PE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return y}));a("KKXr"),a("pIFo");var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("Bl7J"),i=a("vrFN"),c=a("wrS7"),p=a("CeX6"),m=a("p3AD");function s(e,t){return"/til/"+e+"_"+t.toLowerCase().replace(/ /g,"-")}var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,a=t.previous,r=t.next,u=e.frontmatter,y=u.date,E=u.category,h=u.title,d=y.split("-"),g=d[0],f=d[1],v="Things I Learned ("+g+"-"+f+")";return n.a.createElement(o.a,{location:this.props.location,title:v,to:"/til/"+g+"/"+f},n.a.createElement(i.a,{title:h,location:this.props.location,keywords:["JavaScript","Web","Blog","LaySent"]}),n.a.createElement(p.a,{title:h,date:y,category:E,html:e.html}),n.a.createElement("footer",null,n.a.createElement(c.a,null)),n.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,a&&n.a.createElement(l.Link,{to:s(a.time,a.title),rel:"prev"},"← ",a.title)),n.a.createElement("li",null,r&&n.a.createElement(l.Link,{to:s(r.time,r.title),rel:"next"},r.title," →")))))},r}(n.a.Component);t.default=u;var y="870297800"}}]);
//# sourceMappingURL=component---src-templates-til-js-87e63848f60be6e34462.js.map
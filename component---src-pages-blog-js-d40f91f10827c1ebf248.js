(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{vx99:function(t,e,r){"use strict";r.r(e);r("91GP");var o=r("q1tI"),a=r.n(o),n=(r("KKXr"),r("pIFo"),r("Wbzz")),l=r("Bl7J"),i=r("vrFN"),s=r("p3AD");function c(t){return t.trim().replace(/ /g,"-").replace(/\./g,"").toLowerCase()}var p=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props,e=t.data,r=t.title,o=t.subtitle,p=t.isRoot,m=this.props.data.site.siteMetadata,u=m.blogTitle,g=m.title,f=e.allMarkdownRemark.edges;return a.a.createElement(l.a,{location:this.props.location,title:p?g:u,isRoot:p,subtitle:o,to:p?"/":"/blog/"},a.a.createElement(i.a,{title:r,keywords:["JavaScript","Web","Blog","LaySent"],location:this.props.location}),f.map((function(t){var e=t.node,r=e.frontmatter.title||e.fields.slug,o=e.frontmatter.date,l=e.frontmatter.tags&&e.frontmatter.tags.length>0,i=!!e.frontmatter.category;return a.a.createElement("article",{key:e.fields.slug},a.a.createElement("h3",{style:{marginBottom:Object(s.a)(.25)}},a.a.createElement(n.Link,{style:{boxShadow:"none"},to:"blog/post"+e.fields.slug},r)),a.a.createElement("small",null,a.a.createElement("time",{dateTime:o},o)),a.a.createElement("small",{lang:"en"}," • ",e.timeToRead,"min to read"),i&&a.a.createElement("small",null," • ",a.a.createElement(n.Link,{style:{boxShadow:"none"},to:"/blog/category/"+c(e.frontmatter.category)+"/"},e.frontmatter.category)),l&&a.a.createElement("small",null," • ",e.frontmatter.tags.split(",").map((function(t,e,r){return a.a.createElement(a.a.Fragment,{key:t},a.a.createElement(n.Link,{style:{boxShadow:"none",color:"#ffb600"},to:"/blog/tag/"+c(t)+"/"},"#",t.trim()),e!==r.length-1&&" / ")}))),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description}}))})))},o}(a.a.Component);r.d(e,"pageQuery",(function(){return u}));var m=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){return a.a.createElement(p,Object.assign({},this.props,{title:"All posts",isRoot:!0}))},o}(a.a.Component),u=(e.default=m,"129572805")}}]);
//# sourceMappingURL=component---src-pages-blog-js-d40f91f10827c1ebf248.js.map
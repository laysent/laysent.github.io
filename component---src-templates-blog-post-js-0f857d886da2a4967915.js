(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return y});a(32);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(151),c=a(157),s=a(155),u=a(153),m=a(161),p=a.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.body.querySelector(".katex")&&a.e(13).then(a.t.bind(null,180,7))},n.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.blogTitle,a=this.props.pageContext,n=a.previous,r=a.next,o=e.frontmatter,m=o.date,d=o.modified,y=o.title,A=o.description,g=d&&d!==m;return i.a.createElement(c.a,{location:this.props.location,title:t,to:"/blog/"},i.a.createElement(s.a,{title:y,description:A,location:this.props.location}),i.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},i.a.createElement("header",null,i.a.createElement("h1",{itemProp:"headline"},y),i.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},i.a.createElement("time",{itemProp:"datePublished",dateTime:m},m),g&&i.a.createElement("span",null," • (modified: ",i.a.createElement("time",{itemProp:"dateModified",dateTime:d},d),")"),i.a.createElement("span",{itemScope:!0,itemType:"http://schema.org/Person",itemProp:"author"}," • by ",i.a.createElement("span",{itemProp:"name"},"LaySent")))),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html},itemProp:"articleBody"}),i.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),i.a.createElement("footer",null,i.a.createElement("div",{className:"license",style:{marginBottom:Object(u.a)(1),fontSize:Object(u.a)(.5)}},i.a.createElement("a",{rel:"license noopener noreferrer",href:"http://creativecommons.org/licenses/by-nc/4.0/",target:"_blank"},i.a.createElement("img",{alt:"Creative Commons License",src:p.a})),i.a.createElement("div",null,i.a.createElement("span",{"xmlns:dct":"http://purl.org/dc/terms/",href:"http://purl.org/dc/dcmitype/Text",property:"dct:title",rel:"dct:type"},"Every blog post in this site"),i.a.createElement("span",null," by "),i.a.createElement("a",{"xmlns:cc":"http://creativecommons.org/ns#",href:"https://github.com/laysent",property:"cc:attributionName",rel:"cc:attributionURL noopener noreferrer",target:"_blank"},"LaySent"),i.a.createElement("span",null," is licensed under a "),i.a.createElement("a",{rel:"license noopener noreferrer",href:"http://creativecommons.org/licenses/by-nc/4.0/",target:"_blank"},"CC 4.0 License"),i.a.createElement("span",null,", based on a work at "),i.a.createElement("a",{"xmlns:dct":"http://purl.org/dc/terms/",href:"http://github.com/laysent/blog",rel:"dct:source noopener noreferrer",target:"_blank"},"GitHub"),i.a.createElement("span",null,". You can see the source code of this blog site "),i.a.createElement("a",{href:"https://github.com/laysent/blog/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"},"github.com/laysent/blog"),i.a.createElement("span",null,"."))))),i.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,n&&i.a.createElement(l.Link,{to:"blog/post"+n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),i.a.createElement("li",null,r&&i.a.createElement(l.Link,{to:"blog/post"+r.fields.slug,rel:"next"},r.frontmatter.title," →")))))},t}(i.a.Component);t.default=d;var y="205976309"},151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(150),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(152),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(158),r=a.n(n),o=a(159),i=a.n(o);i.a.bodyFontFamily=["Rubik","-apple-system","BlinkMacSystemFont","PingFang SC","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial","Hiragino Sans GB","Microsoft Yahei","WenQuanYi Micro Hei","sans-serif"],i.a.headerFontFamily=i.a.bodyFontFamily,i.a.googleFonts=[{name:"Rubik",styles:[300,400,500]}],i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},h1:{fontFamily:i.a.bodyFontFamily.map(JSON.stringify).join(",")}}};var l=new r.a(i.a);var c=l.rhythm,s=l.scale},154:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,a){"use strict";var n=a(156),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(160),s=a.n(c),u=a(151);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=e.location;return o.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description,u=e.site.siteMetadata.siteUrl+c.pathname.substr(e.site.pathPrefix.length+1);return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},o.a.createElement("link",{href:u,rel:"canonical"}))},data:n})}m.defaultProps={lang:"zh-cmn-Hans",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var p="948154927"},156:function(e){e.exports={data:{site:{pathPrefix:"",siteMetadata:{title:"LaySent's Site",description:"Site where LaySent writes thoughts.",author:"LaySent",siteUrl:"https://laysent.github.io/"}}}}},157:function(e,t,a){"use strict";a(32);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(151),c=a(153),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.title,n=t.to,r=t.isRoot,o=t.children,s=t.subtitle;return e=r?i.a.createElement("header",null,i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},a))):i.a.createElement("nav",null,i.a.createElement("h3",{style:{marginTop:0}},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},a))),i.a.createElement("main",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(28),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)},itemScope:!0,itemType:"http://schema.org/Blog"},e,s&&i.a.createElement("header",null,i.a.createElement("h1",{style:{boxShadow:"none",textDecoration:"underline"}},s)),o,i.a.createElement("footer",null,i.a.createElement("span",null,"© "),i.a.createElement("span",{itemProp:"copyrightYear"},(new Date).getFullYear()),i.a.createElement("span",null," "),i.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},i.a.createElement("span",{itemProp:"name"},"LaySent"))))},t}(i.a.Component);t.a=s},161:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0f857d886da2a4967915.js.map
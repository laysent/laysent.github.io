(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return c});a(34);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(169),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return i.a.createElement(l.a,Object.assign({},this.props,{title:"#"+this.props.pageContext.tag,subtitle:"#"+this.props.pageContext.tag}))},e}(i.a.Component);e.default=s;var c="2801622716"},157:function(t,e,a){"use strict";a.d(e,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),s=a.n(l);a.d(e,"a",function(){return s.a});a(159);var c=r.a.createContext({}),m=function(t){return r.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return c});var n=a(165),r=a.n(n),o=a(166),i=a.n(o);i.a.bodyFontFamily=["Rubik","-apple-system","BlinkMacSystemFont","PingFang SC","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial","Hiragino Sans GB","Microsoft Yahei","WenQuanYi Micro Hei","sans-serif"],i.a.headerFontFamily=i.a.bodyFontFamily,i.a.googleFonts=[{name:"Rubik",styles:[300,400,500]}],i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},h1:{fontFamily:i.a.bodyFontFamily.map(JSON.stringify).join(",")},h4:{textTransform:"initial"},"audio[controls]":{marginBottom:"1.75rem"},"video[controls]":{marginBottom:"1.75rem"},"@media (prefers-color-scheme: dark)":{body:{color:"#fff",backgroundColor:"#333"},blockquote:{borderLeftColor:"hsla(0,0%,100%,0.9)",color:"hsla(0,0%,100%,0.59)"},hr:{backgroundColor:"hsla(0,0%,100%,0.2)"},th:{borderBottomColor:"hsla(0,0%,100%,0.12)"},td:{borderBottomColor:"hsla(0,0%,100%,0.12)"}}}};var l=new r.a(i.a);var s=l.rhythm,c=l.scale},159:function(t,e,a){var n;t.exports=(n=a(160))&&n.default||n},160:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),s=a(2),c=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},161:function(t,e,a){"use strict";var n=a(162),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(164),c=a.n(s),m=a(157);function u(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,l=t.title,s=t.location;return o.a.createElement(m.b,{query:p,render:function(t){var n=e||t.site.siteMetadata.description,m=t.site.siteMetadata.siteUrl+s.pathname.substr(t.site.pathPrefix.length+1);return"/"!==m[m.length-1]&&(m+="/"),o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},o.a.createElement("link",{href:m,rel:"canonical"}))},data:n})}u.defaultProps={lang:"zh-cmn-Hans",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=u;var p="948154927"},162:function(t){t.exports={data:{site:{pathPrefix:"",siteMetadata:{title:"LaySent's Site",description:"Site where LaySent writes thoughts.",author:"LaySent",siteUrl:"https://laysent.github.io/"}}}}},163:function(t,e,a){"use strict";a(34);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(157),s=a(158),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.title,n=e.to,r=e.isRoot,o=e.children,c=e.subtitle;return t=r?i.a.createElement("header",null,i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},a))):i.a.createElement("nav",null,i.a.createElement("h3",{style:{marginTop:0}},i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:n},a))),i.a.createElement("main",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(28),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)},itemScope:!0,itemType:"http://schema.org/Blog"},t,c&&i.a.createElement("header",null,i.a.createElement("h1",{style:{boxShadow:"none",textDecoration:"underline"}},c)),o,i.a.createElement("footer",null,i.a.createElement("span",null,"© "),i.a.createElement("span",{itemProp:"copyrightYear"},(new Date).getFullYear()),i.a.createElement("span",null," "),i.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},i.a.createElement("span",{itemProp:"name"},"LaySent"))))},e}(i.a.Component);e.a=c},169:function(t,e,a){"use strict";a(74);var n=a(7),r=a.n(n),o=(a(35),a(0)),i=a.n(o),l=a(157),s=a(163),c=a(161),m=a(158);function u(t){return t.trim().replace(/ /g,"-").replace(/\./g,"").toLowerCase()}var p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.data,a=t.title,n=t.subtitle,r=t.isRoot,o=this.props.data.site.siteMetadata,p=o.blogTitle,d=o.title,g=e.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:r?d:p,isRoot:r,subtitle:n,to:r?"/":"/blog/"},i.a.createElement(c.a,{title:a,keywords:["JavaScript","Web","Blog","LaySent"],location:this.props.location}),g.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug,n=e.frontmatter.date,r=e.frontmatter.tags&&e.frontmatter.tags.length>0,o=!!e.frontmatter.category;return i.a.createElement("article",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(m.a)(.25)}},i.a.createElement(l.a,{style:{boxShadow:"none"},to:"blog/post"+e.fields.slug},a)),i.a.createElement("small",null,i.a.createElement("time",{dateTime:n},n)),i.a.createElement("small",{lang:"en"}," • ",e.timeToRead,"min to read"),o&&i.a.createElement("small",null," • ",i.a.createElement(l.a,{style:{boxShadow:"none"},to:"/blog/category/"+u(e.frontmatter.category)+"/"},e.frontmatter.category)),r&&i.a.createElement("small",null," • ",e.frontmatter.tags.split(",").map(function(t,e,a){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(l.a,{style:{boxShadow:"none",color:"#ffb600"},to:"/blog/tag/"+u(t)+"/"},"#",t.trim()),e!==a.length-1&&" / ")})),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description}}))}))},e}(i.a.Component);e.a=p}}]);
//# sourceMappingURL=component---src-templates-tag-js-e92bf10e5139d7043604.js.map
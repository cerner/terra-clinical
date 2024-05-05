"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[1548],{55713:function(e,t,a){var n=a(24994);t.A=void 0;var i=n(a(96540)),r=n(a(5556)),l=n(a(67967)),o=n(a(25642)),d=l.default.bind(o.default),s={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,l=i.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},i.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),i.default.createElement("span",{className:d("badge-version")},"v".concat(r))),o=t?i.default.createElement("a",{className:d("badge"),href:t},i.default.createElement("span",{className:d("badge-name")},"github"),i.default.createElement("span",{className:d("badge-version")},"source")):void 0;return i.default.createElement("div",{className:d("badge-container")},l,o)};c.propTypes=s;t.A=c},86159:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(96540)),i=s(a(5556)),r=s(a(67967)),l=s(a(52103)),o=s(a(36605)),d=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.default.bind(o.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g={children:i.default.string},f=function(e){var t=e.children,a=m(e,d),i=n.default.useContext(l.default),o=(0,r.default)(u(["button",i.className]),a.className);return n.default.createElement("button",c({},a,{type:"button",className:o,onBlur:p,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};f.propTypes=g;t.default=f},20999:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(96540)),i=d(a(5556)),r=d(a(67967)),l=d(a(52103)),o=d(a(17269));function d(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(o.default),c={ariaLevel:i.default.oneOf(["2","3","4","5","6"]),children:i.default.node,variant:i.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,a=e.variant,i=e.children,r=n.default.useContext(l.default);return n.default.createElement("div",{className:s("notice",a,r.className)},n.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:s("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(i,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};m.propTypes=c,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},18778:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(96540)),i=c(a(5556)),r=c(a(46942)),l=c(a(67967)),o=c(a(52103)),d=c(a(16576)),s=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=l.default.bind(d.default),h={title:i.default.string},g=function(e){var t=e.title,a=u(e,s),i=n.default.useContext(o.default),l=(0,r.default)(p(["placeholder",i.className]),a.className),d=p(["inner"]);return n.default.createElement("div",m({},a,{className:l}),n.default.createElement("div",{className:d},n.default.createElement("p",{className:p("title")},t)))};g.propTypes=h,g.defaultProps={title:""};t.default=g},74647:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return i.default}});var n=l(a(20999)),i=l(a(18778)),r=l(a(86159));function l(e){return e&&e.__esModule?e:{default:e}}},71548:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(96540);var n=a(36665),i=a(57937),r=a(74647),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s={},c="wrapper";function m(e){var t=e.components,a=d(e,l);return(0,n.mdx)(c,o({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(i.E,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"accessibility-guide-for-terra-clinical-header"},"Accessibility Guide for Terra Clinical Header"),(0,n.mdx)(r.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Terra Clinical Headers")," are used within the layout of a page to ",(0,n.mdx)("strong",{parentName:"li"},"divide and organize content in meaningful ways"),"."),(0,n.mdx)("li",{parentName:"ol"},"Headings communicate the organization of the content on the page. Web browsers, plug-ins, and assistive technologies can use them to provide in-page navigation. ",(0,n.mdx)("a",{parentName:"li",href:"/terra-clinical/components/terra-clinical-header/clinical-header/accessibility-guide"},(0,n.mdx)("sub",null,"[1]"))),(0,n.mdx)("li",{parentName:"ol"},"It allows authors to organize web pages ",(0,n.mdx)("strong",{parentName:"li"},"using the ","<","h1",">"," to ","<","h6",">"," HTML elements")," representing the six levels of section headings, with ","<","h1",">"," being the highest ",(0,n.mdx)("em",{parentName:"li"},"(using prop ",(0,n.mdx)("inlineCode",{parentName:"em"},"level={1}"),")"),", and ","<","h6",">"," being the lowest ",(0,n.mdx)("em",{parentName:"li"},"(using prop ",(0,n.mdx)("inlineCode",{parentName:"em"},"level={6}"),")"),". ",(0,n.mdx)("a",{parentName:"li",href:"/terra-clinical/components/terra-clinical-header/clinical-header/accessibility-guide"},(0,n.mdx)("sub",null,"[2]"))))),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations:"),(0,n.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,n.mdx)("p",null,"Headings that organize page content have very specific construction considerations for screen readers and assistive technology that are different from what many designers and developers have used them in the past, so special note must be taken when constructing pages to use the new accessibility-based patterns. Previous patterns were to combine size and styling details that help create visual hierarchy to specific ",(0,n.mdx)("inlineCode",{parentName:"p"},"<h1>")," through ",(0,n.mdx)("inlineCode",{parentName:"p"},"<h6>")," elements, so the ",(0,n.mdx)("em",{parentName:"p"},"<","h1",">","'s")," were always the largest visual heading on the page, ",(0,n.mdx)("em",{parentName:"p"},"<","h2",">","'s")," and ",(0,n.mdx)("em",{parentName:"p"},"<","h3",">","'s")," were typically the next level headings and subheadings,  ",(0,n.mdx)("em",{parentName:"p"},"<","h4",">","'s")," through ",(0,n.mdx)("em",{parentName:"p"},"<","h6",">","'s")," were section and panel subheaders. By joining the level with the size styling, pages would often be constructed completely out of proper nesting order required by assistive technologies."),(0,n.mdx)("p",null,"Terra has made sure to prevent this by allowing for appropriate visual styles for specific usages and app locations, to be applied independently of the heading level. For proper accessibility, developers must ensure that all usages of headings on each page follow these two imperatives: "),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Terra Clinical Headers ",(0,n.mdx)("strong",{parentName:"li"},"must always")," follow correct ",(0,n.mdx)("strong",{parentName:"li"},"heading level order and arrangement"),"."),(0,n.mdx)("li",{parentName:"ul"},"Terra Clinical Headers ",(0,n.mdx)("em",{parentName:"li"},"may sometimes")," be used for ",(0,n.mdx)("strong",{parentName:"li"},"labeling page regions"),", and have additional requirements to associate the corresponding regions.")),(0,n.mdx)("h4",{id:"1-heading-level-order-and-arrangement-always"},"1. Heading Level Order and Arrangement ",(0,n.mdx)("em",{parentName:"h4"},"(always)")),(0,n.mdx)("p",null,"The primary objective of using Clinical Headers is to provide information on the structural hierarchy of a document. It is not only visually apparent, but also helps to navigate the page using screen reader technologies. The following are certain accessibility best practices developers must follow for delivering accessible headers:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Developers must use the appropriate heading levels (1 to 6) by always providing a value to the ",(0,n.mdx)("strong",{parentName:"li"},(0,n.mdx)("inlineCode",{parentName:"strong"},"'level'"))," prop. The heading level should match the hierarchical structure of the page."),(0,n.mdx)("li",{parentName:"ul"},"If a value to the ",(0,n.mdx)("strong",{parentName:"li"},(0,n.mdx)("inlineCode",{parentName:"strong"},"'level'"))," prop is not provided, the heading ",(0,n.mdx)("strong",{parentName:"li"},(0,n.mdx)("inlineCode",{parentName:"strong"},"'text'"))," will not be rendered."),(0,n.mdx)("li",{parentName:"ul"},"For accessibility best practices, it is recommended that consumers should always use ",(0,n.mdx)("strong",{parentName:"li"},"only one")," ",(0,n.mdx)("inlineCode",{parentName:"li"},"<h1>")," per page or view. The one ",(0,n.mdx)("inlineCode",{parentName:"li"},"<h1>")," should be the page title."),(0,n.mdx)("li",{parentName:"ul"},"Nest headings by their level. Headings with an equal or higher level start a new section, headings with a lower level start new subsections that are part of the higher ranked section."),(0,n.mdx)("li",{parentName:"ul"},"Avoid skipping heading levels to be more specific (for example, do not skip from ",(0,n.mdx)("inlineCode",{parentName:"li"},"<h2>")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"<h5>"),"). However, it is permissible to skip headings in the other direction if it indicates closing a subsection (for example, from ",(0,n.mdx)("inlineCode",{parentName:"li"},"<h5>")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"<h2>"),").")),(0,n.mdx)("blockquote",null,(0,n.mdx)("table",{parentName:"blockquote"},(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"th"},"Bad")," ",(0,n.mdx)("a",{parentName:"th",href:"/terra-clinical/components/terra-clinical-header/clinical-header/accessibility-guide"},(0,n.mdx)("sub",null,"[3]"))),(0,n.mdx)("th",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"th"},"Good")))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("inlineCode",{parentName:"td"},"<h1>Heading level 1</h1>"),(0,n.mdx)("br",null),(0,n.mdx)("inlineCode",{parentName:"td"},"<h3>Heading level 3</h3>"),(0,n.mdx)("br",null),(0,n.mdx)("inlineCode",{parentName:"td"},"<h4>Heading level 4</h4>")),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("inlineCode",{parentName:"td"},"<h1>Heading level 1</h1>"),(0,n.mdx)("br",null),(0,n.mdx)("inlineCode",{parentName:"td"},"<h2>Heading level 2</h2>"),(0,n.mdx)("br",null),(0,n.mdx)("inlineCode",{parentName:"td"},"<h3>Heading level 3</h3>")))))),(0,n.mdx)("p",null,"Headings create an outline for the page, similar to a term paper outline or table of contents. The ",(0,n.mdx)("inlineCode",{parentName:"p"},"<h1>")," describes the page as a whole (and should be similar to the page ",(0,n.mdx)("inlineCode",{parentName:"p"},"<title>"),"). A page should typically have only one ",(0,n.mdx)("inlineCode",{parentName:"p"},"<h1>"),". Headings ",(0,n.mdx)("inlineCode",{parentName:"p"},"<h2>")," through ",(0,n.mdx)("inlineCode",{parentName:"p"},"<h6>"),' represent increasing degrees of "indentation" in our conceptual "outline". As such, it does not make sense to skip heading levels, such as from ',(0,n.mdx)("inlineCode",{parentName:"p"},"<h2>")," to ",(0,n.mdx)("inlineCode",{parentName:"p"},"<h4>"),", going down the page. Here is an example of content hierarchy with corresponding heading levels: ",(0,n.mdx)("a",{parentName:"p",href:"/terra-clinical/components/terra-clinical-header/clinical-header/accessibility-guide"},(0,n.mdx)("sub",null,"[4]"))),(0,n.mdx)("h4",{id:"2-labeling-page-regions-as-needed"},"2. Labeling Page Regions ",(0,n.mdx)("em",{parentName:"h4"},"(as needed)")),(0,n.mdx)("p",null,"Clinical Header can also be used to provide labels to distinguish multiple page regions of the same type. Most content on web pages should be organized into sections. When pages are organized into sections, a heading should be present. Developers may choose to use sectioning elements to indicate these sections. When using a sectioning element, a clinical header should generally be the first content within the section to act as a label. The objective of this technique is to use section headings to convey the structure of the content. Clinical Headers can be used to:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Indicate start of main content"),(0,n.mdx)("li",{parentName:"ul"},"Mark up section headings within the main content area"),(0,n.mdx)("li",{parentName:"ul"},"Demarcate different navigational sections like top or main navigation, left or secondary navigation and footer navigation"),(0,n.mdx)("li",{parentName:"ul"},"Allow users the ability to navigate a page by sections or skip repeated blocks of information")),(0,n.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Accessibility Guidance: Label Page Regions")),(0,n.mdx)("p",null,"Sectioning content can be labeled using a combination of the ",(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby"},"aria-labelledby")," property and ",(0,n.mdx)("inlineCode",{parentName:"p"},"id")," attribute, with the label concisely describing the purpose of the section. This technique is useful for situations where there is more than one sectioning element on the same page."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-diff"},'    const clinicalHeader = (\n      <Header\n        text="Quick Links"\n+       id="quick-links-heading-label"\n        level={3}\n      />\n    );\n\n    const QuickLinksWidget = () => (\n      <div id="my-app-quick-links-widget">\n        <ContentContainer\n          header={clinicalHeader}\n+         aria-labelledby="quick-links-heading-label"\n+         role="complementary"\n        >\n          <ul id="quick-links-list">\n            <li><a href="/">Link 1</a></li>\n            <li><a href="/">Link 2</a></li>\n            <li><a href="/">Link 3</a></li>\n          </ul>\n        </ContentContainer>\n      </div>\n    );\n\n    export default QuickLinksWidget;\n'))),(0,n.mdx)("h3",{id:"content-considerations"},"Content Considerations"),(0,n.mdx)("p",null,"As authors create text, choosing words and phrases for Terra Clinical Headers — the content itself is also a very important factor in ensuring proper accessibility in addition to the coding techniques listed above."),(0,n.mdx)("h4",{id:"providing-descriptive-headings-5"},"Providing Descriptive Headings ",(0,n.mdx)("a",{parentName:"h4",href:"/terra-clinical/components/terra-clinical-header/clinical-header/accessibility-guide"},(0,n.mdx)("sub",null,"[5]"))),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Descriptive headings help users find specific content and orient themselves within the Web page."),(0,n.mdx)("p",{parentName:"blockquote"},'Authors may also want to consider putting the most important information at the beginning of each heading. This helps users “skim" the headings to locate the specific content they need, and is especially helpful when browsers or assistive technology allow navigation from heading to heading.'),(0,n.mdx)("p",{parentName:"blockquote"},(0,n.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,n.mdx)("a",{parentName:"em",href:"https://www.w3.org/WAI/WCAG21/Techniques/general/G130#description"},"W3C: Techniques for WCAG 2.1: G130 - Providing descriptive headings")))),(0,n.mdx)("h4",{id:"additional-writing-resources-and-content-strategies"},"Additional Writing Resources and Content Strategies"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tips/writing/"},"W3C Web Accessibility Initiative (WAI) » Tips: Writing for Web Accessibility")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.deque.com/blog/accessibility-strategies-for-your-content-team/"},"Deque » Blog: Accessibility Strategies for Your Content Team")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://usability.yale.edu/web-accessibility/articles/headings"},"Yale University » Usability Best Practices: Headings")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.nngroup.com/articles/information-scent/"},"Nielsen Norman Group » Information Scent: How Users Decide Where to Go Next"))),(0,n.mdx)("h2",{id:"usability-expectations"},"Usability Expectations:"),(0,n.mdx)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,n.mdx)("p",null,"Terra Clinical Header does not have any keyboard navigation expectations on its own. Any content provided to the ",(0,n.mdx)("inlineCode",{parentName:"p"},"startContent"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"endContent"),", or ",(0,n.mdx)("inlineCode",{parentName:"p"},"children")," should follow the interaction expectations of those elements."),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"none")),(0,n.mdx)("td",{parentName:"tr",align:null},"has no keyboard navigation unless interactive content is provided")))),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance:"),(0,n.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,n.mdx)("h4",{id:"success-criteria"},"Success Criteria"),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"Terra Clinical Header ",(0,n.mdx)("strong",{parentName:"em"},"must")," meet the following success criteria:")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},(0,n.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships")),". - The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},(0,n.mdx)("strong",{parentName:"a"},"2.4.6 Headings and Labels"))," - Clear and descriptive headers allow users to find information they seek easily, and it also helps in understanding the relationships between different parts of the content more easily.")),(0,n.mdx)("h4",{id:"related-or-additional-supporting-criteria"},"Related or Additional Supporting Criteria"),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"Apart from the above criteria, the following criteria are related or support the primary success criteria:")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"},(0,n.mdx)("strong",{parentName:"a"},"2.4.1 Bypass Blocks"))," - Clinical Header provides a mechanism to bypass blocks of content that are repeated on multiple Web pages. It allows people who navigate sequentially through content more direct access to the primary content of the Web page."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html"},(0,n.mdx)("strong",{parentName:"a"},"2.4.10 Section Headings")),' - When  a page is organized into sections, they need to have headings that introduce them. This clearly indicates the organization of the content, facilitates navigation within the content, and provides mental "handles" that aid in comprehension of the content.')),(0,n.mdx)("h3",{id:"supported-features--technology"},"Supported Features & Technology"),(0,n.mdx)("h4",{id:"text-and-h1-h6-headings"},"Text and ","<","h1",">","-","<","h6",">"," headings"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,n.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,n.mdx)("li",{parentName:"ul"},"NVDA Support with Chrome (PC)"),(0,n.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)"),(0,n.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology"),(0,n.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology")),(0,n.mdx)("h4",{id:"additional-startcontent-and-endcontent"},"Additional 'startContent' and 'endContent'"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Dependent on the content provided (accessibility support not the responsibility of Terra Clinical Header)")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"None identified"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-clinical/issues/new/choose"},"Report a problem with this component on ",(0,n.mdx)("strong",{parentName:"a"},"GitHub")))),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,n.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")),(0,n.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Eggert, Eric; Abou-Zahra, Shadi (27 July 2019). ",(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/page-structure/headings/"},'"Web Accessibility Tutorials: Headings"'),". World Wide Web Consortium. First published April 2017. Retrieved 24 February 2022."),(0,n.mdx)("li",{parentName:"ol"},"MDN contributors (02 February 2022). ",(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},'"',"<","h1",">","-","<","h6",">",': The HTML Section Heading elements"'),". Mozilla. First published 15 September 2020. Retrieved 24 February 2022."),(0,n.mdx)("li",{parentName:"ol"},"MDN contributors (02 February 2022). ",(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#accessibility_concerns"},'"Accessibility Concerns | ',"<","h1",">","-","<","h6",">",': The HTML Section Heading elements"'),". Mozilla. First published 15 September 2020. Retrieved 24 February 2022."),(0,n.mdx)("li",{parentName:"ol"},"WebAIM staff (01 May 2020). ",(0,n.mdx)("a",{parentName:"li",href:"https://webaim.org/techniques/semanticstructure/#headings"},'"Semantic Structure: Regions, Headings, and Lists"'),". WebAIM (Accessibility In Mind). Institute for Disability Research, Policy, and Practice.  Utah State University. Last updated 01 May 2020. Retrieved 24 February 2022."),(0,n.mdx)("li",{parentName:"ol"},"Accessibility Guidelines Working Group (22 February 2022). ",(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Techniques/general/G130"},'"Technique G130: Providing descriptive headings"'),". World Wide Web Consortium. Last updated 22 February 2022. Retrieved 24 February 2022.")))}m.isMDXComponent=!0},57937:function(e,t,a){a.d(t,{E:function(){return r}});var n=a(96540),i=a(55713),r=function(e){var t=e.url;return n.createElement(i.A,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-header",name:"terra-clinical-header",version:"3.33.0",url:t})}},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},36605:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);
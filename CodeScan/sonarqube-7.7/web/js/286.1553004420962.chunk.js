(window.webpackJsonp=window.webpackJsonp||[]).push([[286,20,358],{1027:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(592),o=n(597);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size;return r.createElement(o.a,{className:t,size:s},r.createElement("path",{d:"M8 1c3.863 0 7 3.137 7 7s-3.137 7-7 7-7-3.137-7-7 3.137-7 7-7zm3.726 7.985A.274.274 0 0 0 12 8.711V7.289a.274.274 0 0 0-.274-.274H8.985V4.274A.274.274 0 0 0 8.711 4H7.289a.274.274 0 0 0-.274.274v2.741H4.274A.274.274 0 0 0 4 7.289v1.422c0 .152.123.274.274.274h2.741v2.741c0 .151.122.274.274.274h1.422a.274.274 0 0 0 .274-.274V8.985h2.741z",style:{fill:a}}))}},1028:function(e,t,n){"use strict";function r(e,t,n){void 0===n&&(n=!1);var r=e.owaspTop10[t];return r?"unknown"===t?r.title:s(t.toUpperCase()+" - "+r.title,"OWASP",n):s(t.toUpperCase(),"OWASP",n)}function o(e,t){var n=e.cwe[t];return n?"unknown"===t?n.title:"CWE-"+t+" - "+n.title:"CWE-"+t}function a(e,t,n){void 0===n&&(n=!1);var r=e.sansTop25[t];return s(r?r.title:t,"SANS",n)}function s(e,t,n){return n?t+" "+e:e}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return a})},1454:function(e,t,n){var r=n(1455);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(596)(r,o);r.locals&&(e.exports=r.locals)},1455:function(e,t,n){(e.exports=n(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.security-column-separator {\n  border-left: 1px solid #e6e6e6;\n}\n\n.security-category-column {\n  width: 52%;\n}\n\n.security-result-column {\n  width: 12%;\n}\n\ntable.data.security-reports > thead:after {\n  content: none;\n}\n\n.cwe-title-cell {\n  padding-left: 80px !important;\n}\n",""])},1456:function(e,t){e.exports="The Common Weakness Enumeration (CWE™) is a community-developed list of software weaknesses. It provides a common reference, and as a baseline for weakness identification, mitigation, and prevention efforts.\n"},1910:function(e,t,n){"use strict";n.r(t);var r,o=n(592),a=n(609),s=n.n(a),i=n(598),c=n(593),l=n(17),u=n(647),p=n(600),m=n(617),d=n(611),h=n(657),f=n(758),g=n(1028),y=n(724),v=n(602),b=n(603),E=n(1027),w=n(88),N=n(599),S=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},O={owaspTop10:"owasp",sansTop25:"sans-top25",cwe:"cwe"},T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={standards:{owaspTop10:{},sansTop25:{},cwe:{}}},t.loadStandards=function(){n.e(259).then(n.t.bind(null,1857,3)).then(function(e){return e.default}).then(function(e){var n=e.owaspTop10,r=e.sansTop25,o=e.cwe;t.mounted&&t.setState({standards:{owaspTop10:n,sansTop25:r,cwe:o}})},function(){})},t.renderMoreRulesOverlay=function(e,n){var r=t.props.component.qualityProfiles?t.props.component.qualityProfiles.map(function(e){return e.language}).join(","):"",a=O[e]+"-"+("sansTop25"===e?{"insecure-interaction":"insecure","porous-defenses":"porous","risky-resource":"risky"}[n.toLowerCase()]:n.toLowerCase());return o.createElement(o.Fragment,null,o.createElement("p",null,Object(l.l)("security_reports.activate_rules")),o.createElement("hr",{className:"spacer-top spacer-bottom"}),o.createElement(i.Link,{className:"spacer-left link-no-underline",to:Object(p.C)({languages:r,tags:a,types:["SECURITY_HOTSPOT","VULNERABILITY"].join()},Object(w.isSonarCloud)()?t.props.component.organization:void 0)},Object(l.l)("security_reports.activate_rules.link")))},t.renderOverlay=function(e){return o.createElement(o.Fragment,null,o.createElement("p",null,e),o.createElement("hr",{className:"spacer-top spacer-bottom"}),Object(l.l)("learn_more"),":",o.createElement(i.Link,{className:"spacer-left",target:"_blank",to:{pathname:"/documentation/user-guide/security-reports/"}},"Security Reports"),o.createElement(y.a,{className:"little-spacer-left little-spacer-right vertical-baseline",size:12}))},t.renderComponentIssuesLink=function(e,n,r,a){return 0===e?"-":0===r?o.createElement(o.Fragment,null,r,a):o.createElement(o.Fragment,null,o.createElement(i.Link,{to:Object(p.h)(t.props.component.key,n)},r),a)},t}return S(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadStandards()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.getName=function(e,t){var n=e.category||e.cwe||"unknown",r={owaspTop10:g.b,sansTop25:g.c,cwe:g.a};return o.createElement(o.Fragment,null,r[t](this.state.standards,n),this.state.standards[t][n]&&this.state.standards[t][n].description&&o.createElement(d.a,{className:"spacer-left",overlay:this.renderOverlay(this.state.standards[t][n].description)}),0===e.activeRules&&e.totalRules>0&&"cwe"!==n&&"unknown"!==n&&o.createElement(d.a,{className:"spacer-left",overlay:this.renderMoreRulesOverlay(t,n)},o.createElement(E.a,{className:"vertical-middle",fill:N.blue,size:12})))},t.prototype.renderFinding=function(e,t,n){var r=this,a=this.props,s=a.branchLike,l=a.component,d=a.type,h=_({},Object(m.d)(s),{types:"SECURITY_HOTSPOT"});t&&n?(h.cwe=e.cwe,h[d]=n.category):h[d]=e.category;var f=this.props.showCWE&&e.distribution?e.distribution.map(function(t){return r.renderFinding(t,!0,e)}):null,g=Object(b.getRatingTooltip)("security_rating",e.vulnerabilityRating||1);return o.createElement(o.Fragment,{key:e.category||e.cwe},o.createElement("tr",null,o.createElement("td",{className:c({"cwe-title-cell":t})},this.getName(e,t?"cwe":d)),o.createElement("td",{className:"text-right"},o.createElement("div",{className:"display-inline-flex-center"},this.renderComponentIssuesLink(e.activeRules,_({},h,{types:"VULNERABILITY",resolved:"false"}),e.vulnerabilities,o.createElement(v.a,{overlay:g},o.createElement(i.Link,{className:"link-no-underline spacer-left",to:Object(p.h)(l.key,_({},h,{types:"VULNERABILITY",resolved:"false"}))},o.createElement(u.a,{value:e.vulnerabilityRating||1})))))),o.createElement("td",{className:"text-right security-column-separator"},this.renderComponentIssuesLink(e.activeRules,_({},h,{types:"SECURITY_HOTSPOT",resolved:"false",statuses:"OPEN,REOPENED"}),e.openSecurityHotspots)),o.createElement("td",{className:"text-right"},this.renderComponentIssuesLink(e.activeRules,_({},h,{types:"SECURITY_HOTSPOT",resolutions:"FIXED",statuses:"RESOLVED"}),e.toReviewSecurityHotspots)),o.createElement("td",{className:"text-right"},this.renderComponentIssuesLink(e.activeRules,_({},h,{types:"SECURITY_HOTSPOT",resolutions:"WONTFIX",statuses:"RESOLVED"}),e.wontFixSecurityHotspots))),f)},t.prototype.render=function(){var e=this;return o.createElement("div",{className:"boxed-group boxed-group-inner spacer-top"},o.createElement("table",{className:"data zebra security-reports"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{className:"security-category-column"},Object(l.l)("security_reports.list.categories")),o.createElement("th",{className:"security-result-column text-right"},o.createElement("div",{className:"display-inline-flex-center"},o.createElement(h.a,{className:"spacer-right"}),Object(l.l)("security_reports.list.vulnerabilities"))),o.createElement("th",{className:"text-right security-column-separator",colSpan:3},o.createElement("div",{className:"display-inline-flex-center"},o.createElement(f.a,{className:"spacer-right"}),Object(l.l)("security_reports.list.hotspots")))),o.createElement("tr",{className:"subheader"},o.createElement("th",{colSpan:2}),o.createElement("th",{className:"text-right security-result-column security-column-separator"},Object(l.l)("security_reports.line.open")),o.createElement("th",{className:"text-right security-result-column"},Object(l.l)("security_reports.line.in_review")),o.createElement("th",{className:"text-right security-result-column"},Object(l.l)("security_reports.line.wont_fix")))),o.createElement("tbody",null,this.props.findings.map(function(t){return e.renderFinding(t)}))))},t}(o.PureComponent),k=n(615),C=n(604),A=n(625),x=n(684),L=n(30),R=n(610);var P=n(624),j=n(612),F=n(648);n(1454);n.d(t,"App",function(){return U});var I=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),U=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.fetchSecurityHotspots=function(){var e,t=n.props,r=t.branchLike,o=t.component;n.setState({loading:!0}),(e={project:o.key,standard:n.state.type,includeDistribution:n.state.showCWE,branch:Object(m.f)(r)?r.name:void 0},Object(L.getJSON)("/api/security_reports/show",e).catch(R.a)).then(function(e){if(n.mounted){var t=e.categories.some(function(e){return e.vulnerabilities+e.openSecurityHotspots+e.toReviewSecurityHotspots+e.wontFixSecurityHotspots>0});n.setState({hasVulnerabilities:t,findings:e.categories,loading:!1})}}).catch(function(){n.mounted&&n.setState({loading:!1})})},n.handleCheck=function(e){n.props.router.push({pathname:n.props.location.pathname,query:{id:n.props.component.key,showCWE:e}}),n.setState({showCWE:e},n.fetchSecurityHotspots)},n.renderAdditionalRulesMessage=function(){var e=n.state.findings;if(0===e.length)return null;var t=e.map(function(e){return e.totalRules}).reduce(function(e,t){return e+t});return e.map(function(e){return e.activeRules}).reduce(function(e,t){return e+t})>=t?null:o.createElement(j.a,{className:"spacer-top",display:"inline",variant:"info"},Object(l.l)("security_reports.more_rules"))},n.state={loading:!1,findings:[],hasVulnerabilities:!1,type:"owasp_top_10"===t.params.type?"owaspTop10":"sansTop25",showCWE:"true"===t.location.query.showCWE},n}return I(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSecurityHotspots()},t.prototype.componentWillReceiveProps=function(e){if(e.location.pathname!==this.props.location.pathname){var t="true"===e.location.query.showCWE,n="owasp_top_10"===e.params.type?"owaspTop10":"sansTop25";this.setState({type:n,showCWE:t},this.fetchSecurityHotspots)}},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.branchLike,r=e.component,a=e.params,c=this.state,u=c.loading,p=c.findings,m=c.showCWE,d=c.type;return"owasp_top_10"!==a.type&&"sans_top_25"!==a.type?o.createElement(x.default,{withContainer:!1}):o.createElement("div",{className:"page page-limited",id:"security-reports"},o.createElement(k.a,{suggestions:"security_reports"}),o.createElement(s.a,{title:Object(l.l)("security_reports",d,"page")}),o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},Object(l.l)("security_reports",d,"page")),o.createElement("div",{className:"page-description"},Object(l.l)("security_reports",d,"description"),o.createElement(i.Link,{className:"spacer-left",target:"_blank",to:{pathname:"/documentation/user-guide/security-reports/"}},Object(l.l)("learn_more")),this.renderAdditionalRulesMessage())),o.createElement("div",{className:"display-inline-flex-center"},o.createElement(A.a,{checked:m,className:"spacer-left spacer-right vertical-middle",disabled:!this.state.hasVulnerabilities,id:"showCWE",onCheck:this.handleCheck},o.createElement("label",{className:"little-spacer-left",htmlFor:"showCWE"},Object(l.l)("security_reports.cwe.show"),o.createElement(P.a,{className:"spacer-left",doc:Promise.resolve().then(n.t.bind(null,1456,7))})))),o.createElement(C.a,{loading:u},o.createElement(T,{branchLike:t,component:r,findings:p,showCWE:m,type:d})))},t}(o.PureComponent);t.default=Object(F.a)(U)},611:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(592),o=n(593),a=n(602),s=n(654),i=n(599);n(622);function c(e){var t=e.children,n=void 0===t?r.createElement(s.a,{fill:i.gray71,size:12}):t,c=e.tagName,l=void 0===c?"div":c;return r.createElement(l,{className:o("help-tooltip",e.className)},r.createElement(a.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},n)))}},615:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r,o=n(592),a=n(645),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function i(e){var t=e.suggestions;return o.createElement(a.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return o.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(o.PureComponent)},622:function(e,t,n){var r=n(623);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(596)(r,o);r.locals&&(e.exports=r.locals)},623:function(e,t,n){(e.exports=n(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.help-tooltip {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.help-toolip-link {\n  display: block;\n  width: 12px;\n  height: 12px;\n  border: none;\n}\n",""])},624:function(e,t,n){"use strict";var r,o=n(592),a=n(611),s=n(607),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=Object(s.a)(function(){return Promise.all([n.e(8),n.e(10)]).then(n.bind(null,709))}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={open:!1},t.close=function(){t.setState({open:!1})},t}return i(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.doc.then(function(t){var n=t.default;e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?o.createElement(a.a,{className:this.props.className,overlay:o.createElement("div",{className:"abs-width-300"},o.createElement(c,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(o.PureComponent);t.a=l},625:function(e,t,n){"use strict";var r,o=n(592),a=n(593),s=n(604),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.disabled,r=e.loading,i=e.right,c=a("icon-checkbox",{"icon-checkbox-checked":this.props.checked,"icon-checkbox-single":this.props.thirdState,"icon-checkbox-disabled":n});return t?o.createElement("a",{className:a("link-checkbox",this.props.className,{note:n,disabled:n}),href:"#",id:this.props.id,onClick:this.handleClick},i&&t,o.createElement(s.a,{loading:Boolean(r)},o.createElement("i",{className:c})),!i&&t):r?o.createElement(s.a,null):o.createElement("a",{className:a(c,this.props.className),href:"#",id:this.props.id,onClick:this.handleClick})},t.defaultProps={thirdState:!1},t}(o.PureComponent);t.a=c},647:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(592),o=n(593),a=n(603);n(675);function s(e){var t=e.className,n=e.muted,s=void 0!==n&&n,i=e.small,c=void 0!==i&&i,l=e.value;if(void 0===l)return r.createElement("span",null,"–");var u=Object(a.formatMeasure)(l,"RATING");return r.createElement("span",{className:o("rating","rating-"+u,{"rating-small":c,"rating-muted":s},t)},u)}},657:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(592),o=n(597);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size;return r.createElement(o.a,{className:t,size:s},r.createElement("path",{d:"M10.8 5H6V3.9a2.28 2.28 0 0 1 2-2.5 2.22 2.22 0 0 1 1.8 1.2.48.48 0 0 0 .7.2.48.48 0 0 0 .2-.7A3 3 0 0 0 8 .4a3.34 3.34 0 0 0-3 3.5v1.2a2.16 2.16 0 0 0-2 2.1v4.4a2.22 2.22 0 0 0 2.2 2.2h5.6a2.22 2.22 0 0 0 2.2-2.2V7.2A2.22 2.22 0 0 0 10.8 5zm-2.2 5.5v1.2H7.4v-1.2a1.66 1.66 0 0 1-1.1-1.6A1.75 1.75 0 0 1 8 7.2a1.71 1.71 0 0 1 .6 3.3z",style:{fill:a}}))}},671:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(592),o=n(733),a=n(599),s=n(703);function i(e){var t=e.children;return r.createElement("div",{className:"global-container"},r.createElement("div",{className:"page-wrapper",id:"container"},r.createElement(s.a,{className:"navbar-global",height:a.globalNavHeightRaw}),t),r.createElement(o.a,null))}},675:function(e,t,n){var r=n(676);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(596)(r,o);r.locals&&(e.exports=r.locals)},676:function(e,t,n){(e.exports=n(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.rating {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.35);\n}\n\n.rating-muted {\n  background-color: #bdbdbd !important;\n  color: #fff !important;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.35) !important;\n}\n\na > .rating {\n  margin-bottom: -1px;\n  border-bottom: 1px solid;\n  transition: all 0.2s ease;\n}\n\na > .rating:hover {\n  opacity: 0.8;\n}\n\n.rating-A {\n  line-height: 23px;\n  background-color: #00aa00;\n}\n\na > .rating-A {\n  border-bottom-color: #00aa00;\n}\n\n.rating-B {\n  background-color: #b0d513;\n}\n\na .rating-B {\n  border-bottom-color: #b0d513;\n}\n\n.rating-C {\n  background-color: #eabe06;\n}\n\na .rating-C {\n  border-bottom-color: #eabe06;\n}\n\n.rating-D {\n  background-color: #ed7d20;\n}\n\na .rating-D {\n  border-bottom-color: #ed7d20;\n}\n\n.rating-E {\n  background-color: #e00;\n}\n\na .rating-E {\n  border-bottom-color: #e00;\n}\n\n.rating-small {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  font-size: 12px;\n}\n",""])},684:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(592),o=n(609),a=n(598),s=n(671),i=n(17);function c(e){var t=e.withContainer,n=void 0===t||t?s.default:r.Fragment;return r.createElement(n,null,r.createElement(o.Helmet,{defaultTitle:Object(i.l)("404_not_found"),defer:!1}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:"page-simple",id:"nonav"},r.createElement("h2",{className:"big-spacer-bottom"},Object(i.l)("page_not_found")),r.createElement("p",{className:"spacer-bottom"},Object(i.l)("address_mistyped_or_page_moved")),r.createElement("p",null,r.createElement(a.Link,{to:"/"},Object(i.l)("go_back_to_homepage"))))))}},724:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(592),o=n(597);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size;return r.createElement(o.a,{className:t,size:s},r.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:a}}))}},758:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(592),o=n(597);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size;return r.createElement(o.a,{className:t,size:s},r.createElement("g",{style:{fill:a}},r.createElement("path",{d:"M10.238 2.416c-0.432-0.895-1.259-1.504-2.202-1.504-1.386 0-2.521 1.318-2.521 2.927v5.481",fill:"none",stroke:a,strokeLinecap:"round",strokeWidth:"1.1429"}),r.createElement("path",{d:"M8.537 10.372v1.199h-1.099v-1.199c-0.638-0.228-1.099-0.832-1.099-1.546 0-0.909 0.739-1.649 1.648-1.649s1.649 0.74 1.649 1.649c0 0.715-0.461 1.32-1.099 1.546zM10.734 4.979h-5.494c-1.21 0-2.199 0.989-2.199 2.197v4.395c0 1.21 0.989 2.199 2.199 2.199h5.494c1.209 0 2.197-0.989 2.197-2.199v-4.395c0-1.209-0.989-2.197-2.197-2.197z"}),r.createElement("path",{d:"M4.030 6.352h6.923v6.923h-6.923z"}),r.createElement("path",{d:"M7.504 10.283c0-0.423 0.048-0.757 0.144-1.002s0.251-0.457 0.465-0.637c0.215-0.18 0.377-0.344 0.489-0.493s0.167-0.313 0.167-0.493c0-0.438-0.189-0.656-0.565-0.656-0.174 0-0.314 0.064-0.421 0.191s-0.164 0.3-0.17 0.518h-1.469c0.006-0.58 0.189-1.031 0.548-1.354s0.864-0.485 1.513-0.485c0.646 0 1.147 0.149 1.501 0.447s0.532 0.723 0.532 1.274c0 0.241-0.048 0.459-0.144 0.656s-0.249 0.398-0.46 0.604l-0.5 0.465c-0.142 0.136-0.241 0.276-0.296 0.42s-0.086 0.325-0.091 0.545h-1.243zM7.326 11.604c0-0.215 0.078-0.39 0.233-0.528s0.349-0.207 0.58-0.207c0.232 0 0.425 0.068 0.58 0.207s0.233 0.313 0.233 0.528-0.078 0.39-0.233 0.528c-0.155 0.138-0.349 0.207-0.58 0.207s-0.425-0.068-0.58-0.207c-0.155-0.138-0.233-0.313-0.233-0.528z",fill:"#fff"})))}}}]);
//# sourceMappingURL=286.1553004420962.chunk.js.map
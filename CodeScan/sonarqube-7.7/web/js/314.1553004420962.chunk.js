(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1254:function(e,n,t){"use strict";t.r(n);var r,o=t(592),a=t(608),i=t.n(a),c=t(598),s=t(753),l=t(594),u=t(648),p=t(600),m=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),h=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleClick=function(){var e=n.props,t=e.onClick,r=e.organization,o=e.router;t(),o.push(Object(p.r)(r.key))},n}return m(n,e),n.prototype.render=function(){var e=this.props.organization;return o.createElement(l.f,{className:"abs-width-300",onClick:this.handleClick},o.createElement("div",{className:"display-flex-center"},o.createElement(s.a,{className:"spacer-right",organization:e}),o.createElement("span",null,e.name)))},n}(o.PureComponent),f=Object(u.a)(h),d=t(17);function b(e){var n=e.onClick,t=e.organizations;if(0===t.length)return null;var r=i()(t,function(e){return e.name.toLocaleLowerCase()}).slice(0,3);return o.createElement("div",null,o.createElement("ul",null,r.map(function(e){return o.createElement("li",{key:e.key},o.createElement(f,{onClick:n,organization:e}))})),t.length>3&&o.createElement("div",{className:"big-spacer-top"},o.createElement("span",{className:"big-spacer-right"},Object(d.m)("x_of_y_shown",r.length,t.length)),o.createElement(c.Link,{className:"small",onClick:n,to:"/account/organizations"},Object(d.l)("see_all"))))}var g=t(606),y=t(911),v=t(597),O=t(599);function E(e){var n=e.className,t=e.fill,r=void 0===t?O.darkBlue:t,a=e.size;return o.createElement(v.a,{className:n,size:a||64,viewBox:"0 0 64 64"},o.createElement("g",{fill:"none",fillRule:"evenodd",stroke:r,strokeWidth:"2"},o.createElement("path",{d:"M32 9v5M11.5195 43.0898l7.48-4.091m33.481-18.0994l-7.48 4.1m-33.481-4.1l7.48 4.1M45 38.999l7.48 4.101M32 50v5m15-23c0 8.284-6.715 15-15 15s-15-6.716-15-15c0-8.285 6.715-15 15-15s15 6.715 15 15z"}),o.createElement("path",{d:"M40 38c0 1.656-3.58 2-8 2s-8-.344-8-2m16 0v-3l-5-3-1-1m-10 7v-3l5-3 1-1m6-4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1zm-.0098-21.71c7.18 1.069 13.439 4.96 17.609 10.51m-17.609 42.91c7.18-1.07 13.439-4.96 17.609-10.51M6.6299 41.25c-1.06-2.88-1.63-6-1.63-9.25s.57-6.37 1.63-9.25m3.7705-6.9502c4.17-5.55 10.43-9.44 17.609-10.51m-17.609 42.9104c4.17 5.55 10.43 9.439 17.609 10.51M57.3701 22.75c1.06 2.88 1.63 6 1.63 9.25s-.57 6.37-1.63 9.25"}),o.createElement("path",{d:"M36 5c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M12 19c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2m51 0c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M12 45c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2m51 0c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2M36 59c0 2.209-1.79 4-4 4-2.209 0-4-1.791-4-4 0-2.21 1.791-4 4-4 2.21 0 4 1.79 4 4zm-5 0h2"})))}var w=t(776),j=t(848);t(801);function _(e){var n=e.currentUser,t=e.onClose,r=e.onOpenProjectOnboarding,a=e.userOrganizations.filter(function(e){return e.key!==n.personalOrganization}),i=Object(d.l)("onboarding.header");return o.createElement(g.a,{contentLabel:i,onRequestClose:t,shouldCloseOnOverlayClick:!1,size:a.length>0?"medium":"small"},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,Object(d.l)("onboarding.header")),o.createElement("p",{className:"spacer-top"},Object(d.l)("onboarding.header.description"))),o.createElement("div",{className:"modal-body text-center display-flex-row huge-spacer-top huge-spacer-bottom"},o.createElement("div",{className:"flex-1"},o.createElement(y.a,{className:"big-spacer-bottom"}),o.createElement("h3",{className:"big-spacer-bottom"},Object(d.l)("onboarding.analyze_your_code")),o.createElement(l.a,{onClick:r},Object(d.l)("onboarding.project.create"))),a.length>0&&o.createElement(o.Fragment,null,o.createElement("div",{className:"vertical-pipe-separator"},o.createElement("div",{className:"vertical-separator"})),o.createElement("div",{className:"flex-1"},o.createElement(E,{className:"big-spacer-bottom"}),o.createElement("h3",{className:"big-spacer-bottom"},Object(d.l)("onboarding.browse_your_organizations")),o.createElement(b,{onClick:t,organizations:a})))),o.createElement("div",{className:"modal-foot text-right"},o.createElement(l.g,{onClick:t},Object(d.l)("not_now"))))}t.d(n,"OnboardingModal",function(){return _});n.default=Object(j.a)(Object(w.a)(_))},606:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(592),o=t(639),a=t(593),i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function c(e){return r.createElement(o,i({className:a("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}o.setAppElement("#content")},621:function(e,n,t){"use strict";function r(e,n){return n+"("+(e.displayName||e.name||"Component")+")"}t.d(n,"a",function(){return r})},677:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r,o=t(592),a=t(601),i=t(621),c=t(605),s=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),l=function(){return(l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function u(e){var n=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return s(t,n),t.prototype.render=function(){return o.createElement(e,l({},this.props))},t.displayName=Object(i.a)(e,"withCurrentUser"),t}(o.Component);return Object(a.connect)(function(e){return{currentUser:Object(c.getCurrentUser)(e)}})(n)}},694:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return o});var r=t(693);function o(){var e=Object(r.a)(),n=window.location.pathname+window.location.search+window.location.hash;e.replace({pathname:"/sessions/new",query:{return_to:n}})}},776:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var r,o=t(592),a=t(621),i=t(677),c=t(616),s=t(694),l=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function p(e){var n=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return l(t,n),t.prototype.componentDidMount=function(){Object(c.b)(this.props.currentUser)||Object(s.default)()},t.prototype.render=function(){return Object(c.b)(this.props.currentUser)?o.createElement(e,u({},this.props)):null},t.displayName=Object(a.a)(e,"whenLoggedIn"),t}(o.Component);return Object(i.a)(n)}},801:function(e,n,t){var r=t(802);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(596)(r,o);r.locals&&(e.exports=r.locals)},802:function(e,n,t){(e.exports=t(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.onboarding-step {\n  position: relative;\n  padding-left: 34px;\n}\n\n.onboarding-step:not(.is-open):not(.is-finished) {\n  opacity: 0.4;\n}\n\n.onboarding-step .boxed-group-actions {\n  height: 24px;\n  line-height: 24px;\n}\n\n.onboarding-step hr {\n  margin-left: -54px;\n}\n\n.onboarding-step-number {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 24px;\n  background-color: #b9b9b9;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n}\n\n.onboarding-step.is-open .onboarding-step-number {\n  background-color: #236a97;\n}\n\n.onboarding-step.is-finished {\n  cursor: pointer;\n  outline: none;\n}\n",""])},848:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var r,o=t(592),a=t(601),i=t(621),c=t(605),s=t(876),l=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function p(e){var n=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return l(t,n),t.prototype.componentDidMount=function(){this.props.fetchMyOrganizations()},t.prototype.render=function(){return o.createElement(e,u({},this.props))},t.displayName=Object(i.a)(e,"withUserOrganizations"),t}(o.Component),t={fetchMyOrganizations:s.b};return Object(a.connect)(function(e){return{userOrganizations:Object(c.getMyOrganizations)(e)}},t)(n)}},911:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(592),o=t(597),a=t(599);function i(e){var n=e.className,t=e.fill,i=void 0===t?a.darkBlue:t,c=e.size;return r.createElement(o.a,{className:n,size:c||64,viewBox:"0 0 64 64"},r.createElement("g",{fill:"none",fillRule:"evenodd",stroke:i,strokeWidth:"2"},r.createElement("path",{d:"M2 59h60V13H2zm0-46h60V5H2zm3-4h2m2 0h2m2 0h2m2 0h42"}),r.createElement("path",{d:"M59 34h-6l-2-4h-6l-2 5h-6l-2 2h-6l-2-4h-6l-2 5h-6l-2 4H5m1 14v-9m4 9v-6m4 6V43m4 13V45m4 11V42m4 14V39m4 17V41m4 15V46m4 10V40m4 16V44m4 12V37m4 19V38m4 18V43m4 13V39m-3-18h-2m-2 0h-2m-2 0h-2M9 29h14M9 33h7m17-12h8m-14 4h8m-8-4h4m-21 4h12v-4H10z"}),r.createElement("path",{d:"M58 31V17H6v22"})))}}}]);
//# sourceMappingURL=314.1553004420962.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{382:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(354),o=n(368),r=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&(n[i[o]]=e[i[o]])}return n};class a extends i.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})}),this.handleCloseClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()}),this.handleFormSubmit=(e=>{e.preventDefault(),this.submit()}),this.handleSubmitClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()}),this.submit=(()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,n=e.header,a=e.onClose,s=(e.onSubmit,r(e,["children","header","onClose","onSubmit"]));return i.createElement(o.a,Object.assign({contentLabel:n,onRequestClose:a},s),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},401:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n(354),o=n(382),r=n(366),a=n(356),s=n(0);class l extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=(()=>{const e=this.props.onConfirm(this.props.confirmData);return e?e.then(this.props.onClose,()=>{}):void this.props.onClose()}),this.renderModalContent=(({onCloseClick:e,onFormSubmit:t,submitting:n})=>{const o=this.props,l=o.children,c=o.confirmButtonText,d=o.confirmDisable,u=o.header,h=o.headerDescription,p=o.isDestructive,m=o.cancelButtonText,g=void 0===m?Object(s.l)("cancel"):m;return i.createElement("form",{onSubmit:t},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,u),h),i.createElement("div",{className:"modal-body"},l),i.createElement("footer",{className:"modal-foot"},i.createElement(r.a,{className:"spacer-right",loading:n}),i.createElement(a.h,{autoFocus:!0,className:p?"button-red":void 0,disabled:n||d},c),i.createElement(a.g,{disabled:n,onClick:e},g)))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return i.createElement(o.a,Object.assign({onSubmit:this.handleSubmit},t),this.renderModalContent)}}},406:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(354),o=n(355),r=n(365);n(423);function a(e){const t=Object(r.formatMeasure)(e.level,"LEVEL"),n=o(e.className,"level","level-"+e.level,{"level-small":e.small,"level-muted":e.muted});return i.createElement("span",{className:n},t)}},407:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(354),o=n(355),r=n(365);n(435);function a({className:e,muted:t=!1,small:n=!1,value:a}){if(void 0===a)return i.createElement("span",null,"–");const s=Object(r.formatMeasure)(a,"RATING");return i.createElement("span",{className:o("rating","rating-"+s,{"rating-small":n,"rating-muted":t},e)},s)}},412:function(e,t,n){"use strict";var i=n(354),o=n(355),r=n(360),a=n(377),s=n(381),l=n(359);function c({className:e,fill:t="currentColor",size:n=14}){return i.createElement(l.a,{className:e,size:n,viewBox:"0 0 14 14"},i.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},i.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:t}})))}var d=n(356);function u(e){return i.createElement(a.b,{className:e.className,onOpen:e.onOpen,overlay:i.createElement("ul",{className:"menu"},e.children)},i.createElement(d.a,{className:o("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},i.createElement(c,{size:e.small?12:14}),i.createElement(s.a,{className:"little-spacer-left"})))}n.d(t,"c",function(){return u}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return p});class h extends i.PureComponent{constructor(){super(...arguments),this.handleClick=(e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onClick&&this.props.onClick()})}render(){const e=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?i.createElement("li",null,i.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?i.createElement("li",null,i.createElement(r.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):i.createElement("li",null,i.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))}}function p(){return i.createElement("li",{className:"divider"})}},419:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(354),o=n(401),r=n(420),a=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&(n[i[o]]=e[i[o]])}return n};class s extends i.PureComponent{constructor(){super(...arguments),this.renderConfirmModal=(({onClose:e})=>{const t=this.props,n=(t.children,t.modalBody),r=t.modalHeader,s=t.modalHeaderDescription,l=a(t,["children","modalBody","modalHeader","modalHeaderDescription"]);return i.createElement(o.a,Object.assign({header:r,headerDescription:s,onClose:e},l),n)})}render(){return i.createElement(r.a,{modal:this.renderConfirmModal},this.props.children)}}},420:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n(354);class o extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleButtonClick=(()=>{this.setState({modal:!0})}),this.handleFormSubmit=(e=>{e&&e.preventDefault(),this.setState({modal:!0})}),this.handleCloseModal=(()=>{this.mounted&&this.setState({modal:!1})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return i.createElement(i.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))}}},423:function(e,t,n){var i=n(424);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(358)(i,o);i.locals&&(e.exports=i.locals)},424:function(e,t,n){(e.exports=n(357)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.level {\n  display: inline-block;\n  width: auto;\n  min-width: 80px;\n  padding-left: 9px;\n  padding-right: 9px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  color: #fff;\n  letter-spacing: 0.02em;\n  font-size: 13px;\n  font-weight: 400;\n  text-align: center;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.35);\n}\n\n.level-small {\n  width: auto;\n  min-width: 64px;\n  padding-left: 9px;\n  padding-right: 9px;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n}\n\n.level-muted {\n  background-color: #bdbdbd !important;\n}\n\na > .level {\n  margin-bottom: -1px;\n  border-bottom: 1px solid;\n  transition: all 0.2s ease;\n}\n\na > .level:hover {\n  opacity: 0.8;\n}\n\n.level-OK {\n  background-color: #00aa00;\n}\n\n.level-WARN {\n  background-color: #ed7d20;\n}\n\n.level-ERROR {\n  background-color: #d4333f;\n}\n\n.level-NONE {\n  background-color: #b4b4b4;\n}\n",""])},433:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(354),o=n(355),r=n(363);class a extends i.PureComponent{constructor(){super(...arguments),this.handleChange=(e=>{const t=e.currentTarget.value;this.props.onCheck(t)}),this.renderOption=(e=>{const t=e.value===this.props.value,n=this.props.name+"__"+e.value;return i.createElement("li",{key:e.value},i.createElement("input",{checked:t,disabled:e.disabled,id:n,name:this.props.name,onChange:this.handleChange,type:"radio",value:e.value}),i.createElement(r.a,{overlay:e.tooltip||void 0},i.createElement("label",{htmlFor:n},e.label)))})}render(){return i.createElement("ul",{className:o("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))}}a.defaultProps={disabled:!1,value:null}},435:function(e,t,n){var i=n(436);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(358)(i,o);i.locals&&(e.exports=i.locals)},436:function(e,t,n){(e.exports=n(357)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.rating {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.35);\n}\n\n.rating-muted {\n  background-color: #bdbdbd !important;\n  color: #fff !important;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.35) !important;\n}\n\na > .rating {\n  margin-bottom: -1px;\n  border-bottom: 1px solid;\n  transition: all 0.2s ease;\n}\n\na > .rating:hover {\n  opacity: 0.8;\n}\n\n.rating-A {\n  line-height: 23px;\n  background-color: #00aa00;\n}\n\na > .rating-A {\n  border-bottom-color: #00aa00;\n}\n\n.rating-B {\n  background-color: #b0d513;\n}\n\na .rating-B {\n  border-bottom-color: #b0d513;\n}\n\n.rating-C {\n  background-color: #eabe06;\n}\n\na .rating-C {\n  border-bottom-color: #eabe06;\n}\n\n.rating-D {\n  background-color: #ed7d20;\n}\n\na .rating-D {\n  border-bottom-color: #ed7d20;\n}\n\n.rating-E {\n  background-color: #e00;\n}\n\na .rating-E {\n  border-bottom-color: #e00;\n}\n\n.rating-small {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  font-size: 12px;\n}\n",""])},456:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(421),o=n(416);function r(e){Object(i.default)().dispatch(o.b(e))}},457:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(354),o=n(359),r=n(361);function a({className:e,fill:t=r.blue,size:n}){return i.createElement(o.a,{className:e,size:n},i.createElement("g",{transform:"translate(5, 0)"},i.createElement("path",{d:"M4.5 8c0-.9-.6-1.7-1.5-1.9V4c.9-.2 1.5-1 1.5-1.9 0-1.1-.9-2-2-2s-2 .9-2 2C.5 3 1.1 3.8 2 4v2.1C1.1 6.3.5 7.1.5 8s.6 1.7 1.5 2v2.1c-.9.2-1.5 1-1.5 1.9 0 1.1.9 2 2 2s2-.9 2-2c0-.9-.6-1.7-1.5-1.9V10c.9-.3 1.5-1 1.5-2zm-3-5.9c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.5-1-1zm0 5.9c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm2 6c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1z",style:{fill:t}})))}},504:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var i=n(354),o=n(369),r=n(361);const a=Object(o.a)(()=>Promise.all([n.e(8),n.e(371)]).then(n.bind(null,704))),s={small:16,normal:24,big:40,huge:60},l={small:2,normal:3,big:3,huge:4};function c({muted:e=!1,size:t="normal",value:n}){let o=[{value:100,fill:"#ccc "}];if(null!=n){const t=Number(n);o=[{value:t,fill:e?r.gray71:r.green},{value:100-t,fill:e?r.barBackgroundColor:r.red}]}const c=s[t],d=l[t];return i.createElement(a,{data:o,height:c,thickness:d,width:c})}},505:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(434),o=n.n(i),r=n(354),a=n(355);n(557);function s({muted:e=!1,size:t="normal",value:n}){const i=a("duplications-rating",{"duplications-rating-small":"small"===t,"duplications-rating-big":"big"===t,"duplications-rating-huge":"huge"===t,"duplications-rating-muted":e||null==n||isNaN(n),"duplications-rating-A":o()(n||0,0,3),"duplications-rating-B":o()(n||0,3,5),"duplications-rating-C":o()(n||0,5,10),"duplications-rating-D":o()(n||0,10,20),"duplications-rating-E":(n||0)>=20});return r.createElement("div",{className:i})}},554:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(354),o=n(355),r=n(359),a=n(361);function s({className:e,favorite:t,fill:n=a.orange,size:s}){return i.createElement(r.a,{className:o("icon-outline",{"is-filled":t},e),size:s,style:{color:n}},i.createElement("g",{transform:"matrix(0.988024,0,0,0.988024,0.0957953,0.717719)"},i.createElement("path",{d:"M15.428,5.777C15.428,5.908 15.35,6.051 15.195,6.205L11.954,9.366L12.722,13.83C12.728,13.872 12.731,13.932 12.731,14.009C12.731,14.134 12.7,14.24 12.637,14.326C12.575,14.412 12.484,14.455 12.365,14.455C12.252,14.455 12.133,14.42 12.008,14.348L7.999,12.241L3.99,14.348C3.859,14.42 3.74,14.455 3.633,14.455C3.508,14.455 3.414,14.412 3.352,14.326C3.289,14.24 3.258,14.134 3.258,14.009C3.258,13.973 3.264,13.914 3.276,13.83L4.044,9.366L0.794,6.205C0.645,6.045 0.57,5.902 0.57,5.777C0.57,5.557 0.737,5.42 1.07,5.366L5.552,4.714L7.561,0.652C7.674,0.408 7.82,0.286 7.999,0.286C8.177,0.286 8.323,0.408 8.436,0.652L10.445,4.714L14.927,5.366C15.261,5.42 15.427,5.557 15.427,5.777L15.428,5.777Z"})))}},555:function(e,t,n){var i=n(556);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(358)(i,o);i.locals&&(e.exports=i.locals)},556:function(e,t,n){(e.exports=n(357)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.select-list {\n}\n\n.select-list-container {\n  min-width: 500px;\n  box-sizing: border-box;\n}\n\n.select-list-control {\n  margin-bottom: 10px;\n  box-sizing: border-box;\n}\n\n.select-list-list-container {\n  border: 1px solid #bfbfbf;\n  box-sizing: border-box;\n  height: 400px;\n  overflow: auto;\n}\n\n.select-list-list-checkbox {\n  display: flex !important;\n  align-items: center;\n}\n\n.select-list-list-checkbox i {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n\n.select-list-list-disabled {\n  cursor: not-allowed;\n}\n\n.select-list-list-disabled > a {\n  pointer-events: none;\n}\n\n.select-list-list-item {\n  display: inline-block;\n  vertical-align: middle;\n}\n",""])},557:function(e,t,n){var i=n(558);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(358)(i,o);i.locals&&(e.exports=i.locals)},558:function(e,t,n){(e.exports=n(357)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.duplications-rating {\n  position: relative;\n  display: inline-flex;\n  vertical-align: top;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  border: 3px solid #ed7d20;\n  border-radius: 24px;\n  box-sizing: border-box;\n}\n\n.duplications-rating-small {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n}\n\n.duplications-rating-big {\n  width: 40px;\n  height: 40px;\n  border-width: 3px;\n}\n\n.duplications-rating-huge {\n  width: 60px;\n  height: 60px;\n  border-width: 4px;\n  border-radius: 30px;\n}\n\n.duplications-rating-muted {\n  border-color: #bdbdbd !important;\n}\n\n.duplications-rating-muted:after {\n  background-color: #bdbdbd !important;\n}\n\n.duplications-rating:after {\n  border-radius: 24px;\n  content: '';\n}\n\n.duplications-rating-A {\n  border-color: #00aa00;\n}\n\n.duplications-rating-A:after {\n  display: none;\n}\n\n.duplications-rating-B {\n  border-color: #b0d513;\n}\n\n.duplications-rating-B:after {\n  width: 6px;\n  height: 6px;\n  background-color: #b0d513;\n}\n\n.duplications-rating-small.duplications-rating-B:after {\n  width: 2px;\n  height: 2px;\n}\n\n.duplications-rating-big.duplications-rating-B:after {\n  width: 12px;\n  height: 12px;\n}\n\n.duplications-rating-huge.duplications-rating-B:after {\n  width: 18px;\n  height: 18px;\n}\n\n.duplications-rating-C {\n  border-color: #eabe06;\n}\n\n.duplications-rating-C:after {\n  width: 8px;\n  height: 8px;\n  background-color: #eabe06;\n}\n\n.duplications-rating-small.duplications-rating-C:after {\n  width: 6px;\n  height: 6px;\n}\n\n.duplications-rating-big.duplications-rating-C:after {\n  width: 16px;\n  height: 16px;\n}\n\n.duplications-rating-huge.duplications-rating-C:after {\n  width: 24px;\n  height: 24px;\n}\n\n.duplications-rating-D {\n  border-color: #ed7d20;\n}\n\n.duplications-rating-D:after {\n  width: 12px;\n  height: 12px;\n  background-color: #ed7d20;\n}\n\n.duplications-rating-small.duplications-rating-D:after {\n  width: 8px;\n  height: 8px;\n}\n\n.duplications-rating-big.duplications-rating-D:after {\n  width: 24px;\n  height: 24px;\n}\n\n.duplications-rating-huge.duplications-rating-D:after {\n  width: 36px;\n  height: 36px;\n}\n\n.duplications-rating-E {\n  border-color: #d4333f;\n}\n\n.duplications-rating-E:after {\n  width: 14px;\n  height: 14px;\n  background-color: #d4333f;\n}\n\n.duplications-rating-small.duplications-rating-E:after {\n  width: 10px;\n  height: 10px;\n}\n\n.duplications-rating-big.duplications-rating-E:after {\n  width: 28px;\n  height: 28px;\n}\n\n.duplications-rating-huge.duplications-rating-E:after {\n  width: 42px;\n  height: 42px;\n}\n",""])},582:function(e,t,n){"use strict";var i=n(354),o=n(355),r=n(386);class a extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.handleCheck=(e=>{this.setState({loading:!0}),(e?this.props.onSelect:this.props.onUnselect)(this.props.element).then(this.stopLoading,this.stopLoading)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return i.createElement("li",{className:o({"select-list-list-disabled":this.props.disabled})},i.createElement(r.a,{checked:this.props.selected,className:o("select-list-list-checkbox",{active:this.props.active}),disabled:this.props.disabled,loading:this.state.loading,onCheck:this.handleCheck},i.createElement("span",{className:"little-spacer-left"},this.props.renderElement(this.props.element))))}}var s=n(366),l=n(0);class c extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.isDisabled=(e=>this.props.readOnly||this.props.disabledElements.includes(e)),this.isSelected=(e=>this.props.selectedElements.includes(e)),this.handleBulkChange=(e=>{this.setState({loading:!0}),e?Promise.all(this.props.elements.map(e=>this.props.onSelect(e))).then(this.stopLoading).catch(this.stopLoading):Promise.all(this.props.selectedElements.map(e=>this.props.onUnselect(e))).then(this.stopLoading).catch(this.stopLoading)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}renderBulkSelector(){const e=this.props,t=e.elements,n=e.readOnly,o=e.selectedElements;return i.createElement(i.Fragment,null,i.createElement("li",null,i.createElement(r.a,{checked:o.length>0,disabled:this.state.loading||n,onCheck:this.handleBulkChange,thirdState:o.length>0&&t.length!==o.length},i.createElement("span",{className:"big-spacer-left"},Object(l.l)("bulk_change"),i.createElement(s.a,{className:"spacer-left",loading:this.state.loading,timeout:10})))),i.createElement("li",{className:"divider"}))}render(){const e=this.props,t=e.allowBulkSelection,n=e.elements,r=e.filter,s=n.filter(e=>{if(r===d.All)return!0;const t=this.isSelected(e);return r===d.Selected?t:!t});return i.createElement("div",{className:o("select-list-list-container spacer-top")},i.createElement("ul",{className:"menu"},t&&n.length>0&&r===d.All&&this.renderBulkSelector(),s.map(e=>i.createElement(a,{disabled:this.isDisabled(e),element:e,key:e,onSelect:this.props.onSelect,onUnselect:this.props.onUnselect,renderElement:this.props.renderElement,selected:this.isSelected(e)}))))}}var d,u=n(405),h=n(433);n(555);n.d(t,"a",function(){return d}),n.d(t,"b",function(){return p}),function(e){e.All="all",e.Selected="selected",e.Unselected="deselected"}(d||(d={}));class p extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={filter:d.Selected,loading:!1,query:""},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.changeFilter=(e=>{this.setState({filter:e,loading:!0}),this.props.onSearch(this.state.query,e).then(this.stopLoading,this.stopLoading)}),this.handleQueryChange=(e=>{this.setState({loading:!0,query:e}),this.props.onSearch(e,this.getFilter()).then(this.stopLoading,this.stopLoading)}),this.getFilter=(()=>""===this.state.query?this.state.filter:d.All)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.labelSelected,n=void 0===t?Object(l.l)("selected"):t,o=e.labelUnselected,r=void 0===o?Object(l.l)("unselected"):o,a=e.labelAll,s=void 0===a?Object(l.l)("all"):a,p=this.state.filter,m=""!==this.state.query;return i.createElement("div",{className:"select-list"},i.createElement("div",{className:"display-flex-center"},i.createElement(h.a,{className:"spacer-right",name:"filter",onCheck:this.changeFilter,options:[{disabled:m,label:n,value:d.Selected},{disabled:m,label:r,value:d.Unselected},{disabled:m,label:s,value:d.All}],value:p}),i.createElement(u.a,{autoFocus:!0,loading:this.state.loading,onChange:this.handleQueryChange,placeholder:Object(l.l)("search_verb"),value:this.state.query})),i.createElement(c,{allowBulkSelection:this.props.allowBulkSelection,disabledElements:this.props.disabledElements||[],elements:this.props.elements,filter:this.getFilter(),onSelect:this.props.onSelect,onUnselect:this.props.onUnselect,readOnly:this.props.readOnly,renderElement:this.props.renderElement,selectedElements:this.props.selectedElements}))}}},583:function(e,t,n){"use strict";var i=n(364),o=n(360),r=n(349),a=n(372),s=n(456),l=n(376),c=n(365),d=n(4),u=n(404),h=n(392),p=n(395),m=n(603),g=n(604),f=n(396),b=n(368),C=n(373),v=n(405),x=n(375),S=n(363),E=n(582),y=n(504),w=n(505),L=n(406),N=n(356),O=n(386),k=n(366),F=n(377),A=n(664),T=n(538),P=n(502),R=n(712),U=n(588),B=n(393),D=n(381),j=n(413),I=n(716),M=n(397),z=n(407),G=n(640),W=n(457),q=n(589),H=n(412),Y=n(419),Z=n(382),Q=n(907),V=n(433),_=n(374);var J=()=>{const e=window;e.ReactRedux=i,e.ReactRouter=o,e.SonarMeasures=c,e.SonarRequest=Object.assign({},d,{throwGlobalError:a.a,addGlobalSuccessMessage:s.a}),e.SonarComponents={ActionsDropdown:H.c,ActionsDropdownItem:H.b,Alert:_.a,AlertErrorIcon:T.a,AlertSuccessIcon:P.a,AlertWarnIcon:R.a,BranchIcon:G.a,Button:N.a,Checkbox:O.a,CheckIcon:U.a,ClearIcon:B.a,ConfirmButton:Y.a,CoverageRating:y.a,DateFormatter:h.a,DateFromNow:u.a,DateTimeFormatter:p.a,DeferredSpinner:k.a,Dropdown:F.b,DropdownIcon:D.a,DuplicationsRating:w.a,EditButton:N.e,Favorite:m.a,FormattedMessage:r.FormattedMessage,HelpIcon:j.a,HelpTooltip:C.a,HomePageSelect:g.a,Level:L.a,ListFooter:f.a,LockIcon:I.a,LongLivingBranchIcon:W.a,Modal:b.a,PullRequestIcon:q.a,QualifierIcon:M.a,RadioToggle:V.a,Rating:z.a,ReloadButton:A.a,ResetButtonLink:N.g,SearchBox:v.a,SearchSelect:Q.a,Select:x.c,SelectList:E.b,SimpleModal:Z.a,SubmitButton:N.h,Suggestions:l.a,Tooltip:S.a}},$=n(32),K=n(362);function X(e){return new Promise((t,n)=>{const i=Object($.b)(e);i?t(i):function(e){return new Promise(t=>{J();const n=document.createElement("script");n.src=`${Object(K.b)()}/static/${e}.js`,n.onload=t,document.getElementsByTagName("body")[0].appendChild(n)})}(e).then(()=>{const i=Object($.b)(e);i?t(i):n()},n)})}n.d(t,"a",function(){return X})},588:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(354),o=n(359);function r({className:e,fill:t="currentColor",size:n}){return i.createElement(o.a,{className:e,size:n},i.createElement("path",{d:"M14.92 4.804q0 0.357-0.25 0.607l-7.679 7.679q-0.25 0.25-0.607 0.25t-0.607-0.25l-4.446-4.446q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.634 5.857-5.866q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607z",style:{fill:t}}))}},589:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(354),o=n(359),r=n(361);function a({className:e,fill:t=r.blue,size:n}){return i.createElement(o.a,{className:e,size:n},i.createElement("path",{d:"M13,11.9L13,5.5C13,5.4 13.232,1.996 7.9,2L9.1,0.8L8.5,0.1L5.9,2.6L8.5,5.1L9.2,4.4L7.905,3.008C12.256,2.99 12,5.4 12,5.5L12,11.9C11.1,12.1 10.5,12.9 10.5,13.8C10.5,14.9 11.4,15.8 12.5,15.8C13.6,15.8 14.5,14.9 14.5,13.8C14.5,12.9 13.9,12.2 13,11.9ZM4,11.9C4.9,12.2 5.5,12.9 5.5,13.8C5.5,14.9 4.6,15.8 3.5,15.8C2.4,15.8 1.5,14.9 1.5,13.8C1.5,12.9 2.1,12.1 3,11.9L3,4.1C2.1,3.9 1.5,3.1 1.5,2.2C1.5,1.1 2.4,0.2 3.5,0.2C4.6,0.2 5.5,1.1 5.5,2.2C5.5,3.1 4.9,3.9 4,4.1L4,11.9ZM12.5,14.9C11.9,14.9 11.5,14.5 11.5,13.9C11.5,13.3 11.9,12.9 12.5,12.9C13.1,12.9 13.5,13.3 13.5,13.9C13.5,14.5 13.1,14.9 12.5,14.9ZM3.5,14.9C2.9,14.9 2.5,14.5 2.5,13.9C2.5,13.3 2.9,12.9 3.5,12.9C4.1,12.9 4.5,13.3 4.5,13.9C4.5,14.5 4.1,14.9 3.5,14.9ZM2.5,2.2C2.5,1.6 2.9,1.2 3.5,1.2C4.1,1.2 4.5,1.6 4.5,2.2C4.5,2.8 4.1,3.2 3.5,3.2C2.9,3.2 2.5,2.8 2.5,2.2Z",style:{fill:t}}))}},603:function(e,t,n){"use strict";var i=n(354),o=n(355),r=n(363),a=n(554),s=n(0);class l extends i.PureComponent{constructor(e){super(e),this.mounted=!1,this.toggleFavorite=(e=>{e.preventDefault(),this.state.favorite?this.removeFavorite():this.addFavorite()}),this.state={favorite:this.props.favorite}}componentDidMount(){this.mounted=!0}componentWillReceiveProps(e){e.favorite===this.props.favorite&&e.favorite===this.state.favorite||this.setState({favorite:e.favorite})}componentWillUnmount(){this.mounted=!1}addFavorite(){this.props.addFavorite().then(()=>{this.mounted&&this.setState({favorite:!0})},()=>{})}removeFavorite(){this.props.removeFavorite().then(()=>{this.mounted&&this.setState({favorite:!1})},()=>{})}render(){const e=this.state.favorite?Object(s.l)("favorite.current",this.props.qualifier):Object(s.l)("favorite.check",this.props.qualifier);return i.createElement(r.a,{overlay:e},i.createElement("a",{className:o("display-inline-block","link-no-underline",this.props.className),href:"#",onClick:this.toggleFavorite},i.createElement(a.a,{favorite:this.state.favorite})))}}var c=n(4);n.d(t,"a",function(){return u});var d=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&(n[i[o]]=e[i[o]])}return n};function u(e){var t=e.component,n=d(e,["component"]);return i.createElement(l,Object.assign({},n,{addFavorite:()=>(function(e){return Object(c.post)("/api/favorites/add",{component:e})})(t),removeFavorite:()=>(function(e){return Object(c.post)("/api/favorites/remove",{component:e})})(t)}))}},610:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(354),o=n(359),r=n(361);function a({className:e,fill:t=r.blue,size:n}){return i.createElement(o.a,{className:e,size:n},i.createElement("g",{transform:"translate(3, 0)"},i.createElement("path",{d:"M9.5 6.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.5 1.2 1.8-.3.6-.7 1.1-1.2 1.4-.9.5-1.9.5-2.5.4V4c.9-.2 1.5-1 1.5-1.9 0-1.1-.9-2-2-2s-2 .9-2 2C.5 3 1.1 3.8 2 4v8c-.9.2-1.5 1-1.5 1.9 0 1.1.9 2 2 2s2-.9 2-2c0-.9-.6-1.7-1.5-1.9v-1c.2 0 .5.1.7.1.7 0 1.5-.1 2.2-.6.8-.5 1.4-1.2 1.7-2.1 1.1 0 1.9-.9 1.9-1.9zm-8-4.4c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.5-1-1zm2 11.9c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm4-6.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z",style:{fill:t}})))}},640:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var i=n(354),o=n(610),r=n(457),a=n(589),s=n(378),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&(n[i[o]]=e[i[o]])}return n};function c(e){var t=e.branchLike,n=l(e,["branchLike"]);return Object(s.h)(t)?i.createElement(a.a,Object.assign({},n)):Object(s.j)(t)?i.createElement(o.a,Object.assign({},n)):i.createElement(r.a,Object.assign({},n))}},716:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(354),o=n(359);function r({className:e,fill:t="currentColor",size:n}){return i.createElement(o.a,{className:e,size:n},i.createElement("path",{d:"M5.455 7.364h5.09v-1.91A2.55 2.55 0 0 0 8 2.91a2.55 2.55 0 0 0-2.545 2.546v1.909zm8.272.954v5.727a.955.955 0 0 1-.954.955H3.227a.955.955 0 0 1-.954-.955V8.318c0-.527.427-.954.954-.954h.318v-1.91C3.545 3.01 5.554 1 8 1s4.455 2.009 4.455 4.455v1.909h.318c.527 0 .954.427.954.954z",style:{fill:t}}))}}}]);
//# sourceMappingURL=2.m.898b9dda.chunk.js.map
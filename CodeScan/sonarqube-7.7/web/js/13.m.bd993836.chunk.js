(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1646:function(e,t,n){"use strict";n.r(t);var s=n(354),a=n(371),o=n(366),r=n(382),i=n(356),l=n(0);class c extends s.PureComponent{constructor(e){super(e),this.handleSubmit=(()=>this.props.onSubmit({description:this.state.description,name:this.state.name}).then(this.props.onClose)),this.handleDescriptionChange=(e=>{this.setState({description:e.currentTarget.value})}),this.handleNameChange=(e=>{this.setState({name:e.currentTarget.value})}),this.state={description:e.group&&e.group.description||"",name:e.group&&e.group.name||""}}render(){return s.createElement(r.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},({onCloseClick:e,onFormSubmit:t,submitting:n})=>s.createElement("form",{onSubmit:t},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,this.props.header)),s.createElement("div",{className:"modal-body"},s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-group-name"},Object(l.l)("name"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{autoFocus:!0,id:"create-group-name",maxLength:255,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name})),s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-group-description"},Object(l.l)("description")),s.createElement("textarea",{id:"create-group-description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description}))),s.createElement("footer",{className:"modal-foot"},s.createElement(o.a,{className:"spacer-right",loading:n}),s.createElement(i.h,{disabled:n},this.props.confirmButtonText),s.createElement(i.g,{onClick:e},Object(l.l)("cancel")))))}}class d extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={createModal:!1},this.handleCreateClick=(()=>{this.setState({createModal:!0})}),this.handleClose=(()=>{this.mounted&&this.setState({createModal:!1})}),this.handleSubmit=(e=>this.props.onCreate(e))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return s.createElement(s.Fragment,null,s.createElement("header",{className:"page-header",id:"groups-header"},s.createElement("h1",{className:"page-title"},Object(l.l)("user_groups.page")),s.createElement(o.a,{loading:this.props.loading}),s.createElement("div",{className:"page-actions"},s.createElement(i.a,{id:"groups-create",onClick:this.handleCreateClick},Object(l.l)("groups.create_group"))),s.createElement("p",{className:"page-description"},Object(l.l)("user_groups.page.description"))),this.state.createModal&&s.createElement(c,{confirmButtonText:Object(l.l)("create"),header:Object(l.l)("groups.create_group"),onClose:this.handleClose,onSubmit:this.handleSubmit}))}}var h=n(370),u=n.n(h);function m({group:e,onClose:t,onSubmit:n}){const a=Object(l.l)("groups.delete_group");return s.createElement(r.a,{header:a,onClose:t,onSubmit:n},({onCloseClick:t,onFormSubmit:n,submitting:r})=>s.createElement("form",{onSubmit:n},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,a)),s.createElement("div",{className:"modal-body"},Object(l.m)("groups.delete_group.confirmation",e.name)),s.createElement("footer",{className:"modal-foot"},s.createElement(o.a,{className:"spacer-right",loading:r}),s.createElement(i.h,{className:"button-red",disabled:r},Object(l.l)("delete")),s.createElement(i.g,{disabled:r,onClick:t},Object(l.l)("cancel")))))}var p=n(409),g=n.n(p),b=n(577),f=n.n(b),E=n(368),C=n(582),v=n(647);class S extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,users:[],selectedUsers:[]},this.handleSearch=((e,t)=>Object(v.d)({name:this.props.group.name,organization:this.props.organization,ps:100,q:""!==e?e:void 0,selected:t}).then(e=>{this.mounted&&this.setState({loading:!1,users:e.users,selectedUsers:e.users.filter(e=>e.selected).map(e=>e.login)})},()=>{this.mounted&&this.setState({loading:!1})})),this.handleSelect=(e=>Object(v.a)({name:this.props.group.name,login:e,organization:this.props.organization}).then(()=>{this.mounted&&this.setState(t=>({selectedUsers:[...t.selectedUsers,e]}))})),this.handleUnselect=(e=>Object(v.e)({name:this.props.group.name,login:e,organization:this.props.organization}).then(()=>{this.mounted&&this.setState(t=>({selectedUsers:g()(t.selectedUsers,e)}))})),this.renderElement=(e=>{const t=f()(this.state.users,{login:e});return s.createElement("div",{className:"select-list-list-item"},void 0===t?e:s.createElement(s.Fragment,null,t.name,s.createElement("br",null),s.createElement("span",{className:"note"},t.login)))})}componentDidMount(){this.mounted=!0,this.handleSearch("",C.a.Selected)}componentWillUnmount(){this.mounted=!1}render(){const e=Object(l.l)("users.update");return s.createElement(E.a,{contentLabel:e,onRequestClose:this.props.onClose},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,e)),s.createElement("div",{className:"modal-body"},s.createElement(o.a,{loading:this.state.loading},s.createElement(C.b,{elements:this.state.users.map(e=>e.login),onSearch:this.handleSearch,onSelect:this.handleSelect,onUnselect:this.handleUnselect,renderElement:this.renderElement,selectedElements:this.state.selectedUsers}))),s.createElement("footer",{className:"modal-foot"},s.createElement(i.g,{onClick:this.props.onClose},Object(l.l)("Done"))))}}var O=n(648);class N extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleMembersClick=(()=>{this.setState({modal:!0})}),this.handleModalClose=(()=>{this.mounted&&(this.setState({modal:!1}),this.props.onEdit())})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return s.createElement(s.Fragment,null,s.createElement(i.b,{className:"button-small",onClick:this.handleMembersClick},s.createElement(O.a,null)),this.state.modal&&s.createElement(S,{group:this.props.group,onClose:this.handleModalClose,organization:this.props.organization}))}}var y=n(412),k=n(4);class j extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteForm:!1,editForm:!1},this.handleDeleteClick=(()=>{this.setState({deleteForm:!0})}),this.handleEditClick=(()=>{this.setState({editForm:!0})}),this.closeDeleteForm=(()=>{this.mounted&&this.setState({deleteForm:!1})}),this.closeEditForm=(()=>{this.mounted&&this.setState({editForm:!1})}),this.handleDeleteFormSubmit=(()=>this.props.onDelete(this.props.group.name)),this.handleEditFormSubmit=(({name:e,description:t})=>{const n=this.props.group;return this.props.onEdit(Object.assign({description:t,id:n.id},Object(k.omitNil)({name:e!==n.name?e:void 0})))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.group;return s.createElement("tr",{"data-id":e.id},s.createElement("td",{className:" width-20"},s.createElement("strong",{className:"js-group-name"},e.name),e.default&&s.createElement("span",{className:"little-spacer-left"},"(",Object(l.l)("default"),")")),s.createElement("td",{className:"width-10"},s.createElement("div",{className:"display-flex-center"},s.createElement("span",{className:"spacer-right"},e.membersCount),!e.default&&s.createElement(N,{group:e,onEdit:this.props.onEditMembers,organization:this.props.organization}))),s.createElement("td",{className:"width-40"},s.createElement("span",{className:"js-group-description"},e.description)),s.createElement("td",{className:"thin nowrap text-right"},!e.default&&s.createElement(y.c,null,s.createElement(y.b,{className:"js-group-update",onClick:this.handleEditClick},Object(l.l)("update_details")),s.createElement(y.a,null),s.createElement(y.b,{className:"js-group-delete",destructive:!0,onClick:this.handleDeleteClick},Object(l.l)("delete")))),this.state.deleteForm&&s.createElement(m,{group:e,onClose:this.closeDeleteForm,onSubmit:this.handleDeleteFormSubmit}),this.state.editForm&&s.createElement(c,{confirmButtonText:Object(l.l)("update_verb"),group:e,header:Object(l.l)("groups.update_group"),onClose:this.closeEditForm,onSubmit:this.handleEditFormSubmit}))}}function x(e){return s.createElement("div",{className:"boxed-group boxed-group-inner"},s.createElement("table",{className:"data zebra zebra-hover",id:"groups-list"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null),s.createElement("th",{className:"nowrap"},Object(l.l)("members")),s.createElement("th",{className:"nowrap"},Object(l.l)("description")),s.createElement("th",null))),s.createElement("tbody",null,e.showAnyone&&s.createElement("tr",{className:"js-anyone",key:"anyone"},s.createElement("td",{className:"width-20"},s.createElement("strong",{className:"js-group-name"},Object(l.l)("groups.anyone"))),s.createElement("td",{className:"width-10"}),s.createElement("td",{className:"width-40",colSpan:2},s.createElement("span",{className:"js-group-description"},Object(l.l)("user_groups.anyone.description")))),u()(e.groups,e=>e.name.toLowerCase()).map(t=>s.createElement(j,{group:t,key:t.id,onDelete:e.onDelete,onEdit:e.onEdit,onEditMembers:e.onEditMembers,organization:e.organization})))))}var z=n(579),q=n(376),w=n(396),F=n(405);t.default=Object(z.a)(class extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,query:""},this.makeFetchGroupsRequest=(e=>(this.setState({loading:!0}),Object(v.f)(Object.assign({organization:this.organization,q:this.state.query},e)))),this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.fetchGroups=(e=>{this.makeFetchGroupsRequest(e).then(({groups:e,paging:t})=>{this.mounted&&this.setState({groups:e,loading:!1,paging:t})},this.stopLoading)}),this.fetchMoreGroups=(()=>{const e=this.state.paging;e&&e.total>e.pageIndex*e.pageSize&&this.makeFetchGroupsRequest({p:e.pageIndex+1}).then(({groups:e,paging:t})=>{this.mounted&&this.setState(({groups:n=[]})=>({groups:[...n,...e],loading:!1,paging:t}))},this.stopLoading)}),this.search=(e=>{this.fetchGroups({q:e}),this.setState({query:e})}),this.refresh=(()=>{this.fetchGroups({q:this.state.query})}),this.handleCreate=(e=>Object(v.b)(Object.assign({},e,{organization:this.organization})).then(e=>{this.mounted&&this.setState(({groups:t=[]})=>({groups:[...t,e]}))})),this.handleDelete=(e=>Object(v.c)({name:e,organization:this.organization}).then(()=>{this.mounted&&this.setState(({groups:t=[]})=>({groups:t.filter(t=>t.name!==e)}))})),this.handleEdit=(e=>Object(v.g)(e).then(()=>{this.mounted&&this.setState(({groups:t=[]})=>({groups:t.map(t=>t.id===e.id?Object.assign({},t,e):t)}))}))}componentDidMount(){this.mounted=!0,this.fetchGroups()}componentWillUnmount(){this.mounted=!1}get organization(){return this.props.organization&&this.props.organization.key}render(){const e=this.state,t=e.groups,n=e.loading,o=e.paging,r=e.query,i=void 0===this.props.organization&&"anyone".includes(r.toLowerCase());return s.createElement(s.Fragment,null,s.createElement(q.a,{suggestions:"user_groups"}),s.createElement(a.Helmet,{title:Object(l.l)("user_groups.page")}),s.createElement("div",{className:"page page-limited",id:"groups-page"},s.createElement(d,{loading:n,onCreate:this.handleCreate}),s.createElement(F.a,{className:"big-spacer-bottom",id:"groups-search",minLength:2,onChange:this.search,placeholder:Object(l.l)("search.search_by_name"),value:r}),void 0!==t&&s.createElement(x,{groups:t,onDelete:this.handleDelete,onEdit:this.handleEdit,onEditMembers:this.refresh,organization:this.organization,showAnyone:i}),void 0!==t&&void 0!==o&&s.createElement("div",{id:"groups-list-footer"},s.createElement(w.a,{count:i?t.length+1:t.length,loadMore:this.fetchMoreGroups,ready:!n,total:i?o.total+1:o.total}))))}})},368:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(354),a=n(400),o=n(355);function r(e){return s.createElement(a,Object.assign({className:o("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:o("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}a.setAppElement("#content")},376:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var s=n(354),a=n(403);function o({suggestions:e}){return s.createElement(a.a.Consumer,null,({addSuggestions:t,removeSuggestions:n})=>s.createElement(r,{addSuggestions:t,removeSuggestions:n,suggestions:e}))}class r extends s.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},379:function(e,t,n){var s=n(390),a=1/0,o=1.7976931348623157e308;e.exports=function(e){return e?(e=s(e))===a||e===-a?(e<0?-1:1)*o:e==e?e:0:0===e?e:0}},382:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(354),a=n(368),o=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(n[s[a]]=e[s[a]])}return n};class r extends s.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=(()=>{this.mounted&&this.setState({submitting:!1})}),this.handleCloseClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()}),this.handleFormSubmit=(e=>{e.preventDefault(),this.submit()}),this.handleSubmitClick=(e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()}),this.submit=(()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.children,n=e.header,r=e.onClose,i=(e.onSubmit,o(e,["children","header","onClose","onSubmit"]));return s.createElement(a.a,Object.assign({contentLabel:n,onRequestClose:r},i),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},385:function(e,t,n){"use strict";function s(e,t){return`${t}(${e.displayName||e.name||"Component"})`}n.d(t,"a",function(){return s})},386:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(354),a=n(355),o=n(366);class r extends s.PureComponent{constructor(){super(...arguments),this.handleClick=(e=>{e.preventDefault(),e.currentTarget.blur(),this.props.disabled||this.props.onCheck(!this.props.checked,this.props.id)})}render(){const e=this.props,t=e.children,n=e.disabled,r=e.loading,i=e.right,l=a("icon-checkbox",{"icon-checkbox-checked":this.props.checked,"icon-checkbox-single":this.props.thirdState,"icon-checkbox-disabled":n});return t?s.createElement("a",{className:a("link-checkbox",this.props.className,{note:n,disabled:n}),href:"#",id:this.props.id,onClick:this.handleClick},i&&t,s.createElement(o.a,{loading:Boolean(r)},s.createElement("i",{className:l})),!i&&t):r?s.createElement(o.a,null):s.createElement("a",{className:a(l,this.props.className),href:"#",id:this.props.id,onClick:this.handleClick})}}r.defaultProps={thirdState:!1}},396:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var s=n(354),a=n(355),o=n(366),r=n(0),i=n(365),l=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(n[s[a]]=e[s[a]])}return n};function c(e){var t=e.ready,n=void 0===t||t,c=l(e,["ready"]);const d=c.total&&c.total>c.count,h=s.createElement("a",{className:"spacer-left",href:"#",onClick:e=>{e.preventDefault(),e.currentTarget.blur(),c.loadMore&&c.loadMore()}},Object(r.l)("show_more")),u=a("spacer-top note text-center",{"new-loading":!n},c.className);return s.createElement("footer",{className:u},Object(r.m)("x_of_y_shown",Object(i.formatMeasure)(c.count,"INT",null),Object(i.formatMeasure)(c.total,"INT",null)),null!=c.loadMore&&d?h:null,c.loading&&s.createElement(o.a,{className:"vertical-bottom spacer-left position-absolute"}))}},412:function(e,t,n){"use strict";var s=n(354),a=n(355),o=n(360),r=n(377),i=n(381),l=n(359);function c({className:e,fill:t="currentColor",size:n=14}){return s.createElement(l.a,{className:e,size:n,viewBox:"0 0 14 14"},s.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},s.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:t}})))}var d=n(356);function h(e){return s.createElement(r.b,{className:e.className,onOpen:e.onOpen,overlay:s.createElement("ul",{className:"menu"},e.children)},s.createElement(d.a,{className:a("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},s.createElement(c,{size:e.small?12:14}),s.createElement(i.a,{className:"little-spacer-left"})))}n.d(t,"c",function(){return h}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});class u extends s.PureComponent{constructor(){super(...arguments),this.handleClick=(e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onClick&&this.props.onClick()})}render(){const e=a(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?s.createElement("li",null,s.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?s.createElement("li",null,s.createElement(o.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):s.createElement("li",null,s.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))}}function m(){return s.createElement("li",{className:"divider"})}},433:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(354),a=n(355),o=n(363);class r extends s.PureComponent{constructor(){super(...arguments),this.handleChange=(e=>{const t=e.currentTarget.value;this.props.onCheck(t)}),this.renderOption=(e=>{const t=e.value===this.props.value,n=this.props.name+"__"+e.value;return s.createElement("li",{key:e.value},s.createElement("input",{checked:t,disabled:e.disabled,id:n,name:this.props.name,onChange:this.handleChange,type:"radio",value:e.value}),s.createElement(o.a,{overlay:e.tooltip||void 0},s.createElement("label",{htmlFor:n},e.label)))})}render(){return s.createElement("ul",{className:a("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))}}r.defaultProps={disabled:!1,value:null}},438:function(e,t,n){var s=n(379);e.exports=function(e){var t=s(e),n=t%1;return t==t?n?t-n:t:0}},478:function(e,t){e.exports=function(e,t,n,s){for(var a=e.length,o=n+(s?1:-1);s?o--:++o<a;)if(t(e[o],o,e))return o;return-1}},543:function(e,t,n){var s=n(14),a=n(548),o=n(16);e.exports=function(e){return function(t,n,r){var i=Object(t);if(!a(t)){var l=s(n,3);t=o(t),n=function(e){return l(i[e],e,i)}}var c=e(t,n,r);return c>-1?i[l?t[c]:c]:void 0}}},555:function(e,t,n){var s=n(556);"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(358)(s,a);s.locals&&(e.exports=s.locals)},556:function(e,t,n){(e.exports=n(357)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.select-list {\n}\n\n.select-list-container {\n  min-width: 500px;\n  box-sizing: border-box;\n}\n\n.select-list-control {\n  margin-bottom: 10px;\n  box-sizing: border-box;\n}\n\n.select-list-list-container {\n  border: 1px solid #bfbfbf;\n  box-sizing: border-box;\n  height: 400px;\n  overflow: auto;\n}\n\n.select-list-list-checkbox {\n  display: flex !important;\n  align-items: center;\n}\n\n.select-list-list-checkbox i {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n\n.select-list-list-disabled {\n  cursor: not-allowed;\n}\n\n.select-list-list-disabled > a {\n  pointer-events: none;\n}\n\n.select-list-list-item {\n  display: inline-block;\n  vertical-align: middle;\n}\n",""])},577:function(e,t,n){var s=n(543)(n(578));e.exports=s},578:function(e,t,n){var s=n(478),a=n(14),o=n(438),r=Math.max;e.exports=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var l=null==n?0:o(n);return l<0&&(l=r(i+l,0)),s(e,a(t,3),l)}},579:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var s=n(354),a=n(364),o=n(360),r=n(367),i=n(385),l=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(n[s[a]]=e[s[a]])}return n};function c(e){class t extends s.Component{render(){const t=this.props,n=t.customOrganizations,a=t.router,o=l(t,["customOrganizations","router"]);return!o.params.organizationKey&&n?(a.replace("/not_found"),null):s.createElement(e,Object.assign({},o))}}t.displayName=Object(i.a)(e,"forSingleOrganization");return Object(a.connect)(e=>({customOrganizations:Object(r.areThereCustomOrganizations)(e)}))(Object(o.withRouter)(t))}},582:function(e,t,n){"use strict";var s=n(354),a=n(355),o=n(386);class r extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.handleCheck=(e=>{this.setState({loading:!0}),(e?this.props.onSelect:this.props.onUnselect)(this.props.element).then(this.stopLoading,this.stopLoading)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return s.createElement("li",{className:a({"select-list-list-disabled":this.props.disabled})},s.createElement(o.a,{checked:this.props.selected,className:a("select-list-list-checkbox",{active:this.props.active}),disabled:this.props.disabled,loading:this.state.loading,onCheck:this.handleCheck},s.createElement("span",{className:"little-spacer-left"},this.props.renderElement(this.props.element))))}}var i=n(366),l=n(0);class c extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.isDisabled=(e=>this.props.readOnly||this.props.disabledElements.includes(e)),this.isSelected=(e=>this.props.selectedElements.includes(e)),this.handleBulkChange=(e=>{this.setState({loading:!0}),e?Promise.all(this.props.elements.map(e=>this.props.onSelect(e))).then(this.stopLoading).catch(this.stopLoading):Promise.all(this.props.selectedElements.map(e=>this.props.onUnselect(e))).then(this.stopLoading).catch(this.stopLoading)})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}renderBulkSelector(){const e=this.props,t=e.elements,n=e.readOnly,a=e.selectedElements;return s.createElement(s.Fragment,null,s.createElement("li",null,s.createElement(o.a,{checked:a.length>0,disabled:this.state.loading||n,onCheck:this.handleBulkChange,thirdState:a.length>0&&t.length!==a.length},s.createElement("span",{className:"big-spacer-left"},Object(l.l)("bulk_change"),s.createElement(i.a,{className:"spacer-left",loading:this.state.loading,timeout:10})))),s.createElement("li",{className:"divider"}))}render(){const e=this.props,t=e.allowBulkSelection,n=e.elements,o=e.filter,i=n.filter(e=>{if(o===d.All)return!0;const t=this.isSelected(e);return o===d.Selected?t:!t});return s.createElement("div",{className:a("select-list-list-container spacer-top")},s.createElement("ul",{className:"menu"},t&&n.length>0&&o===d.All&&this.renderBulkSelector(),i.map(e=>s.createElement(r,{disabled:this.isDisabled(e),element:e,key:e,onSelect:this.props.onSelect,onUnselect:this.props.onUnselect,renderElement:this.props.renderElement,selected:this.isSelected(e)}))))}}var d,h=n(405),u=n(433);n(555);n.d(t,"a",function(){return d}),n.d(t,"b",function(){return m}),function(e){e.All="all",e.Selected="selected",e.Unselected="deselected"}(d||(d={}));class m extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={filter:d.Selected,loading:!1,query:""},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.changeFilter=(e=>{this.setState({filter:e,loading:!0}),this.props.onSearch(this.state.query,e).then(this.stopLoading,this.stopLoading)}),this.handleQueryChange=(e=>{this.setState({loading:!0,query:e}),this.props.onSearch(e,this.getFilter()).then(this.stopLoading,this.stopLoading)}),this.getFilter=(()=>""===this.state.query?this.state.filter:d.All)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.labelSelected,n=void 0===t?Object(l.l)("selected"):t,a=e.labelUnselected,o=void 0===a?Object(l.l)("unselected"):a,r=e.labelAll,i=void 0===r?Object(l.l)("all"):r,m=this.state.filter,p=""!==this.state.query;return s.createElement("div",{className:"select-list"},s.createElement("div",{className:"display-flex-center"},s.createElement(u.a,{className:"spacer-right",name:"filter",onCheck:this.changeFilter,options:[{disabled:p,label:n,value:d.Selected},{disabled:p,label:o,value:d.Unselected},{disabled:p,label:i,value:d.All}],value:m}),s.createElement(h.a,{autoFocus:!0,loading:this.state.loading,onChange:this.handleQueryChange,placeholder:Object(l.l)("search_verb"),value:this.state.query})),s.createElement(c,{allowBulkSelection:this.props.allowBulkSelection,disabledElements:this.props.disabledElements||[],elements:this.props.elements,filter:this.getFilter(),onSelect:this.props.onSelect,onUnselect:this.props.onUnselect,readOnly:this.props.readOnly,renderElement:this.props.renderElement,selectedElements:this.props.selectedElements}))}}},647:function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return d}),n.d(t,"c",function(){return h});var s=n(4),a=n(372);function o(e){return Object(s.getJSON)("/api/user_groups/search",e).catch(a.a)}function r(e){return Object(s.getJSON)("/api/user_groups/users",e).catch(a.a)}function i(e){return Object(s.post)("/api/user_groups/add_user",e).catch(a.a)}function l(e){return Object(s.post)("/api/user_groups/remove_user",e).catch(a.a)}function c(e){return Object(s.postJSON)("/api/user_groups/create",e).then(e=>e.group,a.a)}function d(e){return Object(s.post)("/api/user_groups/update",e).catch(a.a)}function h(e){return Object(s.post)("/api/user_groups/delete",e).catch(a.a)}},648:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var s=n(354),a=n(359);function o({className:e,fill:t="currentColor",size:n}){return s.createElement(a.a,{className:e,size:n},s.createElement("path",{d:"M2.968 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM2.968 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177z",style:{fill:t}}))}}}]);
//# sourceMappingURL=13.m.bd993836.chunk.js.map
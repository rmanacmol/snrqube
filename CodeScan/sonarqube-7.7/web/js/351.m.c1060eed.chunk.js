(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{1611:function(n,t,e){"use strict";e.r(t),e.d(t,"OrganizationAccess",function(){return a}),e.d(t,"hasAdminAccess",function(){return p}),e.d(t,"OrganizationAdminAccess",function(){return h});var s=e(354),o=e(364),c=e(367),i=e(565),r=e(380);class a extends s.PureComponent{constructor(){super(...arguments),this.checkPermissions=(()=>{this.props.hasAccess(this.props)||Object(i.a)()})}componentDidMount(){this.checkPermissions()}componentDidUpdate(){this.checkPermissions()}render(){return this.props.hasAccess(this.props)?s.cloneElement(this.props.children,{location:this.props.location,organization:this.props.organization}):null}}const u=Object(o.connect)((n,t)=>({currentUser:Object(c.getCurrentUser)(n),organization:Object(c.getOrganizationByKey)(n,t.params.organizationKey)}))(a);function p({currentUser:n,organization:t}){return Boolean(Object(r.b)(n)&&t&&t.actions&&t.actions.admin)}function h(n){return s.createElement(u,Object.assign({hasAccess:p},n))}},565:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var s=e(421),o=e(454),c=e(533);function i(){const n=Object(s.default)(),t=Object(o.a)(),e=window.location.pathname+window.location.search+window.location.hash;n.dispatch(Object(c.c)()),t.replace({pathname:"/sessions/new",query:{return_to:e}})}}}]);
//# sourceMappingURL=351.m.c1060eed.chunk.js.map
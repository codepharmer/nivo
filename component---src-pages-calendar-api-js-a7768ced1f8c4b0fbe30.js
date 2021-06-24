(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"+ZFJ":function(e,t,n){var r=n("GI0s"),o=n("T9Ud");e.exports=function(e){return o(e)&&"[object Date]"==r(e)}},b0xd:function(e,t,n){"use strict";n.r(t);var r=n("Eo5u"),o=n("mXGw"),a=n.n(o),i=n("6zZa"),l=n("vrFN"),s=n("vrO3"),p=n("sd7G"),d=n("jdt+"),u=n("6+p3"),c=n.n(u),m=new Date(2015,3,1),h=new Date(2018,7,12),f=Object(i.d)(m,h);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{title:"Calendar HTTP API",keywords:[].concat(Object(r.a)(c.a.Calendar.tags),["HTTP API"])}),a.a.createElement(s.a,{componentName:"Calendar",chartClass:"calendar",apiPath:"/charts/calendar",flavors:c.a.flavors,dataProperty:"data",controlGroups:d.a,propsMapper:p.a,defaultProps:{width:600,height:400,from:"2015-03-01",to:"2016-07-12",align:"center",emptyColor:"#eeeeee",colors:["#61cdbb","#97e3d5","#e8c1a0","#f47560"],minValue:0,maxValue:"auto",margin:{top:40,right:40,bottom:40,left:40},direction:"horizontal",yearSpacing:40,yearLegendPosition:"before",yearLegendOffset:10,monthSpacing:0,monthBorderWidth:2,monthBorderColor:"#ffffff",monthLegendPosition:"before",monthLegendOffset:10,daySpacing:0,dayBorderWidth:2,dayBorderColor:"#ffffff",data:JSON.stringify(f,null,"  ")}}))}},"jdt+":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("5QYd"),o=n("HTM6"),a=n("RQLE"),i=[{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                day:   string, // format must be YYYY-MM-DD\n                value: number\n            }>\n            ```\n            You can also add arbitrary data to this structure\n            to be used in tooltips or event handlers.\n        ",type:"object[]",required:!0},{key:"from",group:"Base",help:"start date",type:"string | Date",required:!0},{key:"to",group:"Base",help:"end date",type:"string | Date",required:!0},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using responsive alternative of\n            the component `<Responsive*/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using responsive alternative of\n            the component `<Responsive*/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"direction",help:"defines calendar layout direction.",type:"string",required:!1,defaultValue:o.f.direction,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"align",help:"defines how calendar should be aligned inside chart container.",type:"string",required:!1,defaultValue:o.f.align,controlType:"boxAnchor",group:"Base",controlOptions:{choices:r.u.map((function(e){return{label:e,value:e}}))}},{key:"minValue",help:"Minimum value.",description:"\n            Minimum value. If 'auto', will pick the lowest value\n            in the provided data set.\n            Should be overriden if your data set does not contain\n            desired lower bound value.\n        ",required:!1,defaultValue:o.f.minValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:0,min:-300,max:300}},{key:"maxValue",help:"Maximum value.",description:"\n            Maximum value. If 'auto', will pick the highest value\n            in the provided data set.\n            Should be overriden if your data set does not contain\n            desired higher bound value.\n        ",required:!1,defaultValue:o.f.maxValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:100,min:0,max:600}},a.f,{key:"colors",group:"Style",help:"Cell colors.",description:"\n            An array of colors to be used in conjunction with\n            `domain` to compute days' color.\n            It applies to days having a value defined, otherwise,\n            `emptyColor` will be used.\n        ",type:"string[]",required:!1,defaultValue:o.f.colors},{key:"emptyColor",help:"color to use to fill days without available value.",type:"string",required:!1,defaultValue:o.f.emptyColor,controlType:"colorPicker",group:"Style"},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"yearSpacing",help:"define spacing between each year row/column depending on the direction.",type:"number",required:!1,defaultValue:o.f.yearSpacing,controlType:"range",group:"Years",controlOptions:{unit:"px",min:0,max:160,step:5}},{key:"yearLegend",group:"Years",help:"can be used to customize years label, returns 'YYYY' by default.",type:"(year: number) => string | number",required:!1},{key:"yearLegendPosition",help:"defines year legends position.",type:"'before' | 'after'",required:!1,defaultValue:o.f.yearLegendPosition,controlType:"radio",group:"Years",controlOptions:{choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"yearLegendOffset",help:"define offset from year edge to its label.",type:"number",required:!1,defaultValue:o.f.yearLegendOffset,controlType:"range",group:"Years",controlOptions:{unit:"px",min:0,max:60}},{key:"monthSpacing",help:"define spacing between each month row/column depending on the direction.",type:"number",required:!1,defaultValue:o.f.monthSpacing,controlType:"range",group:"Months",controlOptions:{unit:"px",min:0,max:160,step:5}},{key:"monthBorderWidth",flavors:["svg","api"],help:"width of month borders.",type:"number",required:!1,defaultValue:o.f.monthBorderWidth,controlType:"lineWidth",group:"Months"},{key:"monthBorderColor",flavors:["svg","api"],help:"color to use for months border.",type:"string",required:!1,defaultValue:o.f.monthBorderColor,controlType:"colorPicker",group:"Months"},{key:"monthLegend",help:"can be used to customize months label, returns abbreviated month name (english) by default. This can be used to use a different language",type:"(year: number, month: number, date: Date) => string | number",required:!1,group:"Months"},{key:"monthLegendPosition",help:"defines month legends position.",type:"'before' | 'after'",required:!1,defaultValue:o.f.monthLegendPosition,controlType:"radio",group:"Months",controlOptions:{choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"monthLegendOffset",help:"define offset from month edge to its label.",type:"number",required:!1,defaultValue:o.f.monthLegendOffset,controlType:"range",group:"Months",controlOptions:{unit:"px",min:0,max:36}},{key:"daySpacing",help:"define spacing between each day cell.",type:"number",required:!1,defaultValue:o.f.daySpacing,controlType:"range",group:"Days",controlOptions:{unit:"px",min:0,max:20}},{key:"dayBorderWidth",help:"width of days border.",type:"number",required:!1,defaultValue:o.f.dayBorderWidth,controlType:"lineWidth",group:"Days"},{key:"dayBorderColor",help:"color to use for days border.",type:"string",required:!1,defaultValue:o.f.dayBorderColor,controlType:"colorPicker",group:"Days"},{key:"isInteractive",flavors:["svg","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:o.f.isInteractive,controlType:"switch",group:"Interactivity"},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",help:"onClick handler, it receives clicked day data and mouse event.",type:"(day, event) => void",required:!1},{key:"tooltip",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component.",description:"\n            A function allowing complete tooltip customisation, it must return a valid HTML\n            element and will receive the following data:\n            ```\n            {\n                day:   string,\n                date:  {Date},\n                value: number,\n                color: string,\n                x:     number,\n                y:     number,\n                size:  number\n            }\n            ```\n            You can also customize the tooltip style\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg","canvas"],help:"Showcase custom tooltip.",type:"boolean",controlType:"switch",group:"Interactivity"}],l=Object(a.d)(i)},njO8:function(e,t,n){var r=n("+ZFJ"),o=n("TsNJ"),a=n("DhoL"),i=a&&a.isDate,l=i?o(i):r;e.exports=l},sd7G:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r),a=n("UutA"),i=n("nLLr"),l=a.d.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"po6k7k-0"})(["display:grid;background:#333;padding:10px;border-radius:4px;grid-template-columns:40px 1fr;grid-column-gap:12px;"]),s=a.d.span.withConfig({displayName:"mapper__TooltipKey",componentId:"po6k7k-1"})(["font-weight:600;"]),p=function(e){return o.a.createElement(l,{style:{color:e.color}},o.a.createElement(s,null,"day"),o.a.createElement("span",null,e.day),o.a.createElement(s,null,"value"),o.a.createElement("span",null,e.value),o.a.createElement(s,null,"x"),o.a.createElement("span",null,e.x),o.a.createElement(s,null,"y"),o.a.createElement("span",null,e.y),o.a.createElement(s,null,"size"),o.a.createElement("span",null,e.size))};t.a=Object(i.c)({tooltip:function(e,t){if(t["custom tooltip example"])return p}},{exclude:["custom tooltip example"]})},vrO3:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var r=n("Z+yb"),o=n("hsa5"),a=n("mXGw"),i=n.n(a),l=n("UutA"),s=n("7oih"),p=n("UmRm"),d=n("QbkB"),u=n("1h20"),c=n("yHyT"),m=n("SBeK"),h=n("MF9i"),f=l.d.a.withConfig({displayName:"ApiPreview__Link",componentId:"sc-1tjndi9-0"})(["position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),g=l.d.img.withConfig({displayName:"ApiPreview__Image",componentId:"sc-1tjndi9-1"})(["max-width:100%;max-height:100%;"]),y=l.d.div.withConfig({displayName:"ApiPreview__EmptyContainer",componentId:"sc-1tjndi9-2"})(["font-size:14px;line-height:1.6em;color:",";display:flex;align-items:center;justify-content:center;width:100%;height:100%;"],(function(e){return e.theme.colors.textLight})),b=function(e){var t=e.responseStatus,n=e.chartUrl;return 201===t&&n?i.a.createElement(f,{href:n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(g,{src:n,alt:"api result"})):i.a.createElement(y,null,"Click the generate button in order to generate the chart.",i.a.createElement("br",null),"You can customize settings by using dedicated controls.")},v=n("TurY"),x=n("DA+T");function w(){var e=Object(r.a)(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "]);return w=function(){return e},e}function k(){var e=Object(r.a)(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 60%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.55);\n        }\n    "]);return k=function(){return e},e}var C=["preview","body","data"],E=function(e){var t=e.chartClass,n=e.data,r=e.body,o=e.isLoading,l=e.responseStatus,s=e.chartUrl,p=Object(v.b)(),d=Object(a.useState)("preview"),u=d[0],c=d[1],m=Object(a.useState)(null),h=m[0],f=m[1];return i.a.createElement(T,{className:"chart-tabs--"+u},i.a.createElement(S,null,C.map((function(e){var n=e===u,r="preview"===e?t:"data",o=n||h===e?"colored":"neutral";return i.a.createElement(O,{key:e,className:"no-select",isCurrent:n,onClick:function(){return c(e)},onMouseEnter:function(){return f(e)},onMouseLeave:function(){return f(null)}},i.a.createElement(P,{className:"sprite-icons-"+r+"-"+p.id+"-"+o}),e)}))),i.a.createElement(I,null,"preview"===u&&i.a.createElement(b,{isLoading:o,responseStatus:l,chartUrl:s}),"body"===u&&i.a.createElement(x.a,null,JSON.stringify(r,null,"  ")),"data"===u&&i.a.createElement(x.a,null,n),i.a.createElement(L,{isLoading:o})))},T=l.d.div.withConfig({displayName:"ApiTabs__Wrapper",componentId:"wcngb8-0"})(["position:fixed;top:","px;right:0;width:60%;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.6);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.55);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border}),p.a.tablet(k(),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.headerHeight})),p.a.mobile(w(),(function(e){return e.theme.colors.border}))),S=l.d.nav.withConfig({displayName:"ApiTabs__Nav",componentId:"wcngb8-1"})(["height:46px;background:",";display:flex;font-size:15px;color:#aaa;position:relative;"],(function(e){return e.theme.colors.background})),O=l.d.span.withConfig({displayName:"ApiTabs__NavItem",componentId:"wcngb8-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(e){var t=e.isCurrent,n=e.theme;return t?n.colors.cardBackground:"transparent"}),(function(e){return e.theme.colors.text})),P=l.d.span.withConfig({displayName:"ApiTabs__Icon",componentId:"wcngb8-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),I=l.d.div.withConfig({displayName:"ApiTabs__Content",componentId:"wcngb8-4"})(["position:absolute;top:46px;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;"]),_=l.d.div.withConfig({displayName:"ApiTabs__LoaderContainer",componentId:"wcngb8-5"})(["position:absolute;top:50%;left:50%;width:100px;height:80px;margin-top:-40px;margin-left:-50px;background:",";display:grid;grid-template-columns:10px 10px 10px 10px 10px;grid-column-gap:6px;padding:10px 13px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.15);pointer-events:none;opacity:",";transform:translate3d(0,",",0);transition:transform 200ms,opacity 200ms;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.isLoading?1:0}),(function(e){return e.isLoading?0:"20px"})),j=Object(l.e)(["0%,100%{transform:scale3d(1,0,1);}50%{transform:scale3d(1,1,1);}"]),A=l.d.span.withConfig({displayName:"ApiTabs__LoaderBar",componentId:"wcngb8-6"})(["display:block;background:",";width:100%;height:100%;transform:scale3d(1,0,1);transform-origin:100% 100%;animation-name:",";animation-duration:800ms;animation-iteration-count:infinite;animation-delay:","ms;"],(function(e){return e.theme.colors.accent}),j,(function(e){return 60*(e.index+1)})),L=function(e){var t=e.isLoading;return i.a.createElement(_,{isLoading:t},i.a.createElement("span",null,i.a.createElement(A,{index:0})),i.a.createElement("span",null,i.a.createElement(A,{index:1})),i.a.createElement("span",null,i.a.createElement(A,{index:2})),i.a.createElement("span",null,i.a.createElement(A,{index:3})),i.a.createElement("span",null,i.a.createElement(A,{index:4})))},N=l.d.span.withConfig({displayName:"ApiSubmit__Button",componentId:"y9yvg5-0"})(["display:block;background-color:",";color:#fff;text-align:center;padding:12px 24px;border-radius:2px;cursor:pointer;text-decoration:none;"],(function(e){return e.theme.colors.accent})),q=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.onClick;return i.a.createElement(N,{onClick:n},t?"sending":"generate")},t}(a.Component);q.defaultProps={};var B=q,V=l.d.div.withConfig({displayName:"ApiResponse__Container",componentId:"usxrxs-0"})(["background:",";border-top:1px solid ",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border})),H=l.d.div.withConfig({displayName:"ApiResponse__Header",componentId:"usxrxs-1"})(["padding:12px 20px;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),M=l.d.pre.withConfig({displayName:"ApiResponse__ResponseJson",componentId:"usxrxs-2"})(["padding:12px 20px;font-size:13px;line-height:1.6em;overflow:hidden;width:100%;margin:0;"]),W=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.responseStatus,n=e.response,r="no response available";return n&&(r=JSON.stringify(n,null,"  ")),i.a.createElement(V,null,i.a.createElement(H,null,"Response ",t?i.a.createElement("strong",null,t):"n/a"),i.a.createElement(M,null,r))},t}(a.Component);W.defaultProps={};var z=W,D=n("S6qR");function Y(){var e=Object(r.a)(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "]);return Y=function(){return e},e}function R(){var e=Object(r.a)(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.45);\n            width: 60%;\n        }\n    "]);return R=function(){return e},e}var U=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleSettingsUpdate=function(e){n.setState({props:e})},n.handleDataUpdate=function(e){var t,r=n.props.dataProperty,o=n.state.props;n.setState({props:Object.assign({},o,(t={},t[r]=e.target.value,t))})},n.handleSubmit=function(){var e=n.props,t=e.apiPath,r=e.propsMapper,o=n.state.props;n.setState({loading:!0}),fetch(""+D.a.nivoApiUrl+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r(o))}).then((function(e){return n.setState({loading:!1,responseStatus:e.status}),e.json()})).then((function(e){n.setState({response:e})})).catch((function(e){console.error(e)}))},n.state={props:t.defaultProps,loading:!1,responseStatus:null,response:null},n}return Object(o.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.componentName,r=t.chartClass,o=t.apiPath,a=t.controlGroups,l=t.dataProperty,p=t.propsMapper,f=t.flavors,g=this.state,y=g.props,b=g.loading,v=g.responseStatus,x=g.response,w=f.map((function(e){return e.flavor}));return i.a.createElement(s.a,null,i.a.createElement(d.a,null,i.a.createElement(u.a,{chartClass:n+" HTTP API",tags:["POST "+o]}),f&&i.a.createElement(c.a,{flavors:f,current:"api"}),i.a.createElement(m.a,{description:(e=n,"\nThe `"+e+"`component is available in the nivo\nHTTP rendering API.\nThe API generates a SVG and return a path to this SVG\nwhich can then be easily embedded.\n\nThe api accepts almost the same properties as the regular component,\nin json, however it's not interactive and you cannot use code\nin properties (functions).\n\nPlease note that the demo API server is installed on heroku\nusing a free plan, so it might be unavailable from times to times.\n")}),i.a.createElement(E,{chartClass:r,data:y[l],body:p(y),isLoading:b,responseStatus:v,chartUrl:x?x.url:null}),i.a.createElement(F,null,i.a.createElement(G,null,i.a.createElement(B,{loading:b,onClick:this.handleSubmit})),i.a.createElement(z,{responseStatus:v,response:x})),i.a.createElement(h.a,{component:n,settings:y,flavors:w,currentFlavor:"api",groups:a,onChange:this.handleSettingsUpdate})))},t}(a.Component);U.defaultProps={dataProperty:"data",propsMapper:function(e){return e}};var F=l.d.div.withConfig({displayName:"ApiClient__ControlPanel",componentId:"sc-50le0s-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);--partialWidth:calc(var(--innerWidth) * 0.6);width:var(--partialWidth);background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.45);z-index:10;overflow:hidden;display:grid;grid-template-rows:1fr 2fr;"," ",""],(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.colors.cardAltBackground}),(function(e){return e.theme.dimensions.headerHeight}),p.a.tablet(R(),(function(e){return e.theme.dimensions.headerHeight})),p.a.mobile(Y())),G=l.d.div.withConfig({displayName:"ApiClient__SubmitWrapper",componentId:"sc-50le0s-1"})(["display:flex;align-items:center;justify-content:center;padding:12px 0;"])}}]);
//# sourceMappingURL=component---src-pages-calendar-api-js-a7768ced1f8c4b0fbe30.js.map
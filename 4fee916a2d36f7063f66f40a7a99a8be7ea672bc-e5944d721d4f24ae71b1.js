(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{FFEP:function(t,e,o){"use strict";o.d(e,"a",(function(){return j})),o.d(e,"b",(function(){return k})),o.d(e,"c",(function(){return p})),o.d(e,"d",(function(){return x})),o.d(e,"e",(function(){return O}));o("UKgA");var i=o("mXGw"),n=o("5QYd"),r=o("oYCi"),a=o("W0B4"),l=o.n(a);function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){c(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var o=[],i=!0,n=!1,r=void 0;try{for(var a,l=t[Symbol.iterator]();!(i=(a=l.next()).done)&&(o.push(a.value),!e||o.length!==e);i=!0);}catch(c){n=!0,r=c}finally{try{i||null==l.return||l.return()}finally{if(n)throw r}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m={top:0,right:0,bottom:0,left:0},f=function(t){var e,o=t.direction,i=t.itemsSpacing,n=t.padding,r=t.itemCount,a=t.itemWidth,l=t.itemHeight;if("number"!=typeof n&&("object"!=typeof(e=n)||Array.isArray(e)||null===e))throw new Error("Invalid property padding, must be one of: number, object");var c="number"==typeof n?{top:n,right:n,bottom:n,left:n}:s(s({},m),n),d=c.left+c.right,u=c.top+c.bottom,b=a+d,f=l+u,h=(r-1)*i;return"row"===o?b=a*r+h+d:"column"===o&&(f=l*r+h+u),{width:b,height:f,padding:c}},h=function(t){var e=t.anchor,o=t.translateX,i=t.translateY,n=t.containerWidth,r=t.containerHeight,a=t.width,l=t.height,c=o,d=i;switch(e){case"top":c+=(n-a)/2;break;case"top-right":c+=n-a;break;case"right":c+=n-a,d+=(r-l)/2;break;case"bottom-right":c+=n-a,d+=r-l;break;case"bottom":c+=(n-a)/2,d+=r-l;break;case"bottom-left":d+=r-l;break;case"left":d+=(r-l)/2;break;case"center":c+=(n-a)/2,d+=(r-l)/2}return{x:c,y:d}},y=function(t){var e,o,i,n,r,a,l=t.direction,c=t.justify,d=t.symbolSize,s=t.symbolSpacing,u=t.width,b=t.height;switch(l){case"left-to-right":e=0,o=(b-d)/2,n=b/2,a="central",!0===c?(i=u,r="end"):(i=d+s,r="start");break;case"right-to-left":e=u-d,o=(b-d)/2,n=b/2,a="central",!0===c?(i=0,r="start"):(i=u-d-s,r="end");break;case"top-to-bottom":e=(u-d)/2,o=0,i=u/2,r="middle",!0===c?(n=b,a="alphabetic"):(n=d+s,a="text-before-edge");break;case"bottom-to-top":e=(u-d)/2,o=b-d,i=u/2,r="middle",!0===c?(n=0,a="text-before-edge"):(n=b-d-s,a="alphabetic")}return{symbolX:e,symbolY:o,labelX:i,labelY:n,labelAnchor:r,labelAlignment:a}},g={circle:function(t){var e=t.x,o=t.y,i=t.size,n=t.fill,a=t.opacity,l=void 0===a?1:a,c=t.borderWidth,d=void 0===c?0:c,s=t.borderColor,u=void 0===s?"transparent":s;return Object(r.jsx)("circle",{r:i/2,cx:e+i/2,cy:o+i/2,fill:n,opacity:l,strokeWidth:d,stroke:u,style:{pointerEvents:"none"}})},diamond:function(t){var e=t.x,o=t.y,i=t.size,n=t.fill,a=t.opacity,l=void 0===a?1:a,c=t.borderWidth,d=void 0===c?0:c,s=t.borderColor,u=void 0===s?"transparent":s;return Object(r.jsx)("g",{transform:"translate(".concat(e,",").concat(o,")"),children:Object(r.jsx)("path",{d:"\n                    M".concat(i/2," 0\n                    L").concat(.8*i," ").concat(i/2,"\n                    L").concat(i/2," ").concat(i,"\n                    L").concat(.2*i," ").concat(i/2,"\n                    L").concat(i/2," 0\n                "),fill:n,opacity:l,strokeWidth:d,stroke:u,style:{pointerEvents:"none"}})})},square:function(t){var e=t.x,o=t.y,i=t.size,n=t.fill,a=t.opacity,l=void 0===a?1:a,c=t.borderWidth,d=void 0===c?0:c,s=t.borderColor,u=void 0===s?"transparent":s;return Object(r.jsx)("rect",{x:e,y:o,fill:n,opacity:l,strokeWidth:d,stroke:u,width:i,height:i,style:{pointerEvents:"none"}})},triangle:function(t){var e=t.x,o=t.y,i=t.size,n=t.fill,a=t.opacity,l=void 0===a?1:a,c=t.borderWidth,d=void 0===c?0:c,s=t.borderColor,u=void 0===s?"transparent":s;return Object(r.jsx)("g",{transform:"translate(".concat(e,",").concat(o,")"),children:Object(r.jsx)("path",{d:"\n                M".concat(i/2," 0\n                L").concat(i," ").concat(i,"\n                L0 ").concat(i,"\n                L").concat(i/2," 0\n            "),fill:n,opacity:l,strokeWidth:d,stroke:u,style:{pointerEvents:"none"}})})}},p=function(t){var e,o,a,l,c,d,u,m,f,h,p,v=t.x,j=t.y,S=t.width,x=t.height,O=t.data,k=t.direction,w=void 0===k?"left-to-right":k,C=t.justify,W=void 0!==C&&C,B=t.textColor,E=t.background,z=void 0===E?"transparent":E,M=t.opacity,A=void 0===M?1:M,H=t.symbolShape,L=void 0===H?"square":H,Y=t.symbolSize,X=void 0===Y?16:Y,T=t.symbolSpacing,P=void 0===T?8:T,q=t.symbolBorderWidth,D=void 0===q?0:q,R=t.symbolBorderColor,F=void 0===R?"transparent":R,I=t.onClick,J=t.onMouseEnter,U=t.onMouseLeave,G=t.toggleSerie,K=t.effects,Q=b(Object(i.useState)({}),2),$=Q[0],N=Q[1],V=Object(n.sb)(),Z=Object(i.useCallback)((function(t){if(K){var e=K.filter((function(t){return"hover"===t.on})).reduce((function(t,e){return s(s({},t),e.style)}),{});N(e)}null==J||J(O,t)}),[J,O,K]),_=Object(i.useCallback)((function(t){if(K){var e=K.filter((function(t){return"hover"!==t.on})).reduce((function(t,e){return s(s({},t),e.style)}),{});N(e)}null==U||U(O,t)}),[U,O,K]),tt=y({direction:w,justify:W,symbolSize:null!==(e=$.symbolSize)&&void 0!==e?e:X,symbolSpacing:P,width:S,height:x}),et=tt.symbolX,ot=tt.symbolY,it=tt.labelX,nt=tt.labelY,rt=tt.labelAnchor,at=tt.labelAlignment,lt=[I,J,U,G].some((function(t){return void 0!==t})),ct="function"==typeof L?L:g[L];return Object(r.jsxs)("g",{transform:"translate(".concat(v,",").concat(j,")"),style:{opacity:null!==(o=$.itemOpacity)&&void 0!==o?o:A},children:[Object(r.jsx)("rect",{width:S,height:x,fill:null!==(a=$.itemBackground)&&void 0!==a?a:z,style:{cursor:lt?"pointer":"auto"},onClick:function(t){null==I||I(O,t),null==G||G(O.id)},onMouseEnter:Z,onMouseLeave:_}),Object(i.createElement)(ct,s({id:O.id,x:et,y:ot,size:null!==(l=$.symbolSize)&&void 0!==l?l:X,fill:null!==(c=null!==(d=O.fill)&&void 0!==d?d:O.color)&&void 0!==c?c:"black",borderWidth:null!==(u=$.symbolBorderWidth)&&void 0!==u?u:D,borderColor:null!==(m=$.symbolBorderColor)&&void 0!==m?m:F},O.hidden?V.legends.hidden.symbol:void 0)),Object(r.jsx)("text",{textAnchor:rt,style:s(s({},V.legends.text),{},{fill:null!==(f=null!==(h=null!==(p=$.itemTextColor)&&void 0!==p?p:B)&&void 0!==h?h:V.legends.text.fill)&&void 0!==f?f:"black",dominantBaseline:at,pointerEvents:"none",userSelect:"none"},O.hidden?V.legends.hidden.text:void 0),x:it,y:nt,children:O.label})]})},v=function(t){var e=t.data,o=t.x,i=t.y,n=t.direction,a=t.padding,l=void 0===a?0:a,c=t.justify,d=t.effects,s=t.itemWidth,u=t.itemHeight,b=t.itemDirection,m=void 0===b?"left-to-right":b,h=t.itemsSpacing,y=void 0===h?0:h,g=t.itemTextColor,v=t.itemBackground,j=void 0===v?"transparent":v,S=t.itemOpacity,x=void 0===S?1:S,O=t.symbolShape,k=t.symbolSize,w=t.symbolSpacing,C=t.symbolBorderWidth,W=t.symbolBorderColor,B=t.onClick,E=t.onMouseEnter,z=t.onMouseLeave,M=t.toggleSerie,A=f({itemCount:e.length,itemWidth:s,itemHeight:u,itemsSpacing:y,direction:n,padding:l}).padding,H="row"===n?s+y:0,L="column"===n?u+y:0;return Object(r.jsx)("g",{transform:"translate(".concat(o,",").concat(i,")"),children:e.map((function(t,e){return Object(r.jsx)(p,{data:t,x:e*H+A.left,y:e*L+A.top,width:s,height:u,direction:m,justify:c,effects:d,textColor:g,background:j,opacity:x,symbolShape:O,symbolSize:k,symbolSpacing:w,symbolBorderWidth:C,symbolBorderColor:W,onClick:B,onMouseEnter:E,onMouseLeave:z,toggleSerie:M},e)}))})},j=function(t){var e=t.data,o=t.containerWidth,i=t.containerHeight,n=t.translateX,a=void 0===n?0:n,l=t.translateY,c=void 0===l?0:l,d=t.anchor,s=t.direction,u=t.padding,b=void 0===u?0:u,m=t.justify,y=t.itemsSpacing,g=void 0===y?0:y,p=t.itemWidth,j=t.itemHeight,S=t.itemDirection,x=t.itemTextColor,O=t.itemBackground,k=t.itemOpacity,w=t.symbolShape,C=t.symbolSize,W=t.symbolSpacing,B=t.symbolBorderWidth,E=t.symbolBorderColor,z=t.onClick,M=t.onMouseEnter,A=t.onMouseLeave,H=t.toggleSerie,L=t.effects,Y=f({itemCount:e.length,itemsSpacing:g,itemWidth:p,itemHeight:j,direction:s,padding:b}),X=Y.width,T=Y.height,P=h({anchor:d,translateX:a,translateY:c,containerWidth:o,containerHeight:i,width:X,height:T}),q=P.x,D=P.y;return Object(r.jsx)(v,{data:e,x:q,y:D,direction:s,padding:b,justify:m,effects:L,itemsSpacing:g,itemWidth:p,itemHeight:j,itemDirection:S,itemTextColor:x,itemBackground:O,itemOpacity:k,symbolShape:w,symbolSize:C,symbolSpacing:W,symbolBorderWidth:B,symbolBorderColor:E,onClick:z,onMouseEnter:M,onMouseLeave:A,toggleSerie:"boolean"==typeof H?void 0:H})},S={start:"left",middle:"center",end:"right"},x=function(t,e){var o=e.data,i=e.containerWidth,n=e.containerHeight,r=e.translateX,a=void 0===r?0:r,l=e.translateY,c=void 0===l?0:l,d=e.anchor,s=e.direction,u=e.padding,b=void 0===u?0:u,m=e.justify,g=void 0!==m&&m,p=e.itemsSpacing,v=void 0===p?0:p,j=e.itemWidth,x=e.itemHeight,O=e.itemDirection,k=void 0===O?"left-to-right":O,w=e.itemTextColor,C=e.symbolSize,W=void 0===C?16:C,B=e.symbolSpacing,E=void 0===B?8:B,z=e.theme,M=f({itemCount:o.length,itemWidth:j,itemHeight:x,itemsSpacing:v,direction:s,padding:b}),A=M.width,H=M.height,L=M.padding,Y=h({anchor:d,translateX:a,translateY:c,containerWidth:i,containerHeight:n,width:A,height:H}),X=Y.x,T=Y.y,P="row"===s?j+v:0,q="column"===s?x+v:0;t.save(),t.translate(X,T),t.font="".concat(z.legends.text.fontSize,"px ").concat(z.legends.text.fontFamily||"sans-serif"),o.forEach((function(e,o){var i,n,r=o*P+L.left,a=o*q+L.top,l=y({direction:k,justify:g,symbolSize:W,symbolSpacing:E,width:j,height:x}),c=l.symbolX,d=l.symbolY,s=l.labelX,u=l.labelY,b=l.labelAnchor,m=l.labelAlignment;t.fillStyle=null!==(i=e.color)&&void 0!==i?i:"black",t.fillRect(r+c,a+d,W,W),t.textAlign=S[b],"central"===m&&(t.textBaseline="middle"),t.fillStyle=null!==(n=null!=w?w:z.legends.text.fill)&&void 0!==n?n:"black",t.fillText(String(e.label),r+s,a+u)})),t.restore()},O=function(t){var e=t.scale,o=t.domain,n=t.reverse,r=void 0!==n&&n,a=t.valueFormat,l=void 0===a?function(t){return t}:a,c=t.separator,d=void 0===c?" - ":c;return Object(i.useMemo)((function(){var t=(null!=o?o:e.range()).map((function(t,o){var i=b(e.invertExtent(t),2),n=i[0],r=i[1];return{id:t,index:o,extent:[n,r],label:"".concat(l(n)).concat(d).concat(l(r)),value:e(n),color:t}}));return!0===r&&t.reverse(),t}),[o,e,r])},k={data:l.a.arrayOf(l.a.object),anchor:l.a.oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:l.a.number,translateY:l.a.number,direction:l.a.oneOf(["row","column"]).isRequired,itemsSpacing:l.a.number,itemWidth:l.a.number.isRequired,itemHeight:l.a.number.isRequired,itemDirection:l.a.oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:l.a.string,itemBackground:l.a.string,itemOpacity:l.a.number,symbolShape:l.a.oneOfType([l.a.oneOf(["circle","diamond","square","triangle"]),l.a.func]),symbolSize:l.a.number,symbolSpacing:l.a.number,symbolBorderWidth:l.a.number,symbolBorderColor:l.a.string,onClick:l.a.func,onMouseEnter:l.a.func,onMouseLeave:l.a.func,effects:l.a.arrayOf(l.a.shape({on:l.a.oneOfType([l.a.oneOf(["hover"])]).isRequired,style:l.a.shape({itemTextColor:l.a.string,itemBackground:l.a.string,itemOpacity:l.a.number,symbolSize:l.a.number,symbolBorderWidth:l.a.number,symbolBorderColor:l.a.string}).isRequired}))}}}]);
//# sourceMappingURL=4fee916a2d36f7063f66f40a7a99a8be7ea672bc-e5944d721d4f24ae71b1.js.map
(this["webpackJsonpcitizen-poet"]=this["webpackJsonpcitizen-poet"]||[]).push([[0],{29:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s(1),c=s.n(r),A=s(19),n=s.n(A),i=s(9),l=(s(29),s(17)),o=s(23),b=s(7),j=s(2),m=s(20),d=s(21),p=new(function(){function e(t){Object(m.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(d.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getAllArray",value:function(){return fetch(this._baseUrl,{headers:this._headers}).then(this._handleResponse)}},{key:"getPoems",value:function(e){return fetch("".concat(this._baseUrl,"?q=").concat(e),{headers:this._headers}).then(this._handleResponse)}},{key:"getPoemStrings",value:function(e){return fetch("".concat(this._baseUrl,"/?q=").concat(e,"&onlyLines=1"),{headers:this._headers}).then(this._handleResponse)}}]),e}())({baseUrl:"https://buymebuyme.xyz",headers:{"Content-Type":"application/json"}});function u(e){return Math.floor(Math.random()*e)}function f(e){if(e.exist){var t=e.arrayStrs[u(e.arrLength)].replace(/<|>/g,"'"),s=new RegExp("".concat(e.tag),"i"),a=t.replace(s,'<span class="form-strokes__span">'.concat(e.tag,"</span>")),r=t.replace(s,"".concat(e.tag.toUpperCase()));return{id:e.id,strForRender:a,strUpperCaseTag:r,tag:e.tag,exist:!0}}var c=e.arrayStrs[u(e.arrLength)].replace("tagReplace","".concat(e.tag));return{id:e.id,strForRender:c,tag:e.tag,exist:!1}}var h=/^([\u0430-\u044f\u0410-\u042f]+\s{1}){0,5}[\u0430-\u044f\u0410-\u042f]*$/,_=['\u0421\u0447\u0430\u0441\u0442\u044c\u0435 \u043d\u0430\u0439\u0442\u0438 \u043d\u0435 \u0442\u0430\u043a \u043f\u0440\u043e\u0441\u0442\u043e...<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>','\u0418\u0441\u043a\u0430\u043b \u0442\u0435\u0431\u044f \u2014 \u0438 \u0437\u043d\u0430\u043b, \u0447\u0442\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0443...<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>','\u0422\u0449\u0435\u0442\u043e\u044e \u0441\u0435\u0440\u0434\u0446\u0435 \u043e\u0431\u0434\u0430\u0451\u0442...<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>','\u041d\u0438\u043a\u0442\u043e \u0435\u0449\u0435 \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u043b \u0432\u043e\u043f\u0440\u043e\u0441\u0430...<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>','\u041c\u043d\u043e\u0439 \u0435\u0449\u0451 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0434\u043e\u0440\u043e\u0433\u0430...<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>','\u0418 \u0432 \u043d\u0435\u0434\u0440\u0430\u0445 \u043c\u0443\u0437\u044b\u043a\u0438 \u044f \u043d\u0435 \u043d\u0430\u0448\u043b\u0430 \u043e\u0442\u0432\u0435\u0442\u0430...<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>','\u041d\u0435\u0443\u0436\u0442\u043e \u0446\u0435\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u043b\u0430 \u0441\u0442\u0440\u0435\u043b\u0430?<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>','\u041a\u0442\u043e \u043d\u0435 \u043d\u0430\u0448\u0435\u043b \u043d\u0435\u0431\u0435\u0441 \u0432\u043d\u0438\u0437\u0443- \u0442\u043e\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u0442 \u0438 \u0432\u044b\u0448\u0435...<br> <span class="form-strokes__span_type_note">[<i>\u0441\u043b\u043e\u0432\u043e "tagReplace" \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u0438\u0449\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435</i>]</span>'];var O=function(){return Object(a.jsx)("header",{className:"header page__header",children:Object(a.jsx)(i.b,{to:"/",className:"link logo logo_place_header",children:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d \u043f\u043e\u044d\u0442"})})};var v=function(e){var t=e.children;return Object(a.jsx)("main",{className:"content",children:t})};var x=function(){var e=Object(r.useState)(2020),t=Object(b.a)(e,2),s=t[0],c=t[1],A=(new Date).getFullYear();return A>2020&&c("2020-".concat(A)),Object(a.jsx)("footer",{className:"footer page__footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",s,". Group 39"]})})};var y=function(){return Object(a.jsx)("button",{className:"application__btn-back",type:"button","aria-label":"\u041d\u0430\u0437\u0430\u0434",onClick:function(){return alert("\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435.\n \u0414\u043b\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 \u0445\u0435\u0434\u0435\u0440\u0435")}})};var N=function(e){var t=e.type,s=e.name,r=e.element,c=e.onClick;return Object(a.jsx)("button",{type:t,className:"btn ".concat(r),onClick:c,children:s})};var z=function(e){var t=e.history;return Object(a.jsxs)("section",{className:"application page__application",children:[Object(a.jsxs)("div",{className:"application__top",children:[Object(a.jsx)(y,{}),Object(a.jsx)("p",{className:"application__counter",children:"1/3"})]}),Object(a.jsxs)("form",{name:"surveyForm",className:"form-survey",onSubmit:function(e){e.preventDefault(),t.push("/user-input")},children:[Object(a.jsxs)("fieldset",{className:"fieldset form-survey__fieldset",children:[Object(a.jsx)("h2",{className:"title application__title",children:"\u041a\u0430\u043a\u043e\u0433\u043e \u0440\u043e\u0434\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430?"}),Object(a.jsxs)("div",{className:"form-survey__list",children:[Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"problem",type:"radio",value:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u0430\u044f",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u0430\u044f"})]}),Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"problem",type:"radio",value:"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f"})]}),Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"problem",type:"radio",value:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f"})]}),Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"problem",type:"radio",value:"\u0423\u0440\u0431\u0430\u043d\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u0423\u0440\u0431\u0430\u043d\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f"})]}),Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"problem",type:"radio",value:"\u041f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f"})]})]})]}),Object(a.jsxs)("fieldset",{className:"fieldset form-survey__fieldset",children:[Object(a.jsx)("h3",{className:"title title_size_medium",children:"\u0427\u0442\u043e \u043d\u0435 \u0442\u0430\u043a?"}),Object(a.jsxs)("div",{className:"form-survey__list",children:[Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"subject",type:"radio",value:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})]}),Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"subject",type:"radio",value:"\u0412\u043e\u0434\u043e\u043f\u0440\u043e\u0432\u043e\u0434",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u0412\u043e\u0434\u043e\u043f\u0440\u043e\u0432\u043e\u0434"})]}),Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"subject",type:"radio",value:"\u0421\u043e\u0441\u0435\u0434\u0438",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u0421\u043e\u0441\u0435\u0434\u0438"})]}),Object(a.jsxs)("label",{className:"form-survey__item",children:[Object(a.jsx)("input",{name:"subject",type:"radio",value:"\u041f\u043b\u0430\u0442\u0435\u0436\u0438",className:"form-survey__radio"}),Object(a.jsx)("span",{className:"form-survey__custom",children:"\u041f\u043b\u0430\u0442\u0435\u0436\u0438"})]})]})]}),Object(a.jsx)(N,{type:"submit",name:"\u0414\u0430\u043b\u0435\u0435",element:"application__control"})]})]})};var X=function(e){var t=e.onChange,s=e.value,r=e.onSearchSubmit;return Object(a.jsxs)("form",{name:"userWordsForm",className:"form-findwords",onSubmit:function(e){e.preventDefault(),r()},children:[Object(a.jsx)("input",{name:"input",type:"text",className:"form-findwords__input",value:s,onChange:t}),Object(a.jsx)(N,{type:"submit",name:"\u041d\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u043e\u043a\u0438",element:"form-findwords__btn"})]})};var g=function(e){var t=e.type,s=e.element,r=e.onClick,c=e.disabled;return Object(a.jsx)("button",{type:t,className:"btn btn_type_square ".concat(s),onClick:r,disabled:c})};var R=function(e){var t=e.children,s=e.onRefresh,r=e.onAdd,c=e.id,A=e.exist,n=e.strUpperCaseTag;return Object(a.jsxs)("li",{className:"form-strokes__item",children:[t,Object(a.jsx)(g,{type:"button",element:"form-strokes__btn-refresh",onClick:function(){s(c)}}),Object(a.jsx)(g,{type:"button",element:"form-strokes__btn-push",onClick:function(){r(c,!0,n)},disabled:!A})]})};var S=function(e){var t=e.onClick;return Object(a.jsx)("button",{type:"button",className:"assembly__btn-close",onClick:t})};var w=function(e){var t=e.children,s=e.isSelected,r=e.onDelete,c=e.id;return Object(a.jsxs)("li",{className:"assembly__item ".concat(!s&&"assembly__item_hidden"),children:[t,Object(a.jsx)(S,{onClick:function(){r(c,!1)}})]})};var Z=function(e){var t=e.onChange,s=e.value,r=e.onSearchSubmit,c=e.history,A=e.currentArr,n=e.onRefresh,i=e.onAddDelete,l=e.isSelected;function o(e){return{__html:e}}function b(e,t){return Object(a.jsx)("p",{dangerouslySetInnerHTML:o(e),className:t?"form-strokes__input":"assembly__text"})}return Object(a.jsxs)("section",{className:"application page__application",children:[Object(a.jsxs)("div",{className:"application__top",children:[Object(a.jsx)(y,{}),Object(a.jsx)("p",{className:"application__counter",children:"2/3"})]}),Object(a.jsx)("h2",{className:"title application__title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"}),Object(a.jsx)("p",{className:"application__subtitle",children:"\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 6 \u0441\u043b\u043e\u0432"}),Object(a.jsx)(X,{onChange:t,value:s,onSearchSubmit:r}),Object(a.jsxs)("div",{className:"form-strokes form-strokes__columns",children:[Object(a.jsx)("ul",{className:"form-strokes__list",children:A[0]&&A.map((function(e){return Object(a.jsx)(R,{onRefresh:n,onAdd:i,id:e.id,exist:e.exist,strUpperCaseTag:e.strUpperCaseTag,children:b(e.strForRender,!0)},e.id)}))}),Object(a.jsx)("div",{className:"assembly form-strokes__assembly",children:Object(a.jsx)("ul",{className:"assembly__list",children:A[0]&&A.map((function(e){return Object(a.jsx)(w,{isSelected:l[e.id],onDelete:i,id:e.id,children:b(e.strForRender,!1)},e.id)}))})})]}),Object(a.jsx)(N,{type:"button",name:"\u0414\u0430\u043b\u0435\u0435",element:"application__control",onClick:function(){return c.push("/user-submit")}})]})};var V=function(e){var t=e.history;return Object(a.jsxs)("form",{name:"bioForm",className:"form-bio",onSubmit:function(e){e.preventDefault(),t.push("/")},children:[Object(a.jsxs)("div",{className:"form-bio__data",children:[Object(a.jsx)("h2",{className:"title",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"}),Object(a.jsxs)("fieldset",{className:"fieldset form-bio__fieldset",children:[Object(a.jsx)("h3",{className:"title title_size_medium form-bio__title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0430\u0442\u0430"}),Object(a.jsx)("textarea",{className:"form-bio__recipient"})]}),Object(a.jsxs)("fieldset",{className:"fieldset form-bio__fieldset",children:[Object(a.jsx)("h3",{className:"title title_size_medium form-bio__title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(a.jsx)("label",{htmlFor:"fio",className:"form-bio__label",children:"\u0424\u0418\u041e*"}),Object(a.jsx)("input",{type:"text",name:"fioInput",id:"fio",placeholder:"\u041c\u0430\u044f\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",className:"form-bio__input"}),Object(a.jsx)("label",{htmlFor:"address",className:"form-bio__label",children:"\u0410\u0434\u0440\u0435\u0441*"}),Object(a.jsx)("input",{type:"text",name:"addressInput",id:"address",placeholder:"\u0423\u043b\u0438\u0446\u0430, \u0434\u043e\u043c, \u0433\u043e\u0440\u043e\u0434, \u043e\u0431\u043b\u0430\u0441\u0442\u044c",className:"form-bio__input"}),Object(a.jsx)("label",{htmlFor:"tel-number",className:"form-bio__label",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d*"}),Object(a.jsx)("input",{type:"tel",name:"fiotelNumberInput",id:"tel-number",placeholder:"+7 XXX XXX-XX-XX",className:"form-bio__input"}),Object(a.jsx)("label",{htmlFor:"date",className:"form-bio__label",children:"\u0414\u0430\u0442\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"}),Object(a.jsx)("input",{type:"date",name:"dateInput",id:"date",placeholder:"\u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413",className:"form-bio__input"})]}),Object(a.jsx)("p",{className:"form-bio__info",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0432 \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435"})]}),Object(a.jsxs)("div",{className:"form-bio__preview",children:[Object(a.jsxs)("div",{className:"preview",children:[Object(a.jsxs)("div",{className:"preview__top",children:[Object(a.jsx)("p",{className:"preview__recipient",children:"\u0412\u043e\u043b\u043a\u043e\u0432\u0443 \u0415\u0432\u0433\u0435\u043d\u0438\u044e \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0438\u0447\u0443, \u0433\u0440\u0430\u0434\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0443 \u0433. \u041c\u043e\u0441\u043a\u0432\u0430"}),Object(a.jsx)("p",{className:"preview__sender",children:"\u043e\u0442 \u041c\u0430\u044f\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0430 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447\u0430"}),Object(a.jsx)("p",{className:"preview__adress",children:"\u0410\u0434\u0440\u0435\u0441:"}),Object(a.jsx)("p",{className:"preview__tel",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"})]}),Object(a.jsxs)("div",{className:"preview__body",children:[Object(a.jsx)("p",{className:"preview__title",children:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"}),Object(a.jsxs)("div",{className:"preview__main-text",children:[Object(a.jsx)("p",{className:"preview__stroke",children:"\u0411\u043b\u0430\u0436\u0435\u043d, \u043a\u0442\u043e \u043f\u043e\u0434 \u043a\u0440\u044b\u043b\u043e\u043c \u0441\u0432\u043e\u0438\u0445 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0445 \u043b\u0430\u0440"}),Object(a.jsx)("p",{className:"preview__stroke",children:"\u0443 \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u0430, \u043d\u0430 \u0441\u043a\u0430\u043c\u0435\u0439\u043a\u0435"}),Object(a.jsx)("p",{className:"preview__stroke",children:"\u041b\u044e\u0434\u043c\u0438\u043b\u0430 \u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u0432\u0437\u043e\u0440 \u0432\u043e\u0437\u0432\u043e\u0434\u0438\u0442,"})]})]}),Object(a.jsxs)("div",{className:"preview__footer",children:[Object(a.jsx)("p",{className:"preview__date",children:"16.12.2020 \u0433."}),Object(a.jsx)("p",{className:"preview__signature",children:"/ \u0412.\u0412. \u041c\u0430\u044f\u043a\u043e\u0432\u0441\u043a\u0438\u0439"})]})]}),Object(a.jsx)(N,{type:"submit",name:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",element:"application__control"})]})]})};var k=function(e){var t=e.history;return Object(a.jsxs)("section",{className:"application page__application",children:[Object(a.jsxs)("div",{className:"application__top",children:[Object(a.jsx)(y,{}),Object(a.jsx)("p",{className:"application__counter",children:"3/3"})]}),Object(a.jsx)(V,{history:t})]})},H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADwBAMAAAA9cK8sAAAAG1BMVEXMzMwAAAB/f39mZmZMTEwzMzOysrIZGRmZmZnw+XadAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACY0lEQVR4nO3WvW/aQBjH8YtJLh5rXhpGkKp0DQ0KK63SZgWVtB1dEckdGwHtCo3S+s/uPWf7sIEkKHalDt/PAJfjEfe7NxOlAAAAAAAAAAAAAAAAAAAAAAAAAAD4v3n9yYV588+NN6ZxJ43Ow4XCP5NX/cp1lHBzMunfmu+rta4N09GT99HDhSJ6Ia+9ueso4X5pBq8rdZiN+f6JQjGWALWGWZVm6QDW2z0CZIUy9EwCfJXZd5eVBFgt1dEwbU+eKJTXXxLgSppHOzbrGQ46ewYwhcbMkwANaXovqwpwnB2n2brbs9Pzf2wEOBxJAN8OreuVBDAruyuAXtgPh4VCs++hBLCrUCgvoWfmdtq/PJV2fXr5Lkz7I7MEfrNYKJOWwWvfbc+jO7Y3M42D8cfkVrda51eNtF+WIL8Adr7mtEiA9NpUEqBmdjn6kNxqPQ/NImeDRqPCAkihGqh8gEdv7b5WnbTRDZN3d7b1orAAUui3CwGuKxhfz7PW9kmMmpuF0VkaoLozELmHiXusuHmtWpuFsua5QzhXpSWXzdp6HvvNdbqk0KvHcXzXjsP0GlbwHIg+uebWCqyGuXi2sBYkRrptE7ZLj58bYesMyBVwS5ArtLO3i59uRBl/cj8nyW/Nel5yBdy4uUIboBfmIz9b/p67sdJZJ58V/sgFOJb+z2HZAN0v5lDFoXp9ofTAbLI3C9V0kXxt+p/XsFDoAuifHXVf/giM7ZEaqultEMjO60EQnOxa16zQBVA3QdAMSwdwdPw7aXyL9/1WHVc3PAAAAAAAAAAAAAAAAAAAAAAAAAAA/9Jf3pViuDHHdDkAAAAASUVORK5CYII=",L="data:image/png;base64,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";var U=function(e){var t=e.modifier,s=e.size;return Object(a.jsxs)("article",{className:"card ".concat(t),children:[Object(a.jsx)("img",{className:"card__image",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",src:s}),Object(a.jsx)("div",{className:"card__body"})]})};var P=function(e){var t=e.history;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"hero page__hero",children:[Object(a.jsx)("h1",{className:"title hero__title",children:"\u0421\u0430\u0439\u0442 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u0438\u0445 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432"}),Object(a.jsx)(N,{type:"button",name:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0443",element:"hero__button",onClick:function(){return t.push("/tags-selection")}})]}),Object(a.jsxs)("section",{className:"how-it-works page__how-it-works",children:[Object(a.jsx)("h2",{className:"title how-it-works__title",children:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"}),Object(a.jsx)("div",{className:"how-it-works__content"})]}),Object(a.jsxs)("section",{className:"actual page__actual",children:[Object(a.jsx)("h2",{className:"title actual__title",children:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u044b"}),Object(a.jsxs)("ul",{className:"actual__cards",children:[Object(a.jsx)(U,{modifier:"card_size_m",size:L}),Object(a.jsx)(U,{modifier:"card_size_m",size:L}),Object(a.jsx)(U,{modifier:"card_size_m",size:L}),Object(a.jsx)(U,{modifier:"card_size_s",size:H}),Object(a.jsx)(U,{modifier:"card_size_s",size:H})]}),Object(a.jsx)(N,{type:"button",element:"actual__btn",name:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0435\u0449\u0451",onClick:function(){return alert("\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430\u043c\u0438")}})]}),Object(a.jsxs)("section",{className:"done page__done",children:[Object(a.jsx)("h2",{className:"title done__title",children:"\u0423\u0436\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u044b"}),Object(a.jsxs)("ul",{className:"done__cards",children:[Object(a.jsx)(U,{modifier:"card_size_xl",size:"data:image/png;base64,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"}),Object(a.jsx)(U,{modifier:"card_size_l",size:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFiBAMAAABMva3/AAAAG1BMVEXMzMwAAACysrJ/f39MTEwZGRlmZmYzMzOZmZm1uGWgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEBElEQVR4nO3YvXPbNhjHcZjU2xjUopWRce3EY3V2fR6lJG47ij6p19Fq/LJGzVtHqW5y/rNDPCBBiKLjIYbvcvf9DBIMEdZP0EMQlFIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxgdpu70/vGRfceEUB8qnXytzRffBIj+eP/TA9++dbAo0zrP1PTiuy49+6l1r+BwirV0cnriw/63LRXycyYmPYL/f5iMUjvHjjX099+z3ZMs6dl3Kx67WmwvKt35vHXvnkcnrvuKPsnfxif3TmuJ5MfZyPzuFN7TYfLe1DEW6q1vF35AJ3kznHRUp72TbJ63vYgXN7CcJQ/zKt6Xb2Vp/H5PeNi87k62+ud46PgeZ+ZfF7exdJ2P7lnXDRQG3njfutx8o6XLkZRCK3t5sMdyVuL92zyCHlHys/bKSpSvm7JlRYNd0jRbw6oxVssw+eVUliUoVyCcp5Vu1gpOrVTS0qh+9Na1079Azy8nuRauL/bZYKseI6TVJ7ntRVuZRbr7lqV56dq8LzDsyLcgY21VSZwU26P6CTp2jj7MdpPVPSf65ulofP2Lu2FbPY8v8R+NK2tSfGSK2mbrDa9X8xVxRTLpdaDc9tnTtGgeT/Mim2A0tnHw4vsL1UsF2t5ZYLXprc7y4p9x1YyeHN8mthDzUoeOm/yh837UpkNxdLP65ZkM8Fr05vn1VPJuNVPVblpkDM0cD1ER5JU2RocThrz5hNcr17181iS9qQ7lnNW1org59uet1EwBdhQD3me+uJgdkST6g/5bLIwhl9/xyPX7A3MJarsX1bHDOvTm2v1q7bZc5jBj5G37S2h2lsfqktIPnUNed0CrewiuC9fQfi8/jtkXnwvTqehHta+ADPI7pPC5/W3WHnGbvmGXl3Pz+KGCfb2dHneOLkyrvtXV5uHPiQ/r662CbYc7RF52OHmBHt583roaOeb937fzfsGzQpa5vT2k6YYGibYq4f8JI12xd727h333A+lXW2xZA+ZpbVuu/ZuTnBxoCH3KCJ8/a7eumb7afXecxfBnmsbE+wVjJJ7QBEwr33/qHovNTbR21IIPZ0WneWlzU1wZJ/2q2StKnrAvJ+W5vGzqYFYdhF7kiySXySGrnzL/Xpc9nTlJ5Ge3M8fmf/h3/wHzDtPXp3cXEq6WE9Pbq61bBHV5+RN3u1O8o37oY6eHt4e299Lhsmr22P/x5WAeaPrfO1JZLuj9vLtr35XvHDpups9X+QHTyVjdJo3/R+vgp5vvZuTtGhGNydL13/gtRvdHrqbioPD2wfPBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAo/sKR7SKKmI1NxwAAAAASUVORK5CYII="})]}),Object(a.jsx)(N,{type:"button",element:"done__btn",name:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0435\u0449\u0451",onClick:function(){return alert("\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441 \u043f\u0440\u0438\u043d\u044f\u0442\u044b\u043c\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430\u043c\u0438")}})]})]})};var E=function(){var e=Object(j.f)(),t=Object(r.useState)(""),s=Object(b.a)(t,2),c=s[0],A=s[1],n=Object(r.useState)(""),i=Object(b.a)(n,2),m=i[0],d=i[1],u=Object(r.useState)({}),y=Object(b.a)(u,2),N=y[0],X=y[1],g=Object(r.useState)(!1),R=Object(b.a)(g,2),S=R[0],w=R[1],V=Object(r.useState)({}),H=Object(b.a)(V,2),L=H[0],U=H[1];Object(r.useEffect)((function(){if(S){var e=[];for(var t in N)if("tagsArr"!==t){var s=f(N[t]);e.push(s)}U(e),w(!1)}}),[N,S]);var E=Object(r.useState)({}),W=Object(b.a)(E,2),C=W[0],T=W[1],F=Object(r.useState)({}),K=Object(b.a)(F,2),M=K[0],q=K[1];return console.log(M),Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(O,{}),Object(a.jsx)(v,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(P,{history:e})}),Object(a.jsx)(j.a,{path:"/tags-selection",children:Object(a.jsx)(z,{history:e})}),Object(a.jsx)(j.a,{path:"/user-input",children:Object(a.jsx)(Z,{onChange:function(e){h.test(e.target.value)?A(e.target.value):alert("\u0414\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f:\n-\u0432\u0432\u043e\u0434 \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u044b;\n-\u0441\u043b\u043e\u0432\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u043c;\n-\u043d\u0435 \u0431\u043e\u043b\u0435\u0435 6 \u0441\u043b\u043e\u0432.")},onRefresh:function(e){var t=Object(o.a)(L),s=f(N[e]);t.splice(e,1,s),U(t)},onAddDelete:function(e,t,s){var a=Object(l.a)({},C),r=Object(l.a)({},M);a[e]=!!t,t?r[e]=s:delete r[e],q(r),T(a)},isSelected:C,value:c,onSearchSubmit:function(){if(m!==c.replace(/\s?$/,"")){var e=c.replace(/\s?$/,""),t=e.split(" ");d(e);var s=t.map((function(e){return p.getPoemStrings(e).then((function(e){return e.map((function(e){return e.fields.text[0]}))})).catch((function(e){return alert(e)}))}));Promise.all(s).then((function(e){var s=e.reduce((function(e,s,a){return s[0]?(e[a]={id:a,exist:!0,tag:t[a],arrayStrs:s,arrLength:s.length},e):(e[a]={id:a,exist:!1,tag:t[a],arrayStrs:_,arrLength:_.length},e)}),{tagsArr:t});X(s),w(!0)})).catch((function(e){return alert(e)}))}},history:e,currentArr:L})}),Object(a.jsx)(j.a,{path:"/user-submit",children:Object(a.jsx)(k,{history:e})})]})}),Object(a.jsx)(x,{})]})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,A=t.getTTFB;s(e),a(e),r(e),c(e),A(e)}))};n.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(E,{})})}),document.getElementById("root")),W()}},[[35,1,2]]]);
//# sourceMappingURL=main.13579fd4.chunk.js.map
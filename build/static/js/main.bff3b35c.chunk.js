(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),s=n(6),r=n.n(s),i=(n(15),n(9)),u=n(2),p=n.p+"static/media/logo.a307e1c4.svg";var l=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"logo",src:p,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e"})})};var d=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9\xa02020 Mesto Russia"})})},j=c.a.createContext();var m=function(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,s=e.onDeleteCard,r=c.a.useContext(j),i=t.owner._id===r._id,u="photo-grid__delete-btn ".concat(i?"photo-grid__delete-btn_visible":"photo-grid__delete-btn_hidden"),p=t.likes.some((function(e){return e._id===r._id})),l="photo-grid__like-btn ".concat(p?"photo-grid__like-btn_active":"");return Object(a.jsxs)("div",{className:"photo-grid__item",children:[Object(a.jsx)("button",{type:"button",className:u,onClick:function(){s(t)}}),Object(a.jsx)("img",{className:"photo-grid__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"photo-grid__rectangle",children:[Object(a.jsx)("h2",{className:"photo-grid__title",children:t.name}),Object(a.jsxs)("div",{className:"photo-grid__like-place",children:[Object(a.jsx)("button",{type:"button",className:l,onClick:function(){o(t)}}),Object(a.jsx)("span",{className:"photo-grid__like-count",children:t.likes.length})]})]})]})};var h=function(e){var t=e.onEditAvatar,n=e.onEditProfile,o=e.onAddPlace,s=e.onCardClick,r=e.onCardList,i=e.onCardLike,u=e.onDeleteCard,p=c.a.useContext(j);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{className:"profile__avatar-container",onClick:t,children:Object(a.jsx)("img",{className:"profile__avatar-icon",src:p.avatar,alt:"\u0444\u043e\u0442\u043e \u0430\u0432\u0430\u0442\u0430\u0440\u0430"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__title",children:p.name}),Object(a.jsx)("p",{className:"profile__subtitle",children:p.about}),Object(a.jsx)("button",{type:"button",className:"profile__edit-btn",onClick:n})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-btn",onClick:o})]}),Object(a.jsx)("section",{className:"photo-grid",children:r.map((function(e){return Object(a.jsx)(m,{card:e,onCardClick:s,onCardLike:i,onDeleteCard:u},e._id)}))})]})};var _=function(e){var t=e.isOpen,n=e.onClose,o=e.title,c=e.submitButton,s=e.popupName,r=e.formName,i=e.children,u=e.onSubmit;return Object(a.jsx)("div",{className:"popup popup__".concat(s," ").concat(t&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-btn",onClick:n}),Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("h2",{className:"popup__title",children:o}),Object(a.jsxs)("form",{name:"edit",method:"POST",className:"popup__form popup__".concat(r),onSubmit:u,children:[i,Object(a.jsx)("button",{type:"submit",className:"popup__save-btn",onClick:c,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})})};var b=function(e){var t=e.isOpen,n=e.onClose,o=e.onAddCard,s=c.a.useState(""),r=Object(u.a)(s,2),i=r[0],p=r[1],l=c.a.useState(""),d=Object(u.a)(l,2),j=d[0],m=d[1];return c.a.useEffect((function(){m(""),p("")}),[t]),Object(a.jsxs)(_,{isOpen:t,onClose:n,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",popupName:"update",formName:"form_update",onSubmit:function(e){e.preventDefault(),o({name:i,link:j})},children:[Object(a.jsxs)("div",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",id:"empty-title-input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_title",required:!0,minLength:"2",maxLength:"30",onChange:function(e){p(e.target.value)},value:i||""}),Object(a.jsx)("span",{id:"empty-title-input-error"})]}),Object(a.jsxs)("div",{className:"popup__field",children:[Object(a.jsx)("input",{type:"url",id:"empty-link-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_link",required:!0,onChange:function(e){m(e.target.value)},value:j||""}),Object(a.jsx)("span",{id:"empty-link-input-error"})]})]})};var f=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,s=c.a.useContext(j),r=c.a.useState(""),i=Object(u.a)(r,2),p=i[0],l=i[1],d=c.a.useState(""),m=Object(u.a)(d,2),h=m[0],b=m[1];return c.a.useEffect((function(){l(s.name),b(s.about)}),[s]),Object(a.jsxs)(_,{isOpen:t,onClose:n,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",popupName:"edit",formName:"form_edit",onSubmit:function(e){e.preventDefault(),o({name:p,about:h})},children:[Object(a.jsxs)("div",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",id:"empty-name-input",name:"nameInput",className:"popup__input popup__input_name",required:!0,minLength:"2",maxLength:"40",value:p||"",onChange:function(e){l(e.target.value)}}),Object(a.jsx)("span",{id:"empty-name-input-error"})]}),Object(a.jsxs)("div",{className:"popup__field",children:[Object(a.jsx)("input",{type:"text",id:"empty-job-input",name:"jobInput",className:"popup__input popup__input_job",required:!0,minLength:"2",maxLength:"200",value:h||"",onChange:function(e){b(e.target.value)}}),Object(a.jsx)("span",{id:"empty-job-input-error"})]})]})};var O=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateAvatar,s=c.a.useContext(j),r=c.a.useRef(""),i=c.a.useState(""),p=Object(u.a)(i,2),l=p[0],d=p[1];return c.a.useEffect((function(){d(s.avatar)}),[s]),Object(a.jsx)(_,{isOpen:t,onClose:n,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",popupName:"avatar",formName:"form_update",onSubmit:function(e){e.preventDefault(),o({avatar:r.current.value})},children:Object(a.jsx)("input",{className:"popup__input popup__input_link-avatar popup__input_link",type:"url",name:"avatar",value:l||"",ref:r,onChange:function(e){d(e.target.value)},required:!0})})};var v=function(e){var t=e.card,n=e.isOpen,o=e.onClose;return Object(a.jsx)("div",{className:"popup popup__photo ".concat(n&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-btn",onClick:o}),Object(a.jsx)("img",{className:"popup__photo-fullscreen",src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name}),Object(a.jsx)("h2",{className:"popup__photo-title",children:null===t||void 0===t?void 0:t.name})]})})},x=n(7),C=n(8),N=new(function(){function e(t){Object(x.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(C.a)(e,[{key:"editProfileAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfoFromServer",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getAvatarFromServer",value:function(){return fetch("".concat(this._url,"users/me/avatar"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserInfoOnServer",value:function(e,t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCardsInformation",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addCards",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-18/",headers:{Authorization:"6b4f0e7a-6b81-4fab-971b-4da07f00c7c0","Content-Type":"application/json"}});var g=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],s=c.a.useState(!1),r=Object(u.a)(s,2),p=r[0],m=r[1],_=c.a.useState(!1),x=Object(u.a)(_,2),C=x[0],g=x[1],k=c.a.useState(!1),y=Object(u.a)(k,2),S=y[0],P=y[1],E=c.a.useState(null),L=Object(u.a)(E,2),A=L[0],T=L[1],U=c.a.useState([]),D=Object(u.a)(U,2),I=D[0],F=D[1],q=c.a.useState(""),J=Object(u.a)(q,2),w=J[0],B=J[1];function G(){o(!1),m(!1),g(!1),P(null)}return c.a.useEffect((function(){Promise.all([N.getUserInfoFromServer(),N.getCardsInformation()]).then((function(e){console.log(e),B(e[0]),F(e[1])})).catch((function(e){return console.error(e)}))}),[]),Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)(j.Provider,{value:w,children:[Object(a.jsx)(l,{}),Object(a.jsx)(h,{onEditAvatar:function(){o(!0)},onEditProfile:function(){m(!0)},onAddPlace:function(){g(!0)},onCardClick:function(e){P(!0),T(e)},onCardList:I,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));N.changeLikeCardStatus(e._id,!t).then((function(t){var n=I.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){return console.error(e)}))},onDeleteCard:function(e){N.deleteCard(e._id).then((function(){F(I.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.error(e)}))}}),Object(a.jsx)(d,{}),Object(a.jsx)(f,{isOpen:p,onClose:G,onUpdateUser:function(e){N.setUserInfoOnServer(e.name,e.about).then((function(e){B(e),G(),G()})).catch((function(e){return console.error(e)}))}}),Object(a.jsx)(O,{isOpen:n,onClose:G,onUpdateAvatar:function(e){N.editProfileAvatar(e.avatar).then((function(e){B(e),G()})).catch((function(e){return console.error(e)}))}}),Object(a.jsx)(b,{isOpen:C,onClose:G,onAddCard:function(e){N.addCards(e.name,e.link).then((function(e){console.log(I),F([e].concat(Object(i.a)(I))),G()})).catch((function(e){return console.error(e)}))}}),Object(a.jsx)(v,{card:A,isOpen:S,onClose:G}),Object(a.jsx)("div",{className:"popup popup__submit",children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-btn"}),Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("h2",{className:"popup__title popup__title_submit",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(a.jsx)("form",{name:"submit",className:"popup__form popup__form_update",children:Object(a.jsx)("button",{type:"submit",className:"popup__save-btn popup__save-btn_confirm",children:"\u0414\u0430"})})]})]})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.bff3b35c.chunk.js.map
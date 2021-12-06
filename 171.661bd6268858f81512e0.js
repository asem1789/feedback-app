"use strict";(self.webpackChunkfeedback=self.webpackChunkfeedback||[]).push([[171],{8171:(A,r,o)=>{o.r(r),o.d(r,{RoadmapModule:()=>O});var c=o(8583),l=o(4667),p=o(7358),e=o(7716),m=o(4040),_=o(4239),s=o(5769),g=o(4569);let f=(()=>{class t{transform(n,a){return n.length<=0||!a?n:n.filter(d=>d.status===a)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"filterBy",type:t,pure:!0}),t})();function u(t,i){if(1&t&&e._UZ(0,"app-feedback-card",19),2&t){const n=i.$implicit;e.Q6J("type","road")("feedback",n)}}function v(t,i){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,u,1,2,"app-feedback-card",18),e.ALo(2,"filterBy"),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,n.feedbackData,"planned"))}}function h(t,i){if(1&t&&e._UZ(0,"app-feedback-card",19),2&t){const n=i.$implicit;e.Q6J("type","road")("feedback",n)}}function b(t,i){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,h,1,2,"app-feedback-card",18),e.ALo(2,"filterBy"),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,n.feedbackData,"in-progress"))}}function x(t,i){if(1&t&&e._UZ(0,"app-feedback-card",19),2&t){const n=i.$implicit;e.Q6J("type","road")("feedback",n)}}function C(t,i){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,x,1,2,"app-feedback-card",18),e.ALo(2,"filterBy"),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,n.feedbackData,"live"))}}function Z(t,i){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,v,3,4,"div",16),e.YNc(2,b,3,4,"div",16),e.YNc(3,C,3,4,"div",16),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",!n.isSmall||"planned"===n.activeTap),e.xp6(1),e.Q6J("ngIf",!n.isSmall||"in-progress"===n.activeTap),e.xp6(1),e.Q6J("ngIf",!n.isSmall||"live"===n.activeTap)}}const T=[{path:"",component:(()=>{class t{constructor(n,a){this.router=n,this.feedService=a,this.feedbackData=[],this.activeTap="planned",this.isSmall=!1}ngOnInit(){this.feedbackData=this.feedService.getAllFeedback()||[],this.feedService.feedbackChange.subscribe(n=>{this.feedbackData=n})}numStatus(n){return this.feedbackData.filter(a=>a.status===n).length}changeTap(n){this.activeTap=n}onClickCreate(){this.router.navigate(["/create-feedback"])}resize(n){this.isSmall=!(n.innerWidth>=777)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.F0),e.Y36(m.T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-roadmap"]],hostBindings:function(n,a){1&n&&e.NdJ("resize",function(P){return a.resize(P.target)},!1,e.Jf7)},decls:32,vars:10,consts:[[1,"road"],[1,"road__header"],[1,"road__flex"],["appGoBack","",1,"btn-back","btn-back--white"],[1,"btn-back__icon"],[1,"road__title"],["type","button",1,"btn","btn__primary",3,"click"],[1,"btn__icon"],[1,"road__content"],[1,"tap"],[1,"tap__bar"],[1,"tap__label",3,"click"],[1,"tap__title"],[1,"hide-small"],["class","tap__content",4,"ngIf"],[1,"tap__content"],["class","tap__content-item",4,"ngIf"],[1,"tap__content-item"],[3,"type","feedback",4,"ngFor","ngForOf"],[3,"type","feedback"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"a",3),e.TgZ(4,"mat-icon",4),e._uU(5,"navigate_before"),e.qZA(),e._uU(6," Go Back "),e.qZA(),e.TgZ(7,"h2",5),e._uU(8,"Roadmap"),e.qZA(),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return a.onClickCreate()}),e.TgZ(10,"mat-icon",7),e._uU(11,"add"),e.qZA(),e._uU(12," Add Feedback "),e.qZA(),e.qZA(),e.TgZ(13,"div",8),e.TgZ(14,"div",9),e.TgZ(15,"div",10),e.TgZ(16,"div",11),e.NdJ("click",function(){return a.changeTap("planned")}),e.TgZ(17,"h3",12),e._uU(18),e.qZA(),e.TgZ(19,"p",13),e._uU(20,"Ideas prioritized for research"),e.qZA(),e.qZA(),e.TgZ(21,"div",11),e.NdJ("click",function(){return a.changeTap("in-progress")}),e.TgZ(22,"h3",12),e._uU(23),e.qZA(),e.TgZ(24,"p",13),e._uU(25,"Currently being developed"),e.qZA(),e.qZA(),e.TgZ(26,"div",11),e.NdJ("click",function(){return a.changeTap("live")}),e.TgZ(27,"h3",12),e._uU(28),e.qZA(),e.TgZ(29,"p",13),e._uU(30,"Released features"),e.qZA(),e.qZA(),e.qZA(),e.YNc(31,Z,4,3,"div",14),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(16),e.ekj("active-planned","planned"===a.activeTap),e.xp6(2),e.hij("Planned (",a.numStatus("planned"),")"),e.xp6(3),e.ekj("active-progress","in-progress"===a.activeTap),e.xp6(2),e.hij(" In-Progress (",a.numStatus("in-progress"),") "),e.xp6(3),e.ekj("active-live","live"===a.activeTap),e.xp6(2),e.hij("Live (",a.numStatus("live"),")"),e.xp6(3),e.Q6J("ngIf",a.feedbackData.length))},directives:[_.v,s.Hw,c.O5,c.sg,g.s],pipes:[f],styles:[".road[_ngcontent-%COMP%]{padding-top:8rem}@media (max-width: 777px){.road[_ngcontent-%COMP%]{padding-top:0}}.road__flex[_ngcontent-%COMP%]{display:flex;flex-direction:column}.road__header[_ngcontent-%COMP%]{background-color:#373f68;border-radius:8px;padding:2rem;color:#fff;display:flex;justify-content:space-between;align-items:center}@media (max-width: 777px){.road__header[_ngcontent-%COMP%]{border-radius:0}}.road__title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;line-height:1.8em}.road__content[_ngcontent-%COMP%]{margin-top:3rem;padding-left:2rem;padding-right:2rem}@media (max-width: 777px){.road__content[_ngcontent-%COMP%]{margin-top:0;padding-left:0;padding-right:0}}.tap__bar[_ngcontent-%COMP%]{display:flex;grid-gap:3rem;gap:3rem;justify-content:space-between}@media (max-width: 777px){.tap__bar[_ngcontent-%COMP%]{background-color:#f2f4ff;border-bottom:1px solid var(--gray-20);box-shadow:0 2px 4rem #0003}}.tap__title[_ngcontent-%COMP%]{color:#3a4374;font-size:1.6rem;font-weight:600}@media (max-width: 777px){.tap__title[_ngcontent-%COMP%]{color:#3a4374;opacity:.5;font-size:1.4rem}}.tap__label[_ngcontent-%COMP%]{flex:30%;padding-top:2rem;padding-bottom:2rem}@media (max-width: 777px){.tap__label[_ngcontent-%COMP%]{text-align:center;cursor:pointer}}.tap__content[_ngcontent-%COMP%]{display:flex;grid-gap:2%;gap:2%;margin-top:2rem;justify-content:space-between}@media (max-width: 777px){.tap__content[_ngcontent-%COMP%]{margin-top:2.6em;padding-right:2.4rem;padding-left:2.4rem}}.tap__content-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:3rem;gap:3rem;width:30%}@media (max-width: 777px){.tap__content-item[_ngcontent-%COMP%]{width:100%}}@media (max-width: 777px){.hide-small[_ngcontent-%COMP%]{display:none}}@media (max-width: 777px){.active-planned[_ngcontent-%COMP%]{border-bottom:2px solid #f49f85}.active-planned[_ngcontent-%COMP%]   .tap__title[_ngcontent-%COMP%]{opacity:1}.active-progress[_ngcontent-%COMP%]{border-bottom:2px solid #ad1fea}.active-progress[_ngcontent-%COMP%]   .tap__title[_ngcontent-%COMP%]{opacity:1}.active-live[_ngcontent-%COMP%]{border-bottom:2px solid #62bcfa}.active-live[_ngcontent-%COMP%]   .tap__title[_ngcontent-%COMP%]{opacity:1}}"]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(T)],p.Bz]}),t})();var y=o(3150),M=o(8088);let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,l.q,k,y.y,M.Z]]}),t})()}}]);
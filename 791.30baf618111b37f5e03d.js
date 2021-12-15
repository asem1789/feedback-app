"use strict";(self.webpackChunkfeedback=self.webpackChunkfeedback||[]).push([[791],{2791:(P,r,i)=>{i.r(r),i.d(r,{RoadmapModule:()=>A});var c=i(8583),l=i(4667),p=i(7358),e=i(7716),m=i(4040),s=i(4239),_=i(5769),g=i(4569),f=i(8189);function u(t,o){if(1&t&&e._UZ(0,"app-feedback-card",19),2&t){const a=o.$implicit;e.Q6J("type","road")("feedback",a)}}function v(t,o){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,u,1,2,"app-feedback-card",18),e.ALo(2,"filterBy"),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,1,a.feedbackData,"planned","status"))}}function h(t,o){if(1&t&&e._UZ(0,"app-feedback-card",19),2&t){const a=o.$implicit;e.Q6J("type","road")("feedback",a)}}function b(t,o){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,h,1,2,"app-feedback-card",18),e.ALo(2,"filterBy"),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,1,a.feedbackData,"in-progress","status"))}}function C(t,o){if(1&t&&e._UZ(0,"app-feedback-card",19),2&t){const a=o.$implicit;e.Q6J("type","road")("feedback",a)}}function x(t,o){if(1&t&&(e.TgZ(0,"div",17),e.YNc(1,C,1,2,"app-feedback-card",18),e.ALo(2,"filterBy"),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,1,a.feedbackData,"live","status"))}}function Z(t,o){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,v,3,5,"div",16),e.YNc(2,b,3,5,"div",16),e.YNc(3,x,3,5,"div",16),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",!a.isSmall||"planned"===a.activeTap),e.xp6(1),e.Q6J("ngIf",!a.isSmall||"in-progress"===a.activeTap),e.xp6(1),e.Q6J("ngIf",!a.isSmall||"live"===a.activeTap)}}const T=[{path:"",component:(()=>{class t{constructor(a,n){this.router=a,this.feedService=n,this.feedbackData=[],this.activeTap="planned",this.isSmall=!1}ngOnInit(){this.feedbackData=this.feedService.getAllFeedback()||[],this.feedService.feedbackChange.subscribe(a=>{this.feedbackData=a})}numStatus(a){return this.feedbackData.filter(n=>n.status===a).length}changeTap(a){this.activeTap=a}onClickCreate(){this.router.navigate(["/create-feedback"])}resize(a){this.isSmall=!(a.innerWidth>=777)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(p.F0),e.Y36(m.T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-roadmap"]],hostBindings:function(a,n){1&a&&e.NdJ("resize",function(R){return n.resize(R.target)},!1,e.Jf7)},decls:32,vars:10,consts:[[1,"road"],[1,"road__header"],[1,"road__flex"],["appGoBack","",1,"btn-back","btn-back--white"],[1,"btn-back__icon"],[1,"road__title"],["type","button",1,"btn","btn__primary",3,"click"],[1,"btn__icon"],[1,"road__content"],[1,"tap"],[1,"tap__bar"],[1,"tap__label",3,"click"],[1,"tap__title"],[1,"hide-small"],["class","tap__content",4,"ngIf"],[1,"tap__content"],["class","tap__content-item",4,"ngIf"],[1,"tap__content-item"],[3,"type","feedback",4,"ngFor","ngForOf"],[3,"type","feedback"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"a",3),e.TgZ(4,"mat-icon",4),e._uU(5,"navigate_before"),e.qZA(),e._uU(6," Go Back "),e.qZA(),e.TgZ(7,"h2",5),e._uU(8,"Roadmap"),e.qZA(),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return n.onClickCreate()}),e.TgZ(10,"mat-icon",7),e._uU(11,"add"),e.qZA(),e._uU(12," Add Feedback "),e.qZA(),e.qZA(),e.TgZ(13,"div",8),e.TgZ(14,"div",9),e.TgZ(15,"div",10),e.TgZ(16,"div",11),e.NdJ("click",function(){return n.changeTap("planned")}),e.TgZ(17,"h3",12),e._uU(18),e.qZA(),e.TgZ(19,"p",13),e._uU(20,"Ideas prioritized for research"),e.qZA(),e.qZA(),e.TgZ(21,"div",11),e.NdJ("click",function(){return n.changeTap("in-progress")}),e.TgZ(22,"h3",12),e._uU(23),e.qZA(),e.TgZ(24,"p",13),e._uU(25,"Currently being developed"),e.qZA(),e.qZA(),e.TgZ(26,"div",11),e.NdJ("click",function(){return n.changeTap("live")}),e.TgZ(27,"h3",12),e._uU(28),e.qZA(),e.TgZ(29,"p",13),e._uU(30,"Released features"),e.qZA(),e.qZA(),e.qZA(),e.YNc(31,Z,4,3,"div",14),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(16),e.ekj("active-planned","planned"===n.activeTap),e.xp6(2),e.hij("Planned (",n.numStatus("planned"),")"),e.xp6(3),e.ekj("active-progress","in-progress"===n.activeTap),e.xp6(2),e.hij(" In-Progress (",n.numStatus("in-progress"),") "),e.xp6(3),e.ekj("active-live","live"===n.activeTap),e.xp6(2),e.hij("Live (",n.numStatus("live"),")"),e.xp6(3),e.Q6J("ngIf",n.feedbackData.length))},directives:[s.v,_.Hw,c.O5,c.sg,g.s],pipes:[f.R],styles:[".road[_ngcontent-%COMP%]{padding-top:8rem}@media (max-width: 777px){.road[_ngcontent-%COMP%]{padding-top:0}}.road__flex[_ngcontent-%COMP%]{display:flex;flex-direction:column}.road__header[_ngcontent-%COMP%]{background-color:#373f68;border-radius:8px;padding:2rem;color:#fff;display:flex;justify-content:space-between;align-items:center}@media (max-width: 777px){.road__header[_ngcontent-%COMP%]{border-radius:0}}.road__title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;line-height:1.8em}.road__content[_ngcontent-%COMP%]{margin-top:3rem;padding-left:2rem;padding-right:2rem}@media (max-width: 777px){.road__content[_ngcontent-%COMP%]{margin-top:0;padding-left:0;padding-right:0}}.tap__bar[_ngcontent-%COMP%]{display:flex;grid-gap:3rem;gap:3rem;justify-content:space-between}@media (max-width: 777px){.tap__bar[_ngcontent-%COMP%]{background-color:#f2f4ff;border-bottom:1px solid var(--gray-20);box-shadow:0 2px 4rem #0003}}.tap__title[_ngcontent-%COMP%]{color:#3a4374;font-size:1.6rem;font-weight:600}@media (max-width: 777px){.tap__title[_ngcontent-%COMP%]{color:#3a4374;opacity:.5;font-size:1.4rem}}.tap__label[_ngcontent-%COMP%]{flex:30%;padding-top:2rem;padding-bottom:2rem}@media (max-width: 777px){.tap__label[_ngcontent-%COMP%]{text-align:center;cursor:pointer}}.tap__content[_ngcontent-%COMP%]{display:flex;grid-gap:2%;gap:2%;margin-top:2rem;justify-content:space-between}@media (max-width: 777px){.tap__content[_ngcontent-%COMP%]{margin-top:2.6em;padding-right:2.4rem;padding-left:2.4rem}}.tap__content-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:3rem;gap:3rem;width:30%}@media (max-width: 777px){.tap__content-item[_ngcontent-%COMP%]{width:100%}}@media (max-width: 777px){.hide-small[_ngcontent-%COMP%]{display:none}}@media (max-width: 777px){.active-planned[_ngcontent-%COMP%]{border-bottom:2px solid #f49f85}.active-planned[_ngcontent-%COMP%]   .tap__title[_ngcontent-%COMP%]{opacity:1}.active-progress[_ngcontent-%COMP%]{border-bottom:2px solid #ad1fea}.active-progress[_ngcontent-%COMP%]   .tap__title[_ngcontent-%COMP%]{opacity:1}.active-live[_ngcontent-%COMP%]{border-bottom:2px solid #62bcfa}.active-live[_ngcontent-%COMP%]   .tap__title[_ngcontent-%COMP%]{opacity:1}}"]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(T)],p.Bz]}),t})();var M=i(3150),y=i(8088),O=i(5075);let A=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,l.q,k,M.y,y.Z,O.z]]}),t})()}}]);
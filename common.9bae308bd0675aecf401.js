"use strict";(self.webpackChunkfeedback=self.webpackChunkfeedback||[]).push([[592],{4569:(g,i,c)=>{c.d(i,{s:()=>u});var e=c(7716),_=c(7358),a=c(8583),o=c(5769);function n(d,l){if(1&d){const t=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){return e.CHM(t),e.oxw().goDetail()}),e.TgZ(1,"button",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleVote()}),e.TgZ(2,"mat-icon",4),e._uU(3,"expand_less"),e.qZA(),e.TgZ(4,"span",5),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"h2",7),e._uU(8),e.qZA(),e.TgZ(9,"p",8),e._uU(10),e.qZA(),e.TgZ(11,"button",9),e.TgZ(12,"span"),e._uU(13),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e._UZ(15,"mat-icon",11),e.TgZ(16,"span",12),e._uU(17),e.qZA(),e.qZA(),e.qZA()}if(2&d){const t=e.oxw();e.xp6(1),e.ekj("feed-card__btn-active",t.voteClicked),e.xp6(4),e.Oqu(t.countVotes),e.xp6(3),e.Oqu(t.feedback.title),e.xp6(2),e.hij(" ",t.feedback.description," "),e.xp6(3),e.Oqu(t.feedback.category),e.xp6(4),e.Oqu((null==t.feedback.comments?null:t.feedback.comments.length)||0)}}const r=function(d,l,t){return{"state-planned":d,"state-progress":l,"state-live":t}};function s(d,l){if(1&d){const t=e.EpF();e.TgZ(0,"div",13),e.NdJ("click",function(){return e.CHM(t),e.oxw().goDetail()}),e.TgZ(1,"div",14),e._UZ(2,"span",15),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"div"),e.TgZ(6,"h2",16),e._uU(7),e.qZA(),e.TgZ(8,"p",8),e._uU(9),e.qZA(),e.TgZ(10,"button",9),e.TgZ(11,"span"),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",17),e.TgZ(14,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleVote()}),e.TgZ(15,"mat-icon",4),e._uU(16,"expand_less"),e.qZA(),e.TgZ(17,"span",5),e._uU(18),e.qZA(),e.qZA(),e.TgZ(19,"div",10),e._UZ(20,"mat-icon",11),e.TgZ(21,"span",12),e._uU(22),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&d){const t=e.oxw();e.Q6J("ngClass",e.kEZ(9,r,"planned"==t.feedback.status,"in-progress"==t.feedback.status,"live"==t.feedback.status)),e.xp6(4),e.Oqu(t.feedback.status),e.xp6(3),e.hij(" ",t.feedback.title," "),e.xp6(2),e.hij(" ",t.feedback.description," "),e.xp6(3),e.Oqu(t.feedback.category),e.xp6(2),e.ekj("feed-card__btn-active",t.voteClicked),e.xp6(4),e.Oqu(t.countVotes),e.xp6(4),e.Oqu((null==t.feedback.comments?null:t.feedback.comments.length)||0)}}let u=(()=>{class d{constructor(t){this.router=t,this.voteClicked=!1}ngOnInit(){var t;this.countVotes=(null===(t=this.feedback)||void 0===t?void 0:t.votes)||0}toggleVote(){this.voteClicked?(this.countVotes-=1,this.voteClicked=!1):(this.countVotes+=1,this.voteClicked=!0)}goDetail(){this.router.navigate(["feedback",this.feedback.id])}}return d.\u0275fac=function(t){return new(t||d)(e.Y36(_.F0))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-feedback-card"]],inputs:{feedback:"feedback",type:"type"},decls:2,vars:2,consts:[["class","feed-card",3,"click",4,"ngIf"],["class","feed-card-road",3,"ngClass","click",4,"ngIf"],[1,"feed-card",3,"click"],[1,"feed-card__vote","feed-card__vote--vert",3,"click"],["color","accent",1,"feed-card__vote-icon"],[1,"feed-card__vote-num"],[1,"feed-card__content"],[1,"feed-card__title"],[1,"feed-card__text"],["disabled","",1,"feed-card__tag-btn"],[1,"feed-card__comment"],["svgIcon","comment_icon",1,"feed-card__comment-icon"],[1,"feed-card__comment-span"],[1,"feed-card-road",3,"ngClass","click"],[1,"feed-card__status"],[1,"indicator"],[1,"feed-card__title","feed-card__title-small"],[1,"feed-card__footer"],[1,"feed-card__vote",3,"click"]],template:function(t,f){1&t&&(e.YNc(0,n,18,7,"div",0),e.YNc(1,s,23,13,"div",1)),2&t&&(e.Q6J("ngIf",!f.type),e.xp6(1),e.Q6J("ngIf",f.type))},directives:[a.O5,o.Hw,a.mk],styles:[".feed-card[_ngcontent-%COMP%]{width:100%;padding:2rem;border-radius:8px;background-color:var(--color-white);box-shadow:1px 3px 5px #0003;transition:all .3s;cursor:pointer;display:flex;grid-gap:3rem;gap:3rem}.feed-card[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:1px 3px 20px #0000001a}.feed-card__content[_ngcontent-%COMP%]{flex:1}.feed-card__title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:600;color:var(--text-accent-dark)}.feed-card__text[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem}.feed-card__tag-btn[_ngcontent-%COMP%]{padding:.8rem 1rem;color:#4661e6;background-color:#f2f4ff;border-radius:.8rem}.feed-card__comment[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:.6rem;gap:.6rem}.feed-card__comment-icon[_ngcontent-%COMP%]{color:#ccc;font-size:1.8rem}.feed-card__comment-span[_ngcontent-%COMP%]{font-weight:600;color:var(--text-accent-dark);font-size:1.8rem;padding-bottom:8px}.feed-card__vote[_ngcontent-%COMP%]{padding:.8rem;border-radius:1rem;background-color:#f2f4ff;cursor:pointer;display:flex;align-items:center;transition:all .4s}.feed-card__vote[_ngcontent-%COMP%]:hover, .feed-card__vote[_ngcontent-%COMP%]:active{background-color:#cfd7ff}.feed-card__vote--vert[_ngcontent-%COMP%]{flex-direction:column;align-self:flex-start}.feed-card__vote-num[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:600;color:var(--text-accent-dark)}.feed-card__btn-active[_ngcontent-%COMP%]{background-color:#4661e6;transition:all .3s}.feed-card__btn-active[_ngcontent-%COMP%]:hover, .feed-card__btn-active[_ngcontent-%COMP%]:active{background-color:#6a80ec}.feed-card__btn-active[_ngcontent-%COMP%]   .feed-card__vote-icon[_ngcontent-%COMP%], .feed-card__btn-active[_ngcontent-%COMP%]   .feed-card__vote-num[_ngcontent-%COMP%]{color:#fff}.feed-card-road[_ngcontent-%COMP%]{width:100%;padding:1rem;border-radius:6px;background-color:var(--color-white);transition:all .3s;cursor:pointer;border-top:6px solid transparent;font-size:1.2rem}.feed-card-road[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:1px 3px 20px #0000001a}.feed-card__status[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:.8rem;gap:.8rem;margin-bottom:1.5rem}.feed-card__title-small[_ngcontent-%COMP%]{font-size:1.4rem}.feed-card__footer[_ngcontent-%COMP%]{display:flex;margin-top:2rem;justify-content:space-between;align-content:center}.feed-card__footer[_ngcontent-%COMP%]   .feed-card__vote-num[_ngcontent-%COMP%]{font-size:1.4rem}.feed-card__footer[_ngcontent-%COMP%]   .feed-card__vote[_ngcontent-%COMP%]{padding:.1rem .8rem}.indicator[_ngcontent-%COMP%]{display:inline-block;width:1rem;height:1rem;border-radius:50%}.state-planned[_ngcontent-%COMP%]{border-top-color:#f49f85}.state-planned[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{background-color:#f49f85}.state-progress[_ngcontent-%COMP%]{border-top-color:#ad1fea}.state-progress[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{background-color:#ad1fea}.state-live[_ngcontent-%COMP%]{border-top-color:#62bcfa}.state-live[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{background-color:#62bcfa}"]}),d})()},3150:(g,i,c)=>{c.d(i,{y:()=>o});var e=c(8583),_=c(4667),a=c(7716);let o=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[e.ez,_.q]]}),n})()},6205:(g,i,c)=>{c.d(i,{_:()=>_});var e=c(7716);let _=(()=>{class a{constructor(n){this.elRef=n,this.clicked=new e.vpe}onClick(n){const r=this.elRef.nativeElement.contains(n),s=this.toggle.contains(n);r||s||this.clicked.emit()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(e.SBq))},a.\u0275dir=e.lG2({type:a,selectors:[["","appClickOutside",""]],hostBindings:function(n,r){1&n&&e.NdJ("click",function(u){return r.onClick(u.target)},!1,e.evT)},inputs:{toggle:"toggle"},outputs:{clicked:"clicked"}}),a})()},8088:(g,i,c)=>{c.d(i,{Z:()=>a});var e=c(8583),_=c(7716);let a=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=_.oAB({type:o}),o.\u0275inj=_.cJS({imports:[[e.ez]]}),o})()},4239:(g,i,c)=>{c.d(i,{v:()=>a});var e=c(7716),_=c(8583);let a=(()=>{class o{constructor(r){this.location=r}onClick(){this.location.back()}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(_.Ye))},o.\u0275dir=e.lG2({type:o,selectors:[["","appGoBack",""]],hostBindings:function(r,s){1&r&&e.NdJ("click",function(){return s.onClick()})}}),o})()}}]);
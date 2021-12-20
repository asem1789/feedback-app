"use strict";(self.webpackChunkfeedback=self.webpackChunkfeedback||[]).push([[470],{3470:(E,_,c)=>{c.r(_),c.d(_,{HomeModule:()=>D});var g=c(7358),f=c(4135),e=c(7716),u=c(4040),h=c(1095),l=c(8583);function C(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",2),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().selectOption(r)}),e._uU(1),e.qZA()}if(2&n){const t=a.$implicit,o=e.oxw();e.ekj("btn-active",o.selected==t),e.xp6(1),e.hij(" ",t," ")}}let v=(()=>{class n{constructor(){this.category=new e.vpe,this.OPTIONS=["All","UI","UX","Enhancement","Bug","Feature"],this.selected="All"}selectOption(t){this.selected=t,this.category.emit(t.toLowerCase())}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-filter-card"]],outputs:{category:"category"},decls:2,vars:1,consts:[[1,"filter-card"],["class","filter-card__button",3,"btn-active","click",4,"ngFor","ngForOf"],[1,"filter-card__button",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,C,2,3,"button",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",o.OPTIONS))},directives:[l.sg],styles:[".filter-card[_ngcontent-%COMP%]{width:22rem;height:18rem;border-radius:10px;padding:25px;background-color:#fff;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}@media (max-width: 800px){.filter-card[_ngcontent-%COMP%]{width:21rem}}.filter-card__button[_ngcontent-%COMP%]{border:none;border-radius:1rem;background-color:#f3f3fc;color:#4661e6;font-size:1.4rem;font-weight:600;padding:.5rem 1.5rem}.filter-card__button[_ngcontent-%COMP%]:hover{background-color:#cfd7ff;cursor:pointer}.filter-card[_ngcontent-%COMP%]   .btn-active[_ngcontent-%COMP%]{background-color:#4661e6;color:#fff}"]}),n})();function x(n,a){if(1&n&&(e.TgZ(0,"li",6),e._UZ(1,"div"),e.TgZ(2,"span",7),e._uU(3),e.qZA(),e.TgZ(4,"span",8),e._uU(5),e.qZA(),e.qZA()),2&n){const t=a.$implicit;e.xp6(1),e.Tol("map-card__circle map-card__circle-"+t.class),e.xp6(2),e.Oqu(t.text),e.xp6(2),e.Oqu(t.length)}}const O=function(){return["roadmap"]};let b=(()=>{class n{constructor(){this.STATUS=[{text:"Planned",class:"orange",length:1},{text:"In-Progress",class:"violet",length:2},{text:"Live",class:"blue",length:1}]}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-roadmap-card"]],decls:8,vars:3,consts:[[1,"map-card"],[1,"map-card__header"],[1,"map-card__title"],[1,"map-card__link",3,"routerLink"],[1,"map-card__list"],["class","map-card__item",4,"ngFor","ngForOf"],[1,"map-card__item"],[1,"map-card__name"],[1,"map-card__lenght"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h2",2),e._uU(3,"Roadmap"),e.qZA(),e.TgZ(4,"a",3),e._uU(5,"View"),e.qZA(),e.qZA(),e.TgZ(6,"ul",4),e.YNc(7,x,6,4,"li",5),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("routerLink",e.DdM(2,O)),e.xp6(3),e.Q6J("ngForOf",o.STATUS))},directives:[g.yS,l.sg],styles:[".map-card[_ngcontent-%COMP%]{width:22rem;height:18rem;border-radius:10px;padding:25px;background-color:#fff;font-size:1.6rem}@media (max-width: 800px){.map-card[_ngcontent-%COMP%]{width:21rem}}.map-card__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}.map-card__title[_ngcontent-%COMP%]{color:#3a4374;font-weight:700;font-size:1.8rem}.map-card__link[_ngcontent-%COMP%]{color:#4661e6}.map-card__circle[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%}.map-card__circle-orange[_ngcontent-%COMP%]{background-color:#f49f85}.map-card__circle-violet[_ngcontent-%COMP%]{background-color:#ad1fea}.map-card__circle-blue[_ngcontent-%COMP%]{background-color:#62bcfa}.map-card__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.map-card__item[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;grid-gap:1rem;gap:1rem}.map-card__name[_ngcontent-%COMP%]{flex:1}"]}),n})(),Z=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-logo-card"]],decls:5,vars:0,consts:[[1,"logo-card"],[1,"logo-card__title"],[1,"logo-card__sub-title"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1",1),e._uU(2,"Frontend Mentor"),e.qZA(),e.TgZ(3,"h2",2),e._uU(4,"Feedback Board"),e.qZA(),e.qZA())},styles:[".logo-card[_ngcontent-%COMP%]{width:22rem;height:18rem;border-radius:10px;padding:25px;background:radial-gradient(farthest-side at 0% 100%,#488aef 70%,transparent),radial-gradient(farthest-side at 100% 0%,#da4b8c 15%,#ad1fea 50%,transparent),radial-gradient(farthest-side at 0% 0%,#7ab3f9,transparent),radial-gradient(farthest-side at 100% 100%,#f49f85,transparent);display:flex;flex-direction:column;justify-content:flex-end}@media (max-width: 800px){.logo-card[_ngcontent-%COMP%]{width:21rem}}.logo-card__title[_ngcontent-%COMP%]{color:var(--color-white);font-size:2rem;font-weight:700}.logo-card__sub-title[_ngcontent-%COMP%]{color:var(--gray-05);font-size:1.4rem;font-weight:400}"]}),n})();var p=c(5769),M=c(6205);const y=["value"];function P(n,a){1&n&&(e.TgZ(0,"mat-icon"),e._uU(1,"done"),e.qZA())}function T(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"li",14),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw(2).selectOption(r)}),e.TgZ(1,"span",15),e._uU(2),e.qZA(),e.YNc(3,P,2,0,"mat-icon",16),e.qZA()}if(2&n){const t=a.$implicit,o=e.oxw(2);e.ekj("sort__item-active",o.selected.value===t.value),e.xp6(2),e.Oqu(t.text),e.xp6(1),e.Q6J("ngIf",o.selected.value===t.value)}}function k(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"ul",12),e.NdJ("clicked",function(){return e.CHM(t),e.oxw().showList=!1}),e.YNc(1,T,4,4,"li",13),e.qZA()}if(2&n){const t=e.oxw(),o=e.MAs(9);e.Q6J("toggle",o),e.xp6(1),e.Q6J("ngForOf",t.OPTIONS)}}let w=(()=>{class n{constructor(t){this.router=t,this.feedsNum=0,this.option=new e.vpe,this.OPTIONS=[{text:"Most Upvotes",value:"most-upvotes"},{text:"Least Upvotes",value:"least-upvotes"},{text:"Most Comments",value:"most-comments"},{text:"Least Comments",value:"least-comments"}],this.selected={text:"Most Upvotes",value:"most-upvotes"},this.showList=!1}ngOnInit(){}selectOption(t){this.selected=t,this.value.nativeElement.textContent=t.text,this.showList=!1,this.option.emit(t.value)}toggleList(){this.showList=!this.showList}navFeedback(){this.router.navigate(["create-feedback"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-suggest-bar"]],viewQuery:function(t,o){if(1&t&&e.Gf(y,5),2&t){let i;e.iGM(i=e.CRH())&&(o.value=i.first)}},inputs:{feedsNum:"feedsNum"},outputs:{option:"option"},decls:21,vars:3,consts:[[1,"suggest"],[1,"suggest__info"],["svgIcon","suggestion_icon"],[1,"suggest__title"],[1,"suggest__select"],[1,"label"],[1,"suggest__sort-btn",3,"click"],["toggle",""],[1,"select-value"],["value",""],["class","sort__list","appClickOutside","",3,"toggle","clicked",4,"ngIf"],[1,"btn","btn__icon","btn__primary","btn-bold","suggest-bar-btn",3,"click"],["appClickOutside","",1,"sort__list",3,"toggle","clicked"],["class","sort__item",3,"sort__item-active","click",4,"ngFor","ngForOf"],[1,"sort__item",3,"click"],[1,"sort__text"],[4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"mat-icon",2),e.TgZ(3,"h2",3),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"label",5),e._uU(7,"Sort By:"),e.qZA(),e.TgZ(8,"div",6,7),e.NdJ("click",function(){return o.toggleList()}),e.TgZ(10,"span",8,9),e._uU(12),e.qZA(),e.TgZ(13,"mat-icon"),e._uU(14,"expand_more"),e.qZA(),e.qZA(),e.YNc(15,k,2,2,"ul",10),e.qZA(),e.TgZ(16,"button",11),e.NdJ("click",function(){return o.navFeedback()}),e.TgZ(17,"mat-icon"),e._uU(18,"add"),e.qZA(),e.TgZ(19,"span"),e._uU(20,"Add Feedback"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.hij("",o.feedsNum," Suggestion"),e.xp6(8),e.Oqu(o.selected.text),e.xp6(3),e.Q6J("ngIf",o.showList))},directives:[p.Hw,l.O5,M._,l.sg],styles:[".suggest[_ngcontent-%COMP%]{background-color:#373f68;color:#fff;border-radius:8px;width:100%;padding:1.5rem 2.5rem;display:flex;align-items:center;grid-gap:1.5rem;gap:1.5rem}@media (max-width: 500px){.suggest[_ngcontent-%COMP%]{padding:1rem 1.3rem;grid-gap:.6rem;gap:.6rem}}@media (max-width: 777px){.suggest[_ngcontent-%COMP%]{border-radius:0}}.suggest__info[_ngcontent-%COMP%]{display:flex}@media (max-width: 777px){.suggest__info[_ngcontent-%COMP%]{display:none;pointer-events:none}}.suggest__title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;margin-left:1rem}.suggest__select[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;position:relative;margin-left:2rem}@media (max-width: 777px){.suggest__select[_ngcontent-%COMP%]{margin-left:0}}.suggest__select[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1.6rem;margin-right:1rem}@media (max-width: 500px){.suggest__select[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1.2rem;margin-right:.5rem}}.suggest__select[_ngcontent-%COMP%]   .select-value[_ngcontent-%COMP%]{color:#fff;font-weight:600;font-size:1.6rem;display:inline-block}@media (max-width: 500px){.suggest__select[_ngcontent-%COMP%]   .select-value[_ngcontent-%COMP%]{font-size:1.2rem}}.suggest__sort-btn[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.sort__list[_ngcontent-%COMP%]{border-radius:5px;position:absolute;width:25rem;top:100%;margin-top:1rem;display:flex;flex-direction:column;background-color:#fff;box-shadow:2px 4px 8px #0006;z-index:100}.sort__item[_ngcontent-%COMP%]{font-size:1.6rem;color:var(--text-accent);padding:1rem 2rem;transition:color .4s;display:flex;align-content:center}.sort__item[_ngcontent-%COMP%]:hover, .sort__item[_ngcontent-%COMP%]:active{cursor:pointer}.sort__item[_ngcontent-%COMP%]   .sort__text[_ngcontent-%COMP%]{flex:1}.sort__item[_ngcontent-%COMP%]:hover, .sort__item[_ngcontent-%COMP%]:active{color:var(--text-primary)}.sort__item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--gray-30)}.sort__item-active[_ngcontent-%COMP%]{color:var(--text-primary)}.list-hide[_ngcontent-%COMP%]{opacity:0;pointer-events:none;transform:translateY(-100%);transition:all .6s}.list-show[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}@media (max-width: 500px){.suggest-bar-btn[_ngcontent-%COMP%]{font-size:1.3rem;padding:.8rem 1rem}}"]}),n})();var A=c(1746),F=c(8189);let S=(()=>{class n{transform(t,o){if(t.length<=0||!o)return t;let i;switch(o){case"most-upvotes":i=t.sort((r,s)=>s.votes-r.votes);break;case"least-upvotes":i=t.sort((r,s)=>r.votes-s.votes);break;case"most-comments":i=t.sort((r,s)=>{var d,m;return(null===(d=s.comments)||void 0===d?void 0:d.length)-(null===(m=r.comments)||void 0===m?void 0:m.length)});break;case"least-comments":i=t.sort((r,s)=>{var d,m;return(null===(d=r.comments)||void 0===d?void 0:d.length)-(null===(m=s.comments)||void 0===m?void 0:m.length)});break;default:i=[...t]}return i}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"sortBy",type:n,pure:!0}),n})();function q(n,a){1&n&&(e.TgZ(0,"mat-icon",15),e._uU(1,"menu"),e.qZA())}function U(n,a){1&n&&(e.TgZ(0,"mat-icon",15),e._uU(1,"close"),e.qZA())}const B=function(){return[]};function N(n,a){if(1&n&&e._UZ(0,"app-feedback-card",18),2&n){const t=a.$implicit,o=e.oxw(2);e.Q6J("feedback",t)("commentsLen",o.getLength(t.comments||e.DdM(2,B)))}}function H(n,a){if(1&n&&(e.TgZ(0,"div",19),e.TgZ(1,"p",20),e._uU(2," There is no "),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"uppercase"),e.qZA(),e._uU(6," Feedback yet!! "),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Oqu(e.lcZ(5,1,t.filterItem))}}function I(n,a){if(1&n&&(e.ynx(0),e.YNc(1,N,1,3,"app-feedback-card",16),e.ALo(2,"sortBy"),e.YNc(3,H,7,3,"div",17),e.BQk()),2&n){const t=a.ngIf,o=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,t,o.sorted)),e.xp6(2),e.Q6J("ngIf",0===t.length)}}function J(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",21),e.NdJ("click",function(){return e.CHM(t),e.oxw().isSideOpen=!1}),e.qZA()}}const L=[{path:"",component:(()=>{class n{constructor(t){this.feedService=t,this.isSideOpen=!1,this.feedbackData=[],this.sorted="most-upvotes",this.filterItem="all"}ngOnInit(){this.feedbackData=this.feedService.getAllFeedback()||[],this.feedService.feedbackChange.subscribe(t=>{this.feedbackData=t})}toggleSide(){this.isSideOpen=!this.isSideOpen}sortBy(t){this.sorted=t}filterBy(t,o=!1){this.filterItem=t,o&&(this.isSideOpen=!1)}getLength(t){return(0,f.F)(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:23,vars:11,consts:[[1,"home"],[1,"home-nav"],[1,"home-nav__logo"],[1,"home-nav__title"],[1,"home-nav__subtitle"],["mat-icon-button","","type","button",3,"click"],["class","home-nav__icon",4,"ngIf"],[1,"home-nav__side"],[3,"category"],[1,"home__left"],[1,"home__right"],[3,"feedsNum","option"],[1,"home__cards"],[4,"ngIf"],["class","overlay",3,"click",4,"ngIf"],[1,"home-nav__icon"],["class","home__card",3,"feedback","commentsLen",4,"ngFor","ngForOf"],["class","message-box",4,"ngIf"],[1,"home__card",3,"feedback","commentsLen"],[1,"message-box"],[1,"message-box__title"],[1,"overlay",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h1",3),e._uU(4,"Frontend Mentor"),e.qZA(),e.TgZ(5,"h2",4),e._uU(6,"Feedback Board"),e.qZA(),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.toggleSide()}),e.YNc(8,q,2,0,"mat-icon",6),e.YNc(9,U,2,0,"mat-icon",6),e.qZA(),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"app-filter-card",8),e.NdJ("category",function(r){return o.filterBy(r,!0)}),e.qZA(),e._UZ(12,"app-roadmap-card"),e.qZA(),e.TgZ(13,"div",9),e._UZ(14,"app-logo-card"),e.TgZ(15,"app-filter-card",8),e.NdJ("category",function(r){return o.filterBy(r)}),e.qZA(),e._UZ(16,"app-roadmap-card"),e.qZA(),e.TgZ(17,"div",10),e.TgZ(18,"app-suggest-bar",11),e.NdJ("option",function(r){return o.sortBy(r)}),e.qZA(),e.TgZ(19,"div",12),e.YNc(20,I,4,5,"ng-container",13),e.ALo(21,"filterBy"),e.qZA(),e.YNc(22,J,1,0,"div",14),e.qZA(),e.qZA()),2&t&&(e.xp6(8),e.Q6J("ngIf",!o.isSideOpen),e.xp6(1),e.Q6J("ngIf",o.isSideOpen),e.xp6(1),e.ekj("home-nav__side-animate",o.isSideOpen),e.xp6(8),e.Q6J("feedsNum",o.feedbackData.length),e.xp6(2),e.Q6J("ngIf",e.Dn7(21,7,o.feedbackData,o.filterItem,"category")),e.xp6(2),e.Q6J("ngIf",o.isSideOpen))},directives:[h.lW,l.O5,v,b,Z,w,p.Hw,l.sg,A.s],pipes:[F.R,S,l.gd],styles:[".home[_ngcontent-%COMP%]{padding:8rem 4rem;position:relative;overflow:hidden;display:flex;grid-gap:3rem;gap:3rem}@media (max-width: 1125px){.home[_ngcontent-%COMP%]{flex-direction:column}}@media (max-width: 777px){.home[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-top:0;grid-gap:0;gap:0}}.home__left[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:2rem;gap:2rem}@media (max-width: 1125px){.home__left[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}}@media (max-width: 777px){.home__left[_ngcontent-%COMP%]{display:none;pointer-events:none}}.home__right[_ngcontent-%COMP%]{flex:1;position:relative;min-height:40rem}.home__cards[_ngcontent-%COMP%]{margin-top:2rem}@media (max-width: 777px){.home__cards[_ngcontent-%COMP%]{padding-left:4rem;padding-right:4rem}}.home__card[_ngcontent-%COMP%]{display:block}.home__card[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2rem}.home-nav[_ngcontent-%COMP%]{height:10rem;padding:0 2.5rem;color:#fff;background:radial-gradient(farthest-side at 0% 100%,#488aef 70%,transparent),radial-gradient(farthest-side at 100% 0%,#da4b8c 15%,#ad1fea 50%,transparent),radial-gradient(farthest-side at 0% 0%,#7ab3f9,transparent),radial-gradient(farthest-side at 100% 100%,#f49f85,transparent);display:flex;justify-content:space-between;align-items:center}@media (max-width: 500px){.home-nav[_ngcontent-%COMP%]{padding:1rem 1.3rem}}@media (min-width: 778px){.home-nav[_ngcontent-%COMP%]{display:none;pointer-events:none}}.home-nav__logo[_ngcontent-%COMP%]{display:flex;flex-direction:column}.home-nav__title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:600}.home-nav__subtitle[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:500}.home-nav__icon[_ngcontent-%COMP%]{color:#fff;font-size:3rem}.home-nav__side[_ngcontent-%COMP%]{padding:2rem;background-color:#f2f4ff;width:30rem;position:absolute;top:10rem;right:0;height:100%;z-index:100;opacity:0;transform:translate(100%);transition:all .4s}.home-nav__side-animate[_ngcontent-%COMP%]{transform:translate(0);opacity:1}.home-nav__side[_ngcontent-%COMP%]   app-filter-card[_ngcontent-%COMP%]{margin-bottom:2rem;display:block}.overlay[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#0006;position:absolute;top:0;left:0}.message-box[_ngcontent-%COMP%]{text-align:center;padding-top:4rem}.message-box__title[_ngcontent-%COMP%]{font-size:2.4rem;font-weight:500;color:var(--color-accent)}.message-box__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}"]}),n})()}];let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(L)],g.Bz]}),n})();var Q=c(4667),Y=c(8088),j=c(3150),R=c(5075);let D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,Q.q,z,Y.Z,j.y,R.z]]}),n})()}}]);
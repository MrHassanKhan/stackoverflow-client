(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{djCJ:function(e,t,i){"use strict";i.r(t),i.d(t,"QuestionModule",function(){return M});var n=i("ofXK"),s=i("tyNb"),o=i("n9Sv"),r=i("R0Ic"),a=i("cp0P"),c=i("eIep"),b=i("fXoL"),l=i("AytR"),u=i("z6cu"),d=i("JIr8"),p=i("tk/3"),g=i("Jho9");let h=(()=>{class e{constructor(e,t){this.httpClient=e,t.available.subscribe(e=>{confirm("Are you Sure you want to update? Current Version: "+e.current+"Available Version : "+e.available)&&t.activateUpdate().then(()=>document.location.reload())})}filterQuestions(e){let t=l.a.baseURL+"questions";return t+=`?page=${e.page}&pageSize=${e.pageSize}`,t+=`&sort=${e.sort}&order=${e.order}`,this.httpClient.get(t+"&site=stackoverflow").pipe(Object(d.a)(this.handleError))}searchQuestions(e){let t=l.a.baseURL+"questions";return t+=`?page=${e.page}&pageSize=${e.pageSize}`,t+=`&sort=${e.sort}&order=${e.order}&intitle=${e.intitle}`,this.httpClient.get(t+"&site=stackoverflow").pipe(Object(d.a)(this.handleError))}getById(e){let t=l.a.baseURL+"questions";return t+=`/${e}?`,this.httpClient.get(t+"site=stackoverflow").pipe(Object(d.a)(this.handleError))}getCommentsByQuestionId(e){let t=l.a.baseURL+"questions";return t+=`/${e}/comments?`,this.httpClient.get(t+"site=stackoverflow").pipe(Object(d.a)(this.handleError))}getAnswersByQuestionId(e){let t=l.a.baseURL+"questions";return t+=`/${e}/answers?`,this.httpClient.get(t+"site=stackoverflow").pipe(Object(d.a)(this.handleError))}getRelatedQuestionsById(e){let t=l.a.baseURL+"questions";return t+=`/${e}/related?`,this.httpClient.get(t+"site=stackoverflow").pipe(Object(d.a)(this.handleError))}handleError(e){var t;let i;return i=e.error instanceof ErrorEvent?`An error occurred: ${e.error.message}`:`Backend returned code ${e.status}: ${null===(t=e.error)||void 0===t?void 0:t.error_message}`,console.error(e),Object(u.a)(i)}}return e.\u0275fac=function(t){return new(t||e)(b.Sb(p.a),b.Sb(g.b))},e.\u0275prov=b.Fb({token:e,factory:e.\u0275fac}),e})();function f(e,t){1&e&&(b.Ob(0,"div",3),b.Ob(1,"div",4),b.Ob(2,"span",5),b.kc(3,"Loading..."),b.Nb(),b.Nb(),b.Nb())}function v(e,t){if(1&e&&(b.Mb(0),b.Ob(1,"div",7),b.Ob(2,"div",13),b.Kb(3,"img",14),b.Ob(4,"h4",15),b.kc(5),b.Nb(),b.Nb(),b.Ob(6,"div",8),b.Ob(7,"div"),b.kc(8),b.Nb(),b.Ob(9,"div"),b.kc(10),b.Nb(),b.Ob(11,"div"),b.kc(12),b.Nb(),b.Nb(),b.Nb(),b.Lb()),2&e){const e=t.$implicit;b.zb(3),b.ac("src",e.owner.profile_image,b.hc),b.zb(2),b.lc(e.owner.display_name),b.zb(3),b.mc("Answer Id : ",e.answer_id,""),b.zb(2),b.mc("Score: ",e.score,""),b.zb(2),b.mc("Is Accepted: ",e.is_accepted,"")}}function O(e,t){if(1&e&&b.jc(0,v,13,5,"ng-container",12),2&e){const e=b.Xb(2);b.ac("ngForOf",e.answerResponse)}}const m=function(e){return[e]};function k(e,t){if(1&e&&(b.Ob(0,"div",16),b.Ob(1,"div"),b.Ob(2,"span",17),b.kc(3),b.Nb(),b.Nb(),b.Ob(4,"div"),b.Ob(5,"a",18),b.kc(6),b.Nb(),b.Nb(),b.Nb()),2&e){const e=t.$implicit;b.zb(3),b.mc(" ",e.answer_count," "),b.zb(2),b.ac("routerLink",b.dc(3,m,"../"+e.question_id)),b.zb(1),b.mc(" ",e.title," ")}}function N(e,t){if(1&e&&(b.Ob(0,"div",6),b.Ob(1,"div",7),b.Ob(2,"h2"),b.kc(3),b.Nb(),b.Ob(4,"div",8),b.Ob(5,"div"),b.kc(6),b.Yb(7,"date"),b.Nb(),b.Ob(8,"div"),b.kc(9),b.Nb(),b.Ob(10,"div"),b.kc(11),b.Nb(),b.Nb(),b.Nb(),b.Ob(12,"h4",9),b.kc(13,"List of Answers"),b.Nb(),b.jc(14,O,1,1,"ng-template",2),b.Nb(),b.Ob(15,"div",10),b.Ob(16,"h5"),b.kc(17,"Related"),b.Nb(),b.Ob(18,"div",7),b.jc(19,k,7,5,"div",11),b.Nb(),b.Nb()),2&e){const e=b.Xb();b.ac("@translate",void 0),b.zb(3),b.lc(e.questionResponse.title),b.zb(3),b.mc("Asked : ",b.Zb(7,8,e.questionResponse.creation_date,"dd/MM/yyyy"),""),b.zb(3),b.mc("Active: ",e.questionResponse.is_answered,""),b.zb(2),b.mc("Viewed: ",e.questionResponse.view_count,""),b.zb(3),b.ac("ngIf",e.answerResponse),b.zb(4),b.ac("@translateup",void 0),b.zb(1),b.ac("ngForOf",e.relatedQuestionResponse)}}let F=(()=>{class e{constructor(e,t,i){this.route=e,this.questionService=t,this.router=i,this.questionId=null,this.loader=!0,this.questionResponse=null,this.relatedQuestionResponse=null,this.answerResponse=null}ngOnInit(){this.route.paramMap.pipe(Object(c.a)(e=>(this.loader=!0,this.questionId=Number(e.get("questionId")),Object(a.a)([this.questionService.getById(this.questionId),this.questionService.getRelatedQuestionsById(this.questionId),this.questionService.getAnswersByQuestionId(this.questionId)])))).subscribe(e=>{this.questionResponse=e[0].items&&e[0].items.length?e[0].items[0]:null,this.relatedQuestionResponse=e[1]&&e[1].items.length?e[1].items:null,this.answerResponse=e[2]&&e[2].items.length?e[2].items:null,this.loader=!1})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(s.a),b.Jb(h),b.Jb(s.b))},e.\u0275cmp=b.Db({type:e,selectors:[["app-question-detail"]],decls:3,vars:2,consts:[[1,"row","pt-5"],["class","d-flex justify-content-center",4,"ngIf"],[3,"ngIf"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-grow",2,"width","3rem","height","3rem"],[1,"visually-hidden"],[1,"col-lg-9"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-between","col-md-5"],[1,"text-muted"],[1,"col-lg-3"],["class","d-flex flex-row",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"d-flex"],["width","40px",1,"rounded-circle",3,"src"],[1,"p-2"],[1,"d-flex","flex-row"],[1,"badge","bg-success","p-2","me-2","mt-1"],["routerLinkActive","active",2,"text-decoration","none",3,"routerLink"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.jc(1,f,4,0,"div",1),b.jc(2,N,20,11,"ng-template",2),b.Nb()),2&e&&(b.zb(1),b.ac("ngIf",t.loader),b.zb(1),b.ac("ngIf",t.questionResponse))},directives:[n.k,n.j,s.d,s.c],pipes:[n.d],styles:[""],data:{animation:[Object(r.j)("translate",[Object(r.g)("void",Object(r.h)({opacity:0,transform:"translateX(-60px)"})),Object(r.i)("void => *, * => void",[Object(r.e)(700)])]),Object(r.j)("translateup",[Object(r.g)("void",Object(r.h)({opacity:0,transform:"translateY(60px)"})),Object(r.i)("void => *, * => void",[Object(r.e)(700)])])]}}),e})();class w{constructor(){this.page=1,this.pageSize=10,this.sort="hot",this.order="asc",this.tagged=null,this.intitle=null}}var z=i("b6KI");function j(e,t){1&e&&(b.Ob(0,"div",9),b.Ob(1,"div",10),b.Ob(2,"span",11),b.kc(3,"Loading..."),b.Nb(),b.Nb(),b.Nb())}function y(e,t){if(1&e&&(b.Ob(0,"div",12),b.kc(1),b.Nb()),2&e){const e=b.Xb();b.zb(1),b.mc(" ",e.errorMessage," ")}}function x(e,t){if(1&e&&(b.Ob(0,"h5",28),b.Ob(1,"span",29),b.kc(2),b.Nb(),b.Nb()),2&e){const e=t.$implicit;b.zb(2),b.lc(e)}}const q=function(e){return[e]};function I(e,t){if(1&e&&(b.Mb(0),b.Ob(1,"div",13),b.Ob(2,"div",14),b.Ob(3,"div",15),b.kc(4),b.Nb(),b.Ob(5,"div",16),b.kc(6,"votes"),b.Nb(),b.Ob(7,"div",15),b.kc(8),b.Nb(),b.Ob(9,"div",16),b.kc(10,"answer"),b.Nb(),b.Ob(11,"div",15),b.kc(12),b.Nb(),b.Ob(13,"div",16),b.kc(14,"views"),b.Nb(),b.Nb(),b.Ob(15,"div",17),b.Ob(16,"h4"),b.Ob(17,"a",18),b.kc(18),b.Nb(),b.Nb(),b.Ob(19,"div"),b.kc(20,"Desc"),b.Nb(),b.Ob(21,"div",3),b.Ob(22,"div",19),b.jc(23,x,3,1,"h5",20),b.Nb(),b.Ob(24,"div",21),b.Ob(25,"div",16),b.kc(26),b.Yb(27,"date"),b.Nb(),b.Ob(28,"div",22),b.Kb(29,"img",23),b.Ob(30,"div",24),b.Ob(31,"div",25),b.kc(32),b.Nb(),b.Ob(33,"div",26),b.kc(34),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Kb(35,"hr",27),b.Lb()),2&e){const e=t.$implicit;b.zb(1),b.ac("@fade",void 0),b.zb(3),b.lc(e.score),b.zb(4),b.lc(e.answer_count),b.zb(4),b.lc(e.view_count),b.zb(5),b.ac("routerLink",b.dc(14,q,"./"+e.question_id)),b.zb(1),b.mc(" ",e.title," "),b.zb(5),b.ac("ngForOf",e.tags),b.zb(3),b.lc(b.Zb(27,11,e.creation_date,"dd/MM/yyyy")),b.zb(3),b.bc("src",e.owner.profile_image,b.hc),b.zb(3),b.mc(" ",e.owner.display_name,""),b.zb(2),b.lc(e.owner.reputation)}}const R=function(e,t){return{"btn-primary":e,"page-link":t}};function C(e,t){if(1&e){const e=b.Pb();b.Ob(0,"li",31),b.Ob(1,"button",34),b.Vb("click",function(){b.gc(e);const i=t.$implicit;return b.Xb(2).paginationClicked(i)}),b.kc(2),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit,i=b.Xb(2);b.zb(1),b.ac("ngClass",b.ec(2,R,i.pageFilter.page===e,i.pageFilter.page!=e)),b.zb(1),b.lc(e)}}function S(e,t){if(1&e){const e=b.Pb();b.Ob(0,"nav",22),b.Ob(1,"ul",30),b.Ob(2,"li",31),b.Ob(3,"button",32),b.Vb("click",function(){b.gc(e);const t=b.Xb();return t.paginationClicked(t.pageFilter.page-1)}),b.kc(4,"Previous"),b.Nb(),b.Nb(),b.jc(5,C,3,5,"li",33),b.Ob(6,"li",31),b.Ob(7,"button",32),b.Vb("click",function(){b.gc(e);const t=b.Xb();return t.paginationClicked(t.pageFilter.page+1)}),b.kc(8,"Next"),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=b.Xb();b.zb(3),b.ac("disabled",1===e.pageFilter.page),b.zb(2),b.ac("ngForOf",e.sliceButtons),b.zb(2),b.ac("disabled",e.pageFilter.page===e.buttonsForPagination)}}const $=function(e,t){return{"btn-outline-primary":e,"btn-primary":t}},L=[{path:"",component:(()=>{class e{constructor(e,t){this.questionService=e,this.mainService=t,this.loader=!0,this.pageFilter=new w,this.buttonsForPagination=[],this.sliceButtons=[]}ngOnInit(){this.sub=this.mainService.getSearch().subscribe(e=>{e?(this.loader=!0,this.pageFilter.intitle=e,this.pageFilter.page=1,this.questionService.searchQuestions(this.pageFilter).subscribe(e=>{this.questionResponse=e;const t=Number(this.questionResponse.quota_max/this.pageFilter.pageSize);this.buttonsForPagination=[];for(let i=1;i<=t;i++)this.buttonsForPagination.push(i);this.sliceButtons=this.buttonsForPagination.slice(this.pageFilter.page-1,this.pageFilter.page+4>this.buttonsForPagination.length?this.buttonsForPagination.length:this.pageFilter.page+4),this.loader=!1},e=>{this.errorMessage=e,setTimeout(()=>{this.errorMessage=null},5e3),this.loader=!1})):this.pageFilter.intitle=null}),this.filter()}ngOnDestroy(){var e;null===(e=this.sub)||void 0===e||e.unsubscribe()}filter(){this.loader=!0,this.pageFilter.page=1,this.search()}search(){this.questionService.filterQuestions(this.pageFilter).subscribe(e=>{this.questionResponse=e;const t=Number(this.questionResponse.quota_max/this.pageFilter.pageSize);this.buttonsForPagination=[];for(let i=1;i<=t;i++)this.buttonsForPagination.push(i);this.sliceButtons=this.buttonsForPagination.slice(this.pageFilter.page-1,this.pageFilter.page+4>this.buttonsForPagination.length?this.buttonsForPagination.length:this.pageFilter.page+4),this.loader=!1},e=>{this.errorMessage=e,setTimeout(()=>{this.errorMessage=null},5e3),this.loader=!1})}paginationClicked(e){this.pageFilter.page=e,this.search()}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(h),b.Jb(z.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-question"]],decls:19,vars:24,consts:[[1,"row","col-md-10","pt-2"],["class","d-flex justify-content-center",4,"ngIf"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"d-flex","justify-content-between"],[1,"mt-1"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn",3,"ngClass","click"],[4,"ngFor","ngForOf"],["class","d-flex",4,"ngIf"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-grow",2,"width","3rem","height","3rem"],[1,"visually-hidden"],["role","alert",1,"alert","alert-danger"],[1,"d-flex","mt-4"],[1,"d-flex","flex-column","p-2"],[1,""],[1,"text-muted"],[1,"flex-fill","d-flex","flex-column","p-2"],["routerLinkActive","active",2,"text-decoration","none",3,"routerLink"],[1,"d-flex","flex-wrap"],["class","pe-1",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","col-md-2"],[1,"d-flex"],["width","40px",3,"src"],[1,"d-flex","flex-column"],[1,"text-primary"],[1,"d-flex","ps-1"],[1,"m-o","p-0"],[1,"pe-1"],[1,"badge","bg-secondary"],[1,"pagination"],[1,"page-item"],[1,"page-link",3,"disabled","click"],["class","page-item",4,"ngFor","ngForOf"],[1,"btn",3,"ngClass","click"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.jc(1,j,4,0,"div",1),b.jc(2,y,2,1,"div",2),b.Ob(3,"div",3),b.Ob(4,"h3",4),b.kc(5,"All Questions"),b.Nb(),b.Ob(6,"div",5),b.Ob(7,"button",6),b.Vb("click",function(){return t.pageFilter.sort="hot",t.filter()}),b.kc(8,"Hot"),b.Nb(),b.Ob(9,"button",6),b.Vb("click",function(){return t.pageFilter.sort="week",t.filter()}),b.kc(10,"Week"),b.Nb(),b.Ob(11,"button",6),b.Vb("click",function(){return t.pageFilter.sort="month",t.filter()}),b.kc(12,"Month"),b.Nb(),b.Ob(13,"button",6),b.Vb("click",function(){return t.pageFilter.sort="creation",t.filter()}),b.kc(14,"Creation"),b.Nb(),b.Ob(15,"button",6),b.Vb("click",function(){return t.pageFilter.sort="votes",t.filter()}),b.kc(16,"Votes"),b.Nb(),b.Nb(),b.Nb(),b.jc(17,I,36,16,"ng-container",7),b.jc(18,S,9,3,"nav",8),b.Nb()),2&e&&(b.zb(1),b.ac("ngIf",t.loader),b.zb(1),b.ac("ngIf",t.errorMessage),b.zb(5),b.ac("ngClass",b.ec(9,$,"hot"!=t.pageFilter.sort,"hot"==t.pageFilter.sort)),b.zb(2),b.ac("ngClass",b.ec(12,$,"week"!=t.pageFilter.sort,"week"==t.pageFilter.sort)),b.zb(2),b.ac("ngClass",b.ec(15,$,"month"!=t.pageFilter.sort,"month"==t.pageFilter.sort)),b.zb(2),b.ac("ngClass",b.ec(18,$,"creation"!=t.pageFilter.sort,"creation"==t.pageFilter.sort)),b.zb(2),b.ac("ngClass",b.ec(21,$,"votes"!=t.pageFilter.sort,"votes"==t.pageFilter.sort)),b.zb(2),b.ac("ngForOf",null==t.questionResponse?null:t.questionResponse.items),b.zb(1),b.ac("ngIf",t.sliceButtons.length))},directives:[n.k,n.i,n.j,s.d,s.c],pipes:[n.d],styles:[""],data:{animation:[Object(r.j)("fade",[Object(r.g)("void",Object(r.h)({opacity:0,transform:"translateY(50px)"})),Object(r.i)("void => *, * => void",[Object(r.e)(700)])])]}}),e})()},{path:":questionId",component:F},{path:"**",component:o.a}];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({imports:[[s.e.forChild(L)],s.e]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({imports:[[n.b]]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({providers:[h],imports:[[n.b,P,_]]}),e})()}}]);
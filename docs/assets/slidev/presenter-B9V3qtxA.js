import{h as Q,i as V,l as W,m as H}from"../modules/unplugin-icons-PK8MCe5g.js";import{d as B,o as r,c as u,i as R,t as I,y as h,D as M,M as J,a7 as A,J as K,a9 as U,a1 as X,b as y,e as o,l as t,k as v,g as D,h as E,x as Y,F as Z,p as $,a as ee}from"../modules/vue-DSkrAvjf.js";import{_ as T,a as te,u as oe,e as ne,c as re,d as se,h as ie,s as ae,j as le,k as ce,l as de,m as ue,n as me}from"../index-kbTZ2Umn.js";import{r as _e,u as pe,o as fe,N as xe,Q as ve,G as Se,S as Ce,C as ge}from"./ContextMenu-CmDsPwZk.js";import{u as ke,b as be,a as he,S as ye}from"./DrawingPreview-Dh1Zdw7W.js";import{N as we,C as Ne}from"./ClicksSlider-Bx242Zm3.js";import{N as Fe}from"./NoteDisplay-Cz98_JiB.js";import ze from"./DrawingControls-Bk0_m4By.js";import{I as Pe}from"./IconButton-ChXg1VrP.js";import"../modules/shiki-CHdixUWa.js";import"./context-CGAMvzgv.js";const Ie=B({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(s,{expose:i}){i();const n=s,{info:e}=ke(n.no),c={props:n,info:e,NoteDisplay:Fe};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function Me(s,i,n,e,c,m){var a,l;return r(),u(e.NoteDisplay,{class:R(e.props.class),note:(a=e.info)==null?void 0:a.note,"note-html":(l=e.info)==null?void 0:l.noteHTML,"clicks-context":n.clicksContext},null,8,["class","note","note-html","clicks-context"])}const De=T(Ie,[["render",Me],["__file","/home/kawa/node/slidev/lecture_fp/node_modules/@slidev/client/internals/NoteStatic.vue"]]),Ee=B({__name:"presenter",setup(s,{expose:i}){i();const n=I();_e(),pe(n);const{clicksContext:e,currentSlideNo:c,currentSlideRoute:m,hasNext:a,nextRoute:l,slides:_,queryClicks:p,getPrimaryClicks:f,total:S}=te(),{isDrawing:N}=be();oe({title:`Presenter - ${ae}`});const q=I(!1),{timer:L,resetTimer:O}=ne(),F=h(()=>_.value.map(g=>re(g))),x=h(()=>e.value.current<e.value.total?[m.value,e.value.current+1]:a.value?[l.value,0]:null),C=h(()=>x.value&&F.value[x.value[0].no-1]);M([m,p],()=>{C.value&&(C.value.current=x.value[1])},{immediate:!0});const j=J();A(()=>{const g=n.value.querySelector("#slide-content"),P=K(U()),G=X();M(()=>{if(!G.value||N.value||!ie.value)return;const d=g.getBoundingClientRect(),k=(P.x-d.left)/d.width*100,b=(P.y-d.top)/d.height*100;if(!(k<0||k>100||b<0||b>100))return{x:k,y:b}},d=>{se.cursor=d})});const z={main:n,clicksContext:e,currentSlideNo:c,currentSlideRoute:m,hasNext:a,nextRoute:l,slides:_,queryClicks:p,getPrimaryClicks:f,total:S,isDrawing:N,notesEditing:q,timer:L,resetTimer:O,clicksCtxMap:F,nextFrame:x,nextFrameClicksCtx:C,SideEditor:j,get decreasePresenterFontSize(){return le},get increasePresenterFontSize(){return ce},get presenterLayout(){return de},get presenterNotesFontSize(){return ue},get showEditor(){return me},get onContextMenu(){return fe},SlideWrapper:he,SlideContainer:ye,NavControls:xe,QuickOverview:ve,NoteEditable:we,NoteStatic:De,Goto:Se,SlidesShow:Ce,DrawingControls:ze,IconButton:Pe,ClicksSlider:Ne,ContextMenu:ge};return Object.defineProperty(z,"__isScriptSetup",{enumerable:!1,value:!0}),z}}),w=s=>($("data-v-d0ba6bbb"),s=s(),ee(),s),Be={class:"bg-main h-full slidev-presenter"},Re={ref:"main",class:"relative grid-section main flex flex-col"},Te=w(()=>o("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),qe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Le=w(()=>o("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Oe={key:0,class:"grid-section note of-auto"},je={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ge={class:"border-t border-main py-1 px-2 text-sm"},Qe={class:"grid-section bottom flex"},Ve=w(()=>o("div",{"flex-auto":""},null,-1)),We={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He={class:"progress-bar"};function Je(s,i,n,e,c,m){var f;const a=Q,l=V,_=W,p=H;return r(),y(Z,null,[o("div",Be,[o("div",{class:R(["grid-container",`layout${e.presenterLayout}`])},[o("div",Re,[t(e.SlideContainer,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e.onContextMenu},{default:v(()=>[t(e.SlidesShow,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(r(),u(e.ClicksSlider,{key:(f=e.currentSlideRoute)==null?void 0:f.no,"clicks-context":e.getPrimaryClicks(e.currentSlideRoute),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Te],512),o("div",qe,[e.nextFrame&&e.nextFrameClicksCtx?(r(),u(e.SlideContainer,{key:"next"},{default:v(()=>[(r(),u(e.SlideWrapper,{key:e.nextFrame[0].no,"clicks-context":e.nextFrameClicksCtx,route:e.nextFrame[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):D("v-if",!0),Le]),e.SideEditor&&e.showEditor?(r(),y("div",Oe,[t(e.SideEditor)])):(r(),y("div",je,[(r(),u(e.NoteStatic,{key:`static-${e.currentSlideNo}`,no:e.currentSlideNo,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:E({fontSize:`${e.presenterNotesFontSize}em`}),"clicks-context":e.clicksContext},null,8,["no","style","clicks-context"])),o("div",Ge,[t(e.IconButton,{title:"Increase font size",onClick:e.increasePresenterFontSize},{default:v(()=>[t(a)]),_:1},8,["onClick"]),t(e.IconButton,{title:"Decrease font size",onClick:e.decreasePresenterFontSize},{default:v(()=>[t(l)]),_:1},8,["onClick"]),D("v-if",!0)])])),o("div",Qe,[t(e.NavControls,{persist:!0}),Ve,o("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[2]||(i[2]=(...S)=>e.resetTimer&&e.resetTimer(...S))},[t(_,{class:"absolute"}),t(p,{class:"absolute opacity-0"})]),o("div",We,Y(e.timer),1)]),(r(),u(e.DrawingControls,{key:2}))],2),o("div",He,[o("div",{class:"progress h-3px bg-primary transition-all",style:E({width:`${(e.currentSlideNo-1)/(e.total-1)*100+1}%`})},null,4)])]),t(e.Goto),t(e.QuickOverview),t(e.ContextMenu)],64)}const rt=T(Ee,[["render",Je],["__scopeId","data-v-d0ba6bbb"],["__file","/home/kawa/node/slidev/lecture_fp/node_modules/@slidev/client/pages/presenter.vue"]]);export{rt as default};
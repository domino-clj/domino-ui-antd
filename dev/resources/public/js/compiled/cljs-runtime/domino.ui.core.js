goog.provide('domino.ui.core');
goog.require('cljs.core');
goog.require('domino.core');
goog.require('domino.ui.view');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.ui.core","init","domino.ui.core/init",-1069189527),(function (_,p__37521){
var vec__37522 = p__37521;
var seq__37523 = cljs.core.seq(vec__37522);
var first__37524 = cljs.core.first(seq__37523);
var seq__37523__$1 = cljs.core.next(seq__37523);
var ___$1 = first__37524;
var first__37524__$1 = cljs.core.first(seq__37523__$1);
var seq__37523__$2 = cljs.core.next(seq__37523__$1);
var schema = first__37524__$1;
var vec__37525 = seq__37523__$2;
var initial_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37525,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(domino.core.initialize.cljs$core$IFn$_invoke$arity$2(schema,(function (){var or__4131__auto__ = initial_state;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),new cljs.core.Keyword("domino.ui.core","views","domino.ui.core/views",-2086628172),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__37522,seq__37523,first__37524,seq__37523__$1,___$1,first__37524__$1,seq__37523__$2,schema,vec__37525,initial_state){
return (function (views,p__37528){
var vec__37529 = p__37528;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(views,id,domino.ui.view.render(view));
});})(vec__37522,seq__37523,first__37524,seq__37523__$1,___$1,first__37524__$1,seq__37523__$2,schema,vec__37525,initial_state))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(schema)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.ui.core","update-component-state","domino.ui.core/update-component-state",-1702217194),(function (ctx,p__37532){
var vec__37533 = p__37532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533,(1),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","components","domino.ui.core/components",-1163430557),id], null),cljs.core.merge,state);
}));
var G__37536_37589 = new cljs.core.Keyword("domino.ui.core","component","domino.ui.core/component",294435679);
var G__37537_37590 = ((function (G__37536_37589){
return (function (ctx,p__37538){
var vec__37539 = p__37538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37539,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37539,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","components","domino.ui.core/components",-1163430557),id], null));
});})(G__37536_37589))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37536_37589,G__37537_37590) : re_frame.core.reg_sub.call(null,G__37536_37589,G__37537_37590));
var G__37542_37593 = new cljs.core.Keyword("domino.ui.core","components","domino.ui.core/components",-1163430557);
var G__37543_37594 = ((function (G__37542_37593){
return (function (ctx,_){
return new cljs.core.Keyword("domino.ui.core","components","domino.ui.core/components",-1163430557).cljs$core$IFn$_invoke$arity$1(ctx);
});})(G__37542_37593))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37542_37593,G__37543_37594) : re_frame.core.reg_sub.call(null,G__37542_37593,G__37543_37594));
var G__37547_37596 = new cljs.core.Keyword("domino.ui.core","ctx","domino.ui.core/ctx",902115755);
var G__37548_37597 = ((function (G__37547_37596){
return (function (ctx,_){
return ctx;
});})(G__37547_37596))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37547_37596,G__37548_37597) : re_frame.core.reg_sub.call(null,G__37547_37596,G__37548_37597));
var G__37549_37598 = new cljs.core.Keyword("domino.ui.core","model","domino.ui.core/model",655159684);
var G__37550_37599 = ((function (G__37549_37598){
return (function (ctx,_){
return new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570).cljs$core$IFn$_invoke$arity$1(ctx);
});})(G__37549_37598))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37549_37598,G__37550_37599) : re_frame.core.reg_sub.call(null,G__37549_37598,G__37550_37599));
var G__37551_37600 = new cljs.core.Keyword("domino.ui.core","views","domino.ui.core/views",-2086628172);
var G__37552_37601 = ((function (G__37551_37600){
return (function (ctx,_){
return new cljs.core.Keyword("domino.ui.core","views","domino.ui.core/views",-2086628172).cljs$core$IFn$_invoke$arity$1(ctx);
});})(G__37551_37600))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37551_37600,G__37552_37601) : re_frame.core.reg_sub.call(null,G__37551_37600,G__37552_37601));
var G__37553_37602 = new cljs.core.Keyword("domino.ui.core","view","domino.ui.core/view",-2144609905);
var G__37554_37603 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__37555_37604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","views","domino.ui.core/views",-2086628172)], null);
var G__37556_37605 = ((function (G__37553_37602,G__37554_37603,G__37555_37604){
return (function (views,p__37557){
var vec__37558 = p__37557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37558,(0),null);
var view_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37558,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(views,view_id);
});})(G__37553_37602,G__37554_37603,G__37555_37604))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__37553_37602,G__37554_37603,G__37555_37604,G__37556_37605) : re_frame.core.reg_sub.call(null,G__37553_37602,G__37554_37603,G__37555_37604,G__37556_37605));
var G__37561_37606 = new cljs.core.Keyword("domino.ui.core","db","domino.ui.core/db",-278191978);
var G__37562_37607 = ((function (G__37561_37606){
return (function (ctx,_){
return new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684).cljs$core$IFn$_invoke$arity$1(ctx);
});})(G__37561_37606))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37561_37606,G__37562_37607) : re_frame.core.reg_sub.call(null,G__37561_37606,G__37562_37607));
var G__37563_37608 = new cljs.core.Keyword("domino.ui.core","path","domino.ui.core/path",-1575272429);
var G__37564_37609 = ((function (G__37563_37608){
return (function (ctx,p__37565){
var vec__37566 = p__37565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684).cljs$core$IFn$_invoke$arity$1(ctx),path);
});})(G__37563_37608))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37563_37608,G__37564_37609) : re_frame.core.reg_sub.call(null,G__37563_37608,G__37564_37609));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.ui.core","id","domino.ui.core/id",-236083199),(function (ctx,p__37569){
var vec__37570 = p__37569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(2),null);
return domino.core.transact(ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->path","id->path",460976127),id], null)),value], null)], null));
}));
var G__37573_37613 = new cljs.core.Keyword("domino.ui.core","id","domino.ui.core/id",-236083199);
var G__37574_37614 = ((function (G__37573_37613){
return (function (ctx,p__37575){
var vec__37576 = p__37575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37576,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37576,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->path","id->path",460976127),id], null)));
});})(G__37573_37613))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37573_37613,G__37574_37614) : re_frame.core.reg_sub.call(null,G__37573_37613,G__37574_37614));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("domino.ui.core","trigger","domino.ui.core/trigger",1501288016),(function (ctx,p__37579){
var vec__37580 = p__37579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(1),null);
return domino.core.trigger_events(ctx,ids);
}));

//# sourceMappingURL=domino.ui.core.js.map

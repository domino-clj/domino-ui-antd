goog.provide('domino.ui.antd.input');
goog.require('cljs.core');
goog.require('syn_antd.input');
goog.require('domino.ui.core');
goog.require('domino.ui.component');
goog.require('syn_antd.reagent_utils');
goog.require('re_frame.core');
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input","input",556931961),(function (p__37876){
var map__37877 = p__37876;
var map__37877__$1 = (((((!((map__37877 == null))))?(((((map__37877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37877):map__37877);
var opts = map__37877__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return ((function (map__37877,map__37877__$1,opts,id,disabled,value,on_change){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__4131__auto__ = disabled;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref((function (){var G__37879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","component","domino.ui.core/component",294435679),id,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37879) : re_frame.core.subscribe.call(null,G__37879));
})());
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.deref((function (){var G__37880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","id","domino.ui.core/id",-236083199),id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37880) : re_frame.core.subscribe.call(null,G__37880));
})());
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){var or__4131__auto__ = on_change;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__37877,map__37877__$1,opts,id,disabled,value,on_change){
return (function (p1__37875_SHARP_){
var G__37881 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","id","domino.ui.core/id",-236083199),id,p1__37875_SHARP_.target.value], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__37881) : re_frame.core.dispatch_sync.call(null,G__37881));
});
;})(or__4131__auto__,map__37877,map__37877__$1,opts,id,disabled,value,on_change))
}
})()], 0))], null);
});
;})(map__37877,map__37877__$1,opts,id,disabled,value,on_change))
}));
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-group","input-group",1160595830),(function (opts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input_group,opts], null);
});
}));
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-password","input-password",-281690229),(function (opts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input_password,opts], null);
});
}));
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-search","input-search",103044227),(function (opts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input_search,opts], null);
});
}));
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-text-area","input-text-area",111684099),(function (opts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.input.input_text_area,opts], null);
});
}));

//# sourceMappingURL=domino.ui.antd.input.js.map

goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__36869){
var map__36870 = p__36869;
var map__36870__$1 = (((((!((map__36870 == null))))?(((((map__36870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36870):map__36870);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__36872_36899 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__36873_36900 = null;
var count__36874_36901 = (0);
var i__36875_36902 = (0);
while(true){
if((i__36875_36902 < count__36874_36901)){
var vec__36886_36903 = chunk__36873_36900.cljs$core$IIndexed$_nth$arity$2(null,i__36875_36902);
var k_36904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886_36903,(0),null);
var cb_36905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886_36903,(1),null);
try{var G__36890_36906 = cljs.core.deref(re_frame.trace.traces);
(cb_36905.cljs$core$IFn$_invoke$arity$1 ? cb_36905.cljs$core$IFn$_invoke$arity$1(G__36890_36906) : cb_36905.call(null,G__36890_36906));
}catch (e36889){var e_36907 = e36889;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36904,"while storing",cljs.core.deref(re_frame.trace.traces),e_36907], 0));
}

var G__36908 = seq__36872_36899;
var G__36909 = chunk__36873_36900;
var G__36910 = count__36874_36901;
var G__36911 = (i__36875_36902 + (1));
seq__36872_36899 = G__36908;
chunk__36873_36900 = G__36909;
count__36874_36901 = G__36910;
i__36875_36902 = G__36911;
continue;
} else {
var temp__5720__auto___36912 = cljs.core.seq(seq__36872_36899);
if(temp__5720__auto___36912){
var seq__36872_36913__$1 = temp__5720__auto___36912;
if(cljs.core.chunked_seq_QMARK_(seq__36872_36913__$1)){
var c__4550__auto___36914 = cljs.core.chunk_first(seq__36872_36913__$1);
var G__36915 = cljs.core.chunk_rest(seq__36872_36913__$1);
var G__36916 = c__4550__auto___36914;
var G__36917 = cljs.core.count(c__4550__auto___36914);
var G__36918 = (0);
seq__36872_36899 = G__36915;
chunk__36873_36900 = G__36916;
count__36874_36901 = G__36917;
i__36875_36902 = G__36918;
continue;
} else {
var vec__36891_36919 = cljs.core.first(seq__36872_36913__$1);
var k_36920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891_36919,(0),null);
var cb_36921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891_36919,(1),null);
try{var G__36895_36922 = cljs.core.deref(re_frame.trace.traces);
(cb_36921.cljs$core$IFn$_invoke$arity$1 ? cb_36921.cljs$core$IFn$_invoke$arity$1(G__36895_36922) : cb_36921.call(null,G__36895_36922));
}catch (e36894){var e_36923 = e36894;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36920,"while storing",cljs.core.deref(re_frame.trace.traces),e_36923], 0));
}

var G__36924 = cljs.core.next(seq__36872_36913__$1);
var G__36925 = null;
var G__36926 = (0);
var G__36927 = (0);
seq__36872_36899 = G__36924;
chunk__36873_36900 = G__36925;
count__36874_36901 = G__36926;
i__36875_36902 = G__36927;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

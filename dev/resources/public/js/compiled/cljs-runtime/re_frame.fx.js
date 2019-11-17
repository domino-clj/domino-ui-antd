goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37135 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37136 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37136;

try{try{var seq__37139 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37140 = null;
var count__37141 = (0);
var i__37142 = (0);
while(true){
if((i__37142 < count__37141)){
var vec__37152 = chunk__37140.cljs$core$IIndexed$_nth$arity$2(null,i__37142);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152,(1),null);
var temp__5718__auto___37240 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___37240)){
var effect_fn_37242 = temp__5718__auto___37240;
(effect_fn_37242.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37242.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37242.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37243 = seq__37139;
var G__37244 = chunk__37140;
var G__37245 = count__37141;
var G__37246 = (i__37142 + (1));
seq__37139 = G__37243;
chunk__37140 = G__37244;
count__37141 = G__37245;
i__37142 = G__37246;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37139);
if(temp__5720__auto__){
var seq__37139__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37139__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37139__$1);
var G__37248 = cljs.core.chunk_rest(seq__37139__$1);
var G__37249 = c__4550__auto__;
var G__37250 = cljs.core.count(c__4550__auto__);
var G__37251 = (0);
seq__37139 = G__37248;
chunk__37140 = G__37249;
count__37141 = G__37250;
i__37142 = G__37251;
continue;
} else {
var vec__37157 = cljs.core.first(seq__37139__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37157,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37157,(1),null);
var temp__5718__auto___37252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___37252)){
var effect_fn_37253 = temp__5718__auto___37252;
(effect_fn_37253.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37253.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37253.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37256 = cljs.core.next(seq__37139__$1);
var G__37257 = null;
var G__37258 = (0);
var G__37259 = (0);
seq__37139 = G__37256;
chunk__37140 = G__37257;
count__37141 = G__37258;
i__37142 = G__37259;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36849__auto___37260 = re_frame.interop.now();
var duration__36850__auto___37261 = (end__36849__auto___37260 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36850__auto___37261,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36849__auto___37260);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37135;
}} else {
var seq__37160 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37161 = null;
var count__37162 = (0);
var i__37163 = (0);
while(true){
if((i__37163 < count__37162)){
var vec__37170 = chunk__37161.cljs$core$IIndexed$_nth$arity$2(null,i__37163);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(1),null);
var temp__5718__auto___37263 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___37263)){
var effect_fn_37264 = temp__5718__auto___37263;
(effect_fn_37264.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37264.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37264.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37266 = seq__37160;
var G__37267 = chunk__37161;
var G__37268 = count__37162;
var G__37269 = (i__37163 + (1));
seq__37160 = G__37266;
chunk__37161 = G__37267;
count__37162 = G__37268;
i__37163 = G__37269;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37160);
if(temp__5720__auto__){
var seq__37160__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37160__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37160__$1);
var G__37270 = cljs.core.chunk_rest(seq__37160__$1);
var G__37271 = c__4550__auto__;
var G__37272 = cljs.core.count(c__4550__auto__);
var G__37273 = (0);
seq__37160 = G__37270;
chunk__37161 = G__37271;
count__37162 = G__37272;
i__37163 = G__37273;
continue;
} else {
var vec__37175 = cljs.core.first(seq__37160__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37175,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37175,(1),null);
var temp__5718__auto___37274 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___37274)){
var effect_fn_37275 = temp__5718__auto___37274;
(effect_fn_37275.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37275.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37275.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37277 = cljs.core.next(seq__37160__$1);
var G__37278 = null;
var G__37279 = (0);
var G__37280 = (0);
seq__37160 = G__37277;
chunk__37161 = G__37278;
count__37162 = G__37279;
i__37163 = G__37280;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37181 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37182 = null;
var count__37183 = (0);
var i__37184 = (0);
while(true){
if((i__37184 < count__37183)){
var map__37199 = chunk__37182.cljs$core$IIndexed$_nth$arity$2(null,i__37184);
var map__37199__$1 = (((((!((map__37199 == null))))?(((((map__37199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37199):map__37199);
var effect = map__37199__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37181,chunk__37182,count__37183,i__37184,map__37199,map__37199__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37181,chunk__37182,count__37183,i__37184,map__37199,map__37199__$1,effect,ms,dispatch))
,ms);
}


var G__37286 = seq__37181;
var G__37287 = chunk__37182;
var G__37288 = count__37183;
var G__37289 = (i__37184 + (1));
seq__37181 = G__37286;
chunk__37182 = G__37287;
count__37183 = G__37288;
i__37184 = G__37289;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37181);
if(temp__5720__auto__){
var seq__37181__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37181__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37181__$1);
var G__37291 = cljs.core.chunk_rest(seq__37181__$1);
var G__37292 = c__4550__auto__;
var G__37293 = cljs.core.count(c__4550__auto__);
var G__37294 = (0);
seq__37181 = G__37291;
chunk__37182 = G__37292;
count__37183 = G__37293;
i__37184 = G__37294;
continue;
} else {
var map__37204 = cljs.core.first(seq__37181__$1);
var map__37204__$1 = (((((!((map__37204 == null))))?(((((map__37204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37204):map__37204);
var effect = map__37204__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37181,chunk__37182,count__37183,i__37184,map__37204,map__37204__$1,effect,ms,dispatch,seq__37181__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37181,chunk__37182,count__37183,i__37184,map__37204,map__37204__$1,effect,ms,dispatch,seq__37181__$1,temp__5720__auto__))
,ms);
}


var G__37296 = cljs.core.next(seq__37181__$1);
var G__37297 = null;
var G__37298 = (0);
var G__37299 = (0);
seq__37181 = G__37296;
chunk__37182 = G__37297;
count__37183 = G__37298;
i__37184 = G__37299;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__37212 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37213 = null;
var count__37214 = (0);
var i__37215 = (0);
while(true){
if((i__37215 < count__37214)){
var event = chunk__37213.cljs$core$IIndexed$_nth$arity$2(null,i__37215);
re_frame.router.dispatch(event);


var G__37302 = seq__37212;
var G__37303 = chunk__37213;
var G__37304 = count__37214;
var G__37305 = (i__37215 + (1));
seq__37212 = G__37302;
chunk__37213 = G__37303;
count__37214 = G__37304;
i__37215 = G__37305;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37212);
if(temp__5720__auto__){
var seq__37212__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37212__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37212__$1);
var G__37314 = cljs.core.chunk_rest(seq__37212__$1);
var G__37315 = c__4550__auto__;
var G__37316 = cljs.core.count(c__4550__auto__);
var G__37317 = (0);
seq__37212 = G__37314;
chunk__37213 = G__37315;
count__37214 = G__37316;
i__37215 = G__37317;
continue;
} else {
var event = cljs.core.first(seq__37212__$1);
re_frame.router.dispatch(event);


var G__37321 = cljs.core.next(seq__37212__$1);
var G__37323 = null;
var G__37324 = (0);
var G__37325 = (0);
seq__37212 = G__37321;
chunk__37213 = G__37323;
count__37214 = G__37324;
i__37215 = G__37325;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__37226 = cljs.core.seq(value);
var chunk__37227 = null;
var count__37228 = (0);
var i__37229 = (0);
while(true){
if((i__37229 < count__37228)){
var event = chunk__37227.cljs$core$IIndexed$_nth$arity$2(null,i__37229);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37333 = seq__37226;
var G__37334 = chunk__37227;
var G__37335 = count__37228;
var G__37336 = (i__37229 + (1));
seq__37226 = G__37333;
chunk__37227 = G__37334;
count__37228 = G__37335;
i__37229 = G__37336;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37226);
if(temp__5720__auto__){
var seq__37226__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37226__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37226__$1);
var G__37337 = cljs.core.chunk_rest(seq__37226__$1);
var G__37338 = c__4550__auto__;
var G__37339 = cljs.core.count(c__4550__auto__);
var G__37340 = (0);
seq__37226 = G__37337;
chunk__37227 = G__37338;
count__37228 = G__37339;
i__37229 = G__37340;
continue;
} else {
var event = cljs.core.first(seq__37226__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37341 = cljs.core.next(seq__37226__$1);
var G__37342 = null;
var G__37343 = (0);
var G__37344 = (0);
seq__37226 = G__37341;
chunk__37227 = G__37342;
count__37228 = G__37343;
i__37229 = G__37344;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28164){
var map__28165 = p__28164;
var map__28165__$1 = (((((!((map__28165 == null))))?(((((map__28165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28165):map__28165);
var m = map__28165__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28165__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28170_28353 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28171_28354 = null;
var count__28172_28355 = (0);
var i__28173_28356 = (0);
while(true){
if((i__28173_28356 < count__28172_28355)){
var f_28358 = chunk__28171_28354.cljs$core$IIndexed$_nth$arity$2(null,i__28173_28356);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28358], 0));


var G__28359 = seq__28170_28353;
var G__28360 = chunk__28171_28354;
var G__28361 = count__28172_28355;
var G__28362 = (i__28173_28356 + (1));
seq__28170_28353 = G__28359;
chunk__28171_28354 = G__28360;
count__28172_28355 = G__28361;
i__28173_28356 = G__28362;
continue;
} else {
var temp__5720__auto___28363 = cljs.core.seq(seq__28170_28353);
if(temp__5720__auto___28363){
var seq__28170_28364__$1 = temp__5720__auto___28363;
if(cljs.core.chunked_seq_QMARK_(seq__28170_28364__$1)){
var c__4550__auto___28365 = cljs.core.chunk_first(seq__28170_28364__$1);
var G__28366 = cljs.core.chunk_rest(seq__28170_28364__$1);
var G__28367 = c__4550__auto___28365;
var G__28368 = cljs.core.count(c__4550__auto___28365);
var G__28369 = (0);
seq__28170_28353 = G__28366;
chunk__28171_28354 = G__28367;
count__28172_28355 = G__28368;
i__28173_28356 = G__28369;
continue;
} else {
var f_28370 = cljs.core.first(seq__28170_28364__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28370], 0));


var G__28371 = cljs.core.next(seq__28170_28364__$1);
var G__28372 = null;
var G__28373 = (0);
var G__28374 = (0);
seq__28170_28353 = G__28371;
chunk__28171_28354 = G__28372;
count__28172_28355 = G__28373;
i__28173_28356 = G__28374;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28376 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28376], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28376)))?cljs.core.second(arglists_28376):arglists_28376)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28190_28383 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28191_28384 = null;
var count__28192_28385 = (0);
var i__28193_28386 = (0);
while(true){
if((i__28193_28386 < count__28192_28385)){
var vec__28210_28387 = chunk__28191_28384.cljs$core$IIndexed$_nth$arity$2(null,i__28193_28386);
var name_28388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28210_28387,(0),null);
var map__28213_28389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28210_28387,(1),null);
var map__28213_28390__$1 = (((((!((map__28213_28389 == null))))?(((((map__28213_28389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28213_28389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28213_28389):map__28213_28389);
var doc_28391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28213_28390__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28213_28390__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28388], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28392], 0));

if(cljs.core.truth_(doc_28391)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28391], 0));
} else {
}


var G__28397 = seq__28190_28383;
var G__28398 = chunk__28191_28384;
var G__28399 = count__28192_28385;
var G__28400 = (i__28193_28386 + (1));
seq__28190_28383 = G__28397;
chunk__28191_28384 = G__28398;
count__28192_28385 = G__28399;
i__28193_28386 = G__28400;
continue;
} else {
var temp__5720__auto___28401 = cljs.core.seq(seq__28190_28383);
if(temp__5720__auto___28401){
var seq__28190_28402__$1 = temp__5720__auto___28401;
if(cljs.core.chunked_seq_QMARK_(seq__28190_28402__$1)){
var c__4550__auto___28403 = cljs.core.chunk_first(seq__28190_28402__$1);
var G__28404 = cljs.core.chunk_rest(seq__28190_28402__$1);
var G__28405 = c__4550__auto___28403;
var G__28406 = cljs.core.count(c__4550__auto___28403);
var G__28407 = (0);
seq__28190_28383 = G__28404;
chunk__28191_28384 = G__28405;
count__28192_28385 = G__28406;
i__28193_28386 = G__28407;
continue;
} else {
var vec__28215_28409 = cljs.core.first(seq__28190_28402__$1);
var name_28410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28215_28409,(0),null);
var map__28218_28411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28215_28409,(1),null);
var map__28218_28412__$1 = (((((!((map__28218_28411 == null))))?(((((map__28218_28411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28218_28411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28218_28411):map__28218_28411);
var doc_28413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28218_28412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28218_28412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28410], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28414], 0));

if(cljs.core.truth_(doc_28413)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28413], 0));
} else {
}


var G__28418 = cljs.core.next(seq__28190_28402__$1);
var G__28419 = null;
var G__28420 = (0);
var G__28421 = (0);
seq__28190_28383 = G__28418;
chunk__28191_28384 = G__28419;
count__28192_28385 = G__28420;
i__28193_28386 = G__28421;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__28225 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28226 = null;
var count__28227 = (0);
var i__28228 = (0);
while(true){
if((i__28228 < count__28227)){
var role = chunk__28226.cljs$core$IIndexed$_nth$arity$2(null,i__28228);
var temp__5720__auto___28422__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28422__$1)){
var spec_28423 = temp__5720__auto___28422__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28423)], 0));
} else {
}


var G__28424 = seq__28225;
var G__28425 = chunk__28226;
var G__28426 = count__28227;
var G__28427 = (i__28228 + (1));
seq__28225 = G__28424;
chunk__28226 = G__28425;
count__28227 = G__28426;
i__28228 = G__28427;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__28225);
if(temp__5720__auto____$1){
var seq__28225__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28225__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28225__$1);
var G__28430 = cljs.core.chunk_rest(seq__28225__$1);
var G__28431 = c__4550__auto__;
var G__28432 = cljs.core.count(c__4550__auto__);
var G__28433 = (0);
seq__28225 = G__28430;
chunk__28226 = G__28431;
count__28227 = G__28432;
i__28228 = G__28433;
continue;
} else {
var role = cljs.core.first(seq__28225__$1);
var temp__5720__auto___28440__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28440__$2)){
var spec_28441 = temp__5720__auto___28440__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28441)], 0));
} else {
}


var G__28444 = cljs.core.next(seq__28225__$1);
var G__28445 = null;
var G__28446 = (0);
var G__28447 = (0);
seq__28225 = G__28444;
chunk__28226 = G__28445;
count__28227 = G__28446;
i__28228 = G__28447;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28449 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__28450 = cljs.core.ex_cause(t);
via = G__28449;
t = G__28450;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28245 = datafied_throwable;
var map__28245__$1 = (((((!((map__28245 == null))))?(((((map__28245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28245):map__28245);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28245__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28245__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28245__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28246 = cljs.core.last(via);
var map__28246__$1 = (((((!((map__28246 == null))))?(((((map__28246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28246):map__28246);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28246__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28247 = data;
var map__28247__$1 = (((((!((map__28247 == null))))?(((((map__28247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28247):map__28247);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28247__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28247__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28247__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28248 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__28248__$1 = (((((!((map__28248 == null))))?(((((map__28248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28248):map__28248);
var top_data = map__28248__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__28256 = phase;
var G__28256__$1 = (((G__28256 instanceof cljs.core.Keyword))?G__28256.fqn:null);
switch (G__28256__$1) {
case "read-source":
var map__28257 = data;
var map__28257__$1 = (((((!((map__28257 == null))))?(((((map__28257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28257):map__28257);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28257__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28257__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28263 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__28263__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28263,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28263);
var G__28263__$2 = (cljs.core.truth_((function (){var fexpr__28265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28265.cljs$core$IFn$_invoke$arity$1 ? fexpr__28265.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28265.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28263__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28263__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28263__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28266 = top_data;
var G__28266__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28266,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28266);
var G__28266__$2 = (cljs.core.truth_((function (){var fexpr__28267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28267.cljs$core$IFn$_invoke$arity$1 ? fexpr__28267.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28267.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28266__$1);
var G__28266__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28266__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28266__$2);
var G__28266__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28266__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28266__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28266__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28266__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28280 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28280,(3),null);
var G__28283 = top_data;
var G__28283__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28283,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28283);
var G__28283__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28283__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28283__$1);
var G__28283__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28283__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28283__$2);
var G__28283__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28283__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28283__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28283__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28283__$4;
}

break;
case "execution":
var vec__28284 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__28284,source__$1,method,file,line,G__28256,G__28256__$1,map__28245,map__28245__$1,via,trace,phase,map__28246,map__28246__$1,type,message,data,map__28247,map__28247__$1,problems,fn,caller,map__28248,map__28248__$1,top_data,source){
return (function (p1__28244_SHARP_){
var or__4131__auto__ = (p1__28244_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__28290 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28290.cljs$core$IFn$_invoke$arity$1 ? fexpr__28290.cljs$core$IFn$_invoke$arity$1(p1__28244_SHARP_) : fexpr__28290.call(null,p1__28244_SHARP_));
}
});})(vec__28284,source__$1,method,file,line,G__28256,G__28256__$1,map__28245,map__28245__$1,via,trace,phase,map__28246,map__28246__$1,type,message,data,map__28247,map__28247__$1,problems,fn,caller,map__28248,map__28248__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28291 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28291__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28291,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28291);
var G__28291__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28291__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28291__$1);
var G__28291__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28291__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28291__$2);
var G__28291__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28291__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28291__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28291__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28291__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28256__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28294){
var map__28295 = p__28294;
var map__28295__$1 = (((((!((map__28295 == null))))?(((((map__28295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28295):map__28295);
var triage_data = map__28295__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28297 = phase;
var G__28297__$1 = (((G__28297 instanceof cljs.core.Keyword))?G__28297.fqn:null);
switch (G__28297__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__28298 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__28299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28300 = loc;
var G__28301 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28304_28517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28305_28520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28306_28521 = true;
var _STAR_print_fn_STAR__temp_val__28307_28522 = ((function (_STAR_print_newline_STAR__orig_val__28304_28517,_STAR_print_fn_STAR__orig_val__28305_28520,_STAR_print_newline_STAR__temp_val__28306_28521,sb__4661__auto__,G__28298,G__28299,G__28300,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28304_28517,_STAR_print_fn_STAR__orig_val__28305_28520,_STAR_print_newline_STAR__temp_val__28306_28521,sb__4661__auto__,G__28298,G__28299,G__28300,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28306_28521;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28307_28522;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28304_28517,_STAR_print_fn_STAR__orig_val__28305_28520,_STAR_print_newline_STAR__temp_val__28306_28521,_STAR_print_fn_STAR__temp_val__28307_28522,sb__4661__auto__,G__28298,G__28299,G__28300,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28304_28517,_STAR_print_fn_STAR__orig_val__28305_28520,_STAR_print_newline_STAR__temp_val__28306_28521,_STAR_print_fn_STAR__temp_val__28307_28522,sb__4661__auto__,G__28298,G__28299,G__28300,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28292_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28292_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28304_28517,_STAR_print_fn_STAR__orig_val__28305_28520,_STAR_print_newline_STAR__temp_val__28306_28521,_STAR_print_fn_STAR__temp_val__28307_28522,sb__4661__auto__,G__28298,G__28299,G__28300,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28304_28517,_STAR_print_fn_STAR__orig_val__28305_28520,_STAR_print_newline_STAR__temp_val__28306_28521,_STAR_print_fn_STAR__temp_val__28307_28522,sb__4661__auto__,G__28298,G__28299,G__28300,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28305_28520;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28304_28517;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28298,G__28299,G__28300,G__28301) : format.call(null,G__28298,G__28299,G__28300,G__28301));

break;
case "macroexpansion":
var G__28309 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__28310 = cause_type;
var G__28311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28312 = loc;
var G__28313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28309,G__28310,G__28311,G__28312,G__28313) : format.call(null,G__28309,G__28310,G__28311,G__28312,G__28313));

break;
case "compile-syntax-check":
var G__28314 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__28315 = cause_type;
var G__28316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28317 = loc;
var G__28318 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28314,G__28315,G__28316,G__28317,G__28318) : format.call(null,G__28314,G__28315,G__28316,G__28317,G__28318));

break;
case "compilation":
var G__28319 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__28320 = cause_type;
var G__28321 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28322 = loc;
var G__28323 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28319,G__28320,G__28321,G__28322,G__28323) : format.call(null,G__28319,G__28320,G__28321,G__28322,G__28323));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28324 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28325 = symbol;
var G__28326 = loc;
var G__28327 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28328_28556 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28329_28557 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28330_28558 = true;
var _STAR_print_fn_STAR__temp_val__28331_28559 = ((function (_STAR_print_newline_STAR__orig_val__28328_28556,_STAR_print_fn_STAR__orig_val__28329_28557,_STAR_print_newline_STAR__temp_val__28330_28558,sb__4661__auto__,G__28324,G__28325,G__28326,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28328_28556,_STAR_print_fn_STAR__orig_val__28329_28557,_STAR_print_newline_STAR__temp_val__28330_28558,sb__4661__auto__,G__28324,G__28325,G__28326,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28330_28558;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28331_28559;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28328_28556,_STAR_print_fn_STAR__orig_val__28329_28557,_STAR_print_newline_STAR__temp_val__28330_28558,_STAR_print_fn_STAR__temp_val__28331_28559,sb__4661__auto__,G__28324,G__28325,G__28326,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28328_28556,_STAR_print_fn_STAR__orig_val__28329_28557,_STAR_print_newline_STAR__temp_val__28330_28558,_STAR_print_fn_STAR__temp_val__28331_28559,sb__4661__auto__,G__28324,G__28325,G__28326,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28293_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28293_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28328_28556,_STAR_print_fn_STAR__orig_val__28329_28557,_STAR_print_newline_STAR__temp_val__28330_28558,_STAR_print_fn_STAR__temp_val__28331_28559,sb__4661__auto__,G__28324,G__28325,G__28326,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28328_28556,_STAR_print_fn_STAR__orig_val__28329_28557,_STAR_print_newline_STAR__temp_val__28330_28558,_STAR_print_fn_STAR__temp_val__28331_28559,sb__4661__auto__,G__28324,G__28325,G__28326,G__28297,G__28297__$1,loc,class_name,simple_class,cause_type,format,map__28295,map__28295__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28329_28557;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28328_28556;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28324,G__28325,G__28326,G__28327) : format.call(null,G__28324,G__28325,G__28326,G__28327));
} else {
var G__28332 = "Execution error%s at %s(%s).\n%s\n";
var G__28333 = cause_type;
var G__28334 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28335 = loc;
var G__28336 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28332,G__28333,G__28334,G__28335,G__28336) : format.call(null,G__28332,G__28333,G__28334,G__28335,G__28336));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28297__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

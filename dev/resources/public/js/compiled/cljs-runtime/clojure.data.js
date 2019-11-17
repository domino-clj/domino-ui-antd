goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30920){
var vec__30921 = p__30920;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30921,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__30936 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30936,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30936,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30936,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30942 = arguments.length;
switch (G__30942) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__30954_31028 = clojure.data.equality_partition;
var G__30955_31029 = "null";
var G__30956_31030 = ((function (G__30954_31028,G__30955_31029){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30954_31028,G__30955_31029))
;
goog.object.set(G__30954_31028,G__30955_31029,G__30956_31030);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30958_31031 = clojure.data.equality_partition;
var G__30959_31032 = "string";
var G__30960_31033 = ((function (G__30958_31031,G__30959_31032){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30958_31031,G__30959_31032))
;
goog.object.set(G__30958_31031,G__30959_31032,G__30960_31033);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30962_31034 = clojure.data.equality_partition;
var G__30963_31035 = "number";
var G__30964_31036 = ((function (G__30962_31034,G__30963_31035){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30962_31034,G__30963_31035))
;
goog.object.set(G__30962_31034,G__30963_31035,G__30964_31036);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30965_31038 = clojure.data.equality_partition;
var G__30966_31039 = "array";
var G__30967_31040 = ((function (G__30965_31038,G__30966_31039){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__30965_31038,G__30966_31039))
;
goog.object.set(G__30965_31038,G__30966_31039,G__30967_31040);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30968_31042 = clojure.data.equality_partition;
var G__30969_31043 = "function";
var G__30970_31044 = ((function (G__30968_31042,G__30969_31043){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30968_31042,G__30969_31043))
;
goog.object.set(G__30968_31042,G__30969_31043,G__30970_31044);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30971_31045 = clojure.data.equality_partition;
var G__30972_31046 = "boolean";
var G__30973_31047 = ((function (G__30971_31045,G__30972_31046){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30971_31045,G__30972_31046))
;
goog.object.set(G__30971_31045,G__30972_31046,G__30973_31047);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30974_31048 = clojure.data.equality_partition;
var G__30975_31049 = "_";
var G__30976_31050 = ((function (G__30974_31048,G__30975_31049){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__30974_31048,G__30975_31049))
;
goog.object.set(G__30974_31048,G__30975_31049,G__30976_31050);
goog.object.set(clojure.data.Diff,"null",true);

var G__30982_31053 = clojure.data.diff_similar;
var G__30983_31054 = "null";
var G__30984_31055 = ((function (G__30982_31053,G__30983_31054){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30982_31053,G__30983_31054))
;
goog.object.set(G__30982_31053,G__30983_31054,G__30984_31055);

goog.object.set(clojure.data.Diff,"string",true);

var G__30985_31056 = clojure.data.diff_similar;
var G__30986_31057 = "string";
var G__30987_31058 = ((function (G__30985_31056,G__30986_31057){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30985_31056,G__30986_31057))
;
goog.object.set(G__30985_31056,G__30986_31057,G__30987_31058);

goog.object.set(clojure.data.Diff,"number",true);

var G__30988_31065 = clojure.data.diff_similar;
var G__30989_31066 = "number";
var G__30990_31067 = ((function (G__30988_31065,G__30989_31066){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30988_31065,G__30989_31066))
;
goog.object.set(G__30988_31065,G__30989_31066,G__30990_31067);

goog.object.set(clojure.data.Diff,"array",true);

var G__30993_31068 = clojure.data.diff_similar;
var G__30994_31069 = "array";
var G__30995_31070 = ((function (G__30993_31068,G__30994_31069){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30993_31068,G__30994_31069))
;
goog.object.set(G__30993_31068,G__30994_31069,G__30995_31070);

goog.object.set(clojure.data.Diff,"function",true);

var G__30998_31074 = clojure.data.diff_similar;
var G__30999_31075 = "function";
var G__31000_31076 = ((function (G__30998_31074,G__30999_31075){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30998_31074,G__30999_31075))
;
goog.object.set(G__30998_31074,G__30999_31075,G__31000_31076);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__31003_31077 = clojure.data.diff_similar;
var G__31004_31078 = "boolean";
var G__31005_31079 = ((function (G__31003_31077,G__31004_31078){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__31003_31077,G__31004_31078))
;
goog.object.set(G__31003_31077,G__31004_31078,G__31005_31079);

goog.object.set(clojure.data.Diff,"_",true);

var G__31006_31080 = clojure.data.diff_similar;
var G__31007_31081 = "_";
var G__31008_31082 = ((function (G__31006_31080,G__31007_31081){
return (function (a,b){
var fexpr__31013 = (function (){var G__31014 = clojure.data.equality_partition(a);
var G__31014__$1 = (((G__31014 instanceof cljs.core.Keyword))?G__31014.fqn:null);
switch (G__31014__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31014__$1)].join('')));

}
})();
return (fexpr__31013.cljs$core$IFn$_invoke$arity$2 ? fexpr__31013.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__31013.call(null,a,b));
});})(G__31006_31080,G__31007_31081))
;
goog.object.set(G__31006_31080,G__31007_31081,G__31008_31082);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map

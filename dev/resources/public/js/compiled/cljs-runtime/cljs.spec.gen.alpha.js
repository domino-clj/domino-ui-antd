goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25915 = arguments.length;
var i__4731__auto___25916 = (0);
while(true){
if((i__4731__auto___25916 < len__4730__auto___25915)){
args__4736__auto__.push((arguments[i__4731__auto___25916]));

var G__25917 = (i__4731__auto___25916 + (1));
i__4731__auto___25916 = G__25917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq25675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25675));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25920 = arguments.length;
var i__4731__auto___25921 = (0);
while(true){
if((i__4731__auto___25921 < len__4730__auto___25920)){
args__4736__auto__.push((arguments[i__4731__auto___25921]));

var G__25922 = (i__4731__auto___25921 + (1));
i__4731__auto___25921 = G__25922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq25682){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25682));
});

var g_QMARK__25923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_25924 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__25923){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
});})(g_QMARK__25923))
,null));
var mkg_25925 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__25923,g_25924){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
});})(g_QMARK__25923,g_25924))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__25923,g_25924,mkg_25925){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__25689 = cljs.core.deref(g_QMARK__25923);
return (fexpr__25689.cljs$core$IFn$_invoke$arity$1 ? fexpr__25689.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25689.call(null,x));
});})(g_QMARK__25923,g_25924,mkg_25925))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__25923,g_25924,mkg_25925){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__25690 = cljs.core.deref(mkg_25925);
return (fexpr__25690.cljs$core$IFn$_invoke$arity$1 ? fexpr__25690.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__25690.call(null,gfn));
});})(g_QMARK__25923,g_25924,mkg_25925))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__25923,g_25924,mkg_25925){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__25691 = cljs.core.deref(g_25924);
return (fexpr__25691.cljs$core$IFn$_invoke$arity$1 ? fexpr__25691.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__25691.call(null,generator));
});})(g_QMARK__25923,g_25924,mkg_25925))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__25692 = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__25692.cljs$core$IFn$_invoke$arity$2 ? fexpr__25692.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__25692.call(null,rnd,size));
}));
});
var g__11314__auto___25929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__11314__auto___25929){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25930 = arguments.length;
var i__4731__auto___25931 = (0);
while(true){
if((i__4731__auto___25931 < len__4730__auto___25930)){
args__4736__auto__.push((arguments[i__4731__auto___25931]));

var G__25932 = (i__4731__auto___25931 + (1));
i__4731__auto___25931 = G__25932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25929))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25929){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25929),args);
});})(g__11314__auto___25929))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__11314__auto___25929){
return (function (seq25693){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25693));
});})(g__11314__auto___25929))
;


var g__11314__auto___25935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__11314__auto___25935){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25936 = arguments.length;
var i__4731__auto___25937 = (0);
while(true){
if((i__4731__auto___25937 < len__4730__auto___25936)){
args__4736__auto__.push((arguments[i__4731__auto___25937]));

var G__25938 = (i__4731__auto___25937 + (1));
i__4731__auto___25937 = G__25938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25935))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25935){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25935),args);
});})(g__11314__auto___25935))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__11314__auto___25935){
return (function (seq25699){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25699));
});})(g__11314__auto___25935))
;


var g__11314__auto___25941 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__11314__auto___25941){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25945 = arguments.length;
var i__4731__auto___25946 = (0);
while(true){
if((i__4731__auto___25946 < len__4730__auto___25945)){
args__4736__auto__.push((arguments[i__4731__auto___25946]));

var G__25947 = (i__4731__auto___25946 + (1));
i__4731__auto___25946 = G__25947;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25941))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25941){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25941),args);
});})(g__11314__auto___25941))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__11314__auto___25941){
return (function (seq25700){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25700));
});})(g__11314__auto___25941))
;


var g__11314__auto___25950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__11314__auto___25950){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25953 = arguments.length;
var i__4731__auto___25954 = (0);
while(true){
if((i__4731__auto___25954 < len__4730__auto___25953)){
args__4736__auto__.push((arguments[i__4731__auto___25954]));

var G__25955 = (i__4731__auto___25954 + (1));
i__4731__auto___25954 = G__25955;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25950))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25950){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25950),args);
});})(g__11314__auto___25950))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__11314__auto___25950){
return (function (seq25701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25701));
});})(g__11314__auto___25950))
;


var g__11314__auto___25956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__11314__auto___25956){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25957 = arguments.length;
var i__4731__auto___25958 = (0);
while(true){
if((i__4731__auto___25958 < len__4730__auto___25957)){
args__4736__auto__.push((arguments[i__4731__auto___25958]));

var G__25959 = (i__4731__auto___25958 + (1));
i__4731__auto___25958 = G__25959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25956))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25956){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25956),args);
});})(g__11314__auto___25956))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__11314__auto___25956){
return (function (seq25702){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25702));
});})(g__11314__auto___25956))
;


var g__11314__auto___25961 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__11314__auto___25961){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25973 = arguments.length;
var i__4731__auto___25974 = (0);
while(true){
if((i__4731__auto___25974 < len__4730__auto___25973)){
args__4736__auto__.push((arguments[i__4731__auto___25974]));

var G__25975 = (i__4731__auto___25974 + (1));
i__4731__auto___25974 = G__25975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25961))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25961){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25961),args);
});})(g__11314__auto___25961))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__11314__auto___25961){
return (function (seq25705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25705));
});})(g__11314__auto___25961))
;


var g__11314__auto___25976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__11314__auto___25976){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25977 = arguments.length;
var i__4731__auto___25978 = (0);
while(true){
if((i__4731__auto___25978 < len__4730__auto___25977)){
args__4736__auto__.push((arguments[i__4731__auto___25978]));

var G__25979 = (i__4731__auto___25978 + (1));
i__4731__auto___25978 = G__25979;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25976))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25976){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25976),args);
});})(g__11314__auto___25976))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__11314__auto___25976){
return (function (seq25708){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25708));
});})(g__11314__auto___25976))
;


var g__11314__auto___25985 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__11314__auto___25985){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25986 = arguments.length;
var i__4731__auto___25987 = (0);
while(true){
if((i__4731__auto___25987 < len__4730__auto___25986)){
args__4736__auto__.push((arguments[i__4731__auto___25987]));

var G__25988 = (i__4731__auto___25987 + (1));
i__4731__auto___25987 = G__25988;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25985))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25985){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25985),args);
});})(g__11314__auto___25985))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__11314__auto___25985){
return (function (seq25713){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25713));
});})(g__11314__auto___25985))
;


var g__11314__auto___25989 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__11314__auto___25989){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25990 = arguments.length;
var i__4731__auto___25991 = (0);
while(true){
if((i__4731__auto___25991 < len__4730__auto___25990)){
args__4736__auto__.push((arguments[i__4731__auto___25991]));

var G__25992 = (i__4731__auto___25991 + (1));
i__4731__auto___25991 = G__25992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25989))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25989){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25989),args);
});})(g__11314__auto___25989))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__11314__auto___25989){
return (function (seq25717){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25717));
});})(g__11314__auto___25989))
;


var g__11314__auto___25993 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__11314__auto___25993){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25998 = arguments.length;
var i__4731__auto___25999 = (0);
while(true){
if((i__4731__auto___25999 < len__4730__auto___25998)){
args__4736__auto__.push((arguments[i__4731__auto___25999]));

var G__26000 = (i__4731__auto___25999 + (1));
i__4731__auto___25999 = G__26000;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___25993))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___25993){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___25993),args);
});})(g__11314__auto___25993))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__11314__auto___25993){
return (function (seq25722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25722));
});})(g__11314__auto___25993))
;


var g__11314__auto___26007 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__11314__auto___26007){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26013 = arguments.length;
var i__4731__auto___26014 = (0);
while(true){
if((i__4731__auto___26014 < len__4730__auto___26013)){
args__4736__auto__.push((arguments[i__4731__auto___26014]));

var G__26015 = (i__4731__auto___26014 + (1));
i__4731__auto___26014 = G__26015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26007))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26007){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26007),args);
});})(g__11314__auto___26007))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__11314__auto___26007){
return (function (seq25733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25733));
});})(g__11314__auto___26007))
;


var g__11314__auto___26019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__11314__auto___26019){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26022 = arguments.length;
var i__4731__auto___26023 = (0);
while(true){
if((i__4731__auto___26023 < len__4730__auto___26022)){
args__4736__auto__.push((arguments[i__4731__auto___26023]));

var G__26024 = (i__4731__auto___26023 + (1));
i__4731__auto___26023 = G__26024;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26019))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26019){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26019),args);
});})(g__11314__auto___26019))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__11314__auto___26019){
return (function (seq25736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25736));
});})(g__11314__auto___26019))
;


var g__11314__auto___26034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__11314__auto___26034){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26036 = arguments.length;
var i__4731__auto___26037 = (0);
while(true){
if((i__4731__auto___26037 < len__4730__auto___26036)){
args__4736__auto__.push((arguments[i__4731__auto___26037]));

var G__26039 = (i__4731__auto___26037 + (1));
i__4731__auto___26037 = G__26039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26034))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26034){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26034),args);
});})(g__11314__auto___26034))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__11314__auto___26034){
return (function (seq25738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25738));
});})(g__11314__auto___26034))
;


var g__11314__auto___26048 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__11314__auto___26048){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26052 = arguments.length;
var i__4731__auto___26053 = (0);
while(true){
if((i__4731__auto___26053 < len__4730__auto___26052)){
args__4736__auto__.push((arguments[i__4731__auto___26053]));

var G__26058 = (i__4731__auto___26053 + (1));
i__4731__auto___26053 = G__26058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26048))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26048){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26048),args);
});})(g__11314__auto___26048))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__11314__auto___26048){
return (function (seq25744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25744));
});})(g__11314__auto___26048))
;


var g__11314__auto___26063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__11314__auto___26063){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26065 = arguments.length;
var i__4731__auto___26066 = (0);
while(true){
if((i__4731__auto___26066 < len__4730__auto___26065)){
args__4736__auto__.push((arguments[i__4731__auto___26066]));

var G__26067 = (i__4731__auto___26066 + (1));
i__4731__auto___26066 = G__26067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26063))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26063){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26063),args);
});})(g__11314__auto___26063))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__11314__auto___26063){
return (function (seq25752){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25752));
});})(g__11314__auto___26063))
;


var g__11314__auto___26072 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__11314__auto___26072){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26074 = arguments.length;
var i__4731__auto___26075 = (0);
while(true){
if((i__4731__auto___26075 < len__4730__auto___26074)){
args__4736__auto__.push((arguments[i__4731__auto___26075]));

var G__26077 = (i__4731__auto___26075 + (1));
i__4731__auto___26075 = G__26077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26072))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26072){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26072),args);
});})(g__11314__auto___26072))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__11314__auto___26072){
return (function (seq25754){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25754));
});})(g__11314__auto___26072))
;


var g__11314__auto___26084 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__11314__auto___26084){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26089 = arguments.length;
var i__4731__auto___26090 = (0);
while(true){
if((i__4731__auto___26090 < len__4730__auto___26089)){
args__4736__auto__.push((arguments[i__4731__auto___26090]));

var G__26091 = (i__4731__auto___26090 + (1));
i__4731__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26084))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26084){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26084),args);
});})(g__11314__auto___26084))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11314__auto___26084){
return (function (seq25765){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25765));
});})(g__11314__auto___26084))
;


var g__11314__auto___26096 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__11314__auto___26096){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26101 = arguments.length;
var i__4731__auto___26102 = (0);
while(true){
if((i__4731__auto___26102 < len__4730__auto___26101)){
args__4736__auto__.push((arguments[i__4731__auto___26102]));

var G__26103 = (i__4731__auto___26102 + (1));
i__4731__auto___26102 = G__26103;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26096))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26096){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26096),args);
});})(g__11314__auto___26096))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__11314__auto___26096){
return (function (seq25769){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25769));
});})(g__11314__auto___26096))
;


var g__11314__auto___26109 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__11314__auto___26109){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26114 = arguments.length;
var i__4731__auto___26115 = (0);
while(true){
if((i__4731__auto___26115 < len__4730__auto___26114)){
args__4736__auto__.push((arguments[i__4731__auto___26115]));

var G__26116 = (i__4731__auto___26115 + (1));
i__4731__auto___26115 = G__26116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26109))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26109){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26109),args);
});})(g__11314__auto___26109))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__11314__auto___26109){
return (function (seq25772){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25772));
});})(g__11314__auto___26109))
;


var g__11314__auto___26125 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__11314__auto___26125){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26131 = arguments.length;
var i__4731__auto___26133 = (0);
while(true){
if((i__4731__auto___26133 < len__4730__auto___26131)){
args__4736__auto__.push((arguments[i__4731__auto___26133]));

var G__26135 = (i__4731__auto___26133 + (1));
i__4731__auto___26133 = G__26135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11314__auto___26125))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11314__auto___26125){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11314__auto___26125),args);
});})(g__11314__auto___26125))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__11314__auto___26125){
return (function (seq25780){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25780));
});})(g__11314__auto___26125))
;

var g__11319__auto___26140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__11319__auto___26140){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26151 = arguments.length;
var i__4731__auto___26152 = (0);
while(true){
if((i__4731__auto___26152 < len__4730__auto___26151)){
args__4736__auto__.push((arguments[i__4731__auto___26152]));

var G__26153 = (i__4731__auto___26152 + (1));
i__4731__auto___26152 = G__26153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26140))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26140){
return (function (args){
return cljs.core.deref(g__11319__auto___26140);
});})(g__11319__auto___26140))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__11319__auto___26140){
return (function (seq25783){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25783));
});})(g__11319__auto___26140))
;


var g__11319__auto___26156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__11319__auto___26156){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26160 = arguments.length;
var i__4731__auto___26161 = (0);
while(true){
if((i__4731__auto___26161 < len__4730__auto___26160)){
args__4736__auto__.push((arguments[i__4731__auto___26161]));

var G__26163 = (i__4731__auto___26161 + (1));
i__4731__auto___26161 = G__26163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26156))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26156){
return (function (args){
return cljs.core.deref(g__11319__auto___26156);
});})(g__11319__auto___26156))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__11319__auto___26156){
return (function (seq25785){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25785));
});})(g__11319__auto___26156))
;


var g__11319__auto___26204 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__11319__auto___26204){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26205 = arguments.length;
var i__4731__auto___26206 = (0);
while(true){
if((i__4731__auto___26206 < len__4730__auto___26205)){
args__4736__auto__.push((arguments[i__4731__auto___26206]));

var G__26207 = (i__4731__auto___26206 + (1));
i__4731__auto___26206 = G__26207;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26204))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26204){
return (function (args){
return cljs.core.deref(g__11319__auto___26204);
});})(g__11319__auto___26204))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__11319__auto___26204){
return (function (seq25798){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25798));
});})(g__11319__auto___26204))
;


var g__11319__auto___26211 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__11319__auto___26211){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26214 = arguments.length;
var i__4731__auto___26215 = (0);
while(true){
if((i__4731__auto___26215 < len__4730__auto___26214)){
args__4736__auto__.push((arguments[i__4731__auto___26215]));

var G__26216 = (i__4731__auto___26215 + (1));
i__4731__auto___26215 = G__26216;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26211))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26211){
return (function (args){
return cljs.core.deref(g__11319__auto___26211);
});})(g__11319__auto___26211))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__11319__auto___26211){
return (function (seq25803){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25803));
});})(g__11319__auto___26211))
;


var g__11319__auto___26217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__11319__auto___26217){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26220 = arguments.length;
var i__4731__auto___26221 = (0);
while(true){
if((i__4731__auto___26221 < len__4730__auto___26220)){
args__4736__auto__.push((arguments[i__4731__auto___26221]));

var G__26222 = (i__4731__auto___26221 + (1));
i__4731__auto___26221 = G__26222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26217))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26217){
return (function (args){
return cljs.core.deref(g__11319__auto___26217);
});})(g__11319__auto___26217))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__11319__auto___26217){
return (function (seq25828){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25828));
});})(g__11319__auto___26217))
;


var g__11319__auto___26223 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__11319__auto___26223){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26226 = arguments.length;
var i__4731__auto___26227 = (0);
while(true){
if((i__4731__auto___26227 < len__4730__auto___26226)){
args__4736__auto__.push((arguments[i__4731__auto___26227]));

var G__26228 = (i__4731__auto___26227 + (1));
i__4731__auto___26227 = G__26228;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26223))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26223){
return (function (args){
return cljs.core.deref(g__11319__auto___26223);
});})(g__11319__auto___26223))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__11319__auto___26223){
return (function (seq25838){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25838));
});})(g__11319__auto___26223))
;


var g__11319__auto___26230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__11319__auto___26230){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26231 = arguments.length;
var i__4731__auto___26232 = (0);
while(true){
if((i__4731__auto___26232 < len__4730__auto___26231)){
args__4736__auto__.push((arguments[i__4731__auto___26232]));

var G__26234 = (i__4731__auto___26232 + (1));
i__4731__auto___26232 = G__26234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26230))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26230){
return (function (args){
return cljs.core.deref(g__11319__auto___26230);
});})(g__11319__auto___26230))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__11319__auto___26230){
return (function (seq25840){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25840));
});})(g__11319__auto___26230))
;


var g__11319__auto___26238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__11319__auto___26238){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26240 = arguments.length;
var i__4731__auto___26241 = (0);
while(true){
if((i__4731__auto___26241 < len__4730__auto___26240)){
args__4736__auto__.push((arguments[i__4731__auto___26241]));

var G__26242 = (i__4731__auto___26241 + (1));
i__4731__auto___26241 = G__26242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26238))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26238){
return (function (args){
return cljs.core.deref(g__11319__auto___26238);
});})(g__11319__auto___26238))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__11319__auto___26238){
return (function (seq25847){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25847));
});})(g__11319__auto___26238))
;


var g__11319__auto___26244 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__11319__auto___26244){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26249 = arguments.length;
var i__4731__auto___26251 = (0);
while(true){
if((i__4731__auto___26251 < len__4730__auto___26249)){
args__4736__auto__.push((arguments[i__4731__auto___26251]));

var G__26252 = (i__4731__auto___26251 + (1));
i__4731__auto___26251 = G__26252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26244))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26244){
return (function (args){
return cljs.core.deref(g__11319__auto___26244);
});})(g__11319__auto___26244))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__11319__auto___26244){
return (function (seq25850){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25850));
});})(g__11319__auto___26244))
;


var g__11319__auto___26254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__11319__auto___26254){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26260 = arguments.length;
var i__4731__auto___26261 = (0);
while(true){
if((i__4731__auto___26261 < len__4730__auto___26260)){
args__4736__auto__.push((arguments[i__4731__auto___26261]));

var G__26262 = (i__4731__auto___26261 + (1));
i__4731__auto___26261 = G__26262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26254))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26254){
return (function (args){
return cljs.core.deref(g__11319__auto___26254);
});})(g__11319__auto___26254))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__11319__auto___26254){
return (function (seq25856){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25856));
});})(g__11319__auto___26254))
;


var g__11319__auto___26268 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__11319__auto___26268){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26270 = arguments.length;
var i__4731__auto___26271 = (0);
while(true){
if((i__4731__auto___26271 < len__4730__auto___26270)){
args__4736__auto__.push((arguments[i__4731__auto___26271]));

var G__26273 = (i__4731__auto___26271 + (1));
i__4731__auto___26271 = G__26273;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26268))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26268){
return (function (args){
return cljs.core.deref(g__11319__auto___26268);
});})(g__11319__auto___26268))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__11319__auto___26268){
return (function (seq25861){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25861));
});})(g__11319__auto___26268))
;


var g__11319__auto___26279 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__11319__auto___26279){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26280 = arguments.length;
var i__4731__auto___26281 = (0);
while(true){
if((i__4731__auto___26281 < len__4730__auto___26280)){
args__4736__auto__.push((arguments[i__4731__auto___26281]));

var G__26282 = (i__4731__auto___26281 + (1));
i__4731__auto___26281 = G__26282;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26279))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26279){
return (function (args){
return cljs.core.deref(g__11319__auto___26279);
});})(g__11319__auto___26279))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__11319__auto___26279){
return (function (seq25864){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25864));
});})(g__11319__auto___26279))
;


var g__11319__auto___26286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__11319__auto___26286){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26287 = arguments.length;
var i__4731__auto___26288 = (0);
while(true){
if((i__4731__auto___26288 < len__4730__auto___26287)){
args__4736__auto__.push((arguments[i__4731__auto___26288]));

var G__26289 = (i__4731__auto___26288 + (1));
i__4731__auto___26288 = G__26289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26286))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26286){
return (function (args){
return cljs.core.deref(g__11319__auto___26286);
});})(g__11319__auto___26286))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__11319__auto___26286){
return (function (seq25869){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25869));
});})(g__11319__auto___26286))
;


var g__11319__auto___26308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__11319__auto___26308){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26315 = arguments.length;
var i__4731__auto___26316 = (0);
while(true){
if((i__4731__auto___26316 < len__4730__auto___26315)){
args__4736__auto__.push((arguments[i__4731__auto___26316]));

var G__26317 = (i__4731__auto___26316 + (1));
i__4731__auto___26316 = G__26317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26308))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26308){
return (function (args){
return cljs.core.deref(g__11319__auto___26308);
});})(g__11319__auto___26308))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__11319__auto___26308){
return (function (seq25874){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25874));
});})(g__11319__auto___26308))
;


var g__11319__auto___26318 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__11319__auto___26318){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26331 = arguments.length;
var i__4731__auto___26332 = (0);
while(true){
if((i__4731__auto___26332 < len__4730__auto___26331)){
args__4736__auto__.push((arguments[i__4731__auto___26332]));

var G__26333 = (i__4731__auto___26332 + (1));
i__4731__auto___26332 = G__26333;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26318))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26318){
return (function (args){
return cljs.core.deref(g__11319__auto___26318);
});})(g__11319__auto___26318))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__11319__auto___26318){
return (function (seq25876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25876));
});})(g__11319__auto___26318))
;


var g__11319__auto___26337 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__11319__auto___26337){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26338 = arguments.length;
var i__4731__auto___26339 = (0);
while(true){
if((i__4731__auto___26339 < len__4730__auto___26338)){
args__4736__auto__.push((arguments[i__4731__auto___26339]));

var G__26340 = (i__4731__auto___26339 + (1));
i__4731__auto___26339 = G__26340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26337))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26337){
return (function (args){
return cljs.core.deref(g__11319__auto___26337);
});})(g__11319__auto___26337))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__11319__auto___26337){
return (function (seq25881){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25881));
});})(g__11319__auto___26337))
;


var g__11319__auto___26341 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__11319__auto___26341){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26346 = arguments.length;
var i__4731__auto___26347 = (0);
while(true){
if((i__4731__auto___26347 < len__4730__auto___26346)){
args__4736__auto__.push((arguments[i__4731__auto___26347]));

var G__26348 = (i__4731__auto___26347 + (1));
i__4731__auto___26347 = G__26348;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26341))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26341){
return (function (args){
return cljs.core.deref(g__11319__auto___26341);
});})(g__11319__auto___26341))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__11319__auto___26341){
return (function (seq25882){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25882));
});})(g__11319__auto___26341))
;


var g__11319__auto___26349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__11319__auto___26349){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26350 = arguments.length;
var i__4731__auto___26351 = (0);
while(true){
if((i__4731__auto___26351 < len__4730__auto___26350)){
args__4736__auto__.push((arguments[i__4731__auto___26351]));

var G__26352 = (i__4731__auto___26351 + (1));
i__4731__auto___26351 = G__26352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26349))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26349){
return (function (args){
return cljs.core.deref(g__11319__auto___26349);
});})(g__11319__auto___26349))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__11319__auto___26349){
return (function (seq25887){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25887));
});})(g__11319__auto___26349))
;


var g__11319__auto___26357 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__11319__auto___26357){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26360 = arguments.length;
var i__4731__auto___26361 = (0);
while(true){
if((i__4731__auto___26361 < len__4730__auto___26360)){
args__4736__auto__.push((arguments[i__4731__auto___26361]));

var G__26362 = (i__4731__auto___26361 + (1));
i__4731__auto___26361 = G__26362;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26357))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26357){
return (function (args){
return cljs.core.deref(g__11319__auto___26357);
});})(g__11319__auto___26357))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__11319__auto___26357){
return (function (seq25892){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25892));
});})(g__11319__auto___26357))
;


var g__11319__auto___26365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__11319__auto___26365){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26366 = arguments.length;
var i__4731__auto___26367 = (0);
while(true){
if((i__4731__auto___26367 < len__4730__auto___26366)){
args__4736__auto__.push((arguments[i__4731__auto___26367]));

var G__26368 = (i__4731__auto___26367 + (1));
i__4731__auto___26367 = G__26368;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26365))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26365){
return (function (args){
return cljs.core.deref(g__11319__auto___26365);
});})(g__11319__auto___26365))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__11319__auto___26365){
return (function (seq25894){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25894));
});})(g__11319__auto___26365))
;


var g__11319__auto___26372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__11319__auto___26372){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26377 = arguments.length;
var i__4731__auto___26378 = (0);
while(true){
if((i__4731__auto___26378 < len__4730__auto___26377)){
args__4736__auto__.push((arguments[i__4731__auto___26378]));

var G__26386 = (i__4731__auto___26378 + (1));
i__4731__auto___26378 = G__26386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__11319__auto___26372))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11319__auto___26372){
return (function (args){
return cljs.core.deref(g__11319__auto___26372);
});})(g__11319__auto___26372))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__11319__auto___26372){
return (function (seq25898){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25898));
});})(g__11319__auto___26372))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26391 = arguments.length;
var i__4731__auto___26392 = (0);
while(true){
if((i__4731__auto___26392 < len__4730__auto___26391)){
args__4736__auto__.push((arguments[i__4731__auto___26392]));

var G__26393 = (i__4731__auto___26392 + (1));
i__4731__auto___26392 = G__26393;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__25900_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__25900_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq25901){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25901));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace(ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable()], 0)),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__25907_SHARP_){
return (new Date(p1__25907_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__25906_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25906_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid()], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=cljs.spec.gen.alpha.js.map

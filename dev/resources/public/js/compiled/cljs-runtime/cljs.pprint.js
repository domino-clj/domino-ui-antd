goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30563 = arguments.length;
var i__4731__auto___30564 = (0);
while(true){
if((i__4731__auto___30564 < len__4730__auto___30563)){
args__4736__auto__.push((arguments[i__4731__auto___30564]));

var G__30569 = (i__4731__auto___30564 + (1));
i__4731__auto___30564 = G__30569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq26758){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26758));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30577 = arguments.length;
var i__4731__auto___30578 = (0);
while(true){
if((i__4731__auto___30578 < len__4730__auto___30577)){
args__4736__auto__.push((arguments[i__4731__auto___30578]));

var G__30579 = (i__4731__auto___30578 + (1));
i__4731__auto___30578 = G__30579;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq26763){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26763));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__26766 = cljs.core._EQ_;
var expr__26767 = c;
if(cljs.core.truth_((function (){var G__26769 = "\b";
var G__26770 = expr__26767;
return (pred__26766.cljs$core$IFn$_invoke$arity$2 ? pred__26766.cljs$core$IFn$_invoke$arity$2(G__26769,G__26770) : pred__26766.call(null,G__26769,G__26770));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__26771 = "\t";
var G__26772 = expr__26767;
return (pred__26766.cljs$core$IFn$_invoke$arity$2 ? pred__26766.cljs$core$IFn$_invoke$arity$2(G__26771,G__26772) : pred__26766.call(null,G__26771,G__26772));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__26773 = "\n";
var G__26774 = expr__26767;
return (pred__26766.cljs$core$IFn$_invoke$arity$2 ? pred__26766.cljs$core$IFn$_invoke$arity$2(G__26773,G__26774) : pred__26766.call(null,G__26773,G__26774));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__26775 = "\f";
var G__26776 = expr__26767;
return (pred__26766.cljs$core$IFn$_invoke$arity$2 ? pred__26766.cljs$core$IFn$_invoke$arity$2(G__26775,G__26776) : pred__26766.call(null,G__26775,G__26776));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__26777 = "\r";
var G__26778 = expr__26767;
return (pred__26766.cljs$core$IFn$_invoke$arity$2 ? pred__26766.cljs$core$IFn$_invoke$arity$2(G__26777,G__26778) : pred__26766.call(null,G__26777,G__26778));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__26779 = "\"";
var G__26780 = expr__26767;
return (pred__26766.cljs$core$IFn$_invoke$arity$2 ? pred__26766.cljs$core$IFn$_invoke$arity$2(G__26779,G__26780) : pred__26766.call(null,G__26779,G__26780));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__26781 = "\\";
var G__26782 = expr__26767;
return (pred__26766.cljs$core$IFn$_invoke$arity$2 ? pred__26766.cljs$core$IFn$_invoke$arity$2(G__26781,G__26782) : pred__26766.call(null,G__26781,G__26782));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30581 = arguments.length;
var i__4731__auto___30582 = (0);
while(true){
if((i__4731__auto___30582 < len__4730__auto___30581)){
args__4736__auto__.push((arguments[i__4731__auto___30582]));

var G__30583 = (i__4731__auto___30582 + (1));
i__4731__auto___30582 = G__30583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq26783){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26783));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30588 = arguments.length;
var i__4731__auto___30589 = (0);
while(true){
if((i__4731__auto___30589 < len__4730__auto___30588)){
args__4736__auto__.push((arguments[i__4731__auto___30589]));

var G__30590 = (i__4731__auto___30589 + (1));
i__4731__auto___30589 = G__30590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq26784){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26784));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__26815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26815,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26815,(1),null);
var G__30592 = new_context;
var G__30593 = remainder;
var G__30594 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__30592;
lis__$1 = G__30593;
acc = G__30594;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__26827 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26827,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26827,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__30600 = new_context;
var G__30601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__30600;
acc = G__30601;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__26835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__30604 = new_context;
var G__30605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__30604;
acc = G__30605;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$unzip_map_$_iter__26842(s__26843){
return (new cljs.core.LazySeq(null,(function (){
var s__26843__$1 = s__26843;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26843__$1);
if(temp__5720__auto__){
var s__26843__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26843__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26843__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26845 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26844 = (0);
while(true){
if((i__26844 < size__4522__auto__)){
var vec__26855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26844);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(0),null);
var vec__26858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858,(1),null);
cljs.core.chunk_append(b__26845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__30610 = (i__26844 + (1));
i__26844 = G__30610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26845),cljs$pprint$unzip_map_$_iter__26842(cljs.core.chunk_rest(s__26843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26845),null);
}
} else {
var vec__26862 = cljs.core.first(s__26843__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862,(0),null);
var vec__26865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26865,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26865,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__26842(cljs.core.rest(s__26843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$unzip_map_$_iter__26868(s__26869){
return (new cljs.core.LazySeq(null,(function (){
var s__26869__$1 = s__26869;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26869__$1);
if(temp__5720__auto__){
var s__26869__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26869__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26869__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26871 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26870 = (0);
while(true){
if((i__26870 < size__4522__auto__)){
var vec__26873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26870);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873,(0),null);
var vec__26876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26876,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26876,(1),null);
cljs.core.chunk_append(b__26871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__30669 = (i__26870 + (1));
i__26870 = G__30669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26871),cljs$pprint$unzip_map_$_iter__26868(cljs.core.chunk_rest(s__26869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26871),null);
}
} else {
var vec__26882 = cljs.core.first(s__26869__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26882,(0),null);
var vec__26885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26882,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26885,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26885,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__26868(cljs.core.rest(s__26869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function cljs$pprint$tuple_map_$_iter__26891(s__26892){
return (new cljs.core.LazySeq(null,(function (){
var s__26892__$1 = s__26892;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26892__$1);
if(temp__5720__auto__){
var s__26892__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26892__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26892__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26894 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26893 = (0);
while(true){
if((i__26893 < size__4522__auto__)){
var vec__26900 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26893);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26900,(1),null);
cljs.core.chunk_append(b__26894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__30681 = (i__26893 + (1));
i__26893 = G__30681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26894),cljs$pprint$tuple_map_$_iter__26891(cljs.core.chunk_rest(s__26892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26894),null);
}
} else {
var vec__26911 = cljs.core.first(s__26892__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26911,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__26891(cljs.core.rest(s__26892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__30700 = (n - (1));
n = G__30700;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__30709 = (n + (1));
n = G__30709;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__26954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__26954) : test.call(null,G__26954));
})())))){
return pos;
} else {
var G__30717 = (pos + (1));
pos = G__30717;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4433__auto__ = (((pp == null))?null:pp);
var m__4434__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4434__auto__.call(null,pp));
} else {
var m__4431__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4431__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__26978 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__26978) : sym.call(null,G__26978));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__27014 = arguments.length;
switch (G__27014) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint27022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27022 = (function (writer,max_columns,fields,meta27023){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27023 = meta27023;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_27024,meta27023__$1){
var self__ = this;
var _27024__$1 = this;
return (new cljs.pprint.t_cljs$pprint27022(self__.writer,self__.max_columns,self__.fields,meta27023__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint27022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_27024){
var self__ = this;
var _27024__$1 = this;
return self__.meta27023;
});})(fields))
;

cljs.pprint.t_cljs$pprint27022.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint27022.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint27022.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27030 = cljs.core._EQ_;
var expr__27031 = cljs.core.type(x);
if(cljs.core.truth_((pred__27030.cljs$core$IFn$_invoke$arity$2 ? pred__27030.cljs$core$IFn$_invoke$arity$2(String,expr__27031) : pred__27030.call(null,String,expr__27031)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__27030,expr__27031,this$__$1,fields){
return (function (p1__27007_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27007_SHARP_,"\n");
});})(s,nl,pred__27030,expr__27031,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__27030.cljs$core$IFn$_invoke$arity$2 ? pred__27030.cljs$core$IFn$_invoke$arity$2(Number,expr__27031) : pred__27030.call(null,Number,expr__27031)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27031)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint27022.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27023","meta27023",731465533,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint27022.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27022.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27022";

cljs.pprint.t_cljs$pprint27022.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.pprint/t_cljs$pprint27022");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint27022.
 */
cljs.pprint.__GT_t_cljs$pprint27022 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint27022(writer__$1,max_columns__$1,fields__$1,meta27023){
return (new cljs.pprint.t_cljs$pprint27022(writer__$1,max_columns__$1,fields__$1,meta27023));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint27022(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27048,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27066 = k27048;
var G__27066__$1 = (((G__27066 instanceof cljs.core.Keyword))?G__27066.fqn:null);
switch (G__27066__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27048,else__4388__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27075){
var vec__27076 = p__27075;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27076,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27076,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27047){
var self__ = this;
var G__27047__$1 = this;
return (new cljs.core.RecordIter((0),G__27047__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27121 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27121(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27049,other27050){
var self__ = this;
var this27049__$1 = this;
return (((!((other27050 == null)))) && ((this27049__$1.constructor === other27050.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.parent,other27050.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.section,other27050.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.start_col,other27050.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.indent,other27050.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.done_nl,other27050.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.intra_block_nl,other27050.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.prefix,other27050.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.per_line_prefix,other27050.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.suffix,other27050.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.logical_block_callback,other27050.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27049__$1.__extmap,other27050.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27047){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27161 = cljs.core.keyword_identical_QMARK_;
var expr__27162 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27166 = new cljs.core.Keyword(null,"parent","parent",-878878779);
var G__27167 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27166,G__27167) : pred__27161.call(null,G__27166,G__27167));
})())){
return (new cljs.pprint.logical_block(G__27047,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27168 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__27169 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27168,G__27169) : pred__27161.call(null,G__27168,G__27169));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__27047,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27170 = new cljs.core.Keyword(null,"start-col","start-col",668080143);
var G__27171 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27170,G__27171) : pred__27161.call(null,G__27170,G__27171));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27047,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27172 = new cljs.core.Keyword(null,"indent","indent",-148200125);
var G__27173 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27172,G__27173) : pred__27161.call(null,G__27172,G__27173));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27047,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27179 = new cljs.core.Keyword(null,"done-nl","done-nl",-381024340);
var G__27180 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27179,G__27180) : pred__27161.call(null,G__27179,G__27180));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27047,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27181 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875);
var G__27182 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27181,G__27182) : pred__27161.call(null,G__27181,G__27182));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27047,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27183 = new cljs.core.Keyword(null,"prefix","prefix",-265908465);
var G__27184 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27183,G__27184) : pred__27161.call(null,G__27183,G__27184));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27047,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27185 = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813);
var G__27186 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27185,G__27186) : pred__27161.call(null,G__27185,G__27186));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27047,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27187 = new cljs.core.Keyword(null,"suffix","suffix",367373057);
var G__27188 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27187,G__27188) : pred__27161.call(null,G__27187,G__27188));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27047,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27189 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194);
var G__27190 = expr__27162;
return (pred__27161.cljs$core$IFn$_invoke$arity$2 ? pred__27161.cljs$core$IFn$_invoke$arity$2(G__27189,G__27190) : pred__27161.call(null,G__27189,G__27190));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27047,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27047),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27047){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27047,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27055){
var extmap__4424__auto__ = (function (){var G__27215 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27055,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0));
if(cljs.core.record_QMARK_(G__27055)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27215);
} else {
return G__27215;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__27055),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__27055),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__30947 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__30947;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27245,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27265 = k27245;
var G__27265__$1 = (((G__27265 instanceof cljs.core.Keyword))?G__27265.fqn:null);
switch (G__27265__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27245,else__4388__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27270){
var vec__27271 = p__27270;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27244){
var self__ = this;
var G__27244__$1 = this;
return (new cljs.core.RecordIter((0),G__27244__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27305 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27305(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27246,other27247){
var self__ = this;
var this27246__$1 = this;
return (((!((other27247 == null)))) && ((this27246__$1.constructor === other27247.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27246__$1.type_tag,other27247.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27246__$1.data,other27247.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27246__$1.trailing_white_space,other27247.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27246__$1.start_pos,other27247.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27246__$1.end_pos,other27247.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27246__$1.__extmap,other27247.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27244){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27318 = cljs.core.keyword_identical_QMARK_;
var expr__27319 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27322 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27323 = expr__27319;
return (pred__27318.cljs$core$IFn$_invoke$arity$2 ? pred__27318.cljs$core$IFn$_invoke$arity$2(G__27322,G__27323) : pred__27318.call(null,G__27322,G__27323));
})())){
return (new cljs.pprint.buffer_blob(G__27244,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27329 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__27330 = expr__27319;
return (pred__27318.cljs$core$IFn$_invoke$arity$2 ? pred__27318.cljs$core$IFn$_invoke$arity$2(G__27329,G__27330) : pred__27318.call(null,G__27329,G__27330));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27244,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27334 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996);
var G__27335 = expr__27319;
return (pred__27318.cljs$core$IFn$_invoke$arity$2 ? pred__27318.cljs$core$IFn$_invoke$arity$2(G__27334,G__27335) : pred__27318.call(null,G__27334,G__27335));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27244,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27336 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27337 = expr__27319;
return (pred__27318.cljs$core$IFn$_invoke$arity$2 ? pred__27318.cljs$core$IFn$_invoke$arity$2(G__27336,G__27337) : pred__27318.call(null,G__27336,G__27337));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27244,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27338 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27339 = expr__27319;
return (pred__27318.cljs$core$IFn$_invoke$arity$2 ? pred__27318.cljs$core$IFn$_invoke$arity$2(G__27338,G__27339) : pred__27318.call(null,G__27338,G__27339));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27244,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27244),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27244){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27244,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27252){
var extmap__4424__auto__ = (function (){var G__27356 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27252,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27252)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27356);
} else {
return G__27356;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27252),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27252),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__27252),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27252),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27252),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__26625__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26625__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27366,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27371 = k27366;
var G__27371__$1 = (((G__27371 instanceof cljs.core.Keyword))?G__27371.fqn:null);
switch (G__27371__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27366,else__4388__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27372){
var vec__27373 = p__27372;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27373,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27373,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27365){
var self__ = this;
var G__27365__$1 = this;
return (new cljs.core.RecordIter((0),G__27365__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27377 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27377(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27367,other27368){
var self__ = this;
var this27367__$1 = this;
return (((!((other27368 == null)))) && ((this27367__$1.constructor === other27368.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27367__$1.type_tag,other27368.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27367__$1.type,other27368.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27367__$1.logical_block,other27368.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27367__$1.start_pos,other27368.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27367__$1.end_pos,other27368.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27367__$1.__extmap,other27368.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27365){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27417 = cljs.core.keyword_identical_QMARK_;
var expr__27418 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27424 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27425 = expr__27418;
return (pred__27417.cljs$core$IFn$_invoke$arity$2 ? pred__27417.cljs$core$IFn$_invoke$arity$2(G__27424,G__27425) : pred__27417.call(null,G__27424,G__27425));
})())){
return (new cljs.pprint.nl_t(G__27365,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27427 = new cljs.core.Keyword(null,"type","type",1174270348);
var G__27428 = expr__27418;
return (pred__27417.cljs$core$IFn$_invoke$arity$2 ? pred__27417.cljs$core$IFn$_invoke$arity$2(G__27427,G__27428) : pred__27417.call(null,G__27427,G__27428));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__27365,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27431 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__27432 = expr__27418;
return (pred__27417.cljs$core$IFn$_invoke$arity$2 ? pred__27417.cljs$core$IFn$_invoke$arity$2(G__27431,G__27432) : pred__27417.call(null,G__27431,G__27432));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27365,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27440 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27441 = expr__27418;
return (pred__27417.cljs$core$IFn$_invoke$arity$2 ? pred__27417.cljs$core$IFn$_invoke$arity$2(G__27440,G__27441) : pred__27417.call(null,G__27440,G__27441));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27365,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27445 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27446 = expr__27418;
return (pred__27417.cljs$core$IFn$_invoke$arity$2 ? pred__27417.cljs$core$IFn$_invoke$arity$2(G__27445,G__27446) : pred__27417.call(null,G__27445,G__27446));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27365,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27365),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27365){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27365,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27369){
var extmap__4424__auto__ = (function (){var G__27454 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27369,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27454);
} else {
return G__27454;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27369),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__27369),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27369),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27369),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27369),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__26625__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26625__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27457,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27461 = k27457;
var G__27461__$1 = (((G__27461 instanceof cljs.core.Keyword))?G__27461.fqn:null);
switch (G__27461__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27457,else__4388__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27462){
var vec__27463 = p__27462;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27463,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27463,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27456){
var self__ = this;
var G__27456__$1 = this;
return (new cljs.core.RecordIter((0),G__27456__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27466 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27466(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27458,other27459){
var self__ = this;
var this27458__$1 = this;
return (((!((other27459 == null)))) && ((this27458__$1.constructor === other27459.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27458__$1.type_tag,other27459.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27458__$1.logical_block,other27459.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27458__$1.start_pos,other27459.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27458__$1.end_pos,other27459.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27458__$1.__extmap,other27459.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27456){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27467 = cljs.core.keyword_identical_QMARK_;
var expr__27468 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27470 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27471 = expr__27468;
return (pred__27467.cljs$core$IFn$_invoke$arity$2 ? pred__27467.cljs$core$IFn$_invoke$arity$2(G__27470,G__27471) : pred__27467.call(null,G__27470,G__27471));
})())){
return (new cljs.pprint.start_block_t(G__27456,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27472 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__27473 = expr__27468;
return (pred__27467.cljs$core$IFn$_invoke$arity$2 ? pred__27467.cljs$core$IFn$_invoke$arity$2(G__27472,G__27473) : pred__27467.call(null,G__27472,G__27473));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27456,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27474 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27475 = expr__27468;
return (pred__27467.cljs$core$IFn$_invoke$arity$2 ? pred__27467.cljs$core$IFn$_invoke$arity$2(G__27474,G__27475) : pred__27467.call(null,G__27474,G__27475));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27456,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27476 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27477 = expr__27468;
return (pred__27467.cljs$core$IFn$_invoke$arity$2 ? pred__27467.cljs$core$IFn$_invoke$arity$2(G__27476,G__27477) : pred__27467.call(null,G__27476,G__27477));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27456,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27456),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27456){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27456,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27460){
var extmap__4424__auto__ = (function (){var G__27485 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27460,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27460)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27485);
} else {
return G__27485;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27460),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27460),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27460),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27460),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__26625__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26625__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27487,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27492 = k27487;
var G__27492__$1 = (((G__27492 instanceof cljs.core.Keyword))?G__27492.fqn:null);
switch (G__27492__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27487,else__4388__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27493){
var vec__27494 = p__27493;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27486){
var self__ = this;
var G__27486__$1 = this;
return (new cljs.core.RecordIter((0),G__27486__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27501 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27501(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27488,other27489){
var self__ = this;
var this27488__$1 = this;
return (((!((other27489 == null)))) && ((this27488__$1.constructor === other27489.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27488__$1.type_tag,other27489.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27488__$1.logical_block,other27489.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27488__$1.start_pos,other27489.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27488__$1.end_pos,other27489.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27488__$1.__extmap,other27489.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27486){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27508 = cljs.core.keyword_identical_QMARK_;
var expr__27509 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27511 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27512 = expr__27509;
return (pred__27508.cljs$core$IFn$_invoke$arity$2 ? pred__27508.cljs$core$IFn$_invoke$arity$2(G__27511,G__27512) : pred__27508.call(null,G__27511,G__27512));
})())){
return (new cljs.pprint.end_block_t(G__27486,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27513 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__27514 = expr__27509;
return (pred__27508.cljs$core$IFn$_invoke$arity$2 ? pred__27508.cljs$core$IFn$_invoke$arity$2(G__27513,G__27514) : pred__27508.call(null,G__27513,G__27514));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__27486,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27515 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27516 = expr__27509;
return (pred__27508.cljs$core$IFn$_invoke$arity$2 ? pred__27508.cljs$core$IFn$_invoke$arity$2(G__27515,G__27516) : pred__27508.call(null,G__27515,G__27516));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__27486,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27517 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27518 = expr__27509;
return (pred__27508.cljs$core$IFn$_invoke$arity$2 ? pred__27508.cljs$core$IFn$_invoke$arity$2(G__27517,G__27518) : pred__27508.call(null,G__27517,G__27518));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27486,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27486),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27486){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27486,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__27490){
var extmap__4424__auto__ = (function (){var G__27520 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27490,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27490)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27520);
} else {
return G__27520;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27490),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27490),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27490),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27490),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__26625__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26625__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27524,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27532 = k27524;
var G__27532__$1 = (((G__27532 instanceof cljs.core.Keyword))?G__27532.fqn:null);
switch (G__27532__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27524,else__4388__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27533){
var vec__27534 = p__27533;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27534,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27534,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27523){
var self__ = this;
var G__27523__$1 = this;
return (new cljs.core.RecordIter((0),G__27523__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27553 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27553(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27525,other27526){
var self__ = this;
var this27525__$1 = this;
return (((!((other27526 == null)))) && ((this27525__$1.constructor === other27526.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27525__$1.type_tag,other27526.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27525__$1.logical_block,other27526.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27525__$1.relative_to,other27526.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27525__$1.offset,other27526.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27525__$1.start_pos,other27526.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27525__$1.end_pos,other27526.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27525__$1.__extmap,other27526.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27523){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27554 = cljs.core.keyword_identical_QMARK_;
var expr__27555 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27557 = new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267);
var G__27558 = expr__27555;
return (pred__27554.cljs$core$IFn$_invoke$arity$2 ? pred__27554.cljs$core$IFn$_invoke$arity$2(G__27557,G__27558) : pred__27554.call(null,G__27557,G__27558));
})())){
return (new cljs.pprint.indent_t(G__27523,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27559 = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564);
var G__27560 = expr__27555;
return (pred__27554.cljs$core$IFn$_invoke$arity$2 ? pred__27554.cljs$core$IFn$_invoke$arity$2(G__27559,G__27560) : pred__27554.call(null,G__27559,G__27560));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__27523,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27561 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051);
var G__27562 = expr__27555;
return (pred__27554.cljs$core$IFn$_invoke$arity$2 ? pred__27554.cljs$core$IFn$_invoke$arity$2(G__27561,G__27562) : pred__27554.call(null,G__27561,G__27562));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__27523,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27563 = new cljs.core.Keyword(null,"offset","offset",296498311);
var G__27564 = expr__27555;
return (pred__27554.cljs$core$IFn$_invoke$arity$2 ? pred__27554.cljs$core$IFn$_invoke$arity$2(G__27563,G__27564) : pred__27554.call(null,G__27563,G__27564));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__27523,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27565 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086);
var G__27566 = expr__27555;
return (pred__27554.cljs$core$IFn$_invoke$arity$2 ? pred__27554.cljs$core$IFn$_invoke$arity$2(G__27565,G__27566) : pred__27554.call(null,G__27565,G__27566));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__27523,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27567 = new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926);
var G__27568 = expr__27555;
return (pred__27554.cljs$core$IFn$_invoke$arity$2 ? pred__27554.cljs$core$IFn$_invoke$arity$2(G__27567,G__27568) : pred__27554.call(null,G__27567,G__27568));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__27523,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27523),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27523){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__27523,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__27527){
var extmap__4424__auto__ = (function (){var G__27574 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27527,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27527)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27574);
} else {
return G__27574;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27527),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27527),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__27527),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__27527),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27527),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27527),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__26625__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26625__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__27580 = cljs.core.get_global_hierarchy;
return (fexpr__27580.cljs$core$IFn$_invoke$arity$0 ? fexpr__27580.cljs$core$IFn$_invoke$arity$0() : fexpr__27580.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p1__27579_SHARP_,p2__27578_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__27578_SHARP_);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5720__auto___31243 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___31243)){
var cb_31245 = temp__5720__auto___31243;
var G__27583_31250 = new cljs.core.Keyword(null,"start","start",-355208981);
(cb_31245.cljs$core$IFn$_invoke$arity$1 ? cb_31245.cljs$core$IFn$_invoke$arity$1(G__27583_31250) : cb_31245.call(null,G__27583_31250));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5720__auto___31260 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___31260)){
var prefix_31262 = temp__5720__auto___31260;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_31262);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5720__auto___31263 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___31263)){
var cb_31264 = temp__5720__auto___31263;
var G__27588_31265 = new cljs.core.Keyword(null,"end","end",-268185958);
(cb_31264.cljs$core$IFn$_invoke$arity$1 ? cb_31264.cljs$core$IFn$_invoke$arity$1(G__27588_31265) : cb_31264.call(null,G__27588_31265));
} else {
}

var temp__5720__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5720__auto__)){
var suffix = temp__5720__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__27589 = cljs.core._EQ_;
var expr__27590 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__27592 = new cljs.core.Keyword(null,"block","block",664686210);
var G__27593 = expr__27590;
return (pred__27589.cljs$core$IFn$_invoke$arity$2 ? pred__27589.cljs$core$IFn$_invoke$arity$2(G__27592,G__27593) : pred__27589.call(null,G__27592,G__27593));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27594 = new cljs.core.Keyword(null,"current","current",-1088038603);
var G__27595 = expr__27590;
return (pred__27589.cljs$core$IFn$_invoke$arity$2 ? pred__27589.cljs$core$IFn$_invoke$arity$2(G__27594,G__27595) : pred__27589.call(null,G__27594,G__27595));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27590)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__4120__auto__){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__4120__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5718__auto___31274 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___31274)){
var tws_31275 = temp__5718__auto___31274;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31275);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__27606 = cljs.core.seq(tokens);
var chunk__27607 = null;
var count__27608 = (0);
var i__27609 = (0);
while(true){
if((i__27609 < count__27608)){
var token = chunk__27607.cljs$core$IIndexed$_nth$arity$2(null,i__27609);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___31281 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___31281)){
var tws_31282 = temp__5718__auto___31281;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31282);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_31286 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4120__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4120__auto__)){
return tws_31286;
} else {
return and__4120__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31286);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__31288 = seq__27606;
var G__31289 = chunk__27607;
var G__31290 = count__27608;
var G__31291 = (i__27609 + (1));
seq__27606 = G__31288;
chunk__27607 = G__31289;
count__27608 = G__31290;
i__27609 = G__31291;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27606);
if(temp__5720__auto__){
var seq__27606__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27606__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27606__$1);
var G__31295 = cljs.core.chunk_rest(seq__27606__$1);
var G__31296 = c__4550__auto__;
var G__31297 = cljs.core.count(c__4550__auto__);
var G__31298 = (0);
seq__27606 = G__31295;
chunk__27607 = G__31296;
count__27608 = G__31297;
i__27609 = G__31298;
continue;
} else {
var token = cljs.core.first(seq__27606__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___31312 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___31312)){
var tws_31313 = temp__5718__auto___31312;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31313);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_31337 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4120__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4120__auto__)){
return tws_31337;
} else {
return and__4120__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_31337);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__31342 = cljs.core.next(seq__27606__$1);
var G__31343 = null;
var G__31344 = (0);
var G__31345 = (0);
seq__27606 = G__31342;
chunk__27607 = G__31343;
count__27608 = G__31344;
i__27609 = G__31345;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4131__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4120__auto__ = miser_width;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = maxcol;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = (cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__4120__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__27675 = cljs.core.get_global_hierarchy;
return (fexpr__27675.cljs$core$IFn$_invoke$arity$0 ? fexpr__27675.cljs$core$IFn$_invoke$arity$0() : fexpr__27675.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4131__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__27704_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__27704_SHARP_)) && (cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__27704_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__27720_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__27720_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__27720_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__31374 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__31374;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_31378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_31378);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27745_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__27745_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__27751 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__27757 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__27760 = newl;
var G__27761 = this$;
var G__27762 = section;
var G__27763 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__27760,G__27761,G__27762,G__27763) : cljs.pprint.emit_nl_QMARK_.call(null,G__27760,G__27761,G__27762,G__27763));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__31390 = new_buffer;
buffer = G__31390;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5718__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto__)){
var buf = temp__5718__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5720__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto__)){
var tws = temp__5720__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_31396 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_31397 = (oldpos_31396 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_31397);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_31396,newpos_31397));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__27786_31398 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__27787_31399 = null;
var count__27788_31400 = (0);
var i__27789_31401 = (0);
while(true){
if((i__27789_31401 < count__27788_31400)){
var l_31403__$1 = chunk__27787_31399.cljs$core$IIndexed$_nth$arity$2(null,i__27789_31401);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_31403__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__31405 = seq__27786_31398;
var G__31406 = chunk__27787_31399;
var G__31407 = count__27788_31400;
var G__31408 = (i__27789_31401 + (1));
seq__27786_31398 = G__31405;
chunk__27787_31399 = G__31406;
count__27788_31400 = G__31407;
i__27789_31401 = G__31408;
continue;
} else {
var temp__5720__auto___31409 = cljs.core.seq(seq__27786_31398);
if(temp__5720__auto___31409){
var seq__27786_31410__$1 = temp__5720__auto___31409;
if(cljs.core.chunked_seq_QMARK_(seq__27786_31410__$1)){
var c__4550__auto___31411 = cljs.core.chunk_first(seq__27786_31410__$1);
var G__31412 = cljs.core.chunk_rest(seq__27786_31410__$1);
var G__31413 = c__4550__auto___31411;
var G__31414 = cljs.core.count(c__4550__auto___31411);
var G__31415 = (0);
seq__27786_31398 = G__31412;
chunk__27787_31399 = G__31413;
count__27788_31400 = G__31414;
i__27789_31401 = G__31415;
continue;
} else {
var l_31416__$1 = cljs.core.first(seq__27786_31410__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_31416__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__31430 = cljs.core.next(seq__27786_31410__$1);
var G__31431 = null;
var G__31432 = (0);
var G__31433 = (0);
seq__27786_31398 = G__31430;
chunk__27787_31399 = G__31431;
count__27788_31400 = G__31432;
i__27789_31401 = G__31433;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint27805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27805 = (function (writer,max_columns,miser_width,lb,fields,meta27806){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta27806 = meta27806;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint27805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_27807,meta27806__$1){
var self__ = this;
var _27807__$1 = this;
return (new cljs.pprint.t_cljs$pprint27805(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta27806__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_27807){
var self__ = this;
var _27807__$1 = this;
return self__.meta27806;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27805.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27805.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27816 = cljs.core._EQ_;
var expr__27817 = cljs.core.type(x);
if(cljs.core.truth_((pred__27816.cljs$core$IFn$_invoke$arity$2 ? pred__27816.cljs$core$IFn$_invoke$arity$2(String,expr__27817) : pred__27816.call(null,String,expr__27817)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__27816.cljs$core$IFn$_invoke$arity$2 ? pred__27816.cljs$core$IFn$_invoke$arity$2(Number,expr__27817) : pred__27816.call(null,Number,expr__27817)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27817)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27805.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27805.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint27805.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27805.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27806","meta27806",1338367866,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27805.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27805.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27805";

cljs.pprint.t_cljs$pprint27805.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.pprint/t_cljs$pprint27805");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint27805.
 */
cljs.pprint.__GT_t_cljs$pprint27805 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint27805(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27806){
return (new cljs.pprint.t_cljs$pprint27805(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27806));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint27805(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__5720__auto___31501 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___31501)){
var cb_31504 = temp__5720__auto___31501;
var G__27832_31506 = new cljs.core.Keyword(null,"start","start",-355208981);
(cb_31504.cljs$core$IFn$_invoke$arity$1 ? cb_31504.cljs$core$IFn$_invoke$arity$1(G__27832_31506) : cb_31504.call(null,G__27832_31506));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5720__auto___31514 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___31514)){
var cb_31515 = temp__5720__auto___31514;
var G__27833_31516 = new cljs.core.Keyword(null,"end","end",-268185958);
(cb_31515.cljs$core$IFn$_invoke$arity$1 ? cb_31515.cljs$core$IFn$_invoke$arity$1(G__27833_31516) : cb_31515.call(null,G__27833_31516));
} else {
}
} else {
var oldpos_31517 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_31518 = (oldpos_31517 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_31518);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_31517,newpos_31518));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__27841 = cljs.core._EQ_;
var expr__27842 = relative_to;
if(cljs.core.truth_((function (){var G__27845 = new cljs.core.Keyword(null,"block","block",664686210);
var G__27846 = expr__27842;
return (pred__27841.cljs$core$IFn$_invoke$arity$2 ? pred__27841.cljs$core$IFn$_invoke$arity$2(G__27845,G__27846) : pred__27841.call(null,G__27845,G__27846));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__27847 = new cljs.core.Keyword(null,"current","current",-1088038603);
var G__27848 = expr__27842;
return (pred__27841.cljs$core$IFn$_invoke$arity$2 ? pred__27841.cljs$core$IFn$_invoke$arity$2(G__27847,G__27848) : pred__27841.call(null,G__27847,G__27848));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27842)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27857_SHARP_){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__27857_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__27857_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4120__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__4120__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4120__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4120__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if((!(cljs.pprint._STAR_print_pretty_STAR_))){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31537 = arguments.length;
var i__4731__auto___31538 = (0);
while(true){
if((i__4731__auto___31538 < len__4730__auto___31537)){
args__4736__auto__.push((arguments[i__4731__auto___31538]));

var G__31539 = (i__4731__auto___31538 + (1));
i__4731__auto___31538 = G__31539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__27878 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__27879 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__27880 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__27881 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__27882 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__27883 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__27884 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__27885 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__27886 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__27887 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__27888 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__27889 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__27890 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__27891 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__27892 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__27893 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__27894 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__27895 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__27896 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__27897 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__27898 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__27899 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__27900 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__27901 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__27890;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__27891;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__27892;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__27893;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__27894;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__27895;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__27896;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__27897;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__27898;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__27899;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__27900;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__27901;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__26603__auto___31572 = base_writer;
var new_writer__26604__auto___31573 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__26603__auto___31572));
var _STAR_out_STAR__orig_val__27910_31575 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27911_31576 = ((new_writer__26604__auto___31573)?cljs.pprint.make_pretty_writer(base_writer__26603__auto___31572,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__26603__auto___31572);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27911_31576;

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27910_31575;
}} else {
var _STAR_out_STAR__orig_val__27912_31577 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27913_31578 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27913_31578;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27912_31577;
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__27889;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__27888;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__27887;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__27886;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__27885;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__27884;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__27883;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__27882;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__27881;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__27880;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__27879;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__27878;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq27868){
var G__27869 = cljs.core.first(seq27868);
var seq27868__$1 = cljs.core.next(seq27868);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27869,seq27868__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__27932 = arguments.length;
switch (G__27932) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__27945 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27946 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27946;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27945;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__26603__auto__ = writer;
var new_writer__26604__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__26603__auto__));
var _STAR_out_STAR__orig_val__27948 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__27949 = ((new_writer__26604__auto__)?cljs.pprint.make_pretty_writer(base_writer__26603__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__26603__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__27949;

try{var _STAR_print_pretty_STAR__orig_val__27951_31589 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__27952_31590 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__27952_31590;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__27951_31589;
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__27948;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4120__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4120__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31600 = arguments.length;
var i__4731__auto___31601 = (0);
while(true){
if((i__4731__auto___31601 < len__4730__auto___31600)){
args__4736__auto__.push((arguments[i__4731__auto___31601]));

var G__31602 = (i__4731__auto___31601 + (1));
i__4731__auto___31601 = G__31602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq27957){
var G__27958 = cljs.core.first(seq27957);
var seq27957__$1 = cljs.core.next(seq27957);
var G__27959 = cljs.core.first(seq27957__$1);
var seq27957__$2 = cljs.core.next(seq27957__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27958,G__27959,seq27957__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.pprint._STAR_format_str_STAR_,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27968,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27980 = k27968;
var G__27980__$1 = (((G__27980 instanceof cljs.core.Keyword))?G__27980.fqn:null);
switch (G__27980__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27968,else__4388__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27982){
var vec__27983 = p__27982;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27967){
var self__ = this;
var G__27967__$1 = this;
return (new cljs.core.RecordIter((0),G__27967__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27987 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27987(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27969,other27970){
var self__ = this;
var this27969__$1 = this;
return (((!((other27970 == null)))) && ((this27969__$1.constructor === other27970.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27969__$1.seq,other27970.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27969__$1.rest,other27970.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27969__$1.pos,other27970.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27969__$1.__extmap,other27970.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27967){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27992 = cljs.core.keyword_identical_QMARK_;
var expr__27993 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27995 = new cljs.core.Keyword(null,"seq","seq",-1817803783);
var G__27996 = expr__27993;
return (pred__27992.cljs$core$IFn$_invoke$arity$2 ? pred__27992.cljs$core$IFn$_invoke$arity$2(G__27995,G__27996) : pred__27992.call(null,G__27995,G__27996));
})())){
return (new cljs.pprint.arg_navigator(G__27967,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27997 = new cljs.core.Keyword(null,"rest","rest",-1241696419);
var G__27998 = expr__27993;
return (pred__27992.cljs$core$IFn$_invoke$arity$2 ? pred__27992.cljs$core$IFn$_invoke$arity$2(G__27997,G__27998) : pred__27992.call(null,G__27997,G__27998));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__27967,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27999 = new cljs.core.Keyword(null,"pos","pos",-864607220);
var G__28000 = expr__27993;
return (pred__27992.cljs$core$IFn$_invoke$arity$2 ? pred__27992.cljs$core$IFn$_invoke$arity$2(G__27999,G__28000) : pred__27992.call(null,G__27999,G__28000));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__27967,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27967),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27967){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__27967,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__27971){
var extmap__4424__auto__ = (function (){var G__28003 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27971,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__27971)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28003);
} else {
return G__28003;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__27971),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__27971),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__27971),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__28004 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28004,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28004,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__28007 = navigator;
var G__28008 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__28007,G__28008) : cljs.pprint.relative_reposition.call(null,G__28007,G__28008));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k28011,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__28019 = k28011;
var G__28019__$1 = (((G__28019 instanceof cljs.core.Keyword))?G__28019.fqn:null);
switch (G__28019__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28011,else__4388__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__28021){
var vec__28022 = p__28021;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28010){
var self__ = this;
var G__28010__$1 = this;
return (new cljs.core.RecordIter((0),G__28010__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__28035 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__28035(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28012,other28013){
var self__ = this;
var this28012__$1 = this;
return (((!((other28013 == null)))) && ((this28012__$1.constructor === other28013.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28012__$1.func,other28013.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28012__$1.def,other28013.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28012__$1.params,other28013.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28012__$1.offset,other28013.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28012__$1.__extmap,other28013.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__28010){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__28036 = cljs.core.keyword_identical_QMARK_;
var expr__28037 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__28039 = new cljs.core.Keyword(null,"func","func",-238706040);
var G__28040 = expr__28037;
return (pred__28036.cljs$core$IFn$_invoke$arity$2 ? pred__28036.cljs$core$IFn$_invoke$arity$2(G__28039,G__28040) : pred__28036.call(null,G__28039,G__28040));
})())){
return (new cljs.pprint.compiled_directive(G__28010,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28041 = new cljs.core.Keyword(null,"def","def",-1043430536);
var G__28042 = expr__28037;
return (pred__28036.cljs$core$IFn$_invoke$arity$2 ? pred__28036.cljs$core$IFn$_invoke$arity$2(G__28041,G__28042) : pred__28036.call(null,G__28041,G__28042));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__28010,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28043 = new cljs.core.Keyword(null,"params","params",710516235);
var G__28044 = expr__28037;
return (pred__28036.cljs$core$IFn$_invoke$arity$2 ? pred__28036.cljs$core$IFn$_invoke$arity$2(G__28043,G__28044) : pred__28036.call(null,G__28043,G__28044));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__28010,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28045 = new cljs.core.Keyword(null,"offset","offset",296498311);
var G__28046 = expr__28037;
return (pred__28036.cljs$core$IFn$_invoke$arity$2 ? pred__28036.cljs$core$IFn$_invoke$arity$2(G__28045,G__28046) : pred__28036.call(null,G__28045,G__28046));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__28010,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__28010),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__28010){
var self__ = this;
var this__4384__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__28010,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__28017){
var extmap__4424__auto__ = (function (){var G__28050 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28017,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0));
if(cljs.core.record_QMARK_(G__28017)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28050);
} else {
return G__28050;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__28017),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__28017),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28017),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__28017),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__28051,navigator){
var vec__28052 = p__28051;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28052,(0),null);
var vec__28055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28052,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28055,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28055,(1),null);
var vec__28061 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28061,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28061,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__28064 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28064,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28064,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__28078 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28078,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28078,(1),null);
var base_output = (function (){var or__4131__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__28088_SHARP_){
if((p1__28088_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__28088_SHARP_,base),cljs.core.quot(p1__28088_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__28090_SHARP_){
if((p1__28090_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__28090_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__28090_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__28109 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28109,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28109,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_31847 = (arg < (0));
var pos_arg_31848 = ((neg_31847)?(- arg):arg);
var raw_str_31849 = cljs.pprint.opt_base_str(base,pos_arg_31848);
var group_str_31850 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_31847,pos_arg_31848,raw_str_31849,vec__28109,arg,arg_navigator__$1){
return (function (p1__28108_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__28108_SHARP_);
});})(neg_31847,pos_arg_31848,raw_str_31849,vec__28109,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_31849));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_31849);
var signed_str_31851 = ((neg_31847)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_31850)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_31850)].join(''):group_str_31850
));
var padded_str_31852 = (((signed_str_31851.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_31851.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_31851)].join(''):signed_str_31851);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_31852], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),(((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__31870 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__31871 = (pos - (1));
var G__31872 = cljs.core.first(remainder);
var G__31873 = cljs.core.next(remainder);
acc = G__31870;
pos = G__31871;
this$ = G__31872;
remainder = G__31873;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__28151 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_31879 = (((arg < (0)))?(- arg):arg);
var parts_31880 = cljs.pprint.remainders((1000),abs_arg_31879);
if((cljs.core.count(parts_31880) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_31882 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_31880);
var full_str_31883 = cljs.pprint.add_english_scales(parts_strs_31882,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),full_str_31883].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__28157 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_31901 = (((arg < (0)))?(- arg):arg);
var parts_31902 = cljs.pprint.remainders((1000),abs_arg_31901);
if((cljs.core.count(parts_31902) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_31905 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_31902));
var head_str_31906 = cljs.pprint.add_english_scales(parts_strs_31905,(1));
var tail_str_31907 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_31902));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_(head_str_31906)))) && ((!(cljs.core.empty_QMARK_(tail_str_31907))))))?[head_str_31906,", ",tail_str_31907].join(''):(((!(cljs.core.empty_QMARK_(head_str_31906))))?[head_str_31906,"th"].join(''):tail_str_31907
))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_31914 = cljs.core.rem(arg,(100));
var not_teens_31915 = ((((11) < low_two_digits_31914)) || (((19) > low_two_digits_31914)));
var low_digit_31916 = cljs.core.rem(low_two_digits_31914,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_31916 === (1))) && (not_teens_31915)))?"st":(((((low_digit_31916 === (2))) && (not_teens_31915)))?"nd":(((((low_digit_31916 === (3))) && (not_teens_31915)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__28160 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28160,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28160,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_31928 = cljs.pprint.remainders((10),arg);
var acc_31929 = cljs.core.PersistentVector.EMPTY;
var pos_31930 = (cljs.core.count(digits_31928) - (1));
var digits_31931__$1 = digits_31928;
while(true){
if(cljs.core.empty_QMARK_(digits_31931__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_31929)], 0));
} else {
var digit_31932 = cljs.core.first(digits_31931__$1);
var G__31933 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_31932))?acc_31929:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_31929,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_31930),(digit_31932 - (1)))));
var G__31934 = (pos_31930 - (1));
var G__31935 = cljs.core.next(digits_31931__$1);
acc_31929 = G__31933;
pos_31930 = G__31934;
digits_31931__$1 = G__31935;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__28167 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28167,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28167,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__28174 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(1),null);
var pred__28177_31943 = cljs.core._EQ_;
var expr__28178_31944 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__28180 = "o";
var G__28181 = expr__28178_31944;
return (pred__28177_31943.cljs$core$IFn$_invoke$arity$2 ? pred__28177_31943.cljs$core$IFn$_invoke$arity$2(G__28180,G__28181) : pred__28177_31943.call(null,G__28180,G__28181));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__28184 = "u";
var G__28185 = expr__28178_31944;
return (pred__28177_31943.cljs$core$IFn$_invoke$arity$2 ? pred__28177_31943.cljs$core$IFn$_invoke$arity$2(G__28184,G__28185) : pred__28177_31943.call(null,G__28184,G__28185));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__28177_31943.cljs$core$IFn$_invoke$arity$2 ? pred__28177_31943.cljs$core$IFn$_invoke$arity$2(null,expr__28178_31944) : pred__28177_31943.call(null,null,expr__28178_31944)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28178_31944)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__28187 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28199 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199,(1),null);
var vec__28202 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28202,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28202,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__28220 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28220,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28220,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__31946 = (i - (1));
i = G__31946;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4131__auto__ = d;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4219__auto__ = (2);
var y__4220__auto__ = w;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4219__auto__ = (e + (1));
var y__4220__auto__ = (w__$1 - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})():(w__$1 + e)
));
var vec__28233 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28233,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28233,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28233,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28233,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__28238 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28238,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28238,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__28268 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28268,(1),null);
var vec__28271 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28274 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28274,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28274,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__28277 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28277,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28277,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28277,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = w;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = d;
if(cljs.core.truth_(and__4120__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_31978 = cljs.core.count(fixed_repr__$1);
var signed_len_31979 = (cljs.core.truth_(add_sign)?(len_31978 + (1)):len_31978);
var prepend_zero_31980__$1 = ((prepend_zero) && ((!((signed_len_31979 >= w)))));
var append_zero_31981__$1 = ((append_zero) && ((!((signed_len_31979 >= w)))));
var full_len_31982 = ((((prepend_zero_31980__$1) || (append_zero_31981__$1)))?(signed_len_31979 + (1)):signed_len_31979);
if(cljs.core.truth_((function (){var and__4120__auto__ = (full_len_31982 > w);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_31982),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_31980__$1)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero_31981__$1)?"0":null)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),((append_zero)?"0":null)].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28337 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28337,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28343_31991 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28344_31992 = G__28343_31991;
var mantissa_31993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344_31992,(0),null);
var exp_31994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344_31992,(1),null);
var G__28343_31995__$1 = G__28343_31991;
while(true){
var vec__28347_31996 = G__28343_31995__$1;
var mantissa_31997__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28347_31996,(0),null);
var exp_31998__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28347_31996,(1),null);
var w_31999 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_32000 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_32001 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_32002 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_32003 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "E";
}
})();
var add_sign_32004 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_32005 = (k_32002 <= (0));
var scaled_exp_32006 = (exp_31998__$1 - (k_32002 - (1)));
var scaled_exp_str_32007 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_32006));
var scaled_exp_str_32008__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_32003),(((scaled_exp_32006 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_32001)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_32001 - cljs.core.count(scaled_exp_str_32007)),"0")):null)),scaled_exp_str_32007].join('');
var exp_width_32009 = cljs.core.count(scaled_exp_str_32008__$1);
var base_mantissa_width_32010 = cljs.core.count(mantissa_31997__$1);
var scaled_mantissa_32011 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_32002),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_31997__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_32000)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_32000 - (base_mantissa_width_32010 - (1))) - (((k_32002 < (0)))?(- k_32002):(0))),"0")):null))].join('');
var w_mantissa_32012 = (cljs.core.truth_(w_31999)?(w_31999 - exp_width_32009):null);
var vec__28377_32013 = cljs.pprint.round_str(scaled_mantissa_32011,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_32002,(0)))?(d_32000 - (1)):(((k_32002 > (0)))?d_32000:(((k_32002 < (0)))?(d_32000 - (1)):null))),(cljs.core.truth_(w_mantissa_32012)?(w_mantissa_32012 - (cljs.core.truth_(add_sign_32004)?(1):(0))):null));
var rounded_mantissa_32014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377_32013,(0),null);
var __32015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377_32013,(1),null);
var incr_exp_32016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377_32013,(2),null);
var full_mantissa_32017 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_32014,k_32002);
var append_zero_32018 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_32002,cljs.core.count(rounded_mantissa_32014))) && ((d_32000 == null)));
if(cljs.core.not(incr_exp_32016)){
if(cljs.core.truth_(w_31999)){
var len_32020 = (cljs.core.count(full_mantissa_32017) + exp_width_32009);
var signed_len_32021 = (cljs.core.truth_(add_sign_32004)?(len_32020 + (1)):len_32020);
var prepend_zero_32022__$1 = ((prepend_zero_32005) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_32021,w_31999)))));
var full_len_32023 = ((prepend_zero_32022__$1)?(signed_len_32021 + (1)):signed_len_32021);
var append_zero_32024__$1 = ((append_zero_32018) && ((full_len_32023 < w_31999)));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = (full_len_32023 > w_31999);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = e_32001;
if(cljs.core.truth_(and__4120__auto__)){
return ((exp_width_32009 - (2)) > e_32001);
} else {
return and__4120__auto__;
}
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_31999,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_31999 - full_len_32023) - ((append_zero_32024__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_32004)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_32022__$1)?"0":null),full_mantissa_32017,((append_zero_32024__$1)?"0":null),scaled_exp_str_32008__$1].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(add_sign_32004)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_32005)?"0":null),full_mantissa_32017,((append_zero_32018)?"0":null),scaled_exp_str_32008__$1].join('')], 0));
}
} else {
var G__32025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_32014,(exp_31998__$1 + (1))], null);
G__28343_31995__$1 = G__32025;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28434 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28437 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28437,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28437,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4219__auto__ = cljs.core.count(mantissa);
var y__4220__auto__ = (function (){var x__4222__auto__ = n;
var y__4223__auto__ = (7);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__28498 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28498,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28498,(1),null);
var vec__28501 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28501,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28501,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (arg < (0));
}
})();
var vec__28504 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28504,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28504,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28504,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return add_sign;
} else {
return and__4120__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__4120__auto__){
return add_sign;
} else {
return and__4120__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__28516 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28531 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28540 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28540,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28540,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28550 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28550,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28550,(1),null);
var vec__28553 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28553,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__32180 = (count + (1));
var G__32181 = iter_result;
var G__32182 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__32180;
args__$1 = G__32181;
last_pos = G__32182;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28601 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28601,(1),null);
var vec__28604 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28604,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28604,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__32193 = (count + (1));
var G__32194 = cljs.core.next(arg_list__$1);
count = G__32193;
arg_list__$1 = G__32194;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28676 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28676,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28676,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__32202 = (count + (1));
var G__32203 = iter_result;
var G__32204 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__32202;
navigator__$2 = G__32203;
last_pos = G__32204;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28745 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = max_count;
if(cljs.core.truth_(and__4120__auto__)){
return (count >= max_count);
} else {
return and__4120__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__28769 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28769,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28769,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__32212 = (count + (1));
var G__32213 = navigator__$3;
count = G__32212;
navigator__$2 = G__32213;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__28830 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__28835 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28836 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28836;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28835;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28830,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28830,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__32218 = cljs.core.next(clauses__$1);
var G__32219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__32220 = iter_result;
clauses__$1 = G__32218;
acc = G__32219;
navigator__$1 = G__32220;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28839 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var else$ = temp__5720__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839,(1),null);
var navigator__$1 = (function (){var or__4131__auto__ = new_navigator;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return navigator;
}
})();
var vec__28845 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845,(1),null);
var navigator__$2 = (function (){var or__4131__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4131__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4131__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__28848 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(1),null);
var slots = (function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4219__auto__ = minpad;
var y__4220__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4120__auto__ = eol_str;
if(cljs.core.truth_(and__4120__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_32236__$1 = slots;
var extra_pad_32237__$1 = extra_pad;
var strs_32238__$1 = strs;
var pad_only_32239 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_32238__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_32238__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_32239))?cljs.core.first(strs_32238__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4131__auto__ = pad_only_32239;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.next(strs_32238__$1);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_32237__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__32243 = (slots_32236__$1 - (1));
var G__32244 = (extra_pad_32237__$1 - (1));
var G__32245 = (cljs.core.truth_(pad_only_32239)?strs_32238__$1:cljs.core.next(strs_32238__$1));
var G__32246 = false;
slots_32236__$1 = G__32243;
extra_pad_32237__$1 = G__32244;
strs_32238__$1 = G__32245;
pad_only_32239 = G__32246;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28925 = (function (writer,meta28926){
this.writer = writer;
this.meta28926 = meta28926;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28927,meta28926__$1){
var self__ = this;
var _28927__$1 = this;
return (new cljs.pprint.t_cljs$pprint28925(self__.writer,meta28926__$1));
});

cljs.pprint.t_cljs$pprint28925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28927){
var self__ = this;
var _28927__$1 = this;
return self__.meta28926;
});

cljs.pprint.t_cljs$pprint28925.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28925.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28946 = cljs.core._EQ_;
var expr__28947 = cljs.core.type(x);
if(cljs.core.truth_((pred__28946.cljs$core$IFn$_invoke$arity$2 ? pred__28946.cljs$core$IFn$_invoke$arity$2(String,expr__28947) : pred__28946.call(null,String,expr__28947)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__28946.cljs$core$IFn$_invoke$arity$2 ? pred__28946.cljs$core$IFn$_invoke$arity$2(Number,expr__28947) : pred__28946.call(null,Number,expr__28947)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28947)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28926","meta28926",1116589491,null)], null);
});

cljs.pprint.t_cljs$pprint28925.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28925.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28925";

cljs.pprint.t_cljs$pprint28925.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.pprint/t_cljs$pprint28925");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28925.
 */
cljs.pprint.__GT_t_cljs$pprint28925 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28925(writer__$1,meta28926){
return (new cljs.pprint.t_cljs$pprint28925(writer__$1,meta28926));
});

}

return (new cljs.pprint.t_cljs$pprint28925(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28959 = (function (writer,meta28960){
this.writer = writer;
this.meta28960 = meta28960;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28961,meta28960__$1){
var self__ = this;
var _28961__$1 = this;
return (new cljs.pprint.t_cljs$pprint28959(self__.writer,meta28960__$1));
});

cljs.pprint.t_cljs$pprint28959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28961){
var self__ = this;
var _28961__$1 = this;
return self__.meta28960;
});

cljs.pprint.t_cljs$pprint28959.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint28959.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28964 = cljs.core._EQ_;
var expr__28965 = cljs.core.type(x);
if(cljs.core.truth_((pred__28964.cljs$core$IFn$_invoke$arity$2 ? pred__28964.cljs$core$IFn$_invoke$arity$2(String,expr__28965) : pred__28964.call(null,String,expr__28965)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__28964.cljs$core$IFn$_invoke$arity$2 ? pred__28964.cljs$core$IFn$_invoke$arity$2(Number,expr__28965) : pred__28964.call(null,Number,expr__28965)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28965)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28960","meta28960",-1340373376,null)], null);
});

cljs.pprint.t_cljs$pprint28959.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28959.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28959";

cljs.pprint.t_cljs$pprint28959.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.pprint/t_cljs$pprint28959");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28959.
 */
cljs.pprint.__GT_t_cljs$pprint28959 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28959(writer__$1,meta28960){
return (new cljs.pprint.t_cljs$pprint28959(writer__$1,meta28960));
});

}

return (new cljs.pprint.t_cljs$pprint28959(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = f;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4120__auto__ = m;
if(cljs.core.truth_(and__4120__auto__)){
return (m.index + (1));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28981 = (function (writer,last_was_whitespace_QMARK_,meta28982){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28982 = meta28982;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_28983,meta28982__$1){
var self__ = this;
var _28983__$1 = this;
return (new cljs.pprint.t_cljs$pprint28981(self__.writer,self__.last_was_whitespace_QMARK_,meta28982__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_28983){
var self__ = this;
var _28983__$1 = this;
return self__.meta28982;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28981.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28981.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28986 = cljs.core._EQ_;
var expr__28987 = cljs.core.type(x);
if(cljs.core.truth_((pred__28986.cljs$core$IFn$_invoke$arity$2 ? pred__28986.cljs$core$IFn$_invoke$arity$2(String,expr__28987) : pred__28986.call(null,String,expr__28987)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__28989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__28989);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__28986.cljs$core$IFn$_invoke$arity$2 ? pred__28986.cljs$core$IFn$_invoke$arity$2(Number,expr__28987) : pred__28986.call(null,Number,expr__28987)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28987)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28981.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta28982","meta28982",-612322872,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28981.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28981.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28981";

cljs.pprint.t_cljs$pprint28981.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.pprint/t_cljs$pprint28981");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28981.
 */
cljs.pprint.__GT_t_cljs$pprint28981 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28981(writer__$1,last_was_whitespace_QMARK___$1,meta28982){
return (new cljs.pprint.t_cljs$pprint28981(writer__$1,last_was_whitespace_QMARK___$1,meta28982));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint28981(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28999 = (function (writer,capped,meta29000){
this.writer = writer;
this.capped = capped;
this.meta29000 = meta29000;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint28999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_29001,meta29000__$1){
var self__ = this;
var _29001__$1 = this;
return (new cljs.pprint.t_cljs$pprint28999(self__.writer,self__.capped,meta29000__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint28999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_29001){
var self__ = this;
var _29001__$1 = this;
return self__.meta29000;
});})(capped))
;

cljs.pprint.t_cljs$pprint28999.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint28999.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29009 = cljs.core._EQ_;
var expr__29010 = cljs.core.type(x);
if(cljs.core.truth_((pred__29009.cljs$core$IFn$_invoke$arity$2 ? pred__29009.cljs$core$IFn$_invoke$arity$2(String,expr__29010) : pred__29009.call(null,String,expr__29010)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4120__auto__ = m;
if(cljs.core.truth_(and__4120__auto__)){
return m.index;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__29009.cljs$core$IFn$_invoke$arity$2 ? pred__29009.cljs$core$IFn$_invoke$arity$2(Number,expr__29010) : pred__29009.call(null,Number,expr__29010)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__4120__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29010)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint28999.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta29000","meta29000",-1120096468,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint28999.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28999.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28999";

cljs.pprint.t_cljs$pprint28999.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.pprint/t_cljs$pprint28999");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28999.
 */
cljs.pprint.__GT_t_cljs$pprint28999 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28999(writer__$1,capped__$1,meta29000){
return (new cljs.pprint.t_cljs$pprint28999(writer__$1,capped__$1,meta29000));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint28999(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__29035 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29036 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29036;

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29035;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_32261 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_32262 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_32263 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_32264 = (((current_32263 < colnum_32261))?(colnum_32261 - current_32263):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_32262,(0)))?(0):(colinc_32262 - cljs.core.rem((current_32263 - colnum_32261),colinc_32262))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_32264," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_32265 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_32266 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_32267 = (colrel_32265 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_32268 = (((colinc_32266 > (0)))?cljs.core.rem(start_col_32267,colinc_32266):(0));
var space_count_32269 = (colrel_32265 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_32268))?(0):(colinc_32266 - offset_32268)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_32269," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__29056 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29059_32310 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29060_32311 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29061_32312 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29062_32313 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29061_32312;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29062_32313;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29060_32311;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29059_32310;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29065_SHARP_,p2__29066_SHARP_,p3__29067_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__29065_SHARP_,p2__29066_SHARP_,p3__29067_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29068_SHARP_,p2__29069_SHARP_,p3__29070_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__29068_SHARP_,p2__29069_SHARP_,p3__29070_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29071_SHARP_,p2__29072_SHARP_,p3__29073_SHARP_){
return cljs.pprint.format_integer((10),p1__29071_SHARP_,p2__29072_SHARP_,p3__29073_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29074_SHARP_,p2__29075_SHARP_,p3__29076_SHARP_){
return cljs.pprint.format_integer((2),p1__29074_SHARP_,p2__29075_SHARP_,p3__29076_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29077_SHARP_,p2__29078_SHARP_,p3__29079_SHARP_){
return cljs.pprint.format_integer((8),p1__29077_SHARP_,p2__29078_SHARP_,p3__29079_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29080_SHARP_,p2__29081_SHARP_,p3__29082_SHARP_){
return cljs.pprint.format_integer((16),p1__29080_SHARP_,p2__29081_SHARP_,p3__29082_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__29083_SHARP_,p2__29084_SHARP_,p3__29085_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__29083_SHARP_),p1__29083_SHARP_,p2__29084_SHARP_,p3__29085_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
return (function (p1__29086_SHARP_,p2__29087_SHARP_,p3__29088_SHARP_){
return cljs.pprint.format_old_roman(p1__29086_SHARP_,p2__29087_SHARP_,p3__29088_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29089_SHARP_,p2__29090_SHARP_,p3__29091_SHARP_){
return cljs.pprint.format_new_roman(p1__29089_SHARP_,p2__29090_SHARP_,p3__29091_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29092_SHARP_,p2__29093_SHARP_,p3__29094_SHARP_){
return cljs.pprint.format_ordinal_english(p1__29092_SHARP_,p2__29093_SHARP_,p3__29094_SHARP_);
});
} else {
return (function (p1__29095_SHARP_,p2__29096_SHARP_,p3__29097_SHARP_){
return cljs.pprint.format_cardinal_english(p1__29095_SHARP_,p2__29096_SHARP_,p3__29097_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__29135 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29135,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29135,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4607__auto___32398 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_32400 = (0);
while(true){
if((i_32400 < n__4607__auto___32398)){
cljs.pprint.prn();

var G__32402 = (i_32400 + (1));
i_32400 = G__32402;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_32408 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_32408 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4607__auto___32409 = (cnt_32408 - (1));
var i_32410 = (0);
while(true){
if((i_32410 < n__4607__auto___32409)){
cljs.pprint.prn();

var G__32412 = (i_32410 + (1));
i_32410 = G__32412;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4607__auto___32415 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_32416 = (0);
while(true){
if((i_32416 < n__4607__auto___32415)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__32418 = (i_32416 + (1));
i_32416 = G__32418;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29100_SHARP_,p2__29101_SHARP_,p3__29102_SHARP_){
return cljs.pprint.relative_tabulation(p1__29100_SHARP_,p2__29101_SHARP_,p3__29102_SHARP_);
});
} else {
return (function (p1__29103_SHARP_,p2__29104_SHARP_,p3__29105_SHARP_){
return cljs.pprint.absolute_tabulation(p1__29103_SHARP_,p2__29104_SHARP_,p3__29105_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__29223 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29223,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29223,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__29232 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(1),null);
var vec__29235 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__29106_SHARP_,p2__29107_SHARP_,p3__29108_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__29106_SHARP_,p2__29107_SHARP_,p3__29108_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4120__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4120__auto__ = arg1;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = arg2;
if(cljs.core.truth_(and__4120__auto____$1)){
return arg3;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = arg1;
if(cljs.core.truth_(and__4120__auto__)){
return arg2;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__29286 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29286,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29286,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__29290 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__29310){
var vec__29313 = p__29310;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29313,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29313,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29313,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__29330){
var vec__29335 = p__29330;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29335,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29335,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__29343){
var vec__29346 = p__29343;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29346,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29346,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29346,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4120__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4120__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4222__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4223__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29374_SHARP_,p2__29375_SHARP_){
var val = cljs.core.first(p1__29374_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__29375_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.name(cljs.core.first(p2__29375_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__29374_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4523__auto__ = (function cljs$pprint$map_params_$_iter__29387(s__29388){
return (new cljs.core.LazySeq(null,(function (){
var s__29388__$1 = s__29388;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29388__$1);
if(temp__5720__auto__){
var s__29388__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29388__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29388__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29390 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29389 = (0);
while(true){
if((i__29389 < size__4522__auto__)){
var vec__29396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29389);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29396,(0),null);
var vec__29399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29396,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(0),null);
cljs.core.chunk_append(b__29390,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__32582 = (i__29389 + (1));
i__29389 = G__32582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29390),cljs$pprint$map_params_$_iter__29387(cljs.core.chunk_rest(s__29388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29390),null);
}
} else {
var vec__29402 = cljs.core.first(s__29388__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29402,(0),null);
var vec__29405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29402,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29405,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__29387(cljs.core.rest(s__29388__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29376_SHARP_,p2__29377_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__29376_SHARP_,p2__29377_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29378_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29378_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__29419 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29419,(0),null);
var vec__29422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29419,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29422,(1),null);
var vec__29425 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29425,(0),null);
var vec__29428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29425,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29428,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29428,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29428,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__29435 = new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__29435.cljs$core$IFn$_invoke$arity$2 ? fexpr__29435.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__29435.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4120__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4120__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__29450 = cljs.pprint.collect_clauses(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29450,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29450,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__29473){
var vec__29474 = p__29473;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(2),null);
var vec__29480 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(0),null);
var vec__29483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29483,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29483,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29483,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29483,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__29506 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__29507 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__29507;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR__orig_val__29506,_STAR_format_str_STAR__temp_val__29507){
return (function (p__29509){
var vec__29510 = p__29509;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29510,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29510,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR__orig_val__29506,_STAR_format_str_STAR__temp_val__29507))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__29506;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__32683 = cljs.core.next(format__$1);
format__$1 = G__32683;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__29539 = arguments.length;
switch (G__29539) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__29550 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29551 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29551;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29550;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__29571 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(1),null);
var vec__29574 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29574,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29574,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__29586 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__29586) : cljs.pprint.reader_macros.call(null,G__29586));
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = macro_char;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4120__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29591_32697 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29592_32698 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29593_32699 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29594_32700 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29593_32699;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29594_32700;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count29596_32701 = (0);
var alis_32702__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29596_32701 < cljs.core._STAR_print_length_STAR_)))){
if(alis_32702__$1){
cljs.pprint.write_out(cljs.core.first(alis_32702__$1));

if(cljs.core.next(alis_32702__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32704 = (length_count29596_32701 + (1));
var G__32705 = cljs.core.next(alis_32702__$1);
length_count29596_32701 = G__32704;
alis_32702__$1 = G__32705;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29592_32698;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29591_32697;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29608_32706 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29609_32707 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29610_32708 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29611_32709 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29610_32708;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29611_32709;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29613_32710 = (0);
var aseq_32711 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29613_32710 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_32711){
cljs.pprint.write_out(cljs.core.first(aseq_32711));

if(cljs.core.next(aseq_32711)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32712 = (length_count29613_32710 + (1));
var G__32713 = cljs.core.next(aseq_32711);
length_count29613_32710 = G__32712;
aseq_32711 = G__32713;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29609_32707;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29608_32706;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__26706__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32715__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32715 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32716__i = 0, G__32716__a = new Array(arguments.length -  0);
while (G__32716__i < G__32716__a.length) {G__32716__a[G__32716__i] = arguments[G__32716__i + 0]; ++G__32716__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32716__a,0,null);
} 
return G__32715__delegate.call(this,args__26708__auto__);};
G__32715.cljs$lang$maxFixedArity = 0;
G__32715.cljs$lang$applyTo = (function (arglist__32717){
var args__26708__auto__ = cljs.core.seq(arglist__32717);
return G__32715__delegate(args__26708__auto__);
});
G__32715.cljs$core$IFn$_invoke$arity$variadic = G__32715__delegate;
return G__32715;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__29622 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__29627 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10284,10284,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__29627.cljs$core$IFn$_invoke$arity$1 ? fexpr__29627.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__29627.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29622,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29622,(1),null);
var amap__$1 = (function (){var or__4131__auto__ = lift_map;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29636_32718 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29637_32719 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29638_32720 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29639_32721 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29638_32720;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29639_32721;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count29642_32722 = (0);
var aseq_32723 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29642_32722 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_32723){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29645_32724 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29646_32725 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29647_32726 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29648_32727 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29647_32726;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29648_32727;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_32723));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_32723)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29646_32725;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29645_32724;
}}


if(cljs.core.next(aseq_32723)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32731 = (length_count29642_32722 + (1));
var G__32732 = cljs.core.next(aseq_32723);
length_count29642_32722 = G__32731;
aseq_32723 = G__32732;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29637_32719;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29636_32718;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__26706__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32733__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32733 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32734__i = 0, G__32734__a = new Array(arguments.length -  0);
while (G__32734__i < G__32734__a.length) {G__32734__a[G__32734__i] = arguments[G__32734__i + 0]; ++G__32734__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32734__a,0,null);
} 
return G__32733__delegate.call(this,args__26708__auto__);};
G__32733.cljs$lang$maxFixedArity = 0;
G__32733.cljs$lang$applyTo = (function (arglist__32735){
var args__26708__auto__ = cljs.core.seq(arglist__32735);
return G__32733__delegate(args__26708__auto__);
});
G__32733.cljs$core$IFn$_invoke$arity$variadic = G__32733__delegate;
return G__32733;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4131__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29683_32736 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29684_32737 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29685_32738 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29686_32739 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29685_32738;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29686_32739;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((function (){var and__4120__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__4120__auto__){
return (!(cljs.core._realized_QMARK_(o)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29684_32737;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29683_32736;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__26706__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32740__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32740 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32741__i = 0, G__32741__a = new Array(arguments.length -  0);
while (G__32741__i < G__32741__a.length) {G__32741__a[G__32741__i] = arguments[G__32741__i + 0]; ++G__32741__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32741__a,0,null);
} 
return G__32740__delegate.call(this,args__26708__auto__);};
G__32740.cljs$lang$maxFixedArity = 0;
G__32740.cljs$lang$applyTo = (function (arglist__32742){
var args__26708__auto__ = cljs.core.seq(arglist__32742);
return G__32740__delegate(args__26708__auto__);
});
G__32740.cljs$core$IFn$_invoke$arity$variadic = G__32740__delegate;
return G__32740;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29726 = cljs.core.get_global_hierarchy;
return (fexpr__29726.cljs$core$IFn$_invoke$arity$0 ? fexpr__29726.cljs$core$IFn$_invoke$arity$0() : fexpr__29726.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__29738 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29738,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29738,(1),null);
var vec__29741 = reference;
var seq__29742 = cljs.core.seq(vec__29741);
var first__29743 = cljs.core.first(seq__29742);
var seq__29742__$1 = cljs.core.next(seq__29742);
var keyw = first__29743;
var args = seq__29742__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29746_32746 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29747_32747 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29748_32748 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29749_32749 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29748_32748;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29749_32749;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__29755_32750 = (function (){var format_in__26706__auto__ = "~w~:i";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args){
return (function() { 
var G__32751__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32751 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32752__i = 0, G__32752__a = new Array(arguments.length -  0);
while (G__32752__i < G__32752__a.length) {G__32752__a[G__32752__i] = arguments[G__32752__i + 0]; ++G__32752__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32752__a,0,null);
} 
return G__32751__delegate.call(this,args__26708__auto__);};
G__32751.cljs$lang$maxFixedArity = 0;
G__32751.cljs$lang$applyTo = (function (arglist__32753){
var args__26708__auto__ = cljs.core.seq(arglist__32753);
return G__32751__delegate(args__26708__auto__);
});
G__32751.cljs$core$IFn$_invoke$arity$variadic = G__32751__delegate;
return G__32751;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args))
})();
(fexpr__29755_32750.cljs$core$IFn$_invoke$arity$1 ? fexpr__29755_32750.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__29755_32750.call(null,keyw));

var args_32754__$1 = args;
while(true){
if(cljs.core.seq(args_32754__$1)){
var fexpr__29817_32755 = (function (){var format_in__26706__auto__ = " ";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (args_32754__$1,format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args){
return (function() { 
var G__32756__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32756 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32757__i = 0, G__32757__a = new Array(arguments.length -  0);
while (G__32757__i < G__32757__a.length) {G__32757__a[G__32757__i] = arguments[G__32757__i + 0]; ++G__32757__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32757__a,0,null);
} 
return G__32756__delegate.call(this,args__26708__auto__);};
G__32756.cljs$lang$maxFixedArity = 0;
G__32756.cljs$lang$applyTo = (function (arglist__32758){
var args__26708__auto__ = cljs.core.seq(arglist__32758);
return G__32756__delegate(args__26708__auto__);
});
G__32756.cljs$core$IFn$_invoke$arity$variadic = G__32756__delegate;
return G__32756;
})()
;
;})(args_32754__$1,format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args))
})();
(fexpr__29817_32755.cljs$core$IFn$_invoke$arity$0 ? fexpr__29817_32755.cljs$core$IFn$_invoke$arity$0() : fexpr__29817_32755.call(null));

var arg_32759 = cljs.core.first(args_32754__$1);
if(cljs.core.sequential_QMARK_(arg_32759)){
var vec__29826_32760 = cljs.pprint.brackets(arg_32759);
var start_32761__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29826_32760,(0),null);
var end_32762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29826_32760,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29830_32763 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29831_32764 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29832_32765 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29833_32766 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29832_32765;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29833_32766;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_32761__$1,null,end_32762__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_32759),(3))) && ((cljs.core.second(arg_32759) instanceof cljs.core.Keyword)))){
var vec__29839_32767 = arg_32759;
var ns_32768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29839_32767,(0),null);
var kw_32769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29839_32767,(1),null);
var lis_32770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29839_32767,(2),null);
var fexpr__29842_32773 = (function (){var format_in__26706__auto__ = "~w ~w ";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (args_32754__$1,format_in__26706__auto__,cf__26707__auto__,vec__29839_32767,ns_32768,kw_32769,lis_32770,_STAR_current_level_STAR__orig_val__29830_32763,_STAR_current_length_STAR__orig_val__29831_32764,_STAR_current_level_STAR__temp_val__29832_32765,_STAR_current_length_STAR__temp_val__29833_32766,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args){
return (function() { 
var G__32774__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32774 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32775__i = 0, G__32775__a = new Array(arguments.length -  0);
while (G__32775__i < G__32775__a.length) {G__32775__a[G__32775__i] = arguments[G__32775__i + 0]; ++G__32775__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32775__a,0,null);
} 
return G__32774__delegate.call(this,args__26708__auto__);};
G__32774.cljs$lang$maxFixedArity = 0;
G__32774.cljs$lang$applyTo = (function (arglist__32777){
var args__26708__auto__ = cljs.core.seq(arglist__32777);
return G__32774__delegate(args__26708__auto__);
});
G__32774.cljs$core$IFn$_invoke$arity$variadic = G__32774__delegate;
return G__32774;
})()
;
;})(args_32754__$1,format_in__26706__auto__,cf__26707__auto__,vec__29839_32767,ns_32768,kw_32769,lis_32770,_STAR_current_level_STAR__orig_val__29830_32763,_STAR_current_length_STAR__orig_val__29831_32764,_STAR_current_level_STAR__temp_val__29832_32765,_STAR_current_length_STAR__temp_val__29833_32766,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args))
})();
(fexpr__29842_32773.cljs$core$IFn$_invoke$arity$2 ? fexpr__29842_32773.cljs$core$IFn$_invoke$arity$2(ns_32768,kw_32769) : fexpr__29842_32773.call(null,ns_32768,kw_32769));

if(cljs.core.sequential_QMARK_(lis_32770)){
var fexpr__29857_32786 = (function (){var format_in__26706__auto__ = ((cljs.core.vector_QMARK_(lis_32770))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (args_32754__$1,format_in__26706__auto__,cf__26707__auto__,vec__29839_32767,ns_32768,kw_32769,lis_32770,_STAR_current_level_STAR__orig_val__29830_32763,_STAR_current_length_STAR__orig_val__29831_32764,_STAR_current_level_STAR__temp_val__29832_32765,_STAR_current_length_STAR__temp_val__29833_32766,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args){
return (function() { 
var G__32803__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32803 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32804__i = 0, G__32804__a = new Array(arguments.length -  0);
while (G__32804__i < G__32804__a.length) {G__32804__a[G__32804__i] = arguments[G__32804__i + 0]; ++G__32804__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32804__a,0,null);
} 
return G__32803__delegate.call(this,args__26708__auto__);};
G__32803.cljs$lang$maxFixedArity = 0;
G__32803.cljs$lang$applyTo = (function (arglist__32805){
var args__26708__auto__ = cljs.core.seq(arglist__32805);
return G__32803__delegate(args__26708__auto__);
});
G__32803.cljs$core$IFn$_invoke$arity$variadic = G__32803__delegate;
return G__32803;
})()
;
;})(args_32754__$1,format_in__26706__auto__,cf__26707__auto__,vec__29839_32767,ns_32768,kw_32769,lis_32770,_STAR_current_level_STAR__orig_val__29830_32763,_STAR_current_length_STAR__orig_val__29831_32764,_STAR_current_level_STAR__temp_val__29832_32765,_STAR_current_length_STAR__temp_val__29833_32766,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args))
})();
(fexpr__29857_32786.cljs$core$IFn$_invoke$arity$1 ? fexpr__29857_32786.cljs$core$IFn$_invoke$arity$1(lis_32770) : fexpr__29857_32786.call(null,lis_32770));
} else {
cljs.pprint.write_out(lis_32770);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__26706__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (args_32754__$1,format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29830_32763,_STAR_current_length_STAR__orig_val__29831_32764,_STAR_current_level_STAR__temp_val__29832_32765,_STAR_current_length_STAR__temp_val__29833_32766,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args){
return (function() { 
var G__32808__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32808 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32809__i = 0, G__32809__a = new Array(arguments.length -  0);
while (G__32809__i < G__32809__a.length) {G__32809__a[G__32809__i] = arguments[G__32809__i + 0]; ++G__32809__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32809__a,0,null);
} 
return G__32808__delegate.call(this,args__26708__auto__);};
G__32808.cljs$lang$maxFixedArity = 0;
G__32808.cljs$lang$applyTo = (function (arglist__32811){
var args__26708__auto__ = cljs.core.seq(arglist__32811);
return G__32808__delegate(args__26708__auto__);
});
G__32808.cljs$core$IFn$_invoke$arity$variadic = G__32808__delegate;
return G__32808;
})()
;
;})(args_32754__$1,format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29830_32763,_STAR_current_length_STAR__orig_val__29831_32764,_STAR_current_level_STAR__temp_val__29832_32765,_STAR_current_length_STAR__temp_val__29833_32766,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args))
})(),arg_32759);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29831_32764;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29830_32763;
}}


if(cljs.core.next(args_32754__$1)){
var fexpr__29880_32815 = (function (){var format_in__26706__auto__ = "~_";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (args_32754__$1,format_in__26706__auto__,cf__26707__auto__,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args){
return (function() { 
var G__32818__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32818 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32819__i = 0, G__32819__a = new Array(arguments.length -  0);
while (G__32819__i < G__32819__a.length) {G__32819__a[G__32819__i] = arguments[G__32819__i + 0]; ++G__32819__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32819__a,0,null);
} 
return G__32818__delegate.call(this,args__26708__auto__);};
G__32818.cljs$lang$maxFixedArity = 0;
G__32818.cljs$lang$applyTo = (function (arglist__32820){
var args__26708__auto__ = cljs.core.seq(arglist__32820);
return G__32818__delegate(args__26708__auto__);
});
G__32818.cljs$core$IFn$_invoke$arity$variadic = G__32818__delegate;
return G__32818;
})()
;
;})(args_32754__$1,format_in__26706__auto__,cf__26707__auto__,vec__29826_32760,start_32761__$1,end_32762__$1,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args))
})();
(fexpr__29880_32815.cljs$core$IFn$_invoke$arity$0 ? fexpr__29880_32815.cljs$core$IFn$_invoke$arity$0() : fexpr__29880_32815.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_32759);

if(cljs.core.next(args_32754__$1)){
var fexpr__29893_32822 = (function (){var format_in__26706__auto__ = "~:_";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (args_32754__$1,format_in__26706__auto__,cf__26707__auto__,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args){
return (function() { 
var G__32825__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32825 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32827__i = 0, G__32827__a = new Array(arguments.length -  0);
while (G__32827__i < G__32827__a.length) {G__32827__a[G__32827__i] = arguments[G__32827__i + 0]; ++G__32827__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32827__a,0,null);
} 
return G__32825__delegate.call(this,args__26708__auto__);};
G__32825.cljs$lang$maxFixedArity = 0;
G__32825.cljs$lang$applyTo = (function (arglist__32829){
var args__26708__auto__ = cljs.core.seq(arglist__32829);
return G__32825__delegate(args__26708__auto__);
});
G__32825.cljs$core$IFn$_invoke$arity$variadic = G__32825__delegate;
return G__32825;
})()
;
;})(args_32754__$1,format_in__26706__auto__,cf__26707__auto__,arg_32759,_STAR_current_level_STAR__orig_val__29746_32746,_STAR_current_length_STAR__orig_val__29747_32747,_STAR_current_level_STAR__temp_val__29748_32748,_STAR_current_length_STAR__temp_val__29749_32749,vec__29738,start,end,vec__29741,seq__29742,first__29743,seq__29742__$1,keyw,args))
})();
(fexpr__29893_32822.cljs$core$IFn$_invoke$arity$0 ? fexpr__29893_32822.cljs$core$IFn$_invoke$arity$0() : fexpr__29893_32822.call(null));
} else {
}
}

var G__32830 = cljs.core.next(args_32754__$1);
args_32754__$1 = G__32830;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29747_32747;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29746_32746;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__29906 = alis;
var seq__29907 = cljs.core.seq(vec__29906);
var first__29908 = cljs.core.first(seq__29907);
var seq__29907__$1 = cljs.core.next(seq__29907);
var ns_sym = first__29908;
var first__29908__$1 = cljs.core.first(seq__29907__$1);
var seq__29907__$2 = cljs.core.next(seq__29907__$1);
var ns_name = first__29908__$1;
var stuff = seq__29907__$2;
var vec__29909 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(1),null);
var vec__29912 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29912,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29912,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29944_32836 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29945_32837 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29946_32838 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29947_32839 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29946_32838;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29947_32839;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__29962_32840 = (function (){var format_in__26706__auto__ = "~w ~1I~@_~w";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29944_32836,_STAR_current_length_STAR__orig_val__29945_32837,_STAR_current_level_STAR__temp_val__29946_32838,_STAR_current_length_STAR__temp_val__29947_32839,vec__29906,seq__29907,first__29908,seq__29907__$1,ns_sym,first__29908__$1,seq__29907__$2,ns_name,stuff,vec__29909,doc_str,stuff__$1,vec__29912,attr_map,references){
return (function() { 
var G__32843__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32843 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32844__i = 0, G__32844__a = new Array(arguments.length -  0);
while (G__32844__i < G__32844__a.length) {G__32844__a[G__32844__i] = arguments[G__32844__i + 0]; ++G__32844__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32844__a,0,null);
} 
return G__32843__delegate.call(this,args__26708__auto__);};
G__32843.cljs$lang$maxFixedArity = 0;
G__32843.cljs$lang$applyTo = (function (arglist__32845){
var args__26708__auto__ = cljs.core.seq(arglist__32845);
return G__32843__delegate(args__26708__auto__);
});
G__32843.cljs$core$IFn$_invoke$arity$variadic = G__32843__delegate;
return G__32843;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29944_32836,_STAR_current_length_STAR__orig_val__29945_32837,_STAR_current_level_STAR__temp_val__29946_32838,_STAR_current_length_STAR__temp_val__29947_32839,vec__29906,seq__29907,first__29908,seq__29907__$1,ns_sym,first__29908__$1,seq__29907__$2,ns_name,stuff,vec__29909,doc_str,stuff__$1,vec__29912,attr_map,references))
})();
(fexpr__29962_32840.cljs$core$IFn$_invoke$arity$2 ? fexpr__29962_32840.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__29962_32840.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__4131__auto__ = doc_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = attr_map;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__29985_32848 = (function (){var format_in__26706__auto__ = "~@:_";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29944_32836,_STAR_current_length_STAR__orig_val__29945_32837,_STAR_current_level_STAR__temp_val__29946_32838,_STAR_current_length_STAR__temp_val__29947_32839,vec__29906,seq__29907,first__29908,seq__29907__$1,ns_sym,first__29908__$1,seq__29907__$2,ns_name,stuff,vec__29909,doc_str,stuff__$1,vec__29912,attr_map,references){
return (function() { 
var G__32849__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32849 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32850__i = 0, G__32850__a = new Array(arguments.length -  0);
while (G__32850__i < G__32850__a.length) {G__32850__a[G__32850__i] = arguments[G__32850__i + 0]; ++G__32850__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32850__a,0,null);
} 
return G__32849__delegate.call(this,args__26708__auto__);};
G__32849.cljs$lang$maxFixedArity = 0;
G__32849.cljs$lang$applyTo = (function (arglist__32851){
var args__26708__auto__ = cljs.core.seq(arglist__32851);
return G__32849__delegate(args__26708__auto__);
});
G__32849.cljs$core$IFn$_invoke$arity$variadic = G__32849__delegate;
return G__32849;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__29944_32836,_STAR_current_length_STAR__orig_val__29945_32837,_STAR_current_level_STAR__temp_val__29946_32838,_STAR_current_length_STAR__temp_val__29947_32839,vec__29906,seq__29907,first__29908,seq__29907__$1,ns_sym,first__29908__$1,seq__29907__$2,ns_name,stuff,vec__29909,doc_str,stuff__$1,vec__29912,attr_map,references))
})();
(fexpr__29985_32848.cljs$core$IFn$_invoke$arity$0 ? fexpr__29985_32848.cljs$core$IFn$_invoke$arity$0() : fexpr__29985_32848.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4131__auto__ = attr_map;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__30003_32856 = attr_map;
var G__30004_32857 = cljs.core.seq(references);
var fexpr__30001_32858 = (function (){var format_in__26706__auto__ = "~w~:[~;~:@_~]";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,G__30003_32856,G__30004_32857,_STAR_current_level_STAR__orig_val__29944_32836,_STAR_current_length_STAR__orig_val__29945_32837,_STAR_current_level_STAR__temp_val__29946_32838,_STAR_current_length_STAR__temp_val__29947_32839,vec__29906,seq__29907,first__29908,seq__29907__$1,ns_sym,first__29908__$1,seq__29907__$2,ns_name,stuff,vec__29909,doc_str,stuff__$1,vec__29912,attr_map,references){
return (function() { 
var G__32876__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32876 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32884__i = 0, G__32884__a = new Array(arguments.length -  0);
while (G__32884__i < G__32884__a.length) {G__32884__a[G__32884__i] = arguments[G__32884__i + 0]; ++G__32884__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32884__a,0,null);
} 
return G__32876__delegate.call(this,args__26708__auto__);};
G__32876.cljs$lang$maxFixedArity = 0;
G__32876.cljs$lang$applyTo = (function (arglist__32886){
var args__26708__auto__ = cljs.core.seq(arglist__32886);
return G__32876__delegate(args__26708__auto__);
});
G__32876.cljs$core$IFn$_invoke$arity$variadic = G__32876__delegate;
return G__32876;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,G__30003_32856,G__30004_32857,_STAR_current_level_STAR__orig_val__29944_32836,_STAR_current_length_STAR__orig_val__29945_32837,_STAR_current_level_STAR__temp_val__29946_32838,_STAR_current_length_STAR__temp_val__29947_32839,vec__29906,seq__29907,first__29908,seq__29907__$1,ns_sym,first__29908__$1,seq__29907__$2,ns_name,stuff,vec__29909,doc_str,stuff__$1,vec__29912,attr_map,references))
})();
(fexpr__30001_32858.cljs$core$IFn$_invoke$arity$2 ? fexpr__30001_32858.cljs$core$IFn$_invoke$arity$2(G__30003_32856,G__30004_32857) : fexpr__30001_32858.call(null,G__30003_32856,G__30004_32857));
} else {
}

var references_32891__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_32891__$1));

var temp__5720__auto___32893 = cljs.core.next(references_32891__$1);
if(temp__5720__auto___32893){
var references_32898__$2 = temp__5720__auto___32893;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32899 = references_32898__$2;
references_32891__$1 = G__32899;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29945_32837;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29944_32836;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__26706__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32917__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32917 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32926__i = 0, G__32926__a = new Array(arguments.length -  0);
while (G__32926__i < G__32926__a.length) {G__32926__a[G__32926__i] = arguments[G__32926__i + 0]; ++G__32926__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32926__a,0,null);
} 
return G__32917__delegate.call(this,args__26708__auto__);};
G__32917.cljs$lang$maxFixedArity = 0;
G__32917.cljs$lang$applyTo = (function (arglist__32927){
var args__26708__auto__ = cljs.core.seq(arglist__32927);
return G__32917__delegate(args__26708__auto__);
});
G__32917.cljs$core$IFn$_invoke$arity$variadic = G__32917__delegate;
return G__32917;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__30037_32930 = (function (){var format_in__26706__auto__ = " ~_";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32931__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32931 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32933__i = 0, G__32933__a = new Array(arguments.length -  0);
while (G__32933__i < G__32933__a.length) {G__32933__a[G__32933__i] = arguments[G__32933__i + 0]; ++G__32933__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32933__a,0,null);
} 
return G__32931__delegate.call(this,args__26708__auto__);};
G__32931.cljs$lang$maxFixedArity = 0;
G__32931.cljs$lang$applyTo = (function (arglist__32934){
var args__26708__auto__ = cljs.core.seq(arglist__32934);
return G__32931__delegate(args__26708__auto__);
});
G__32931.cljs$core$IFn$_invoke$arity$variadic = G__32931__delegate;
return G__32931;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
(fexpr__30037_32930.cljs$core$IFn$_invoke$arity$0 ? fexpr__30037_32930.cljs$core$IFn$_invoke$arity$0() : fexpr__30037_32930.call(null));
} else {
var fexpr__30097_32935 = (function (){var format_in__26706__auto__ = " ~@_";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32936__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32936 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32937__i = 0, G__32937__a = new Array(arguments.length -  0);
while (G__32937__i < G__32937__a.length) {G__32937__a[G__32937__i] = arguments[G__32937__i + 0]; ++G__32937__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32937__a,0,null);
} 
return G__32936__delegate.call(this,args__26708__auto__);};
G__32936.cljs$lang$maxFixedArity = 0;
G__32936.cljs$lang$applyTo = (function (arglist__32938){
var args__26708__auto__ = cljs.core.seq(arglist__32938);
return G__32936__delegate(args__26708__auto__);
});
G__32936.cljs$core$IFn$_invoke$arity$variadic = G__32936__delegate;
return G__32936;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
(fexpr__30097_32935.cljs$core$IFn$_invoke$arity$0 ? fexpr__30097_32935.cljs$core$IFn$_invoke$arity$0() : fexpr__30097_32935.call(null));
}

var fexpr__30101 = (function (){var format_in__26706__auto__ = "~{~w~^ ~_~}";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32940__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32940 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32941__i = 0, G__32941__a = new Array(arguments.length -  0);
while (G__32941__i < G__32941__a.length) {G__32941__a[G__32941__i] = arguments[G__32941__i + 0]; ++G__32941__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32941__a,0,null);
} 
return G__32940__delegate.call(this,args__26708__auto__);};
G__32940.cljs$lang$maxFixedArity = 0;
G__32940.cljs$lang$applyTo = (function (arglist__32943){
var args__26708__auto__ = cljs.core.seq(arglist__32943);
return G__32940__delegate(args__26708__auto__);
});
G__32940.cljs$core$IFn$_invoke$arity$variadic = G__32940__delegate;
return G__32940;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
return (fexpr__30101.cljs$core$IFn$_invoke$arity$1 ? fexpr__30101.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__30101.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__30137 = (function (){var format_in__26706__auto__ = " ~_~{~w~^ ~_~}";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__32945__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32945 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32947__i = 0, G__32947__a = new Array(arguments.length -  0);
while (G__32947__i < G__32947__a.length) {G__32947__a[G__32947__i] = arguments[G__32947__i + 0]; ++G__32947__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32947__a,0,null);
} 
return G__32945__delegate.call(this,args__26708__auto__);};
G__32945.cljs$lang$maxFixedArity = 0;
G__32945.cljs$lang$applyTo = (function (arglist__32949){
var args__26708__auto__ = cljs.core.seq(arglist__32949);
return G__32945__delegate(args__26708__auto__);
});
G__32945.cljs$core$IFn$_invoke$arity$variadic = G__32945__delegate;
return G__32945;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
return (fexpr__30137.cljs$core$IFn$_invoke$arity$1 ? fexpr__30137.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__30137.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__30151 = alis;
var seq__30152 = cljs.core.seq(vec__30151);
var first__30153 = cljs.core.first(seq__30152);
var seq__30152__$1 = cljs.core.next(seq__30152);
var defn_sym = first__30153;
var first__30153__$1 = cljs.core.first(seq__30152__$1);
var seq__30152__$2 = cljs.core.next(seq__30152__$1);
var defn_name = first__30153__$1;
var stuff = seq__30152__$2;
var vec__30154 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30154,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30154,(1),null);
var vec__30157 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30157,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30157,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30179_32957 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30180_32958 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30181_32959 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30182_32960 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30181_32959;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30182_32960;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__30196_32962 = (function (){var format_in__26706__auto__ = "~w ~1I~@_~w";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30179_32957,_STAR_current_length_STAR__orig_val__30180_32958,_STAR_current_level_STAR__temp_val__30181_32959,_STAR_current_length_STAR__temp_val__30182_32960,vec__30151,seq__30152,first__30153,seq__30152__$1,defn_sym,first__30153__$1,seq__30152__$2,defn_name,stuff,vec__30154,doc_str,stuff__$1,vec__30157,attr_map,stuff__$2){
return (function() { 
var G__32964__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32964 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32965__i = 0, G__32965__a = new Array(arguments.length -  0);
while (G__32965__i < G__32965__a.length) {G__32965__a[G__32965__i] = arguments[G__32965__i + 0]; ++G__32965__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32965__a,0,null);
} 
return G__32964__delegate.call(this,args__26708__auto__);};
G__32964.cljs$lang$maxFixedArity = 0;
G__32964.cljs$lang$applyTo = (function (arglist__32969){
var args__26708__auto__ = cljs.core.seq(arglist__32969);
return G__32964__delegate(args__26708__auto__);
});
G__32964.cljs$core$IFn$_invoke$arity$variadic = G__32964__delegate;
return G__32964;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30179_32957,_STAR_current_length_STAR__orig_val__30180_32958,_STAR_current_level_STAR__temp_val__30181_32959,_STAR_current_length_STAR__temp_val__30182_32960,vec__30151,seq__30152,first__30153,seq__30152__$1,defn_sym,first__30153__$1,seq__30152__$2,defn_name,stuff,vec__30154,doc_str,stuff__$1,vec__30157,attr_map,stuff__$2))
})();
(fexpr__30196_32962.cljs$core$IFn$_invoke$arity$2 ? fexpr__30196_32962.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__30196_32962.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__30242_32974 = (function (){var format_in__26706__auto__ = " ~_~w";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30179_32957,_STAR_current_length_STAR__orig_val__30180_32958,_STAR_current_level_STAR__temp_val__30181_32959,_STAR_current_length_STAR__temp_val__30182_32960,vec__30151,seq__30152,first__30153,seq__30152__$1,defn_sym,first__30153__$1,seq__30152__$2,defn_name,stuff,vec__30154,doc_str,stuff__$1,vec__30157,attr_map,stuff__$2){
return (function() { 
var G__32977__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32977 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32978__i = 0, G__32978__a = new Array(arguments.length -  0);
while (G__32978__i < G__32978__a.length) {G__32978__a[G__32978__i] = arguments[G__32978__i + 0]; ++G__32978__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32978__a,0,null);
} 
return G__32977__delegate.call(this,args__26708__auto__);};
G__32977.cljs$lang$maxFixedArity = 0;
G__32977.cljs$lang$applyTo = (function (arglist__32980){
var args__26708__auto__ = cljs.core.seq(arglist__32980);
return G__32977__delegate(args__26708__auto__);
});
G__32977.cljs$core$IFn$_invoke$arity$variadic = G__32977__delegate;
return G__32977;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30179_32957,_STAR_current_length_STAR__orig_val__30180_32958,_STAR_current_level_STAR__temp_val__30181_32959,_STAR_current_length_STAR__temp_val__30182_32960,vec__30151,seq__30152,first__30153,seq__30152__$1,defn_sym,first__30153__$1,seq__30152__$2,defn_name,stuff,vec__30154,doc_str,stuff__$1,vec__30157,attr_map,stuff__$2))
})();
(fexpr__30242_32974.cljs$core$IFn$_invoke$arity$1 ? fexpr__30242_32974.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__30242_32974.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__30252_32982 = (function (){var format_in__26706__auto__ = " ~_~w";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30179_32957,_STAR_current_length_STAR__orig_val__30180_32958,_STAR_current_level_STAR__temp_val__30181_32959,_STAR_current_length_STAR__temp_val__30182_32960,vec__30151,seq__30152,first__30153,seq__30152__$1,defn_sym,first__30153__$1,seq__30152__$2,defn_name,stuff,vec__30154,doc_str,stuff__$1,vec__30157,attr_map,stuff__$2){
return (function() { 
var G__32983__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__32983 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__32984__i = 0, G__32984__a = new Array(arguments.length -  0);
while (G__32984__i < G__32984__a.length) {G__32984__a[G__32984__i] = arguments[G__32984__i + 0]; ++G__32984__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__32984__a,0,null);
} 
return G__32983__delegate.call(this,args__26708__auto__);};
G__32983.cljs$lang$maxFixedArity = 0;
G__32983.cljs$lang$applyTo = (function (arglist__32986){
var args__26708__auto__ = cljs.core.seq(arglist__32986);
return G__32983__delegate(args__26708__auto__);
});
G__32983.cljs$core$IFn$_invoke$arity$variadic = G__32983__delegate;
return G__32983;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30179_32957,_STAR_current_length_STAR__orig_val__30180_32958,_STAR_current_level_STAR__temp_val__30181_32959,_STAR_current_length_STAR__temp_val__30182_32960,vec__30151,seq__30152,first__30153,seq__30152__$1,defn_sym,first__30153__$1,seq__30152__$2,defn_name,stuff,vec__30154,doc_str,stuff__$1,vec__30157,attr_map,stuff__$2))
})();
(fexpr__30252_32982.cljs$core$IFn$_invoke$arity$1 ? fexpr__30252_32982.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__30252_32982.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4131__auto__ = doc_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4131__auto__ = doc_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30180_32958;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30179_32957;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30266_32990 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30267_32991 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30268_32992 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30269_32993 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30268_32992;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30269_32993;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count30274_32995 = (0);
var binding_32996 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30274_32995 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_32996)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30276_32998 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30277_32999 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30278_33000 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30279_33001 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30278_33000;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30279_33001;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_32996));

if(cljs.core.next(binding_32996)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_32996));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30277_32999;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30276_32998;
}}


if(cljs.core.next(cljs.core.rest(binding_32996))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33010 = (length_count30274_32995 + (1));
var G__33011 = cljs.core.next(cljs.core.rest(binding_32996));
length_count30274_32995 = G__33010;
binding_32996 = G__33011;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30267_32991;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30266_32990;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30304_33014 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30305_33015 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30306_33016 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30307_33017 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30306_33016;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30307_33017;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__30326_33020 = (function (){var format_in__26706__auto__ = "~w ~1I~@_";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30304_33014,_STAR_current_length_STAR__orig_val__30305_33015,_STAR_current_level_STAR__temp_val__30306_33016,_STAR_current_length_STAR__temp_val__30307_33017,base_sym){
return (function() { 
var G__33022__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__33022 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__33023__i = 0, G__33023__a = new Array(arguments.length -  0);
while (G__33023__i < G__33023__a.length) {G__33023__a[G__33023__i] = arguments[G__33023__i + 0]; ++G__33023__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__33023__a,0,null);
} 
return G__33022__delegate.call(this,args__26708__auto__);};
G__33022.cljs$lang$maxFixedArity = 0;
G__33022.cljs$lang$applyTo = (function (arglist__33024){
var args__26708__auto__ = cljs.core.seq(arglist__33024);
return G__33022__delegate(args__26708__auto__);
});
G__33022.cljs$core$IFn$_invoke$arity$variadic = G__33022__delegate;
return G__33022;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30304_33014,_STAR_current_length_STAR__orig_val__30305_33015,_STAR_current_level_STAR__temp_val__30306_33016,_STAR_current_length_STAR__temp_val__30307_33017,base_sym))
})();
(fexpr__30326_33020.cljs$core$IFn$_invoke$arity$1 ? fexpr__30326_33020.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__30326_33020.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__30339_33029 = cljs.core.next(cljs.core.rest(alis));
var fexpr__30338_33030 = (function (){var format_in__26706__auto__ = " ~_~{~w~^ ~_~}";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,G__30339_33029,_STAR_current_level_STAR__orig_val__30304_33014,_STAR_current_length_STAR__orig_val__30305_33015,_STAR_current_level_STAR__temp_val__30306_33016,_STAR_current_length_STAR__temp_val__30307_33017,base_sym){
return (function() { 
var G__33038__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__33038 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__33044__i = 0, G__33044__a = new Array(arguments.length -  0);
while (G__33044__i < G__33044__a.length) {G__33044__a[G__33044__i] = arguments[G__33044__i + 0]; ++G__33044__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__33044__a,0,null);
} 
return G__33038__delegate.call(this,args__26708__auto__);};
G__33038.cljs$lang$maxFixedArity = 0;
G__33038.cljs$lang$applyTo = (function (arglist__33045){
var args__26708__auto__ = cljs.core.seq(arglist__33045);
return G__33038__delegate(args__26708__auto__);
});
G__33038.cljs$core$IFn$_invoke$arity$variadic = G__33038__delegate;
return G__33038;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,G__30339_33029,_STAR_current_level_STAR__orig_val__30304_33014,_STAR_current_length_STAR__orig_val__30305_33015,_STAR_current_level_STAR__temp_val__30306_33016,_STAR_current_length_STAR__temp_val__30307_33017,base_sym))
})();
(fexpr__30338_33030.cljs$core$IFn$_invoke$arity$1 ? fexpr__30338_33030.cljs$core$IFn$_invoke$arity$1(G__30339_33029) : fexpr__30338_33030.call(null,G__30339_33029));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30305_33015;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30304_33014;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__26706__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__){
return (function() { 
var G__33058__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__33058 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__33063__i = 0, G__33063__a = new Array(arguments.length -  0);
while (G__33063__i < G__33063__a.length) {G__33063__a[G__33063__i] = arguments[G__33063__i + 0]; ++G__33063__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__33063__a,0,null);
} 
return G__33058__delegate.call(this,args__26708__auto__);};
G__33058.cljs$lang$maxFixedArity = 0;
G__33058.cljs$lang$applyTo = (function (arglist__33068){
var args__26708__auto__ = cljs.core.seq(arglist__33068);
return G__33058__delegate(args__26708__auto__);
});
G__33058.cljs$core$IFn$_invoke$arity$variadic = G__33058__delegate;
return G__33058;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30359_33073 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30360_33074 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30361_33075 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30362_33077 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30361_33075;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30362_33077;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count30363_33084 = (0);
var alis_33085__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30363_33084 < cljs.core._STAR_print_length_STAR_)))){
if(alis_33085__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30364_33088 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30365_33089 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30366_33090 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30367_33091 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30366_33090;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30367_33091;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_33085__$1));

if(cljs.core.next(alis_33085__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_33085__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30365_33089;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30364_33088;
}}


if(cljs.core.next(cljs.core.rest(alis_33085__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33103 = (length_count30363_33084 + (1));
var G__33104 = cljs.core.next(cljs.core.rest(alis_33085__$1));
length_count30363_33084 = G__33103;
alis_33085__$1 = G__33104;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30360_33074;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30359_33073;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30376_33105 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30377_33106 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30378_33107 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30379_33108 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30378_33107;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30379_33108;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__26706__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30376_33105,_STAR_current_length_STAR__orig_val__30377_33106,_STAR_current_level_STAR__temp_val__30378_33107,_STAR_current_length_STAR__temp_val__30379_33108){
return (function() { 
var G__33111__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__33111 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__33112__i = 0, G__33112__a = new Array(arguments.length -  0);
while (G__33112__i < G__33112__a.length) {G__33112__a[G__33112__i] = arguments[G__33112__i + 0]; ++G__33112__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__33112__a,0,null);
} 
return G__33111__delegate.call(this,args__26708__auto__);};
G__33111.cljs$lang$maxFixedArity = 0;
G__33111.cljs$lang$applyTo = (function (arglist__33113){
var args__26708__auto__ = cljs.core.seq(arglist__33113);
return G__33111__delegate(args__26708__auto__);
});
G__33111.cljs$core$IFn$_invoke$arity$variadic = G__33111__delegate;
return G__33111;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_current_level_STAR__orig_val__30376_33105,_STAR_current_length_STAR__orig_val__30377_33106,_STAR_current_level_STAR__temp_val__30378_33107,_STAR_current_length_STAR__temp_val__30379_33108))
})(),alis);

var length_count30381_33114 = (0);
var alis_33115__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30381_33114 < cljs.core._STAR_print_length_STAR_)))){
if(alis_33115__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30382_33120 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30383_33121 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30384_33122 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30385_33123 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30384_33122;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30385_33123;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_33115__$1));

if(cljs.core.next(alis_33115__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_33115__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30383_33121;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30382_33120;
}}


if(cljs.core.next(cljs.core.rest(alis_33115__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33126 = (length_count30381_33114 + (1));
var G__33127 = cljs.core.next(cljs.core.rest(alis_33115__$1));
length_count30381_33114 = G__33126;
alis_33115__$1 = G__33127;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30377_33106;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30376_33105;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__30397 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__30398 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR__orig_val__30397,args,nlis){
return (function (p1__30394_SHARP_,p2__30395_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30394_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30395_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__30397,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__30398;

try{var fexpr__30431 = (function (){var format_in__26706__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__26707__auto__ = ((typeof format_in__26706__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__26706__auto__) : cljs.pprint.cached_compile.call(null,format_in__26706__auto__)):format_in__26706__auto__);
return ((function (format_in__26706__auto__,cf__26707__auto__,_STAR_symbol_map_STAR__orig_val__30397,_STAR_symbol_map_STAR__temp_val__30398,args,nlis){
return (function() { 
var G__33153__delegate = function (args__26708__auto__){
var navigator__26709__auto__ = cljs.pprint.init_navigator(args__26708__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__26707__auto__,navigator__26709__auto__);
};
var G__33153 = function (var_args){
var args__26708__auto__ = null;
if (arguments.length > 0) {
var G__33154__i = 0, G__33154__a = new Array(arguments.length -  0);
while (G__33154__i < G__33154__a.length) {G__33154__a[G__33154__i] = arguments[G__33154__i + 0]; ++G__33154__i;}
  args__26708__auto__ = new cljs.core.IndexedSeq(G__33154__a,0,null);
} 
return G__33153__delegate.call(this,args__26708__auto__);};
G__33153.cljs$lang$maxFixedArity = 0;
G__33153.cljs$lang$applyTo = (function (arglist__33156){
var args__26708__auto__ = cljs.core.seq(arglist__33156);
return G__33153__delegate(args__26708__auto__);
});
G__33153.cljs$core$IFn$_invoke$arity$variadic = G__33153__delegate;
return G__33153;
})()
;
;})(format_in__26706__auto__,cf__26707__auto__,_STAR_symbol_map_STAR__orig_val__30397,_STAR_symbol_map_STAR__temp_val__30398,args,nlis))
})();
return (fexpr__30431.cljs$core$IFn$_invoke$arity$1 ? fexpr__30431.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__30431.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__30397;
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30434_33158 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30435_33159 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30436_33160 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30437_33161 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30436_33160;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30437_33161;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count30438_33166 = (0);
var alis_33167__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30438_33166 < cljs.core._STAR_print_length_STAR_)))){
if(alis_33167__$1){
cljs.pprint.write_out(cljs.core.first(alis_33167__$1));

if(cljs.core.next(alis_33167__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33172 = (length_count30438_33166 + (1));
var G__33173 = cljs.core.next(alis_33167__$1);
length_count30438_33166 = G__33172;
alis_33167__$1 = G__33173;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30435_33159;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30434_33158;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function cljs$pprint$two_forms_$_iter__30448(s__30449){
return (new cljs.core.LazySeq(null,(function (){
var s__30449__$1 = s__30449;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__30449__$1);
if(temp__5720__auto__){
var s__30449__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30449__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__30449__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__30451 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__30450 = (0);
while(true){
if((i__30450 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__30450);
cljs.core.chunk_append(b__30451,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__33182 = (i__30450 + (1));
i__30450 = G__33182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30451),cljs$pprint$two_forms_$_iter__30448(cljs.core.chunk_rest(s__30449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30451),null);
}
} else {
var x = cljs.core.first(s__30449__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__30448(cljs.core.rest(s__30449__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__30457_SHARP_){
var vec__30460 = p1__30457_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30460,(1),null);
if(cljs.core.not((function (){var or__4131__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__30457_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5718__auto__ = (function (){var G__30475 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__30475) : cljs.pprint._STAR_code_table_STAR_.call(null,G__30475));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var special_form = temp__5718__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5718__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5718__auto__)){
var arg_num = temp__5718__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30484 = cljs.core.get_global_hierarchy;
return (fexpr__30484.cljs$core$IFn$_invoke$arity$0 ? fexpr__30484.cljs$core$IFn$_invoke$arity$0() : fexpr__30484.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (width - cljs.core.count(s));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__30501 = arguments.length;
switch (G__30501) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30495_SHARP_){
return cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30495_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths){
return (function (p1__30497_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__30497_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4523__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__30531(s__30532){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__30532__$1 = s__30532;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__30532__$1);
if(temp__5720__auto__){
var s__30532__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30532__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__30532__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__30534 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__30533 = (0);
while(true){
if((i__30533 < size__4522__auto__)){
var vec__30537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__30533);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30537,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30537,(1),null);
cljs.core.chunk_append(b__30534,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__33247 = (i__30533 + (1));
i__30533 = G__33247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30534),cljs$pprint$iter__30531(cljs.core.chunk_rest(s__30532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30534),null);
}
} else {
var vec__30540 = cljs.core.first(s__30532__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30540,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30540,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__30531(cljs.core.rest(s__30532__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers))
,null,null));
});})(widths,spacers))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,widths,spacers){
return (function (p1__30498_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__30498_SHARP_);
});})(iter__4523__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__30544 = cljs.core.seq(rows);
var chunk__30545 = null;
var count__30546 = (0);
var i__30547 = (0);
while(true){
if((i__30547 < count__30546)){
var row = chunk__30545.cljs$core$IIndexed$_nth$arity$2(null,i__30547);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__33254 = seq__30544;
var G__33255 = chunk__30545;
var G__33256 = count__30546;
var G__33257 = (i__30547 + (1));
seq__30544 = G__33254;
chunk__30545 = G__33255;
count__30546 = G__33256;
i__30547 = G__33257;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30544);
if(temp__5720__auto__){
var seq__30544__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30544__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30544__$1);
var G__33259 = cljs.core.chunk_rest(seq__30544__$1);
var G__33260 = c__4550__auto__;
var G__33261 = cljs.core.count(c__4550__auto__);
var G__33262 = (0);
seq__30544 = G__33259;
chunk__30545 = G__33260;
count__30546 = G__33261;
i__30547 = G__33262;
continue;
} else {
var row = cljs.core.first(seq__30544__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__33263 = cljs.core.next(seq__30544__$1);
var G__33264 = null;
var G__33265 = (0);
var G__33266 = (0);
seq__30544 = G__33263;
chunk__30545 = G__33264;
count__30546 = G__33265;
i__30547 = G__33266;
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
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=cljs.pprint.js.map

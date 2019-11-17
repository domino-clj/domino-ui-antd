goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35866 = arguments.length;
var i__4731__auto___35867 = (0);
while(true){
if((i__4731__auto___35867 < len__4730__auto___35866)){
args__4736__auto__.push((arguments[i__4731__auto___35867]));

var G__35868 = (i__4731__auto___35867 + (1));
i__4731__auto___35867 = G__35868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35656){
var G__35657 = cljs.core.first(seq35656);
var seq35656__$1 = cljs.core.next(seq35656);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35657,seq35656__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35661){
var map__35662 = p__35661;
var map__35662__$1 = (((((!((map__35662 == null))))?(((((map__35662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35662):map__35662);
var src = map__35662__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35664 = cljs.core.seq(sources);
var chunk__35665 = null;
var count__35666 = (0);
var i__35667 = (0);
while(true){
if((i__35667 < count__35666)){
var map__35676 = chunk__35665.cljs$core$IIndexed$_nth$arity$2(null,i__35667);
var map__35676__$1 = (((((!((map__35676 == null))))?(((((map__35676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35676):map__35676);
var src = map__35676__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35676__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35676__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35676__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35676__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35876 = seq__35664;
var G__35877 = chunk__35665;
var G__35878 = count__35666;
var G__35879 = (i__35667 + (1));
seq__35664 = G__35876;
chunk__35665 = G__35877;
count__35666 = G__35878;
i__35667 = G__35879;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35664);
if(temp__5720__auto__){
var seq__35664__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35664__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35664__$1);
var G__35880 = cljs.core.chunk_rest(seq__35664__$1);
var G__35881 = c__4550__auto__;
var G__35882 = cljs.core.count(c__4550__auto__);
var G__35883 = (0);
seq__35664 = G__35880;
chunk__35665 = G__35881;
count__35666 = G__35882;
i__35667 = G__35883;
continue;
} else {
var map__35680 = cljs.core.first(seq__35664__$1);
var map__35680__$1 = (((((!((map__35680 == null))))?(((((map__35680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35680):map__35680);
var src = map__35680__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35884 = cljs.core.next(seq__35664__$1);
var G__35885 = null;
var G__35886 = (0);
var G__35887 = (0);
seq__35664 = G__35884;
chunk__35665 = G__35885;
count__35666 = G__35886;
i__35667 = G__35887;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35688 = cljs.core.seq(js_requires);
var chunk__35689 = null;
var count__35690 = (0);
var i__35691 = (0);
while(true){
if((i__35691 < count__35690)){
var js_ns = chunk__35689.cljs$core$IIndexed$_nth$arity$2(null,i__35691);
var require_str_35888 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35888);


var G__35889 = seq__35688;
var G__35890 = chunk__35689;
var G__35891 = count__35690;
var G__35892 = (i__35691 + (1));
seq__35688 = G__35889;
chunk__35689 = G__35890;
count__35690 = G__35891;
i__35691 = G__35892;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35688);
if(temp__5720__auto__){
var seq__35688__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35688__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35688__$1);
var G__35895 = cljs.core.chunk_rest(seq__35688__$1);
var G__35896 = c__4550__auto__;
var G__35897 = cljs.core.count(c__4550__auto__);
var G__35898 = (0);
seq__35688 = G__35895;
chunk__35689 = G__35896;
count__35690 = G__35897;
i__35691 = G__35898;
continue;
} else {
var js_ns = cljs.core.first(seq__35688__$1);
var require_str_35899 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35899);


var G__35900 = cljs.core.next(seq__35688__$1);
var G__35901 = null;
var G__35902 = (0);
var G__35903 = (0);
seq__35688 = G__35900;
chunk__35689 = G__35901;
count__35690 = G__35902;
i__35691 = G__35903;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35696 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35696) : callback.call(null,G__35696));
} else {
var G__35697 = shadow.cljs.devtools.client.env.files_url();
var G__35698 = ((function (G__35697){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35697))
;
var G__35699 = "POST";
var G__35700 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35701 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35697,G__35698,G__35699,G__35700,G__35701);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35703){
var map__35704 = p__35703;
var map__35704__$1 = (((((!((map__35704 == null))))?(((((map__35704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35704):map__35704);
var msg = map__35704__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35704__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35704__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35706 = info;
var map__35706__$1 = (((((!((map__35706 == null))))?(((((map__35706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35706):map__35706);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35706__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35706__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35708(s__35709){
return (new cljs.core.LazySeq(null,((function (map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info){
return (function (){
var s__35709__$1 = s__35709;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35709__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35714 = cljs.core.first(xs__6277__auto__);
var map__35714__$1 = (((((!((map__35714 == null))))?(((((map__35714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35714):map__35714);
var src = map__35714__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35709__$1,map__35714,map__35714__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35708_$_iter__35710(s__35711){
return (new cljs.core.LazySeq(null,((function (s__35709__$1,map__35714,map__35714__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info){
return (function (){
var s__35711__$1 = s__35711;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35711__$1);
if(temp__5720__auto____$1){
var s__35711__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35711__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35711__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35713 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35712 = (0);
while(true){
if((i__35712 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35712);
cljs.core.chunk_append(b__35713,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35909 = (i__35712 + (1));
i__35712 = G__35909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35713),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35708_$_iter__35710(cljs.core.chunk_rest(s__35711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35713),null);
}
} else {
var warning = cljs.core.first(s__35711__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35708_$_iter__35710(cljs.core.rest(s__35711__$2)));
}
} else {
return null;
}
break;
}
});})(s__35709__$1,map__35714,map__35714__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info))
,null,null));
});})(s__35709__$1,map__35714,map__35714__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35708(cljs.core.rest(s__35709__$1)));
} else {
var G__35910 = cljs.core.rest(s__35709__$1);
s__35709__$1 = G__35910;
continue;
}
} else {
var G__35911 = cljs.core.rest(s__35709__$1);
s__35709__$1 = G__35911;
continue;
}
} else {
return null;
}
break;
}
});})(map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info))
,null,null));
});})(map__35706,map__35706__$1,sources,compiled,map__35704,map__35704__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35716_35912 = cljs.core.seq(warnings);
var chunk__35717_35913 = null;
var count__35718_35914 = (0);
var i__35719_35915 = (0);
while(true){
if((i__35719_35915 < count__35718_35914)){
var map__35728_35916 = chunk__35717_35913.cljs$core$IIndexed$_nth$arity$2(null,i__35719_35915);
var map__35728_35917__$1 = (((((!((map__35728_35916 == null))))?(((((map__35728_35916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35728_35916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35728_35916):map__35728_35916);
var w_35918 = map__35728_35917__$1;
var msg_35919__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728_35917__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728_35917__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728_35917__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728_35917__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35922)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35920),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35921),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35919__$1)].join(''));


var G__35923 = seq__35716_35912;
var G__35924 = chunk__35717_35913;
var G__35925 = count__35718_35914;
var G__35926 = (i__35719_35915 + (1));
seq__35716_35912 = G__35923;
chunk__35717_35913 = G__35924;
count__35718_35914 = G__35925;
i__35719_35915 = G__35926;
continue;
} else {
var temp__5720__auto___35927 = cljs.core.seq(seq__35716_35912);
if(temp__5720__auto___35927){
var seq__35716_35928__$1 = temp__5720__auto___35927;
if(cljs.core.chunked_seq_QMARK_(seq__35716_35928__$1)){
var c__4550__auto___35929 = cljs.core.chunk_first(seq__35716_35928__$1);
var G__35930 = cljs.core.chunk_rest(seq__35716_35928__$1);
var G__35931 = c__4550__auto___35929;
var G__35932 = cljs.core.count(c__4550__auto___35929);
var G__35933 = (0);
seq__35716_35912 = G__35930;
chunk__35717_35913 = G__35931;
count__35718_35914 = G__35932;
i__35719_35915 = G__35933;
continue;
} else {
var map__35733_35934 = cljs.core.first(seq__35716_35928__$1);
var map__35733_35935__$1 = (((((!((map__35733_35934 == null))))?(((((map__35733_35934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35733_35934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35733_35934):map__35733_35934);
var w_35936 = map__35733_35935__$1;
var msg_35937__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35935__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35935__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35935__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35935__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35940)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35938),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35939),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35937__$1)].join(''));


var G__35941 = cljs.core.next(seq__35716_35928__$1);
var G__35942 = null;
var G__35943 = (0);
var G__35944 = (0);
seq__35716_35912 = G__35941;
chunk__35717_35913 = G__35942;
count__35718_35914 = G__35943;
i__35719_35915 = G__35944;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info){
return (function (p__35735){
var map__35736 = p__35735;
var map__35736__$1 = (((((!((map__35736 == null))))?(((((map__35736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35736):map__35736);
var src = map__35736__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35736__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info){
return (function (p__35741){
var map__35742 = p__35741;
var map__35742__$1 = (((((!((map__35742 == null))))?(((((map__35742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35742):map__35742);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35742__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info){
return (function (p__35744){
var map__35745 = p__35744;
var map__35745__$1 = (((((!((map__35745 == null))))?(((((map__35745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35745):map__35745);
var rc = map__35745__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35745__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info){
return (function (p1__35702_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35702_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35706,map__35706__$1,sources,compiled,warnings,map__35704,map__35704__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35747){
var map__35748 = p__35747;
var map__35748__$1 = (((((!((map__35748 == null))))?(((((map__35748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35748):map__35748);
var msg = map__35748__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35750 = cljs.core.seq(updates);
var chunk__35752 = null;
var count__35753 = (0);
var i__35754 = (0);
while(true){
if((i__35754 < count__35753)){
var path = chunk__35752.cljs$core$IIndexed$_nth$arity$2(null,i__35754);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35791_35946 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35794_35947 = null;
var count__35795_35948 = (0);
var i__35796_35949 = (0);
while(true){
if((i__35796_35949 < count__35795_35948)){
var node_35950 = chunk__35794_35947.cljs$core$IIndexed$_nth$arity$2(null,i__35796_35949);
var path_match_35951 = shadow.cljs.devtools.client.browser.match_paths(node_35950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35951)){
var new_link_35952 = (function (){var G__35806 = node_35950.cloneNode(true);
G__35806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35951),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35806;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35951], 0));

goog.dom.insertSiblingAfter(new_link_35952,node_35950);

goog.dom.removeNode(node_35950);


var G__35953 = seq__35791_35946;
var G__35954 = chunk__35794_35947;
var G__35955 = count__35795_35948;
var G__35956 = (i__35796_35949 + (1));
seq__35791_35946 = G__35953;
chunk__35794_35947 = G__35954;
count__35795_35948 = G__35955;
i__35796_35949 = G__35956;
continue;
} else {
var G__35957 = seq__35791_35946;
var G__35958 = chunk__35794_35947;
var G__35959 = count__35795_35948;
var G__35960 = (i__35796_35949 + (1));
seq__35791_35946 = G__35957;
chunk__35794_35947 = G__35958;
count__35795_35948 = G__35959;
i__35796_35949 = G__35960;
continue;
}
} else {
var temp__5720__auto___35961 = cljs.core.seq(seq__35791_35946);
if(temp__5720__auto___35961){
var seq__35791_35962__$1 = temp__5720__auto___35961;
if(cljs.core.chunked_seq_QMARK_(seq__35791_35962__$1)){
var c__4550__auto___35963 = cljs.core.chunk_first(seq__35791_35962__$1);
var G__35964 = cljs.core.chunk_rest(seq__35791_35962__$1);
var G__35965 = c__4550__auto___35963;
var G__35966 = cljs.core.count(c__4550__auto___35963);
var G__35967 = (0);
seq__35791_35946 = G__35964;
chunk__35794_35947 = G__35965;
count__35795_35948 = G__35966;
i__35796_35949 = G__35967;
continue;
} else {
var node_35968 = cljs.core.first(seq__35791_35962__$1);
var path_match_35969 = shadow.cljs.devtools.client.browser.match_paths(node_35968.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35969)){
var new_link_35970 = (function (){var G__35808 = node_35968.cloneNode(true);
G__35808.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35969),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35808;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35969], 0));

goog.dom.insertSiblingAfter(new_link_35970,node_35968);

goog.dom.removeNode(node_35968);


var G__35971 = cljs.core.next(seq__35791_35962__$1);
var G__35972 = null;
var G__35973 = (0);
var G__35974 = (0);
seq__35791_35946 = G__35971;
chunk__35794_35947 = G__35972;
count__35795_35948 = G__35973;
i__35796_35949 = G__35974;
continue;
} else {
var G__35975 = cljs.core.next(seq__35791_35962__$1);
var G__35976 = null;
var G__35977 = (0);
var G__35978 = (0);
seq__35791_35946 = G__35975;
chunk__35794_35947 = G__35976;
count__35795_35948 = G__35977;
i__35796_35949 = G__35978;
continue;
}
}
} else {
}
}
break;
}


var G__35979 = seq__35750;
var G__35980 = chunk__35752;
var G__35981 = count__35753;
var G__35982 = (i__35754 + (1));
seq__35750 = G__35979;
chunk__35752 = G__35980;
count__35753 = G__35981;
i__35754 = G__35982;
continue;
} else {
var G__35983 = seq__35750;
var G__35984 = chunk__35752;
var G__35985 = count__35753;
var G__35986 = (i__35754 + (1));
seq__35750 = G__35983;
chunk__35752 = G__35984;
count__35753 = G__35985;
i__35754 = G__35986;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35750);
if(temp__5720__auto__){
var seq__35750__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35750__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35750__$1);
var G__35990 = cljs.core.chunk_rest(seq__35750__$1);
var G__35991 = c__4550__auto__;
var G__35992 = cljs.core.count(c__4550__auto__);
var G__35993 = (0);
seq__35750 = G__35990;
chunk__35752 = G__35991;
count__35753 = G__35992;
i__35754 = G__35993;
continue;
} else {
var path = cljs.core.first(seq__35750__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35809_35994 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35812_35995 = null;
var count__35813_35996 = (0);
var i__35814_35997 = (0);
while(true){
if((i__35814_35997 < count__35813_35996)){
var node_35998 = chunk__35812_35995.cljs$core$IIndexed$_nth$arity$2(null,i__35814_35997);
var path_match_35999 = shadow.cljs.devtools.client.browser.match_paths(node_35998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35999)){
var new_link_36000 = (function (){var G__35821 = node_35998.cloneNode(true);
G__35821.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35999),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35821;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35999], 0));

goog.dom.insertSiblingAfter(new_link_36000,node_35998);

goog.dom.removeNode(node_35998);


var G__36001 = seq__35809_35994;
var G__36002 = chunk__35812_35995;
var G__36003 = count__35813_35996;
var G__36004 = (i__35814_35997 + (1));
seq__35809_35994 = G__36001;
chunk__35812_35995 = G__36002;
count__35813_35996 = G__36003;
i__35814_35997 = G__36004;
continue;
} else {
var G__36005 = seq__35809_35994;
var G__36006 = chunk__35812_35995;
var G__36007 = count__35813_35996;
var G__36008 = (i__35814_35997 + (1));
seq__35809_35994 = G__36005;
chunk__35812_35995 = G__36006;
count__35813_35996 = G__36007;
i__35814_35997 = G__36008;
continue;
}
} else {
var temp__5720__auto___36009__$1 = cljs.core.seq(seq__35809_35994);
if(temp__5720__auto___36009__$1){
var seq__35809_36010__$1 = temp__5720__auto___36009__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35809_36010__$1)){
var c__4550__auto___36013 = cljs.core.chunk_first(seq__35809_36010__$1);
var G__36014 = cljs.core.chunk_rest(seq__35809_36010__$1);
var G__36015 = c__4550__auto___36013;
var G__36016 = cljs.core.count(c__4550__auto___36013);
var G__36017 = (0);
seq__35809_35994 = G__36014;
chunk__35812_35995 = G__36015;
count__35813_35996 = G__36016;
i__35814_35997 = G__36017;
continue;
} else {
var node_36019 = cljs.core.first(seq__35809_36010__$1);
var path_match_36020 = shadow.cljs.devtools.client.browser.match_paths(node_36019.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36020)){
var new_link_36021 = (function (){var G__35822 = node_36019.cloneNode(true);
G__35822.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36020),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35822;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36020], 0));

goog.dom.insertSiblingAfter(new_link_36021,node_36019);

goog.dom.removeNode(node_36019);


var G__36023 = cljs.core.next(seq__35809_36010__$1);
var G__36024 = null;
var G__36025 = (0);
var G__36026 = (0);
seq__35809_35994 = G__36023;
chunk__35812_35995 = G__36024;
count__35813_35996 = G__36025;
i__35814_35997 = G__36026;
continue;
} else {
var G__36027 = cljs.core.next(seq__35809_36010__$1);
var G__36028 = null;
var G__36029 = (0);
var G__36030 = (0);
seq__35809_35994 = G__36027;
chunk__35812_35995 = G__36028;
count__35813_35996 = G__36029;
i__35814_35997 = G__36030;
continue;
}
}
} else {
}
}
break;
}


var G__36031 = cljs.core.next(seq__35750__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35750 = G__36031;
chunk__35752 = G__36032;
count__35753 = G__36033;
i__35754 = G__36034;
continue;
} else {
var G__36035 = cljs.core.next(seq__35750__$1);
var G__36036 = null;
var G__36037 = (0);
var G__36038 = (0);
seq__35750 = G__36035;
chunk__35752 = G__36036;
count__35753 = G__36037;
i__35754 = G__36038;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35823){
var map__35824 = p__35823;
var map__35824__$1 = (((((!((map__35824 == null))))?(((((map__35824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35824):map__35824);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35824__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35824__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35824,map__35824__$1,id,js){
return (function (){
return eval(js);
});})(map__35824,map__35824__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35826){
var map__35827 = p__35826;
var map__35827__$1 = (((((!((map__35827 == null))))?(((((map__35827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35827):map__35827);
var msg = map__35827__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35827__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35827__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35827__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35827,map__35827__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35829){
var map__35830 = p__35829;
var map__35830__$1 = (((((!((map__35830 == null))))?(((((map__35830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35830):map__35830);
var src = map__35830__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35830__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35827,map__35827__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35827,map__35827__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35827,map__35827__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35834){
var map__35835 = p__35834;
var map__35835__$1 = (((((!((map__35835 == null))))?(((((map__35835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35835):map__35835);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35835__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35835__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35835,map__35835__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35835,map__35835__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35841){
var map__35842 = p__35841;
var map__35842__$1 = (((((!((map__35842 == null))))?(((((map__35842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35842):map__35842);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35848){
var map__35849 = p__35848;
var map__35849__$1 = (((((!((map__35849 == null))))?(((((map__35849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35849):map__35849);
var msg = map__35849__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35849__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35851 = type;
var G__35851__$1 = (((G__35851 instanceof cljs.core.Keyword))?G__35851.fqn:null);
switch (G__35851__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35852 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35853 = ((function (G__35852){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35852))
;
var G__35854 = "POST";
var G__35855 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35856 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35852,G__35853,G__35854,G__35855,G__35856);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35861){var e = e35861;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___36058 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___36058)){
var s_36059 = temp__5720__auto___36058;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_36059.onclose = ((function (s_36059,temp__5720__auto___36058){
return (function (e){
return null;
});})(s_36059,temp__5720__auto___36058))
;

s_36059.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

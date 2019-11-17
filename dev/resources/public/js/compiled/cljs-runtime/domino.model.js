goog.provide('domino.model');
goog.require('cljs.core');
goog.require('domino.util');
domino.model.normalize = (function domino$model$normalize(path_segment){
if(cljs.core.map_QMARK_(cljs.core.second(path_segment))){
return path_segment;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(path_segment),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.rest(path_segment));
}
});
domino.model.paths_by_id = (function domino$model$paths_by_id(var_args){
var G__37174 = arguments.length;
switch (G__37174) {
case 1:
return domino.model.paths_by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return domino.model.paths_by_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domino.model.paths_by_id.cljs$core$IFn$_invoke$arity$1 = (function (root){
return domino.model.paths_by_id.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,root);
});

domino.model.paths_by_id.cljs$core$IFn$_invoke$arity$3 = (function (mapped_paths,path,path_segment){
var vec__37178 = domino.model.normalize(path_segment);
var seq__37179 = cljs.core.seq(vec__37178);
var first__37180 = cljs.core.first(seq__37179);
var seq__37179__$1 = cljs.core.next(seq__37179);
var segment = first__37180;
var first__37180__$1 = cljs.core.first(seq__37179__$1);
var seq__37179__$2 = cljs.core.next(seq__37179__$1);
var opts = first__37180__$1;
var children = seq__37179__$2;
if(cljs.core.truth_(segment)){
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,segment);
var mapped_paths__$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mapped_paths,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null));
} else {
return mapped_paths;
}
})();
if((!(cljs.core.empty_QMARK_(children)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(domino.model.paths_by_id,mapped_paths__$1,path__$1),children));
} else {
return mapped_paths__$1;
}
} else {
return mapped_paths;
}
});

domino.model.paths_by_id.cljs$lang$maxFixedArity = 3;

domino.model.model__GT_paths = (function domino$model$model__GT_paths(model){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (model__$1,p__37191){
var vec__37192 = p__37191;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(0),null);
var map__37195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(1),null);
var map__37195__$1 = (((((!((map__37195 == null))))?(((((map__37195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37195):map__37195);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37195__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37195__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(model__$1,new cljs.core.Keyword(null,"id->path","id->path",460976127),cljs.core.assoc,id,path),new cljs.core.Keyword(null,"path->id","path->id",1918611848),cljs.core.assoc,path,id),new cljs.core.Keyword(null,"id->opts","id->opts",317290656),cljs.core.assoc,id,opts);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domino.model.paths_by_id,model)));
});
domino.model.id_for_path = (function domino$model$id_for_path(p__37201,path){
var map__37202 = p__37201;
var map__37202__$1 = (((((!((map__37202 == null))))?(((((map__37202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37202):map__37202);
var path__GT_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword(null,"path->id","path->id",1918611848));
var path_segment = path;
while(true){
if(cljs.core.empty_QMARK_(path_segment)){
return null;
} else {
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path__GT_id,path_segment);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return id;
} else {
var G__37412 = cljs.core.butlast(path_segment);
path_segment = G__37412;
continue;
}
}
break;
}
});
domino.model.wrap_pre = (function domino$model$wrap_pre(handler,pre){
var vec__37208 = cljs.core.reverse(pre);
var seq__37209 = cljs.core.seq(vec__37208);
var first__37210 = cljs.core.first(seq__37209);
var seq__37209__$1 = cljs.core.next(seq__37209);
var interceptor = first__37210;
var pre__$1 = seq__37209__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__37208,seq__37209,first__37210,seq__37209__$1,interceptor,pre__$1){
return (function (handler__$1,interceptor__$1){
return (interceptor__$1.cljs$core$IFn$_invoke$arity$1 ? interceptor__$1.cljs$core$IFn$_invoke$arity$1(handler__$1) : interceptor__$1.call(null,handler__$1));
});})(vec__37208,seq__37209,first__37210,seq__37209__$1,interceptor,pre__$1))
,(interceptor.cljs$core$IFn$_invoke$arity$1 ? interceptor.cljs$core$IFn$_invoke$arity$1(handler) : interceptor.call(null,handler)),pre__$1);
});
domino.model.wrap_post = (function domino$model$wrap_post(post){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (handler,interceptor){
return (interceptor.cljs$core$IFn$_invoke$arity$1 ? interceptor.cljs$core$IFn$_invoke$arity$1(handler) : interceptor.call(null,handler));
}),cljs.core.identity,cljs.core.reverse(post));
});
domino.model.wrap = (function domino$model$wrap(handler,pre,post){
if(((cljs.core.empty_QMARK_(pre)) && (cljs.core.empty_QMARK_(post)))){
return handler;
} else {
if(cljs.core.empty_QMARK_(post)){
return domino.model.wrap_pre(handler,pre);
} else {
if(cljs.core.empty_QMARK_(pre)){
var post__$1 = domino.model.wrap_post(post);
return ((function (post__$1){
return (function (ctx,inputs,outputs){
var G__37220 = (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(ctx,inputs,outputs) : handler.call(null,ctx,inputs,outputs));
return (post__$1.cljs$core$IFn$_invoke$arity$1 ? post__$1.cljs$core$IFn$_invoke$arity$1(G__37220) : post__$1.call(null,G__37220));
});
;})(post__$1))
} else {
var handler__$1 = domino.model.wrap_pre(handler,pre);
var post__$1 = domino.model.wrap_post(post);
return ((function (handler__$1,post__$1){
return (function (ctx,inputs,outputs){
var G__37221 = (handler__$1.cljs$core$IFn$_invoke$arity$3 ? handler__$1.cljs$core$IFn$_invoke$arity$3(ctx,inputs,outputs) : handler__$1.call(null,ctx,inputs,outputs));
return (post__$1.cljs$core$IFn$_invoke$arity$1 ? post__$1.cljs$core$IFn$_invoke$arity$1(G__37221) : post__$1.call(null,G__37221));
});
;})(handler__$1,post__$1))

}
}
}
});
/**
 * finds the interceptors based on the provided ids
 *   the lookup will consider parent path segments
 */
domino.model.ids_to_interceptors = (function domino$model$ids_to_interceptors(path__GT_id,id__GT_path,id__GT_opts,ids,k){
return cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37223_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(id__GT_opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(path__GT_id.cljs$core$IFn$_invoke$arity$1 ? path__GT_id.cljs$core$IFn$_invoke$arity$1(p1__37223_SHARP_) : path__GT_id.call(null,p1__37223_SHARP_)),k], null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(domino.util.generate_sub_paths,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(id__GT_path,ids)], 0))], 0)))));
});
domino.model.connect_events = (function domino$model$connect_events(p__37236,events){
var map__37300 = p__37236;
var map__37300__$1 = (((((!((map__37300 == null))))?(((((map__37300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37300):map__37300);
var path__GT_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300__$1,new cljs.core.Keyword(null,"path->id","path->id",1918611848));
var id__GT_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300__$1,new cljs.core.Keyword(null,"id->path","id->path",460976127));
var id__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300__$1,new cljs.core.Keyword(null,"id->opts","id->opts",317290656));
var path_for_id = ((function (map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts){
return (function (id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_path,id);
});})(map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts))
;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (path_for_id,map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts){
return (function (p__37345){
var map__37346 = p__37345;
var map__37346__$1 = (((((!((map__37346 == null))))?(((((map__37346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37346):map__37346);
var event = map__37346__$1;
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var pre = domino.model.ids_to_interceptors(path__GT_id,id__GT_path,id__GT_opts,inputs,new cljs.core.Keyword(null,"pre","pre",2118456869));
var post = domino.model.ids_to_interceptors(path__GT_id,id__GT_path,id__GT_opts,inputs,new cljs.core.Keyword(null,"post","post",269697687));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"inputs","inputs",865803858),((function (pre,post,map__37346,map__37346__$1,event,inputs,path_for_id,map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts){
return (function (p1__37230_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(path_for_id,p1__37230_SHARP_);
});})(pre,post,map__37346,map__37346__$1,event,inputs,path_for_id,map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts))
),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),((function (pre,post,map__37346,map__37346__$1,event,inputs,path_for_id,map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts){
return (function (p1__37231_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(path_for_id,p1__37231_SHARP_);
});})(pre,post,map__37346,map__37346__$1,event,inputs,path_for_id,map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts))
),new cljs.core.Keyword(null,"handler","handler",-195596612),domino.model.wrap,pre,post);
});})(path_for_id,map__37300,map__37300__$1,path__GT_id,id__GT_path,id__GT_opts))
,events);
});
domino.model.connect_effects = (function domino$model$connect_effects(p__37362,events){
var map__37363 = p__37362;
var map__37363__$1 = (((((!((map__37363 == null))))?(((((map__37363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37363):map__37363);
var id__GT_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37363__$1,new cljs.core.Keyword(null,"id->path","id->path",460976127));
var path_for_id = ((function (map__37363,map__37363__$1,id__GT_path){
return (function (id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_path,id);
});})(map__37363,map__37363__$1,id__GT_path))
;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (path_for_id,map__37363,map__37363__$1,id__GT_path){
return (function (event){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"inputs","inputs",865803858),((function (path_for_id,map__37363,map__37363__$1,id__GT_path){
return (function (p1__37355_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(path_for_id,p1__37355_SHARP_);
});})(path_for_id,map__37363,map__37363__$1,id__GT_path))
),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),((function (path_for_id,map__37363,map__37363__$1,id__GT_path){
return (function (p1__37357_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(path_for_id,p1__37357_SHARP_);
});})(path_for_id,map__37363,map__37363__$1,id__GT_path))
);
});})(path_for_id,map__37363,map__37363__$1,id__GT_path))
,events);
});

//# sourceMappingURL=domino.model.js.map

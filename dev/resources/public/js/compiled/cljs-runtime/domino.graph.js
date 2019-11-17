goog.provide('domino.graph');
goog.require('cljs.core');
goog.require('domino.model');
goog.require('domino.util');
goog.require('clojure.set');
domino.graph.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
domino.graph.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
/**
 * finds other nodes related by eventset
 */
domino.graph.find_related = (function domino$graph$find_related(input_node,events){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__37409){
var map__37410 = p__37409;
var map__37410__$1 = (((((!((map__37410 == null))))?(((((map__37410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37410):map__37410);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([input_node]),outputs))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37410,map__37410__$1,inputs,outputs){
return (function (p1__37408_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_node,p1__37408_SHARP_);
});})(map__37410,map__37410__$1,inputs,outputs))
,inputs);
} else {
return null;
}
}),events));
});
domino.graph.add_nodes = (function domino$graph$add_nodes(ctx,inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37413,input){
var vec__37414 = p__37413;
var map__37417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37414,(0),null);
var map__37417__$1 = (((((!((map__37417 == null))))?(((((map__37417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37417):map__37417);
var ctx__$1 = map__37417__$1;
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37417__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var inputs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37414,(1),null);
var related = domino.graph.find_related(input,nodes);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$6(cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875),domino.graph.conj_set,input),new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.update,input,domino.graph.into_set,related),cljs.core.into.cljs$core$IFn$_invoke$arity$2(inputs__$1,related)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentHashSet.EMPTY], null),inputs);
});
domino.graph.base_graph_ctx = (function domino$graph$base_graph_ctx(nodes){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.PersistentArrayMap.EMPTY], null);
});
domino.graph.input_nodes = (function domino$graph$input_nodes(events){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0)));
});
domino.graph.gen_graph = (function domino$graph$gen_graph(events){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p__37425){
var map__37426 = p__37425;
var map__37426__$1 = (((((!((map__37426 == null))))?(((((map__37426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37426):map__37426);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g,cljs.core.zipmap(i,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.set(o)))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,events);
});
domino.graph.reverse_edge_direction = (function domino$graph$reverse_edge_direction(graph){
return cljs.core.reduce_kv((function (inverted,i,o){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inverted,cljs.core.zipmap(o,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([i])))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,graph);
});
domino.graph.validate_event = (function domino$graph$validate_event(p__37434,errors){
var map__37435 = p__37434;
var map__37435__$1 = (((((!((map__37435 == null))))?(((((map__37435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37435):map__37435);
var ev = map__37435__$1;
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37435__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37435__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var temp__5718__auto__ = cljs.core.not_empty((function (){var G__37437 = cljs.core.PersistentVector.EMPTY;
var G__37437__$1 = ((cljs.core.empty_QMARK_(outputs))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37437,"event :outputs must contain at least one target"):G__37437);
if((!(cljs.core.fn_QMARK_(handler)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37437__$1,"event :handler must be a function");
} else {
return G__37437__$1;
}
})());
if(cljs.core.truth_(temp__5718__auto__)){
var event_errors = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,ev,event_errors);
} else {
return errors;
}
});
domino.graph.gen_ev_graph = (function domino$graph$gen_ev_graph(events){
var vec__37438 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37441,p__37442){
var vec__37443 = p__37441;
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37443,(1),null);
var map__37446 = p__37442;
var map__37446__$1 = (((((!((map__37446 == null))))?(((((map__37446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37446):map__37446);
var ev = map__37446__$1;
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37446__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37446__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37446__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g,cljs.core.zipmap(i,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edge","edge",919909153),ev,new cljs.core.Keyword(null,"relationship","relationship",670482699),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.set(o)], null)]))),cljs.core.zipmap(o,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edge","edge",919909153),ev,new cljs.core.Keyword(null,"relationship","relationship",670482699),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.set(i)], null)])))], 0)),domino.graph.validate_event(ev,errors)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),events);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37438,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37438,(1),null);
if((!(cljs.core.empty_QMARK_(errors)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("graph contains invalid events",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null));
} else {
return graph;
}
});
domino.graph.traversed_edges = (function domino$graph$traversed_edges(origin,graph,edge_filter){
var edges = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(edge_filter,cljs.core.get.cljs$core$IFn$_invoke$arity$3(graph,origin,cljs.core.PersistentHashSet.EMPTY));
var related_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,graph),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connections","connections",-2064090887),edges)),origin));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.set(edges),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (edges,related_nodes){
return (function (p1__37448_SHARP_){
var G__37449 = p1__37448_SHARP_;
var G__37450 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(graph,origin);
var G__37451 = edge_filter;
return (domino.graph.traversed_edges.cljs$core$IFn$_invoke$arity$3 ? domino.graph.traversed_edges.cljs$core$IFn$_invoke$arity$3(G__37449,G__37450,G__37451) : domino.graph.traversed_edges.call(null,G__37449,G__37450,G__37451));
});})(edges,related_nodes))
,related_nodes));
});
domino.graph.connected_nodes_map = (function domino$graph$connected_nodes_map(graph,edge_filter){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__37452_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connections","connections",-2064090887),domino.graph.traversed_edges(p1__37452_SHARP_,graph,edge_filter)));
})),cljs.core.keys(graph)));
});
domino.graph.subgraphs = (function domino$graph$subgraphs(graph){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37453_SHARP_){
return cljs.core.select_keys(graph,p1__37453_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(domino.graph.connected_nodes_map(graph,cljs.core.constantly(true))))));
});
domino.graph.get_db_paths = (function domino$graph$get_db_paths(model,db,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (id__GT_value,path){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id__GT_value,domino.model.id_for_path(model,path),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path));
}),cljs.core.PersistentArrayMap.EMPTY,paths);
});
domino.graph.empty_queue = cljs.core.PersistentQueue.EMPTY;
domino.graph.try_event = (function domino$graph$try_event(p__37454,p__37455,db,old_outputs){
var map__37456 = p__37454;
var map__37456__$1 = (((((!((map__37456 == null))))?(((((map__37456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37456):map__37456);
var event = map__37456__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37456__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37456__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var map__37457 = p__37455;
var map__37457__$1 = (((((!((map__37457 == null))))?(((((map__37457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37457):map__37457);
var ctx = map__37457__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37457__$1,new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570));
try{var or__4131__auto__ = (function (){var G__37465 = ctx;
var G__37466 = domino.graph.get_db_paths(model,db,inputs);
var G__37467 = old_outputs;
return (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(G__37465,G__37466,G__37467) : handler.call(null,G__37465,G__37466,G__37467));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return old_outputs;
}
}catch (e37460){if((e37460 instanceof Error)){
var e = e37460;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("failed to execute event",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"context","context",-830191113),ctx,new cljs.core.Keyword(null,"db","db",993250759),db], null),e);
} else {
throw e37460;

}
}});
/**
 * Reducer that updates context with new values updated in ctx from
 *   handler of each edge. New values are only stored when they are different
 *   from old values.
 * 
 *   In changed cases, the following keys are updated:
 *   ::changed-paths => queue of affected paths
 *   ::db => temporary relevant db within context
 *   ::change-history => sequential history of changes. List of tuples of path-value pairs
 */
domino.graph.ctx_updater = (function domino$graph$ctx_updater(edges,p__37468){
var map__37469 = p__37468;
var map__37469__$1 = (((((!((map__37469 == null))))?(((((map__37469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37469):map__37469);
var ctx = map__37469__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469__$1,new cljs.core.Keyword("domino.graph","db","domino.graph/db",1913823615));
var executed_events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469__$1,new cljs.core.Keyword("domino.graph","executed-events","domino.graph/executed-events",1801671817));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469__$1,new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__37469,map__37469__$1,ctx,db,executed_events,model){
return (function (ctx__$1,p__37471){
var map__37472 = p__37471;
var map__37472__$1 = (((((!((map__37472 == null))))?(((((map__37472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37472):map__37472);
var map__37473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37472__$1,new cljs.core.Keyword(null,"edge","edge",919909153));
var map__37473__$1 = (((((!((map__37473 == null))))?(((((map__37473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37473):map__37473);
var event = map__37473__$1;
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37473__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
if(cljs.core.contains_QMARK_(executed_events,event)){
return ctx__$1;
} else {
var ctx__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$1,new cljs.core.Keyword("domino.graph","executed-events","domino.graph/executed-events",1801671817),cljs.core.conj,event);
var old_outputs = domino.graph.get_db_paths(new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570).cljs$core$IFn$_invoke$arity$1(ctx__$2),db,outputs);
var new_outputs = domino.graph.try_event(event,ctx__$2,db,old_outputs);
return cljs.core.reduce_kv(((function (ctx__$2,old_outputs,new_outputs,map__37472,map__37472__$1,map__37473,map__37473__$1,event,outputs,map__37469,map__37469__$1,ctx,db,executed_events,model){
return (function (ctx__$3,id,new_value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_outputs,id),new_value)){
var path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id->path","id->path",460976127),id], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$3,new cljs.core.Keyword("domino.graph","changed-paths","domino.graph/changed-paths",1692515086),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.conj),domino.graph.empty_queue),domino.util.generate_sub_paths(path)),new cljs.core.Keyword("domino.graph","db","domino.graph/db",1913823615),cljs.core.assoc_in,path,new_value),new cljs.core.Keyword("domino.graph","changes","domino.graph/changes",-851557968),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new_value], null));
} else {
return ctx__$3;
}
});})(ctx__$2,old_outputs,new_outputs,map__37472,map__37472__$1,map__37473,map__37473__$1,event,outputs,map__37469,map__37469__$1,ctx,db,executed_events,model))
,ctx__$2,new_outputs);
}
});})(map__37469,map__37469__$1,ctx,db,executed_events,model))
,ctx,edges);
});
domino.graph.input_QMARK_ = (function domino$graph$input_QMARK_(edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"relationship","relationship",670482699).cljs$core$IFn$_invoke$arity$1(edge));
});
domino.graph.origin_path = (function domino$graph$origin_path(graph,origin){
var origin__$1 = cljs.core.vec(origin);
while(true){
var or__4131__auto__ = ((cljs.core.empty_QMARK_(origin__$1))?new cljs.core.Keyword("domino.graph","does-not-exist","domino.graph/does-not-exist",-781741663):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((cljs.core.contains_QMARK_(graph,origin__$1))?origin__$1:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var G__37587 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(origin__$1,(0),(cljs.core.count(origin__$1) - (1)));
origin__$1 = G__37587;
continue;
}
}
break;
}
});
/**
 * Given an origin and graph, update context with edges.
 * 
 *   When an node has been visited (as an input), it cannot be considered for an output
 */
domino.graph.eval_traversed_edges = (function domino$graph$eval_traversed_edges(var_args){
var G__37477 = arguments.length;
switch (G__37477) {
case 2:
return domino.graph.eval_traversed_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domino.graph.eval_traversed_edges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domino.graph.eval_traversed_edges.cljs$core$IFn$_invoke$arity$2 = (function (p__37478,graph){
var map__37479 = p__37478;
var map__37479__$1 = (((((!((map__37479 == null))))?(((((map__37479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37479):map__37479);
var ctx = map__37479__$1;
var changed_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37479__$1,new cljs.core.Keyword("domino.graph","changed-paths","domino.graph/changed-paths",1692515086));
var x = cljs.core.peek(changed_paths);
var xs = cljs.core.pop(changed_paths);
return domino.graph.eval_traversed_edges.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("domino.graph","changed-paths","domino.graph/changed-paths",1692515086),xs),graph,x);
});

domino.graph.eval_traversed_edges.cljs$core$IFn$_invoke$arity$3 = (function (p__37481,graph,origin){
while(true){
var map__37482 = p__37481;
var map__37482__$1 = (((((!((map__37482 == null))))?(((((map__37482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37482):map__37482);
var ctx = map__37482__$1;
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37482__$1,new cljs.core.Keyword("domino.graph","changes","domino.graph/changes",-851557968));
var focal_origin = domino.graph.origin_path(graph,origin);
var edges = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(domino.graph.input_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$3(graph,focal_origin,cljs.core.PersistentHashSet.EMPTY));
var removed_origin = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(graph,focal_origin);
var map__37484 = domino.graph.ctx_updater(edges,ctx);
var map__37484__$1 = (((((!((map__37484 == null))))?(((((map__37484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37484):map__37484);
var new_ctx = map__37484__$1;
var changed_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37484__$1,new cljs.core.Keyword("domino.graph","changed-paths","domino.graph/changed-paths",1692515086));
var x = cljs.core.peek(changed_paths);
var xs = cljs.core.pop(changed_paths);
if(cljs.core.truth_(x)){
var G__37610 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_ctx,new cljs.core.Keyword("domino.graph","changed-paths","domino.graph/changed-paths",1692515086),xs);
var G__37611 = removed_origin;
var G__37612 = x;
p__37481 = G__37610;
graph = G__37611;
origin = G__37612;
continue;
} else {
return new_ctx;
}
break;
}
});

domino.graph.eval_traversed_edges.cljs$lang$maxFixedArity = 3;

domino.graph.execute_events = (function domino$graph$execute_events(p__37486,inputs){
var map__37487 = p__37486;
var map__37487__$1 = (((((!((map__37487 == null))))?(((((map__37487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37487):map__37487);
var ctx = map__37487__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword("domino.core","graph","domino.core/graph",1746375036));
var map__37489 = domino.graph.eval_traversed_edges.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__37487,map__37487__$1,ctx,db,graph){
return (function (ctx__$1,p__37493){
var vec__37494 = p__37493;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37494,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37494,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword("domino.graph","db","domino.graph/db",1913823615),cljs.core.assoc_in,path,value),new cljs.core.Keyword("domino.graph","changed-paths","domino.graph/changed-paths",1692515086),cljs.core.conj,path),new cljs.core.Keyword("domino.graph","changes","domino.graph/changes",-851557968),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,value], null));
});})(map__37487,map__37487__$1,ctx,db,graph))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("domino.graph","db","domino.graph/db",1913823615),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("domino.graph","changed-paths","domino.graph/changed-paths",1692515086),domino.graph.empty_queue,new cljs.core.Keyword("domino.graph","executed-events","domino.graph/executed-events",1801671817),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("domino.graph","changes","domino.graph/changes",-851557968),cljs.core.PersistentVector.EMPTY], 0)),inputs),graph);
var map__37489__$1 = (((((!((map__37489 == null))))?(((((map__37489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37489):map__37489);
var db__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489__$1,new cljs.core.Keyword("domino.graph","db","domino.graph/db",1913823615));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489__$1,new cljs.core.Keyword("domino.graph","changes","domino.graph/changes",-851557968));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684),db__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change-history","change-history",-1134822326),changes], 0));
});
domino.graph.events_inputs_as_changes = (function domino$graph$events_inputs_as_changes(p__37498,event_ids){
var map__37499 = p__37498;
var map__37499__$1 = (((((!((map__37499 == null))))?(((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37499):map__37499);
var events_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword("domino.core","events-by-id","domino.core/events-by-id",-1757853099));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__37499,map__37499__$1,events_by_id,db){
return (function (changes,event_id){
var inputs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(events_by_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,new cljs.core.Keyword(null,"inputs","inputs",865803858)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(changes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (inputs,map__37499,map__37499__$1,events_by_id,db){
return (function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path)], null);
});})(inputs,map__37499,map__37499__$1,events_by_id,db))
,inputs));
});})(map__37499,map__37499__$1,events_by_id,db))
,cljs.core.PersistentVector.EMPTY,event_ids);
});

//# sourceMappingURL=domino.graph.js.map

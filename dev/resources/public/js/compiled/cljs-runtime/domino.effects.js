goog.provide('domino.effects');
goog.require('cljs.core');
goog.require('domino.graph');
goog.require('domino.util');
domino.effects.effects_by_paths = (function domino$effects$effects_by_paths(effects){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__37501){
var map__37502 = p__37501;
var map__37502__$1 = (((((!((map__37502 == null))))?(((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37502):map__37502);
var effect = map__37502__$1;
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37502__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__37502,map__37502__$1,effect,inputs){
return (function (effects__$1,path){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(effects__$1,path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),effect);
});})(map__37502,map__37502__$1,effect,inputs))
,out,inputs);
}),cljs.core.PersistentArrayMap.EMPTY,effects);
});
domino.effects.change_effects = (function domino$effects$change_effects(effects,changes){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (path){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(effects,path);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changes], 0));
});
domino.effects.execute_effect_BANG_ = (function domino$effects$execute_effect_BANG_(p__37504,p__37505){
var map__37506 = p__37504;
var map__37506__$1 = (((((!((map__37506 == null))))?(((((map__37506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37506):map__37506);
var ctx = map__37506__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37506__$1,new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37506__$1,new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684));
var map__37507 = p__37505;
var map__37507__$1 = (((((!((map__37507 == null))))?(((((map__37507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37507):map__37507);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var G__37510 = ctx;
var G__37511 = domino.graph.get_db_paths(model,db,inputs);
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__37510,G__37511) : handler.call(null,G__37510,G__37511));
});
domino.effects.execute_effects_BANG_ = (function domino$effects$execute_effects_BANG_(p__37512){
var map__37513 = p__37512;
var map__37513__$1 = (((((!((map__37513 == null))))?(((((map__37513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37513):map__37513);
var ctx = map__37513__$1;
var change_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37513__$1,new cljs.core.Keyword(null,"change-history","change-history",-1134822326));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37513__$1,new cljs.core.Keyword("domino.core","effects","domino.core/effects",-2081538673));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__37513,map__37513__$1,ctx,change_history,effects){
return (function (visited,effect){
if((!(cljs.core.contains_QMARK_(visited,effect)))){
domino.effects.execute_effect_BANG_(ctx,effect);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,effect);
} else {
return visited;
}
});})(map__37513,map__37513__$1,ctx,change_history,effects))
,cljs.core.PersistentHashSet.EMPTY,domino.effects.change_effects(effects,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(domino.util.generate_sub_paths,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,change_history)], 0)))));
});

//# sourceMappingURL=domino.effects.js.map

goog.provide('domino.validation');
goog.require('cljs.core');
domino.validation.check_valid_model = (function domino$validation$check_valid_model(p__37419){
var map__37420 = p__37419;
var map__37420__$1 = (((((!((map__37420 == null))))?(((((map__37420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37420):map__37420);
var ctx = map__37420__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37420__$1,new cljs.core.Keyword(null,"model","model",331153215));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__37420,map__37420__$1,ctx,model){
return (function (p__37422,item){
var map__37423 = p__37422;
var map__37423__$1 = (((((!((map__37423 == null))))?(((((map__37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37423):map__37423);
var ctx__$1 = map__37423__$1;
var path_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37423__$1,new cljs.core.Keyword(null,"path-ids","path-ids",-591186947));
if(cljs.core.map_QMARK_(item)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
if(cljs.core.contains_QMARK_(path_ids,id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["duplicate id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," in the model"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$1,new cljs.core.Keyword(null,"path-ids","path-ids",-591186947),cljs.core.conj,id);
}
} else {
return null;
}
} else {
return ctx__$1;
}
});})(map__37420,map__37420__$1,ctx,model))
,ctx,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.flatten,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([model], 0)));
});
domino.validation.check_valid_events = (function domino$validation$check_valid_events(p__37428){
var map__37429 = p__37428;
var map__37429__$1 = (((((!((map__37429 == null))))?(((((map__37429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37429):map__37429);
var ctx = map__37429__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var path_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"path-ids","path-ids",-591186947));
var id_in_path_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,path_ids);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (id_in_path_QMARK_,map__37429,map__37429__$1,ctx,events,path_ids){
return (function (ctx__$1,id){
if(cljs.core.truth_((id_in_path_QMARK_.cljs$core$IFn$_invoke$arity$1 ? id_in_path_QMARK_.cljs$core$IFn$_invoke$arity$1(id) : id_in_path_QMARK_.call(null,id)))){
return ctx__$1;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["no path found for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," in the model"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
}
});})(id_in_path_QMARK_,map__37429,map__37429__$1,ctx,events,path_ids))
,ctx,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.Keyword(null,"outputs","outputs",-1896513034))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0)));
});
domino.validation.maybe_throw_exception = (function domino$validation$maybe_throw_exception(p__37431){
var map__37432 = p__37431;
var map__37432__$1 = (((((!((map__37432 == null))))?(((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37432):map__37432);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(cljs.core.not_empty(errors))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("errors found while validating schema",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null));
} else {
return null;
}
});
domino.validation.validate_schema = (function domino$validation$validate_schema(ctx){
return domino.validation.check_valid_events(domino.validation.check_valid_model(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"path-ids","path-ids",-591186947),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], 0))));
});

//# sourceMappingURL=domino.validation.js.map

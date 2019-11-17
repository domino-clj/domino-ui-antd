goog.provide('domino.core');
goog.require('cljs.core');
goog.require('domino.effects');
goog.require('domino.graph');
goog.require('domino.model');
goog.require('domino.validation');
/**
 * Takes a schema of :model, :events, and :effects
 * 
 *   1. Parse the model
 *   2. Inject paths into events
 *   3. Generate the events graph
 *   4. Reset the local ctx and return value
 * 
 *   ctx is a map of:
 *  ::model => a map of model keys to paths
 *  ::events => a vector of events with pure functions that transform the state
 *  ::effects => a vector of effects with functions that produce external effects
 *  ::state => the state of actual working data
 *  
 */
domino.core.initialize = (function domino$core$initialize(var_args){
var G__37516 = arguments.length;
switch (G__37516) {
case 1:
return domino.core.initialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domino.core.initialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domino.core.initialize.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return domino.core.initialize.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.PersistentArrayMap.EMPTY);
});

domino.core.initialize.cljs$core$IFn$_invoke$arity$2 = (function (p__37517,initial_db){
var map__37518 = p__37517;
var map__37518__$1 = (((((!((map__37518 == null))))?(((((map__37518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37518):map__37518);
var schema = map__37518__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"model","model",331153215));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,new cljs.core.Keyword(null,"events","events",1792552201));
domino.validation.maybe_throw_exception(domino.validation.validate_schema(schema));

var model__$1 = domino.model.model__GT_paths(model);
var events__$1 = domino.model.connect_events(model__$1,events);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("domino.core","model","domino.core/model",-1492726570),model__$1,new cljs.core.Keyword("domino.core","events","domino.core/events",933041334),events__$1,new cljs.core.Keyword("domino.core","events-by-id","domino.core/events-by-id",-1757853099),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (model__$1,events__$1,map__37518,map__37518__$1,schema,model,effects,events){
return (function (events_by_id,event){
var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(events_by_id,id,event);
} else {
return events_by_id;
}
});})(model__$1,events__$1,map__37518,map__37518__$1,schema,model,effects,events))
,cljs.core.PersistentArrayMap.EMPTY,events__$1),new cljs.core.Keyword("domino.core","effects","domino.core/effects",-2081538673),domino.effects.effects_by_paths(domino.model.connect_effects(model__$1,effects)),new cljs.core.Keyword("domino.core","db","domino.core/db",1869675684),initial_db,new cljs.core.Keyword("domino.core","graph","domino.core/graph",1746375036),domino.graph.gen_ev_graph(events__$1)], null);
});

domino.core.initialize.cljs$lang$maxFixedArity = 2;

/**
 * Take the context and the changes which are an ordered collection of changes
 * 
 *   Assumes all changes are associative changes (i.e. vectors or hashmaps)
 */
domino.core.transact = (function domino$core$transact(ctx,changes){
var updated_ctx = domino.graph.execute_events(ctx,changes);
domino.effects.execute_effects_BANG_(updated_ctx);

return updated_ctx;
});
/**
 * Triggers events by ids as opposed to data changes
 * 
 *   Accepts the context, and a collection of event ids
 */
domino.core.trigger_events = (function domino$core$trigger_events(ctx,event_ids){
return domino.core.transact(ctx,domino.graph.events_inputs_as_changes(ctx,event_ids));
});

//# sourceMappingURL=domino.core.js.map

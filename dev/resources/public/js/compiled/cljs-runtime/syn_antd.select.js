goog.provide('syn_antd.select');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$antd$es$select$index=shadow.js.require("module$node_modules$antd$es$select$index", {});
syn_antd.select.select = reagent.core.adapt_react_class(module$node_modules$antd$es$select$index.default);
syn_antd.select.select_opt_group = reagent.core.adapt_react_class(module$node_modules$antd$es$select$index.default.OptGroup);
syn_antd.select.select_option = reagent.core.adapt_react_class(module$node_modules$antd$es$select$index.default.Option);
syn_antd.select.ant_select_option = (function syn_antd$select$ant_select_option(id_fn,label_fn,option){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.select.select_option,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(option) : id_fn.call(null,option)),new cljs.core.Keyword(null,"value","value",305978217),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(option) : id_fn.call(null,option)),new cljs.core.Keyword(null,"title","title",636505583),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(option) : label_fn.call(null,option)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(option)], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(option) : label_fn.call(null,option))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["antd-option-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(option) : id_fn.call(null,option)))].join('')], null));
});
syn_antd.select.ant_options = (function syn_antd$select$ant_options(p__37490){
var map__37491 = p__37490;
var map__37491__$1 = (((((!((map__37491 == null))))?(((((map__37491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37491):map__37491);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword(null,"options","options",99638489));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37491__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37491__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var option_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(syn_antd.select.ant_select_option,id_fn,label_fn);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(option_fn,options);
});

//# sourceMappingURL=syn_antd.select.js.map

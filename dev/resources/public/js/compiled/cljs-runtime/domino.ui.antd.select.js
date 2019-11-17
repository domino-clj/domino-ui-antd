goog.provide('domino.ui.antd.select');
goog.require('cljs.core');
goog.require('syn_antd.select');
goog.require('domino.ui.component');
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (opts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.select.select,opts], null);
});
}));
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-opt-group","select-opt-group",1938645474),(function (opts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.select.select_opt_group,opts], null);
});
}));
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-option","select-option",2024043721),(function (opts){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.select.select_option,opts], null);
});
}));
domino.ui.antd.select.ant_select_option = (function domino$ui$antd$select$ant_select_option(id_fn,label_fn,option){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syn_antd.select.select_option,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(option) : id_fn.call(null,option)),new cljs.core.Keyword(null,"value","value",305978217),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(option) : id_fn.call(null,option)),new cljs.core.Keyword(null,"title","title",636505583),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(option) : label_fn.call(null,option)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(option)], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(option) : label_fn.call(null,option))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["antd-option-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(option) : id_fn.call(null,option)))].join('')], null));
});
domino.ui.antd.select.ant_options = (function domino$ui$antd$select$ant_options(p__37786){
var map__37787 = p__37786;
var map__37787__$1 = (((((!((map__37787 == null))))?(((((map__37787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37787):map__37787);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37787__$1,new cljs.core.Keyword(null,"options","options",99638489));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37787__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37787__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var option_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(domino.ui.antd.select.ant_select_option,id_fn,label_fn);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(option_fn,options);
});

//# sourceMappingURL=domino.ui.antd.select.js.map

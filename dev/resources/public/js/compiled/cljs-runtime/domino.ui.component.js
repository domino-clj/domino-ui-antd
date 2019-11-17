goog.provide('domino.ui.component');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof domino !== 'undefined') && (typeof domino.ui !== 'undefined') && (typeof domino.ui.component !== 'undefined') && (typeof domino.ui.component.component !== 'undefined')){
} else {
domino.ui.component.component = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37366 = cljs.core.get_global_hierarchy;
return (fexpr__37366.cljs$core$IFn$_invoke$arity$0 ? fexpr__37366.cljs$core$IFn$_invoke$arity$0() : fexpr__37366.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("domino.ui.component","component"),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (opts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unsupported component: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(opts))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),opts], null));
}));

//# sourceMappingURL=domino.ui.component.js.map

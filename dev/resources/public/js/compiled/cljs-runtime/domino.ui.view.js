goog.provide('domino.ui.view');
goog.require('cljs.core');
goog.require('domino.ui.component');
goog.require('clojure.walk');
domino.ui.view.render = (function domino$ui$view$render(view){
return clojure.walk.prewalk((function (node){
if(cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37464 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"render","render",-1408033454),domino.ui.view.render);
return (domino.ui.component.component.cljs$core$IFn$_invoke$arity$1 ? domino.ui.component.component.cljs$core$IFn$_invoke$arity$1(G__37464) : domino.ui.component.component.call(null,G__37464));
})()], null);
} else {
return node;
}
}),view);
});

//# sourceMappingURL=domino.ui.view.js.map

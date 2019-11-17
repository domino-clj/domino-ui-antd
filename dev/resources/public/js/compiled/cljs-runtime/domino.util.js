goog.provide('domino.util');
goog.require('cljs.core');
/**
 * Given a `path`, generate a list of all sub-paths including `path`
 */
domino.util.generate_sub_paths = (function domino$util$generate_sub_paths(path){
var paths = cljs.core.PersistentVector.EMPTY;
var path__$1 = path;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(path__$1))){
var G__37137 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.vec(path__$1));
var G__37138 = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path__$1);
paths = G__37137;
path__$1 = G__37138;
continue;
} else {
return paths;
}
break;
}
});

//# sourceMappingURL=domino.util.js.map

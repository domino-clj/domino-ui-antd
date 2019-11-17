goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33468 = coll;
var G__33469 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33468,G__33469) : shadow.dom.lazy_native_coll_seq.call(null,G__33468,G__33469));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33491 = arguments.length;
switch (G__33491) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33501 = arguments.length;
switch (G__33501) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33506 = arguments.length;
switch (G__33506) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33513 = arguments.length;
switch (G__33513) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33520 = arguments.length;
switch (G__33520) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33524 = document;
var G__33525 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33524,G__33525);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33527 = shadow.dom.dom_node(parent);
var G__33528 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33527,G__33528);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33530 = shadow.dom.dom_node(el);
var G__33531 = cls;
return goog.dom.classlist.add(G__33530,G__33531);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33534 = shadow.dom.dom_node(el);
var G__33535 = cls;
return goog.dom.classlist.remove(G__33534,G__33535);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33538 = arguments.length;
switch (G__33538) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33539 = shadow.dom.dom_node(el);
var G__33540 = cls;
return goog.dom.classlist.toggle(G__33539,G__33540);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33541){if((e33541 instanceof Object)){
var e = e33541;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33541;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33543 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33544 = null;
var count__33545 = (0);
var i__33546 = (0);
while(true){
if((i__33546 < count__33545)){
var el = chunk__33544.cljs$core$IIndexed$_nth$arity$2(null,i__33546);
var handler_34150__$1 = ((function (seq__33543,chunk__33544,count__33545,i__33546,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33543,chunk__33544,count__33545,i__33546,el))
;
var G__33557_34151 = el;
var G__33558_34152 = cljs.core.name(ev);
var G__33559_34153 = handler_34150__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33557_34151,G__33558_34152,G__33559_34153) : shadow.dom.dom_listen.call(null,G__33557_34151,G__33558_34152,G__33559_34153));


var G__34155 = seq__33543;
var G__34156 = chunk__33544;
var G__34157 = count__33545;
var G__34158 = (i__33546 + (1));
seq__33543 = G__34155;
chunk__33544 = G__34156;
count__33545 = G__34157;
i__33546 = G__34158;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33543);
if(temp__5720__auto__){
var seq__33543__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33543__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33543__$1);
var G__34159 = cljs.core.chunk_rest(seq__33543__$1);
var G__34160 = c__4550__auto__;
var G__34161 = cljs.core.count(c__4550__auto__);
var G__34162 = (0);
seq__33543 = G__34159;
chunk__33544 = G__34160;
count__33545 = G__34161;
i__33546 = G__34162;
continue;
} else {
var el = cljs.core.first(seq__33543__$1);
var handler_34163__$1 = ((function (seq__33543,chunk__33544,count__33545,i__33546,el,seq__33543__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33543,chunk__33544,count__33545,i__33546,el,seq__33543__$1,temp__5720__auto__))
;
var G__33560_34164 = el;
var G__33561_34165 = cljs.core.name(ev);
var G__33562_34166 = handler_34163__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33560_34164,G__33561_34165,G__33562_34166) : shadow.dom.dom_listen.call(null,G__33560_34164,G__33561_34165,G__33562_34166));


var G__34167 = cljs.core.next(seq__33543__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__33543 = G__34167;
chunk__33544 = G__34168;
count__33545 = G__34169;
i__33546 = G__34170;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33565 = arguments.length;
switch (G__33565) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33567 = shadow.dom.dom_node(el);
var G__33568 = cljs.core.name(ev);
var G__33569 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33567,G__33568,G__33569) : shadow.dom.dom_listen.call(null,G__33567,G__33568,G__33569));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33570 = shadow.dom.dom_node(el);
var G__33571 = cljs.core.name(ev);
var G__33572 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33570,G__33571,G__33572) : shadow.dom.dom_listen_remove.call(null,G__33570,G__33571,G__33572));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33575 = cljs.core.seq(events);
var chunk__33576 = null;
var count__33577 = (0);
var i__33578 = (0);
while(true){
if((i__33578 < count__33577)){
var vec__33588 = chunk__33576.cljs$core$IIndexed$_nth$arity$2(null,i__33578);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33588,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34174 = seq__33575;
var G__34175 = chunk__33576;
var G__34176 = count__33577;
var G__34177 = (i__33578 + (1));
seq__33575 = G__34174;
chunk__33576 = G__34175;
count__33577 = G__34176;
i__33578 = G__34177;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33575);
if(temp__5720__auto__){
var seq__33575__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33575__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33575__$1);
var G__34178 = cljs.core.chunk_rest(seq__33575__$1);
var G__34179 = c__4550__auto__;
var G__34180 = cljs.core.count(c__4550__auto__);
var G__34181 = (0);
seq__33575 = G__34178;
chunk__33576 = G__34179;
count__33577 = G__34180;
i__33578 = G__34181;
continue;
} else {
var vec__33594 = cljs.core.first(seq__33575__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33594,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34182 = cljs.core.next(seq__33575__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33575 = G__34182;
chunk__33576 = G__34183;
count__33577 = G__34184;
i__33578 = G__34185;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33598 = cljs.core.seq(styles);
var chunk__33599 = null;
var count__33600 = (0);
var i__33601 = (0);
while(true){
if((i__33601 < count__33600)){
var vec__33616 = chunk__33599.cljs$core$IIndexed$_nth$arity$2(null,i__33601);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616,(1),null);
var G__33620_34186 = dom;
var G__33621_34187 = cljs.core.name(k);
var G__33622_34188 = (((v == null))?"":v);
goog.style.setStyle(G__33620_34186,G__33621_34187,G__33622_34188);


var G__34189 = seq__33598;
var G__34190 = chunk__33599;
var G__34191 = count__33600;
var G__34192 = (i__33601 + (1));
seq__33598 = G__34189;
chunk__33599 = G__34190;
count__33600 = G__34191;
i__33601 = G__34192;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33598);
if(temp__5720__auto__){
var seq__33598__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33598__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33598__$1);
var G__34195 = cljs.core.chunk_rest(seq__33598__$1);
var G__34196 = c__4550__auto__;
var G__34197 = cljs.core.count(c__4550__auto__);
var G__34198 = (0);
seq__33598 = G__34195;
chunk__33599 = G__34196;
count__33600 = G__34197;
i__33601 = G__34198;
continue;
} else {
var vec__33623 = cljs.core.first(seq__33598__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623,(1),null);
var G__33626_34201 = dom;
var G__33627_34202 = cljs.core.name(k);
var G__33628_34203 = (((v == null))?"":v);
goog.style.setStyle(G__33626_34201,G__33627_34202,G__33628_34203);


var G__34204 = cljs.core.next(seq__33598__$1);
var G__34205 = null;
var G__34206 = (0);
var G__34207 = (0);
seq__33598 = G__34204;
chunk__33599 = G__34205;
count__33600 = G__34206;
i__33601 = G__34207;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33629_34209 = key;
var G__33629_34210__$1 = (((G__33629_34209 instanceof cljs.core.Keyword))?G__33629_34209.fqn:null);
switch (G__33629_34210__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34215 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34215,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34215,"aria-");
}
})())){
el.setAttribute(ks_34215,value);
} else {
(el[ks_34215] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33642 = shadow.dom.dom_node(el);
var G__33643 = cls;
return goog.dom.classlist.contains(G__33642,G__33643);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33648){
var map__33649 = p__33648;
var map__33649__$1 = (((((!((map__33649 == null))))?(((((map__33649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33649):map__33649);
var props = map__33649__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33649__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33651 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33655 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33655,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33655;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33661 = arguments.length;
switch (G__33661) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33667){
var vec__33670 = p__33667;
var seq__33671 = cljs.core.seq(vec__33670);
var first__33672 = cljs.core.first(seq__33671);
var seq__33671__$1 = cljs.core.next(seq__33671);
var nn = first__33672;
var first__33672__$1 = cljs.core.first(seq__33671__$1);
var seq__33671__$2 = cljs.core.next(seq__33671__$1);
var np = first__33672__$1;
var nc = seq__33671__$2;
var node = vec__33670;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33676 = nn;
var G__33677 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33676,G__33677) : create_fn.call(null,G__33676,G__33677));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33679 = nn;
var G__33680 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33679,G__33680) : create_fn.call(null,G__33679,G__33680));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33683 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33683,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33683,(1),null);
var seq__33686_34237 = cljs.core.seq(node_children);
var chunk__33687_34238 = null;
var count__33688_34239 = (0);
var i__33689_34240 = (0);
while(true){
if((i__33689_34240 < count__33688_34239)){
var child_struct_34241 = chunk__33687_34238.cljs$core$IIndexed$_nth$arity$2(null,i__33689_34240);
var children_34242 = shadow.dom.dom_node(child_struct_34241);
if(cljs.core.seq_QMARK_(children_34242)){
var seq__33725_34243 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34242));
var chunk__33727_34244 = null;
var count__33728_34245 = (0);
var i__33729_34246 = (0);
while(true){
if((i__33729_34246 < count__33728_34245)){
var child_34247 = chunk__33727_34244.cljs$core$IIndexed$_nth$arity$2(null,i__33729_34246);
if(cljs.core.truth_(child_34247)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34247);


var G__34248 = seq__33725_34243;
var G__34249 = chunk__33727_34244;
var G__34250 = count__33728_34245;
var G__34251 = (i__33729_34246 + (1));
seq__33725_34243 = G__34248;
chunk__33727_34244 = G__34249;
count__33728_34245 = G__34250;
i__33729_34246 = G__34251;
continue;
} else {
var G__34252 = seq__33725_34243;
var G__34253 = chunk__33727_34244;
var G__34254 = count__33728_34245;
var G__34255 = (i__33729_34246 + (1));
seq__33725_34243 = G__34252;
chunk__33727_34244 = G__34253;
count__33728_34245 = G__34254;
i__33729_34246 = G__34255;
continue;
}
} else {
var temp__5720__auto___34256 = cljs.core.seq(seq__33725_34243);
if(temp__5720__auto___34256){
var seq__33725_34257__$1 = temp__5720__auto___34256;
if(cljs.core.chunked_seq_QMARK_(seq__33725_34257__$1)){
var c__4550__auto___34258 = cljs.core.chunk_first(seq__33725_34257__$1);
var G__34259 = cljs.core.chunk_rest(seq__33725_34257__$1);
var G__34260 = c__4550__auto___34258;
var G__34261 = cljs.core.count(c__4550__auto___34258);
var G__34262 = (0);
seq__33725_34243 = G__34259;
chunk__33727_34244 = G__34260;
count__33728_34245 = G__34261;
i__33729_34246 = G__34262;
continue;
} else {
var child_34263 = cljs.core.first(seq__33725_34257__$1);
if(cljs.core.truth_(child_34263)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34263);


var G__34264 = cljs.core.next(seq__33725_34257__$1);
var G__34265 = null;
var G__34266 = (0);
var G__34267 = (0);
seq__33725_34243 = G__34264;
chunk__33727_34244 = G__34265;
count__33728_34245 = G__34266;
i__33729_34246 = G__34267;
continue;
} else {
var G__34268 = cljs.core.next(seq__33725_34257__$1);
var G__34269 = null;
var G__34270 = (0);
var G__34271 = (0);
seq__33725_34243 = G__34268;
chunk__33727_34244 = G__34269;
count__33728_34245 = G__34270;
i__33729_34246 = G__34271;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34242);
}


var G__34275 = seq__33686_34237;
var G__34276 = chunk__33687_34238;
var G__34277 = count__33688_34239;
var G__34278 = (i__33689_34240 + (1));
seq__33686_34237 = G__34275;
chunk__33687_34238 = G__34276;
count__33688_34239 = G__34277;
i__33689_34240 = G__34278;
continue;
} else {
var temp__5720__auto___34279 = cljs.core.seq(seq__33686_34237);
if(temp__5720__auto___34279){
var seq__33686_34280__$1 = temp__5720__auto___34279;
if(cljs.core.chunked_seq_QMARK_(seq__33686_34280__$1)){
var c__4550__auto___34281 = cljs.core.chunk_first(seq__33686_34280__$1);
var G__34282 = cljs.core.chunk_rest(seq__33686_34280__$1);
var G__34283 = c__4550__auto___34281;
var G__34284 = cljs.core.count(c__4550__auto___34281);
var G__34285 = (0);
seq__33686_34237 = G__34282;
chunk__33687_34238 = G__34283;
count__33688_34239 = G__34284;
i__33689_34240 = G__34285;
continue;
} else {
var child_struct_34286 = cljs.core.first(seq__33686_34280__$1);
var children_34287 = shadow.dom.dom_node(child_struct_34286);
if(cljs.core.seq_QMARK_(children_34287)){
var seq__33733_34288 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34287));
var chunk__33735_34289 = null;
var count__33736_34290 = (0);
var i__33737_34291 = (0);
while(true){
if((i__33737_34291 < count__33736_34290)){
var child_34292 = chunk__33735_34289.cljs$core$IIndexed$_nth$arity$2(null,i__33737_34291);
if(cljs.core.truth_(child_34292)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34292);


var G__34293 = seq__33733_34288;
var G__34294 = chunk__33735_34289;
var G__34295 = count__33736_34290;
var G__34296 = (i__33737_34291 + (1));
seq__33733_34288 = G__34293;
chunk__33735_34289 = G__34294;
count__33736_34290 = G__34295;
i__33737_34291 = G__34296;
continue;
} else {
var G__34297 = seq__33733_34288;
var G__34298 = chunk__33735_34289;
var G__34299 = count__33736_34290;
var G__34300 = (i__33737_34291 + (1));
seq__33733_34288 = G__34297;
chunk__33735_34289 = G__34298;
count__33736_34290 = G__34299;
i__33737_34291 = G__34300;
continue;
}
} else {
var temp__5720__auto___34305__$1 = cljs.core.seq(seq__33733_34288);
if(temp__5720__auto___34305__$1){
var seq__33733_34306__$1 = temp__5720__auto___34305__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33733_34306__$1)){
var c__4550__auto___34307 = cljs.core.chunk_first(seq__33733_34306__$1);
var G__34308 = cljs.core.chunk_rest(seq__33733_34306__$1);
var G__34309 = c__4550__auto___34307;
var G__34310 = cljs.core.count(c__4550__auto___34307);
var G__34311 = (0);
seq__33733_34288 = G__34308;
chunk__33735_34289 = G__34309;
count__33736_34290 = G__34310;
i__33737_34291 = G__34311;
continue;
} else {
var child_34312 = cljs.core.first(seq__33733_34306__$1);
if(cljs.core.truth_(child_34312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34312);


var G__34313 = cljs.core.next(seq__33733_34306__$1);
var G__34314 = null;
var G__34315 = (0);
var G__34316 = (0);
seq__33733_34288 = G__34313;
chunk__33735_34289 = G__34314;
count__33736_34290 = G__34315;
i__33737_34291 = G__34316;
continue;
} else {
var G__34318 = cljs.core.next(seq__33733_34306__$1);
var G__34319 = null;
var G__34320 = (0);
var G__34321 = (0);
seq__33733_34288 = G__34318;
chunk__33735_34289 = G__34319;
count__33736_34290 = G__34320;
i__33737_34291 = G__34321;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34287);
}


var G__34323 = cljs.core.next(seq__33686_34280__$1);
var G__34324 = null;
var G__34325 = (0);
var G__34326 = (0);
seq__33686_34237 = G__34323;
chunk__33687_34238 = G__34324;
count__33688_34239 = G__34325;
i__33689_34240 = G__34326;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33754 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33754);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33758 = cljs.core.seq(node);
var chunk__33759 = null;
var count__33760 = (0);
var i__33761 = (0);
while(true){
if((i__33761 < count__33760)){
var n = chunk__33759.cljs$core$IIndexed$_nth$arity$2(null,i__33761);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34335 = seq__33758;
var G__34336 = chunk__33759;
var G__34337 = count__33760;
var G__34338 = (i__33761 + (1));
seq__33758 = G__34335;
chunk__33759 = G__34336;
count__33760 = G__34337;
i__33761 = G__34338;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33758);
if(temp__5720__auto__){
var seq__33758__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33758__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33758__$1);
var G__34340 = cljs.core.chunk_rest(seq__33758__$1);
var G__34341 = c__4550__auto__;
var G__34342 = cljs.core.count(c__4550__auto__);
var G__34343 = (0);
seq__33758 = G__34340;
chunk__33759 = G__34341;
count__33760 = G__34342;
i__33761 = G__34343;
continue;
} else {
var n = cljs.core.first(seq__33758__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34346 = cljs.core.next(seq__33758__$1);
var G__34347 = null;
var G__34348 = (0);
var G__34349 = (0);
seq__33758 = G__34346;
chunk__33759 = G__34347;
count__33760 = G__34348;
i__33761 = G__34349;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33784 = shadow.dom.dom_node(new$);
var G__33785 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33784,G__33785);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33788 = arguments.length;
switch (G__33788) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33791 = arguments.length;
switch (G__33791) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33794 = arguments.length;
switch (G__33794) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34362 = arguments.length;
var i__4731__auto___34363 = (0);
while(true){
if((i__4731__auto___34363 < len__4730__auto___34362)){
args__4736__auto__.push((arguments[i__4731__auto___34363]));

var G__34364 = (i__4731__auto___34363 + (1));
i__4731__auto___34363 = G__34364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33802_34365 = cljs.core.seq(nodes);
var chunk__33803_34366 = null;
var count__33804_34367 = (0);
var i__33805_34368 = (0);
while(true){
if((i__33805_34368 < count__33804_34367)){
var node_34369 = chunk__33803_34366.cljs$core$IIndexed$_nth$arity$2(null,i__33805_34368);
fragment.appendChild(shadow.dom._to_dom(node_34369));


var G__34370 = seq__33802_34365;
var G__34371 = chunk__33803_34366;
var G__34372 = count__33804_34367;
var G__34373 = (i__33805_34368 + (1));
seq__33802_34365 = G__34370;
chunk__33803_34366 = G__34371;
count__33804_34367 = G__34372;
i__33805_34368 = G__34373;
continue;
} else {
var temp__5720__auto___34374 = cljs.core.seq(seq__33802_34365);
if(temp__5720__auto___34374){
var seq__33802_34375__$1 = temp__5720__auto___34374;
if(cljs.core.chunked_seq_QMARK_(seq__33802_34375__$1)){
var c__4550__auto___34376 = cljs.core.chunk_first(seq__33802_34375__$1);
var G__34378 = cljs.core.chunk_rest(seq__33802_34375__$1);
var G__34379 = c__4550__auto___34376;
var G__34380 = cljs.core.count(c__4550__auto___34376);
var G__34381 = (0);
seq__33802_34365 = G__34378;
chunk__33803_34366 = G__34379;
count__33804_34367 = G__34380;
i__33805_34368 = G__34381;
continue;
} else {
var node_34384 = cljs.core.first(seq__33802_34375__$1);
fragment.appendChild(shadow.dom._to_dom(node_34384));


var G__34385 = cljs.core.next(seq__33802_34375__$1);
var G__34386 = null;
var G__34387 = (0);
var G__34388 = (0);
seq__33802_34365 = G__34385;
chunk__33803_34366 = G__34386;
count__33804_34367 = G__34387;
i__33805_34368 = G__34388;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33798){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33798));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33806_34389 = cljs.core.seq(scripts);
var chunk__33807_34390 = null;
var count__33808_34391 = (0);
var i__33809_34392 = (0);
while(true){
if((i__33809_34392 < count__33808_34391)){
var vec__33816_34393 = chunk__33807_34390.cljs$core$IIndexed$_nth$arity$2(null,i__33809_34392);
var script_tag_34394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33816_34393,(0),null);
var script_body_34395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33816_34393,(1),null);
eval(script_body_34395);


var G__34396 = seq__33806_34389;
var G__34397 = chunk__33807_34390;
var G__34398 = count__33808_34391;
var G__34399 = (i__33809_34392 + (1));
seq__33806_34389 = G__34396;
chunk__33807_34390 = G__34397;
count__33808_34391 = G__34398;
i__33809_34392 = G__34399;
continue;
} else {
var temp__5720__auto___34400 = cljs.core.seq(seq__33806_34389);
if(temp__5720__auto___34400){
var seq__33806_34401__$1 = temp__5720__auto___34400;
if(cljs.core.chunked_seq_QMARK_(seq__33806_34401__$1)){
var c__4550__auto___34402 = cljs.core.chunk_first(seq__33806_34401__$1);
var G__34403 = cljs.core.chunk_rest(seq__33806_34401__$1);
var G__34404 = c__4550__auto___34402;
var G__34405 = cljs.core.count(c__4550__auto___34402);
var G__34406 = (0);
seq__33806_34389 = G__34403;
chunk__33807_34390 = G__34404;
count__33808_34391 = G__34405;
i__33809_34392 = G__34406;
continue;
} else {
var vec__33819_34407 = cljs.core.first(seq__33806_34401__$1);
var script_tag_34408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33819_34407,(0),null);
var script_body_34409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33819_34407,(1),null);
eval(script_body_34409);


var G__34410 = cljs.core.next(seq__33806_34401__$1);
var G__34411 = null;
var G__34412 = (0);
var G__34413 = (0);
seq__33806_34389 = G__34410;
chunk__33807_34390 = G__34411;
count__33808_34391 = G__34412;
i__33809_34392 = G__34413;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33822){
var vec__33823 = p__33822;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33826 = shadow.dom.dom_node(el);
var G__33827 = cls;
return goog.dom.getAncestorByClass(G__33826,G__33827);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33831 = arguments.length;
switch (G__33831) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33834 = shadow.dom.dom_node(el);
var G__33835 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33834,G__33835);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33837 = shadow.dom.dom_node(el);
var G__33838 = cljs.core.name(tag);
var G__33839 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33837,G__33838,G__33839);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33842 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33842);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33845 = shadow.dom.dom_node(dom);
var G__33846 = value;
return goog.dom.forms.setValue(G__33845,G__33846);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33850 = cljs.core.seq(style_keys);
var chunk__33851 = null;
var count__33852 = (0);
var i__33853 = (0);
while(true){
if((i__33853 < count__33852)){
var it = chunk__33851.cljs$core$IIndexed$_nth$arity$2(null,i__33853);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34419 = seq__33850;
var G__34420 = chunk__33851;
var G__34421 = count__33852;
var G__34422 = (i__33853 + (1));
seq__33850 = G__34419;
chunk__33851 = G__34420;
count__33852 = G__34421;
i__33853 = G__34422;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33850);
if(temp__5720__auto__){
var seq__33850__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33850__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33850__$1);
var G__34423 = cljs.core.chunk_rest(seq__33850__$1);
var G__34424 = c__4550__auto__;
var G__34425 = cljs.core.count(c__4550__auto__);
var G__34426 = (0);
seq__33850 = G__34423;
chunk__33851 = G__34424;
count__33852 = G__34425;
i__33853 = G__34426;
continue;
} else {
var it = cljs.core.first(seq__33850__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34428 = cljs.core.next(seq__33850__$1);
var G__34429 = null;
var G__34430 = (0);
var G__34431 = (0);
seq__33850 = G__34428;
chunk__33851 = G__34429;
count__33852 = G__34430;
i__33853 = G__34431;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33855,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33861 = k33855;
var G__33861__$1 = (((G__33861 instanceof cljs.core.Keyword))?G__33861.fqn:null);
switch (G__33861__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33855,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33864){
var vec__33866 = p__33864;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33866,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33866,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33854){
var self__ = this;
var G__33854__$1 = this;
return (new cljs.core.RecordIter((0),G__33854__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33871 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33871(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33856,other33857){
var self__ = this;
var this33856__$1 = this;
return (((!((other33857 == null)))) && ((this33856__$1.constructor === other33857.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33856__$1.x,other33857.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33856__$1.y,other33857.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33856__$1.__extmap,other33857.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33854){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33876 = cljs.core.keyword_identical_QMARK_;
var expr__33877 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33879 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33880 = expr__33877;
return (pred__33876.cljs$core$IFn$_invoke$arity$2 ? pred__33876.cljs$core$IFn$_invoke$arity$2(G__33879,G__33880) : pred__33876.call(null,G__33879,G__33880));
})())){
return (new shadow.dom.Coordinate(G__33854,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33881 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33882 = expr__33877;
return (pred__33876.cljs$core$IFn$_invoke$arity$2 ? pred__33876.cljs$core$IFn$_invoke$arity$2(G__33881,G__33882) : pred__33876.call(null,G__33881,G__33882));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33854,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33854),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33854){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33854,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33858){
var extmap__4424__auto__ = (function (){var G__33891 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33858,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33858)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33891);
} else {
return G__33891;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33858),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33858),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33894 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33894);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33896 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33896);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33900 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33900);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33902,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33914 = k33902;
var G__33914__$1 = (((G__33914 instanceof cljs.core.Keyword))?G__33914.fqn:null);
switch (G__33914__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33902,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33917){
var vec__33919 = p__33917;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33919,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33919,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33901){
var self__ = this;
var G__33901__$1 = this;
return (new cljs.core.RecordIter((0),G__33901__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33929 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33929(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33903,other33904){
var self__ = this;
var this33903__$1 = this;
return (((!((other33904 == null)))) && ((this33903__$1.constructor === other33904.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33903__$1.w,other33904.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33903__$1.h,other33904.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33903__$1.__extmap,other33904.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33901){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33931 = cljs.core.keyword_identical_QMARK_;
var expr__33932 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33934 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33935 = expr__33932;
return (pred__33931.cljs$core$IFn$_invoke$arity$2 ? pred__33931.cljs$core$IFn$_invoke$arity$2(G__33934,G__33935) : pred__33931.call(null,G__33934,G__33935));
})())){
return (new shadow.dom.Size(G__33901,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33936 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33937 = expr__33932;
return (pred__33931.cljs$core$IFn$_invoke$arity$2 ? pred__33931.cljs$core$IFn$_invoke$arity$2(G__33936,G__33937) : pred__33931.call(null,G__33936,G__33937));
})())){
return (new shadow.dom.Size(self__.w,G__33901,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33901),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33901){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33901,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33907){
var extmap__4424__auto__ = (function (){var G__33938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33907,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33907)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33938);
} else {
return G__33938;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33907),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33907),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33945 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33945);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34503 = (i + (1));
var G__34504 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34503;
ret = G__34504;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33950){
var vec__33951 = p__33950;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33955 = arguments.length;
switch (G__33955) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33964_34514 = new_node;
var G__33965_34515 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33964_34514,G__33965_34515);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33973_34516 = new_node;
var G__33974_34517 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33973_34516,G__33974_34517);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34519 = ps;
var G__34520 = (i + (1));
el__$1 = G__34519;
i = G__34520;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33982 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33982);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33992 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33992);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33996 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33996);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34002 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34002,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34002,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34002,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34006_34526 = cljs.core.seq(props);
var chunk__34007_34527 = null;
var count__34008_34528 = (0);
var i__34009_34529 = (0);
while(true){
if((i__34009_34529 < count__34008_34528)){
var vec__34019_34531 = chunk__34007_34527.cljs$core$IIndexed$_nth$arity$2(null,i__34009_34529);
var k_34532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019_34531,(0),null);
var v_34533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019_34531,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34532);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34532),v_34533);


var G__34536 = seq__34006_34526;
var G__34537 = chunk__34007_34527;
var G__34538 = count__34008_34528;
var G__34539 = (i__34009_34529 + (1));
seq__34006_34526 = G__34536;
chunk__34007_34527 = G__34537;
count__34008_34528 = G__34538;
i__34009_34529 = G__34539;
continue;
} else {
var temp__5720__auto___34540 = cljs.core.seq(seq__34006_34526);
if(temp__5720__auto___34540){
var seq__34006_34541__$1 = temp__5720__auto___34540;
if(cljs.core.chunked_seq_QMARK_(seq__34006_34541__$1)){
var c__4550__auto___34542 = cljs.core.chunk_first(seq__34006_34541__$1);
var G__34543 = cljs.core.chunk_rest(seq__34006_34541__$1);
var G__34544 = c__4550__auto___34542;
var G__34545 = cljs.core.count(c__4550__auto___34542);
var G__34546 = (0);
seq__34006_34526 = G__34543;
chunk__34007_34527 = G__34544;
count__34008_34528 = G__34545;
i__34009_34529 = G__34546;
continue;
} else {
var vec__34023_34548 = cljs.core.first(seq__34006_34541__$1);
var k_34549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34023_34548,(0),null);
var v_34550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34023_34548,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34549);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34549),v_34550);


var G__34557 = cljs.core.next(seq__34006_34541__$1);
var G__34558 = null;
var G__34559 = (0);
var G__34560 = (0);
seq__34006_34526 = G__34557;
chunk__34007_34527 = G__34558;
count__34008_34528 = G__34559;
i__34009_34529 = G__34560;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34031 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031,(1),null);
var seq__34034_34566 = cljs.core.seq(node_children);
var chunk__34037_34567 = null;
var count__34038_34568 = (0);
var i__34039_34569 = (0);
while(true){
if((i__34039_34569 < count__34038_34568)){
var child_struct_34570 = chunk__34037_34567.cljs$core$IIndexed$_nth$arity$2(null,i__34039_34569);
if((!((child_struct_34570 == null)))){
if(typeof child_struct_34570 === 'string'){
var text_34571 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34571),child_struct_34570].join(''));
} else {
var children_34572 = shadow.dom.svg_node(child_struct_34570);
if(cljs.core.seq_QMARK_(children_34572)){
var seq__34055_34574 = cljs.core.seq(children_34572);
var chunk__34057_34575 = null;
var count__34058_34576 = (0);
var i__34059_34577 = (0);
while(true){
if((i__34059_34577 < count__34058_34576)){
var child_34578 = chunk__34057_34575.cljs$core$IIndexed$_nth$arity$2(null,i__34059_34577);
if(cljs.core.truth_(child_34578)){
node.appendChild(child_34578);


var G__34580 = seq__34055_34574;
var G__34581 = chunk__34057_34575;
var G__34582 = count__34058_34576;
var G__34583 = (i__34059_34577 + (1));
seq__34055_34574 = G__34580;
chunk__34057_34575 = G__34581;
count__34058_34576 = G__34582;
i__34059_34577 = G__34583;
continue;
} else {
var G__34584 = seq__34055_34574;
var G__34585 = chunk__34057_34575;
var G__34586 = count__34058_34576;
var G__34587 = (i__34059_34577 + (1));
seq__34055_34574 = G__34584;
chunk__34057_34575 = G__34585;
count__34058_34576 = G__34586;
i__34059_34577 = G__34587;
continue;
}
} else {
var temp__5720__auto___34588 = cljs.core.seq(seq__34055_34574);
if(temp__5720__auto___34588){
var seq__34055_34589__$1 = temp__5720__auto___34588;
if(cljs.core.chunked_seq_QMARK_(seq__34055_34589__$1)){
var c__4550__auto___34591 = cljs.core.chunk_first(seq__34055_34589__$1);
var G__34592 = cljs.core.chunk_rest(seq__34055_34589__$1);
var G__34593 = c__4550__auto___34591;
var G__34594 = cljs.core.count(c__4550__auto___34591);
var G__34595 = (0);
seq__34055_34574 = G__34592;
chunk__34057_34575 = G__34593;
count__34058_34576 = G__34594;
i__34059_34577 = G__34595;
continue;
} else {
var child_34596 = cljs.core.first(seq__34055_34589__$1);
if(cljs.core.truth_(child_34596)){
node.appendChild(child_34596);


var G__34598 = cljs.core.next(seq__34055_34589__$1);
var G__34599 = null;
var G__34600 = (0);
var G__34601 = (0);
seq__34055_34574 = G__34598;
chunk__34057_34575 = G__34599;
count__34058_34576 = G__34600;
i__34059_34577 = G__34601;
continue;
} else {
var G__34602 = cljs.core.next(seq__34055_34589__$1);
var G__34603 = null;
var G__34604 = (0);
var G__34605 = (0);
seq__34055_34574 = G__34602;
chunk__34057_34575 = G__34603;
count__34058_34576 = G__34604;
i__34059_34577 = G__34605;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34572);
}
}


var G__34607 = seq__34034_34566;
var G__34608 = chunk__34037_34567;
var G__34609 = count__34038_34568;
var G__34610 = (i__34039_34569 + (1));
seq__34034_34566 = G__34607;
chunk__34037_34567 = G__34608;
count__34038_34568 = G__34609;
i__34039_34569 = G__34610;
continue;
} else {
var G__34611 = seq__34034_34566;
var G__34612 = chunk__34037_34567;
var G__34613 = count__34038_34568;
var G__34614 = (i__34039_34569 + (1));
seq__34034_34566 = G__34611;
chunk__34037_34567 = G__34612;
count__34038_34568 = G__34613;
i__34039_34569 = G__34614;
continue;
}
} else {
var temp__5720__auto___34616 = cljs.core.seq(seq__34034_34566);
if(temp__5720__auto___34616){
var seq__34034_34618__$1 = temp__5720__auto___34616;
if(cljs.core.chunked_seq_QMARK_(seq__34034_34618__$1)){
var c__4550__auto___34619 = cljs.core.chunk_first(seq__34034_34618__$1);
var G__34620 = cljs.core.chunk_rest(seq__34034_34618__$1);
var G__34621 = c__4550__auto___34619;
var G__34622 = cljs.core.count(c__4550__auto___34619);
var G__34623 = (0);
seq__34034_34566 = G__34620;
chunk__34037_34567 = G__34621;
count__34038_34568 = G__34622;
i__34039_34569 = G__34623;
continue;
} else {
var child_struct_34624 = cljs.core.first(seq__34034_34618__$1);
if((!((child_struct_34624 == null)))){
if(typeof child_struct_34624 === 'string'){
var text_34626 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34626),child_struct_34624].join(''));
} else {
var children_34627 = shadow.dom.svg_node(child_struct_34624);
if(cljs.core.seq_QMARK_(children_34627)){
var seq__34061_34628 = cljs.core.seq(children_34627);
var chunk__34063_34629 = null;
var count__34064_34630 = (0);
var i__34065_34631 = (0);
while(true){
if((i__34065_34631 < count__34064_34630)){
var child_34633 = chunk__34063_34629.cljs$core$IIndexed$_nth$arity$2(null,i__34065_34631);
if(cljs.core.truth_(child_34633)){
node.appendChild(child_34633);


var G__34635 = seq__34061_34628;
var G__34636 = chunk__34063_34629;
var G__34637 = count__34064_34630;
var G__34638 = (i__34065_34631 + (1));
seq__34061_34628 = G__34635;
chunk__34063_34629 = G__34636;
count__34064_34630 = G__34637;
i__34065_34631 = G__34638;
continue;
} else {
var G__34639 = seq__34061_34628;
var G__34640 = chunk__34063_34629;
var G__34641 = count__34064_34630;
var G__34642 = (i__34065_34631 + (1));
seq__34061_34628 = G__34639;
chunk__34063_34629 = G__34640;
count__34064_34630 = G__34641;
i__34065_34631 = G__34642;
continue;
}
} else {
var temp__5720__auto___34644__$1 = cljs.core.seq(seq__34061_34628);
if(temp__5720__auto___34644__$1){
var seq__34061_34645__$1 = temp__5720__auto___34644__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34061_34645__$1)){
var c__4550__auto___34647 = cljs.core.chunk_first(seq__34061_34645__$1);
var G__34648 = cljs.core.chunk_rest(seq__34061_34645__$1);
var G__34649 = c__4550__auto___34647;
var G__34650 = cljs.core.count(c__4550__auto___34647);
var G__34651 = (0);
seq__34061_34628 = G__34648;
chunk__34063_34629 = G__34649;
count__34064_34630 = G__34650;
i__34065_34631 = G__34651;
continue;
} else {
var child_34652 = cljs.core.first(seq__34061_34645__$1);
if(cljs.core.truth_(child_34652)){
node.appendChild(child_34652);


var G__34655 = cljs.core.next(seq__34061_34645__$1);
var G__34656 = null;
var G__34657 = (0);
var G__34658 = (0);
seq__34061_34628 = G__34655;
chunk__34063_34629 = G__34656;
count__34064_34630 = G__34657;
i__34065_34631 = G__34658;
continue;
} else {
var G__34659 = cljs.core.next(seq__34061_34645__$1);
var G__34660 = null;
var G__34661 = (0);
var G__34662 = (0);
seq__34061_34628 = G__34659;
chunk__34063_34629 = G__34660;
count__34064_34630 = G__34661;
i__34065_34631 = G__34662;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34627);
}
}


var G__34663 = cljs.core.next(seq__34034_34618__$1);
var G__34664 = null;
var G__34665 = (0);
var G__34666 = (0);
seq__34034_34566 = G__34663;
chunk__34037_34567 = G__34664;
count__34038_34568 = G__34665;
i__34039_34569 = G__34666;
continue;
} else {
var G__34667 = cljs.core.next(seq__34034_34618__$1);
var G__34668 = null;
var G__34669 = (0);
var G__34670 = (0);
seq__34034_34566 = G__34667;
chunk__34037_34567 = G__34668;
count__34038_34568 = G__34669;
i__34039_34569 = G__34670;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__34074_34671 = shadow.dom._to_svg;
var G__34075_34672 = "string";
var G__34076_34673 = ((function (G__34074_34671,G__34075_34672){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__34074_34671,G__34075_34672))
;
goog.object.set(G__34074_34671,G__34075_34672,G__34076_34673);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__34083_34675 = shadow.dom._to_svg;
var G__34084_34676 = "null";
var G__34085_34677 = ((function (G__34083_34675,G__34084_34676){
return (function (_){
return null;
});})(G__34083_34675,G__34084_34676))
;
goog.object.set(G__34083_34675,G__34084_34676,G__34085_34677);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34678 = arguments.length;
var i__4731__auto___34679 = (0);
while(true){
if((i__4731__auto___34679 < len__4730__auto___34678)){
args__4736__auto__.push((arguments[i__4731__auto___34679]));

var G__34680 = (i__4731__auto___34679 + (1));
i__4731__auto___34679 = G__34680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq34086){
var G__34087 = cljs.core.first(seq34086);
var seq34086__$1 = cljs.core.next(seq34086);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34087,seq34086__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34095 = arguments.length;
switch (G__34095) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__34101_34695 = shadow.dom.dom_node(el);
var G__34102_34696 = cljs.core.name(event);
var G__34103_34697 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34101_34695,G__34102_34696,G__34103_34697) : shadow.dom.dom_listen.call(null,G__34101_34695,G__34102_34696,G__34103_34697));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30784__auto___34700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34700,buf,chan,event_fn){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34700,buf,chan,event_fn){
return (function (state_34109){
var state_val_34110 = (state_34109[(1)]);
if((state_val_34110 === (1))){
var state_34109__$1 = state_34109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34109__$1,(2),once_or_cleanup);
} else {
if((state_val_34110 === (2))){
var inst_34106 = (state_34109[(2)]);
var inst_34107 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34109__$1 = (function (){var statearr_34115 = state_34109;
(statearr_34115[(7)] = inst_34106);

return statearr_34115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34109__$1,inst_34107);
} else {
return null;
}
}
});})(c__30784__auto___34700,buf,chan,event_fn))
;
return ((function (switch__30479__auto__,c__30784__auto___34700,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30480__auto__ = null;
var shadow$dom$state_machine__30480__auto____0 = (function (){
var statearr_34116 = [null,null,null,null,null,null,null,null];
(statearr_34116[(0)] = shadow$dom$state_machine__30480__auto__);

(statearr_34116[(1)] = (1));

return statearr_34116;
});
var shadow$dom$state_machine__30480__auto____1 = (function (state_34109){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_34109);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e34117){if((e34117 instanceof Object)){
var ex__30483__auto__ = e34117;
var statearr_34119_34706 = state_34109;
(statearr_34119_34706[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34708 = state_34109;
state_34109 = G__34708;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
shadow$dom$state_machine__30480__auto__ = function(state_34109){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30480__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30480__auto____1.call(this,state_34109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30480__auto____0;
shadow$dom$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30480__auto____1;
return shadow$dom$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34700,buf,chan,event_fn))
})();
var state__30786__auto__ = (function (){var statearr_34121 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_34121[(6)] = c__30784__auto___34700);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34700,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map

goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__34833){
var vec__34837 = p__34833;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34837,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34837,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4120__auto__ = delay;
if(cljs.core.truth_(and__4120__auto__)){
return (delay > (0));
} else {
return and__4120__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__33401__auto__ = (0);
while(true){
if((i__33401__auto__ < n__4607__auto__)){
var map__34894_35445 = (self__.items[i__33401__auto__]);
var map__34894_35446__$1 = (((((!((map__34894_35445 == null))))?(((((map__34894_35445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34894_35445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34894_35445):map__34894_35445);
var el_35447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894_35446__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_35448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894_35446__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_35447,from_35448);

var G__35449 = (i__33401__auto__ + (1));
i__33401__auto__ = G__35449;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__33401__auto__ = (0);
while(true){
if((i__33401__auto__ < n__4607__auto__)){
var map__34897_35450 = (self__.items[i__33401__auto__]);
var map__34897_35451__$1 = (((((!((map__34897_35450 == null))))?(((((map__34897_35450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34897_35450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34897_35450):map__34897_35450);
var el_35452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34897_35451__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_35453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34897_35451__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_35454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34897_35451__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_35453["transition"] = transition_35454);

goog.style.setStyle(el_35452,to_35453);

var G__35457 = (i__33401__auto__ + (1));
i__33401__auto__ = G__35457;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__33401__auto__ = (0);
while(true){
if((i__33401__auto__ < n__4607__auto__)){
var map__34902_35459 = (self__.items[i__33401__auto__]);
var map__34902_35460__$1 = (((((!((map__34902_35459 == null))))?(((((map__34902_35459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34902_35459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34902_35459):map__34902_35459);
var el_35461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34902_35460__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_35462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34902_35460__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_35462["transition"] = null);

goog.style.setStyle(el_35461,toggles_35462);

var G__35466 = (i__33401__auto__ + (1));
i__33401__auto__ = G__35466;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34910,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34925 = k34910;
var G__34925__$1 = (((G__34925 instanceof cljs.core.Keyword))?G__34925.fqn:null);
switch (G__34925__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34910,else__4388__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34928){
var vec__34929 = p__34928;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34909){
var self__ = this;
var G__34909__$1 = this;
return (new cljs.core.RecordIter((0),G__34909__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34955 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34955(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34911,other34912){
var self__ = this;
var this34911__$1 = this;
return (((!((other34912 == null)))) && ((this34911__$1.constructor === other34912.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34911__$1.el,other34912.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34911__$1.from,other34912.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34911__$1.to,other34912.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34911__$1.toggles,other34912.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34911__$1.transition,other34912.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34911__$1.__extmap,other34912.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34909){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34975 = cljs.core.keyword_identical_QMARK_;
var expr__34976 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34980 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__34981 = expr__34976;
return (pred__34975.cljs$core$IFn$_invoke$arity$2 ? pred__34975.cljs$core$IFn$_invoke$arity$2(G__34980,G__34981) : pred__34975.call(null,G__34980,G__34981));
})())){
return (new shadow.animate.AnimationStep(G__34909,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34985 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__34986 = expr__34976;
return (pred__34975.cljs$core$IFn$_invoke$arity$2 ? pred__34975.cljs$core$IFn$_invoke$arity$2(G__34985,G__34986) : pred__34975.call(null,G__34985,G__34986));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__34909,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34987 = new cljs.core.Keyword(null,"to","to",192099007);
var G__34988 = expr__34976;
return (pred__34975.cljs$core$IFn$_invoke$arity$2 ? pred__34975.cljs$core$IFn$_invoke$arity$2(G__34987,G__34988) : pred__34975.call(null,G__34987,G__34988));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__34909,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34989 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__34990 = expr__34976;
return (pred__34975.cljs$core$IFn$_invoke$arity$2 ? pred__34975.cljs$core$IFn$_invoke$arity$2(G__34989,G__34990) : pred__34975.call(null,G__34989,G__34990));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__34909,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34992 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__34993 = expr__34976;
return (pred__34975.cljs$core$IFn$_invoke$arity$2 ? pred__34975.cljs$core$IFn$_invoke$arity$2(G__34992,G__34993) : pred__34975.call(null,G__34992,G__34993));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__34909,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34909),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34909){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__34909,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__34916){
var extmap__4424__auto__ = (function (){var G__35019 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34916,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__34916)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35019);
} else {
return G__35019;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__34916),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__34916),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__34916),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__34916),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__34916),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$animate$setup_$_iter__35027(s__35028){
return (new cljs.core.LazySeq(null,(function (){
var s__35028__$1 = s__35028;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35028__$1);
if(temp__5720__auto__){
var s__35028__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35028__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35028__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35030 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35029 = (0);
while(true){
if((i__35029 < size__4522__auto__)){
var vec__35035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35029);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035,(1),null);
cljs.core.chunk_append(b__35030,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__35505 = (i__35029 + (1));
i__35029 = G__35505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35030),shadow$animate$setup_$_iter__35027(cljs.core.chunk_rest(s__35028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35030),null);
}
} else {
var vec__35045 = cljs.core.first(s__35028__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35045,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__35027(cljs.core.rest(s__35028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__30784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto__){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto__){
return (function (state_35085){
var state_val_35086 = (state_35085[(1)]);
if((state_val_35086 === (1))){
var inst_35079 = shadow.animate.get_duration(animator);
var inst_35080 = cljs.core.async.timeout(inst_35079);
var state_35085__$1 = state_35085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35085__$1,(2),inst_35080);
} else {
if((state_val_35086 === (2))){
var inst_35082 = (state_35085[(2)]);
var inst_35083 = shadow.animate.finish_BANG_(animator);
var state_35085__$1 = (function (){var statearr_35087 = state_35085;
(statearr_35087[(7)] = inst_35083);

(statearr_35087[(8)] = inst_35082);

return statearr_35087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35085__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__30784__auto__))
;
return ((function (switch__30479__auto__,c__30784__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__30480__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__30480__auto____0 = (function (){
var statearr_35088 = [null,null,null,null,null,null,null,null,null];
(statearr_35088[(0)] = shadow$animate$continue_BANG__$_state_machine__30480__auto__);

(statearr_35088[(1)] = (1));

return statearr_35088;
});
var shadow$animate$continue_BANG__$_state_machine__30480__auto____1 = (function (state_35085){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_35085);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e35089){if((e35089 instanceof Object)){
var ex__30483__auto__ = e35089;
var statearr_35090_35516 = state_35085;
(statearr_35090_35516[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_35085;
state_35085 = G__35517;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__30480__auto__ = function(state_35085){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__30480__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__30480__auto____1.call(this,state_35085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__30480__auto____0;
shadow$animate$continue_BANG__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__30480__auto____1;
return shadow$animate$continue_BANG__$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto__))
})();
var state__30786__auto__ = (function (){var statearr_35100 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_35100[(6)] = c__30784__auto__);

return statearr_35100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto__))
);

return c__30784__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__35107 = arguments.length;
switch (G__35107) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate35113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate35113 = (function (attr,from,to,timing,delay,meta35114){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta35114 = meta35114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate35113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35115,meta35114__$1){
var self__ = this;
var _35115__$1 = this;
return (new shadow.animate.t_shadow$animate35113(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta35114__$1));
});

shadow.animate.t_shadow$animate35113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35115){
var self__ = this;
var _35115__$1 = this;
return self__.meta35114;
});

shadow.animate.t_shadow$animate35113.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate35113.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate35113.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate35113.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35113.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate35113.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate35113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta35114","meta35114",-1298223025,null)], null);
});

shadow.animate.t_shadow$animate35113.cljs$lang$type = true;

shadow.animate.t_shadow$animate35113.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate35113";

shadow.animate.t_shadow$animate35113.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate35113");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate35113.
 */
shadow.animate.__GT_t_shadow$animate35113 = (function shadow$animate$__GT_t_shadow$animate35113(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta35114){
return (new shadow.animate.t_shadow$animate35113(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta35114));
});

}

return (new shadow.animate.t_shadow$animate35113(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate35167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate35167 = (function (attr,from,to,meta35168){
this.attr = attr;
this.from = from;
this.to = to;
this.meta35168 = meta35168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate35167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35169,meta35168__$1){
var self__ = this;
var _35169__$1 = this;
return (new shadow.animate.t_shadow$animate35167(self__.attr,self__.from,self__.to,meta35168__$1));
});

shadow.animate.t_shadow$animate35167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35169){
var self__ = this;
var _35169__$1 = this;
return self__.meta35168;
});

shadow.animate.t_shadow$animate35167.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate35167.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35167.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate35167.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate35167.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35167.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta35168","meta35168",526720682,null)], null);
});

shadow.animate.t_shadow$animate35167.cljs$lang$type = true;

shadow.animate.t_shadow$animate35167.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate35167";

shadow.animate.t_shadow$animate35167.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate35167");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate35167.
 */
shadow.animate.__GT_t_shadow$animate35167 = (function shadow$animate$toggle_$___GT_t_shadow$animate35167(attr__$1,from__$1,to__$1,meta35168){
return (new shadow.animate.t_shadow$animate35167(attr__$1,from__$1,to__$1,meta35168));
});

}

return (new shadow.animate.t_shadow$animate35167(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__35210 = arguments.length;
switch (G__35210) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate35211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate35211 = (function (attrs,meta35212){
this.attrs = attrs;
this.meta35212 = meta35212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate35211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35213,meta35212__$1){
var self__ = this;
var _35213__$1 = this;
return (new shadow.animate.t_shadow$animate35211(self__.attrs,meta35212__$1));
});

shadow.animate.t_shadow$animate35211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35213){
var self__ = this;
var _35213__$1 = this;
return self__.meta35212;
});

shadow.animate.t_shadow$animate35211.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate35211.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35211.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate35211.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35211.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35211.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35212","meta35212",-1725080654,null)], null);
});

shadow.animate.t_shadow$animate35211.cljs$lang$type = true;

shadow.animate.t_shadow$animate35211.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate35211";

shadow.animate.t_shadow$animate35211.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate35211");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate35211.
 */
shadow.animate.__GT_t_shadow$animate35211 = (function shadow$animate$__GT_t_shadow$animate35211(attrs__$1,meta35212){
return (new shadow.animate.t_shadow$animate35211(attrs__$1,meta35212));
});

}

return (new shadow.animate.t_shadow$animate35211(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate35247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate35247 = (function (attr,meta35248){
this.attr = attr;
this.meta35248 = meta35248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate35247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35249,meta35248__$1){
var self__ = this;
var _35249__$1 = this;
return (new shadow.animate.t_shadow$animate35247(self__.attr,meta35248__$1));
});

shadow.animate.t_shadow$animate35247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35249){
var self__ = this;
var _35249__$1 = this;
return self__.meta35248;
});

shadow.animate.t_shadow$animate35247.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate35247.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35247.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35247.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate35247.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35247.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta35248","meta35248",362862112,null)], null);
});

shadow.animate.t_shadow$animate35247.cljs$lang$type = true;

shadow.animate.t_shadow$animate35247.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate35247";

shadow.animate.t_shadow$animate35247.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate35247");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate35247.
 */
shadow.animate.__GT_t_shadow$animate35247 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate35247(attr__$1,meta35248){
return (new shadow.animate.t_shadow$animate35247(attr__$1,meta35248));
});

}

return (new shadow.animate.t_shadow$animate35247(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35553 = arguments.length;
var i__4731__auto___35554 = (0);
while(true){
if((i__4731__auto___35554 < len__4730__auto___35553)){
args__4736__auto__.push((arguments[i__4731__auto___35554]));

var G__35555 = (i__4731__auto___35554 + (1));
i__4731__auto___35554 = G__35555;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5718__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var adef = temp__5718__auto__;
var G__35564 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__35565 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__35566 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__35567 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__35568 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__35569 = cljs.core.rest(transitions__$1);
to = G__35564;
from = G__35565;
toggles = G__35566;
timings = G__35567;
delays = G__35568;
transitions__$1 = G__35569;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate35306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate35306 = (function (transitions,to,from,toggles,timings,delays,temp__5718__auto__,meta35307){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5718__auto__ = temp__5718__auto__;
this.meta35307 = meta35307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate35306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_35308,meta35307__$1){
var self__ = this;
var _35308__$1 = this;
return (new shadow.animate.t_shadow$animate35306(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5718__auto__,meta35307__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_35308){
var self__ = this;
var _35308__$1 = this;
return self__.meta35307;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate35306.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"meta35307","meta35307",-1432114123,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate35306.cljs$lang$type = true;

shadow.animate.t_shadow$animate35306.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate35306";

shadow.animate.t_shadow$animate35306.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate35306");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate35306.
 */
shadow.animate.__GT_t_shadow$animate35306 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function shadow$animate$__GT_t_shadow$animate35306(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5718__auto____$1,meta35307){
return (new shadow.animate.t_shadow$animate35306(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5718__auto____$1,meta35307));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

}

return (new shadow.animate.t_shadow$animate35306(transitions__$1,to,from,toggles,timings,delays,temp__5718__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.animate.combine.cljs$lang$applyTo = (function (seq35261){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35261));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__35348 = arguments.length;
switch (G__35348) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__35365 = arguments.length;
switch (G__35365) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__35389 = arguments.length;
switch (G__35389) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate35390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate35390 = (function (from,to,timing,delay,meta35391){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta35391 = meta35391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate35390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35392,meta35391__$1){
var self__ = this;
var _35392__$1 = this;
return (new shadow.animate.t_shadow$animate35390(self__.from,self__.to,self__.timing,self__.delay,meta35391__$1));
});

shadow.animate.t_shadow$animate35390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35392){
var self__ = this;
var _35392__$1 = this;
return self__.meta35391;
});

shadow.animate.t_shadow$animate35390.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate35390.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate35390.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate35390.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate35390.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35390.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate35390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta35391","meta35391",1837726015,null)], null);
});

shadow.animate.t_shadow$animate35390.cljs$lang$type = true;

shadow.animate.t_shadow$animate35390.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate35390";

shadow.animate.t_shadow$animate35390.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate35390");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate35390.
 */
shadow.animate.__GT_t_shadow$animate35390 = (function shadow$animate$__GT_t_shadow$animate35390(from__$1,to__$1,timing__$1,delay__$1,meta35391){
return (new shadow.animate.t_shadow$animate35390(from__$1,to__$1,timing__$1,delay__$1,meta35391));
});

}

return (new shadow.animate.t_shadow$animate35390(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__35395 = arguments.length;
switch (G__35395) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate35396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate35396 = (function (from,to,timing,delay,meta35397){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta35397 = meta35397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate35396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35398,meta35397__$1){
var self__ = this;
var _35398__$1 = this;
return (new shadow.animate.t_shadow$animate35396(self__.from,self__.to,self__.timing,self__.delay,meta35397__$1));
});

shadow.animate.t_shadow$animate35396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35398){
var self__ = this;
var _35398__$1 = this;
return self__.meta35397;
});

shadow.animate.t_shadow$animate35396.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate35396.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate35396.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate35396.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate35396.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate35396.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate35396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta35397","meta35397",-575033888,null)], null);
});

shadow.animate.t_shadow$animate35396.cljs$lang$type = true;

shadow.animate.t_shadow$animate35396.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate35396";

shadow.animate.t_shadow$animate35396.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate35396");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate35396.
 */
shadow.animate.__GT_t_shadow$animate35396 = (function shadow$animate$__GT_t_shadow$animate35396(from__$1,to__$1,timing__$1,delay__$1,meta35397){
return (new shadow.animate.t_shadow$animate35396(from__$1,to__$1,timing__$1,delay__$1,meta35397));
});

}

return (new shadow.animate.t_shadow$animate35396(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map

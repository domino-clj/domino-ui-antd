goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30912 = arguments.length;
switch (G__30912) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30924 = (function (f,blockable,meta30925){
this.f = f;
this.blockable = blockable;
this.meta30925 = meta30925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30926,meta30925__$1){
var self__ = this;
var _30926__$1 = this;
return (new cljs.core.async.t_cljs$core$async30924(self__.f,self__.blockable,meta30925__$1));
});

cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30926){
var self__ = this;
var _30926__$1 = this;
return self__.meta30925;
});

cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30925","meta30925",215612266,null)], null);
});

cljs.core.async.t_cljs$core$async30924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30924";

cljs.core.async.t_cljs$core$async30924.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30924");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30924.
 */
cljs.core.async.__GT_t_cljs$core$async30924 = (function cljs$core$async$__GT_t_cljs$core$async30924(f__$1,blockable__$1,meta30925){
return (new cljs.core.async.t_cljs$core$async30924(f__$1,blockable__$1,meta30925));
});

}

return (new cljs.core.async.t_cljs$core$async30924(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30946 = arguments.length;
switch (G__30946) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30953 = arguments.length;
switch (G__30953) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30961 = arguments.length;
switch (G__30961) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33394 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33394) : fn1.call(null,val_33394));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33394,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33394) : fn1.call(null,val_33394));
});})(val_33394,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30981 = arguments.length;
switch (G__30981) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33406 = n;
var x_33407 = (0);
while(true){
if((x_33407 < n__4607__auto___33406)){
(a[x_33407] = (0));

var G__33408 = (x_33407 + (1));
x_33407 = G__33408;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__33410 = (i + (1));
i = G__33410;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31010 = (function (flag,meta31011){
this.flag = flag;
this.meta31011 = meta31011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31012,meta31011__$1){
var self__ = this;
var _31012__$1 = this;
return (new cljs.core.async.t_cljs$core$async31010(self__.flag,meta31011__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31012){
var self__ = this;
var _31012__$1 = this;
return self__.meta31011;
});})(flag))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31010.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31011","meta31011",2132920617,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31010";

cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31010");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31010.
 */
cljs.core.async.__GT_t_cljs$core$async31010 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31010(flag__$1,meta31011){
return (new cljs.core.async.t_cljs$core$async31010(flag__$1,meta31011));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31010(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31015 = (function (flag,cb,meta31016){
this.flag = flag;
this.cb = cb;
this.meta31016 = meta31016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31017,meta31016__$1){
var self__ = this;
var _31017__$1 = this;
return (new cljs.core.async.t_cljs$core$async31015(self__.flag,self__.cb,meta31016__$1));
});

cljs.core.async.t_cljs$core$async31015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31017){
var self__ = this;
var _31017__$1 = this;
return self__.meta31016;
});

cljs.core.async.t_cljs$core$async31015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31016","meta31016",-2058839427,null)], null);
});

cljs.core.async.t_cljs$core$async31015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31015";

cljs.core.async.t_cljs$core$async31015.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31015");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31015.
 */
cljs.core.async.__GT_t_cljs$core$async31015 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31015(flag__$1,cb__$1,meta31016){
return (new cljs.core.async.t_cljs$core$async31015(flag__$1,cb__$1,meta31016));
});

}

return (new cljs.core.async.t_cljs$core$async31015(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31026_SHARP_){
var G__31037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31026_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31037) : fret.call(null,G__31037));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31027_SHARP_){
var G__31041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31027_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31041) : fret.call(null,G__31041));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33432 = (i + (1));
i = G__33432;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33436 = arguments.length;
var i__4731__auto___33437 = (0);
while(true){
if((i__4731__auto___33437 < len__4730__auto___33436)){
args__4736__auto__.push((arguments[i__4731__auto___33437]));

var G__33438 = (i__4731__auto___33437 + (1));
i__4731__auto___33437 = G__33438;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31071){
var map__31072 = p__31071;
var map__31072__$1 = (((((!((map__31072 == null))))?(((((map__31072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31072):map__31072);
var opts = map__31072__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31051){
var G__31052 = cljs.core.first(seq31051);
var seq31051__$1 = cljs.core.next(seq31051);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31052,seq31051__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31085 = arguments.length;
switch (G__31085) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30784__auto___33458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___33458){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___33458){
return (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (7))){
var inst_31111 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31117_33459 = state_31115__$1;
(statearr_31117_33459[(2)] = inst_31111);

(statearr_31117_33459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (1))){
var state_31115__$1 = state_31115;
var statearr_31118_33460 = state_31115__$1;
(statearr_31118_33460[(2)] = null);

(statearr_31118_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (4))){
var inst_31093 = (state_31115[(7)]);
var inst_31093__$1 = (state_31115[(2)]);
var inst_31094 = (inst_31093__$1 == null);
var state_31115__$1 = (function (){var statearr_31119 = state_31115;
(statearr_31119[(7)] = inst_31093__$1);

return statearr_31119;
})();
if(cljs.core.truth_(inst_31094)){
var statearr_31120_33461 = state_31115__$1;
(statearr_31120_33461[(1)] = (5));

} else {
var statearr_31121_33462 = state_31115__$1;
(statearr_31121_33462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (13))){
var state_31115__$1 = state_31115;
var statearr_31122_33463 = state_31115__$1;
(statearr_31122_33463[(2)] = null);

(statearr_31122_33463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (6))){
var inst_31093 = (state_31115[(7)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31115__$1,(11),to,inst_31093);
} else {
if((state_val_31116 === (3))){
var inst_31113 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31115__$1,inst_31113);
} else {
if((state_val_31116 === (12))){
var state_31115__$1 = state_31115;
var statearr_31124_33464 = state_31115__$1;
(statearr_31124_33464[(2)] = null);

(statearr_31124_33464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (2))){
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31115__$1,(4),from);
} else {
if((state_val_31116 === (11))){
var inst_31104 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
if(cljs.core.truth_(inst_31104)){
var statearr_31126_33465 = state_31115__$1;
(statearr_31126_33465[(1)] = (12));

} else {
var statearr_31127_33466 = state_31115__$1;
(statearr_31127_33466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (9))){
var state_31115__$1 = state_31115;
var statearr_31128_33467 = state_31115__$1;
(statearr_31128_33467[(2)] = null);

(statearr_31128_33467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (5))){
var state_31115__$1 = state_31115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31129_33470 = state_31115__$1;
(statearr_31129_33470[(1)] = (8));

} else {
var statearr_31130_33471 = state_31115__$1;
(statearr_31130_33471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (14))){
var inst_31109 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31131_33472 = state_31115__$1;
(statearr_31131_33472[(2)] = inst_31109);

(statearr_31131_33472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (10))){
var inst_31101 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31133_33473 = state_31115__$1;
(statearr_31133_33473[(2)] = inst_31101);

(statearr_31133_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (8))){
var inst_31097 = cljs.core.async.close_BANG_(to);
var state_31115__$1 = state_31115;
var statearr_31135_33474 = state_31115__$1;
(statearr_31135_33474[(2)] = inst_31097);

(statearr_31135_33474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___33458))
;
return ((function (switch__30479__auto__,c__30784__auto___33458){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_31136 = [null,null,null,null,null,null,null,null];
(statearr_31136[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_31136[(1)] = (1));

return statearr_31136;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_31115){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31115);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31137){if((e31137 instanceof Object)){
var ex__30483__auto__ = e31137;
var statearr_31138_33475 = state_31115;
(statearr_31138_33475[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33476 = state_31115;
state_31115 = G__33476;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___33458))
})();
var state__30786__auto__ = (function (){var statearr_31139 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31139[(6)] = c__30784__auto___33458);

return statearr_31139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___33458))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31140){
var vec__31141 = p__31140;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31141,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31141,(1),null);
var job = vec__31141;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30784__auto___33477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___33477,res,vec__31141,v,p,job,jobs,results){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___33477,res,vec__31141,v,p,job,jobs,results){
return (function (state_31151){
var state_val_31152 = (state_31151[(1)]);
if((state_val_31152 === (1))){
var state_31151__$1 = state_31151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31151__$1,(2),res,v);
} else {
if((state_val_31152 === (2))){
var inst_31145 = (state_31151[(2)]);
var inst_31146 = cljs.core.async.close_BANG_(res);
var state_31151__$1 = (function (){var statearr_31154 = state_31151;
(statearr_31154[(7)] = inst_31145);

return statearr_31154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31151__$1,inst_31146);
} else {
return null;
}
}
});})(c__30784__auto___33477,res,vec__31141,v,p,job,jobs,results))
;
return ((function (switch__30479__auto__,c__30784__auto___33477,res,vec__31141,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0 = (function (){
var statearr_31155 = [null,null,null,null,null,null,null,null];
(statearr_31155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__);

(statearr_31155[(1)] = (1));

return statearr_31155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1 = (function (state_31151){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31151);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31158){if((e31158 instanceof Object)){
var ex__30483__auto__ = e31158;
var statearr_31159_33483 = state_31151;
(statearr_31159_33483[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33484 = state_31151;
state_31151 = G__33484;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = function(state_31151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1.call(this,state_31151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___33477,res,vec__31141,v,p,job,jobs,results))
})();
var state__30786__auto__ = (function (){var statearr_31160 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31160[(6)] = c__30784__auto___33477);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___33477,res,vec__31141,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31162){
var vec__31163 = p__31162;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31163,(1),null);
var job = vec__31163;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33489 = n;
var __33490 = (0);
while(true){
if((__33490 < n__4607__auto___33489)){
var G__31167_33492 = type;
var G__31167_33493__$1 = (((G__31167_33492 instanceof cljs.core.Keyword))?G__31167_33492.fqn:null);
switch (G__31167_33493__$1) {
case "compute":
var c__30784__auto___33495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33490,c__30784__auto___33495,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (__33490,c__30784__auto___33495,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async){
return (function (state_31180){
var state_val_31181 = (state_31180[(1)]);
if((state_val_31181 === (1))){
var state_31180__$1 = state_31180;
var statearr_31183_33507 = state_31180__$1;
(statearr_31183_33507[(2)] = null);

(statearr_31183_33507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (2))){
var state_31180__$1 = state_31180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31180__$1,(4),jobs);
} else {
if((state_val_31181 === (3))){
var inst_31178 = (state_31180[(2)]);
var state_31180__$1 = state_31180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31180__$1,inst_31178);
} else {
if((state_val_31181 === (4))){
var inst_31170 = (state_31180[(2)]);
var inst_31171 = process(inst_31170);
var state_31180__$1 = state_31180;
if(cljs.core.truth_(inst_31171)){
var statearr_31184_33508 = state_31180__$1;
(statearr_31184_33508[(1)] = (5));

} else {
var statearr_31185_33509 = state_31180__$1;
(statearr_31185_33509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (5))){
var state_31180__$1 = state_31180;
var statearr_31186_33510 = state_31180__$1;
(statearr_31186_33510[(2)] = null);

(statearr_31186_33510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (6))){
var state_31180__$1 = state_31180;
var statearr_31190_33512 = state_31180__$1;
(statearr_31190_33512[(2)] = null);

(statearr_31190_33512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31181 === (7))){
var inst_31176 = (state_31180[(2)]);
var state_31180__$1 = state_31180;
var statearr_31191_33514 = state_31180__$1;
(statearr_31191_33514[(2)] = inst_31176);

(statearr_31191_33514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33490,c__30784__auto___33495,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async))
;
return ((function (__33490,switch__30479__auto__,c__30784__auto___33495,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0 = (function (){
var statearr_31193 = [null,null,null,null,null,null,null];
(statearr_31193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__);

(statearr_31193[(1)] = (1));

return statearr_31193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1 = (function (state_31180){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31180);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31194){if((e31194 instanceof Object)){
var ex__30483__auto__ = e31194;
var statearr_31197_33515 = state_31180;
(statearr_31197_33515[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_31180;
state_31180 = G__33516;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = function(state_31180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1.call(this,state_31180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__;
})()
;})(__33490,switch__30479__auto__,c__30784__auto___33495,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async))
})();
var state__30786__auto__ = (function (){var statearr_31198 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31198[(6)] = c__30784__auto___33495);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(__33490,c__30784__auto___33495,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async))
);


break;
case "async":
var c__30784__auto___33517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33490,c__30784__auto___33517,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (__33490,c__30784__auto___33517,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async){
return (function (state_31211){
var state_val_31212 = (state_31211[(1)]);
if((state_val_31212 === (1))){
var state_31211__$1 = state_31211;
var statearr_31213_33518 = state_31211__$1;
(statearr_31213_33518[(2)] = null);

(statearr_31213_33518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (2))){
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31211__$1,(4),jobs);
} else {
if((state_val_31212 === (3))){
var inst_31209 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31211__$1,inst_31209);
} else {
if((state_val_31212 === (4))){
var inst_31201 = (state_31211[(2)]);
var inst_31202 = async(inst_31201);
var state_31211__$1 = state_31211;
if(cljs.core.truth_(inst_31202)){
var statearr_31214_33521 = state_31211__$1;
(statearr_31214_33521[(1)] = (5));

} else {
var statearr_31215_33522 = state_31211__$1;
(statearr_31215_33522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (5))){
var state_31211__$1 = state_31211;
var statearr_31216_33523 = state_31211__$1;
(statearr_31216_33523[(2)] = null);

(statearr_31216_33523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (6))){
var state_31211__$1 = state_31211;
var statearr_31217_33526 = state_31211__$1;
(statearr_31217_33526[(2)] = null);

(statearr_31217_33526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (7))){
var inst_31207 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31222_33529 = state_31211__$1;
(statearr_31222_33529[(2)] = inst_31207);

(statearr_31222_33529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33490,c__30784__auto___33517,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async))
;
return ((function (__33490,switch__30479__auto__,c__30784__auto___33517,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0 = (function (){
var statearr_31227 = [null,null,null,null,null,null,null];
(statearr_31227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__);

(statearr_31227[(1)] = (1));

return statearr_31227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1 = (function (state_31211){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31211);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31232){if((e31232 instanceof Object)){
var ex__30483__auto__ = e31232;
var statearr_31233_33532 = state_31211;
(statearr_31233_33532[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33533 = state_31211;
state_31211 = G__33533;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = function(state_31211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1.call(this,state_31211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__;
})()
;})(__33490,switch__30479__auto__,c__30784__auto___33517,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async))
})();
var state__30786__auto__ = (function (){var statearr_31234 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31234[(6)] = c__30784__auto___33517);

return statearr_31234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(__33490,c__30784__auto___33517,G__31167_33492,G__31167_33493__$1,n__4607__auto___33489,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31167_33493__$1)].join('')));

}

var G__33536 = (__33490 + (1));
__33490 = G__33536;
continue;
} else {
}
break;
}

var c__30784__auto___33542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___33542,jobs,results,process,async){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___33542,jobs,results,process,async){
return (function (state_31259){
var state_val_31261 = (state_31259[(1)]);
if((state_val_31261 === (7))){
var inst_31255 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
var statearr_31266_33553 = state_31259__$1;
(statearr_31266_33553[(2)] = inst_31255);

(statearr_31266_33553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (1))){
var state_31259__$1 = state_31259;
var statearr_31267_33554 = state_31259__$1;
(statearr_31267_33554[(2)] = null);

(statearr_31267_33554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (4))){
var inst_31237 = (state_31259[(7)]);
var inst_31237__$1 = (state_31259[(2)]);
var inst_31238 = (inst_31237__$1 == null);
var state_31259__$1 = (function (){var statearr_31268 = state_31259;
(statearr_31268[(7)] = inst_31237__$1);

return statearr_31268;
})();
if(cljs.core.truth_(inst_31238)){
var statearr_31269_33555 = state_31259__$1;
(statearr_31269_33555[(1)] = (5));

} else {
var statearr_31270_33556 = state_31259__$1;
(statearr_31270_33556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (6))){
var inst_31237 = (state_31259[(7)]);
var inst_31242 = (state_31259[(8)]);
var inst_31242__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31246 = [inst_31237,inst_31242__$1];
var inst_31247 = (new cljs.core.PersistentVector(null,2,(5),inst_31244,inst_31246,null));
var state_31259__$1 = (function (){var statearr_31271 = state_31259;
(statearr_31271[(8)] = inst_31242__$1);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31259__$1,(8),jobs,inst_31247);
} else {
if((state_val_31261 === (3))){
var inst_31257 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31259__$1,inst_31257);
} else {
if((state_val_31261 === (2))){
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31259__$1,(4),from);
} else {
if((state_val_31261 === (9))){
var inst_31252 = (state_31259[(2)]);
var state_31259__$1 = (function (){var statearr_31272 = state_31259;
(statearr_31272[(9)] = inst_31252);

return statearr_31272;
})();
var statearr_31273_33563 = state_31259__$1;
(statearr_31273_33563[(2)] = null);

(statearr_31273_33563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (5))){
var inst_31240 = cljs.core.async.close_BANG_(jobs);
var state_31259__$1 = state_31259;
var statearr_31276_33566 = state_31259__$1;
(statearr_31276_33566[(2)] = inst_31240);

(statearr_31276_33566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (8))){
var inst_31242 = (state_31259[(8)]);
var inst_31249 = (state_31259[(2)]);
var state_31259__$1 = (function (){var statearr_31277 = state_31259;
(statearr_31277[(10)] = inst_31249);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31259__$1,(9),results,inst_31242);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___33542,jobs,results,process,async))
;
return ((function (switch__30479__auto__,c__30784__auto___33542,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0 = (function (){
var statearr_31280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__);

(statearr_31280[(1)] = (1));

return statearr_31280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1 = (function (state_31259){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31259);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31283){if((e31283 instanceof Object)){
var ex__30483__auto__ = e31283;
var statearr_31285_33573 = state_31259;
(statearr_31285_33573[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31283;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33574 = state_31259;
state_31259 = G__33574;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = function(state_31259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1.call(this,state_31259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___33542,jobs,results,process,async))
})();
var state__30786__auto__ = (function (){var statearr_31287 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31287[(6)] = c__30784__auto___33542);

return statearr_31287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___33542,jobs,results,process,async))
);


var c__30784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto__,jobs,results,process,async){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto__,jobs,results,process,async){
return (function (state_31338){
var state_val_31339 = (state_31338[(1)]);
if((state_val_31339 === (7))){
var inst_31331 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31347_33582 = state_31338__$1;
(statearr_31347_33582[(2)] = inst_31331);

(statearr_31347_33582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (20))){
var state_31338__$1 = state_31338;
var statearr_31349_33586 = state_31338__$1;
(statearr_31349_33586[(2)] = null);

(statearr_31349_33586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (1))){
var state_31338__$1 = state_31338;
var statearr_31353_33587 = state_31338__$1;
(statearr_31353_33587[(2)] = null);

(statearr_31353_33587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (4))){
var inst_31294 = (state_31338[(7)]);
var inst_31294__$1 = (state_31338[(2)]);
var inst_31299 = (inst_31294__$1 == null);
var state_31338__$1 = (function (){var statearr_31354 = state_31338;
(statearr_31354[(7)] = inst_31294__$1);

return statearr_31354;
})();
if(cljs.core.truth_(inst_31299)){
var statearr_31355_33591 = state_31338__$1;
(statearr_31355_33591[(1)] = (5));

} else {
var statearr_31356_33592 = state_31338__$1;
(statearr_31356_33592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (15))){
var inst_31311 = (state_31338[(8)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31338__$1,(18),to,inst_31311);
} else {
if((state_val_31339 === (21))){
var inst_31326 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31357_33593 = state_31338__$1;
(statearr_31357_33593[(2)] = inst_31326);

(statearr_31357_33593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (13))){
var inst_31328 = (state_31338[(2)]);
var state_31338__$1 = (function (){var statearr_31360 = state_31338;
(statearr_31360[(9)] = inst_31328);

return statearr_31360;
})();
var statearr_31361_33597 = state_31338__$1;
(statearr_31361_33597[(2)] = null);

(statearr_31361_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (6))){
var inst_31294 = (state_31338[(7)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31338__$1,(11),inst_31294);
} else {
if((state_val_31339 === (17))){
var inst_31321 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
if(cljs.core.truth_(inst_31321)){
var statearr_31362_33605 = state_31338__$1;
(statearr_31362_33605[(1)] = (19));

} else {
var statearr_31363_33606 = state_31338__$1;
(statearr_31363_33606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (3))){
var inst_31333 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31338__$1,inst_31333);
} else {
if((state_val_31339 === (12))){
var inst_31308 = (state_31338[(10)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31338__$1,(14),inst_31308);
} else {
if((state_val_31339 === (2))){
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31338__$1,(4),results);
} else {
if((state_val_31339 === (19))){
var state_31338__$1 = state_31338;
var statearr_31364_33619 = state_31338__$1;
(statearr_31364_33619[(2)] = null);

(statearr_31364_33619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (11))){
var inst_31308 = (state_31338[(2)]);
var state_31338__$1 = (function (){var statearr_31365 = state_31338;
(statearr_31365[(10)] = inst_31308);

return statearr_31365;
})();
var statearr_31366_33630 = state_31338__$1;
(statearr_31366_33630[(2)] = null);

(statearr_31366_33630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (9))){
var state_31338__$1 = state_31338;
var statearr_31367_33631 = state_31338__$1;
(statearr_31367_33631[(2)] = null);

(statearr_31367_33631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (5))){
var state_31338__$1 = state_31338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31368_33632 = state_31338__$1;
(statearr_31368_33632[(1)] = (8));

} else {
var statearr_31370_33633 = state_31338__$1;
(statearr_31370_33633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (14))){
var inst_31315 = (state_31338[(11)]);
var inst_31311 = (state_31338[(8)]);
var inst_31311__$1 = (state_31338[(2)]);
var inst_31314 = (inst_31311__$1 == null);
var inst_31315__$1 = cljs.core.not(inst_31314);
var state_31338__$1 = (function (){var statearr_31371 = state_31338;
(statearr_31371[(11)] = inst_31315__$1);

(statearr_31371[(8)] = inst_31311__$1);

return statearr_31371;
})();
if(inst_31315__$1){
var statearr_31372_33634 = state_31338__$1;
(statearr_31372_33634[(1)] = (15));

} else {
var statearr_31373_33635 = state_31338__$1;
(statearr_31373_33635[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (16))){
var inst_31315 = (state_31338[(11)]);
var state_31338__$1 = state_31338;
var statearr_31375_33636 = state_31338__$1;
(statearr_31375_33636[(2)] = inst_31315);

(statearr_31375_33636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (10))){
var inst_31305 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31376_33637 = state_31338__$1;
(statearr_31376_33637[(2)] = inst_31305);

(statearr_31376_33637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (18))){
var inst_31318 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31377_33638 = state_31338__$1;
(statearr_31377_33638[(2)] = inst_31318);

(statearr_31377_33638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (8))){
var inst_31302 = cljs.core.async.close_BANG_(to);
var state_31338__$1 = state_31338;
var statearr_31379_33639 = state_31338__$1;
(statearr_31379_33639[(2)] = inst_31302);

(statearr_31379_33639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto__,jobs,results,process,async))
;
return ((function (switch__30479__auto__,c__30784__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0 = (function (){
var statearr_31382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__);

(statearr_31382[(1)] = (1));

return statearr_31382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1 = (function (state_31338){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31338);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31384){if((e31384 instanceof Object)){
var ex__30483__auto__ = e31384;
var statearr_31386_33640 = state_31338;
(statearr_31386_33640[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33641 = state_31338;
state_31338 = G__33641;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__ = function(state_31338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1.call(this,state_31338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto__,jobs,results,process,async))
})();
var state__30786__auto__ = (function (){var statearr_31387 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31387[(6)] = c__30784__auto__);

return statearr_31387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto__,jobs,results,process,async))
);

return c__30784__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31389 = arguments.length;
switch (G__31389) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31392 = arguments.length;
switch (G__31392) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31404 = arguments.length;
switch (G__31404) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30784__auto___33654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___33654,tc,fc){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___33654,tc,fc){
return (function (state_31446){
var state_val_31447 = (state_31446[(1)]);
if((state_val_31447 === (7))){
var inst_31442 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
var statearr_31448_33656 = state_31446__$1;
(statearr_31448_33656[(2)] = inst_31442);

(statearr_31448_33656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (1))){
var state_31446__$1 = state_31446;
var statearr_31449_33657 = state_31446__$1;
(statearr_31449_33657[(2)] = null);

(statearr_31449_33657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (4))){
var inst_31419 = (state_31446[(7)]);
var inst_31419__$1 = (state_31446[(2)]);
var inst_31420 = (inst_31419__$1 == null);
var state_31446__$1 = (function (){var statearr_31450 = state_31446;
(statearr_31450[(7)] = inst_31419__$1);

return statearr_31450;
})();
if(cljs.core.truth_(inst_31420)){
var statearr_31451_33659 = state_31446__$1;
(statearr_31451_33659[(1)] = (5));

} else {
var statearr_31452_33660 = state_31446__$1;
(statearr_31452_33660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (13))){
var state_31446__$1 = state_31446;
var statearr_31453_33662 = state_31446__$1;
(statearr_31453_33662[(2)] = null);

(statearr_31453_33662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (6))){
var inst_31419 = (state_31446[(7)]);
var inst_31425 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31419) : p.call(null,inst_31419));
var state_31446__$1 = state_31446;
if(cljs.core.truth_(inst_31425)){
var statearr_31455_33663 = state_31446__$1;
(statearr_31455_33663[(1)] = (9));

} else {
var statearr_31457_33664 = state_31446__$1;
(statearr_31457_33664[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (3))){
var inst_31444 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31446__$1,inst_31444);
} else {
if((state_val_31447 === (12))){
var state_31446__$1 = state_31446;
var statearr_31458_33665 = state_31446__$1;
(statearr_31458_33665[(2)] = null);

(statearr_31458_33665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (2))){
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31446__$1,(4),ch);
} else {
if((state_val_31447 === (11))){
var inst_31419 = (state_31446[(7)]);
var inst_31429 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31446__$1,(8),inst_31429,inst_31419);
} else {
if((state_val_31447 === (9))){
var state_31446__$1 = state_31446;
var statearr_31460_33666 = state_31446__$1;
(statearr_31460_33666[(2)] = tc);

(statearr_31460_33666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (5))){
var inst_31422 = cljs.core.async.close_BANG_(tc);
var inst_31423 = cljs.core.async.close_BANG_(fc);
var state_31446__$1 = (function (){var statearr_31461 = state_31446;
(statearr_31461[(8)] = inst_31422);

return statearr_31461;
})();
var statearr_31462_33668 = state_31446__$1;
(statearr_31462_33668[(2)] = inst_31423);

(statearr_31462_33668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (14))){
var inst_31440 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
var statearr_31463_33673 = state_31446__$1;
(statearr_31463_33673[(2)] = inst_31440);

(statearr_31463_33673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (10))){
var state_31446__$1 = state_31446;
var statearr_31464_33674 = state_31446__$1;
(statearr_31464_33674[(2)] = fc);

(statearr_31464_33674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (8))){
var inst_31435 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
if(cljs.core.truth_(inst_31435)){
var statearr_31465_33675 = state_31446__$1;
(statearr_31465_33675[(1)] = (12));

} else {
var statearr_31466_33678 = state_31446__$1;
(statearr_31466_33678[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___33654,tc,fc))
;
return ((function (switch__30479__auto__,c__30784__auto___33654,tc,fc){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_31467 = [null,null,null,null,null,null,null,null,null];
(statearr_31467[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_31467[(1)] = (1));

return statearr_31467;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_31446){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31446);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31468){if((e31468 instanceof Object)){
var ex__30483__auto__ = e31468;
var statearr_31469_33681 = state_31446;
(statearr_31469_33681[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33682 = state_31446;
state_31446 = G__33682;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_31446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_31446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___33654,tc,fc))
})();
var state__30786__auto__ = (function (){var statearr_31470 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31470[(6)] = c__30784__auto___33654);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___33654,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto__){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto__){
return (function (state_31492){
var state_val_31493 = (state_31492[(1)]);
if((state_val_31493 === (7))){
var inst_31488 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31494_33698 = state_31492__$1;
(statearr_31494_33698[(2)] = inst_31488);

(statearr_31494_33698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (1))){
var inst_31471 = init;
var state_31492__$1 = (function (){var statearr_31498 = state_31492;
(statearr_31498[(7)] = inst_31471);

return statearr_31498;
})();
var statearr_31499_33700 = state_31492__$1;
(statearr_31499_33700[(2)] = null);

(statearr_31499_33700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (4))){
var inst_31475 = (state_31492[(8)]);
var inst_31475__$1 = (state_31492[(2)]);
var inst_31476 = (inst_31475__$1 == null);
var state_31492__$1 = (function (){var statearr_31500 = state_31492;
(statearr_31500[(8)] = inst_31475__$1);

return statearr_31500;
})();
if(cljs.core.truth_(inst_31476)){
var statearr_31502_33704 = state_31492__$1;
(statearr_31502_33704[(1)] = (5));

} else {
var statearr_31505_33705 = state_31492__$1;
(statearr_31505_33705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (6))){
var inst_31475 = (state_31492[(8)]);
var inst_31471 = (state_31492[(7)]);
var inst_31479 = (state_31492[(9)]);
var inst_31479__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31471,inst_31475) : f.call(null,inst_31471,inst_31475));
var inst_31480 = cljs.core.reduced_QMARK_(inst_31479__$1);
var state_31492__$1 = (function (){var statearr_31508 = state_31492;
(statearr_31508[(9)] = inst_31479__$1);

return statearr_31508;
})();
if(inst_31480){
var statearr_31509_33706 = state_31492__$1;
(statearr_31509_33706[(1)] = (8));

} else {
var statearr_31511_33707 = state_31492__$1;
(statearr_31511_33707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (3))){
var inst_31490 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31492__$1,inst_31490);
} else {
if((state_val_31493 === (2))){
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31492__$1,(4),ch);
} else {
if((state_val_31493 === (9))){
var inst_31479 = (state_31492[(9)]);
var inst_31471 = inst_31479;
var state_31492__$1 = (function (){var statearr_31512 = state_31492;
(statearr_31512[(7)] = inst_31471);

return statearr_31512;
})();
var statearr_31513_33710 = state_31492__$1;
(statearr_31513_33710[(2)] = null);

(statearr_31513_33710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (5))){
var inst_31471 = (state_31492[(7)]);
var state_31492__$1 = state_31492;
var statearr_31519_33711 = state_31492__$1;
(statearr_31519_33711[(2)] = inst_31471);

(statearr_31519_33711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (10))){
var inst_31486 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31520_33712 = state_31492__$1;
(statearr_31520_33712[(2)] = inst_31486);

(statearr_31520_33712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (8))){
var inst_31479 = (state_31492[(9)]);
var inst_31482 = cljs.core.deref(inst_31479);
var state_31492__$1 = state_31492;
var statearr_31521_33719 = state_31492__$1;
(statearr_31521_33719[(2)] = inst_31482);

(statearr_31521_33719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto__))
;
return ((function (switch__30479__auto__,c__30784__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30480__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30480__auto____0 = (function (){
var statearr_31522 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31522[(0)] = cljs$core$async$reduce_$_state_machine__30480__auto__);

(statearr_31522[(1)] = (1));

return statearr_31522;
});
var cljs$core$async$reduce_$_state_machine__30480__auto____1 = (function (state_31492){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31492);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31523){if((e31523 instanceof Object)){
var ex__30483__auto__ = e31523;
var statearr_31524_33731 = state_31492;
(statearr_31524_33731[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33732 = state_31492;
state_31492 = G__33732;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30480__auto__ = function(state_31492){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30480__auto____1.call(this,state_31492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30480__auto____0;
cljs$core$async$reduce_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30480__auto____1;
return cljs$core$async$reduce_$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto__))
})();
var state__30786__auto__ = (function (){var statearr_31525 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31525[(6)] = c__30784__auto__);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto__))
);

return c__30784__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto__,f__$1){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto__,f__$1){
return (function (state_31531){
var state_val_31532 = (state_31531[(1)]);
if((state_val_31532 === (1))){
var inst_31526 = cljs.core.async.reduce(f__$1,init,ch);
var state_31531__$1 = state_31531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31531__$1,(2),inst_31526);
} else {
if((state_val_31532 === (2))){
var inst_31528 = (state_31531[(2)]);
var inst_31529 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31528) : f__$1.call(null,inst_31528));
var state_31531__$1 = state_31531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31531__$1,inst_31529);
} else {
return null;
}
}
});})(c__30784__auto__,f__$1))
;
return ((function (switch__30479__auto__,c__30784__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30480__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30480__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$transduce_$_state_machine__30480__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$transduce_$_state_machine__30480__auto____1 = (function (state_31531){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31531);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31534){if((e31534 instanceof Object)){
var ex__30483__auto__ = e31534;
var statearr_31535_33739 = state_31531;
(statearr_31535_33739[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31534;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33744 = state_31531;
state_31531 = G__33744;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30480__auto__ = function(state_31531){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30480__auto____1.call(this,state_31531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30480__auto____0;
cljs$core$async$transduce_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30480__auto____1;
return cljs$core$async$transduce_$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto__,f__$1))
})();
var state__30786__auto__ = (function (){var statearr_31536 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31536[(6)] = c__30784__auto__);

return statearr_31536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto__,f__$1))
);

return c__30784__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31542 = arguments.length;
switch (G__31542) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto__){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto__){
return (function (state_31570){
var state_val_31571 = (state_31570[(1)]);
if((state_val_31571 === (7))){
var inst_31549 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31574_33746 = state_31570__$1;
(statearr_31574_33746[(2)] = inst_31549);

(statearr_31574_33746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (1))){
var inst_31543 = cljs.core.seq(coll);
var inst_31544 = inst_31543;
var state_31570__$1 = (function (){var statearr_31579 = state_31570;
(statearr_31579[(7)] = inst_31544);

return statearr_31579;
})();
var statearr_31580_33747 = state_31570__$1;
(statearr_31580_33747[(2)] = null);

(statearr_31580_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (4))){
var inst_31544 = (state_31570[(7)]);
var inst_31547 = cljs.core.first(inst_31544);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31570__$1,(7),ch,inst_31547);
} else {
if((state_val_31571 === (13))){
var inst_31564 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31581_33753 = state_31570__$1;
(statearr_31581_33753[(2)] = inst_31564);

(statearr_31581_33753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (6))){
var inst_31552 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31552)){
var statearr_31582_33756 = state_31570__$1;
(statearr_31582_33756[(1)] = (8));

} else {
var statearr_31583_33757 = state_31570__$1;
(statearr_31583_33757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (3))){
var inst_31568 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31570__$1,inst_31568);
} else {
if((state_val_31571 === (12))){
var state_31570__$1 = state_31570;
var statearr_31585_33762 = state_31570__$1;
(statearr_31585_33762[(2)] = null);

(statearr_31585_33762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (2))){
var inst_31544 = (state_31570[(7)]);
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31544)){
var statearr_31586_33768 = state_31570__$1;
(statearr_31586_33768[(1)] = (4));

} else {
var statearr_31587_33773 = state_31570__$1;
(statearr_31587_33773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (11))){
var inst_31561 = cljs.core.async.close_BANG_(ch);
var state_31570__$1 = state_31570;
var statearr_31588_33774 = state_31570__$1;
(statearr_31588_33774[(2)] = inst_31561);

(statearr_31588_33774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (9))){
var state_31570__$1 = state_31570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31591_33780 = state_31570__$1;
(statearr_31591_33780[(1)] = (11));

} else {
var statearr_31592_33781 = state_31570__$1;
(statearr_31592_33781[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (5))){
var inst_31544 = (state_31570[(7)]);
var state_31570__$1 = state_31570;
var statearr_31593_33782 = state_31570__$1;
(statearr_31593_33782[(2)] = inst_31544);

(statearr_31593_33782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (10))){
var inst_31566 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31594_33783 = state_31570__$1;
(statearr_31594_33783[(2)] = inst_31566);

(statearr_31594_33783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (8))){
var inst_31544 = (state_31570[(7)]);
var inst_31554 = cljs.core.next(inst_31544);
var inst_31544__$1 = inst_31554;
var state_31570__$1 = (function (){var statearr_31595 = state_31570;
(statearr_31595[(7)] = inst_31544__$1);

return statearr_31595;
})();
var statearr_31596_33786 = state_31570__$1;
(statearr_31596_33786[(2)] = null);

(statearr_31596_33786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto__))
;
return ((function (switch__30479__auto__,c__30784__auto__){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_31597 = [null,null,null,null,null,null,null,null];
(statearr_31597[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_31597[(1)] = (1));

return statearr_31597;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_31570){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31570);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31598){if((e31598 instanceof Object)){
var ex__30483__auto__ = e31598;
var statearr_31599_33790 = state_31570;
(statearr_31599_33790[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33792 = state_31570;
state_31570 = G__33792;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_31570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_31570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto__))
})();
var state__30786__auto__ = (function (){var statearr_31603 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31603[(6)] = c__30784__auto__);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto__))
);

return c__30784__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31619 = (function (ch,cs,meta31620){
this.ch = ch;
this.cs = cs;
this.meta31620 = meta31620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31621,meta31620__$1){
var self__ = this;
var _31621__$1 = this;
return (new cljs.core.async.t_cljs$core$async31619(self__.ch,self__.cs,meta31620__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31621){
var self__ = this;
var _31621__$1 = this;
return self__.meta31620;
});})(cs))
;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31619.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31620","meta31620",-1734361278,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31619";

cljs.core.async.t_cljs$core$async31619.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31619");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31619.
 */
cljs.core.async.__GT_t_cljs$core$async31619 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31619(ch__$1,cs__$1,meta31620){
return (new cljs.core.async.t_cljs$core$async31619(ch__$1,cs__$1,meta31620));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31619(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30784__auto___33799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___33799,cs,m,dchan,dctr,done){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___33799,cs,m,dchan,dctr,done){
return (function (state_31779){
var state_val_31780 = (state_31779[(1)]);
if((state_val_31780 === (7))){
var inst_31773 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31784_33801 = state_31779__$1;
(statearr_31784_33801[(2)] = inst_31773);

(statearr_31784_33801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (20))){
var inst_31662 = (state_31779[(7)]);
var inst_31679 = cljs.core.first(inst_31662);
var inst_31680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31679,(0),null);
var inst_31681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31679,(1),null);
var state_31779__$1 = (function (){var statearr_31788 = state_31779;
(statearr_31788[(8)] = inst_31680);

return statearr_31788;
})();
if(cljs.core.truth_(inst_31681)){
var statearr_31790_33829 = state_31779__$1;
(statearr_31790_33829[(1)] = (22));

} else {
var statearr_31791_33830 = state_31779__$1;
(statearr_31791_33830[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (27))){
var inst_31714 = (state_31779[(9)]);
var inst_31712 = (state_31779[(10)]);
var inst_31627 = (state_31779[(11)]);
var inst_31719 = (state_31779[(12)]);
var inst_31719__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31712,inst_31714);
var inst_31721 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31719__$1,inst_31627,done);
var state_31779__$1 = (function (){var statearr_31795 = state_31779;
(statearr_31795[(12)] = inst_31719__$1);

return statearr_31795;
})();
if(cljs.core.truth_(inst_31721)){
var statearr_31796_33832 = state_31779__$1;
(statearr_31796_33832[(1)] = (30));

} else {
var statearr_31799_33833 = state_31779__$1;
(statearr_31799_33833[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (1))){
var state_31779__$1 = state_31779;
var statearr_31800_33836 = state_31779__$1;
(statearr_31800_33836[(2)] = null);

(statearr_31800_33836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (24))){
var inst_31662 = (state_31779[(7)]);
var inst_31686 = (state_31779[(2)]);
var inst_31687 = cljs.core.next(inst_31662);
var inst_31636 = inst_31687;
var inst_31637 = null;
var inst_31638 = (0);
var inst_31639 = (0);
var state_31779__$1 = (function (){var statearr_31804 = state_31779;
(statearr_31804[(13)] = inst_31636);

(statearr_31804[(14)] = inst_31638);

(statearr_31804[(15)] = inst_31637);

(statearr_31804[(16)] = inst_31686);

(statearr_31804[(17)] = inst_31639);

return statearr_31804;
})();
var statearr_31807_33840 = state_31779__$1;
(statearr_31807_33840[(2)] = null);

(statearr_31807_33840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (39))){
var state_31779__$1 = state_31779;
var statearr_31811_33841 = state_31779__$1;
(statearr_31811_33841[(2)] = null);

(statearr_31811_33841[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (4))){
var inst_31627 = (state_31779[(11)]);
var inst_31627__$1 = (state_31779[(2)]);
var inst_31628 = (inst_31627__$1 == null);
var state_31779__$1 = (function (){var statearr_31813 = state_31779;
(statearr_31813[(11)] = inst_31627__$1);

return statearr_31813;
})();
if(cljs.core.truth_(inst_31628)){
var statearr_31814_33843 = state_31779__$1;
(statearr_31814_33843[(1)] = (5));

} else {
var statearr_31815_33844 = state_31779__$1;
(statearr_31815_33844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (15))){
var inst_31636 = (state_31779[(13)]);
var inst_31638 = (state_31779[(14)]);
var inst_31637 = (state_31779[(15)]);
var inst_31639 = (state_31779[(17)]);
var inst_31654 = (state_31779[(2)]);
var inst_31655 = (inst_31639 + (1));
var tmp31808 = inst_31636;
var tmp31809 = inst_31638;
var tmp31810 = inst_31637;
var inst_31636__$1 = tmp31808;
var inst_31637__$1 = tmp31810;
var inst_31638__$1 = tmp31809;
var inst_31639__$1 = inst_31655;
var state_31779__$1 = (function (){var statearr_31816 = state_31779;
(statearr_31816[(13)] = inst_31636__$1);

(statearr_31816[(14)] = inst_31638__$1);

(statearr_31816[(18)] = inst_31654);

(statearr_31816[(15)] = inst_31637__$1);

(statearr_31816[(17)] = inst_31639__$1);

return statearr_31816;
})();
var statearr_31818_33847 = state_31779__$1;
(statearr_31818_33847[(2)] = null);

(statearr_31818_33847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (21))){
var inst_31690 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31822_33848 = state_31779__$1;
(statearr_31822_33848[(2)] = inst_31690);

(statearr_31822_33848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (31))){
var inst_31719 = (state_31779[(12)]);
var inst_31725 = done(null);
var inst_31726 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31719);
var state_31779__$1 = (function (){var statearr_31823 = state_31779;
(statearr_31823[(19)] = inst_31725);

return statearr_31823;
})();
var statearr_31824_33849 = state_31779__$1;
(statearr_31824_33849[(2)] = inst_31726);

(statearr_31824_33849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (32))){
var inst_31714 = (state_31779[(9)]);
var inst_31713 = (state_31779[(20)]);
var inst_31712 = (state_31779[(10)]);
var inst_31711 = (state_31779[(21)]);
var inst_31728 = (state_31779[(2)]);
var inst_31730 = (inst_31714 + (1));
var tmp31819 = inst_31713;
var tmp31820 = inst_31712;
var tmp31821 = inst_31711;
var inst_31711__$1 = tmp31821;
var inst_31712__$1 = tmp31820;
var inst_31713__$1 = tmp31819;
var inst_31714__$1 = inst_31730;
var state_31779__$1 = (function (){var statearr_31825 = state_31779;
(statearr_31825[(9)] = inst_31714__$1);

(statearr_31825[(20)] = inst_31713__$1);

(statearr_31825[(10)] = inst_31712__$1);

(statearr_31825[(22)] = inst_31728);

(statearr_31825[(21)] = inst_31711__$1);

return statearr_31825;
})();
var statearr_31826_33859 = state_31779__$1;
(statearr_31826_33859[(2)] = null);

(statearr_31826_33859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (40))){
var inst_31744 = (state_31779[(23)]);
var inst_31748 = done(null);
var inst_31749 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31744);
var state_31779__$1 = (function (){var statearr_31827 = state_31779;
(statearr_31827[(24)] = inst_31748);

return statearr_31827;
})();
var statearr_31828_33860 = state_31779__$1;
(statearr_31828_33860[(2)] = inst_31749);

(statearr_31828_33860[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (33))){
var inst_31733 = (state_31779[(25)]);
var inst_31735 = cljs.core.chunked_seq_QMARK_(inst_31733);
var state_31779__$1 = state_31779;
if(inst_31735){
var statearr_31829_33862 = state_31779__$1;
(statearr_31829_33862[(1)] = (36));

} else {
var statearr_31830_33863 = state_31779__$1;
(statearr_31830_33863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (13))){
var inst_31648 = (state_31779[(26)]);
var inst_31651 = cljs.core.async.close_BANG_(inst_31648);
var state_31779__$1 = state_31779;
var statearr_31831_33865 = state_31779__$1;
(statearr_31831_33865[(2)] = inst_31651);

(statearr_31831_33865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (22))){
var inst_31680 = (state_31779[(8)]);
var inst_31683 = cljs.core.async.close_BANG_(inst_31680);
var state_31779__$1 = state_31779;
var statearr_31832_33869 = state_31779__$1;
(statearr_31832_33869[(2)] = inst_31683);

(statearr_31832_33869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (36))){
var inst_31733 = (state_31779[(25)]);
var inst_31737 = cljs.core.chunk_first(inst_31733);
var inst_31740 = cljs.core.chunk_rest(inst_31733);
var inst_31741 = cljs.core.count(inst_31737);
var inst_31711 = inst_31740;
var inst_31712 = inst_31737;
var inst_31713 = inst_31741;
var inst_31714 = (0);
var state_31779__$1 = (function (){var statearr_31836 = state_31779;
(statearr_31836[(9)] = inst_31714);

(statearr_31836[(20)] = inst_31713);

(statearr_31836[(10)] = inst_31712);

(statearr_31836[(21)] = inst_31711);

return statearr_31836;
})();
var statearr_31837_33870 = state_31779__$1;
(statearr_31837_33870[(2)] = null);

(statearr_31837_33870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (41))){
var inst_31733 = (state_31779[(25)]);
var inst_31751 = (state_31779[(2)]);
var inst_31752 = cljs.core.next(inst_31733);
var inst_31711 = inst_31752;
var inst_31712 = null;
var inst_31713 = (0);
var inst_31714 = (0);
var state_31779__$1 = (function (){var statearr_31838 = state_31779;
(statearr_31838[(9)] = inst_31714);

(statearr_31838[(27)] = inst_31751);

(statearr_31838[(20)] = inst_31713);

(statearr_31838[(10)] = inst_31712);

(statearr_31838[(21)] = inst_31711);

return statearr_31838;
})();
var statearr_31839_33872 = state_31779__$1;
(statearr_31839_33872[(2)] = null);

(statearr_31839_33872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (43))){
var state_31779__$1 = state_31779;
var statearr_31841_33873 = state_31779__$1;
(statearr_31841_33873[(2)] = null);

(statearr_31841_33873[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (29))){
var inst_31760 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31842_33874 = state_31779__$1;
(statearr_31842_33874[(2)] = inst_31760);

(statearr_31842_33874[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (44))){
var inst_31769 = (state_31779[(2)]);
var state_31779__$1 = (function (){var statearr_31844 = state_31779;
(statearr_31844[(28)] = inst_31769);

return statearr_31844;
})();
var statearr_31845_33875 = state_31779__$1;
(statearr_31845_33875[(2)] = null);

(statearr_31845_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (6))){
var inst_31700 = (state_31779[(29)]);
var inst_31699 = cljs.core.deref(cs);
var inst_31700__$1 = cljs.core.keys(inst_31699);
var inst_31701 = cljs.core.count(inst_31700__$1);
var inst_31702 = cljs.core.reset_BANG_(dctr,inst_31701);
var inst_31710 = cljs.core.seq(inst_31700__$1);
var inst_31711 = inst_31710;
var inst_31712 = null;
var inst_31713 = (0);
var inst_31714 = (0);
var state_31779__$1 = (function (){var statearr_31846 = state_31779;
(statearr_31846[(9)] = inst_31714);

(statearr_31846[(30)] = inst_31702);

(statearr_31846[(29)] = inst_31700__$1);

(statearr_31846[(20)] = inst_31713);

(statearr_31846[(10)] = inst_31712);

(statearr_31846[(21)] = inst_31711);

return statearr_31846;
})();
var statearr_31853_33883 = state_31779__$1;
(statearr_31853_33883[(2)] = null);

(statearr_31853_33883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (28))){
var inst_31733 = (state_31779[(25)]);
var inst_31711 = (state_31779[(21)]);
var inst_31733__$1 = cljs.core.seq(inst_31711);
var state_31779__$1 = (function (){var statearr_31854 = state_31779;
(statearr_31854[(25)] = inst_31733__$1);

return statearr_31854;
})();
if(inst_31733__$1){
var statearr_31855_33884 = state_31779__$1;
(statearr_31855_33884[(1)] = (33));

} else {
var statearr_31856_33885 = state_31779__$1;
(statearr_31856_33885[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (25))){
var inst_31714 = (state_31779[(9)]);
var inst_31713 = (state_31779[(20)]);
var inst_31716 = (inst_31714 < inst_31713);
var inst_31717 = inst_31716;
var state_31779__$1 = state_31779;
if(cljs.core.truth_(inst_31717)){
var statearr_31857_33886 = state_31779__$1;
(statearr_31857_33886[(1)] = (27));

} else {
var statearr_31858_33887 = state_31779__$1;
(statearr_31858_33887[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (34))){
var state_31779__$1 = state_31779;
var statearr_31859_33888 = state_31779__$1;
(statearr_31859_33888[(2)] = null);

(statearr_31859_33888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (17))){
var state_31779__$1 = state_31779;
var statearr_31860_33889 = state_31779__$1;
(statearr_31860_33889[(2)] = null);

(statearr_31860_33889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (3))){
var inst_31776 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31779__$1,inst_31776);
} else {
if((state_val_31780 === (12))){
var inst_31695 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31861_33890 = state_31779__$1;
(statearr_31861_33890[(2)] = inst_31695);

(statearr_31861_33890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (2))){
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31779__$1,(4),ch);
} else {
if((state_val_31780 === (23))){
var state_31779__$1 = state_31779;
var statearr_31862_33892 = state_31779__$1;
(statearr_31862_33892[(2)] = null);

(statearr_31862_33892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (35))){
var inst_31758 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31863_33893 = state_31779__$1;
(statearr_31863_33893[(2)] = inst_31758);

(statearr_31863_33893[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (19))){
var inst_31662 = (state_31779[(7)]);
var inst_31671 = cljs.core.chunk_first(inst_31662);
var inst_31672 = cljs.core.chunk_rest(inst_31662);
var inst_31673 = cljs.core.count(inst_31671);
var inst_31636 = inst_31672;
var inst_31637 = inst_31671;
var inst_31638 = inst_31673;
var inst_31639 = (0);
var state_31779__$1 = (function (){var statearr_31867 = state_31779;
(statearr_31867[(13)] = inst_31636);

(statearr_31867[(14)] = inst_31638);

(statearr_31867[(15)] = inst_31637);

(statearr_31867[(17)] = inst_31639);

return statearr_31867;
})();
var statearr_31868_33895 = state_31779__$1;
(statearr_31868_33895[(2)] = null);

(statearr_31868_33895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (11))){
var inst_31636 = (state_31779[(13)]);
var inst_31662 = (state_31779[(7)]);
var inst_31662__$1 = cljs.core.seq(inst_31636);
var state_31779__$1 = (function (){var statearr_31876 = state_31779;
(statearr_31876[(7)] = inst_31662__$1);

return statearr_31876;
})();
if(inst_31662__$1){
var statearr_31877_33897 = state_31779__$1;
(statearr_31877_33897[(1)] = (16));

} else {
var statearr_31878_33898 = state_31779__$1;
(statearr_31878_33898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (9))){
var inst_31697 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31881_33899 = state_31779__$1;
(statearr_31881_33899[(2)] = inst_31697);

(statearr_31881_33899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (5))){
var inst_31634 = cljs.core.deref(cs);
var inst_31635 = cljs.core.seq(inst_31634);
var inst_31636 = inst_31635;
var inst_31637 = null;
var inst_31638 = (0);
var inst_31639 = (0);
var state_31779__$1 = (function (){var statearr_31884 = state_31779;
(statearr_31884[(13)] = inst_31636);

(statearr_31884[(14)] = inst_31638);

(statearr_31884[(15)] = inst_31637);

(statearr_31884[(17)] = inst_31639);

return statearr_31884;
})();
var statearr_31887_33905 = state_31779__$1;
(statearr_31887_33905[(2)] = null);

(statearr_31887_33905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (14))){
var state_31779__$1 = state_31779;
var statearr_31889_33906 = state_31779__$1;
(statearr_31889_33906[(2)] = null);

(statearr_31889_33906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (45))){
var inst_31766 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31890_33908 = state_31779__$1;
(statearr_31890_33908[(2)] = inst_31766);

(statearr_31890_33908[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (26))){
var inst_31700 = (state_31779[(29)]);
var inst_31762 = (state_31779[(2)]);
var inst_31763 = cljs.core.seq(inst_31700);
var state_31779__$1 = (function (){var statearr_31891 = state_31779;
(statearr_31891[(31)] = inst_31762);

return statearr_31891;
})();
if(inst_31763){
var statearr_31892_33909 = state_31779__$1;
(statearr_31892_33909[(1)] = (42));

} else {
var statearr_31893_33910 = state_31779__$1;
(statearr_31893_33910[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (16))){
var inst_31662 = (state_31779[(7)]);
var inst_31666 = cljs.core.chunked_seq_QMARK_(inst_31662);
var state_31779__$1 = state_31779;
if(inst_31666){
var statearr_31894_33911 = state_31779__$1;
(statearr_31894_33911[(1)] = (19));

} else {
var statearr_31895_33912 = state_31779__$1;
(statearr_31895_33912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (38))){
var inst_31755 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31896_33913 = state_31779__$1;
(statearr_31896_33913[(2)] = inst_31755);

(statearr_31896_33913[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (30))){
var state_31779__$1 = state_31779;
var statearr_31899_33915 = state_31779__$1;
(statearr_31899_33915[(2)] = null);

(statearr_31899_33915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (10))){
var inst_31637 = (state_31779[(15)]);
var inst_31639 = (state_31779[(17)]);
var inst_31647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31637,inst_31639);
var inst_31648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31647,(0),null);
var inst_31649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31647,(1),null);
var state_31779__$1 = (function (){var statearr_31900 = state_31779;
(statearr_31900[(26)] = inst_31648);

return statearr_31900;
})();
if(cljs.core.truth_(inst_31649)){
var statearr_31903_33916 = state_31779__$1;
(statearr_31903_33916[(1)] = (13));

} else {
var statearr_31904_33918 = state_31779__$1;
(statearr_31904_33918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (18))){
var inst_31693 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31908_33922 = state_31779__$1;
(statearr_31908_33922[(2)] = inst_31693);

(statearr_31908_33922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (42))){
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31779__$1,(45),dchan);
} else {
if((state_val_31780 === (37))){
var inst_31733 = (state_31779[(25)]);
var inst_31744 = (state_31779[(23)]);
var inst_31627 = (state_31779[(11)]);
var inst_31744__$1 = cljs.core.first(inst_31733);
var inst_31745 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31744__$1,inst_31627,done);
var state_31779__$1 = (function (){var statearr_31909 = state_31779;
(statearr_31909[(23)] = inst_31744__$1);

return statearr_31909;
})();
if(cljs.core.truth_(inst_31745)){
var statearr_31910_33923 = state_31779__$1;
(statearr_31910_33923[(1)] = (39));

} else {
var statearr_31911_33924 = state_31779__$1;
(statearr_31911_33924[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (8))){
var inst_31638 = (state_31779[(14)]);
var inst_31639 = (state_31779[(17)]);
var inst_31641 = (inst_31639 < inst_31638);
var inst_31642 = inst_31641;
var state_31779__$1 = state_31779;
if(cljs.core.truth_(inst_31642)){
var statearr_31912_33925 = state_31779__$1;
(statearr_31912_33925[(1)] = (10));

} else {
var statearr_31913_33926 = state_31779__$1;
(statearr_31913_33926[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___33799,cs,m,dchan,dctr,done))
;
return ((function (switch__30479__auto__,c__30784__auto___33799,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30480__auto__ = null;
var cljs$core$async$mult_$_state_machine__30480__auto____0 = (function (){
var statearr_31921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31921[(0)] = cljs$core$async$mult_$_state_machine__30480__auto__);

(statearr_31921[(1)] = (1));

return statearr_31921;
});
var cljs$core$async$mult_$_state_machine__30480__auto____1 = (function (state_31779){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_31779);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e31926){if((e31926 instanceof Object)){
var ex__30483__auto__ = e31926;
var statearr_31927_33927 = state_31779;
(statearr_31927_33927[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33928 = state_31779;
state_31779 = G__33928;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30480__auto__ = function(state_31779){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30480__auto____1.call(this,state_31779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30480__auto____0;
cljs$core$async$mult_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30480__auto____1;
return cljs$core$async$mult_$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___33799,cs,m,dchan,dctr,done))
})();
var state__30786__auto__ = (function (){var statearr_31940 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_31940[(6)] = c__30784__auto___33799);

return statearr_31940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___33799,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31942 = arguments.length;
switch (G__31942) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33939 = arguments.length;
var i__4731__auto___33940 = (0);
while(true){
if((i__4731__auto___33940 < len__4730__auto___33939)){
args__4736__auto__.push((arguments[i__4731__auto___33940]));

var G__33941 = (i__4731__auto___33940 + (1));
i__4731__auto___33940 = G__33941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31964){
var map__31965 = p__31964;
var map__31965__$1 = (((((!((map__31965 == null))))?(((((map__31965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31965):map__31965);
var opts = map__31965__$1;
var statearr_31967_33942 = state;
(statearr_31967_33942[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__31965,map__31965__$1,opts){
return (function (val){
var statearr_31968_33943 = state;
(statearr_31968_33943[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31965,map__31965__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31969_33944 = state;
(statearr_31969_33944[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31953){
var G__31954 = cljs.core.first(seq31953);
var seq31953__$1 = cljs.core.next(seq31953);
var G__31955 = cljs.core.first(seq31953__$1);
var seq31953__$2 = cljs.core.next(seq31953__$1);
var G__31956 = cljs.core.first(seq31953__$2);
var seq31953__$3 = cljs.core.next(seq31953__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31954,G__31955,G__31956,seq31953__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31971 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31972){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31972 = meta31972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31973,meta31972__$1){
var self__ = this;
var _31973__$1 = this;
return (new cljs.core.async.t_cljs$core$async31971(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31972__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31973){
var self__ = this;
var _31973__$1 = this;
return self__.meta31972;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31972","meta31972",-1381373378,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31971";

cljs.core.async.t_cljs$core$async31971.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31971");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31971.
 */
cljs.core.async.__GT_t_cljs$core$async31971 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31971(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31972){
return (new cljs.core.async.t_cljs$core$async31971(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31972));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31971(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30784__auto___33956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___33956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___33956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32144){
var state_val_32145 = (state_32144[(1)]);
if((state_val_32145 === (7))){
var inst_32047 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32147_33957 = state_32144__$1;
(statearr_32147_33957[(2)] = inst_32047);

(statearr_32147_33957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (20))){
var inst_32059 = (state_32144[(7)]);
var state_32144__$1 = state_32144;
var statearr_32148_33958 = state_32144__$1;
(statearr_32148_33958[(2)] = inst_32059);

(statearr_32148_33958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (27))){
var state_32144__$1 = state_32144;
var statearr_32149_33959 = state_32144__$1;
(statearr_32149_33959[(2)] = null);

(statearr_32149_33959[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (1))){
var inst_32032 = (state_32144[(8)]);
var inst_32032__$1 = calc_state();
var inst_32036 = (inst_32032__$1 == null);
var inst_32037 = cljs.core.not(inst_32036);
var state_32144__$1 = (function (){var statearr_32150 = state_32144;
(statearr_32150[(8)] = inst_32032__$1);

return statearr_32150;
})();
if(inst_32037){
var statearr_32151_33960 = state_32144__$1;
(statearr_32151_33960[(1)] = (2));

} else {
var statearr_32152_33961 = state_32144__$1;
(statearr_32152_33961[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (24))){
var inst_32114 = (state_32144[(9)]);
var inst_32098 = (state_32144[(10)]);
var inst_32086 = (state_32144[(11)]);
var inst_32114__$1 = (inst_32086.cljs$core$IFn$_invoke$arity$1 ? inst_32086.cljs$core$IFn$_invoke$arity$1(inst_32098) : inst_32086.call(null,inst_32098));
var state_32144__$1 = (function (){var statearr_32154 = state_32144;
(statearr_32154[(9)] = inst_32114__$1);

return statearr_32154;
})();
if(cljs.core.truth_(inst_32114__$1)){
var statearr_32156_33962 = state_32144__$1;
(statearr_32156_33962[(1)] = (29));

} else {
var statearr_32157_33963 = state_32144__$1;
(statearr_32157_33963[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (4))){
var inst_32050 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32050)){
var statearr_32158_33966 = state_32144__$1;
(statearr_32158_33966[(1)] = (8));

} else {
var statearr_32159_33967 = state_32144__$1;
(statearr_32159_33967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (15))){
var inst_32079 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32079)){
var statearr_32160_33968 = state_32144__$1;
(statearr_32160_33968[(1)] = (19));

} else {
var statearr_32161_33969 = state_32144__$1;
(statearr_32161_33969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (21))){
var inst_32085 = (state_32144[(12)]);
var inst_32085__$1 = (state_32144[(2)]);
var inst_32086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32085__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32085__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32085__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32144__$1 = (function (){var statearr_32164 = state_32144;
(statearr_32164[(11)] = inst_32086);

(statearr_32164[(13)] = inst_32088);

(statearr_32164[(12)] = inst_32085__$1);

return statearr_32164;
})();
return cljs.core.async.ioc_alts_BANG_(state_32144__$1,(22),inst_32089);
} else {
if((state_val_32145 === (31))){
var inst_32123 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32123)){
var statearr_32167_33970 = state_32144__$1;
(statearr_32167_33970[(1)] = (32));

} else {
var statearr_32168_33971 = state_32144__$1;
(statearr_32168_33971[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (32))){
var inst_32097 = (state_32144[(14)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32144__$1,(35),out,inst_32097);
} else {
if((state_val_32145 === (33))){
var inst_32085 = (state_32144[(12)]);
var inst_32059 = inst_32085;
var state_32144__$1 = (function (){var statearr_32169 = state_32144;
(statearr_32169[(7)] = inst_32059);

return statearr_32169;
})();
var statearr_32170_33972 = state_32144__$1;
(statearr_32170_33972[(2)] = null);

(statearr_32170_33972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (13))){
var inst_32059 = (state_32144[(7)]);
var inst_32068 = inst_32059.cljs$lang$protocol_mask$partition0$;
var inst_32069 = (inst_32068 & (64));
var inst_32070 = inst_32059.cljs$core$ISeq$;
var inst_32071 = (cljs.core.PROTOCOL_SENTINEL === inst_32070);
var inst_32072 = ((inst_32069) || (inst_32071));
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32072)){
var statearr_32175_33975 = state_32144__$1;
(statearr_32175_33975[(1)] = (16));

} else {
var statearr_32176_33976 = state_32144__$1;
(statearr_32176_33976[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (22))){
var inst_32098 = (state_32144[(10)]);
var inst_32097 = (state_32144[(14)]);
var inst_32096 = (state_32144[(2)]);
var inst_32097__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32096,(0),null);
var inst_32098__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32096,(1),null);
var inst_32099 = (inst_32097__$1 == null);
var inst_32100 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32098__$1,change);
var inst_32101 = ((inst_32099) || (inst_32100));
var state_32144__$1 = (function (){var statearr_32183 = state_32144;
(statearr_32183[(10)] = inst_32098__$1);

(statearr_32183[(14)] = inst_32097__$1);

return statearr_32183;
})();
if(cljs.core.truth_(inst_32101)){
var statearr_32184_33977 = state_32144__$1;
(statearr_32184_33977[(1)] = (23));

} else {
var statearr_32185_33978 = state_32144__$1;
(statearr_32185_33978[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (36))){
var inst_32085 = (state_32144[(12)]);
var inst_32059 = inst_32085;
var state_32144__$1 = (function (){var statearr_32186 = state_32144;
(statearr_32186[(7)] = inst_32059);

return statearr_32186;
})();
var statearr_32187_33979 = state_32144__$1;
(statearr_32187_33979[(2)] = null);

(statearr_32187_33979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (29))){
var inst_32114 = (state_32144[(9)]);
var state_32144__$1 = state_32144;
var statearr_32188_33980 = state_32144__$1;
(statearr_32188_33980[(2)] = inst_32114);

(statearr_32188_33980[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (6))){
var state_32144__$1 = state_32144;
var statearr_32190_33981 = state_32144__$1;
(statearr_32190_33981[(2)] = false);

(statearr_32190_33981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (28))){
var inst_32108 = (state_32144[(2)]);
var inst_32109 = calc_state();
var inst_32059 = inst_32109;
var state_32144__$1 = (function (){var statearr_32196 = state_32144;
(statearr_32196[(15)] = inst_32108);

(statearr_32196[(7)] = inst_32059);

return statearr_32196;
})();
var statearr_32197_33983 = state_32144__$1;
(statearr_32197_33983[(2)] = null);

(statearr_32197_33983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (25))){
var inst_32137 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32198_33984 = state_32144__$1;
(statearr_32198_33984[(2)] = inst_32137);

(statearr_32198_33984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (34))){
var inst_32135 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32199_33985 = state_32144__$1;
(statearr_32199_33985[(2)] = inst_32135);

(statearr_32199_33985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (17))){
var state_32144__$1 = state_32144;
var statearr_32200_33986 = state_32144__$1;
(statearr_32200_33986[(2)] = false);

(statearr_32200_33986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (3))){
var state_32144__$1 = state_32144;
var statearr_32201_33987 = state_32144__$1;
(statearr_32201_33987[(2)] = false);

(statearr_32201_33987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (12))){
var inst_32139 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32144__$1,inst_32139);
} else {
if((state_val_32145 === (2))){
var inst_32032 = (state_32144[(8)]);
var inst_32039 = inst_32032.cljs$lang$protocol_mask$partition0$;
var inst_32040 = (inst_32039 & (64));
var inst_32041 = inst_32032.cljs$core$ISeq$;
var inst_32042 = (cljs.core.PROTOCOL_SENTINEL === inst_32041);
var inst_32043 = ((inst_32040) || (inst_32042));
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32043)){
var statearr_32205_33988 = state_32144__$1;
(statearr_32205_33988[(1)] = (5));

} else {
var statearr_32206_33989 = state_32144__$1;
(statearr_32206_33989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (23))){
var inst_32097 = (state_32144[(14)]);
var inst_32103 = (inst_32097 == null);
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32103)){
var statearr_32208_33990 = state_32144__$1;
(statearr_32208_33990[(1)] = (26));

} else {
var statearr_32209_33991 = state_32144__$1;
(statearr_32209_33991[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (35))){
var inst_32126 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
if(cljs.core.truth_(inst_32126)){
var statearr_32211_33993 = state_32144__$1;
(statearr_32211_33993[(1)] = (36));

} else {
var statearr_32214_33994 = state_32144__$1;
(statearr_32214_33994[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (19))){
var inst_32059 = (state_32144[(7)]);
var inst_32082 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32059);
var state_32144__$1 = state_32144;
var statearr_32215_33995 = state_32144__$1;
(statearr_32215_33995[(2)] = inst_32082);

(statearr_32215_33995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (11))){
var inst_32059 = (state_32144[(7)]);
var inst_32063 = (inst_32059 == null);
var inst_32064 = cljs.core.not(inst_32063);
var state_32144__$1 = state_32144;
if(inst_32064){
var statearr_32216_33997 = state_32144__$1;
(statearr_32216_33997[(1)] = (13));

} else {
var statearr_32217_33998 = state_32144__$1;
(statearr_32217_33998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (9))){
var inst_32032 = (state_32144[(8)]);
var state_32144__$1 = state_32144;
var statearr_32221_33999 = state_32144__$1;
(statearr_32221_33999[(2)] = inst_32032);

(statearr_32221_33999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (5))){
var state_32144__$1 = state_32144;
var statearr_32222_34000 = state_32144__$1;
(statearr_32222_34000[(2)] = true);

(statearr_32222_34000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (14))){
var state_32144__$1 = state_32144;
var statearr_32223_34001 = state_32144__$1;
(statearr_32223_34001[(2)] = false);

(statearr_32223_34001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (26))){
var inst_32098 = (state_32144[(10)]);
var inst_32105 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32098);
var state_32144__$1 = state_32144;
var statearr_32225_34005 = state_32144__$1;
(statearr_32225_34005[(2)] = inst_32105);

(statearr_32225_34005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (16))){
var state_32144__$1 = state_32144;
var statearr_32227_34010 = state_32144__$1;
(statearr_32227_34010[(2)] = true);

(statearr_32227_34010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (38))){
var inst_32131 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32228_34014 = state_32144__$1;
(statearr_32228_34014[(2)] = inst_32131);

(statearr_32228_34014[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (30))){
var inst_32098 = (state_32144[(10)]);
var inst_32086 = (state_32144[(11)]);
var inst_32088 = (state_32144[(13)]);
var inst_32118 = cljs.core.empty_QMARK_(inst_32086);
var inst_32119 = (inst_32088.cljs$core$IFn$_invoke$arity$1 ? inst_32088.cljs$core$IFn$_invoke$arity$1(inst_32098) : inst_32088.call(null,inst_32098));
var inst_32120 = cljs.core.not(inst_32119);
var inst_32121 = ((inst_32118) && (inst_32120));
var state_32144__$1 = state_32144;
var statearr_32229_34018 = state_32144__$1;
(statearr_32229_34018[(2)] = inst_32121);

(statearr_32229_34018[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (10))){
var inst_32032 = (state_32144[(8)]);
var inst_32055 = (state_32144[(2)]);
var inst_32056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32055,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32055,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32055,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32059 = inst_32032;
var state_32144__$1 = (function (){var statearr_32230 = state_32144;
(statearr_32230[(16)] = inst_32056);

(statearr_32230[(17)] = inst_32057);

(statearr_32230[(18)] = inst_32058);

(statearr_32230[(7)] = inst_32059);

return statearr_32230;
})();
var statearr_32231_34022 = state_32144__$1;
(statearr_32231_34022[(2)] = null);

(statearr_32231_34022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (18))){
var inst_32076 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32233_34026 = state_32144__$1;
(statearr_32233_34026[(2)] = inst_32076);

(statearr_32233_34026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (37))){
var state_32144__$1 = state_32144;
var statearr_32234_34027 = state_32144__$1;
(statearr_32234_34027[(2)] = null);

(statearr_32234_34027[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (8))){
var inst_32032 = (state_32144[(8)]);
var inst_32052 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32032);
var state_32144__$1 = state_32144;
var statearr_32235_34028 = state_32144__$1;
(statearr_32235_34028[(2)] = inst_32052);

(statearr_32235_34028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___33956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30479__auto__,c__30784__auto___33956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30480__auto__ = null;
var cljs$core$async$mix_$_state_machine__30480__auto____0 = (function (){
var statearr_32240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32240[(0)] = cljs$core$async$mix_$_state_machine__30480__auto__);

(statearr_32240[(1)] = (1));

return statearr_32240;
});
var cljs$core$async$mix_$_state_machine__30480__auto____1 = (function (state_32144){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_32144);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e32241){if((e32241 instanceof Object)){
var ex__30483__auto__ = e32241;
var statearr_32242_34030 = state_32144;
(statearr_32242_34030[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34035 = state_32144;
state_32144 = G__34035;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30480__auto__ = function(state_32144){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30480__auto____1.call(this,state_32144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30480__auto____0;
cljs$core$async$mix_$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30480__auto____1;
return cljs$core$async$mix_$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___33956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30786__auto__ = (function (){var statearr_32247 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_32247[(6)] = c__30784__auto___33956);

return statearr_32247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___33956,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32251 = arguments.length;
switch (G__32251) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32255 = arguments.length;
switch (G__32255) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32253_SHARP_){
if(cljs.core.truth_((p1__32253_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32253_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32253_SHARP_.call(null,topic)))){
return p1__32253_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32253_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32256 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32257){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32257 = meta32257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32258,meta32257__$1){
var self__ = this;
var _32258__$1 = this;
return (new cljs.core.async.t_cljs$core$async32256(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32257__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32258){
var self__ = this;
var _32258__$1 = this;
return self__.meta32257;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32257","meta32257",-1327825585,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32256";

cljs.core.async.t_cljs$core$async32256.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32256");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32256.
 */
cljs.core.async.__GT_t_cljs$core$async32256 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32256(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32257){
return (new cljs.core.async.t_cljs$core$async32256(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32257));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32256(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30784__auto___34067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34067,mults,ensure_mult,p){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34067,mults,ensure_mult,p){
return (function (state_32349){
var state_val_32350 = (state_32349[(1)]);
if((state_val_32350 === (7))){
var inst_32345 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32353_34068 = state_32349__$1;
(statearr_32353_34068[(2)] = inst_32345);

(statearr_32353_34068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (20))){
var state_32349__$1 = state_32349;
var statearr_32354_34069 = state_32349__$1;
(statearr_32354_34069[(2)] = null);

(statearr_32354_34069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (1))){
var state_32349__$1 = state_32349;
var statearr_32355_34070 = state_32349__$1;
(statearr_32355_34070[(2)] = null);

(statearr_32355_34070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (24))){
var inst_32328 = (state_32349[(7)]);
var inst_32337 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32328);
var state_32349__$1 = state_32349;
var statearr_32356_34071 = state_32349__$1;
(statearr_32356_34071[(2)] = inst_32337);

(statearr_32356_34071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (4))){
var inst_32276 = (state_32349[(8)]);
var inst_32276__$1 = (state_32349[(2)]);
var inst_32277 = (inst_32276__$1 == null);
var state_32349__$1 = (function (){var statearr_32357 = state_32349;
(statearr_32357[(8)] = inst_32276__$1);

return statearr_32357;
})();
if(cljs.core.truth_(inst_32277)){
var statearr_32358_34072 = state_32349__$1;
(statearr_32358_34072[(1)] = (5));

} else {
var statearr_32359_34073 = state_32349__$1;
(statearr_32359_34073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (15))){
var inst_32322 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32361_34077 = state_32349__$1;
(statearr_32361_34077[(2)] = inst_32322);

(statearr_32361_34077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (21))){
var inst_32342 = (state_32349[(2)]);
var state_32349__$1 = (function (){var statearr_32363 = state_32349;
(statearr_32363[(9)] = inst_32342);

return statearr_32363;
})();
var statearr_32364_34078 = state_32349__$1;
(statearr_32364_34078[(2)] = null);

(statearr_32364_34078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (13))){
var inst_32300 = (state_32349[(10)]);
var inst_32302 = cljs.core.chunked_seq_QMARK_(inst_32300);
var state_32349__$1 = state_32349;
if(inst_32302){
var statearr_32365_34079 = state_32349__$1;
(statearr_32365_34079[(1)] = (16));

} else {
var statearr_32366_34080 = state_32349__$1;
(statearr_32366_34080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (22))){
var inst_32334 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
if(cljs.core.truth_(inst_32334)){
var statearr_32367_34081 = state_32349__$1;
(statearr_32367_34081[(1)] = (23));

} else {
var statearr_32368_34082 = state_32349__$1;
(statearr_32368_34082[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (6))){
var inst_32276 = (state_32349[(8)]);
var inst_32328 = (state_32349[(7)]);
var inst_32330 = (state_32349[(11)]);
var inst_32328__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32276) : topic_fn.call(null,inst_32276));
var inst_32329 = cljs.core.deref(mults);
var inst_32330__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32329,inst_32328__$1);
var state_32349__$1 = (function (){var statearr_32369 = state_32349;
(statearr_32369[(7)] = inst_32328__$1);

(statearr_32369[(11)] = inst_32330__$1);

return statearr_32369;
})();
if(cljs.core.truth_(inst_32330__$1)){
var statearr_32370_34088 = state_32349__$1;
(statearr_32370_34088[(1)] = (19));

} else {
var statearr_32371_34089 = state_32349__$1;
(statearr_32371_34089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (25))){
var inst_32339 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32372_34090 = state_32349__$1;
(statearr_32372_34090[(2)] = inst_32339);

(statearr_32372_34090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (17))){
var inst_32300 = (state_32349[(10)]);
var inst_32309 = cljs.core.first(inst_32300);
var inst_32314 = cljs.core.async.muxch_STAR_(inst_32309);
var inst_32315 = cljs.core.async.close_BANG_(inst_32314);
var inst_32316 = cljs.core.next(inst_32300);
var inst_32286 = inst_32316;
var inst_32287 = null;
var inst_32288 = (0);
var inst_32289 = (0);
var state_32349__$1 = (function (){var statearr_32373 = state_32349;
(statearr_32373[(12)] = inst_32286);

(statearr_32373[(13)] = inst_32315);

(statearr_32373[(14)] = inst_32289);

(statearr_32373[(15)] = inst_32287);

(statearr_32373[(16)] = inst_32288);

return statearr_32373;
})();
var statearr_32374_34091 = state_32349__$1;
(statearr_32374_34091[(2)] = null);

(statearr_32374_34091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (3))){
var inst_32347 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32349__$1,inst_32347);
} else {
if((state_val_32350 === (12))){
var inst_32324 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32375_34092 = state_32349__$1;
(statearr_32375_34092[(2)] = inst_32324);

(statearr_32375_34092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (2))){
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32349__$1,(4),ch);
} else {
if((state_val_32350 === (23))){
var state_32349__$1 = state_32349;
var statearr_32377_34094 = state_32349__$1;
(statearr_32377_34094[(2)] = null);

(statearr_32377_34094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (19))){
var inst_32276 = (state_32349[(8)]);
var inst_32330 = (state_32349[(11)]);
var inst_32332 = cljs.core.async.muxch_STAR_(inst_32330);
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32349__$1,(22),inst_32332,inst_32276);
} else {
if((state_val_32350 === (11))){
var inst_32300 = (state_32349[(10)]);
var inst_32286 = (state_32349[(12)]);
var inst_32300__$1 = cljs.core.seq(inst_32286);
var state_32349__$1 = (function (){var statearr_32378 = state_32349;
(statearr_32378[(10)] = inst_32300__$1);

return statearr_32378;
})();
if(inst_32300__$1){
var statearr_32379_34096 = state_32349__$1;
(statearr_32379_34096[(1)] = (13));

} else {
var statearr_32380_34097 = state_32349__$1;
(statearr_32380_34097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (9))){
var inst_32326 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32381_34098 = state_32349__$1;
(statearr_32381_34098[(2)] = inst_32326);

(statearr_32381_34098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (5))){
var inst_32283 = cljs.core.deref(mults);
var inst_32284 = cljs.core.vals(inst_32283);
var inst_32285 = cljs.core.seq(inst_32284);
var inst_32286 = inst_32285;
var inst_32287 = null;
var inst_32288 = (0);
var inst_32289 = (0);
var state_32349__$1 = (function (){var statearr_32382 = state_32349;
(statearr_32382[(12)] = inst_32286);

(statearr_32382[(14)] = inst_32289);

(statearr_32382[(15)] = inst_32287);

(statearr_32382[(16)] = inst_32288);

return statearr_32382;
})();
var statearr_32383_34099 = state_32349__$1;
(statearr_32383_34099[(2)] = null);

(statearr_32383_34099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (14))){
var state_32349__$1 = state_32349;
var statearr_32388_34100 = state_32349__$1;
(statearr_32388_34100[(2)] = null);

(statearr_32388_34100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (16))){
var inst_32300 = (state_32349[(10)]);
var inst_32304 = cljs.core.chunk_first(inst_32300);
var inst_32305 = cljs.core.chunk_rest(inst_32300);
var inst_32306 = cljs.core.count(inst_32304);
var inst_32286 = inst_32305;
var inst_32287 = inst_32304;
var inst_32288 = inst_32306;
var inst_32289 = (0);
var state_32349__$1 = (function (){var statearr_32392 = state_32349;
(statearr_32392[(12)] = inst_32286);

(statearr_32392[(14)] = inst_32289);

(statearr_32392[(15)] = inst_32287);

(statearr_32392[(16)] = inst_32288);

return statearr_32392;
})();
var statearr_32393_34104 = state_32349__$1;
(statearr_32393_34104[(2)] = null);

(statearr_32393_34104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (10))){
var inst_32286 = (state_32349[(12)]);
var inst_32289 = (state_32349[(14)]);
var inst_32287 = (state_32349[(15)]);
var inst_32288 = (state_32349[(16)]);
var inst_32294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32287,inst_32289);
var inst_32295 = cljs.core.async.muxch_STAR_(inst_32294);
var inst_32296 = cljs.core.async.close_BANG_(inst_32295);
var inst_32297 = (inst_32289 + (1));
var tmp32384 = inst_32286;
var tmp32385 = inst_32287;
var tmp32386 = inst_32288;
var inst_32286__$1 = tmp32384;
var inst_32287__$1 = tmp32385;
var inst_32288__$1 = tmp32386;
var inst_32289__$1 = inst_32297;
var state_32349__$1 = (function (){var statearr_32395 = state_32349;
(statearr_32395[(12)] = inst_32286__$1);

(statearr_32395[(14)] = inst_32289__$1);

(statearr_32395[(15)] = inst_32287__$1);

(statearr_32395[(17)] = inst_32296);

(statearr_32395[(16)] = inst_32288__$1);

return statearr_32395;
})();
var statearr_32396_34111 = state_32349__$1;
(statearr_32396_34111[(2)] = null);

(statearr_32396_34111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (18))){
var inst_32319 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32399_34112 = state_32349__$1;
(statearr_32399_34112[(2)] = inst_32319);

(statearr_32399_34112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (8))){
var inst_32289 = (state_32349[(14)]);
var inst_32288 = (state_32349[(16)]);
var inst_32291 = (inst_32289 < inst_32288);
var inst_32292 = inst_32291;
var state_32349__$1 = state_32349;
if(cljs.core.truth_(inst_32292)){
var statearr_32404_34113 = state_32349__$1;
(statearr_32404_34113[(1)] = (10));

} else {
var statearr_32405_34114 = state_32349__$1;
(statearr_32405_34114[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34067,mults,ensure_mult,p))
;
return ((function (switch__30479__auto__,c__30784__auto___34067,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_32413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32413[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_32413[(1)] = (1));

return statearr_32413;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_32349){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_32349);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e32414){if((e32414 instanceof Object)){
var ex__30483__auto__ = e32414;
var statearr_32417_34118 = state_32349;
(statearr_32417_34118[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34120 = state_32349;
state_32349 = G__34120;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_32349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_32349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34067,mults,ensure_mult,p))
})();
var state__30786__auto__ = (function (){var statearr_32420 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_32420[(6)] = c__30784__auto___34067);

return statearr_32420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34067,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32427 = arguments.length;
switch (G__32427) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32434 = arguments.length;
switch (G__32434) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32438 = arguments.length;
switch (G__32438) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30784__auto___34125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32486){
var state_val_32487 = (state_32486[(1)]);
if((state_val_32487 === (7))){
var state_32486__$1 = state_32486;
var statearr_32488_34126 = state_32486__$1;
(statearr_32488_34126[(2)] = null);

(statearr_32488_34126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (1))){
var state_32486__$1 = state_32486;
var statearr_32489_34127 = state_32486__$1;
(statearr_32489_34127[(2)] = null);

(statearr_32489_34127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (4))){
var inst_32445 = (state_32486[(7)]);
var inst_32447 = (inst_32445 < cnt);
var state_32486__$1 = state_32486;
if(cljs.core.truth_(inst_32447)){
var statearr_32490_34128 = state_32486__$1;
(statearr_32490_34128[(1)] = (6));

} else {
var statearr_32491_34129 = state_32486__$1;
(statearr_32491_34129[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (15))){
var inst_32481 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
var statearr_32492_34130 = state_32486__$1;
(statearr_32492_34130[(2)] = inst_32481);

(statearr_32492_34130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (13))){
var inst_32474 = cljs.core.async.close_BANG_(out);
var state_32486__$1 = state_32486;
var statearr_32493_34132 = state_32486__$1;
(statearr_32493_34132[(2)] = inst_32474);

(statearr_32493_34132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (6))){
var state_32486__$1 = state_32486;
var statearr_32494_34133 = state_32486__$1;
(statearr_32494_34133[(2)] = null);

(statearr_32494_34133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (3))){
var inst_32483 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32486__$1,inst_32483);
} else {
if((state_val_32487 === (12))){
var inst_32471 = (state_32486[(8)]);
var inst_32471__$1 = (state_32486[(2)]);
var inst_32472 = cljs.core.some(cljs.core.nil_QMARK_,inst_32471__$1);
var state_32486__$1 = (function (){var statearr_32505 = state_32486;
(statearr_32505[(8)] = inst_32471__$1);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32472)){
var statearr_32506_34135 = state_32486__$1;
(statearr_32506_34135[(1)] = (13));

} else {
var statearr_32507_34136 = state_32486__$1;
(statearr_32507_34136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (2))){
var inst_32444 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32445 = (0);
var state_32486__$1 = (function (){var statearr_32508 = state_32486;
(statearr_32508[(9)] = inst_32444);

(statearr_32508[(7)] = inst_32445);

return statearr_32508;
})();
var statearr_32511_34138 = state_32486__$1;
(statearr_32511_34138[(2)] = null);

(statearr_32511_34138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (11))){
var inst_32445 = (state_32486[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32486,(10),Object,null,(9));
var inst_32456 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32445) : chs__$1.call(null,inst_32445));
var inst_32457 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32445) : done.call(null,inst_32445));
var inst_32458 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32456,inst_32457);
var state_32486__$1 = state_32486;
var statearr_32513_34140 = state_32486__$1;
(statearr_32513_34140[(2)] = inst_32458);


cljs.core.async.impl.ioc_helpers.process_exception(state_32486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (9))){
var inst_32445 = (state_32486[(7)]);
var inst_32460 = (state_32486[(2)]);
var inst_32461 = (inst_32445 + (1));
var inst_32445__$1 = inst_32461;
var state_32486__$1 = (function (){var statearr_32514 = state_32486;
(statearr_32514[(10)] = inst_32460);

(statearr_32514[(7)] = inst_32445__$1);

return statearr_32514;
})();
var statearr_32515_34141 = state_32486__$1;
(statearr_32515_34141[(2)] = null);

(statearr_32515_34141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (5))){
var inst_32467 = (state_32486[(2)]);
var state_32486__$1 = (function (){var statearr_32520 = state_32486;
(statearr_32520[(11)] = inst_32467);

return statearr_32520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32486__$1,(12),dchan);
} else {
if((state_val_32487 === (14))){
var inst_32471 = (state_32486[(8)]);
var inst_32476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32471);
var state_32486__$1 = state_32486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32486__$1,(16),out,inst_32476);
} else {
if((state_val_32487 === (16))){
var inst_32478 = (state_32486[(2)]);
var state_32486__$1 = (function (){var statearr_32525 = state_32486;
(statearr_32525[(12)] = inst_32478);

return statearr_32525;
})();
var statearr_32530_34143 = state_32486__$1;
(statearr_32530_34143[(2)] = null);

(statearr_32530_34143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (10))){
var inst_32450 = (state_32486[(2)]);
var inst_32451 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32486__$1 = (function (){var statearr_32531 = state_32486;
(statearr_32531[(13)] = inst_32450);

return statearr_32531;
})();
var statearr_32532_34144 = state_32486__$1;
(statearr_32532_34144[(2)] = inst_32451);


cljs.core.async.impl.ioc_helpers.process_exception(state_32486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32487 === (8))){
var inst_32465 = (state_32486[(2)]);
var state_32486__$1 = state_32486;
var statearr_32533_34146 = state_32486__$1;
(statearr_32533_34146[(2)] = inst_32465);

(statearr_32533_34146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34125,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30479__auto__,c__30784__auto___34125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_32534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32534[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_32534[(1)] = (1));

return statearr_32534;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_32486){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_32486);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e32535){if((e32535 instanceof Object)){
var ex__30483__auto__ = e32535;
var statearr_32536_34147 = state_32486;
(statearr_32536_34147[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34148 = state_32486;
state_32486 = G__34148;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_32486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_32486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34125,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30786__auto__ = (function (){var statearr_32537 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_32537[(6)] = c__30784__auto___34125);

return statearr_32537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34125,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32543 = arguments.length;
switch (G__32543) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30784__auto___34154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34154,out){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34154,out){
return (function (state_32575){
var state_val_32576 = (state_32575[(1)]);
if((state_val_32576 === (7))){
var inst_32555 = (state_32575[(7)]);
var inst_32554 = (state_32575[(8)]);
var inst_32554__$1 = (state_32575[(2)]);
var inst_32555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32554__$1,(0),null);
var inst_32556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32554__$1,(1),null);
var inst_32557 = (inst_32555__$1 == null);
var state_32575__$1 = (function (){var statearr_32578 = state_32575;
(statearr_32578[(7)] = inst_32555__$1);

(statearr_32578[(9)] = inst_32556);

(statearr_32578[(8)] = inst_32554__$1);

return statearr_32578;
})();
if(cljs.core.truth_(inst_32557)){
var statearr_32579_34193 = state_32575__$1;
(statearr_32579_34193[(1)] = (8));

} else {
var statearr_32580_34194 = state_32575__$1;
(statearr_32580_34194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32576 === (1))){
var inst_32544 = cljs.core.vec(chs);
var inst_32545 = inst_32544;
var state_32575__$1 = (function (){var statearr_32581 = state_32575;
(statearr_32581[(10)] = inst_32545);

return statearr_32581;
})();
var statearr_32583_34199 = state_32575__$1;
(statearr_32583_34199[(2)] = null);

(statearr_32583_34199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32576 === (4))){
var inst_32545 = (state_32575[(10)]);
var state_32575__$1 = state_32575;
return cljs.core.async.ioc_alts_BANG_(state_32575__$1,(7),inst_32545);
} else {
if((state_val_32576 === (6))){
var inst_32571 = (state_32575[(2)]);
var state_32575__$1 = state_32575;
var statearr_32584_34212 = state_32575__$1;
(statearr_32584_34212[(2)] = inst_32571);

(statearr_32584_34212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32576 === (3))){
var inst_32573 = (state_32575[(2)]);
var state_32575__$1 = state_32575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32575__$1,inst_32573);
} else {
if((state_val_32576 === (2))){
var inst_32545 = (state_32575[(10)]);
var inst_32547 = cljs.core.count(inst_32545);
var inst_32548 = (inst_32547 > (0));
var state_32575__$1 = state_32575;
if(cljs.core.truth_(inst_32548)){
var statearr_32586_34216 = state_32575__$1;
(statearr_32586_34216[(1)] = (4));

} else {
var statearr_32587_34217 = state_32575__$1;
(statearr_32587_34217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32576 === (11))){
var inst_32545 = (state_32575[(10)]);
var inst_32564 = (state_32575[(2)]);
var tmp32585 = inst_32545;
var inst_32545__$1 = tmp32585;
var state_32575__$1 = (function (){var statearr_32588 = state_32575;
(statearr_32588[(10)] = inst_32545__$1);

(statearr_32588[(11)] = inst_32564);

return statearr_32588;
})();
var statearr_32589_34218 = state_32575__$1;
(statearr_32589_34218[(2)] = null);

(statearr_32589_34218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32576 === (9))){
var inst_32555 = (state_32575[(7)]);
var state_32575__$1 = state_32575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32575__$1,(11),out,inst_32555);
} else {
if((state_val_32576 === (5))){
var inst_32569 = cljs.core.async.close_BANG_(out);
var state_32575__$1 = state_32575;
var statearr_32602_34219 = state_32575__$1;
(statearr_32602_34219[(2)] = inst_32569);

(statearr_32602_34219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32576 === (10))){
var inst_32567 = (state_32575[(2)]);
var state_32575__$1 = state_32575;
var statearr_32603_34221 = state_32575__$1;
(statearr_32603_34221[(2)] = inst_32567);

(statearr_32603_34221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32576 === (8))){
var inst_32545 = (state_32575[(10)]);
var inst_32555 = (state_32575[(7)]);
var inst_32556 = (state_32575[(9)]);
var inst_32554 = (state_32575[(8)]);
var inst_32559 = (function (){var cs = inst_32545;
var vec__32550 = inst_32554;
var v = inst_32555;
var c = inst_32556;
return ((function (cs,vec__32550,v,c,inst_32545,inst_32555,inst_32556,inst_32554,state_val_32576,c__30784__auto___34154,out){
return (function (p1__32541_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32541_SHARP_);
});
;})(cs,vec__32550,v,c,inst_32545,inst_32555,inst_32556,inst_32554,state_val_32576,c__30784__auto___34154,out))
})();
var inst_32560 = cljs.core.filterv(inst_32559,inst_32545);
var inst_32545__$1 = inst_32560;
var state_32575__$1 = (function (){var statearr_32605 = state_32575;
(statearr_32605[(10)] = inst_32545__$1);

return statearr_32605;
})();
var statearr_32606_34223 = state_32575__$1;
(statearr_32606_34223[(2)] = null);

(statearr_32606_34223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34154,out))
;
return ((function (switch__30479__auto__,c__30784__auto___34154,out){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_32607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32607[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_32607[(1)] = (1));

return statearr_32607;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_32575){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_32575);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e32609){if((e32609 instanceof Object)){
var ex__30483__auto__ = e32609;
var statearr_32611_34225 = state_32575;
(statearr_32611_34225[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34228 = state_32575;
state_32575 = G__34228;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_32575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_32575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34154,out))
})();
var state__30786__auto__ = (function (){var statearr_32613 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_32613[(6)] = c__30784__auto___34154);

return statearr_32613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34154,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32621 = arguments.length;
switch (G__32621) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30784__auto___34233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34233,out){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34233,out){
return (function (state_32650){
var state_val_32651 = (state_32650[(1)]);
if((state_val_32651 === (7))){
var inst_32632 = (state_32650[(7)]);
var inst_32632__$1 = (state_32650[(2)]);
var inst_32633 = (inst_32632__$1 == null);
var inst_32634 = cljs.core.not(inst_32633);
var state_32650__$1 = (function (){var statearr_32655 = state_32650;
(statearr_32655[(7)] = inst_32632__$1);

return statearr_32655;
})();
if(inst_32634){
var statearr_32656_34317 = state_32650__$1;
(statearr_32656_34317[(1)] = (8));

} else {
var statearr_32657_34322 = state_32650__$1;
(statearr_32657_34322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (1))){
var inst_32626 = (0);
var state_32650__$1 = (function (){var statearr_32658 = state_32650;
(statearr_32658[(8)] = inst_32626);

return statearr_32658;
})();
var statearr_32660_34327 = state_32650__$1;
(statearr_32660_34327[(2)] = null);

(statearr_32660_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (4))){
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32650__$1,(7),ch);
} else {
if((state_val_32651 === (6))){
var inst_32645 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32663_34328 = state_32650__$1;
(statearr_32663_34328[(2)] = inst_32645);

(statearr_32663_34328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (3))){
var inst_32647 = (state_32650[(2)]);
var inst_32648 = cljs.core.async.close_BANG_(out);
var state_32650__$1 = (function (){var statearr_32666 = state_32650;
(statearr_32666[(9)] = inst_32647);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32650__$1,inst_32648);
} else {
if((state_val_32651 === (2))){
var inst_32626 = (state_32650[(8)]);
var inst_32629 = (inst_32626 < n);
var state_32650__$1 = state_32650;
if(cljs.core.truth_(inst_32629)){
var statearr_32668_34329 = state_32650__$1;
(statearr_32668_34329[(1)] = (4));

} else {
var statearr_32669_34334 = state_32650__$1;
(statearr_32669_34334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (11))){
var inst_32626 = (state_32650[(8)]);
var inst_32637 = (state_32650[(2)]);
var inst_32638 = (inst_32626 + (1));
var inst_32626__$1 = inst_32638;
var state_32650__$1 = (function (){var statearr_32670 = state_32650;
(statearr_32670[(8)] = inst_32626__$1);

(statearr_32670[(10)] = inst_32637);

return statearr_32670;
})();
var statearr_32671_34339 = state_32650__$1;
(statearr_32671_34339[(2)] = null);

(statearr_32671_34339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (9))){
var state_32650__$1 = state_32650;
var statearr_32672_34344 = state_32650__$1;
(statearr_32672_34344[(2)] = null);

(statearr_32672_34344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (5))){
var state_32650__$1 = state_32650;
var statearr_32673_34345 = state_32650__$1;
(statearr_32673_34345[(2)] = null);

(statearr_32673_34345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (10))){
var inst_32642 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32674_34350 = state_32650__$1;
(statearr_32674_34350[(2)] = inst_32642);

(statearr_32674_34350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (8))){
var inst_32632 = (state_32650[(7)]);
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32650__$1,(11),out,inst_32632);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34233,out))
;
return ((function (switch__30479__auto__,c__30784__auto___34233,out){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_32678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32678[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_32678[(1)] = (1));

return statearr_32678;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_32650){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_32650);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e32682){if((e32682 instanceof Object)){
var ex__30483__auto__ = e32682;
var statearr_32684_34356 = state_32650;
(statearr_32684_34356[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34357 = state_32650;
state_32650 = G__34357;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_32650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_32650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34233,out))
})();
var state__30786__auto__ = (function (){var statearr_32689 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_32689[(6)] = c__30784__auto___34233);

return statearr_32689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34233,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32691 = (function (f,ch,meta32692){
this.f = f;
this.ch = ch;
this.meta32692 = meta32692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32693,meta32692__$1){
var self__ = this;
var _32693__$1 = this;
return (new cljs.core.async.t_cljs$core$async32691(self__.f,self__.ch,meta32692__$1));
});

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32693){
var self__ = this;
var _32693__$1 = this;
return self__.meta32692;
});

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32694 = (function (f,ch,meta32692,_,fn1,meta32695){
this.f = f;
this.ch = ch;
this.meta32692 = meta32692;
this._ = _;
this.fn1 = fn1;
this.meta32695 = meta32695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32696,meta32695__$1){
var self__ = this;
var _32696__$1 = this;
return (new cljs.core.async.t_cljs$core$async32694(self__.f,self__.ch,self__.meta32692,self__._,self__.fn1,meta32695__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32696){
var self__ = this;
var _32696__$1 = this;
return self__.meta32695;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32690_SHARP_){
var G__32703 = (((p1__32690_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32690_SHARP_) : self__.f.call(null,p1__32690_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32703) : f1.call(null,G__32703));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32694.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32692","meta32692",-1196502057,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32691","cljs.core.async/t_cljs$core$async32691",-272279591,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32695","meta32695",1084500026,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32694";

cljs.core.async.t_cljs$core$async32694.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32694");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32694.
 */
cljs.core.async.__GT_t_cljs$core$async32694 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32694(f__$1,ch__$1,meta32692__$1,___$2,fn1__$1,meta32695){
return (new cljs.core.async.t_cljs$core$async32694(f__$1,ch__$1,meta32692__$1,___$2,fn1__$1,meta32695));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32694(self__.f,self__.ch,self__.meta32692,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32714 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32714) : self__.f.call(null,G__32714));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32692","meta32692",-1196502057,null)], null);
});

cljs.core.async.t_cljs$core$async32691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32691";

cljs.core.async.t_cljs$core$async32691.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32691");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32691.
 */
cljs.core.async.__GT_t_cljs$core$async32691 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32691(f__$1,ch__$1,meta32692){
return (new cljs.core.async.t_cljs$core$async32691(f__$1,ch__$1,meta32692));
});

}

return (new cljs.core.async.t_cljs$core$async32691(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32728 = (function (f,ch,meta32729){
this.f = f;
this.ch = ch;
this.meta32729 = meta32729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32730,meta32729__$1){
var self__ = this;
var _32730__$1 = this;
return (new cljs.core.async.t_cljs$core$async32728(self__.f,self__.ch,meta32729__$1));
});

cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32730){
var self__ = this;
var _32730__$1 = this;
return self__.meta32729;
});

cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32729","meta32729",-1436908268,null)], null);
});

cljs.core.async.t_cljs$core$async32728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32728";

cljs.core.async.t_cljs$core$async32728.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32728");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32728.
 */
cljs.core.async.__GT_t_cljs$core$async32728 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32728(f__$1,ch__$1,meta32729){
return (new cljs.core.async.t_cljs$core$async32728(f__$1,ch__$1,meta32729));
});

}

return (new cljs.core.async.t_cljs$core$async32728(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32743 = (function (p,ch,meta32744){
this.p = p;
this.ch = ch;
this.meta32744 = meta32744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32745,meta32744__$1){
var self__ = this;
var _32745__$1 = this;
return (new cljs.core.async.t_cljs$core$async32743(self__.p,self__.ch,meta32744__$1));
});

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32745){
var self__ = this;
var _32745__$1 = this;
return self__.meta32744;
});

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32744","meta32744",1269414777,null)], null);
});

cljs.core.async.t_cljs$core$async32743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32743";

cljs.core.async.t_cljs$core$async32743.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32743");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32743.
 */
cljs.core.async.__GT_t_cljs$core$async32743 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32743(p__$1,ch__$1,meta32744){
return (new cljs.core.async.t_cljs$core$async32743(p__$1,ch__$1,meta32744));
});

}

return (new cljs.core.async.t_cljs$core$async32743(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32772 = arguments.length;
switch (G__32772) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30784__auto___34436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34436,out){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34436,out){
return (function (state_32798){
var state_val_32799 = (state_32798[(1)]);
if((state_val_32799 === (7))){
var inst_32794 = (state_32798[(2)]);
var state_32798__$1 = state_32798;
var statearr_32806_34440 = state_32798__$1;
(statearr_32806_34440[(2)] = inst_32794);

(statearr_32806_34440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (1))){
var state_32798__$1 = state_32798;
var statearr_32807_34442 = state_32798__$1;
(statearr_32807_34442[(2)] = null);

(statearr_32807_34442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (4))){
var inst_32779 = (state_32798[(7)]);
var inst_32779__$1 = (state_32798[(2)]);
var inst_32780 = (inst_32779__$1 == null);
var state_32798__$1 = (function (){var statearr_32810 = state_32798;
(statearr_32810[(7)] = inst_32779__$1);

return statearr_32810;
})();
if(cljs.core.truth_(inst_32780)){
var statearr_32813_34443 = state_32798__$1;
(statearr_32813_34443[(1)] = (5));

} else {
var statearr_32814_34444 = state_32798__$1;
(statearr_32814_34444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (6))){
var inst_32779 = (state_32798[(7)]);
var inst_32784 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32779) : p.call(null,inst_32779));
var state_32798__$1 = state_32798;
if(cljs.core.truth_(inst_32784)){
var statearr_32816_34445 = state_32798__$1;
(statearr_32816_34445[(1)] = (8));

} else {
var statearr_32817_34446 = state_32798__$1;
(statearr_32817_34446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (3))){
var inst_32796 = (state_32798[(2)]);
var state_32798__$1 = state_32798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32798__$1,inst_32796);
} else {
if((state_val_32799 === (2))){
var state_32798__$1 = state_32798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32798__$1,(4),ch);
} else {
if((state_val_32799 === (11))){
var inst_32788 = (state_32798[(2)]);
var state_32798__$1 = state_32798;
var statearr_32821_34450 = state_32798__$1;
(statearr_32821_34450[(2)] = inst_32788);

(statearr_32821_34450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (9))){
var state_32798__$1 = state_32798;
var statearr_32823_34451 = state_32798__$1;
(statearr_32823_34451[(2)] = null);

(statearr_32823_34451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (5))){
var inst_32782 = cljs.core.async.close_BANG_(out);
var state_32798__$1 = state_32798;
var statearr_32824_34452 = state_32798__$1;
(statearr_32824_34452[(2)] = inst_32782);

(statearr_32824_34452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (10))){
var inst_32791 = (state_32798[(2)]);
var state_32798__$1 = (function (){var statearr_32826 = state_32798;
(statearr_32826[(8)] = inst_32791);

return statearr_32826;
})();
var statearr_32828_34453 = state_32798__$1;
(statearr_32828_34453[(2)] = null);

(statearr_32828_34453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (8))){
var inst_32779 = (state_32798[(7)]);
var state_32798__$1 = state_32798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32798__$1,(11),out,inst_32779);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34436,out))
;
return ((function (switch__30479__auto__,c__30784__auto___34436,out){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_32831 = [null,null,null,null,null,null,null,null,null];
(statearr_32831[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_32831[(1)] = (1));

return statearr_32831;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_32798){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_32798);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e32832){if((e32832 instanceof Object)){
var ex__30483__auto__ = e32832;
var statearr_32833_34457 = state_32798;
(statearr_32833_34457[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34458 = state_32798;
state_32798 = G__34458;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_32798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_32798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34436,out))
})();
var state__30786__auto__ = (function (){var statearr_32835 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_32835[(6)] = c__30784__auto___34436);

return statearr_32835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34436,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32842 = arguments.length;
switch (G__32842) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto__){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto__){
return (function (state_32928){
var state_val_32929 = (state_32928[(1)]);
if((state_val_32929 === (7))){
var inst_32922 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32939_34463 = state_32928__$1;
(statearr_32939_34463[(2)] = inst_32922);

(statearr_32939_34463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (20))){
var inst_32885 = (state_32928[(7)]);
var inst_32902 = (state_32928[(2)]);
var inst_32903 = cljs.core.next(inst_32885);
var inst_32868 = inst_32903;
var inst_32869 = null;
var inst_32870 = (0);
var inst_32871 = (0);
var state_32928__$1 = (function (){var statearr_32944 = state_32928;
(statearr_32944[(8)] = inst_32902);

(statearr_32944[(9)] = inst_32868);

(statearr_32944[(10)] = inst_32870);

(statearr_32944[(11)] = inst_32871);

(statearr_32944[(12)] = inst_32869);

return statearr_32944;
})();
var statearr_32946_34468 = state_32928__$1;
(statearr_32946_34468[(2)] = null);

(statearr_32946_34468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (1))){
var state_32928__$1 = state_32928;
var statearr_32950_34469 = state_32928__$1;
(statearr_32950_34469[(2)] = null);

(statearr_32950_34469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (4))){
var inst_32854 = (state_32928[(13)]);
var inst_32854__$1 = (state_32928[(2)]);
var inst_32855 = (inst_32854__$1 == null);
var state_32928__$1 = (function (){var statearr_32951 = state_32928;
(statearr_32951[(13)] = inst_32854__$1);

return statearr_32951;
})();
if(cljs.core.truth_(inst_32855)){
var statearr_32952_34470 = state_32928__$1;
(statearr_32952_34470[(1)] = (5));

} else {
var statearr_32953_34471 = state_32928__$1;
(statearr_32953_34471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (15))){
var state_32928__$1 = state_32928;
var statearr_32961_34472 = state_32928__$1;
(statearr_32961_34472[(2)] = null);

(statearr_32961_34472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (21))){
var state_32928__$1 = state_32928;
var statearr_32963_34473 = state_32928__$1;
(statearr_32963_34473[(2)] = null);

(statearr_32963_34473[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (13))){
var inst_32868 = (state_32928[(9)]);
var inst_32870 = (state_32928[(10)]);
var inst_32871 = (state_32928[(11)]);
var inst_32869 = (state_32928[(12)]);
var inst_32880 = (state_32928[(2)]);
var inst_32881 = (inst_32871 + (1));
var tmp32954 = inst_32868;
var tmp32955 = inst_32870;
var tmp32956 = inst_32869;
var inst_32868__$1 = tmp32954;
var inst_32869__$1 = tmp32956;
var inst_32870__$1 = tmp32955;
var inst_32871__$1 = inst_32881;
var state_32928__$1 = (function (){var statearr_32970 = state_32928;
(statearr_32970[(9)] = inst_32868__$1);

(statearr_32970[(10)] = inst_32870__$1);

(statearr_32970[(11)] = inst_32871__$1);

(statearr_32970[(14)] = inst_32880);

(statearr_32970[(12)] = inst_32869__$1);

return statearr_32970;
})();
var statearr_32971_34477 = state_32928__$1;
(statearr_32971_34477[(2)] = null);

(statearr_32971_34477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (22))){
var state_32928__$1 = state_32928;
var statearr_32976_34478 = state_32928__$1;
(statearr_32976_34478[(2)] = null);

(statearr_32976_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (6))){
var inst_32854 = (state_32928[(13)]);
var inst_32866 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32854) : f.call(null,inst_32854));
var inst_32867 = cljs.core.seq(inst_32866);
var inst_32868 = inst_32867;
var inst_32869 = null;
var inst_32870 = (0);
var inst_32871 = (0);
var state_32928__$1 = (function (){var statearr_32979 = state_32928;
(statearr_32979[(9)] = inst_32868);

(statearr_32979[(10)] = inst_32870);

(statearr_32979[(11)] = inst_32871);

(statearr_32979[(12)] = inst_32869);

return statearr_32979;
})();
var statearr_32981_34480 = state_32928__$1;
(statearr_32981_34480[(2)] = null);

(statearr_32981_34480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (17))){
var inst_32885 = (state_32928[(7)]);
var inst_32892 = cljs.core.chunk_first(inst_32885);
var inst_32894 = cljs.core.chunk_rest(inst_32885);
var inst_32895 = cljs.core.count(inst_32892);
var inst_32868 = inst_32894;
var inst_32869 = inst_32892;
var inst_32870 = inst_32895;
var inst_32871 = (0);
var state_32928__$1 = (function (){var statearr_32985 = state_32928;
(statearr_32985[(9)] = inst_32868);

(statearr_32985[(10)] = inst_32870);

(statearr_32985[(11)] = inst_32871);

(statearr_32985[(12)] = inst_32869);

return statearr_32985;
})();
var statearr_32987_34481 = state_32928__$1;
(statearr_32987_34481[(2)] = null);

(statearr_32987_34481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (3))){
var inst_32924 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32928__$1,inst_32924);
} else {
if((state_val_32929 === (12))){
var inst_32911 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32988_34482 = state_32928__$1;
(statearr_32988_34482[(2)] = inst_32911);

(statearr_32988_34482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (2))){
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32928__$1,(4),in$);
} else {
if((state_val_32929 === (23))){
var inst_32920 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32994_34483 = state_32928__$1;
(statearr_32994_34483[(2)] = inst_32920);

(statearr_32994_34483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (19))){
var inst_32906 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32997_34484 = state_32928__$1;
(statearr_32997_34484[(2)] = inst_32906);

(statearr_32997_34484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (11))){
var inst_32885 = (state_32928[(7)]);
var inst_32868 = (state_32928[(9)]);
var inst_32885__$1 = cljs.core.seq(inst_32868);
var state_32928__$1 = (function (){var statearr_33002 = state_32928;
(statearr_33002[(7)] = inst_32885__$1);

return statearr_33002;
})();
if(inst_32885__$1){
var statearr_33003_34487 = state_32928__$1;
(statearr_33003_34487[(1)] = (14));

} else {
var statearr_33004_34488 = state_32928__$1;
(statearr_33004_34488[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (9))){
var inst_32913 = (state_32928[(2)]);
var inst_32914 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32928__$1 = (function (){var statearr_33007 = state_32928;
(statearr_33007[(15)] = inst_32913);

return statearr_33007;
})();
if(cljs.core.truth_(inst_32914)){
var statearr_33009_34489 = state_32928__$1;
(statearr_33009_34489[(1)] = (21));

} else {
var statearr_33012_34490 = state_32928__$1;
(statearr_33012_34490[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (5))){
var inst_32860 = cljs.core.async.close_BANG_(out);
var state_32928__$1 = state_32928;
var statearr_33013_34491 = state_32928__$1;
(statearr_33013_34491[(2)] = inst_32860);

(statearr_33013_34491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (14))){
var inst_32885 = (state_32928[(7)]);
var inst_32888 = cljs.core.chunked_seq_QMARK_(inst_32885);
var state_32928__$1 = state_32928;
if(inst_32888){
var statearr_33018_34492 = state_32928__$1;
(statearr_33018_34492[(1)] = (17));

} else {
var statearr_33019_34493 = state_32928__$1;
(statearr_33019_34493[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (16))){
var inst_32909 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_33021_34495 = state_32928__$1;
(statearr_33021_34495[(2)] = inst_32909);

(statearr_33021_34495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (10))){
var inst_32871 = (state_32928[(11)]);
var inst_32869 = (state_32928[(12)]);
var inst_32878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32869,inst_32871);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32928__$1,(13),out,inst_32878);
} else {
if((state_val_32929 === (18))){
var inst_32885 = (state_32928[(7)]);
var inst_32900 = cljs.core.first(inst_32885);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32928__$1,(20),out,inst_32900);
} else {
if((state_val_32929 === (8))){
var inst_32870 = (state_32928[(10)]);
var inst_32871 = (state_32928[(11)]);
var inst_32873 = (inst_32871 < inst_32870);
var inst_32874 = inst_32873;
var state_32928__$1 = state_32928;
if(cljs.core.truth_(inst_32874)){
var statearr_33037_34500 = state_32928__$1;
(statearr_33037_34500[(1)] = (10));

} else {
var statearr_33039_34502 = state_32928__$1;
(statearr_33039_34502[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto__))
;
return ((function (switch__30479__auto__,c__30784__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30480__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30480__auto____0 = (function (){
var statearr_33053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33053[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30480__auto__);

(statearr_33053[(1)] = (1));

return statearr_33053;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30480__auto____1 = (function (state_32928){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_32928);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e33057){if((e33057 instanceof Object)){
var ex__30483__auto__ = e33057;
var statearr_33062_34505 = state_32928;
(statearr_33062_34505[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34506 = state_32928;
state_32928 = G__34506;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30480__auto__ = function(state_32928){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30480__auto____1.call(this,state_32928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30480__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30480__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto__))
})();
var state__30786__auto__ = (function (){var statearr_33076 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_33076[(6)] = c__30784__auto__);

return statearr_33076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto__))
);

return c__30784__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33092 = arguments.length;
switch (G__33092) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33110 = arguments.length;
switch (G__33110) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33125 = arguments.length;
switch (G__33125) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30784__auto___34522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34522,out){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34522,out){
return (function (state_33151){
var state_val_33152 = (state_33151[(1)]);
if((state_val_33152 === (7))){
var inst_33146 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
var statearr_33162_34523 = state_33151__$1;
(statearr_33162_34523[(2)] = inst_33146);

(statearr_33162_34523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (1))){
var inst_33128 = null;
var state_33151__$1 = (function (){var statearr_33164 = state_33151;
(statearr_33164[(7)] = inst_33128);

return statearr_33164;
})();
var statearr_33168_34525 = state_33151__$1;
(statearr_33168_34525[(2)] = null);

(statearr_33168_34525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (4))){
var inst_33131 = (state_33151[(8)]);
var inst_33131__$1 = (state_33151[(2)]);
var inst_33132 = (inst_33131__$1 == null);
var inst_33133 = cljs.core.not(inst_33132);
var state_33151__$1 = (function (){var statearr_33174 = state_33151;
(statearr_33174[(8)] = inst_33131__$1);

return statearr_33174;
})();
if(inst_33133){
var statearr_33175_34530 = state_33151__$1;
(statearr_33175_34530[(1)] = (5));

} else {
var statearr_33176_34534 = state_33151__$1;
(statearr_33176_34534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (6))){
var state_33151__$1 = state_33151;
var statearr_33178_34535 = state_33151__$1;
(statearr_33178_34535[(2)] = null);

(statearr_33178_34535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (3))){
var inst_33148 = (state_33151[(2)]);
var inst_33149 = cljs.core.async.close_BANG_(out);
var state_33151__$1 = (function (){var statearr_33179 = state_33151;
(statearr_33179[(9)] = inst_33148);

return statearr_33179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33151__$1,inst_33149);
} else {
if((state_val_33152 === (2))){
var state_33151__$1 = state_33151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33151__$1,(4),ch);
} else {
if((state_val_33152 === (11))){
var inst_33131 = (state_33151[(8)]);
var inst_33140 = (state_33151[(2)]);
var inst_33128 = inst_33131;
var state_33151__$1 = (function (){var statearr_33181 = state_33151;
(statearr_33181[(7)] = inst_33128);

(statearr_33181[(10)] = inst_33140);

return statearr_33181;
})();
var statearr_33183_34547 = state_33151__$1;
(statearr_33183_34547[(2)] = null);

(statearr_33183_34547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (9))){
var inst_33131 = (state_33151[(8)]);
var state_33151__$1 = state_33151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33151__$1,(11),out,inst_33131);
} else {
if((state_val_33152 === (5))){
var inst_33128 = (state_33151[(7)]);
var inst_33131 = (state_33151[(8)]);
var inst_33135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33131,inst_33128);
var state_33151__$1 = state_33151;
if(inst_33135){
var statearr_33185_34554 = state_33151__$1;
(statearr_33185_34554[(1)] = (8));

} else {
var statearr_33186_34561 = state_33151__$1;
(statearr_33186_34561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (10))){
var inst_33143 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
var statearr_33187_34564 = state_33151__$1;
(statearr_33187_34564[(2)] = inst_33143);

(statearr_33187_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (8))){
var inst_33128 = (state_33151[(7)]);
var tmp33184 = inst_33128;
var inst_33128__$1 = tmp33184;
var state_33151__$1 = (function (){var statearr_33191 = state_33151;
(statearr_33191[(7)] = inst_33128__$1);

return statearr_33191;
})();
var statearr_33192_34565 = state_33151__$1;
(statearr_33192_34565[(2)] = null);

(statearr_33192_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34522,out))
;
return ((function (switch__30479__auto__,c__30784__auto___34522,out){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_33194 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33194[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_33194[(1)] = (1));

return statearr_33194;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_33151){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_33151);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e33195){if((e33195 instanceof Object)){
var ex__30483__auto__ = e33195;
var statearr_33196_34573 = state_33151;
(statearr_33196_34573[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_33151;
state_33151 = G__34579;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_33151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_33151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34522,out))
})();
var state__30786__auto__ = (function (){var statearr_33197 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_33197[(6)] = c__30784__auto___34522);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34522,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33202 = arguments.length;
switch (G__33202) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30784__auto___34606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34606,out){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34606,out){
return (function (state_33243){
var state_val_33244 = (state_33243[(1)]);
if((state_val_33244 === (7))){
var inst_33239 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33246_34615 = state_33243__$1;
(statearr_33246_34615[(2)] = inst_33239);

(statearr_33246_34615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (1))){
var inst_33205 = (new Array(n));
var inst_33206 = inst_33205;
var inst_33207 = (0);
var state_33243__$1 = (function (){var statearr_33248 = state_33243;
(statearr_33248[(7)] = inst_33206);

(statearr_33248[(8)] = inst_33207);

return statearr_33248;
})();
var statearr_33249_34625 = state_33243__$1;
(statearr_33249_34625[(2)] = null);

(statearr_33249_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (4))){
var inst_33210 = (state_33243[(9)]);
var inst_33210__$1 = (state_33243[(2)]);
var inst_33211 = (inst_33210__$1 == null);
var inst_33212 = cljs.core.not(inst_33211);
var state_33243__$1 = (function (){var statearr_33250 = state_33243;
(statearr_33250[(9)] = inst_33210__$1);

return statearr_33250;
})();
if(inst_33212){
var statearr_33251_34632 = state_33243__$1;
(statearr_33251_34632[(1)] = (5));

} else {
var statearr_33252_34634 = state_33243__$1;
(statearr_33252_34634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (15))){
var inst_33233 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33253_34643 = state_33243__$1;
(statearr_33253_34643[(2)] = inst_33233);

(statearr_33253_34643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (13))){
var state_33243__$1 = state_33243;
var statearr_33258_34646 = state_33243__$1;
(statearr_33258_34646[(2)] = null);

(statearr_33258_34646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (6))){
var inst_33207 = (state_33243[(8)]);
var inst_33229 = (inst_33207 > (0));
var state_33243__$1 = state_33243;
if(cljs.core.truth_(inst_33229)){
var statearr_33267_34653 = state_33243__$1;
(statearr_33267_34653[(1)] = (12));

} else {
var statearr_33268_34654 = state_33243__$1;
(statearr_33268_34654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (3))){
var inst_33241 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33243__$1,inst_33241);
} else {
if((state_val_33244 === (12))){
var inst_33206 = (state_33243[(7)]);
var inst_33231 = cljs.core.vec(inst_33206);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33243__$1,(15),out,inst_33231);
} else {
if((state_val_33244 === (2))){
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33243__$1,(4),ch);
} else {
if((state_val_33244 === (11))){
var inst_33223 = (state_33243[(2)]);
var inst_33224 = (new Array(n));
var inst_33206 = inst_33224;
var inst_33207 = (0);
var state_33243__$1 = (function (){var statearr_33270 = state_33243;
(statearr_33270[(10)] = inst_33223);

(statearr_33270[(7)] = inst_33206);

(statearr_33270[(8)] = inst_33207);

return statearr_33270;
})();
var statearr_33271_34674 = state_33243__$1;
(statearr_33271_34674[(2)] = null);

(statearr_33271_34674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (9))){
var inst_33206 = (state_33243[(7)]);
var inst_33221 = cljs.core.vec(inst_33206);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33243__$1,(11),out,inst_33221);
} else {
if((state_val_33244 === (5))){
var inst_33215 = (state_33243[(11)]);
var inst_33210 = (state_33243[(9)]);
var inst_33206 = (state_33243[(7)]);
var inst_33207 = (state_33243[(8)]);
var inst_33214 = (inst_33206[inst_33207] = inst_33210);
var inst_33215__$1 = (inst_33207 + (1));
var inst_33217 = (inst_33215__$1 < n);
var state_33243__$1 = (function (){var statearr_33272 = state_33243;
(statearr_33272[(11)] = inst_33215__$1);

(statearr_33272[(12)] = inst_33214);

return statearr_33272;
})();
if(cljs.core.truth_(inst_33217)){
var statearr_33273_34681 = state_33243__$1;
(statearr_33273_34681[(1)] = (8));

} else {
var statearr_33274_34686 = state_33243__$1;
(statearr_33274_34686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (14))){
var inst_33236 = (state_33243[(2)]);
var inst_33237 = cljs.core.async.close_BANG_(out);
var state_33243__$1 = (function (){var statearr_33276 = state_33243;
(statearr_33276[(13)] = inst_33236);

return statearr_33276;
})();
var statearr_33277_34689 = state_33243__$1;
(statearr_33277_34689[(2)] = inst_33237);

(statearr_33277_34689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (10))){
var inst_33227 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33279_34691 = state_33243__$1;
(statearr_33279_34691[(2)] = inst_33227);

(statearr_33279_34691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (8))){
var inst_33215 = (state_33243[(11)]);
var inst_33206 = (state_33243[(7)]);
var tmp33275 = inst_33206;
var inst_33206__$1 = tmp33275;
var inst_33207 = inst_33215;
var state_33243__$1 = (function (){var statearr_33281 = state_33243;
(statearr_33281[(7)] = inst_33206__$1);

(statearr_33281[(8)] = inst_33207);

return statearr_33281;
})();
var statearr_33282_34693 = state_33243__$1;
(statearr_33282_34693[(2)] = null);

(statearr_33282_34693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34606,out))
;
return ((function (switch__30479__auto__,c__30784__auto___34606,out){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_33283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33283[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_33283[(1)] = (1));

return statearr_33283;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_33243){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_33243);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e33284){if((e33284 instanceof Object)){
var ex__30483__auto__ = e33284;
var statearr_33285_34701 = state_33243;
(statearr_33285_34701[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33284;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34702 = state_33243;
state_33243 = G__34702;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_33243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_33243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34606,out))
})();
var state__30786__auto__ = (function (){var statearr_33286 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_33286[(6)] = c__30784__auto___34606);

return statearr_33286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34606,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33288 = arguments.length;
switch (G__33288) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30784__auto___34707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30784__auto___34707,out){
return (function (){
var f__30785__auto__ = (function (){var switch__30479__auto__ = ((function (c__30784__auto___34707,out){
return (function (state_33330){
var state_val_33331 = (state_33330[(1)]);
if((state_val_33331 === (7))){
var inst_33326 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
var statearr_33332_34713 = state_33330__$1;
(statearr_33332_34713[(2)] = inst_33326);

(statearr_33332_34713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (1))){
var inst_33289 = [];
var inst_33290 = inst_33289;
var inst_33291 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33330__$1 = (function (){var statearr_33333 = state_33330;
(statearr_33333[(7)] = inst_33291);

(statearr_33333[(8)] = inst_33290);

return statearr_33333;
})();
var statearr_33334_34714 = state_33330__$1;
(statearr_33334_34714[(2)] = null);

(statearr_33334_34714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (4))){
var inst_33294 = (state_33330[(9)]);
var inst_33294__$1 = (state_33330[(2)]);
var inst_33295 = (inst_33294__$1 == null);
var inst_33296 = cljs.core.not(inst_33295);
var state_33330__$1 = (function (){var statearr_33335 = state_33330;
(statearr_33335[(9)] = inst_33294__$1);

return statearr_33335;
})();
if(inst_33296){
var statearr_33336_34715 = state_33330__$1;
(statearr_33336_34715[(1)] = (5));

} else {
var statearr_33337_34716 = state_33330__$1;
(statearr_33337_34716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (15))){
var inst_33320 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
var statearr_33338_34717 = state_33330__$1;
(statearr_33338_34717[(2)] = inst_33320);

(statearr_33338_34717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (13))){
var state_33330__$1 = state_33330;
var statearr_33339_34718 = state_33330__$1;
(statearr_33339_34718[(2)] = null);

(statearr_33339_34718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (6))){
var inst_33290 = (state_33330[(8)]);
var inst_33315 = inst_33290.length;
var inst_33316 = (inst_33315 > (0));
var state_33330__$1 = state_33330;
if(cljs.core.truth_(inst_33316)){
var statearr_33340_34719 = state_33330__$1;
(statearr_33340_34719[(1)] = (12));

} else {
var statearr_33341_34720 = state_33330__$1;
(statearr_33341_34720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (3))){
var inst_33328 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33330__$1,inst_33328);
} else {
if((state_val_33331 === (12))){
var inst_33290 = (state_33330[(8)]);
var inst_33318 = cljs.core.vec(inst_33290);
var state_33330__$1 = state_33330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33330__$1,(15),out,inst_33318);
} else {
if((state_val_33331 === (2))){
var state_33330__$1 = state_33330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33330__$1,(4),ch);
} else {
if((state_val_33331 === (11))){
var inst_33298 = (state_33330[(10)]);
var inst_33294 = (state_33330[(9)]);
var inst_33308 = (state_33330[(2)]);
var inst_33309 = [];
var inst_33310 = inst_33309.push(inst_33294);
var inst_33290 = inst_33309;
var inst_33291 = inst_33298;
var state_33330__$1 = (function (){var statearr_33342 = state_33330;
(statearr_33342[(11)] = inst_33308);

(statearr_33342[(7)] = inst_33291);

(statearr_33342[(8)] = inst_33290);

(statearr_33342[(12)] = inst_33310);

return statearr_33342;
})();
var statearr_33343_34721 = state_33330__$1;
(statearr_33343_34721[(2)] = null);

(statearr_33343_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (9))){
var inst_33290 = (state_33330[(8)]);
var inst_33306 = cljs.core.vec(inst_33290);
var state_33330__$1 = state_33330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33330__$1,(11),out,inst_33306);
} else {
if((state_val_33331 === (5))){
var inst_33298 = (state_33330[(10)]);
var inst_33291 = (state_33330[(7)]);
var inst_33294 = (state_33330[(9)]);
var inst_33298__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33294) : f.call(null,inst_33294));
var inst_33299 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33298__$1,inst_33291);
var inst_33300 = cljs.core.keyword_identical_QMARK_(inst_33291,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33301 = ((inst_33299) || (inst_33300));
var state_33330__$1 = (function (){var statearr_33344 = state_33330;
(statearr_33344[(10)] = inst_33298__$1);

return statearr_33344;
})();
if(cljs.core.truth_(inst_33301)){
var statearr_33345_34724 = state_33330__$1;
(statearr_33345_34724[(1)] = (8));

} else {
var statearr_33347_34725 = state_33330__$1;
(statearr_33347_34725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (14))){
var inst_33323 = (state_33330[(2)]);
var inst_33324 = cljs.core.async.close_BANG_(out);
var state_33330__$1 = (function (){var statearr_33349 = state_33330;
(statearr_33349[(13)] = inst_33323);

return statearr_33349;
})();
var statearr_33350_34726 = state_33330__$1;
(statearr_33350_34726[(2)] = inst_33324);

(statearr_33350_34726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (10))){
var inst_33313 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
var statearr_33351_34729 = state_33330__$1;
(statearr_33351_34729[(2)] = inst_33313);

(statearr_33351_34729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (8))){
var inst_33298 = (state_33330[(10)]);
var inst_33290 = (state_33330[(8)]);
var inst_33294 = (state_33330[(9)]);
var inst_33303 = inst_33290.push(inst_33294);
var tmp33348 = inst_33290;
var inst_33290__$1 = tmp33348;
var inst_33291 = inst_33298;
var state_33330__$1 = (function (){var statearr_33352 = state_33330;
(statearr_33352[(7)] = inst_33291);

(statearr_33352[(8)] = inst_33290__$1);

(statearr_33352[(14)] = inst_33303);

return statearr_33352;
})();
var statearr_33353_34731 = state_33330__$1;
(statearr_33353_34731[(2)] = null);

(statearr_33353_34731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30784__auto___34707,out))
;
return ((function (switch__30479__auto__,c__30784__auto___34707,out){
return (function() {
var cljs$core$async$state_machine__30480__auto__ = null;
var cljs$core$async$state_machine__30480__auto____0 = (function (){
var statearr_33354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33354[(0)] = cljs$core$async$state_machine__30480__auto__);

(statearr_33354[(1)] = (1));

return statearr_33354;
});
var cljs$core$async$state_machine__30480__auto____1 = (function (state_33330){
while(true){
var ret_value__30481__auto__ = (function (){try{while(true){
var result__30482__auto__ = switch__30479__auto__(state_33330);
if(cljs.core.keyword_identical_QMARK_(result__30482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30482__auto__;
}
break;
}
}catch (e33355){if((e33355 instanceof Object)){
var ex__30483__auto__ = e33355;
var statearr_33356_34732 = state_33330;
(statearr_33356_34732[(5)] = ex__30483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34733 = state_33330;
state_33330 = G__34733;
continue;
} else {
return ret_value__30481__auto__;
}
break;
}
});
cljs$core$async$state_machine__30480__auto__ = function(state_33330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30480__auto____1.call(this,state_33330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30480__auto____0;
cljs$core$async$state_machine__30480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30480__auto____1;
return cljs$core$async$state_machine__30480__auto__;
})()
;})(switch__30479__auto__,c__30784__auto___34707,out))
})();
var state__30786__auto__ = (function (){var statearr_33357 = (f__30785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30785__auto__.cljs$core$IFn$_invoke$arity$0() : f__30785__auto__.call(null));
(statearr_33357[(6)] = c__30784__auto___34707);

return statearr_33357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30786__auto__);
});})(c__30784__auto___34707,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map

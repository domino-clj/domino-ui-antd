goog.provide('domino.ui.antd.test_page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('domino.ui.core');
goog.require('domino.ui.component');
goog.require('domino.ui.antd.input');
goog.require('domino.ui.antd.button');
goog.require('domino.ui.antd.select');
domino.ui.component.component.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__37906){
var map__37907 = p__37906;
var map__37907__$1 = (((((!((map__37907 == null))))?(((((map__37907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37907):map__37907);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return ((function (map__37907,map__37907__$1,label,id){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label," ",cljs.core.deref((function (){var G__37909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","id","domino.ui.core/id",-236083199),id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37909) : re_frame.core.subscribe.call(null,G__37909));
})())], null);
});
;})(map__37907,map__37907__$1,label,id))
}));
domino.ui.antd.test_page.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"First name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"first-name","first-name",-1559982131)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Last name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"last-name","last-name",-1695738974)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Last name",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"full-name","full-name",408178550)], null)], null)], null),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"demographics","demographics",1943773061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"first-name","first-name",-1559982131)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-name","last-name",-1695738974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"last-name","last-name",-1695738974)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-name","full-name",408178550),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"full-name","full-name",408178550)], null)], null)], null)], null),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_,p__37910){
var map__37911 = p__37910;
var map__37911__$1 = (((((!((map__37911 == null))))?(((((map__37911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37911):map__37911);
var first_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"first-name","first-name",-1559982131));
var G__37913 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","update-component-state","domino.ui.core/update-component-state",-1702217194),new cljs.core.Keyword(null,"last-name","last-name",-1695738974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.empty_QMARK_(first_name)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37913) : re_frame.core.dispatch.call(null,G__37913));
})], null)], null),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),new cljs.core.Keyword(null,"last-name","last-name",-1695738974)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-name","full-name",408178550)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_,p__37914,___$1){
var map__37915 = p__37914;
var map__37915__$1 = (((((!((map__37915 == null))))?(((((map__37915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37915):map__37915);
var first_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915__$1,new cljs.core.Keyword(null,"first-name","first-name",-1559982131));
var last_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915__$1,new cljs.core.Keyword(null,"last-name","last-name",-1695738974));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"full-name","full-name",408178550),(function (){var or__4131__auto__ = (cljs.core.truth_((function (){var and__4120__auto__ = first_name;
if(cljs.core.truth_(and__4120__auto__)){
return last_name;
} else {
return and__4120__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_name),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name)].join(''):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = first_name;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return last_name;
}
}
})()], null);
})], null)], null)], null);
domino.ui.antd.test_page.pprint = (function domino$ui$antd$test_page$pprint(v){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37917_37925 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37918_37926 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37919_37927 = true;
var _STAR_print_fn_STAR__temp_val__37920_37928 = ((function (_STAR_print_newline_STAR__orig_val__37917_37925,_STAR_print_fn_STAR__orig_val__37918_37926,_STAR_print_newline_STAR__temp_val__37919_37927,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37917_37925,_STAR_print_fn_STAR__orig_val__37918_37926,_STAR_print_newline_STAR__temp_val__37919_37927,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37919_37927;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37920_37928;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(v);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37918_37926;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37917_37925;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
domino.ui.antd.test_page.home_page = (function domino$ui$antd$test_page$home_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref((function (){var G__37921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","view","domino.ui.core/view",-2144609905),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37921) : re_frame.core.subscribe.call(null,G__37921));
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"component states"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),domino.ui.antd.test_page.pprint(cljs.core.deref((function (){var G__37922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","components","domino.ui.core/components",-1163430557)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37922) : re_frame.core.subscribe.call(null,G__37922));
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"db state"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),domino.ui.antd.test_page.pprint(cljs.core.deref((function (){var G__37923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","db","domino.ui.core/db",-278191978)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37923) : re_frame.core.subscribe.call(null,G__37923));
})()))], null)], null);
});
domino.ui.antd.test_page.mount_root = (function domino$ui$antd$test_page$mount_root(){
var G__37924_37929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domino.ui.core","init","domino.ui.core/init",-1069189527),domino.ui.antd.test_page.schema], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__37924_37929) : re_frame.core.dispatch_sync.call(null,G__37924_37929));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [domino.ui.antd.test_page.home_page], null),document.getElementById("app"));
});
domino.ui.antd.test_page.init_BANG_ = (function domino$ui$antd$test_page$init_BANG_(){
return domino.ui.antd.test_page.mount_root();
});

//# sourceMappingURL=domino.ui.antd.test_page.js.map

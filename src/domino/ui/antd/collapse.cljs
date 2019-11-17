(ns domino.ui.antd.collapse
  (:require
    [syn-antd.collapse]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :collapse [opts]
  (fn []
    [syn-antd.collapse/collapse opts]))

(defmethod domino.ui.component/component :collapse-panel [opts]
  (fn []
    [syn-antd.collapse/collapse-panel opts]))
(ns domino.ui.antd.collapse
  (:require
    [syn-antd.collapse]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :collapse [opts]
  [syn-antd.collapse/collapse opts])

(defmethod domino.ui.component/component :collapse-panel [opts]
  [syn-antd.collapse/collapse-panel opts])
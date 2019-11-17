(ns domino.ui.antd.drawer
  (:require
    [syn-antd.drawer]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :drawer [opts]
  (fn []
    [syn-antd.drawer/drawer opts]))
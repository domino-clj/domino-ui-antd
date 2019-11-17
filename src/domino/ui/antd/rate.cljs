(ns domino.ui.antd.rate
  (:require
    [syn-antd.rate]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :rate [opts]
  (fn []
    [syn-antd.rate/rate opts]))
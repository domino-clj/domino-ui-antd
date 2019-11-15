(ns domino.ui.antd.rate
  (:require
    [syn-antd.rate]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :rate [opts]
  [syn-antd.rate/rate opts])
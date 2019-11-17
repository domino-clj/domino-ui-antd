(ns domino.ui.antd.slider
  (:require
    [syn-antd.slider]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :slider [opts]
  (fn []
    [syn-antd.slider/slider opts]))
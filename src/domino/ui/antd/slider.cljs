(ns domino.ui.antd.slider
  (:require
    [syn-antd.slider]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :slider [opts]
  [syn-antd.slider/slider opts])
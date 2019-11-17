(ns domino.ui.antd.time-picker
  (:require
    [syn-antd.time-picker]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :time-picker [opts]
  (fn []
    [syn-antd.time-picker/time-picker opts]))
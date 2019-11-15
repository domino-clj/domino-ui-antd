(ns domino.ui.antd.input-number
  (:require
    [syn-antd.input-number]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :input-number [opts]
  [syn-antd.input-number/input-number opts])
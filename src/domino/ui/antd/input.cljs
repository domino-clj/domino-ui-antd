(ns domino.ui.antd.input
  (:require
    [syn-antd.input]
    [domino.ui.component]
    [syn-antd.reagent-utils]
))

(defmethod domino.ui.component/component :input [opts]
  [syn-antd.input/input opts])

(defmethod domino.ui.component/component :input-group [opts]
  [syn-antd.input/input-group opts])

(defmethod domino.ui.component/component :input-password [opts]
  [syn-antd.input/input-password opts])

(defmethod domino.ui.component/component :input-search [opts]
  [syn-antd.input/input-search opts])

(defmethod domino.ui.component/component :input-text-area [opts]
  [syn-antd.input/input-text-area opts])
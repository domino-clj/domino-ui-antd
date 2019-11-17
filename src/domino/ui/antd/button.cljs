(ns domino.ui.antd.button
  (:require
    [syn-antd.button]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :button [opts]
  (fn []
    [syn-antd.button/button opts]))

(defmethod domino.ui.component/component :button-group [opts]
  (fn []
    [syn-antd.button/button-group opts]))
(ns domino.ui.antd.divider
  (:require
    [syn-antd.divider]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :divider [opts]
  (fn []
    [syn-antd.divider/divider opts]))
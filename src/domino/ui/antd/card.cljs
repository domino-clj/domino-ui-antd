(ns domino.ui.antd.card
  (:require
    [syn-antd.card]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :card [opts]
  (fn []
    [syn-antd.card/card opts]))

(defmethod domino.ui.component/component :card-grid [opts]
  (fn []
    [syn-antd.card/card-grid opts]))

(defmethod domino.ui.component/component :card-meta [opts]
  (fn []
    [syn-antd.card/card-meta opts]))
(ns domino.ui.antd.card
  (:require
    [syn-antd.card]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :card [opts]
  [syn-antd.card/card opts])

(defmethod domino.ui.component/component :card-grid [opts]
  [syn-antd.card/card-grid opts])

(defmethod domino.ui.component/component :card-meta [opts]
  [syn-antd.card/card-meta opts])
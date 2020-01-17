(ns domino.ui.antd.card
  (:require
    [syn-antd.card]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/card [[_ opts]]
  (fn []
    [syn-antd.card/card opts]))

(defmethod component ::c/card-grid [[_ opts]]
  (fn []
    [syn-antd.card/card-grid opts]))

(defmethod component ::c/card-meta [[_ opts]]
  (fn []
    [syn-antd.card/card-meta opts]))

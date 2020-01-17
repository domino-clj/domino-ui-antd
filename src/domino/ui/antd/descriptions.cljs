(ns domino.ui.antd.descriptions
  (:require
    [syn-antd.descriptions]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/descriptions [[_ opts]]
  (fn []
    [syn-antd.descriptions/descriptions opts]))

(defmethod component ::c/descriptions-item [[_ opts]]
  (fn []
    [syn-antd.descriptions/descriptions-item opts]))

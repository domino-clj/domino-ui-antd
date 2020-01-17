(ns domino.ui.antd.list
  (:require
    [syn-antd.list]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/list [[_ opts]]
  (fn []
    [syn-antd.list/list opts]))

(defmethod component ::c/list-item [[_ opts]]
  (fn []
    [syn-antd.list/list-item opts]))

(defmethod component ::c/list-item-meta [[_ opts]]
  (fn []
    [syn-antd.list/list-item-meta opts]))

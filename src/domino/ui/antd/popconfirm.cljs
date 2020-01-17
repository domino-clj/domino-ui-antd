(ns domino.ui.antd.popconfirm
  (:require
    [syn-antd.popconfirm]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/popconfirm [[_ opts]]
  (fn []
    [syn-antd.popconfirm/popconfirm opts]))

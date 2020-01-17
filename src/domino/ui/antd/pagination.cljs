(ns domino.ui.antd.pagination
  (:require
    [syn-antd.pagination]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/pagination [[_ opts]]
  (fn []
    [syn-antd.pagination/pagination opts]))

(ns domino.ui.antd.row
  (:require
    [syn-antd.row]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/row [[_ opts]]
  (fn []
    [syn-antd.row/row opts]))

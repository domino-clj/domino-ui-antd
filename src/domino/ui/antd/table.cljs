(ns domino.ui.antd.table
  (:require
    [syn-antd.table]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/table [[_ opts]]
  (fn []
    [syn-antd.table/table opts]))

(defmethod component ::c/table-column [[_ opts]]
  (fn []
    [syn-antd.table/table-column opts]))

(defmethod component ::c/table-column-group [[_ opts]]
  (fn []
    [syn-antd.table/table-column-group opts]))

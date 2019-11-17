(ns domino.ui.antd.table
  (:require
    [syn-antd.table]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :table [opts]
  (fn []
    [syn-antd.table/table opts]))

(defmethod domino.ui.component/component :table-column [opts]
  (fn []
    [syn-antd.table/table-column opts]))

(defmethod domino.ui.component/component :table-column-group [opts]
  (fn []
    [syn-antd.table/table-column-group opts]))
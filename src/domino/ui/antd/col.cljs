(ns domino.ui.antd.col
  (:require
    [syn-antd.col]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :col [opts]
  (fn []
    [syn-antd.col/col opts]))
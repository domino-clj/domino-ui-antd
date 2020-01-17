(ns domino.ui.antd.col
  (:require
    [syn-antd.col]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/col [[_ opts]]
  (fn []
    [syn-antd.col/col opts]))

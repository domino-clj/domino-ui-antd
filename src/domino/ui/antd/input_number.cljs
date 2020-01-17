(ns domino.ui.antd.input-number
  (:require
    [syn-antd.input-number]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/input-number [[_ opts]]
  (fn []
    [syn-antd.input-number/input-number opts]))

(ns domino.ui.antd.dropdown
  (:require
    [syn-antd.dropdown]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/dropdown [[_ opts]]
  (fn []
    [syn-antd.dropdown/dropdown opts]))

(defmethod component ::c/dropdown-button [[_ opts]]
  (fn []
    [syn-antd.dropdown/dropdown-button opts]))

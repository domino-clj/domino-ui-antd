(ns domino.ui.antd.time-picker
  (:require
    [syn-antd.time-picker]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/time-picker [[_ opts]]
  (fn []
    [syn-antd.time-picker/time-picker opts]))

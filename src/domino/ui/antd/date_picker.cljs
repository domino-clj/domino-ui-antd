(ns domino.ui.antd.date-picker
  (:require
    [syn-antd.date-picker]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/date-picker [[_ opts]]
  (fn []
    [syn-antd.date-picker/date-picker opts]))

(defmethod component ::c/date-picker-month-picker [[_ opts]]
  (fn []
    [syn-antd.date-picker/date-picker-month-picker opts]))

(defmethod component ::c/date-picker-range-picker [[_ opts]]
  (fn []
    [syn-antd.date-picker/date-picker-range-picker opts]))

(defmethod component ::c/date-picker-week-picker [[_ opts]]
  (fn []
    [syn-antd.date-picker/date-picker-week-picker opts]))

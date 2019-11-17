(ns domino.ui.antd.date-picker
  (:require
    [syn-antd.date-picker]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :date-picker [opts]
  (fn []
    [syn-antd.date-picker/date-picker opts]))

(defmethod domino.ui.component/component :date-picker-month-picker [opts]
  (fn []
    [syn-antd.date-picker/date-picker-month-picker opts]))

(defmethod domino.ui.component/component :date-picker-range-picker [opts]
  (fn []
    [syn-antd.date-picker/date-picker-range-picker opts]))

(defmethod domino.ui.component/component :date-picker-week-picker [opts]
  (fn []
    [syn-antd.date-picker/date-picker-week-picker opts]))
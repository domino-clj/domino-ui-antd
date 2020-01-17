(ns domino.ui.antd.calendar
  (:require
    [syn-antd.calendar]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/calendar [[_ opts]]
  (fn []
    [syn-antd.calendar/calendar opts]))

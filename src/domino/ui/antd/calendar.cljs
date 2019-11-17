(ns domino.ui.antd.calendar
  (:require
    [syn-antd.calendar]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :calendar [opts]
  (fn []
    [syn-antd.calendar/calendar opts]))
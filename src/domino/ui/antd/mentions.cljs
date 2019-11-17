(ns domino.ui.antd.mentions
  (:require
    [syn-antd.mentions]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :mentions [opts]
  (fn []
    [syn-antd.mentions/mentions opts]))

(defmethod domino.ui.component/component :mentions-option [opts]
  (fn []
    [syn-antd.mentions/mentions-option opts]))
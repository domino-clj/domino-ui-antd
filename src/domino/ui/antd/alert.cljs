(ns domino.ui.antd.alert
  (:require
    [syn-antd.alert]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :alert [opts]
  (fn []
    [syn-antd.alert/alert opts]))
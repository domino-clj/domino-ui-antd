(ns domino.ui.antd.progress
  (:require
    [syn-antd.progress]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :progress [opts]
  (fn []
    [syn-antd.progress/progress opts]))
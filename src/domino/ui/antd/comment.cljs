(ns domino.ui.antd.comment
  (:require
    [syn-antd.comment]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :comment [opts]
  (fn []
    [syn-antd.comment/comment opts]))
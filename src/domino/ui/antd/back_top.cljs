(ns domino.ui.antd.back-top
  (:require
    [syn-antd.back-top]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :back-top [opts]
  (fn []
    [syn-antd.back-top/back-top opts]))
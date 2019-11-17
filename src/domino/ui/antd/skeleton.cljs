(ns domino.ui.antd.skeleton
  (:require
    [syn-antd.skeleton]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :skeleton [opts]
  (fn []
    [syn-antd.skeleton/skeleton opts]))
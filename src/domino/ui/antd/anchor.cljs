(ns domino.ui.antd.anchor
  (:require
    [syn-antd.anchor]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :anchor [opts]
  (fn []
    [syn-antd.anchor/anchor opts]))

(defmethod domino.ui.component/component :anchor-link [opts]
  (fn []
    [syn-antd.anchor/anchor-link opts]))
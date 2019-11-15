(ns domino.ui.antd.anchor
  (:require
    [syn-antd.anchor]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :anchor [opts]
  [syn-antd.anchor/anchor opts])

(defmethod domino.ui.component/component :anchor-link [opts]
  [syn-antd.anchor/anchor-link opts])
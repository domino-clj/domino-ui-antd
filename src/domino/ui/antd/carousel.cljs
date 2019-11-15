(ns domino.ui.antd.carousel
  (:require
    [syn-antd.carousel]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :carousel [opts]
  [syn-antd.carousel/carousel opts])
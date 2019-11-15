(ns domino.ui.antd.divider
  (:require
    [syn-antd.divider]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :divider [opts]
  [syn-antd.divider/divider opts])
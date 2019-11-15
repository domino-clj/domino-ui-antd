(ns domino.ui.antd.button
  (:require
    [syn-antd.button]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :button [opts]
  [syn-antd.button/button opts])

(defmethod domino.ui.component/component :button-group [opts]
  [syn-antd.button/button-group opts])
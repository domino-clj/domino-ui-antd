(ns domino.ui.antd.spin
  (:require
    [syn-antd.spin]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :spin [opts]
  [syn-antd.spin/spin opts])
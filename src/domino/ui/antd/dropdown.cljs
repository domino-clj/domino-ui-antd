(ns domino.ui.antd.dropdown
  (:require
    [syn-antd.dropdown]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :dropdown [opts]
  [syn-antd.dropdown/dropdown opts])

(defmethod domino.ui.component/component :dropdown-button [opts]
  [syn-antd.dropdown/dropdown-button opts])
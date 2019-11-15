(ns domino.ui.antd.icon
  (:require
    [syn-antd.icon]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :icon [opts]
  [syn-antd.icon/icon opts])
(ns domino.ui.antd.avatar
  (:require
    [syn-antd.avatar]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :avatar [opts]
  [syn-antd.avatar/avatar opts])
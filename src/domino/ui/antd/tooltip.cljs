(ns domino.ui.antd.tooltip
  (:require
    [syn-antd.tooltip]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :tooltip [opts]
  [syn-antd.tooltip/tooltip opts])
(ns domino.ui.antd.popover
  (:require
    [syn-antd.popover]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :popover [opts]
  [syn-antd.popover/popover opts])
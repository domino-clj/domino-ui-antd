(ns domino.ui.antd.transfer
  (:require
    [syn-antd.transfer]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :transfer [opts]
  (fn []
    [syn-antd.transfer/transfer opts]))
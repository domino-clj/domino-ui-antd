(ns domino.ui.antd.result
  (:require
    [syn-antd.result]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :result [opts]
  [syn-antd.result/result opts])
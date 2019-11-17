(ns domino.ui.antd.empty
  (:require
    [syn-antd.empty]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :empty [opts]
  (fn []
    [syn-antd.empty/empty opts]))
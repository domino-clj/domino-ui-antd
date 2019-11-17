(ns domino.ui.antd.descriptions
  (:require
    [syn-antd.descriptions]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :descriptions [opts]
  (fn []
    [syn-antd.descriptions/descriptions opts]))

(defmethod domino.ui.component/component :descriptions-item [opts]
  (fn []
    [syn-antd.descriptions/descriptions-item opts]))
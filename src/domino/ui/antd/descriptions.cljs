(ns domino.ui.antd.descriptions
  (:require
    [syn-antd.descriptions]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :descriptions [opts]
  [syn-antd.descriptions/descriptions opts])

(defmethod domino.ui.component/component :descriptions-item [opts]
  [syn-antd.descriptions/descriptions-item opts])
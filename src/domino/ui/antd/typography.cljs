(ns domino.ui.antd.typography
  (:require
    [syn-antd.typography]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :typography [opts]
  (fn []
    [syn-antd.typography/typography opts]))

(defmethod domino.ui.component/component :typography-text [opts]
  (fn []
    [syn-antd.typography/typography-text opts]))

(defmethod domino.ui.component/component :typography-title [opts]
  (fn []
    [syn-antd.typography/typography-title opts]))

(defmethod domino.ui.component/component :typography-paragraph [opts]
  (fn []
    [syn-antd.typography/typography-paragraph opts]))
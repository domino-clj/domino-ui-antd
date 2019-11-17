(ns domino.ui.antd.steps
  (:require
    [syn-antd.steps]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :steps [opts]
  (fn []
    [syn-antd.steps/steps opts]))

(defmethod domino.ui.component/component :steps-step [opts]
  (fn []
    [syn-antd.steps/steps-step opts]))
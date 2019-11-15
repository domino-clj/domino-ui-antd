(ns domino.ui.antd.steps
  (:require
    [syn-antd.steps]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :steps [opts]
  [syn-antd.steps/steps opts])

(defmethod domino.ui.component/component :steps-step [opts]
  [syn-antd.steps/steps-step opts])
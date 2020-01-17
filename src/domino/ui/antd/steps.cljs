(ns domino.ui.antd.steps
  (:require
    [syn-antd.steps]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/steps [[_ opts]]
  (fn []
    [syn-antd.steps/steps opts]))

(defmethod component ::c/steps-step [[_ opts]]
  (fn []
    [syn-antd.steps/steps-step opts]))

(ns domino.ui.antd.auto-complete
  (:require
    [syn-antd.auto-complete]
    [domino.ui.component]
    [syn-antd.reagent-utils]
))

(defmethod domino.ui.component/component :auto-complete [opts]
  (fn []
    [syn-antd.auto-complete/auto-complete opts]))

(defmethod domino.ui.component/component :auto-complete-opt-group [opts]
  (fn []
    [syn-antd.auto-complete/auto-complete-opt-group opts]))

(defmethod domino.ui.component/component :auto-complete-option [opts]
  (fn []
    [syn-antd.auto-complete/auto-complete-option opts]))
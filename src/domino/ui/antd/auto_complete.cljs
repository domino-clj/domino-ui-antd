(ns domino.ui.antd.auto-complete
  (:require
    [syn-antd.auto-complete]
    [domino.ui.component :refer [component] :as c]
    [syn-antd.reagent-utils]
))

(defmethod component ::c/auto-complete [[_ opts]]
  (fn []
    [syn-antd.auto-complete/auto-complete opts]))

(defmethod component ::c/auto-complete-opt-group [[_ opts]]
  (fn []
    [syn-antd.auto-complete/auto-complete-opt-group opts]))

(defmethod component ::c/auto-complete-option [[_ opts]]
  (fn []
    [syn-antd.auto-complete/auto-complete-option opts]))

(ns domino.ui.antd.spin
  (:require
    [syn-antd.spin]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/spin [[_ opts]]
  (fn []
    [syn-antd.spin/spin opts]))

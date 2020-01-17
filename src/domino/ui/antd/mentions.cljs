(ns domino.ui.antd.mentions
  (:require
    [syn-antd.mentions]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/mentions [[_ opts]]
  (fn []
    [syn-antd.mentions/mentions opts]))

(defmethod component ::c/mentions-option [[_ opts]]
  (fn []
    [syn-antd.mentions/mentions-option opts]))

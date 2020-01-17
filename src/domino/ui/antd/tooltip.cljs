(ns domino.ui.antd.tooltip
  (:require
    [syn-antd.tooltip]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/tooltip [[_ opts]]
  (fn []
    [syn-antd.tooltip/tooltip opts]))

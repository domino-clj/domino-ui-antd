(ns domino.ui.antd.rate
  (:require
    [syn-antd.rate]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/rate [[_ opts]]
  (fn []
    [syn-antd.rate/rate opts]))

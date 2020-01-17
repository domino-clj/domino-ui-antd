(ns domino.ui.antd.statistic
  (:require
    [syn-antd.statistic]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/statistic [[_ opts]]
  (fn []
    [syn-antd.statistic/statistic opts]))

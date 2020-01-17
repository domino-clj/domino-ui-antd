(ns domino.ui.antd.result
  (:require
    [syn-antd.result]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/result [[_ opts]]
  (fn []
    [syn-antd.result/result opts]))

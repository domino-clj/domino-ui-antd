(ns domino.ui.antd.alert
  (:require
    [syn-antd.alert]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/alert [[_ opts]]
  (fn []
    [syn-antd.alert/alert opts]))

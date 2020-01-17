(ns domino.ui.antd.checkbox
  (:require
    [syn-antd.checkbox]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/checkbox [[_ opts]]
  (fn []
    [syn-antd.checkbox/checkbox opts]))

(defmethod component ::c/checkbox-group [[_ opts]]
  (fn []
    [syn-antd.checkbox/checkbox-group opts]))

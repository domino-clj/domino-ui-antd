(ns domino.ui.antd.form
  (:require
    [syn-antd.form]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/form [[_ opts]]
  (fn []
    [syn-antd.form/form opts]))

(defmethod component ::c/form-item [[_ opts]]
  (fn []
    [syn-antd.form/form-item opts]))

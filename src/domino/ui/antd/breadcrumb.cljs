(ns domino.ui.antd.breadcrumb
  (:require
    [syn-antd.breadcrumb]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/breadcrumb [[_ opts]]
  (fn []
    [syn-antd.breadcrumb/breadcrumb opts]))

(defmethod component ::c/breadcrumb-item [[_ opts]]
  (fn []
    [syn-antd.breadcrumb/breadcrumb-item opts]))

(defmethod component ::c/breadcrumb-separator [[_ opts]]
  (fn []
    [syn-antd.breadcrumb/breadcrumb-separator opts]))

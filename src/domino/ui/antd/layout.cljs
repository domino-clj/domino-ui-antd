(ns domino.ui.antd.layout
  (:require
    [syn-antd.layout]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/layout [[_ opts]]
  (fn []
    [syn-antd.layout/layout opts]))

(defmethod component ::c/layout-content [[_ opts]]
  (fn []
    [syn-antd.layout/layout-content opts]))

(defmethod component ::c/layout-footer [[_ opts]]
  (fn []
    [syn-antd.layout/layout-footer opts]))

(defmethod component ::c/layout-header [[_ opts]]
  (fn []
    [syn-antd.layout/layout-header opts]))

(defmethod component ::c/layout-sider [[_ opts]]
  (fn []
    [syn-antd.layout/layout-sider opts]))

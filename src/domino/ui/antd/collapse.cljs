(ns domino.ui.antd.collapse
  (:require
    [syn-antd.collapse]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/collapse [[_ opts]]
  (fn []
    [syn-antd.collapse/collapse opts]))

(defmethod component ::c/collapse-panel [[_ opts]]
  (fn []
    [syn-antd.collapse/collapse-panel opts]))

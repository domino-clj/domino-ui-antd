(ns domino.ui.antd.drawer
  (:require
    [syn-antd.drawer]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/drawer [[_ opts]]
  (fn []
    [syn-antd.drawer/drawer opts]))

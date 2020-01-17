(ns domino.ui.antd.icon
  (:require
    [syn-antd.icon]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/icon [[_ opts]]
  (fn []
    [syn-antd.icon/icon opts]))

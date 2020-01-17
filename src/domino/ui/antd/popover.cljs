(ns domino.ui.antd.popover
  (:require
    [syn-antd.popover]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/popover [[_ opts]]
  (fn []
    [syn-antd.popover/popover opts]))

(ns domino.ui.antd.divider
  (:require
    [syn-antd.divider]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/divider [[_ opts]]
  (fn []
    [syn-antd.divider/divider opts]))

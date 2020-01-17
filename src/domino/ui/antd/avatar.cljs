(ns domino.ui.antd.avatar
  (:require
    [syn-antd.avatar]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/avatar [[_ opts]]
  (fn []
    [syn-antd.avatar/avatar opts]))

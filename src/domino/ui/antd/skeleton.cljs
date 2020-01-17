(ns domino.ui.antd.skeleton
  (:require
    [syn-antd.skeleton]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/skeleton [[_ opts]]
  (fn []
    [syn-antd.skeleton/skeleton opts]))

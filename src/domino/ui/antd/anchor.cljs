(ns domino.ui.antd.anchor
  (:require
    [syn-antd.anchor]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/anchor [[_ opts]]
  (fn []
    [syn-antd.anchor/anchor opts]))

(defmethod component ::c/anchor-link [[_ opts]]
  (fn []
    [syn-antd.anchor/anchor-link opts]))

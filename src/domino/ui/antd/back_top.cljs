(ns domino.ui.antd.back-top
  (:require
    [syn-antd.back-top]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/back-top [[_ opts]]
  (fn []
    [syn-antd.back-top/back-top opts]))

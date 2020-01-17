(ns domino.ui.antd.badge
  (:require
    [syn-antd.badge]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/badge [[_ opts]]
  (fn []
    [syn-antd.badge/badge opts]))

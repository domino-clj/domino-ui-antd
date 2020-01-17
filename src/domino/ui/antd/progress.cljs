(ns domino.ui.antd.progress
  (:require
    [syn-antd.progress]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/progress [[_ opts]]
  (fn []
    [syn-antd.progress/progress opts]))

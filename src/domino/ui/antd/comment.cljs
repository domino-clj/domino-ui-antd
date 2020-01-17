(ns domino.ui.antd.comment
  (:require
    [syn-antd.comment]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/comment [[_ opts]]
  (fn []
    [syn-antd.comment/comment opts]))

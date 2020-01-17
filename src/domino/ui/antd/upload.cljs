(ns domino.ui.antd.upload
  (:require
    [syn-antd.upload]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/upload [[_ opts]]
  (fn []
    [syn-antd.upload/upload opts]))

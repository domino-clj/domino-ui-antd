(ns domino.ui.antd.page-header
  (:require
    [syn-antd.page-header]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/page-header [[_ opts]]
  (fn []
    [syn-antd.page-header/page-header opts]))

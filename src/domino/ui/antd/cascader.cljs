(ns domino.ui.antd.cascader
  (:require
    [syn-antd.cascader]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/cascader [[_ opts]]
  (fn []
    [syn-antd.cascader/cascader opts]))

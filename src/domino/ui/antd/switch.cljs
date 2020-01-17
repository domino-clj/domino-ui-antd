(ns domino.ui.antd.switch
  (:require
    [syn-antd.switch]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/switch [[_ opts]]
  (fn []
    [syn-antd.switch/switch opts]))

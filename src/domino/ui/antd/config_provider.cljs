(ns domino.ui.antd.config-provider
  (:require
    [syn-antd.config-provider]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/config-provider [[_ opts]]
  (fn []
    [syn-antd.config-provider/config-provider opts]))

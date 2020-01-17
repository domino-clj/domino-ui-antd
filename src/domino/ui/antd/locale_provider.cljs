(ns domino.ui.antd.locale-provider
  (:require
    [syn-antd.locale-provider]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/locale-provider [[_ opts]]
  (fn []
    [syn-antd.locale-provider/locale-provider opts]))

(ns domino.ui.antd.transfer
  (:require
    [syn-antd.transfer]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/transfer [[_ opts]]
  (fn []
    [syn-antd.transfer/transfer opts]))

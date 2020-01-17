(ns domino.ui.antd.empty
  (:require
    [syn-antd.empty]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/empty [[_ opts]]
  (fn []
    [syn-antd.empty/empty opts]))

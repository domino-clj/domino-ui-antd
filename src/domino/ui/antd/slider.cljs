(ns domino.ui.antd.slider
  (:require
    [syn-antd.slider]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/slider [[_ opts]]
  (fn []
    [syn-antd.slider/slider opts]))

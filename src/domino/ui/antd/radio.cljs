(ns domino.ui.antd.radio
  (:require
    [syn-antd.radio]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/radio [[_ opts]]
  (fn []
    [syn-antd.radio/radio opts]))

(defmethod component ::c/radio-button [[_ opts]]
  (fn []
    [syn-antd.radio/radio-button opts]))

(defmethod component ::c/radio-group [[_ opts]]
  (fn []
    [syn-antd.radio/radio-group opts]))

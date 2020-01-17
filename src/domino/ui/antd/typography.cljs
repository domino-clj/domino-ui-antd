(ns domino.ui.antd.typography
  (:require
    [syn-antd.typography]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/typography [[_ opts]]
  (fn []
    [syn-antd.typography/typography opts]))

(defmethod component ::c/typography-text [[_ opts]]
  (fn []
    [syn-antd.typography/typography-text opts]))

(defmethod component ::c/typography-title [[_ opts]]
  (fn []
    [syn-antd.typography/typography-title opts]))

(defmethod component ::c/typography-paragraph [[_ opts]]
  (fn []
    [syn-antd.typography/typography-paragraph opts]))

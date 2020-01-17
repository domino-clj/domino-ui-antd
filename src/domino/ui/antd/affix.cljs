(ns domino.ui.antd.affix
  (:require
    [syn-antd.affix]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/affix [[_ opts]]
  (fn []
    [syn-antd.affix/affix opts]))

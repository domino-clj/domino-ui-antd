(ns domino.ui.antd.mention
  (:require
    [syn-antd.mention]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/mention [[_ opts]]
  (fn []
    [syn-antd.mention/mention opts]))

(defmethod component ::c/mention-nav [[_ opts]]
  (fn []
    [syn-antd.mention/mention-nav opts]))

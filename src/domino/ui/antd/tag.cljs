(ns domino.ui.antd.tag
  (:require
    [syn-antd.tag]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/tag [[_ opts]]
  (fn []
    [syn-antd.tag/tag opts]))

(defmethod component ::c/tag-checkable-tag [[_ opts]]
  (fn []
    [syn-antd.tag/tag-checkable-tag opts]))

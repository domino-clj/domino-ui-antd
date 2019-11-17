(ns domino.ui.antd.tag
  (:require
    [syn-antd.tag]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :tag [opts]
  (fn []
    [syn-antd.tag/tag opts]))

(defmethod domino.ui.component/component :tag-checkable-tag [opts]
  (fn []
    [syn-antd.tag/tag-checkable-tag opts]))
(ns domino.ui.antd.checkbox
  (:require
    [syn-antd.checkbox]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :checkbox [opts]
  (fn []
    [syn-antd.checkbox/checkbox opts]))

(defmethod domino.ui.component/component :checkbox-group [opts]
  (fn []
    [syn-antd.checkbox/checkbox-group opts]))
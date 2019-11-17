(ns domino.ui.antd.page-header
  (:require
    [syn-antd.page-header]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :page-header [opts]
  (fn []
    [syn-antd.page-header/page-header opts]))
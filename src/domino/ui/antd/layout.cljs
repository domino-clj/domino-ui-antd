(ns domino.ui.antd.layout
  (:require
    [syn-antd.layout]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :layout [opts]
  (fn []
    [syn-antd.layout/layout opts]))

(defmethod domino.ui.component/component :layout-content [opts]
  (fn []
    [syn-antd.layout/layout-content opts]))

(defmethod domino.ui.component/component :layout-footer [opts]
  (fn []
    [syn-antd.layout/layout-footer opts]))

(defmethod domino.ui.component/component :layout-header [opts]
  (fn []
    [syn-antd.layout/layout-header opts]))

(defmethod domino.ui.component/component :layout-sider [opts]
  (fn []
    [syn-antd.layout/layout-sider opts]))
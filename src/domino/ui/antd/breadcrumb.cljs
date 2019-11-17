(ns domino.ui.antd.breadcrumb
  (:require
    [syn-antd.breadcrumb]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :breadcrumb [opts]
  (fn []
    [syn-antd.breadcrumb/breadcrumb opts]))

(defmethod domino.ui.component/component :breadcrumb-item [opts]
  (fn []
    [syn-antd.breadcrumb/breadcrumb-item opts]))

(defmethod domino.ui.component/component :breadcrumb-separator [opts]
  (fn []
    [syn-antd.breadcrumb/breadcrumb-separator opts]))
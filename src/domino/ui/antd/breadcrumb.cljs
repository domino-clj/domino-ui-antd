(ns domino.ui.antd.breadcrumb
  (:require
    [syn-antd.breadcrumb]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :breadcrumb [opts]
  [syn-antd.breadcrumb/breadcrumb opts])

(defmethod domino.ui.component/component :breadcrumb-item [opts]
  [syn-antd.breadcrumb/breadcrumb-item opts])

(defmethod domino.ui.component/component :breadcrumb-separator [opts]
  [syn-antd.breadcrumb/breadcrumb-separator opts])
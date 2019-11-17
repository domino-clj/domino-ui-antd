(ns domino.ui.antd.config-provider
  (:require
    [syn-antd.config-provider]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :config-provider [opts]
  (fn []
    [syn-antd.config-provider/config-provider opts]))
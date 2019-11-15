(ns domino.ui.antd.locale-provider
  (:require
    [syn-antd.locale-provider]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :locale-provider [opts]
  [syn-antd.locale-provider/locale-provider opts])
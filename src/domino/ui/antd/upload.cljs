(ns domino.ui.antd.upload
  (:require
    [syn-antd.upload]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :upload [opts]
  [syn-antd.upload/upload opts])
(ns domino.ui.antd.switch
  (:require
    [syn-antd.switch]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :switch [opts]
  [syn-antd.switch/switch opts])
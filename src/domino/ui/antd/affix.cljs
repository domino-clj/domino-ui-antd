(ns domino.ui.antd.affix
  (:require
    [syn-antd.affix]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :affix [opts]
  (fn []
    [syn-antd.affix/affix opts]))
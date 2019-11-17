(ns domino.ui.antd.mention
  (:require
    [syn-antd.mention]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :mention [opts]
  (fn []
    [syn-antd.mention/mention opts]))

(defmethod domino.ui.component/component :mention-nav [opts]
  (fn []
    [syn-antd.mention/mention-nav opts]))
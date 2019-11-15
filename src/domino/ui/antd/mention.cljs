(ns domino.ui.antd.mention
  (:require
    [syn-antd.mention]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :mention [opts]
  [syn-antd.mention/mention opts])

(defmethod domino.ui.component/component :mention-nav [opts]
  [syn-antd.mention/mention-nav opts])
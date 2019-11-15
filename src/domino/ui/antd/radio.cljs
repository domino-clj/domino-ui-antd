(ns domino.ui.antd.radio
  (:require
    [syn-antd.radio]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :radio [opts]
  [syn-antd.radio/radio opts])

(defmethod domino.ui.component/component :radio-button [opts]
  [syn-antd.radio/radio-button opts])

(defmethod domino.ui.component/component :radio-group [opts]
  [syn-antd.radio/radio-group opts])
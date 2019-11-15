(ns domino.ui.antd.tabs
  (:require
    [syn-antd.tabs]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :tabs [opts]
  [syn-antd.tabs/tabs opts])

(defmethod domino.ui.component/component :tabs-tab-pane [opts]
  [syn-antd.tabs/tabs-tab-pane opts])
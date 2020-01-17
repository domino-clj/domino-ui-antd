(ns domino.ui.antd.tabs
  (:require
    [syn-antd.tabs]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/tabs [[_ opts]]
  (fn []
    [syn-antd.tabs/tabs opts]))

(defmethod component ::c/tabs-tab-pane [[_ opts]]
  (fn []
    [syn-antd.tabs/tabs-tab-pane opts]))

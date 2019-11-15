(ns domino.ui.antd.badge
  (:require
    [syn-antd.badge]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :badge [opts]
  [syn-antd.badge/badge opts])
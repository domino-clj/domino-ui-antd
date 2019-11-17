(ns domino.ui.antd.list
  (:require
    [syn-antd.list]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :list [opts]
  (fn []
    [syn-antd.list/list opts]))

(defmethod domino.ui.component/component :list-item [opts]
  (fn []
    [syn-antd.list/list-item opts]))

(defmethod domino.ui.component/component :list-item-meta [opts]
  (fn []
    [syn-antd.list/list-item-meta opts]))
(ns domino.ui.antd.list
  (:require
    [syn-antd.list]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :list [opts]
  [syn-antd.list/list opts])

(defmethod domino.ui.component/component :list-item [opts]
  [syn-antd.list/list-item opts])

(defmethod domino.ui.component/component :list-item-meta [opts]
  [syn-antd.list/list-item-meta opts])
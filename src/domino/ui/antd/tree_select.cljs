(ns domino.ui.antd.tree-select
  (:require
    [syn-antd.tree-select]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :tree-select [opts]
  [syn-antd.tree-select/tree-select opts])

(defmethod domino.ui.component/component :tree-select-tree-node [opts]
  [syn-antd.tree-select/tree-select-tree-node opts])
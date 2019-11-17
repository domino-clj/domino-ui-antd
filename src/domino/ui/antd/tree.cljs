(ns domino.ui.antd.tree
  (:require
    [syn-antd.tree]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :tree [opts]
  (fn []
    [syn-antd.tree/tree opts]))

(defmethod domino.ui.component/component :tree-directory-tree [opts]
  (fn []
    [syn-antd.tree/tree-directory-tree opts]))

(defmethod domino.ui.component/component :tree-tree-node [opts]
  (fn []
    [syn-antd.tree/tree-tree-node opts]))
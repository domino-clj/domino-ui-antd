(ns domino.ui.antd.tree
  (:require
    [syn-antd.tree]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/tree [[_ opts]]
  (fn []
    [syn-antd.tree/tree opts]))

(defmethod component ::c/tree-directory-tree [[_ opts]]
  (fn []
    [syn-antd.tree/tree-directory-tree opts]))

(defmethod component ::c/tree-tree-node [[_ opts]]
  (fn []
    [syn-antd.tree/tree-tree-node opts]))

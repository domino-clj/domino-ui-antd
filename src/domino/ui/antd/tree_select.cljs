(ns domino.ui.antd.tree-select
  (:require
    [syn-antd.tree-select]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/tree-select [[_ opts]]
  (fn []
    [syn-antd.tree-select/tree-select opts]))

(defmethod component ::c/tree-select-tree-node [[_ opts]]
  (fn []
    [syn-antd.tree-select/tree-select-tree-node opts]))

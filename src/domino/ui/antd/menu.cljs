(ns domino.ui.antd.menu
  (:require
    [syn-antd.menu]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/menu [[_ opts]]
  (fn []
    [syn-antd.menu/menu opts]))

(defmethod component ::c/menu-divider [[_ opts]]
  (fn []
    [syn-antd.menu/menu-divider opts]))

(defmethod component ::c/menu-item [[_ opts]]
  (fn []
    [syn-antd.menu/menu-item opts]))

(defmethod component ::c/menu-item-group [[_ opts]]
  (fn []
    [syn-antd.menu/menu-item-group opts]))

(defmethod component ::c/menu-sub-menu [[_ opts]]
  (fn []
    [syn-antd.menu/menu-sub-menu opts]))

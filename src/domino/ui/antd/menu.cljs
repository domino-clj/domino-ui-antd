(ns domino.ui.antd.menu
  (:require
    [syn-antd.menu]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :menu [opts]
  (fn []
    [syn-antd.menu/menu opts]))

(defmethod domino.ui.component/component :menu-divider [opts]
  (fn []
    [syn-antd.menu/menu-divider opts]))

(defmethod domino.ui.component/component :menu-item [opts]
  (fn []
    [syn-antd.menu/menu-item opts]))

(defmethod domino.ui.component/component :menu-item-group [opts]
  (fn []
    [syn-antd.menu/menu-item-group opts]))

(defmethod domino.ui.component/component :menu-sub-menu [opts]
  (fn []
    [syn-antd.menu/menu-sub-menu opts]))
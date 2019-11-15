(ns domino.ui.antd.menu
  (:require
    [syn-antd.menu]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :menu [opts]
  [syn-antd.menu/menu opts])

(defmethod domino.ui.component/component :menu-divider [opts]
  [syn-antd.menu/menu-divider opts])

(defmethod domino.ui.component/component :menu-item [opts]
  [syn-antd.menu/menu-item opts])

(defmethod domino.ui.component/component :menu-item-group [opts]
  [syn-antd.menu/menu-item-group opts])

(defmethod domino.ui.component/component :menu-sub-menu [opts]
  [syn-antd.menu/menu-sub-menu opts])
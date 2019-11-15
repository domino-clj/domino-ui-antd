(ns domino.ui.antd.popconfirm
  (:require
    [syn-antd.popconfirm]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :popconfirm [opts]
  [syn-antd.popconfirm/popconfirm opts])
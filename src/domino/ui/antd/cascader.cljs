(ns domino.ui.antd.cascader
  (:require
    [syn-antd.cascader]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :cascader [opts]
  [syn-antd.cascader/cascader opts])
(ns domino.ui.antd.row
  (:require
    [syn-antd.row]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :row [opts]
  [syn-antd.row/row opts])
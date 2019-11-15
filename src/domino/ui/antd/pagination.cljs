(ns domino.ui.antd.pagination
  (:require
    [syn-antd.pagination]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :pagination [opts]
  [syn-antd.pagination/pagination opts])
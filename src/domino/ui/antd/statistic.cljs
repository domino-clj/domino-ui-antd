(ns domino.ui.antd.statistic
  (:require
    [syn-antd.statistic]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :statistic [opts]
  [syn-antd.statistic/statistic opts])
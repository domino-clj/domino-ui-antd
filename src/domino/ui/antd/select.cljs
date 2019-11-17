(ns domino.ui.antd.select
  (:require
    [syn-antd.select]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :select [opts]
  (fn []
    [syn-antd.select/select opts]))

(defmethod domino.ui.component/component :select-opt-group [opts]
  (fn []
    [syn-antd.select/select-opt-group opts]))

(defmethod domino.ui.component/component :select-option [opts]
  (fn []
    [syn-antd.select/select-option opts]))

(defn ant-select-option [id-fn label-fn option]
  ^{:key (str "antd-option-" (id-fn option))}
  [syn-antd.select/select-option
   {:key      (id-fn option)
    :value    (id-fn option)
    :title    (label-fn option)
    :disabled (:disabled? option)}
   (label-fn option)])

(defn ant-options [{:keys [options id-fn label-fn]
                    :or   {id-fn    :id
                           label-fn :label}}]
  (let [option-fn (partial ant-select-option id-fn label-fn)]
    (map option-fn options)))
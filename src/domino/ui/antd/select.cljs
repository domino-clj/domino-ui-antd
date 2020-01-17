(ns domino.ui.antd.select
  (:require
    [syn-antd.select]
    [domino.ui.core :as core]
    [domino.ui.component :refer [component] :as c]
    [re-frame.core :as rf]))

(defmethod component ::c/select-opt-group [[_ opts]]
  (fn []
    [syn-antd.select/select-opt-group opts]))

(defmethod component ::c/select-option [[_ opts]]
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

(defmethod component ::c/select [[_ {:keys [context id disabled value on-change options id-fn label-fn]
                                     :or   {id-fn    :id
                                            label-fn :label}
                                     :as   opts}]]
  (fn []
    [syn-antd.select/select
     (-> opts
         (dissoc :render)
         (assoc :disabled (or disabled (:disabled? @(rf/subscribe [::core/component-state id])))
                :on-change (or on-change #(rf/dispatch [::core/transact context [id %]]))
                :value (or value @(rf/subscribe [::core/subscribe context id]))))
     (ant-options {:id-fn    id-fn
                   :label-fn label-fn
                   :options  options})]))

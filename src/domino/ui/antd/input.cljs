(ns domino.ui.antd.input
  (:require
    [syn-antd.input]
    [domino.ui.core :as core]
    [domino.ui.component]
    [syn-antd.reagent-utils]
    [re-frame.core :as rf]))

(defmethod domino.ui.component/component :input [{:keys [id disabled value on-change]
                                                  :as   opts}]
  (fn []
    [syn-antd.input/input (assoc opts :disabled (or disabled @(rf/subscribe [::core/component id :disabled?]))
                                      :value (or value @(rf/subscribe [::core/id id]))
                                      :on-change (or on-change #(rf/dispatch-sync [::core/id id (-> % .-target .-value)])))]))

(defmethod domino.ui.component/component :input-group [opts]
  (fn []
    [syn-antd.input/input-group opts]))

(defmethod domino.ui.component/component :input-password [opts]
  (fn []
    [syn-antd.input/input-password opts]))

(defmethod domino.ui.component/component :input-search [opts]
  (fn []
    [syn-antd.input/input-search opts]))

(defmethod domino.ui.component/component :input-text-area [opts]
  (fn []
    [syn-antd.input/input-text-area opts]))
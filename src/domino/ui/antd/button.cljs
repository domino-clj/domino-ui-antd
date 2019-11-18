(ns domino.ui.antd.button
  (:require
    [syn-antd.button]
    [domino.ui.component]
    [domino.ui.core :as core]
    [re-frame.core :as rf]))

(defmethod domino.ui.component/component :button [{:keys [id disabled on-click label] :as opts}]
  (fn []
    [syn-antd.button/button (assoc opts :on-click (or on-click #(rf/dispatch [::core/id id (.now js/Date)]))
                                        :disabled (or disabled @(rf/subscribe [::core/component id :disabled?])))
     label]))

(defmethod domino.ui.component/component :button-group [opts]
  (fn []
    [syn-antd.button/button-group opts]))
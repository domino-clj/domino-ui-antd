(ns domino.ui.antd.button
  (:require
    [syn-antd.button]
    [domino.ui.core :as core]
    [domino.ui.component :refer [component] :as c]
    [re-frame.core :as rf]))

(defmethod component ::c/button [[_ {:keys [context id disabled on-click label] :as opts}]]
  (fn []
    [syn-antd.button/button
     (-> opts
         (dissoc :render)
         (assoc :on-click (or on-click #(rf/dispatch [::core/transact context [id (.now js/Date)]]))
                :disabled (or disabled (:disabled? @(rf/subscribe [::core/subscribe context id])))))
     label]))

(defmethod component ::c/button-group [[_ opts]]
  (fn []
    [syn-antd.button/button-group opts]))

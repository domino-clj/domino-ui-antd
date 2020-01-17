(ns domino.ui.antd.input
  (:require
    [syn-antd.input]
    [domino.ui.core :as core]
    [domino.ui.component :refer [component] :as c]
    [syn-antd.reagent-utils]
    [re-frame.core :as rf]))

(defmethod component ::c/input [[_ {:keys [context id disabled value on-change]
                                    :as   opts}]]
  (println context id)
  (fn []
    [syn-antd.input/input
     (-> opts
         (dissoc :render)
         (assoc  :disabled (or disabled (:disabled? @(rf/subscribe [::core/component-state context id])))
                 :value (or value @(rf/subscribe [::core/subscribe context id]))
                 :on-change (or on-change #(rf/dispatch [::core/transact context [id (-> % .-target .-value)]]))))]))

(defmethod component ::c/input-group [[_ opts]]
  (fn []
    [syn-antd.input/input-group opts]))

(defmethod component ::c/input-password [[_ opts]]
  (fn []
    [syn-antd.input/input-password opts]))

(defmethod component ::c/input-search [[_ opts]]
  (fn []
    [syn-antd.input/input-search opts]))

(defmethod component ::c/input-text-area [[_ opts]]
  (fn []
    [syn-antd.input/input-text-area opts]))

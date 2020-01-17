(ns domino.ui.antd.test-page
  (:require
    [reagent.core :as r]
    [re-frame.core :as rf]
    [domino.ui.core :as core]
    [domino.ui.component :refer [component] :as c]
    [domino.ui.antd.input]
    [domino.ui.antd.button]
    [domino.ui.antd.select]))

(defmethod component ::c/label [[_ {:keys [context label id]}]]
  (fn []
    [:label label " " @(rf/subscribe [::core/subscribe context id])]))

(def schema
  {:views
   {:default [:div
              [:div
               [:label "First name"]
               [::c/input {:id :first-name}]]
              [:div
               [:label "Last name"]
               [::c/input {:id :last-name}]]

              [::c/label {:label "Full name"
                          :id    :full-name}]

              [:div
               [::c/button
                {:id    :test-button
                 :label "Hello"}]]

              [:div
               [:label "Gender"]
               [::c/select
                {:id      :gender
                 :options [{:id    "M"
                            :label "Male"}
                           {:id    "F"
                            :label "Female"}]
                 :style   {:width "200px"}}]]]}
   :model
   [[:demographics
     [:first-name {:id :first-name}]
     [:last-name {:id :last-name}]
     [:full-name {:id :full-name}]
     [:gender {:id :gender}]]]
   :effects
   [{:inputs  [:first-name]
     :handler (fn [_ {:keys [first-name]}]
                (rf/dispatch [::core/merge-component-state
                              :last-name
                              {:disabled? (empty? first-name)}]))}]
   :events
   [{:inputs  [:first-name :last-name]
     :outputs [:full-name]
     :handler (fn [_ {:keys [first-name last-name]} _]
                {:full-name (or (when (and first-name last-name)
                                  (str last-name ", " first-name))
                                first-name
                                last-name)})}]})

(defn pprint [v]
  (with-out-str (cljs.pprint/pprint v)))

(defn home-page []
  [:div
   @(rf/subscribe [::core/view :default-ctx :default])
   [:hr]
   [:label "component states"]
   [:pre (pprint @(rf/subscribe [::core/component-states :default-ctx]))]
   [:label "db state"]
   [:pre (pprint @(rf/subscribe [::core/db :default-ctx]))]])

(defn ^:dev/after-load mount-root []
  (rf/dispatch-sync [::core/init-ctx :default-ctx schema {}])
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

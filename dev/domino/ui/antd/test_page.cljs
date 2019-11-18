(ns domino.ui.antd.test-page
  (:require
    [reagent.core :as r]
    [re-frame.core :as rf]

    [domino.ui.core :as core]
    [domino.ui.component :refer [component]]

    [domino.ui.antd.input]
    [domino.ui.antd.button]
    [domino.ui.antd.select]))

(defmethod component :label [{:keys [label id]}]
  (fn []
    [:label label " " @(rf/subscribe [::core/id id])]))


;; TODO: button example
;; TODO: select example
(def schema
  {:views
   {:default [:div
              [:div
               [:label "First name"]
               {:component :input
                :id        :first-name}]
              [:div
               [:label "Last name"]
               {:component :input
                :id        :last-name}]

              {:label     "Last name"
               :component :label
               :id        :full-name}

              {:component :button
               :id        :test-button
               :label     "Hello"}

              [:div
               [:label "Gender"]
               {:component :select
                :id        :gender
                :options   [{:id    "M"
                             :label "Male"}
                            {:id    "F"
                             :label "Female"}]
                :style     {:width "200px"}}]]}
   :model
   [[:demographics
     [:first-name {:id :first-name}]
     [:last-name {:id :last-name}]
     [:full-name {:id :full-name}]
     [:gender {:id :gender}]]]
   :effects
   [{:inputs  [:first-name]
     :handler (fn [_ {:keys [first-name]}]
                (rf/dispatch [::core/update-component-state
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
   @(rf/subscribe [::core/view :default])
   [:hr]
   [:label "component states"]
   [:pre (pprint @(rf/subscribe [::core/components]))]
   [:label "db state"]
   [:pre (pprint @(rf/subscribe [::core/db]))]])

(defn ^:dev/after-load mount-root []
  (rf/dispatch-sync [::core/init schema])
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

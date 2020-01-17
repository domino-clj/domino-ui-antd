(defproject domino/ui-antd "0.1.0"
  :description "Ant Design Wrapper for domino-ui"
  :min-lein-version "2.7.0"
  :url "https://github.com/domino-clj/domino-ui-antd"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.1" :scope "provided"]
                 [syn-antd "1.3.0"]
                 [domino/ui "0.1.2" :scope "provided"]]

  :source-paths ["src"]
  :clean-targets ^{:protect false} ["target"]

  :profiles {:jar {}
             :dev {:source-paths ["dev"]
                   :jvm-opts     ["-XX:-OmitStackTraceInFastThrow"]
                   :dependencies [[thheller/shadow-cljs "2.8.14"]
                                  [org.clojure/tools.namespace "0.3.0-alpha4"]
                                  [org.clojure/tools.nrepl "0.2.13"]

                                  ;; For code completion in cursive, managed by shadow-cljs.edn
                                  [reagent "0.9.0-rc1"]
                                  [re-frame "0.11.0-rc1"]]
                   :repl-options {:init-ns user}}})

(ns domino.ui.antd.dev
  (:require
    [domino.ui.antd.test-page :as test-page]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(test-page/init!)
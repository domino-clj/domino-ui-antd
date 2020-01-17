(ns domino.ui.antd.carousel
  (:require
    [syn-antd.carousel]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/carousel [[_ opts]]
  (fn []
    [syn-antd.carousel/carousel opts]))

(ns domino.ui.antd.timeline
  (:require
    [syn-antd.timeline]
    [domino.ui.component :refer [component] :as c]
))

(defmethod component ::c/timeline [[_ opts]]
  (fn []
    [syn-antd.timeline/timeline opts]))

(defmethod component ::c/timeline-item [[_ opts]]
  (fn []
    [syn-antd.timeline/timeline-item opts]))

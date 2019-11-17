(ns domino.ui.antd.timeline
  (:require
    [syn-antd.timeline]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :timeline [opts]
  (fn []
    [syn-antd.timeline/timeline opts]))

(defmethod domino.ui.component/component :timeline-item [opts]
  (fn []
    [syn-antd.timeline/timeline-item opts]))
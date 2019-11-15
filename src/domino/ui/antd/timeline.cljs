(ns domino.ui.antd.timeline
  (:require
    [syn-antd.timeline]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :timeline [opts]
  [syn-antd.timeline/timeline opts])

(defmethod domino.ui.component/component :timeline-item [opts]
  [syn-antd.timeline/timeline-item opts])
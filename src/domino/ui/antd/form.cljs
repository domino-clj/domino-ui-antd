(ns domino.ui.antd.form
  (:require
    [syn-antd.form]
    [domino.ui.component]
))

(defmethod domino.ui.component/component :form [opts]
  [syn-antd.form/form opts])

(defmethod domino.ui.component/component :form-item [opts]
  [syn-antd.form/form-item opts])
(ns user
  (:require [clojure.string :as string]
            [clojure.java.io :refer [as-file file make-parents reader]]))

(def base-package "domino.ui.antd")
(def base-path "domino/ui/antd")

(def ant
  [{:class "Affix"
    :path  "affix"}
   {:class "Alert"
    :path  "alert"}
   {:class "Anchor"
    :path  "anchor"
    :inner ["Link"]}
   {:class  "AutoComplete"
    :path   "auto-complete"
    :input? true
    :inner  ["OptGroup"
             "Option"]}
   {:class "Avatar"
    :path  "avatar"}
   {:class "BackTop"
    :path  "back-top"}
   {:class "Badge"
    :path  "badge"}
   {:class "Breadcrumb"
    :path  "breadcrumb"
    :inner ["Item" "Separator"]}
   {:class "Button"
    :path  "button"
    :inner ["Group"]}
   {:class "Calendar"
    :path  "calendar"}
   {:class "Card"
    :path  "card"
    :inner ["Grid"
            "Meta"]}
   {:class "Carousel"
    :path  "carousel"}
   {:class "Cascader"
    :path  "cascader"}
   {:class "Checkbox"
    :path  "checkbox"
    :inner ["Group"]}
   {:class "Col"
    :path  "col"}
   {:class "Collapse"
    :path  "collapse"
    :inner ["Panel"]}
   {:class "Comment"
    :path  "comment"}
   {:class "ConfigProvider"
    :path  "config-provider"}
   {:class "DatePicker"
    :path  "date-picker"
    :inner ["MonthPicker"
            "RangePicker"
            "WeekPicker"]}
   {:class "Descriptions"
    :path  "descriptions"
    :inner ["Item"]}
   {:class "Divider"
    :path  "divider"}
   {:class "Drawer"
    :path  "drawer"}
   {:class "Dropdown"
    :path  "dropdown"
    :inner ["Button"]}
   {:class "Empty"
    :path  "empty"}
   {:class "Form"
    :path  "form"
    :inner ["Item"]}
   {:class "Icon"
    :path  "icon"}
   {:class  "Input"
    :path   "input"
    :input? true
    :inner  [{:id     "Group"
              :input? true}
             {:id     "Password"
              :input? true}
             {:id     "Search"
              :input? true}
             {:id     "TextArea"
              :input? true}]}
   {:class "InputNumber"
    :path  "input-number"}
   {:class "Layout"
    :path  "layout"
    :inner ["Content"
            "Footer"
            "Header"
            "Sider"]}
   {:class "List"
    :path  "list"
    :inner ["Item"
            ["Item" "Meta"]]}
   {:class "LocaleProvider"                                 ;; DEPRECATED
    :path  "locale-provider"}
   {:class "Mention"                                        ;; DEPRECATED
    :path  "mention"
    :inner ["Nav"]}
   {:class "Mentions"
    :path  "mentions"
    :inner ["Option"]}
   {:class "Menu"
    :path  "menu"
    :inner ["Divider"
            "Item"
            "ItemGroup"
            "SubMenu"]}
   #_{:path "message"
    :fns  ["(.-config ant-message)"
           "(.-destroy ant-message)"
           "(.-error ant-message)"
           "(.-info ant-message)"
           "(.-loading ant-message)"
           "(.-success ant-message)"
           "(.-warn ant-message)"
           "(.-warning ant-message)"]}
   #_{:class "Modal"
    :path  "modal"
    :fns   ["(.-confirm ant-modal)"
            "(.-error ant-modal)"
            "(.-info ant-modal)"
            "(.-success ant-modal)"
            "(.-warning ant-modal)"
            "(.-open ant-modal)"
            "(.-destroyAll ant-modal)"]}
   #_{:path "notification"
    :fns  ["(.-close ant-notification)"
           "(.-config ant-notification)"
           "(.-destroy ant-notification)"
           "(.-error ant-notification)"
           "(.-info ant-notification)"
           "(.-open ant-notification)"
           "(.-success ant-notification)"
           "(.-warn ant-notification)"
           "(.-warning ant-notification)"]}
   {:class "PageHeader"
    :path  "page-header"}
   {:class "Pagination"
    :path  "pagination"}
   {:class "Popconfirm"
    :path  "popconfirm"}
   {:class "Popover"
    :path  "popover"}
   {:class "Progress"
    :path  "progress"}
   {:class "Radio"
    :path  "radio"
    :inner ["Button"
            "Group"]}
   {:class "Rate"
    :path  "rate"}
   {:class "Result"
    :path  "result"}
   {:class "Row"
    :path  "row"}
   {:class  "Select"
    :path   "select"
    :inner  ["OptGroup"
             "Option"]
    :suffix "(defn ant-select-option [id-fn label-fn option]
  ^{:key (str \"antd-option-\" (id-fn option))}
  [syn-antd.select/select-option
   {:key      (id-fn option)
    :value    (id-fn option)
    :title    (label-fn option)
    :disabled (:disabled? option)}
   (label-fn option)])

(defn ant-options [{:keys [options id-fn label-fn]
                    :or   {id-fn    :id
                           label-fn :label}}]
  (let [option-fn (partial ant-select-option id-fn label-fn)]
    (map option-fn options)))"}
   {:class "Skeleton"
    :path  "skeleton"}
   {:class "Slider"
    :path  "slider"}
   {:class "Spin"
    :path  "spin"}
   {:class "Statistic"
    :path  "statistic"}
   {:class "Steps"
    :path  "steps"
    :inner ["Step"]}
   {:class "Switch"
    :path  "switch"}
   {:class "Table"
    :path  "table"
    :inner ["Column"
            "ColumnGroup"]}
   {:class "Tabs"
    :path  "tabs"
    :inner ["TabPane"]}
   {:class "Tag"
    :path  "tag"
    :inner ["CheckableTag"]}
   {:class "TimePicker"
    :path  "time-picker"}
   {:class "Timeline"
    :path  "timeline"
    :inner ["Item"]}
   {:class "Tooltip"
    :path  "tooltip"}
   {:class "Transfer"
    :path  "transfer"}
   {:class "Tree"
    :path  "tree"
    :inner ["DirectoryTree"
            "TreeNode"]}
   {:class "TreeSelect"
    :path  "tree-select"
    :inner ["TreeNode"]}
   {:class "Typography"
    :path  "typography"
    :inner ["Text" "Title" "Paragraph"]}
   {:class "Upload"
    :path  "upload"}])

(defn module-name->any-case
  [case]
  (fn [input]
    (->> (re-seq #"\w[a-z0-9]*" input)
         (map string/lower-case)
         (string/join case))))

(def module-name->kebab-case (module-name->any-case "-"))
(def module-name->snake-case (module-name->any-case "_"))

(def get-symbol-name (comp symbol module-name->kebab-case))

(defn define-domino-component [component base-class]
  (str "(defmethod domino.ui.component/component :" (get-symbol-name component) " [opts]"
       "\n"
       "  (fn []\n"
       "    [syn-antd." (module-name->kebab-case base-class) "/" (get-symbol-name component) " opts]))"))

(defn factory-ns-shadow [class rest-of-file reagent? input?]
  (str "(ns " base-package "." (module-name->kebab-case class) "\n"
       "  (:require\n"
       (when reagent? (str "    [syn-antd."
                           (module-name->kebab-case class)
                           "]\n    [domino.ui.component]\n"))
       (when input? (str "    [syn-antd.reagent-utils]\n"))
       "))\n\n"
       rest-of-file))

;; Inspiration taken from https://github.com/fulcrologic/semantic-ui-wrapper
(defn gen-factories! []
  (doseq [{:keys [class path inner suffix input?]
           :or   {input? false}} ant]
    (let [filename  (str "src/" base-path "/" (module-name->snake-case (or class path)) ".cljs")
          file-body (string/join
                      "\n\n"
                      (concat
                        (when (some? class)
                          [(define-domino-component class class)])
                        (when (some? inner)
                          (map (fn [entry]
                                 (let [id (if (map? entry)
                                            (:id entry)
                                            entry)]
                                   (define-domino-component (str class "." id)
                                                             class))) inner))
                        (when (some? suffix)
                          [suffix])))]
      (make-parents filename)
      (spit (as-file filename)
            (factory-ns-shadow (or class path) file-body (some? class) input?)))))
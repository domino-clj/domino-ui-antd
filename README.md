# domino/ui-antd

## Running in development mode

```
npm install
shadow-cljs watch test-page
```

## Building

To build for a new version of Ant Design.

1. Update the `user/ant` map
2. Run a REPL and execute `(gen-factories!)`
3. Deploy accordingly

## Themeing

1. `npm install antd`
2. `npm install -g less-plugin-clean-css` (if not exists)
3. Create your theme in `/less`. See current folder for working example of synqrinus-theme
4. Execute `lessc --js less/antd.main.less > <YOUR THEME>-antd.css --clean-css`

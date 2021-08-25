#This a fork from [egoist-vue-prism-component](https://github.com/egoist/vue-prism-component/edit/master/README.md) , rewrite in typescript , fix bug. blabla
## Install

```bash
yarn add @hotrungnhan/vue-prism-component
```

First you need to use `Prism` somewhere in your app:

```js
// yarn add prismjs
import 'prismjs'
import 'prismjs/themes/prism.css' // you can only import theme in your component.
import '@hotrungnhan/vue-prism-component/theme/prism-window.css' // window theme let give a try.
import prism from '@hotrungnhan/vue-prism-component'
const app = createApp(App)
app.use(prism)
```

```vue
<template>
  <Prism lang="javascript">{{ code }}</Prism>
</template>

Or In JSX:

```js
<Prism lang="html">{`
  <div>
    <strong>foo</strong>
  </div>
`}</Prism>
```

For inline rendering, pass the `inline` prop:

```js
<Prism inline lang="javascript" >alert("foo");</Prism>
```

You can also set the code using a prop:

```js
import 'prismjs/components/prism-rust'

<Prism lang="rust" code={ myRustCode } />
```
## Add more language
Using https://www.npmjs.com/package/babel-plugin-prismjs to adding more language, theme, plugin.
## Roadmap 
* More theme Support
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
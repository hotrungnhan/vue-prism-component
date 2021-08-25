#This nearly a fork from [egoist-vue-prism-component](https://github.com/egoist/vue-prism-component/edit/master/README.md) , rewrite with typescript support, fix bug. blabla
## Install

```bash
yarn add @hotrungnhan/vue-prism-component
```

First you need to load `Prism` somewhere in your app:

```js
// yarn add prismjs
import 'prismjs'
import 'prismjs/themes/prism.css'
```

OR:

```html
<link rel="stylesheet" href="https://unpkg.com/prismjs/themes/prism.css" />
<script src="https://unpkg.com/prismjs"></script>
```

Then In SFC:

```vue
<template>
  <prism language="javascript">{{ code }}</prism>
</template>

<script>
import Prism from '@hotrungnhan/vue-prism-component'

export default {
  data() {
    return {
      code: 'const a = b'
    }
  },
  components: {
    Prism
  }
}
</script>
```

Or In JSX:

```js
<Prism language="html">{`
  <div>
    <strong>foo</strong>
  </div>
`}</Prism>
```

For inline rendering, pass the `inline` prop:

```js
<Prism inline language="javascript" >alert("foo");</Prism>
```

You can also set the code using a prop:

```js
import 'prismjs/components/prism-rust'

<Prism language="rust" code={ myRustCode } />
```
## Add more language
Using https://www.npmjs.com/package/babel-plugin-prismjs to adding more language. remember, plugin now is not support.
## Roadmap 
* Plugin support
* More theme Support
* Add language less depend on prism babel-plugin-prismjs 
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

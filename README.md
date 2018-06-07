# google-sheet-model

> A Vue.js project

## Basic Use

```html
<div id="app">
  <pre>{{ updated }}</pre>
  <ul>
    <li v-for="x in instances">
      <pre>{{ x }}</pre>
    </li>
  </ul>
</div>

<script src="./dist/build.js"></script>
<script type="text/javascript">
new GoogleSheetModel({
  propsData: {
    sheetId: '1RDkV2W8dw8crhjBwRuklck3vwgF8Xe-qtpJCZY8ZY2A',
    tableId: 2,
    fields: ['heading', 'href', 'imagesrc', 'description']
  }
}).$mount('#app')
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

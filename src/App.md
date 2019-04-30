```jsx
<!-- scoped slot -->
<GoogleSheetModel v-slot="{ gsheet }" sheet-id="1RDkV2W8dw8crhjBwRuklck3vwgF8Xe-qtpJCZY8ZY2A" table-index="2">

  <strong v-if="gsheet.loading">{{ gsheet.status }}</strong>

  <div v-else>
    <table>
      <tbody>
        <tr v-for="model in gsheet.instances.slice(0, 3)" :key="model._id">
          <td>
            <img :src="model.imagesrc" :alt="model.heading" width="100" />
          </td>
          <td>
            <a :href="model.href" target="_blank" style="display: block;">
              {{ model.heading }}
            </a>
            {{ model.description }}
          </td>
        </tr>
      </tbody>
    </table>

    <em>Sheet Last Updated: <small>{{ gsheet.updated }}</small></em>
  </div>

</GoogleSheetModel>
```

```html
<!-- success event -->
<GoogleSheetModel @success="dataReceived" ...>
  ...
</GoogleSheetModel>

<script>
export default {
  methods: {
    dataReceived (data) {
      console.log('succes', data)
    }
  }
}
</script>
```

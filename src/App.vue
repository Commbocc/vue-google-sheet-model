<template lang="html">
  <div>
    <!-- @slot Use this [Scoped Slot](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)'s `gsheet` property to display the returned data. For non-modern browsers see [Destructuring Slot Props](https://vuejs.org/v2/guide/components-slots.html#Destructuring-Slot-Props). -->
    <slot v-bind:gsheet="{ ...$data }"></slot>
  </div>
</template>

<script>
import axios from 'axios'
import Instance from './Instance'

/**
* Use the rows of a Google Sheet spreadsheet as model instances.
*/
export default {
  name: 'GoogleSheetModel',
  props: {
    /**
    * The [Spreadsheet's ID](https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id)
    */
    sheetId: {
      type: String,
      required: true
    },
    /**
    * The index of the sheet (tab). Order matters, use 1 for the first tab, 2 for the second, etc.
    */
    tableIndex: {
      type: String,
      default: '1'
    },
    /**
    * The fields that will be available to each instance. These are the headings of the sheet's columns set to lowercase with no spaces. `Start Date` becomes `startdate`
    */
    fields: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    updated: null,
    instances: []
  }),
  methods: {
    fetchJson () {
      return axios.get(this.sheetEndpoint).then(this.setData)
    },
    setData (response) {
      this.updated = new Date(response.data.feed.updated.$t)
      if (response.data.feed.entry) {
        this.instances = response.data.feed.entry.map(x => new Instance(x, this.fields))
      }
    }
  },
  computed: {
    sheetEndpoint () {
      return `https://spreadsheets.google.com/feeds/list/${this.sheetId}/${this.tableIndex}/public/values?alt=json`
    }
  },
  beforeMount () {
    return this.fetchJson()
  }
}
</script>

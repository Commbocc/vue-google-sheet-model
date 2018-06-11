import Vue from 'vue'
import App from './App.vue'

class Instance {
  constructor (data, fields) {
    fields.forEach(f => {
      this[f] = data[`gsx$${f}`].$t
    })
  }
}

export default Vue.extend({
  props: {
    sheetId: {
      type: String,
      required: true
    },
    tableId: {
      type: Number,
      required: true
    },
    fields: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      updated: null,
      instances: []
    }
  },
  methods: {
    fetchJson () {
      return fetch(this.sheetEndpoint).then(res => res.json()).then(this.setData)
    },
    setData (json) {
      this.updated = new Date(json.feed.updated.$t)
      if (json.feed.entry) {
        this.instances = json.feed.entry.map(x => new Instance(x, this.fields))
      }
      return this
    }
  },
  computed: {
    sheetEndpoint () {
      return `https://spreadsheets.google.com/feeds/list/${this.sheetId}/${this.tableId}/public/values?alt=json`
    }
  },
  beforeMount () {
    this.fetchJson()
  }
})

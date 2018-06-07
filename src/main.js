import Vue from 'vue'
import App from './App.vue'

class Instance {
  constructor (data) {
    this.constructor.fields.forEach(h => {
      this[h] = data[`gsx$${h}`].$t
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
      fetch(this.sheetEndpoint).then(res => res.json()).then(json => {
        this.updated = new Date(json.feed.updated.$t)
        if (json.feed.entry) {
          this.instances = json.feed.entry.map(x => new Instance(x))
        }
      })
    }
  },
  computed: {
    sheetEndpoint () {
      return `https://spreadsheets.google.com/feeds/list/${this.sheetId}/${this.tableId}/public/values?alt=json`
    }
  },
  created () {
    Instance.fields = this.fields
    this.fetchJson()
  }
})

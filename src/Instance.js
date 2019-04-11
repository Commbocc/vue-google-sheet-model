export default class Instance {
  constructor (data, fields) {
    fields.forEach(f => {
      this[f] = data[`gsx$${f}`].$t
    })
  }
}

export default class Instance {
  constructor (data) {
    for (var field in data) {
      let ff = (field.includes('gsx$')) ? field.replace('gsx$', '') : `_${field}`
      this[ff] = data[field].$t
    }
  }
}

const slugify = require('slugify')

const setSlug = (data) => {
  if (!data.name) return
  data.slug = slugify(data.name.toLowerCase())
}

module.exports = {
  beforeCreate(event) {
    setSlug(event.params.data)
  },
  beforeUpdate(event) {
    setSlug(event.params.data)
  }
};


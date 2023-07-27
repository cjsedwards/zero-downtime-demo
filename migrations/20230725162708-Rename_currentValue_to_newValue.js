module.exports = {
  async up(db, client) {
    await db.collection('counters').update({}, {$rename: {'counter.currentValue': 'counter.newValue'}})
  },

  async down(db, client) {
  }
};

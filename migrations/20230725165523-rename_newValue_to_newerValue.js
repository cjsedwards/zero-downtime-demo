module.exports = {
  async up(db, client) {
    await db.collection('counters').update({}, {$rename: {'counter.newValue': 'counter.newerValue'}})
  },

  async down(db, client) {
  }
};

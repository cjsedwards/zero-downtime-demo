module.exports = {
  async up(db, client) {
    await db.collection('counters').updateOne({}, {$rename: {'counter.value':'counter.newValue'}});
  },

  async down(db, client) {
  }
};

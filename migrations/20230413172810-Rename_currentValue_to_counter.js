module.exports = {
  async up(db, client) {
    await db.collection('counters').update({}, {$rename: {currentValue: 'counter'}})
  },

  async down(db, client) {
  }
};

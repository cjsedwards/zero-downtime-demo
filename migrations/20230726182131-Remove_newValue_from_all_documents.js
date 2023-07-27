module.exports = {
  async up(db, client) {
    await db.collection('counters').update({}, [{ $unset: 'counter.newValue' }])
  },

  async down(db, client) {
  }
};

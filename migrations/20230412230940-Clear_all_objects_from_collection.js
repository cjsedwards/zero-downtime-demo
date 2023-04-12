module.exports = {
  async up(db, client) {
    await db.collection('counters').deleteMany({})
  },

  async down(db, client) {
  }
};

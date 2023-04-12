module.exports = {
  async up(db, client) {
    await db.collection('counters').updateOne({}, {$rename: {count: "counter"}});
  },

  async down(db, client) {
  }
};

module.exports = {
  async up(db, client) {
    await db.collection('counters').update({}, [{$set: {'currentValue.value': '$currentValue.val'}}])
  },

  async down(db, client) {
  }
};

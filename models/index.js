const User = require('./User');
const Book = require('./Book');

User.hasMany(Book, {
    foreinKey: 'user_id',
    onDelete: 'CASCADE'
});

Book.belongsTo(User, {
    foreinKey: 'user_id'
});

module.exports = { User, Book }
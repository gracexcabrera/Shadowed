const { User } = require('../models');

const userData = [
    // generated random names, passwords, emails
  {
    user_name: 'Cecilia Ryan',
    password: 'Wk55pr4TYWRj',
    email: 'cecilia.ryan55@gmail.com',
  },
  {
    user_name: 'Eileen Moore',
    password: 'QKVmCfjHs855',
    email: 'emoore855@hotmail.com' ,
  },
  {
    user_name: 'Angelina McClure',
    password: 'JBYAv6rCAe6r',
    email: 'ang3linamclur3@yahoo.com',
  },
  {
    user_name: 'Zaynab Sawyer',
    password: 'w2F8RLnBc3Ar',
    email: 'zay.sawyer@gmail.com',
  },
  {
    user_name: 'Abraham Hunter',
    password: 'kcFktktUtjAY',
    email: 'abe.hunter85@yahoo.com',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
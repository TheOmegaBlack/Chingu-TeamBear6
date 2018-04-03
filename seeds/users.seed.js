const User = require('../models/user')

const users = [
  {
    name: 'Jose Rizal',
    email: 'jose@g.com',
    password: 'password123',
    geolocation: [123.486642, 8.098590],
    interests: [
      {
        interest: '5ac392007e35f10bf022273d',
        wantsToBeLeader: true,
        isAvailable: true,
        maxDistance: 40000,
        geolocation: [123.441143, 7.824767],
      },
      {
        interest: '5ac392007e35f10bf022273f',
        wantsToBeLeader: false,
        isAvailable: false,
        maxDistance: 30000,
        geolocation: [123.486642, 8.098590],
      },
    ],
  },
  {
    name: 'Andres Bonifacio',
    email: 'andres@g.com',
    password: 'password123',
    geolocation: [123.441143, 7.824767],
    interests: [
      {
        interest: '5ac392007e35f10bf0222740',
        wantsToBeLeader: true,
        isAvailable: true,
        maxDistance: 30000,
        geolocation: [123.486642, 8.098590],
      },
    ],
  },
  {
    name: 'Francisco Balagtas',
    email: 'francisco@g.com',
    password: 'password123',
    geolocation: [123.060570, 7.728591],
    interests: [
      {
        interest: '5ac392007e35f10bf0222740',
        wantsToBeLeader: true,
        isAvailable: true,
        maxDistance: 40000,
        geolocation: [123.060570, 7.728591],
      },
      {
        interest: '5ac392007e35f10bf022273e',
        wantsToBeLeader: false,
        isAvailable: true,
        maxDistance: 80000,
        geolocation: [123.441143, 7.824767],
      },
      {
        interest: '5ac392007e35f10bf0222741',
        wantsToBeLeader: false,
        isAvailable: false,
        maxDistance: 30000,
        geolocation: [123.060570, 7.728591],
      },
    ],
  },
]

// clear collection before insert to avoid duplicate
const populate = () => User.remove({})
  .then(() => User.create(users))

module.exports = { populate }

// import moment from '/node_modules/moment/moment.js'
let moment = require('moment')
let lodash = require('lodash')
let sum = require('sum')

let today = new Date()
let formatedDate = moment(today).format('LL')
console.log(formatedDate);


let users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
]

lodash.find(users, { 'age': 1, 'active': true })
console.log(lodash);

console.log(sum);

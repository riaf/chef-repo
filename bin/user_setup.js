#!/usr/bin/env node

var https = require('https')
  , fs    = require('fs')
  , async = require('async');

var users = [
  {
    id: "riaf",
    password: "$1$ZpGqmI5Q$QPRinrrFQLASdCRkrismO.",
    groups: [ "sysadmin" ],
    uid: 2001,
    shell: "/usr/bin/zsh"
  }
];

async.each(users, function(user, next) {
  https.get('https://github.com/' + user.id + '.keys', function(response) {
    response.on('data', function(d) {
      user.ssh_keys = d.toString('utf-8').split("\n");
      next(user);
    });
  });
}, function(user) {
  fs.writeFile(__dirname + '/../data_bags/users/' + user.id + '.json', JSON.stringify(user, null, '  '), 'utf-8');
});


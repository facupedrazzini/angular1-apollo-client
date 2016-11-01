(function () {
    'use strict';

    var Apollo = require('apollo-client');
    var gql = require('graphql-tag');

    angular.module('angular1.apollo.client', [])
        .constant('Apollo', Apollo)
        .constant('gql', gql);
})();

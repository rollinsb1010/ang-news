'use strict';

app.factory('Post', function($resource) {
    return $resource('https://angular-test2.firebaseIO.com/posts/:id.json');
});
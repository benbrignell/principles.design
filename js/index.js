---
# Dashes allow Jekyll goodness
---

var options = {
    valueNames: [ 'title', 'author' ]
};
var userList = new List('title', 'author', options);

var examplesList = new List('search-list', options);
var noItems = '<div class="tile" id="#resultNotFoundTile">' +
                '<a href="{{site.contribute-url}}" class="full-link">' +
                  '<h3 class="h2 title" style="margin-top: 0; margin-bottom: 0;">Nothing found</h3>' +
                '</a>' +
              '</div>' +
              '<div class="tile ghost" id="contributeTile">' +
                '<h2 class="h3 lhs"><a href="{{site.contribute-url}}">Got something <br>to add?</a></h2>' +
                '<p><a href="{{site.contribute-url}}">Submit an example</a></p> ' +
                '</a>' +
              '</div>';

var ghost = $('#contributeTile');

examplesList.on('updated', function(list) {
  if (list.matchingItems.length == 0) {
    $(list.list).append(noItems);
    $(list.list).append(ghost);

  } else {
    $('#resultNotFoundTile').detach();
  }
});

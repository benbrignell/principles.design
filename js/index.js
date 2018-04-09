---
# Dashes allow Jekyll goodness
---

var options = {
    valueNames: [ 'title', 'author' ]
};

var userList = new List('title', 'author', options);
var examplesList = new List('search-list', options);

var notFound = document.createElement('div');
notFound.id = 'resultNotFoundTile'
notFound.className = 'tile'
notFound.innerHTML = '<h3 class="h2 title" style="margin-top: 0; margin-bottom: 0;">Nothing found</h3>';

var contribute = document.createElement('div');
contribute.id = 'contributeTile'
contribute.className = 'tile ghost'
contribute.innerHTML = '<h2 class="h3 lhs"><a href="{{site.contribute-url}}">Got something <br>to add?</a></h2>' +
                       '<p><a href="{{site.contribute-url}}">Submit an example</a></p>';

examplesList.on('updated', function(list) {
  if (list.matchingItems.length == 0) {
    list.list.appendChild(notFound);
    list.list.appendChild(contribute);
  } else {
    var notFoundElem = document.getElementById('resultNotFoundTile');
    var contributeElem = document.getElementById('contributeTile');
    if (notFoundElem && contributeElem) {
      notFoundElem.parentNode.removeChild(notFoundElem);
      contributeElem.parentNode.removeChild(contributeElem);
    }
  }
});

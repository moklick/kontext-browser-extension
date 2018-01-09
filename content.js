var data = [
  {
    name: 'Test',
    texts: ['der getestet wird', 'der weiterhin getestet wird']
  }
];

extendText();

function getNameRegex(name) {
  return new RegExp('\b' + name + '\b');
}

function getNewString(date) {
  return date.name + ', ' + date.texts[Math.floor(date.texts.length * Math.random())];
}

// extend text content with extension sentences
function extendText() {
  findTextNodes(document.body).forEach(function(node) {
    data.forEach(function(date) {
      var parts = node.textContent.split(getNameRegex(date.name));
      for (var i = 1; i < parts.length; i++) {
        var inSentence = parts.splice(i, 0, getNewString(date));
      }
      node.textContent = parts.join('');
    });
  });
}

// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  var node;
  var textNodes = [];
  var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while ((node = walk.nextNode())) {
    textNodes.push(node);
  }
  return textNodes;
}

var data = [{
  name: 'Test',
  texts: [
    'der getestet wird',
    'der weiterhin getestet wird'
  ]
}];


// add regex expressions to data
data = data.map(function(d) {
  d.regex = new RegExp(d.name, 'g');
  return d;
});

extendText();



// extend text content with extension sentences
function extendText() {
  findTextNodes(document.body).forEach(function(e) {
    data.forEach(function(d) {
      var randomText = d.texts[~~(d.texts.length * Math.random())];
      // TODO: check if it's the end of the sentence
      e.textContent = e.textContent.replace(d.regex, d.name + ', ' + randomText + ', ');
    });
  });
}


// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  var node;
  var textNodes = [];
  var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (node = walk.nextNode()) {
    textNodes.push(node);
  }
  return textNodes;
}


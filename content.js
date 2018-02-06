const getRandomAddition = item => item.additions[Math.floor(item.additions.length * Math.random())];

// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  const nodes = []
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}

function generateLink(src) {
  const link = document.createElement('a');
  link.href = src;
  link.target = 'context-source';
  link.rel = 'noopener noreferrer';
  link.title = 'Quelle für diesen Kontext'
  link.style.cssText = 'text-decoration:underline;color:inherit;cursor:pointer;opacity:.5';
  link.textContent = '*';
  return link;
}

// extend text content with extension sentences
function extendText() {
  const items = data
    .filter(item => document.body.innerHTML.includes(`${item.forename} ${item.name}`))
    .map(item => Object.assign(item, { regex: new RegExp(`\\b${item.name}\\b`, 'g') }));

  const range = document.createRange();

  findTextNodes(document.body).forEach(node => {
    items.forEach(item => {
      const indexList = [];
      let rx;
      while (rx = item.regex.exec(node.textContent)) {
        indexList.unshift(rx.index + rx[0].length);
      }
      indexList.forEach(index => {
        const addition = getRandomAddition(item);
        const nextChar = node.textContent[index];
        const isEndOfSentence = !nextChar || nextChar !== ' ';
        range.setStart(node, index);
        if (!isEndOfSentence) {
          range.insertNode(document.createTextNode(','));
        }
        // we will activate this when we have an option site
        // range.insertNode(generateLink(addition.src));
        range.insertNode(document.createTextNode(`, ${addition.text}`));
      })
    })
    node.textContent = node.textContent.replace(/Björn Höcke/g, 'Bernd Höcke');
  })
}

extendText();

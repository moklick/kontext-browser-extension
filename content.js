const getNameRegex = name => new RegExp(`\\b${name}\\b`, 'g');

const getNewString = (item, isEndOfSentence) => `${item.name}, ${item.text[Math.floor(item.text.length * Math.random())]}${isEndOfSentence ? '' : ','}`;

// based on http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function* findTextNodes(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (walker.nextNode()) {
    yield walker.currentNode;
  }
}

function checkNames() {
  data.forEach(item => item.isPresent = document.body.innerHTML.includes(`${item.forename} ${item.name}`));
}

// extend text content with extension sentences
function extendText() {
  for (let node of findTextNodes(document.body)) {
    node.textContent = node.textContent.replace(/Björn Höcke/g, 'Bernd Höcke');
    data.forEach(item => {
      if (item.isPresent) {
        const parts = node.textContent.split(getNameRegex(item.name));
        for (let i = parts.length - 1; i > 0; i--) {
          const isEndOfSentence = /^\s*[^a-z 0-9]/i.test(parts[i]) || parts[i] === '';
          parts.splice(i, 0, getNewString(item, isEndOfSentence));
        }
        node.textContent = parts.join('');
      }
    });
  }
}

checkNames();
extendText();


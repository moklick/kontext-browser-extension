const getNameRegex = name => new RegExp(`\\b${name}\\b`, 'g');

const getRandomAddition = item => item.additions[Math.floor(item.additions.length * Math.random())];

const getNewAddition = (item, isEndOfSentence) => {
  const addition = getRandomAddition(item);
  return {
    src: addition.src,
    text: `${item.name}, ${addition.text}${isEndOfSentence ? '' : ','}`
  }
};

// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  const textNodes = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  return textNodes;
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

function checkNames() {
  data.forEach(item => item.isPresent = document.body.innerHTML.includes(`${item.forename} ${item.name}`));
}

// extend text content with extension sentences
function extendText() {
  findTextNodes(document.body).forEach(node => {
    node.textContent = node.textContent.replace(/Björn Höcke/g, 'Bernd Höcke');
    data.forEach(item => {
      if (item.isPresent) {
        const parts = node.textContent.split(getNameRegex(item.name));
        if (parts.length < 2) return;
        const srcLinks = [];
        let currentPos = 0;
        for (let i = parts.length - 1; i > 0; i--) {
          const isEndOfSentence = /^\s*[^a-z 0-9]/i.test(parts[i]) || parts[i] === '';
          const addition = getNewAddition(item, isEndOfSentence);
          currentPos += parts[i].length;
          parts.splice(i, 0, addition.text);
          srcLinks.push({
            src: addition.src,
            pos: currentPos + (isEndOfSentence ? 0 : 1),
          })
          currentPos += addition.text.length;
        }
        node.textContent = parts.join('');
        const totalLength = node.textContent.length;
        const range = document.createRange();
        srcLinks.forEach(link => {
          range.setStart(node, totalLength - link.pos);
          range.insertNode(generateLink(link.src));
        })
      }
    });
  });
}

checkNames();
extendText();


const getNameRegex = name => new RegExp(`\\b${name}\\b`, 'g');

const getRandomAddition = item => item.additions[Math.floor(item.additions.length * Math.random())];

const getNewString = (item, isEndOfSentence) => `${item.name}, ${getRandomAddition(item).text}${isEndOfSentence ? '' : ','}`;

const MAX_OCCURRENCES = 5;

// via http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page#answer-10730777
function findTextNodes(el) {
  const textNodes = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  return textNodes;
}

function checkNames() {
  data.forEach(item => item.isPresent = document.body.innerHTML.includes(`${item.forename} ${item.name}`));
}

// extend text content with extension sentences
function extendText() {
  data.forEach(item => item.count = 0);
  findTextNodes(document.body).forEach(node => {
    node.textContent = node.textContent.replace(/Björn Höcke/g, 'Bernd Höcke');
    data.forEach(item => {
      if (item.isPresent && item.count < MAX_OCCURRENCES) {
        const parts = node.textContent.split(getNameRegex(item.name));
        for (let i = parts.length - 1; i > 0 && item.count < MAX_OCCURRENCES; i--, item.count++) {
          const isEndOfSentence = /^\s*[^a-z 0-9]/i.test(parts[i]) || parts[i] === '';
          parts.splice(i, 0, getNewString(item, isEndOfSentence));
        }
        node.textContent = parts.join('');
      }
    });
  });
}

checkNames();
extendText();

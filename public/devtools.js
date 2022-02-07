// eslint-disable-next-line no-undef
chrome.devtools.panels.create(
  'DevTools Nunes',
  '',
  'index.html',
  () => {
    console.log('DevTools panel loaded!');
  }
);
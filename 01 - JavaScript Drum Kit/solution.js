window.onload = () => {
  const keys = document.getElementsByClassName('key');
  [...keys].forEach(key =>
    key.addEventListener('transitionend', e => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
      e.target.classList.remove('sound');
    })
  );

  const lettersToKeys = [...keys].reduce((prev, next) => {
    return {
      ...prev,
      [next.children[0].textContent.toLowerCase()]: [
        next.children[1].textContent,
        next.dataset.key
      ]
    };
  }, {});

  document.addEventListener('keydown', e => {
    if (!lettersToKeys[e.key]) return;
    const audioFileName = lettersToKeys[e.key][0];
    const domElementKey = lettersToKeys[e.key][1];

    if (audioFileName) {
      const currentElement = document.querySelector(
        `[data-key='${domElementKey}']`
      );
      currentElement.classList.add('playing');
      currentElement.classList.add('sound');
      const audio = new Audio(`sounds/${audioFileName}.wav`);
      audio.currentTime = 0;
      audio.play();
    }
  });
};

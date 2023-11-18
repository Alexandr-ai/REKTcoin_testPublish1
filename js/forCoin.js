(function() {
  const elementsToMove = document.querySelectorAll('.coin__ctyptocurency, .coin__rektcat, .coin__instagram, .coin__usdc, .coin__trader, .coin__tiktok, .coin__youtube, .coin__btc, .coin__eth, .coin__analytic, .coin__website, .coin__telegram, .coin__bloger, .coin__mentor, .coin__usdt, .coin__nft, .coin__twitter, .coin__spaceman');
  const targetElement = document.querySelector('.coin__target-container');
  const coinOrbit = document.querySelector('.coin__orbit');

  let scriptExecuted = false;

  function animateElements() {
    elementsToMove.forEach((element) => {
      element.style.transition = 'transform 2s, opacity 1s';
      const targetRect = targetElement.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const deltaX = targetRect.left - elementRect.left + targetRect.width / 2 - elementRect.width / 2;
      const deltaY = targetRect.top - elementRect.top + targetRect.height / 2 - elementRect.height / 2;
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      element.style.opacity = '0';
    });

    coinOrbit.style.backgroundImage = 'url(../img/coin__orbit-after3.png)';
  }

  function restoreElements() {
    elementsToMove.forEach((element) => {
      element.style.transition = 'transform 2s, opacity 1s';
      element.style.transform = 'translate(0, 0)';
      element.style.opacity = '1';
    });

    coinOrbit.style.background = 'url(../img/coin__orbit-before2.png) center center / contain no-repeat';
  }

  window.addEventListener('scroll', () => {
    const coinOrbitRect = coinOrbit.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (coinOrbitRect.top <= 0) {
      if (!scriptExecuted) {
        animateElements();
        scriptExecuted = true;
      }
    } else {
      restoreElements();
      scriptExecuted = false;
    }
  });
})();
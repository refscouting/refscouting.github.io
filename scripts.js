'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // If the browser's language is portuguese, display the website accordingly
  if (/^pt/.test(navigator.language)) {
    document.documentElement.lang = 'pt-PT';
    document.querySelector('h1').lang = 'en';
    document.querySelectorAll('p:not(.pt)')
      .forEach(p => p.style.display = 'none');
    document.querySelectorAll('.pt')
      .forEach(p => p.style.display = 'block');
  }

  // Distribute space between the header's paragraph characters
  const h1Abbr = document.querySelector('abbr');
  let spanChars = '';
  for(let char of h1Abbr.textContent) {
    spanChars += `<span>${char}</span>`;
  }
  h1Abbr.innerHTML = spanChars;
  h1Abbr.style.display = 'flex';
  h1Abbr.style.justifyContent = 'space-between';

  // Set copyright current year
  // document.querySelector('#year').textContent = new Date().getFullYear();
});

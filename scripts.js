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
  const h1Div = document.querySelector('div');
  let spanChars = '';
  for(let char of h1Div.textContent) {
    spanChars += `<span>${char}</span>`;
  }
  h1Div.innerHTML = spanChars;
  h1Div.style.display = 'flex';
  h1Div.style.justifyContent = 'space-between';
  
  // Set copyright current year
  // document.querySelector('#year').textContent = new Date().getFullYear();
});
/*
const synthetic = 'Synthetic grass';
const natural = 'Natural grass';
const red = 'red';
const black = 'black';
const yellow = 'yellow';
const white = 'white';
const maroon = 'maroon';
const green = 'green';
const blue = 'blue';
const division1 = {
  tomar: {
    name: {
      full: 'União Futebol Comércio e Indústria de Tomar',
      short: 'União FCI Tomar'
    },
    stadium: {
      name: 'Estádio Municipal António Fortes (Totói)', // TBC
      location: 'https://goo.gl/maps/86a8w4BSJDzkUMf39',
      pitch: synthetic
    },
    links: {
      fb: 'https://www.facebook.com/UFCITomar'
    },
    colors: [red, black]
  },
  fazendas: {
    name: {
      full: 'Associação Desportiva Fazendense',
      short: 'AD Fazendense'
    },
    stadium: {
      name: 'Complexo Desportivo Prof. José Sousa Gomes', // TBC
      location: 'https://goo.gl/maps/sEhsocYEvnYCsbdu8',
      pitch: synthetic
    },
    links: {
      fb: 'https://www.facebook.com/adfazendense'
    },
    colors: [yellow, black]
  },
  samora: {
    name: {
      full: 'Grupo Desportivo Samora Correia',
      short: 'GD Samora Correia'
    },
    stadium: {
      name: 'Estádio da Murteira', // TBC
      location: 'https://goo.gl/maps/yqtNVBrBBV3TvMkcA',
      pitch: natural
    },
    links: {
      fb: 'https://www.facebook.com/GDSCoficial'
    },
    colors: [black, white]
  },
  macao: {
    name: {
      full: 'Associação Desportiva de Mação',
      short: 'AD Mação'
    },
    stadium: {
      name: '', // TBC
      location: 'https://goo.gl/maps/P17rRtgJY713ZMwC7', // TBC
      pitch: synthetic
    },
    links: {
      fb: 'https://www.facebook.com/associacaodesportivademacao'
    },
    colors: [yellow, maroon]
  },
  torresNovas: {
    name: {
      full: 'Clube Desportivo de Torres Novas',
      short: 'CD Torres Novas'
    },
    stadium: {
      name: 'Estádio Municipal Dr. Alves Vieira', // TBC
      location: 'https://goo.gl/maps/r3Nx2jdxrYddbtvR8', // TBC
      pitch: natural
    },
    links: {
      fb: 'https://www.facebook.com/AMARELOS'
    },
    colors: [yellow, green]
  },
  alcanena: {
    name: {
      full: 'Atlético Clube Alcanenense',
      short: 'AC Alcanenense'
    },
    stadium: {
      name: 'Estádio Municipal Dr. Alves Vieira', // TBC
      location: 'https://goo.gl/maps/r3Nx2jdxrYddbtvR8', // TBC
      pitch: natural
    },
    links: {
      fb: 'https://www.facebook.com/ACA.CARREGA'
    },
    colors: [yellow, black]
  },
  benavente: {
    name: {
      full: 'Grupo Desportivo Benavente',
      short: 'GD Benavente'
    },
    stadium: {
      name: 'Campo Portas do Sol', // TBC
      location: 'https://goo.gl/maps/X9RPAorFLP4WjGtAA', // TBC
      pitch: natural
    },
    links: {
      fb: 'https://www.facebook.com/gdbenavente'
    },
    colors: [blue, white]
  },
  abrantes: {
    name: {
      full: 'Sport Abrantes e Benfica',
      short: 'S Abrantes Benfica'
    },
    stadium: {
      name: 'Estádio Municipal de Abrantes', // TBC
      location: 'https://goo.gl/maps/jTPui8mkE6zvtrq29', // TBC
      pitch: natural
    },
    links: {
      fb: 'https://www.facebook.com/sportabrantesbenfica'
    },
    colors: [red, white]
  },
  amiais: {
    name: {
      full: 'Clube Desportivo Amiense',
      short: 'CD Amiense'
    },
    stadium: {
      name: 'Campo da Azenha', // TBC
      location: 'https://goo.gl/maps/cTp7BFZjEtr3GRjN6', // TBC
      pitch: synthetic
    },
    links: {
      fb: '' // TBC
    },
    colors: [red, white]
  },
  ourem: {
    name: {
      full: 'Clube Atlético Ouriense',
      short: 'CA Ouriense'
    },
    stadium: {
      name: 'Complexo Desportivo da Caridade', // TBC
      location: 'https://goo.gl/maps/hkCECK28tfm4tBPD9', // TBC
      pitch: synthetic
    },
    links: {
      fb: 'https://www.facebook.com/atleticouriense'
    },
    colors: [red, black]
  },
  salvaterra: {
    name: {
      full: 'Clube Desportivo Salvaterrense',
      short: 'CD Salvaterrense'
    },
    stadium: {
      name: 'Parque de Jogos Clube Desportivo Salvaterrense', // TBC
      location: 'https://goo.gl/maps/SnYgJoLx6AeQGD7T6', // TBC
      pitch: synthetic
    },
    links: {
      fb: 'https://www.facebook.com/clubedesportivo.salvaterrense'
    },
    colors: [yellow, blue]
  },
  cartaxo: {
    name: {
      full: 'Sport Lisboa e Cartaxo', // TBC
      short: 'SL Cartaxo'
    },
    stadium: {
      name: 'Estádio Municipal do Cartaxo', // TBC
      location: 'https://goo.gl/maps/VDEJKm9RQC77FtpFA', // TBC
      pitch: natural
    },
    links: {
      fb: 'https://www.facebook.com/slcartaxo' // TBC
    },
    colors: [red, white]
  }
}
*/

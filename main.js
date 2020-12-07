const images = [
  'Aatrox',
  'Ahri',
  'Akali',
  'Alistar',
  'Annie',
  'Ashe',
  'Bard',
  'Blitzcrank',
  'Caitlyn',
  'Camille',
  'Cassiopeia',
  'Corki',
  'Darius',
  'Draven',
  'Ekko',
  'Evelyn',
  'Ezreal',
  'Gangplank',
  'Garen',
  'Gnar',
  'Graves',
  'Heimerdinger',
  'Illaoi',
  'Irelia',
  'Jhin',
  'Jinx',
  'Kaisa',
  'Katarina',
  'Kayle',
  'Kayn',
  'Kennen',
  'Kled',
  'Leblanc',
  'Lee Sin',
  'Lissandra',
  'Lucian',
  'Lulu',
  'Lux',
  'Master Yi',
  'Miss Fortune',
  'Morgana',
  'Nasus',
  'Nautilus',
  'Neeko',
  'Nunu and Willump',
  'Poppy',
  'Pyke',
  'Rakan',
  'Rengar',
  'Riven',
  'Rumble',
  'Sejuani',
  'Senna',
  'Shen',
  'Sion',
  'Sona',
  'Swayne',
  'Tahm Kench',
  'Talon',
  'Taric',
  'Teemo',
  'Tristana',
  'Twisted Fate',
  'Twitch',
  'Urgot',
  'Vayne',
  'Veigar',
  'Vi',
  'Viktor',
  'Warwick',
  'Wukong',
  'Xayah',
  'Xin Zhao',
  'Yasou',
  'Yuumi',
  'Ziggs',
  'Zilean',
  'Zoe',
];

let gallery = document.querySelector('.gallery');

for (let i = 0; i < images.length; i++) {
  let source = `images/${images[i]}.jpg`;
  let image = new Image();
  image.src = source;
  image.title = images[i];

  let imageContainer = document.createElement('div');
  gallery.appendChild(imageContainer);
  imageContainer.appendChild(image);

  let par = document.createElement('p');
  imageContainer.appendChild(par);
  par.textContent = images[i];
}

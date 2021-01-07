import { Hero, Villain } from './modules/models';

const data = {
  heroes: [
    {
      id: '10',
      name: 'Aslaug',
      description: 'warrior queen',
    },
    {
      id: '11',
      name: 'Bjorn Ironside',
      description: 'king of 9th century Sweden',
    },
    {
      id: '12',
      name: 'Ivar the Boneless',
      description: 'commander of the Great Heathen Army',
    },
    {
      id: '13',
      name: 'Lagertha the Shieldmaiden',
      description: 'aka Hlaðgerðr',
    },
    {
      id: '14',
      name: 'Ragnar Lothbrok',
      description: 'aka Ragnar Sigurdsson',
    },
    {
      id: '15',
      name: 'Thora Town-hart',
      description: 'daughter of Earl Herrauðr of Götaland',
    },
  ],
  villains: [
    {
      id: '40',
      name: 'Madelyn',
      description: 'the cat whisperer',
    },
    {
      id: '41',
      name: 'Haley',
      description: 'pen wielder',
    },
    {
      id: '42',
      name: 'Ella',
      description: 'fashionista',
    },
    {
      id: '43',
      name: 'Landon',
      description: 'Mandalorian mauler',
    },
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addHero = async (hero: Hero) => {
  const newId = `${hero.name}-${getRandomInt()}`;
  const newHero = { ...hero, ...{ id: `${newId}` } };
  data.heroes.push(newHero);
  return hero;
};

const updateHero = async (hero: Hero) => {
  const index = data.heroes.findIndex((v) => v.id === hero.id);
  data.heroes.splice(index, 1, hero);
  return hero;
};

const deleteHero = async (id: string) => {
  data.heroes = data.heroes.filter((v) => v.id !== id);
  return true;
};

const getHeroes = async () => {
  return data.heroes;
};

const addVillain = async (villain: Villain) => {
  const newId = `${villain.name}-${getRandomInt()}`;
  const newVillain = { ...villain, ...{ id: `${newId}` } };
  data.villains.push(newVillain);
  return villain;
};

const updateVillain = async (villain: Villain) => {
  const index = data.villains.findIndex((v) => v.id === villain.id);
  data.villains.splice(index, 1, villain);
  return villain;
};

const deleteVillain = async (id: string) => {
  data.villains = data.villains.filter((v) => v.id !== id);
  return true;
};

const getVillains = async () => {
  return data.villains;
};

export {
  addVillain,
  updateVillain,
  deleteVillain,
  getVillains,
  addHero,
  updateHero,
  deleteHero,
  getHeroes,
};

import type { IconOption } from '@/icons/Icons';

interface AboutItem {
  iconName: IconOption;
  title: string;
  content: string;
  imgHref: string;
  imgAlt: string;
}

export const aboutList: AboutItem[] = [
  {
    iconName: 'Book',
    title: 'Story',
    content:
      'Born in Curitiba-PR in the year of 1993, Douglas grew up in a small town known as Guarapuava. Descendant of Japanese immigrants with a typical asian family upbringing, he maintained his position as a top class student over the years. At the age of fifteen, Douglas was sent to Curitiba in order to join a more competitive high school. At seventeen he got accepted at Federal University of Parana, where his professional road started.',
    imgHref: '/yuji.jpg',
    imgAlt: 'My own photo',
  },
  {
    iconName: 'Map',
    title: 'Location',
    content:
      'Currently residing in Curitiba (Parana, Brazil) and with availability to travel for work.',
    imgHref: '/curitiba.jpg',
    imgAlt: 'Photo by Cassiano Psomas on Unsplash',
  },
  {
    iconName: 'Gamepad',
    title: 'Hobbies',
    content:
      'Easily entertained when coding a challenging project (preferably front-end). Unexplainable passion for strategy games since childhood. Sci-fi and suspense are his favorites genders of movies and series. Unable to leave a pool before becoming a dry pickle.',
    imgHref: '/hobbies.jpg',
    imgAlt: '',
  },
  {
    iconName: 'Lightbulb',
    title: 'Curiosities',
    content:
      'At the age of five his father taught him how to play chess. When he was seven, the school allowed him and his elder brother to become its representatives in the city scholar chess tournament (Douglas was two years short the allowed age group at the time). They secured first place for years. At ten years old he was already playing regional tournaments in the adult category, consistently achieving top 3.',
    imgHref: '/chess.jpg',
    imgAlt: 'Photo by Rahul Pabolu on Unsplash',
  },
  {
    iconName: 'MartiniGlass',
    title: 'Bar',
    content:
      'Former bar chef. His creativity, social skills and passion for mixology allowed him to create signature cocktails while guaranteeing a great customer experience. With a deep understanding of different flavors, he could skillfully combine ingredients to create harmonious and tantalizing taste experiences.',
    imgHref: '/cocktail.jpg',
    imgAlt: 'Photo by Ash Edmonds on Unsplash',
  },
];

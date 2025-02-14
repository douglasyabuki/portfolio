// Interface
import { IAboutInfo } from "../../../../../interfaces/IAboutInfo"

// Exports info to fill AboutDouglas.tsx component
export const aboutInfo: IAboutInfo = {
  title: 'Who is Douglas?',
  content: 'A self-taught Fullstack Engineer who loves challenging projects. Check the buttons below to learn more.',
  infoList: [
    {
      sectionId: 0,
      sectionIcon: 'fa fa-book',
      sectionTitle: 'Story',
      sectionContent: 'Born in Curitiba-PR in the year of 1993, Douglas grew up in a small town known as Guarapuava. Descendant of Japanese immigrants with a typical asian family upbringing, he maintained his position as a top class student over the years. At the age of fifteen, Douglas was sent to Curitiba in order to join a more competitive high school. At seventeen he got accepted at Federal University of Parana, where his professional road started.',
      sectionImage: '/yuji.jpg',
      sectionImageAlt: 'My own photo'
    },
    {
      sectionId: 1,
      sectionIcon: 'fa fa-map ',
      sectionTitle: 'Location',
      sectionContent: 'Currently residing in Curitiba (Parana, Brazil) and with availability to travel for work.',
      sectionImage: '/curitiba.jpg',
      sectionImageAlt: 'Photo by Cassiano Psomas on Unsplash'
    },
    {
      sectionId: 2,
      sectionIcon: 'fa fa-gamepad',
      sectionTitle: 'Hobbies',
      sectionContent: 'Easily entertained when coding a challenging project (preferably front-end). Unexplainable passion for strategy games since childhood. Sci-fi and suspense are his favorites genders of movies and series. Unable to leave a pool before becoming a dry pickle.',
      sectionImage: '/hobbies.jpg',
      sectionImageAlt: ''
    },
    {
      sectionId: 3,
      sectionIcon: 'fa fa-lightbulb-o',
      sectionTitle: 'Curiosities',
      sectionContent: 'At the age of five his father taught him how to play chess. When he was seven, the school allowed him and his elder brother to become its representatives in the city scholar chess tournament (Douglas was two years short the allowed age group at the time). They secured first place for years. At ten years old he was already playing regional tournaments in the adult category, consistently achieving top 3.',
      sectionImage: '/chess.jpg',
      sectionImageAlt: 'Photo by Rahul Pabolu on Unsplash'
    },
    {
      sectionId: 4,
      sectionIcon: 'fa fa-glass',
      sectionTitle: 'Bar',
      sectionContent: 'Former bar chef. His creativity, social skills and passion for mixology allowed him to create signature cocktails while guaranteeing a great customer experience. With a deep understanding of different flavors, he could skillfully combine ingredients to create harmonious and tantalizing taste experiences.',
      sectionImage: '/cocktail.jpg',
      sectionImageAlt: 'Photo by Ash Edmonds on Unsplash'
    },
  ]
}

import { ColoringPage } from '../types';

// Real Disney/Pixar coloring pages — images in public/images/
// (downloaded as actual SVG/PNG line-art from the web)
export const COLORING_PAGES: ColoringPage[] = [
  // Frozen
  { id: 'elsa', name: 'Elsa', category: 'Frozen', svgData: './images/elsa.png' },
  { id: 'anna', name: 'Anna', category: 'Frozen', svgData: './images/anna.png' },
  { id: 'olaf', name: 'Olaf', category: 'Frozen', svgData: './images/olaf.png' },

  // Classic Disney
  { id: 'mickey', name: 'Mickey Mouse', category: 'Classic', svgData: '', imageUrl: './images/mickey-mouse.svg' },
  { id: 'minnie', name: 'Minnie Mouse', category: 'Classic', svgData: '', imageUrl: './images/minnie-mouse.svg' },
  { id: 'donald', name: 'Donald Duck', category: 'Classic', svgData: './images/donald.png' },

  // Princesses
  { id: 'cinderella', name: 'Cinderella', category: 'Princesses', svgData: './images/cinderella.png' },
  { id: 'belle', name: 'Belle', category: 'Princesses', svgData: './images/belle.png' },
  { id: 'ariel', name: 'Ariel', category: 'Princesses', svgData: './images/ariel.png' },
  { id: 'rapunzel', name: 'Rapunzel', category: 'Princesses', svgData: './images/rapunzel.png' },
  { id: 'moana', name: 'Moana', category: 'Princesses', svgData: './images/moana.png' },
  { id: 'aurora', name: 'Sleeping Beauty', category: 'Princesses', svgData: './images/aurora.png' },

  // Lion King
  { id: 'simba', name: 'Simba', category: 'Lion King', svgData: './images/simba.png' },
  { id: 'nala', name: 'Nala', category: 'Lion King', svgData: './images/nala.png' },
  { id: 'timon_pumbaa', name: 'Timon & Pumbaa', category: 'Lion King', svgData: './images/timon_pumbaa.png' },

  // Toy Story
  { id: 'woody', name: 'Woody', category: 'Toy Story', svgData: './images/woody.png' },
  { id: 'buzz', name: 'Buzz Lightyear', category: 'Toy Story', svgData: './images/buzz.png' },

  // Finding Nemo
  { id: 'nemo', name: 'Nemo', category: 'Nemo', svgData: './images/nemo.png' },
  { id: 'dory', name: 'Dory', category: 'Nemo', svgData: './images/dory.png' },

  // Other Pixar/Disney
  { id: 'stitch', name: 'Stitch', category: 'Disney', svgData: './images/stitch.png' },
  { id: 'lightning_mcqueen', name: 'Lightning McQueen', category: 'Cars', svgData: './images/lightning_mcqueen.png' },
  { id: 'dumbo', name: 'Dumbo', category: 'Classic', svgData: './images/dumbo.png' },
];

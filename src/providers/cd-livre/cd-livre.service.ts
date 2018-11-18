import {Cd} from "../../models/Cd";
import {Livre} from "../../models/Livre";

export class CdLivreProvider {

  cdList: Cd[] = [
    {
      title: 'Premium Gold Collection',
      artist: 'Pat Benatar',
      isLending: false
    },
    {
      title: 'Appetite For Destruction',
      artist: 'Guns N\' Roses',
      isLending: true
    },
    {
      title: 'The Best of Nickelback Volume 1',
      artist: 'Nickelback',
      isLending: true
    }
  ];

  livreList: Livre[] = [
    {
      name: 'Indélibiles',
      author: 'Luz',
      isLending: false
    },
    {
      name: 'Le Signal',
      author: 'Maxime Chattam',
      isLending: true
    },
    {
      name: 'galettes',
      author: 'Christophe Felder',
      isLending: false
    }
  ];

  toogleLending(object: Livre | Cd): void {
        object.isLending = !object.isLending;
  }

}

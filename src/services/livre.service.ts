import { Livre } from "../models/livre";

export class LivreService {
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
  ]
}

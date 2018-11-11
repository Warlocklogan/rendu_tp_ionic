import { Cd } from './../models/Cd';
export class CdService {
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
  ]
}

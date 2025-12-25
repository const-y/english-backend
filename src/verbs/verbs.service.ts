import { Injectable } from '@nestjs/common';
import { irregularVerbs } from '../dictionary/verbs';

@Injectable()
export class VerbsService {
  getAll() {
    return irregularVerbs.map(([base, past, pastParticiple, translation]) => ({
      id: base,
      base,
      past,
      pastParticiple,
      translation,
    }));
  }
}

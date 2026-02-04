import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { VerbResponseDto } from './dto/verb-response-dto/verb-response-dto';

@Injectable()
export class VerbsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<VerbResponseDto[]> {
    const verbs = await this.prisma.verb.findMany();

    return verbs.map((verb) => ({
      id: String(verb.id),
      base: verb.base,
      past: verb.past,
      pastParticiple: verb.participle,
      translation: verb.translation,
    }));
  }
}

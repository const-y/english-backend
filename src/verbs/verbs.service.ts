import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class VerbsService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.verb.findMany();
  }
}

import { Controller, Get } from '@nestjs/common';
import { VerbsService } from './verbs.service';

@Controller('verbs')
export class VerbsController {
  constructor(private readonly verbsService: VerbsService) {}

  @Get()
  getAll() {
    return this.verbsService.getAll();
  }
}

import { Module } from '@nestjs/common';
import { VerbsModule } from './verbs/verbs.module';

@Module({
  imports: [VerbsModule],
})
export class AppModule {}

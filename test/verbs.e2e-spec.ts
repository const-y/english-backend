import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { VerbResponseDto } from 'src/verbs/dto/verb-response-dto/verb-response-dto';

describe('VerbsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/verbs (GET) → должен вернуть массив глаголов со структурой', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/verbs')
      .expect(200);

    const verbs = response.body as VerbResponseDto[];

    expect(Array.isArray(verbs)).toBe(true);
    expect(verbs.length).toBeGreaterThan(0);
  });
});

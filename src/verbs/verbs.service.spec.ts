import { Test, TestingModule } from '@nestjs/testing';
import { VerbsService } from './verbs.service';

describe('VerbsService', () => {
  let service: VerbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerbsService],
    }).compile();

    service = module.get<VerbsService>(VerbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return verbs with correct ID', () => {
    const result = service.getAll();

    expect(result[0]).toEqual({
      base: 'meet',
      id: 'meet',
      past: 'met',
      pastParticiple: 'met',
      translation: 'встречать',
    });
  });

  it('should return 90+ verbs', () => {
    const result = service.getAll();
    expect(result.length).toBeGreaterThan(90);
  });
});

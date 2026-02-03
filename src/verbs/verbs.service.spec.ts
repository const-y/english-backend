import { Test, TestingModule } from '@nestjs/testing';
import { VerbsService } from './verbs.service';
import { PrismaService } from '../prisma.service';

describe('VerbsService', () => {
  let service: VerbsService;

  const prismaMock = {
    verb: {
      findMany: jest.fn().mockResolvedValue(new Array(100).fill({})),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VerbsService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<VerbsService>(VerbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 90+ verbs', async () => {
    const result = await service.getAll();
    expect(result.length).toBeGreaterThan(90);
  });
});

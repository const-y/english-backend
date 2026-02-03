import { Test, TestingModule } from '@nestjs/testing';
import { VerbsController } from './verbs.controller';
import { VerbsService } from './verbs.service';

describe('VerbsController', () => {
  let controller: VerbsController;

  const verbsServiceMock = {
    getAll: jest.fn().mockResolvedValue([{ id: 1, word: 'go' }]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerbsController],
      providers: [
        {
          provide: VerbsService,
          useValue: verbsServiceMock, // ← ключевое
        },
      ],
    }).compile();

    controller = module.get<VerbsController>(VerbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

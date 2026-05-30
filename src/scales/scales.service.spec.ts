import { Test, TestingModule } from '@nestjs/testing';
import { ScalesService } from './scales.service';

describe('ScalesService', () => {
  let service: ScalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScalesService],
    }).compile();

    service = module.get<ScalesService>(ScalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

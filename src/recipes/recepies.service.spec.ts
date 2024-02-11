import { Test, TestingModule } from '@nestjs/testing';
import { RecepiesService } from './recepies.service';

describe('RecepiesService', () => {
  let service: RecepiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecepiesService],
    }).compile();

    service = module.get<RecepiesService>(RecepiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RecepiesController } from './recepies.controller';

describe('RecepiesController', () => {
  let controller: RecepiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecepiesController],
    }).compile();

    controller = module.get<RecepiesController>(RecepiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

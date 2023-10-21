import { Test, TestingModule } from '@nestjs/testing';
import { TeaFlavorsResolver } from './tea-flavors.resolver';

describe('TeaFlavorsResolver', () => {
  let resolver: TeaFlavorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeaFlavorsResolver],
    }).compile();

    resolver = module.get<TeaFlavorsResolver>(TeaFlavorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

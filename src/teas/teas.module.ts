import { Module } from '@nestjs/common';
import { TeasService } from './teas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tea } from './entities/tea.entity';
import { TeaFlavor } from './entities/flavor.entity';
import { TeasResolver } from './teas.resolver';
import { TeaFlavorsResolver } from './tea-flavors.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Tea, TeaFlavor])],
  providers: [TeasResolver, TeasService, TeaFlavorsResolver],
})
export class TeasModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsController } from './modules/items/items.controller';
import { ItemsModule } from './modules/items/items.module';
import { ItemsService } from './modules/items/items.service';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}

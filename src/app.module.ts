import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './modules/task.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Task } from './entities/task.entitiy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Ensures ConfigService is available globally
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService], // Ensures ConfigService is injected
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        entities: [Task],
        //synchronize: true, // Optional: Syncs the database schema with entities
      }),
    }),
    TaskModule,
  ],
})
export class AppModule {}

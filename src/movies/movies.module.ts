import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Movie from './entities/movie.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export default class MoviesModule {}
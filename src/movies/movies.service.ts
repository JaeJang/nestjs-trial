import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie-dto';
import Movie from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async getAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async getOne(id: number): Promise<Movie> {
    const movie =  await this.movieRepository.findOne({ id });

    if (!movie) {
        throw new NotFoundException("Movid not found");
    }
    return 
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.movieRepository.delete({ id });
  }

  async update(id: number, year: number) {
    await this.movieRepository.save({ id, year });
  }

  async create(movieData: CreateMovieDto) {
      await this.movieRepository.save({
          title: movieData.title,
          year: movieData.year,
          genres: movieData.genres
      });
  }
}

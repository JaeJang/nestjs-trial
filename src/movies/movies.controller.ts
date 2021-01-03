import { Body, HttpCode, Query } from '@nestjs/common';
import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie-dto';
import { UpdateMovieDto } from './dto/update-movie-dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('search')
  search(@Query('year') searchingYear) {
    return `We are searching years ${searchingYear}`;
  }
  @Get()
  getAll() {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.movieService.getOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() movieData: CreateMovieDto) {
    this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.movieService.delete(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    this.movieService.update(id, updateData);
  }
}

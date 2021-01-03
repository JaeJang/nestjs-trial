import Movie from 'src/movies/entities/movie.entity';

export default () => {
  const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST = 'localhost',
    DB_PORT = 5432,
  } = process.env;
  
  const config = {
    database: {
      type: 'postgres',
      host: DB_HOST,
      port: +DB_PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      synchronize: true,
      entities: [Movie],
    },
  };
  return config;
};

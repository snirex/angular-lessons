import { MovieType } from "./movietype.enum";

//lesson 7b
export interface IMovie {
  name: string;
  mainChar: string;
  rating: number;
  releaseDate: Date;
  type: MovieType;
}

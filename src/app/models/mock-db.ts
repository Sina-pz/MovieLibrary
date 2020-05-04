import { MovieGroup } from './movie-group';
import { MovieItem } from './movie-item';

export class MockDB {

  constructor() {}

  public getGroupList(): MovieGroup[] {

    const groupList: MovieGroup[] = [];


    const groupItem1: MovieGroup = new MovieGroup();
    groupItem1.id = 1;
    groupItem1.name = 'Animation';
    groupList.push(groupItem1);

    const groupItem2: MovieGroup = new MovieGroup();
    groupItem2.id = 2;
    groupItem2.name = 'action';
    groupList.push(groupItem2);

    const groupItem3: MovieGroup = new MovieGroup();
    groupItem3.id = 3;
    groupItem3.name = 'Comedy';
    groupList.push(groupItem3);

    const groupItem4: MovieGroup = new MovieGroup();
    groupItem4.id = 4;
    groupItem4.name = 'Horror';
    groupList.push(groupItem4);

    return groupList;
  }

  public getRandomGroupList(): MovieGroup[] {
    const randomGroupList: MovieGroup[] = [];
    const randomGroupItem1: MovieGroup = new MovieGroup();
    randomGroupItem1.id = 3;
    randomGroupItem1.name = 'Comedy';

    randomGroupList.push(randomGroupItem1);

    const randomGroupItem2: MovieGroup = new MovieGroup();
    randomGroupItem2.id = 4;
    randomGroupItem2.name = 'Horror';

    randomGroupList.push(randomGroupItem2);

    return randomGroupList;
  }


  public getMovieItemList(): MovieItem[] {

      // initialize movie Items
    const movieItemList: MovieItem[] = [];

    const movieItem1: MovieItem = new MovieItem();
    movieItem1.id = 1;
    movieItem1.name = 'Finding Nemo';
    movieItem1.groupId = 1;
    movieItem1.duration = 100;

    movieItemList.push(movieItem1);

    return movieItemList;
  }

  public getRandomMovieItemList(): MovieItem[] {

    // initialize movie Items
  const randomMovieItemList: MovieItem[] = [];

  const randomMovieItem1: MovieItem = new MovieItem();
  randomMovieItem1.id = 2;
  randomMovieItem1.name = 'Nemo';
  randomMovieItem1.groupId = 1;
  randomMovieItem1.duration = 100;

  randomMovieItemList.push(randomMovieItem1);

  const randomMovieItem2: MovieItem = new MovieItem();
  randomMovieItem2.id = 3;
  randomMovieItem2.name = 'Chaplin';
  randomMovieItem2.groupId = 3;
  randomMovieItem2.duration = 190;

  randomMovieItemList.push(randomMovieItem2);

  const randomMovieItem3: MovieItem = new MovieItem();
  randomMovieItem3.id = 4;
  randomMovieItem3.name = 'Fight';
  randomMovieItem3.groupId = 2;
  randomMovieItem3.duration = 190;

  randomMovieItemList.push(randomMovieItem3);

  const randomMovieItem4: MovieItem = new MovieItem();
  randomMovieItem4.id = 5;
  randomMovieItem4.name = 'Death';
  randomMovieItem4.groupId = 4;
  randomMovieItem4.duration = 190;

  randomMovieItemList.push(randomMovieItem4);

  return randomMovieItemList;
}

}

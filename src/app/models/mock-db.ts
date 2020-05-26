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
  randomMovieItem2.name = 'SnowWife';
  randomMovieItem2.groupId = 1;
  randomMovieItem2.duration = 150;

  randomMovieItemList.push(randomMovieItem2);

  const randomMovieItem3: MovieItem = new MovieItem();
  randomMovieItem3.id = 4;
  randomMovieItem3.name = 'Chaplin';
  randomMovieItem3.groupId = 3;
  randomMovieItem3.duration = 19;
  randomMovieItemList.push(randomMovieItem3);
  const randomMovieItem4: MovieItem = new MovieItem();
  randomMovieItem4.id = 5;
  randomMovieItem4.name = 'Charlze';
  randomMovieItem4.groupId = 3;
  randomMovieItem4.duration = 10;

  randomMovieItemList.push(randomMovieItem4);

  const randomMovieItem5: MovieItem = new MovieItem();
  randomMovieItem5.id = 6;
  randomMovieItem5.name = 'Fight';
  randomMovieItem5.groupId = 2;
  randomMovieItem5.duration = 90;
  randomMovieItemList.push(randomMovieItem5);
  const randomMovieItem6: MovieItem = new MovieItem();
  randomMovieItem6.id = 7;
  randomMovieItem6.name = 'Night Fighter';
  randomMovieItem6.groupId = 2;
  randomMovieItem6.duration = 19;

  randomMovieItemList.push(randomMovieItem6);

  const randomMovieItem7: MovieItem = new MovieItem();
  randomMovieItem7.id = 8;
  randomMovieItem7.name = 'Death';
  randomMovieItem7.groupId = 4;
  randomMovieItem7.duration = 190;
  randomMovieItemList.push(randomMovieItem7);
  const randomMovieItem8: MovieItem = new MovieItem();
  randomMovieItem8.id = 9;
  randomMovieItem8.name = 'Ghost';
  randomMovieItem8.groupId = 4;
  randomMovieItem8.duration = 90;
  randomMovieItemList.push(randomMovieItem8);

  return randomMovieItemList;
}

}

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
    groupItem2.name = 'Action';
    groupList.push(groupItem2);

    const groupItem3: MovieGroup = new MovieGroup();
    groupItem3.id = 3;
    groupItem3.name = 'Horror';
    groupList.push(groupItem3);

    const groupItem4: MovieGroup = new MovieGroup();
    groupItem4.id = 4;
    groupItem4.name = 'Comedy';
    groupList.push(groupItem4);

    return groupList;
  }


  public getMovieItemList(): MovieItem[] {

      // initialize movie Items
    const movieItemList: MovieItem[] = [];

    const movieItem1: MovieItem = new MovieItem();
    movieItem1.id = 1;
    movieItem1.name = 'Onward';
    movieItem1.groupId = 1;
    movieItem1.duration = 103;
    movieItem1.source = 'https://image.chilimovie.com/public/300px/20200313/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg';
    movieItem1.detail = 'Onward is produced by Walt Disney Pictures and Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. The film is directed by Dan Scanlon, produced by Kori Rae and written by Scanlon, Jason Headley, and Keith Bunin in 2020. In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.';
    movieItemList.push(movieItem1);

    const movieItem2: MovieItem = new MovieItem();
    movieItem2.id = 2;
    movieItem2.name = 'Toy Story 4';
    movieItem2.groupId = 1;
    movieItem2.duration = 108;
    movieItem2.source = 'https://image.chilimovie.com/public/300px/20190625/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg';
    movieItem2.detail = 'Toy Story 4 is produced by Pixar Animation Studios for Walt Disney Pictures in 2019. Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.';
    movieItemList.push(movieItem2);

    const movieItem3: MovieItem = new MovieItem();
    movieItem3.id = 3;
    movieItem3.name = 'Sonic the Hedgehog';
    movieItem3.groupId = 1;
    movieItem3.duration = 120;
    movieItem3.source = 'https://image.chilimovie.com/public/300px/20200204/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg';
    movieItem3.detail = 'Sonic the Hedgehog is directed by Jeff Fowler in 2020.Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination. ';
    movieItemList.push(movieItem3);
        
    const movieItem4: MovieItem = new MovieItem();
    movieItem4.id = 4;
    movieItem4.name = 'Lady and the Tramp';
    movieItem4.groupId = 1;
    movieItem4.duration = 110;
    movieItem4.source = 'https://image.chilimovie.com/public/300px/20200508/8wBEye516IKul9sW7JKGcFXVGfV.jpg';
    movieItem4.detail = 'Descendants 2 is an American musical fantasy[2] television film. It premiered as a Disney Channel Original Movie on July 21, 2017 on Disney Channel, and was simulcast on Disney-owned networks ABC, Disney XD, Freeform, Lifetime, and Lifetime Movies. When the pressure to be royal becomes too much for Mal, she returns to the Isle of the Lost where her archenemy Uma, Ursula\'s daughter, has taken her spot as self-proclaimed queen. ';
    movieItemList.push(movieItem4);
        
    const movieItem5: MovieItem = new MovieItem();
    movieItem5.id = 5;
    movieItem5.name = 'Dumbo';
    movieItem5.groupId = 1;
    movieItem5.duration = 101;
    movieItem5.source = 'https://m.media-amazon.com/images/M/MV5BNjMxMDE0MDI1Ml5BMl5BanBnXkFtZTgwMzExNTU3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg';
    movieItem5.detail = 'Dumbo is a 2019 American fantasy adventure film directed by Tim Burton, with a screenplay by Ehren Kruger. A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer. ';
    movieItemList.push(movieItem5);
        
    const movieItem6: MovieItem = new MovieItem();
    movieItem6.id = 6;
    movieItem6.name = 'The Jungle Book';
    movieItem6.groupId = 1;
    movieItem6.duration = 117;
    movieItem6.source = 'https://image.chilimovie.com/public/300px/20200507/tOEOlmLP71IojeJ91dyJ9Nsb8O8.jpg';
    movieItem6.detail = 'The Jungle Book is 2016 American fantasy adventure film directed and produced by Jon Favreau, from a screenplay written by Justin Marks. A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo. ';
    movieItemList.push(movieItem6);
        
    const movieItem7: MovieItem = new MovieItem();
    movieItem7.id = 7;
    movieItem7.name = 'Bad Boys for Life';
    movieItem7.groupId = 2;
    movieItem7.duration = 130;
    movieItem7.source = 'https://image.chilimovie.com/public/300px/20191224/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg';
    movieItem7.detail = 'Bad Boys for Life is a 2020 American action comedy film directed by Adil & Bilall and written by Chris Bremner, Peter Craig and Joe Carnahan. Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel. ';
    movieItemList.push(movieItem7);
        
    const movieItem8: MovieItem = new MovieItem();
    movieItem8.id = 8;
    movieItem8.name = 'Hot Fuzz';
    movieItem8.groupId = 2;
    movieItem8.duration = 110;
    movieItem8.source = 'https://image.chilimovie.com/public/300px/20200519/zPib4ukTSdXvHP9pxGkFCe34f3y.jpg';
    movieItem8.detail = 'Hot Fuzz is a 2007 action comedy film directed by Edgar Wright who co-wrote the script with Simon Pegg. As a former London constable, Nicholas Angel finds it difficult to adapt to his new assignment in the sleepy British village of Sandford. Not only does he miss the excitement of the big city, but he also has a well-meaning oaf for a partner. However, when a series of grisly accidents rocks Sandford, Angel smells something rotten in the idyllic village.';
    movieItemList.push(movieItem8);
        
    const movieItem9: MovieItem = new MovieItem();
    movieItem9.id = 9;
    movieItem9.name = 'Blood Work';
    movieItem9.groupId = 2;
    movieItem9.duration = 115;
    movieItem9.source = 'https://image.chilimovie.com/public/300px/20200519/rtpa9neoVD6IToCcAyPIAaFjb6y.jpg';
    movieItem9.detail = 'Blood Work is a 2002 American mystery thriller film produced, directed by, and starring Clint Eastwood. Still recovering from a heart transplant, a retired FBI profiler returns to service when his own blood analysis offers clues to the identity of a serial killer.  ';
    movieItemList.push(movieItem9);
        
    const movieItem10: MovieItem = new MovieItem();
    movieItem10.id = 10;
    movieItem10.name = 'The Crimson Rivers';
    movieItem10.groupId = 2;
    movieItem10.duration = 101;
    movieItem10.source = 'https://image.chilimovie.com/public/300px/20200520/uo6Y795p4eazyLlTTevn7vXWLtV.jpg';
    movieItem10.detail = 'The Crimson Rivers (French: Les Rivières Pourpres) is a 2000 French psychological thriller film starring Jean Reno and Vincent Cassel. Two French policemen, one investigating a grisly murder at a remote mountain college, the other working on the desecration of a young girl\'s grave by skinheads, are brought together by the clues from their respective cases. Soon after they start working together, more murders are committed, and the pair begin to discover just what dark secrets are behind the killings. ';
    movieItemList.push(movieItem10);
        
    const movieItem11: MovieItem = new MovieItem();
    movieItem11.id = 11;
    movieItem11.name = 'Jack Reacher';
    movieItem11.groupId = 2;
    movieItem11.duration = 100;
    movieItem11.source = 'https://image.chilimovie.com/public/300px/20200507/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg';
    // tslint:disable-next-line: max-line-length
    movieItem11.detail = 'Jack Reacher is a 2012 American action thriller film written and directed by Christopher McQuarrie, based on Lee Child\'s 2005 novel One Shot.When a gunman takes five lives with six shots, all evidence points to the suspect in custody. On interrogation, the suspect offers up a single note, So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep.' ;
    movieItemList.push(movieItem11);
        
    const movieItem12: MovieItem = new MovieItem();
    movieItem12.id = 12;
    movieItem12.name = '22 Bullets ';
    movieItem12.groupId = 2;
    movieItem12.duration = 100;
    movieItem12.source = 'https://image.chilimovie.com/public/300px/20200507/oMnsNcEXLabig6M0Yxn2gfcfyVA.jpg';
    movieItem12.detail = '22 Bullets is a French gangster-action film directed by Richard Berry in 2010. Charly Matteï has turned his back on his life as an outlaw. For the last three years, he\'s led a peaceful life devoting himself to his wife and two children.';
    movieItemList.push(movieItem12);
        
    const movieItem13: MovieItem = new MovieItem();
    movieItem13.id = 13;
    movieItem13.name = 'The Crimson Rivers';
    movieItem13.groupId = 2;
    movieItem13.duration = 105;
    movieItem13.source = 'https://image.chilimovie.com/public/300px/20200520/uo6Y795p4eazyLlTTevn7vXWLtV.jpg';
    movieItem13.detail = 'The Crimson Rivers is French psychological thriller film starring Jean Reno and Vincent Cassel. The film, which was directed by Mathieu Kassovitz in  2000.Two French policemen, one investigating a grisly murder at a remote mountain college, the other working on the desecration of a young girl\'s grave by skinheads, are brought together by the clues from their respective cases. Soon after they start working together, more murders are committed, and the pair begin to discover just what dark secrets are behind the killings. ';
    movieItemList.push(movieItem13);
        
    const movieItem14: MovieItem = new MovieItem();
    movieItem14.id = 14;
    movieItem14.name = 'The Boy';
    movieItem14.groupId = 3;
    movieItem14.duration = 100;
    movieItem14.source = 'https://image.chilimovie.com/public/300px/20200507/8zObFCn79YqWP4ssCliPpEjAgPF.jpg';
    movieItem14.detail = 'The Boy is a 2016 horror film directed by William Brent Bell and written by Stacey Menear. The film stars Lauren Cohan and Rupert Evans in 2016. An American nanny is shocked that her new English family\'s boy is actually a life-sized doll. After she violates a list of strict rules, disturbing events make her believe that the doll is really alive. ';
    movieItemList.push(movieItem14);
        
    const movieItem15: MovieItem = new MovieItem();
    movieItem15.id = 15;
    movieItem15.name = 'Howl';
    movieItem15.groupId = 3;
    movieItem15.duration = 100;
    movieItem15.source = 'https://image.chilimovie.com/public/300px/20200508/ltryidWKfKum0Dj7oChxvPVXozC.jpg';
    movieItem15.detail = 'Howl is a direct-to-video British indie horror monster movie, directed by Paul Hyett and starring Ed Speleers in 2015. When passengers on a train are attacked by a creature, they must band together in order to survive until morning. ';
    movieItemList.push(movieItem15);
        
    const movieItem16: MovieItem = new MovieItem();
    movieItem16.id = 16;
    movieItem16.name = 'Horsemen';
    movieItem16.groupId = 3;
    movieItem16.duration = 100;
    movieItem16.source = 'https://image.chilimovie.com/public/300px/20200519/sIVBGmRXsPuI1TES9sKUImMOw2Q.jpg';
    movieItem16.detail = ' Horsemen is American psychological thriller film directed by Jonas Åkerlund, written by David Callaham, produced by Michael Bay, and starring Dennis in 2009. A recently widowed detective still grieving over his wife\'s death discovers a shocking connection between himself and the suspects in a serial killing spree linked to the Four Horsemen of the Apocalypse.';
    movieItemList.push(movieItem16);
        
    const movieItem17: MovieItem = new MovieItem();
    movieItem17.id = 17;
    movieItem17.name = 'WΔZ';
    movieItem17.groupId = 3;
    movieItem17.duration = 100;
    movieItem17.source = 'https://image.chilimovie.com/public/300px/20200520/kFop5QYPsi01iMbbB6KjW91PeMT.jpg';
    movieItem17.detail = 'WΔZ is British crime horror thriller film directed by Tom Shankland and starring Stellan Skarsgård, Melissa George, Selma Blair and Tom Hardy in 2007. There is something horribly wrong with the bodies found in the dark city streets. Some are mutilated while others have the Price equation carved into their flesh. Detective Eddie Argo and his new partner Helen Westcott unearth the meaning of the odd equation and realise each victim is being offered a gruesome choice: kill your loved ones, or be killed. ';
    movieItemList.push(movieItem17);
        
    const movieItem18: MovieItem = new MovieItem();
    movieItem18.id = 18;
    movieItem18.name = 'I Spit on Your Grave III';
    movieItem18.groupId = 3;
    movieItem18.duration = 100;
    movieItem18.source = 'https://image.chilimovie.com/public/300px/20200507/jG5GDIcqiqHXkvINZSjyzBUO2vH.jpg';
    movieItem18.detail = 'I Spit on Your Grave III: Vengeance Is Mine is American rape and revenge horror film, directed by R.D. Braunstein from a screenplay by Daniel Gilboy in 2015. Jennifer Hills is still tormented by the brutal sexual assault she endured years ago. She’s changed identities and cities, reluctantly joining a support group where she begins to piece together a new life. But when her new friend’s murderer goes free and the tales of serial rapists haunt her, Jennifer will hunt down the men responsible and do what the system won’t – make them pay for their crimes in the most horrific ways imaginable. Only this time, no jury may be able to save her. ';
    movieItemList.push(movieItem18);
        
    const movieItem19: MovieItem = new MovieItem();
    movieItem19.id = 19;
    movieItem19.name = 'The Human Centipede 2';
    movieItem19.groupId = 3;
    movieItem19.duration = 100;
    movieItem19.source = 'https://image.chilimovie.com/public/300px/20200508/9YEUMnMhIjD5ek4zIqOhLSnTnJS.jpg';
    movieItem19.detail = 'The Human Centipede 2 (Full Sequence) is British-Dutch exploitation horror film written, directed, and co-produced by Tom Six in 2020. American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him. ';
    movieItemList.push(movieItem19);
        
    const movieItem20: MovieItem = new MovieItem();
    movieItem20.id = 20;
    movieItem20.name = 'The Gentlemen';
    movieItem20.groupId = 4;
    movieItem20.duration = 100;
    movieItem20.source = 'https://image.chilimovie.com/public/300px/20200204/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg';
    movieItem20.detail = 'The Gentlemen is crime comedy film written, directed and produced by Guy Ritchie, from a story by Ivan Atkinson, Marn Davies, and Ritchie in 2020. ';
    movieItemList.push(movieItem20);

    const movieItem21: MovieItem = new MovieItem();
    movieItem21.id = 21;
    movieItem21.name = 'Dolittle';
    movieItem21.groupId = 4;
    movieItem21.duration = 119;
    movieItem21.source = 'https://image.chilimovie.com/public/300px/20200508/uoplwswBDy7gsOyrbGuKyPFoPCs.jpg';
    movieItem21.detail = 'Dolittle is American fantasy comedy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd in 2020.After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company.  ';
    movieItemList.push(movieItem21);
        
    const movieItem22: MovieItem = new MovieItem();
    movieItem22.id = 22;
    movieItem22.name = 'Jocks';
    movieItem22.groupId = 4;
    movieItem22.duration = 109;
    movieItem22.source = 'https://image.chilimovie.com/public/300px/20171111/tgjpxqrugdbnADyKGvo65kySaBL.jpg';
    movieItem22.detail = 'Jocks is a 1987 teen comedy. The film was directed by Steve Carver and written by Michael Lanahan and David Oas in 1986. The coach of a college tennis team is given an ultimatum: put together a winning team, or else. ';
    movieItemList.push(movieItem22);
        
    const movieItem23: MovieItem = new MovieItem();
    movieItem23.id = 23;
    movieItem23.name = 'Monsters, Inc.';
    movieItem23.groupId = 4;
    movieItem23.duration = 105;
    movieItem23.source = 'https://image.chilimovie.com/public/300px/20200520/sgheSKxZkttIe8ONsf2sWXPgip3.jpg';
    movieItem23.detail = 'Monsters, Inc. is a 2001 American computer-animated comedy film produced by Pixar Animation Studios and distributed by Walt Disney Pictures. James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they\'re more afraid of the children than they are of them. ';
    movieItemList.push(movieItem23);
        
    const movieItem24: MovieItem = new MovieItem();
    movieItem24.id = 24;
    movieItem24.name = 'Thor: Ragnarok ';
    movieItem24.groupId = 4;
    movieItem24.duration = 135;
    movieItem24.source = 'https://image.chilimovie.com/public/300px/20180525/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg';
    movieItem24.detail = 'Thor: Ragnarok is American superhero film based on the Marvel Comics character Thor, produced by Marvel Studios and distributed by Walt Disney Studios in 2017. Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela. ';
    movieItemList.push(movieItem24);
        
    const movieItem25: MovieItem = new MovieItem();
    movieItem25.id = 25;
    movieItem25.name = 'Men in Black ';
    movieItem25.groupId = 4;
    movieItem25.duration = 118;
    movieItem25.source = 'https://image.chilimovie.com/public/300px/20200520/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg';
    movieItem25.detail = 'Men in Black by Lowell Cunningham. The first film, Men in Black, was released in 1997, the second film, Men in Black II, in 2002. After a police chase with an otherworldly being, a New York City cop is recruited as an agent in a top-secret organization established to monitor and police alien activity on Earth: the Men in Black. ';
    movieItemList.push(movieItem25);
 
    return movieItemList;
  }



//////// Random


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

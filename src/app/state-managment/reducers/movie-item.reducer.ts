import { createReducer, on } from '@ngrx/store';
import { initialMovieItemState } from '../states/movie-item.state';




// export const _movieItemReducer = createReducer(initialMovieItemState,
//     on(createMovieItem, oldState => oldState),
//     on(createMovieGroupSuccess, (oldState, action) => {
//         const newGroupList = oldState.groupList.map(group => group);
//         newGroupList.push(action.group);

//         return {
//             ...oldState,
//             groupList: newGroupList
//         };
//         }),
//      on(createMovieGroupFailed)
//     );




// import { MovieItemAction, MovieItemActionName } from '../action';
// import { IMovieItemState, initialMovieItemState } from '../states/movie-item.state';


// export const movieItemReducer = (
//     oldState = initialMovieItemState,
//     action: MovieItemAction): IMovieItemState => {
//     switch (action.type) {
//         case MovieItemActionName.Create:
//             return { ...oldState };
//         case MovieItemActionName.CreateSuccess:
//             const newGroupList = oldState.movieItemList.map(item => item);
//             newGroupList.push(action.item);

//             return {
//                 ...oldState,
//                 movieItemList: newGroupList
//             };

//         case MovieItemActionName.CreateFailed:
//             return { ...oldState };
//     }

// };

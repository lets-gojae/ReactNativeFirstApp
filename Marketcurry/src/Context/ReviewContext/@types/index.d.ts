interface IState {
  review: Array<IReview>;
}

interface IReview {
  title: string;
  bodyText: string;
  image: Array<string>;
  writer: string;
  date: string;
}

interface Action {
  type: 'SET_REVIEW';
  payload: Array<IReview>;
}

interface IReviewParam {
  i: IReview;
}

interface IReviewParamList extends IReviewParam {
  title: string;
  bodyText: string;
  image: Array<string>;
  writer: string;
  date: string;
}

// interface IImgOption {
//   storageOptions: IStorageOptions;
// }

// interface IStorageOptions {
//   skipBackup: boolean;
//   path: string;
// }

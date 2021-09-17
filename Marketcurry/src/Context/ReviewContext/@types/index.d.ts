interface IState {
  review: Array<IReview>;
}

interface IReview {
  title: string;
  bodyText: string;
  image: string[];
}

interface Action {
  type: 'SET_REVIEW';
  payload: Array<IReview>;
}

interface IImgOption {
  storageOptions: IStorageOptions;
}

interface IStorageOptions {
  skipBackup: boolean;
  path: string;
}

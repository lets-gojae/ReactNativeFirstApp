interface IState {
  review: Array<IReview>;
  inquiry: Array<IInquiry>;
}

interface IReview {
  title: string;
  bodyText: string;
  image: Array<string>;
  writer: string;
  date: string;
}

interface IInquiry {
  title: string;
  bodyText: string;
  date: string;
  writer: string;
}

type Action =
  | {type: 'SET_REVIEW'; payload: Array<IReview>}
  | {type: 'SET_INQUIRY'; payload: Array<IInquiry>};

// interface Action {
//   type: 'SET_REVIEW';
//   payload: Array<IReview>;
// }

interface IReviewParam {
  i: IReview;
  item: IProduct;
}

interface IReviewParamList extends IReviewParam {
  title: string;
  bodyText: string;
  image: Array<string>;
  writer: string;
  date: string;
}

interface IInquiryParam {
  item: IProduct;
}

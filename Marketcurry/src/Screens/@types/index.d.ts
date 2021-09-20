type LoginNaviParamList = {
  LoginModal: undefined;
  FindId: undefined;
  FindPw: undefined;
  Signup: undefined;
  OrderInquiry: undefined;
  NotiSettings: undefined;
};

type ProductDetailNaviParamList = {
  ProductDetail?: IProduct | IDetailItem;
  ProductReview?: IProduct | IDetailItem;
  ReviewDetail?: IReviewParamList | IReviewParam | IProduct | IDetailItem;
};

//IReview | IReviewRoute;

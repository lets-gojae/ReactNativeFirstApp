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
  Review?: IProduct | IDetailItem;
  ReviewDetail?: IReviewParamList | IReviewParam;
  Inquiry?: IInquiryParam;
};

interface IList {
  id: number;
  value: string;
}

interface ICategoryList {
  id: number;
  name: string;
  ist: Array<ICategoryListName>;
}

interface ICategoryListName {
  name: string;
}

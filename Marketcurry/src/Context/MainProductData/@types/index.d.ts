interface IProductData {
  imageList: Array<string>;
  productData: Array<IProduct>;
  descriptionData: Array<IDescription>;
  recommendList: Array<IRecommendList>;
  getProduct: () => void;
}

interface IDetailItem {
  item: IProduct;
}

interface IProduct extends IDetailItem {
  id: number;
  category: number;
  name: string;
  description: string;
  image: string;
  price: number;
  salesUnit: string;
  weight: string;
  shippingCategory: string;
  packagingType: string;
  notification: string;
  discount: number;
  discountPrice: number;
  recommend: boolean;
  specialOffer: boolean;
  cheapPrice: boolean;
  mdRecommend: boolean;
}

interface IDescription {
  id: number;
  name: string;
  information: string;
}

interface IRecommendList {
  id: number;
  name: string;
  image: string;
}

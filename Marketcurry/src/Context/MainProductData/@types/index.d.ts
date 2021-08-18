interface IProductData {
  getProduct: () => void;
  imageList: Array<string>;
  productData: Array<IProduct>;
}

interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  recommend: boolean;
  specialOffer: boolean;
  mdRecommend: boolean;
}

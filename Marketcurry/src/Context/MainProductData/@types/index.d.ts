interface IProductData {
  getProduct: () => void;
  imageList: Array<string>;
  productData: Array<IProduct>;
}

interface IProduct {
  id: number;
  category: number;
  name: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  discountPrice: number;
  recommend: boolean;
  specialOffer: boolean;
  cheapPrice: boolean;
  mdRecommend: boolean;
}

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
  goodprice: boolean;
  mdrecommend: boolean;
}

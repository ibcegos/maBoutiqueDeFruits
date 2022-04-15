import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsFromService() {
    return this.http.get("http://localhost:3000/products");
  }

  deleteProductService(id: any) {
    return this.http.delete("http://localhost:3000/products/" + id);
  }

  addProductService(productForm: any) {
    return this.http.post("http://localhost:3000/products/", productForm);
  }

  changeAvaibilityService(product: any) {
    let available = product.available;
    return this.http.patch("http://localhost:3000/products/" + product.id , {available: !available});
  }

  priceRangeService(priceMin:any, priceMax:any) {
    return this.http.get("http://localhost:3000/products?price_gte=" + priceMin + "&price_lte=" + priceMax);
  }

  searchByKeywordService(keyword: any) {
    return this.http.get("http://localhost:3000/products?q=" + keyword);
  }

  updateProductService(product:any) {
    // let title = product.title;
    // let description = product.description;
    // let image = product.image;
    // let price = product.price;
    // let available = product.available;
    let productObj = product.value;
    // return this.http.put("http://localhost:3000/products/" + product.id, {title, description, image, price, available} );
    return this.http.put("http://localhost:3000/products/" + product.id, {productObj} );
  }

}

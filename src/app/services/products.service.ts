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

}

import { Observable }                              from 'rxjs/Observable';
import { Injectable, EventEmitter }                from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import Category from '../interfaces/category.interface';

@Injectable()
export default class BlogService {
    allCategoryList: Category[] = [];

    private allCategoryObserver: any;
    private headersJson = new Headers({ 'Content-Type': 'application/json' });
    private optionJson  = new RequestOptions({ headers: this.headersJson });

    constructor(public _http: Http) {}

    getAllCategory(): Observable {
        const url = '/api/blog/category';

        return this._http.get(url, this.optionJson).map((data: Response) => {
            let categoryData =  data.json();

            return categoryData.allCategory;
        });
    }

    getSingleCategory(cat_id: number): Observable {
        const url = '/api/blog/category/posts/' + cat_id;

        return this._http.get(url, this.optionJson).map((data: Response) => {
            let data = data.json();

            return data.category;
        });
    }

    getPost(post_id: number): Observable {
        const url = '/api/blog/post/' + post_id;

        return this._http.get(url, this.optionJson).map((data: Response) => {
            let data = data.json();

            return data.post;
        });
    }
}

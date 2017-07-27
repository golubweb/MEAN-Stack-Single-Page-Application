import { Observable }                              from 'rxjs/Observable';
import { Injectable, EventEmitter }                from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import Category from '../interfaces/category.interface';

@Injectable()
export default class BlogService {
    allCategoryList: Category[] = [];
    allCategoryFeed: Observable;

    private allCategoryObserver: any;
    private headersJson = new Headers({ 'Content-Type': 'application/json' });
    private optionJson  = new RequestOptions({ headers: this.headersJson });

    constructor(public http: Http) {
        this.allCategoryFeed = new Observable(observer => {
            this.allCategoryObserver = observer;
        });

        this.getAllCategory();
    }

    getAllCategory(): Observable {
        const url = '/api/blog/category';

        this.http.get(url, this.optionJson)
            .map( response => response.json())
            .subscribe( catResponse => {
                let categoryData = catResponse.allCategory;
                this.allCategoryList = categoryData;

                categoryData.forEach(category => {
                    this.allCategoryObserver.next(category);
                });
            }
        );
    }

    getSingleCategory(cat_id: number): Observable {
        const url = '/api/blog/category/posts/' + cat_id;

        return this.http.get(url, this.optionJson)
            .map((data: Response) => {
                let data = data.json();

                return data.category;
        });
    }

    getPost(post_id: number): Observable {
        const url = '/api/blog/post/' + post_id;

        return this.http.get(url, this.optionJson)
            .map((data: Response) => {
                let data = data.json();

                return data.post;
        });
    }
}

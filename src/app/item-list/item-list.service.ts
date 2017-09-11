import { Item } from './item.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemListService {
    url: any;
    constructor(private http: Http) { }
    getItemList(): Observable<Item[]> {
        return this.http.get('http://localhost:3000/item-list')
            .map( (res: Response) => res.json() )
            .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
   /** addItem(item: Item): Observable<Item[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        // tslint:disable-next-line:prefer-const
        let options = new RequestOptions({ headers: headers });

        return this.http.post('${this.itemsUrl}/${item['id']}', item, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().erro || 'Server error'));
    }*/

    addItem(item: Item): Observable<Item[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3000/item-list', item, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    updateItem(item: Item): Observable<Item[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('http://localhost:3000/' + item.id, item, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }
}

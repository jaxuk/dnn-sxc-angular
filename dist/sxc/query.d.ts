import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
export declare class Query<T> {
    private http;
    private name;
    constructor(http: HttpClient, name: string);
    /**
     * will retrieve a 2sxc query
     * remember to set the permissions on the query, so it can be accessed by the group you want
     */
    get(params?: HttpParams): Observable<T>;
}

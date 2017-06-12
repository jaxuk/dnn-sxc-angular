import { SxcHttp } from './sxc-http';
import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { SxcAngular, DnnAngular } from "./sxc-angular.service";
export declare function DnnHttpProviderFactory(backend: XHRBackend, defaultOptions: RequestOptions, sxc: SxcAngular): SxcHttp;
export declare let SxcHttpProvider: {
    provide: typeof Http;
    useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, sxc: SxcAngular) => SxcHttp;
    deps: (typeof XHRBackend | typeof RequestOptions | typeof SxcAngular)[];
};
export declare let DnnHttpProvider: {
    provide: typeof Http;
    useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, sxc: SxcAngular) => SxcHttp;
    deps: (typeof XHRBackend | typeof RequestOptions | typeof DnnAngular)[];
};
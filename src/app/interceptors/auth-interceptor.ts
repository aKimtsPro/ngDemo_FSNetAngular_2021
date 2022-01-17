import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ChambreService } from "../services/chambre.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor (private _service: ChambreService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const authToken = this._service.getToken();

        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        })

        return next.handle(authReq);

    }

}

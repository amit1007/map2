import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {constantVariable} from './../constant';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { console.log('myprofile service');	}
getCoordinateInfo(data) {
  console.log(data);
    console.log('save coordinate service');
    return this.http.post<any>(constantVariable.API_ENDPOINT+'api/bidding/get-address-details',data)
      .pipe(map(res => {
                if(res.response){
                    //coordinate information saved successfully
                    console.log('coordinate info saved sucessfully');
                    console.log(res.response)
                }
          return res;
      }));
      
}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
declare var google: any;






@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  constructor(private http: HttpClient) { }



  public getGeoLocation(address:string):Observable<any> {
    
      
    var geoCoder = new google.maps.Geocoder;
      // geoCoder.geocode({'address': location}, function(results, status) {
   
        console.log('Getting address: ', address);
       
        return Observable.create(observer => {
          geoCoder.geocode({
                'address': address
            }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(status)
                    observer.next(results[0].geometry.location);
                    observer.complete();
                } else {
                    console.log('Error: ', results, ' & Status: ', status);
                    observer.error();
                }
            });
        });
     
 


}


  
  
}

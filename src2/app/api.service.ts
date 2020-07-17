import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { delay } from "rxjs/operators";
import { environment } from '../environments/environment';


declare var google: any;






@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  
  public login(logindata:any)  {
      return this.http.post(this.baseUrl + "userLogin", logindata);
  }

  public displaydata(){
    return this.http.get( this.baseUrl +"getLatestProject")
  }

  public roundchartdata(){
    return this.http.get(this.baseUrl +"getProjectStatistics")
  }

  public AdminSurveyordata(){
    return this.http.get( this.baseUrl +"getSurveyorData")
    .pipe(delay(2000))
  }

  public getAdminSurveyor(){
    return this.http.get(this.baseUrl+"getAdminSurveyor")
  }

  public getnewadded(){
    return this.http.get(this.baseUrl+"getNewAdded")
  }

  public getpendingproperty(){
    return this.http.get(this.baseUrl +"getAllPropertyDetailsStatus/status=pending")
  }
  public allpropertylist(){
    return this.http.get(this.baseUrl+"getAllPropertyDetailsStatus/status=all")
  }
 
  public completedpropertylist(){
    return this.http.get(this.baseUrl+"getAllPropertyDetailsStatus/status=completed")
  }

  public deleteproperty(id){
    return this.http.delete( this.baseUrl+"deleteProperty/id=" + id) .pipe(delay(2000))
  }

  public getallSurveyordata(){
    return this.http.get(this.baseUrl+"getAllSurveyor")
  }

  public addpropertydata(payload){
    return this.http.post(this.baseUrl+"insertProperty",payload)
  }

  // public getpendingdetaildata(){
  //   return this.http.get(this.baseUrl+"getPropertyStatusWise/status=pending")
  // }

  public pendingpropertylistdetail(id){
    return this.http.get(this.baseUrl +"getPropertyStatusWise/status=pending/propCode="+id)
  }

  public getratingsdetail(id){
    return this.http.get(this.baseUrl +"getRatingDetail/unitID="+id)
  }

  public updaterating(payload,unit_evalutionID){
    return this.http.put(this.baseUrl +"updateEvolution/id=" + unit_evalutionID, payload)
  }

  








 

  // public createsurveyor(userdata){
    
  //   return this.http.post("http://182.76.7.4:3000/createSurveyor", userdata);
  // }
  
  public createsurveyor(fileToUpload: File, payload) {
   
    const formData: FormData = new FormData();
     if(fileToUpload != null){
      formData.append('profile_pic', fileToUpload, fileToUpload.name);
     }
     else{
      formData.append('profile_pic', "assets/image/avatar1.png");
     }
     
    
    formData.append('username', payload.username);
    formData.append('password', payload.password);
    formData.append('firstName', payload.firstName);
    formData.append('lastName', payload.lastName);
    formData.append('email', payload.email);
    formData.append('contact', payload.contact);
    formData.append('gender', payload.gender);
    formData.append('dob', payload.dob);

    return this.http.post("http://182.76.7.4:3000/createSurveyor", formData)
  }

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

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

  public getallpropertydetail(id,id2){
    
    return this.http.get(this.baseUrl+"getPropertyStatusWise/status="+id2+"/propCode="+id)
  }

  public getallpropertymatch(id2){
    
    return this.http.get(this.baseUrl +"getAllPropertyDetailsStatus/status="+id2)
  }
 
  public completedpropertylist(){
    return this.http.get(this.baseUrl+"getAllPropertyDetailsStatus/status=approved")
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

  public updatepsw(payload){
    return this.http.post(this.baseUrl+"forgotPassword",payload)
  }

  public getprofile(id){
    return this.http.get(this.baseUrl +"getUser/userID="+id)
  }

  public getImages(id){
    return this.http.get(this.baseUrl +"getImages/propCode="+id)
  }

  public getnewsupporterproperty(){
    return this.http.get(this.baseUrl+"getNewAddedSupporter")
  }

  public newpropertylistdetail(id){
    return this.http.get(this.baseUrl +"getNewAddedSupporterDetail/propCode="+id)
  }

  public updatestatus(id,payload){
    return this.http.put(this.baseUrl +"updateStatus/propCode="+id, payload)
  }

  public propertyapprovepending(propertytype){
    return this.http.get(this.baseUrl +"getAllPropertyDetailsStatus/status="+propertytype)
  }

  public userlist(usertype){
    return this.http.get(this.baseUrl +"getUsers/userType="+usertype)
  }

  public updatepublishstatus(id,payload){
    return this.http.put(this.baseUrl +"updateUnit/unitID="+id,payload)
  }  


  
  public createsurveyor(fileToUpload: File, payload) {
    const formData: FormData = new FormData();
    console.log(payload.url);
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

    return this.http.post(this.baseUrl+"createSurveyor", formData)

  }




  /*****************Create User *********************/

  public createUser(fileToUpload: File, payload) {
    const formData: FormData = new FormData();
    console.log(payload.url);
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
    formData.append('user_type', payload.user_type);
    formData.append('contact', payload.contact);
    formData.append('gender', payload.gender);
    formData.append('dob', payload.dob);

    return this.http.post(this.baseUrl+"createUser", formData)

  }
  
  /***********Update User API ********* */
  public updateuser(fileToUpload: File, payload) {
   
    const formData: FormData = new FormData();
     
    console.log(fileToUpload);
   

    if(payload.url !== null && fileToUpload === null){
      
      
      formData.append('profile_pic', payload.url);
    }

    if(fileToUpload !== null){
     
    formData.append('profile_pic', fileToUpload, fileToUpload.name);
    }
  


   
    console.log(localStorage.getItem("userID")); 

   
    formData.append('password', payload.password);
    formData.append('firstName', payload.firstName);
    formData.append('lastName', payload.lastName);
    formData.append('email', payload.email);
    formData.append('contact', payload.contact);
    formData.append('gender', payload.gender);
    formData.append('user_type', payload.user_type);

    return this.http.put(this.baseUrl +"updateUser/userID=" + localStorage.getItem("userID"), formData)

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

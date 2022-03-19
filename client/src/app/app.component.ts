import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users:any;

  constructor(private http:HttpClient) { }

  public ngOnInit(): void {
   this.loadWeatherForecast();
  }

  public loadWeatherForecast():void{
    this.http.get('https://localhost:5001/api/users').subscribe(response=>{
    this.users=response;
    });
  }
  

}

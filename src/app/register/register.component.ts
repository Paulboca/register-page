import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  result: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(email:string, password:string) {
    this.http.post('https://reqres.in/api/register',{
      email: email,
      password: password
    }).subscribe({
      next: data => {
        $('#resultTextField').css({"color": "green"});
        this.result = 'Success';
        console.log(data);
      },
      error: error => {
        $('#resultTextField').css({"color": "red"});
        this.result = 'Error! Code: ' + error.status;
        console.error('Error', error);
      }
    })
  }

}

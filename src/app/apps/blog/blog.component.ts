import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../shared/interfaces/iproduct';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  // Start Lab
  StoreName:string;
  ItiDecription:string;
  IsPurshased:boolean;
  IsClicked:boolean;
  ProductsList:IProduct[];
  titleBinding:string;

  // End Lab
  blogsDetail: Blog[] = [];

  page = 1;
  pageSize = 6;

  constructor(public service: ServiceblogService, public router: Router, public http: HttpClient) {
    this.service.showEdit=false;
    // Lab Constructor
    this.titleBinding = "ITI Angular Lab";
    this.StoreName = "ITI Store";
    this.ItiDecription = "Here's the assignment answer day 2";
    this.IsPurshased = true;
    this.IsClicked = false;
    this.ProductsList = [
      {id : 1 , name : "What is Lorem Ipsum 1" , price : 111 , quantity : 5 ,description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img : "https://dummyimage.com/600x400/1d7c85/fff.png&text=Product", seller : "Mohamed" },
      {id : 2 , name : "What is Lorem Ipsum 2" , price : 112 , quantity : 2 ,description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img : "https://dummyimage.com/600x400/1d7c85/fff.png&text=Product", seller : "Ahmed" },
      {id : 3 , name : "What is Lorem Ipsum 3" , price : 113 , quantity : 1 ,description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img : "https://dummyimage.com/600x400/1d7c85/fff.png&text=Product", seller : "Yasser" },
      {id : 4 , name : "What is Lorem Ipsum 4" , price : 114 , quantity : 8 ,description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img : "https://dummyimage.com/600x400/1d7c85/fff.png&text=Product", seller : "Aya" },
      {id : 5 , name : "What is Lorem Ipsum 5" , price : 115 , quantity : 8 ,description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img : "https://dummyimage.com/600x400/1d7c85/fff.png&text=Product", seller : "Romaysaa" },
      {id : 6 , name : "What is Lorem Ipsum 6" , price : 116 , quantity : 8 ,description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", img : "https://dummyimage.com/600x400/1d7c85/fff.png&text=Product", seller : "Mommen" },

    ];

  }

  // Toggle
  Toggle() {
    this.IsPurshased = !this.IsPurshased;
  }
  ToggleSiller(){
    this.IsClicked = !this.IsClicked;
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => this.service.Blogs = d);
  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.router.navigate([('/post')]);

  }

  viewDetail(id: number) {

    this.service.detailId = id;

    if (this.service.loginStatusService)
      this.service.showEdit = true;

    this.router.navigate([('/blogDetail'), id]);

  }

}

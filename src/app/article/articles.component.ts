import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  post = {};

  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.post = this.getPostByID(id);
  }
  getPostByID(id: number) {
    return this.config.getPostByID(id);
  }
  getBack() {
    this.location.back();
 }
}

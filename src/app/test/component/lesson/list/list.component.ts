import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/test/service/lesson.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  quotes : [] = [];

  constructor(private lessonService : LessonService) { }

  ngOnInit(): void {
    this.lessonService.find().subscribe((result : any) => {      
      this.quotes = result.quotes;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/test/service/lesson.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  lesson : any = {
    name : "",
    quote : ""
  };

  constructor(private lessonService : LessonService) { }

  ngOnInit(): void {
  }

  insert(){
    this.lessonService.insert(this.lesson).subscribe((result : any) => {
      console.log(result);
      
    });
  }

}

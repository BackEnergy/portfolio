import { Component} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent{
  testimonials = [
    {   
      author: "John Doe",
      job: "Web Developer",
      img: "assets/testimonial-1.png",
      info: "Chris was an awesome man.....",
    },
    { 
      author: "hassan smtg",
      job: "Software Developer",
      img: "assets/testimonial-2.png",
      info: "Another text describing how great Chris was...",
    },
  ];
  
  person = 0;
  btn1() {
    this.person = 0;
    
  }
  btn2() {
    this.person = 1;
  }

}

import { Component} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent{
  testimonials = [
    {
      author: "Hassan Khousheish",
      job: "Software Engineer",
      img: "assets/hassan.png",
      info: "Chris was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish.",
    },
    {
      author: "Daniel El Khoury",
      job: "Web Developer",
      img: "assets/testimonial-2.png",
      info: "Christian's way of working was unique with a confidence to dig in to the harder parts of systems and has the collaborative friction that's needed to produce excellent work.",
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

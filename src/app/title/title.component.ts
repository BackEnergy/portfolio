import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('googly') anchor: ElementRef | undefined;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById('googly')
    const rekt = anchor?.getBoundingClientRect();
    if(rekt?.left != undefined && rekt.width != undefined && rekt?.top != undefined && rekt.height != undefined){
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = this.angle(mouseX, mouseY, anchorX, anchorY);

      const eyes = document.querySelectorAll<HTMLElement>('.eye')
      eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        // if(anchor != undefined){
        //   anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
        // }
      })
    }
  }

  angle(cx: number, cy: number, ex: number, ey: number){
    const dy = ey- cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
  }

}

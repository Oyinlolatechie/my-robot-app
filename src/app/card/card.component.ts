import { Component, Input } from '@angular/core';
import { IRobot } from '../model/robot';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  robot : IRobot = {
    id: 0,
    name: 'Robort',
    username: 'robot',
    email: 'robot@emaul.com'
  };

}

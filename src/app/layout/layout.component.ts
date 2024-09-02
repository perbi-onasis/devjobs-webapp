import { Component } from '@angular/core';
import {SearchBarComponent} from '../components/search-bar/search-bar.component'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

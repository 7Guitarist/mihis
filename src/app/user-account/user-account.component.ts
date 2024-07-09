import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css',
})
export class UserAccountComponent {
  vaccineCount = 'Number of Vaccine Administered / Total Required Vaccine';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
}

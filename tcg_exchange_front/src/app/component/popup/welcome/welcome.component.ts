import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(
    public dialogRef: MatDialogRef<WelcomeComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) { }

onClick(): void {
  this.dialogRef.close();
}

}

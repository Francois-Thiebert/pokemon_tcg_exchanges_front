import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-maj-wish-list',
  templateUrl: './maj-wish-list.component.html',
  styleUrls: ['./maj-wish-list.component.css']
})
export class MajWishListComponent {

    constructor(
      public dialogRef: MatDialogRef<MajWishListComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClick(): void {
    this.dialogRef.close();
  }

}

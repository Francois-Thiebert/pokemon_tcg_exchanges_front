import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MajWishListComponent } from '../maj-wish-list/maj-wish-list.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(
      private userSrv: UserService,
      public dialogRef: MatDialogRef<MajWishListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClick(){
    this.userSrv.connectionsSinceUpdate(JSON.parse(sessionStorage.getItem('user')!)?.id).subscribe((cards) => {});
    this.dialogRef.close();
  }

}

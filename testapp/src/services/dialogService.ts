import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CofirmDialogueComponent } from 'src/app/cofirm-dialogue/cofirm-dialogue.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openConfirmDialog(title: string, message: string): Observable<boolean> {
    const dialogRef = this.dialog.open(CofirmDialogueComponent, {
      width: '250px',
      data: { title, message },
    });

    return dialogRef.afterClosed();
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-cofirm-dialogue',
  templateUrl: './cofirm-dialogue.component.html',
  styleUrls: ['./cofirm-dialogue.component.less']
})
export class CofirmDialogueComponent {
  constructor(
    public dialogRef: MatDialogRef<CofirmDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}

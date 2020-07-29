import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {
  
  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.dialogRef.updateSize('40%', '60%');
    //this.dialogRef.addPanelClass(class: "");
  }

  playerStats() {
    let response = {showPlayerStats: true }
    this.dialogRef.close(response);
  }

  close() {
    this.dialogRef.close();
  }

}

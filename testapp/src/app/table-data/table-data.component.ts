import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/DataService';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.less']
})
export class TableDataComponent implements OnInit {
  rowData: any[]=[];

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Completed', field: 'completed' },
    // Add more columns as needed
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    width: 150,
  };

  // TypeScript should infer the type

  constructor(private dataService: DataService) {}

  ngOnInit() {
  
    this.dataService.getSpecData().subscribe(
      (data) => {
        debugger;
        if(data.userProfile!=null)
        {
         this.rowData=data.tasks;
         debugger
        }});
  }

  
  onFirstDataRendered(params:any) {
    params.api.sizeColumnsToFit();
  }
  // onFirstDataRendered(params) {
  //   params.api.sizeColumnsToFit();
  // }
}

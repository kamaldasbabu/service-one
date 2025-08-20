import { DataStoreService } from './../../services/data-store.service';
import { Component, Input, OnChanges } from '@angular/core';
import { tableSchema } from '../../utils/tableColumnDefines';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-table',
  standalone: false,
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.css'
})
export class ViewTableComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() tableName: string = "";
  @Input() route: ActivatedRoute | null = null;
  @Input() queryParams: any | null = null;

  displayedColumns: string[] = [];
  displayedColumnsName: string[] = [];
  constructor(private _dataStoreService: DataStoreService) { }


  ngOnChanges(): void {

    if (this.data && this.data.length && this.tableName) {
      this.displayedColumns = Object.keys(tableSchema[this.tableName]);
      this.displayedColumnsName = Object.values(tableSchema[this.tableName])
    }
  }

  handleAction(row: any, tableName: String): void {
    this._dataStoreService.activityFn(tableName, this.route, row);
  }
}


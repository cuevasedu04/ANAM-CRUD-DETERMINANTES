import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos de angular
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconAnchor } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconAnchor,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class SharedModule { }

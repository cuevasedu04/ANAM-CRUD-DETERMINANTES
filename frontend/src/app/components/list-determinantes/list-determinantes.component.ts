import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Determinante } from '../../interface/determinante';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconAnchor } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';



const listDeterminante: Determinante[] = [
  {id: 1, nivel:'Nivel1', unidadDeNegocio: 'Negocio1', unidadAdministrativa: 'Admin1', area: 'Area1', determinante: 'Determinante1', dependencia: 'Dependencia1', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 1, idUsuarioCreacion: 1, activo: true, acciones: ''},
  {id: 2, nivel:'Nivel2', unidadDeNegocio: 'Negocio2', unidadAdministrativa: 'Admin2', area: 'Area2', determinante: 'Determinante2', dependencia: 'Dependencia2', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 2, idUsuarioCreacion: 2, activo: true, acciones: ''},
  {id: 3, nivel:'Nivel3', unidadDeNegocio: 'Negocio3', unidadAdministrativa: 'Admin3', area: 'Area3', determinante: 'Determinante3', dependencia: 'Dependencia3', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 3, idUsuarioCreacion: 3, activo: true, acciones: ''},
  {id: 4, nivel:'Nivel4', unidadDeNegocio: 'Negocio4', unidadAdministrativa: 'Admin4', area: 'Area4', determinante: 'Determinante4', dependencia: 'Dependencia4', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 4, idUsuarioCreacion: 4, activo: true, acciones: ''},
  {id: 5, nivel:'Nivel5', unidadDeNegocio: 'Negocio5', unidadAdministrativa: 'Admin5', area: 'Area5', determinante: 'Determinante5', dependencia: 'Dependencia5', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 5, idUsuarioCreacion: 5, activo: true, acciones: ''},
  {id: 6, nivel:'Nivel6', unidadDeNegocio: 'Negocio6', unidadAdministrativa: 'Admin6', area: 'Area6', determinante: 'Determinante6', dependencia: 'Dependencia6', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 6, idUsuarioCreacion: 6, activo: true, acciones: ''},
  {id: 7, nivel:'Nivel7', unidadDeNegocio: 'Negocio7', unidadAdministrativa: 'Admin7', area: 'Area7', determinante: 'Determinante7', dependencia: 'Dependencia7', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 7, idUsuarioCreacion: 7, activo: true, acciones: ''},
  {id: 8, nivel:'Nivel8', unidadDeNegocio: 'Negocio8', unidadAdministrativa: 'Admin8', area: 'Area8', determinante: 'Determinante8', dependencia: 'Dependencia8', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 8, idUsuarioCreacion: 8, activo: true, acciones: ''},
  {id: 9, nivel:'Nivel9', unidadDeNegocio: 'Negocio9', unidadAdministrativa: 'Admin9', area: 'Area9', determinante: 'Determinante9', dependencia: 'Dependencia9', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 9, idUsuarioCreacion: 9, activo: true, acciones: ''},
  {id: 10, nivel:'Nivel10', unidadDeNegocio: 'Negocio10', unidadAdministrativa: 'Admin10', area: 'Area10', determinante: 'Determinante10', dependencia: 'Dependencia10', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 10, idUsuarioCreacion: 10, activo: true, acciones: ''},
];


@Component({
  selector: 'app-list-determinantes',
  imports: [MatToolbarModule, 
    MatCardModule,
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatIconAnchor,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './list-determinantes.component.html',
  styleUrl: './list-determinantes.component.css'
})

export class ListDeterminantesComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'nivel', 'unidadDeNegocio', 'unidadAdministrativa', 'area', 'determinante', 'dependencia', 'fechaDeRegistro', 'fechaDeModificacion', 'idUsuarioModifica', 'idUsuarioCreacion', 'activo', 'acciones'];
  dataSource: MatTableDataSource<Determinante>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


  constructor() {
    this.dataSource = new MatTableDataSource(listDeterminante);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

  

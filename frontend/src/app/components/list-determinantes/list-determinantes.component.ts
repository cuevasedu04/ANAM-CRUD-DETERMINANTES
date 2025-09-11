import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { Determinante } from '../../interface/determinante';
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';



const listDeterminante: Determinante[] = [
  {id: 1, nivel:'Nivel1', unidadDeNegocio: 'Negocio1', unidadAdministrativa: 'Admin1', area: 'Area1', determinante: 'Determinante1', dependencia: 'Dependencia1', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 1, idUsuarioCreacion: 1, activo: true},
  {id: 2, nivel:'Nivel2', unidadDeNegocio: 'Negocio2', unidadAdministrativa: 'Admin2', area: 'Area2', determinante: 'Determinante2', dependencia: 'Dependencia2', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 2, idUsuarioCreacion: 2, activo: true},
  {id: 3, nivel:'Nivel3', unidadDeNegocio: 'Negocio3', unidadAdministrativa: 'Admin3', area: 'Area3', determinante: 'Determinante3', dependencia: 'Dependencia3', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 3, idUsuarioCreacion: 3, activo: true},
  {id: 4, nivel:'Nivel4', unidadDeNegocio: 'Negocio4', unidadAdministrativa: 'Admin4', area: 'Area4', determinante: 'Determinante4', dependencia: 'Dependencia4', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 4, idUsuarioCreacion: 4, activo: true},
  {id: 5, nivel:'Nivel5', unidadDeNegocio: 'Negocio5', unidadAdministrativa : 'Admin5', area: 'Area5', determinante: 'Determinante5', dependencia: 'Dependencia5', fechaDeRegistro: new Date(), fechaDeModificacion: new Date(), idUsuarioModifica: 5, idUsuarioCreacion: 5, activo: true},
];


@Component({
  selector: 'app-list-determinantes',
  imports: [MatToolbarModule, 
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './list-determinantes.component.html',
  styleUrl: './list-determinantes.component.css'
})

export class ListDeterminantesComponent {
  displayedColumns: string[] = ['ID', 'Nivel', 'Unidad de Negocio', 'Unidad Administrativa', 'Area', 'Determinante', 'Dependencia', 'Fecha de Registro', 'Fecha de Modificacion', 'ID Usuario Modifica', 'ID Usuario Creacion', 'Activo'];
  dataSource = listDeterminante;
}

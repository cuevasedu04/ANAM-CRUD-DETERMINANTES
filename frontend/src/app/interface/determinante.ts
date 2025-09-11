export interface Determinante {
    id?: number;
    nivel: string;
    unidadDeNegocio: string;
    unidadAdministrativa: string;
    area: string;
    determinante: string;
    dependencia: string;
    fechaDeRegistro?: Date;
    fechaDeModificacion?: Date;
    idUsuarioModifica?: number;
    idUsuarioCreacion?: number;
    activo?: boolean;
}
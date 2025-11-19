export class Servico {
  constructor(
    public tipo: string,
    public data: Date,
    public prazo: number,
    public garantia: number,
    public clienteId: number,
    public id?: number
  ) {}
}

export class Cliente {
  constructor(
    public nome: string,
    public telefone: string,
    public endereco: string,
    public id?: number
  ) {}
}
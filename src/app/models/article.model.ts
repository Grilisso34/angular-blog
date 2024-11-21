export class Article {
  constructor(
    public title: string,
    public date: string = '00-00-0000',
    public description: string,
    public url: string,
    public id?: number
  ) {}
}

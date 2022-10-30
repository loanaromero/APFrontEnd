export class Education {
  id?: number;
  nombreEd: string;
  descripEd: string;

  constructor(nombreEd: string, descripEd: string) {
    this.nombreEd = nombreEd;
    this.descripEd = descripEd;
  }
}

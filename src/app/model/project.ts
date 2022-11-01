export class Project {
  id?: number;
  nombreP: string;
  descripP: string;
  linkP: string;
  imgP: string;

  constructor(nombreP: string,descripP: string, linkP: string, imgP: string) {
    this.nombreP = nombreP;
    this.descripP = descripP;
    this.linkP = linkP;
    this.imgP = imgP;
  }
}

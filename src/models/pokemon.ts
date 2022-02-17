export class Pokemon {
  name: string;
  url: string;
  favorite: boolean;

  constructor(
    _name: string,
    _url: string,
    _favorite: boolean,
  ) {
    this.name = _name;
    this.url = _url;
    this.favorite = _favorite;
  }
}

// export class Type {
//   name: string;
//
//   constructor(_name: string) {
//     this.name = _name;
//   }
// }

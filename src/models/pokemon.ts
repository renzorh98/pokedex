export class Pokemon {
  // id: number;
  name: string;
  url: string;
  // weight: number;
  // height: number;
  // types: Type[];
  // image: string;
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

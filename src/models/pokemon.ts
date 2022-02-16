export class Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: Type[];
  favorite: boolean;

  constructor(
    _id: number,
    _name: string,
    _weight: number,
    _height: number,
    _types: Type[]
  ) {
    this.id = _id;
    this.name = _name;
    this.weight = _weight;
    this.height = _height;
    this.types = _types;
    this.favorite = false;
  }
}

export class Type {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }
}

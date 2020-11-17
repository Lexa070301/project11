export class MyDet {
  id: number;
  name: string;
  status: boolean;
  color: string;

  constructor(id, name) {
    this.id = id;
    this.name = name;
    if (Math.random() < 0.5) {
      this.status = false;
      this.color = 'red';
    } else {
      this.status = true;
      this.color = 'green';
    }
  }
}

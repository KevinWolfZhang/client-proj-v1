export class User {
  constructor(name, password) {
    this.userName = name;
    this.password = password;
  }
  userName;
  password;
}

export class Page<T> {
  page: number;
  size: number;
  totalCount: number;
}

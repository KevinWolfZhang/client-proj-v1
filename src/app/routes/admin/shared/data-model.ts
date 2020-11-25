export class User {
  constructor(owner, description) {
    this.owner = owner;
    this.description = description;
  }
  owner;
  description;
  avatar;
  title;
}

export class Page<T> {
  page: number;
  size: number;
  totalCount: number;
}

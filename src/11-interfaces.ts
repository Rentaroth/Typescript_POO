export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(name: string): boolean;
}

class postgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}

  disconnect(name: string): boolean {
    return true;
  }
}

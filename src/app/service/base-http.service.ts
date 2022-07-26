export class BaseHttpService<T1> {
  private data: T1[] = [];
}

const service = new BaseHttpService<string>()
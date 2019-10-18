import { Observable, of, from } from "rxjs";

export class APIService {
  constructor(private url: string) {}

  getData(): Observable<any> {
    return from(
      fetch(this.url)
        .then(res => res.json())
        .then(data => data.results)
    );
  }
}

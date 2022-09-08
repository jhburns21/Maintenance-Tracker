import { QueryParameters } from './query-parameters';


export class QueryStringBuilder {
  parameters: QueryParameters;

  constructor(params?: QueryParameters) {
    if (params) {
       this.parameters = params;
    }
  }

  set(key: string, value: string) {
    // tslint:disable-next-line:only-arrow-functions
    const idx = this.parameters.findIndex(function(e: any) { return e.key === key; });
    if (idx > -1) {
      this.parameters[idx].value = value;
    } else {
      this.parameters.push({key, value});
    }
  }

  build(): string {
    let result = '';
    for (const param of this.parameters) {
      if (result === '') {
        result = `?${param.key}=${param.value}`;
      } else {
        result = `${result}&${param.key}=${param.value}`;
      }
    }
    return result;
  }
}
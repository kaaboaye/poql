import { Field } from '../field/field';

export class Schema {
  constructor(public readonly name: string, fields: ReadonlyArray<Field>) {
    this.fields = new Map(fields.map(f => [f.name, f] as [string, Field]));
  }

  private readonly fields: Map<string, Field>;
}

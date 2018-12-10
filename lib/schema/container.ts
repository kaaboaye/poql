import { Service } from 'typedi';
import { Field } from '../field/field';
import { Schema } from './schema';

@Service()
export class SchemaContainer {
  private fieldStack: Field[] = [];
  private schemas: Map<string, Schema> = new Map();

  public registerField(field: Field): void {
    this.fieldStack.push(field);
  }

  public registerSchema(name: string): void {
    this.schemas.set(name, new Schema(name, this.fieldStack));
    this.fieldStack.length = 0;
  }

  public getSchemas(): ReadonlyArray<Schema> {
    return Array.from(this.schemas.values());
  }
}

import Container from 'typedi';
import { SchemaContainer } from './container';

const schema = Container.get(SchemaContainer);

export function SchemaDecorator(tableName: string): any {
  return (controller: Function) => {
    schema.registerSchema(tableName);
  };
}

import Container from 'typedi';
import { SchemaContainer } from '../schema/container';
import { Field } from './field';
import { FieldOptions } from './options';
import { FieldType } from './type';

const schema = Container.get(SchemaContainer);

export function FieldDecorator(options: FieldType | FieldOptions): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (typeof options === 'number') {
      options = {
        type: options,
      } as FieldOptions;
    }

    schema.registerField(
      new Field(
        options.name || propertyKey,
        options.type,
        options.nullable === undefined ? false : options.nullable,
        options.size,
      ),
    );
  };
}

import { FieldOptions } from './options';
import { FieldType } from './type';

export class Field implements FieldOptions {
  constructor(
    public readonly name: string,
    public readonly type: FieldType,
    public readonly nullable?: boolean,
    public readonly size?: number,
  ) {}
}

import { FieldType } from './type';

export interface FieldOptions {
  readonly name?: string;
  readonly type: FieldType;
  readonly nullable?: boolean;
  readonly size?: number;
}

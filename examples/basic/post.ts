import { FieldDecorator } from '../../lib/field/decorator';
import { FieldType } from '../../lib/field/type';
import { SchemaDecorator } from '../../lib/schema/decorator';

@SchemaDecorator('posts')
export class Post {
  @FieldDecorator(FieldType.bigInteger)
  public id!: number;

  @FieldDecorator({
    type: FieldType.varchar,
    size: 255,
  })
  public title!: string;

  @FieldDecorator(FieldType.text)
  public content!: string;
}

import Container from 'typedi';
import '../examples/basic/post';
import { SchemaContainer } from './schema/container';

const schemas = Container.get(SchemaContainer);

console.log(schemas);
console.log(schemas.getSchemas());
console.log(schemas.getSchemas().map(s => s.name));

import { schema } from 'normalizr';

 const articleSchema = new schema.Entity(
	"articles",
	{},
	{ idAttribute: "_id"}
);

export default articleSchema;
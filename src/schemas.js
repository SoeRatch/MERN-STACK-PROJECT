import { schema } from 'normalizr';

 export const articleSchema = new schema.Entity(
	"articles",
	{},
	{ idAttribute: "_id"}
);

export const artSchema = new schema.Entity(
	"article",
	{},
	{ idAttribute: "_id"}
);

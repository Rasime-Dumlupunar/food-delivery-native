import { defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
   
{
    name: 'name',
    type: 'string',
    title: 'Category Name',
    validation: rule=> rule.required()
},
{
    name: 'description',
    type: 'string',
    title: 'Category decription',
    validation: rule=> rule.required()
},
{
    name: 'image',
    type: 'image',
    title: 'image of the category'
},
  ],
})
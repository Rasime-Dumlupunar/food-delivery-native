import {defineField, defineType} from 'sanity'
import {dish} from './dish.js';

export const restaurant = defineType ({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
   
    {
    name: 'name',
    type: 'string',
    title: 'Name',
    validation: rule=> rule.required()
    },
    {
    name: 'description',
    type: 'string',
    title: 'Description',
    validation: rule=> rule.max(200)
    },
    {
    name: 'image',
    type: 'image',
    title: 'image of the category'
    },
    {
    name: 'lat',
    type: 'number',
    title: 'latitude of the rastaurant',
    },
    {
    name: 'lng',
    type: 'number',
    title: 'longitude of the restaurant',
    },
    {
    name: 'address',
    type: 'string',
    title: 'Restaurant address',
    validation: rule=> rule.required(),
    },
    {
    name: 'rating',
    type: 'number',
    title: 'Enter a number between 1 to 5',
    validation: rule=> rule.required().min(1).max(5).error('Please enter a value between 1 to 5 ')
    },
    {
    name: 'type',
    title: 'Event',
    validation: rule=> rule.required(),
    type: 'reference',
    to: [{type: 'event'}]
    },
    {
    name: 'dishes',
    type: 'array',
    title: 'Dishes',
    of: [{type: 'reference', to: [{type: 'dish'}]}]
    }
  ],
});
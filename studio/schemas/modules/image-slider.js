import { Infinity } from 'phosphor-react'

import customImage from '../../lib/custom-image'

export default {
  title: 'Image-Slider',
  name: 'imageSlider',
  type: 'object',
  icon: Infinity,
  fieldsets: [
    {
      title: '',
      name: 'options',
      options: { columns: 3 }
    }
  ],
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Slide',
          name: 'slide',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              title: 'SubTitle',
              name: 'subTitle',
              type: 'string',
              validation: Rule => Rule.required()
            },
            customImage(),
          ],
          preview: {
            select: {
              text: 'text'
            },
            prepare({ text }) {
              return {
                title: text
              }
            }
          }
        },
      
        
      ],
      validation: Rule => Rule.min(1).required()
    },
    {
      title: 'Speed',
      name: 'speed',
      type: 'number',
      description: 'Pick a number between 0-1 (0.5 is the default)',
      initialValue: 0.5,
      validation: Rule =>
        Rule.min(0)
          .max(1)
          .precision(1)
    },
    {
      title: 'Reverse direction?',
      name: 'reverse',
      type: 'boolean',
      initialValue: false,
      fieldset: 'options'
    },
    {
      title: 'Pause on hover?',
      name: 'pausable',
      type: 'boolean',
      initialValue: false,
      fieldset: 'options'
    }
  ],
  preview: {
    select: {
      text: 'items.0.text'
    },
    prepare({ text }) {
      return {
        title: 'Slider',
        subtitle: text
      }
    }
  }
}

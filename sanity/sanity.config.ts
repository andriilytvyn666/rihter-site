import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'rihter-site',

  projectId: 'lh08fn64',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem().title('About').child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Support')
              .child(S.document().schemaType('support').documentId('support')),
            S.listItem().title('Post').child(S.document().schemaType('post').documentId('post')),
            S.listItem()
              .title('Footer Links')
              .child(S.document().schemaType('footerLinks').documentId('footerLinks')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['about', 'support', 'post', 'footerLinks'].includes(`${listItem.getId()}`)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {UserIcon, LinkIcon, BlockContentIcon, HeartFilledIcon, ImageIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'rihter-site',

  projectId: 'lh08fn64',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Main')
          .items([
            S.listItem()
              .title('Header')
              .icon(ImageIcon)
              .child(S.document().schemaType('header').documentId('header')),
            S.listItem()
              .title('About')
              .icon(UserIcon)
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Support')
              .icon(HeartFilledIcon)
              .child(S.document().schemaType('support').documentId('support')),
            S.listItem()
              .title('Post')
              .icon(BlockContentIcon)
              .child(S.document().schemaType('post').documentId('post')),
            S.listItem()
              .title('Footer Links')
              .icon(LinkIcon)
              .child(S.document().schemaType('footerLinks').documentId('footerLinks')),
            S.listItem()
              .title('Album Page')
              .icon(BlockContentIcon)
              .child(S.document().schemaType('album').documentId('album')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['about', 'support', 'post', 'footerLinks', 'header', 'album'].includes(
                  `${listItem.getId()}`
                )
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

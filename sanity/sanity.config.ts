import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {UserIcon, LinkIcon, BlockContentIcon, HeartFilledIcon, ImageIcon} from '@sanity/icons'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

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
              .title('Shared - Header')
              .icon(ImageIcon)
              .child(S.document().schemaType('header').documentId('header')),
            S.listItem()
              .title('Shared - Footer')
              .icon(LinkIcon)
              .child(S.document().schemaType('footer').documentId('footer')),
            S.listItem()
              .title('Main Page')
              .icon(UserIcon)
              .child(S.document().schemaType('mainPage').documentId('mainPage')),
            S.listItem()
              .title('Minecraft Page')
              .icon(UserIcon)
              .child(S.document().schemaType('minecraftPage').documentId('minecraftPage')),
            S.listItem()
              .title('Support Page')
              .icon(HeartFilledIcon)
              .child(S.document().schemaType('supportPage').documentId('supportPage')),
            S.listItem()
              .title('Album Page')
              .icon(BlockContentIcon)
              .child(S.document().schemaType('albumPage').documentId('albumPage')),
            S.listItem()
              .title('Magazine Page')
              .icon(BlockContentIcon)
              .child(S.document().schemaType('magazinePage').documentId('magazinePage')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'mainPage',
                  'supportPage',
                  'footer',
                  'header',
                  'albumPage',
                  'minecraftPage',
                  'magazinePage',
                ].includes(`${listItem.getId()}`)
            ),
          ]),
    }),
    vercelDeployTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

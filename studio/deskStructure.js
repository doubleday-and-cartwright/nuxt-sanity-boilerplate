/*
  This file is used to structure the layout of the Sanity CMS.
*/

import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .child(
                  S.editor()
                    .title('General Settings')
                    .id('settingsGeneral')
                    .schemaType('settingsGeneral')
                ),
              S.listItem()
                .title('Footer Settings')
                .child(
                  S.editor()
                    .title('Footer Settings')
                    .id('settingsFooter')
                    .schemaType('settingsFooter')
                )
            ])
        ),
      // Load all other items not specifically listed
      ...S.documentTypeListItems().filter(listItem => ![
        // Filter redundant desk items here
        'settingsGeneral',
        'settingsFooter'
      ].includes(listItem.getId()))
    ])
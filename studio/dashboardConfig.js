export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612cb34e14147c9e472db888',
                  title: 'Sanity Studio',
                  name: 'teesmugsgifts-landing-pages-studio',
                  apiId: 'd12349ff-3fed-4ab2-a409-b54d94ba962f'
                },
                {
                  buildHookId: '612cb34ef76d1ca854c42a19',
                  title: 'Landing pages Website',
                  name: 'teesmugsgifts-landing-pages',
                  apiId: '26703cb6-f97c-4e87-861a-305dd3c4c684'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/christianfioravanti/TeesMugsGifts-Landing-Pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://teesmugsgifts-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

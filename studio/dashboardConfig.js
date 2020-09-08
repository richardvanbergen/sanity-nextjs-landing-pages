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
                  buildHookId: '5f56de7790670f8d6c5c5890',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kk35fuuo',
                  apiId: 'f2ad009b-1759-420f-b97a-c9ba76193c13'
                },
                {
                  buildHookId: '5f56de77e700ee5d1a5e9ef9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6uvtqte6',
                  apiId: '2fa78324-bc64-42cf-83d7-0fe52483c216'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richardvanbergen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6uvtqte6.netlify.app', category: 'apps'}
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

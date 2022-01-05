export default {
  widgets: [
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
                  buildHookId: '61d5b5d0fe1fba69b8062841',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-98a9g6p7',
                  apiId: '180d9a67-799c-485a-9b1a-cdcca3f2f7fc'
                },
                {
                  buildHookId: '61d5b5d159add35b482e4b14',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zdt41xsh',
                  apiId: 'b0399a31-2ce8-4bf6-b4ca-1749b5df7fcc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codyscott1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zdt41xsh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

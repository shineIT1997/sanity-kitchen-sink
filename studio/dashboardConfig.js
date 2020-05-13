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
                  buildHookId: '5ebc0d4d938b7b26593767e0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-18u1xotk',
                  apiId: 'd73b3ef7-551b-4aff-8e55-e4ceba8d8736'
                },
                {
                  buildHookId: '5ebc0d4dbbbe311df3b35c39',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nf3giv1d',
                  apiId: 'cc2945cc-1816-426b-b23e-8d0c913cd832'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shineIT1997/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nf3giv1d.netlify.app', category: 'apps'}
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

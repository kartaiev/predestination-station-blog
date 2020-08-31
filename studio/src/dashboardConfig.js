export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f4d0729d2823d45a4d7abc5',
                  title: 'Sanity Studio',
                  name: 'predestination-station-blog-studio',
                  apiId: '5e5790d2-f12a-4a0f-bc4a-96db465f2314'
                },
                {
                  buildHookId: '5f4d07290a569d3c5f3d7a6f',
                  title: 'Blog Website',
                  name: 'predestination-station-blog',
                  apiId: 'f306c17f-3758-4694-9c1a-5e514371901d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kartaiev/predestination-station-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://predestination-station-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

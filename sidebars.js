module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'Getting Started/welcome',
        'Getting Started/self_hosting',
        {
          'Setting up your Server': [
            'Getting Started/server_custom_prefix',
            'Getting Started/server_muterole',
            'Getting Started/custom_welcome_message',
            'Getting Started/custom_leave_message',
            'Getting Started/server_adverts'
          ]
        },
        {
          'Setting up your User Account': [
            'Getting Started/linking_to_MAL',
            'Getting Started/linking_to_AL'
          ]
        }
      ],
    },
    'Commands',
    {
      type: 'category',
      label: 'Features',
      collapsed: true,
      items: [
        'Features/Anischedule',
        'Features/XP_System',
        'Features/Economy'
      ]
    },
    {
      type: 'category',
      label: 'Data Privacy',
      collapsed: true,
      items: [
        'Data Privacy/Storing_Data',
        'Data Privacy/Handling_Data'
      ]
    }
  ],
};

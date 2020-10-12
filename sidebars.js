module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'Getting Started/welcome',
        {
          'Self Hosting': [
            'Getting Started/setting_up_your_bot',
            'Getting Started/modifying_the_bot',
            'Getting Started/faqs'
          ]
        },
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
      label: 'Data Privacy and Handling',
      collapsed: true,
      items: [
        'Data Privacy/Storing_Data',
        'Data Privacy/Handling_Data'
      ]
    },
    {
      type: 'category',
      label: 'Internal',
      collapsed: true,
      items: [
        'Internal/Classes',
        'Internal/Functions',
        'Internal/Models',
        'Internal/Data_Objects'
      ]
    }
  ],
};

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
        {
          Classes: [
            'Internal/Classes/Client',
            'Internal/Classes/CommandGroup',
            'Internal/Classes/CommandManager',
            'Internal/Classes/CommandRegister',
            'Internal/Classes/CooldownManager',
            'Internal/Classes/GuildSettingProfile',
            'Internal/Classes/GuildSettingsManager',
            'Internal/Classes/Mongoose',
            'Internal/Classes/Paginate',
            'Internal/Classes/PersonalizedCollection'
          ]
        },
          'Internal/Functions',
          'Internal/Models',
        {
          'Data Objects': [
            'Internal/Data Objects/client_config',
            'Internal/Data Objects/command_data',
            'Internal/Data Objects/cooldown_data',
            'Internal/Data Objects/goodbye_data',
            'Internal/Data Objects/guild_data_model',
            'Internal/Data Objects/guild_data_update_model',
            'Internal/Data Objects/guild_role_data',
            'Internal/Data Objects/guild_xp_settings',
            'Internal/Data Objects/message_count_data',
            'Internal/Data Objects/reload_status',
            'Internal/Data Objects/welcome_data'
          ]
        }
      ]
    }
  ],
};

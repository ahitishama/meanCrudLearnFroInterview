export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  {
    name: 'Master',
    url: '/master',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Customer',
        url: '/master/customer',
        icon: 'icon-people'
      },
      {
        name: 'Test',
        url: '/master/test',
        icon: 'icon-user'
      },
      {
        name: 'Contact',
        url: '/master/contact',
        icon: 'icon-user'
      },
      {
        name: 'Vehicle',
        url: '/master/vehicle',
        icon: 'icon-speedometer'
      },
      {
        name: 'product',
        url: '/master/product',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'service',
        url: '/master/service',
        icon: 'icon-settings'
      },
      {
        name: 'vehiclemake',
        url: '/master/vehiclemake',
        icon: 'icon-wrench'
      },
      {
        name: 'Vehiclemodel',
        url: '/master/Vehiclemodel',
        icon: 'icon-globe'
      },
      {
        name: 'vehicletype',
        url: '/master/vehicletype',
        icon: 'icon-options'
      },
      {
        name: 'enginetype',
        url: '/master/enginetype',
        icon: 'icon-puzzle'
      },
      {
        name: 'dealer',
        url: '/master/dealer',
        icon: 'icon-speech'
      },
      {
        name: 'insurance',
        url: '/master/insurance',
        icon: 'icon-briefcase'
      },

    ]
  },
  {
    name: 'User Mangement',
    url: '/user',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Role',
        url: '/user/role',
        icon: 'icon-cursor'
      },
      {
        name: 'Module',
        url: '/module/module',
        icon: 'icon-cursor'
      },
      {
        name: 'Control',
        url: '/control/control',
        icon: 'icon-cursor'
      },
    ]
  },
];


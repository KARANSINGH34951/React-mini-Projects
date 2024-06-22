import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Online Ordering',
      description: 'Allow customers to browse your menu and place orders directly from your website.',
      icon: '📱',
    },
    {
      title: 'Delivery Services',
      description: 'Provide reliable delivery options to ensure your food reaches customers promptly.',
      icon: '🚚',
    },
    {
      title: 'Menu Customization',
      description: 'Customize your menu easily to showcase specials, new dishes, and seasonal offerings.',
      icon: '🍽️',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 py-20 px-20 w-full'>
      {services.map((service, index) => (
        <div key={index} className='flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4'>
          <div className='text-4xl mb-4'>{service.icon}</div>
          <h2 className='text-xl font-bold mb-2'>{service.title}</h2>
          <p className='text-center'>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
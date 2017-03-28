import React from 'react';

export default {

  path: '/dashboard/docs',

  async action() {
    const Home = await new Promise((resolve) => {
      require.ensure([], (require) => {
        resolve(require('./Docs').default);
      }, 'home');
    });
    return <Home key={'home'} />;
  },

};

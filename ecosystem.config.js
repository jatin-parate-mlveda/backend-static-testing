module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm',
      args: 'run start',
      env_production: {
        NODE_ENV: 'production',
      },
      env_local: {
        NODE_ENV: 'local',
      },
    },
  ],
};

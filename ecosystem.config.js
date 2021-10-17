module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm',
      args: 'run start',
      kill_timeout: 3000,
      wait_ready: true,
      env_production: {
        NODE_ENV: 'production',
      },
      env_local: {
        NODE_ENV: 'local',
      },
    },
  ],
};

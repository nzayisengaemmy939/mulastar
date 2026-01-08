module.exports = {
  apps: [
    {
      name: 'mula-star-prod',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'production',
      },
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: '500M',
    },
  ],
}


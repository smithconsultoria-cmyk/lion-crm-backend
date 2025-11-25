module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({ 
    message: '🦁 Lion CRM API v1.0',
    status: 'online',
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: {
        login: '/api/auth/login',
        register: '/api/auth/register'
      }
    }
  });
};

const axios = require('axios');

const ASAAS_API_KEY = process.env.ASAAS_API_KEY;
const ASAAS_BASE_URL = 'https://www.asaas.com/api/v3';

const asaasAPI = axios.create({
  baseURL: ASAAS_BASE_URL,
  headers: {
    'access_token': ASAAS_API_KEY,
    'Content-Type': 'application/json'
  }
});

const createCustomer = async (userData) => {
  try {
    const response = await asaasAPI.post('/customers', {
      name: userData.name,
      email: userData.email,
      cpfCnpj: userData.cpf,
      mobilePhone: userData.phone
    });
    return response.data;
  } catch (error) {
    console.error('ASAAS error:', error.response?.data);
    throw error;
  }
};

const createSubscription = async (customerId, plan) => {
  const plans = {
    basic: { value: 49.00, description: 'Plano Basic' },
    premium: { value: 97.00, description: 'Plano Premium' }
  };

  const planData = plans[plan];
  
  try {
    const response = await asaasAPI.post('/subscriptions', {
      customer: customerId,
      billingType: 'CREDIT_CARD',
      value: planData.value,
      cycle: 'MONTHLY',
      description: planData.description
    });
    return response.data;
  } catch (error) {
    console.error('ASAAS error:', error.response?.data);
    throw error;
  }
};

module.exports = {
  createCustomer,
  createSubscription
};
```

4. **Commit changes**

---

## 🎉 **PRONTO! TODOS OS ARQUIVOS CRIADOS!**

Agora a estrutura deve estar assim:
```
lion-crm-backend/
├── api/
│   ├── index.js ✅
│   └── auth/
│       ├── login.js ✅
│       └── register.js ✅
├── lib/
│   ├── db.js ✅
│   ├── auth.js ✅
│   └── asaas.js ✅
├── package.json ✅
└── vercel.json ✅

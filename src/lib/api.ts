// Configuración de la API
const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:4000';

// Cliente HTTP básico
export const api = {
  async get(endpoint: string) {
    const response = await fetch(`${API_URL}/api${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },

  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_URL}/api${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },
};

// Funciones de la API
export const apiClient = {
  // Productos
  getProducts: () => api.get('/products'),
  getProduct: (slug: string) => api.get(`/products/${slug}`),

  // Órdenes
  createOrder: (data: any) => api.post('/orders', data),
  getOrder: (id: string) => api.get(`/orders/${id}`),
};

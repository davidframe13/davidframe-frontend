import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar mensajes de error/éxito al escribir
    if (formState.isError || formState.isSuccess) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
      });
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    if (!formData.name.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Por favor ingresa tu nombre',
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Por favor ingresa un email válido',
      });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Por favor ingresa un mensaje (mínimo 10 caracteres)',
      });
      return;
    }

    // Enviar formulario
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: '',
    });

    try {
      // TODO: Implementar envío real del formulario
      // Por ahora simulamos un delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simular éxito
      console.log('Formulario enviado:', formData);

      setFormState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        errorMessage: '',
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormState({
          isSubmitting: false,
          isSuccess: false,
          isError: false,
          errorMessage: '',
        });
      }, 5000);
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Hubo un error al enviar el mensaje. Intenta de nuevo.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Grid de Nombre y Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            disabled={formState.isSubmitting}
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu email"
            className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            disabled={formState.isSubmitting}
          />
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
          rows={6}
          className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          disabled={formState.isSubmitting}
        />
      </div>

      {/* Mensajes de estado */}
      {formState.isError && (
        <div className="px-4 py-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm">
          {formState.errorMessage}
        </div>
      )}

      {formState.isSuccess && (
        <div className="px-4 py-3 bg-success/10 border border-success/20 rounded-lg text-success text-sm">
          ¡Mensaje enviado con éxito! Te responderé pronto.
        </div>
      )}

      {/* Botón Submit */}
      <div>
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </div>
    </form>
  );
}

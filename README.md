# AI Car Finder 🚗🤖

Aplicación que permite buscar vehículos usando lenguaje natural. 
Utiliza IA para interpretar la intención del usuario y devolver 
recomendaciones personalizadas.

## 🚀 Características

- 🔍 Búsqueda con lenguaje natural
- 🤖 Interpretación de filtros con IA
- 🧠 Recomendaciones personalizadas
- ⚡ Resultados rápidos con filtros dinámicos

## 🛠️ Tecnologías
- Frontend: React + Vite + Tailwind  
- Backend: Laravel  
- IA: Groq API 
- Base de datos: MySQL

## 🧠 Cómo funciona

1. El usuario escribe una búsqueda (ej: "Auto fácil de estacionar")
2. La IA convierte el texto en filtros estructurados (JSON)
3. El backend aplica filtros dinámicos sobre la base de datos
4. Se retornan los autos más relevantes
5. La IA genera una recomendación personalizada

## 📷 Screenshot

![Imagen demostrativa](./src/assets/image1.png)

## 🧠 Decisiones técnicas

- Se normalizaron los features a minúsculas para evitar inconsistencias
- Se utilizó whereJsonContains para filtros dinámicos
- Se optimizó el uso de IA evitando llamadas innecesarias

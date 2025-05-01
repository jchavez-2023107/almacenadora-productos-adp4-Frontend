# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Guía rápida para desarrolladores

### 1. Clonar y entrar en la carpeta

```bash
git clone https://github.com/jchavez-2023107/almacenadora-productos-adp4-Frontend.git
cd almacenadora-productos-adp4-Frontend
```

### 2. Crear y sincronizar la rama develop

```bash
git checkout -b develop
git push -u origin develop
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Levantar la aplicación en modo desarrollo

```bash
npm run dev
```

Abran http://localhost:5173 en su navegador.

### 5. Creen su rama de trabajo personal Ej. jchavez-2023107

```bash
git switch develop
git pull
git switch -c <su_usuario>
```

### 6. Implementar su trabajo bien hecho

Trabajen en la carpeta correspondiente (src/components, src/pages, src/services, etc.).

Asegúrense de que el proyecto arranque sin errores.

### 7. Preparar tu Pull Request

```bash
git add .
git commit -m "feat: descripción breve de lo implementado"
git push origin <su_usuario>
```

### 8. Luego en GitHub:

1. Ve a Pull requests → New pull request
2. Base branch: develop
3. Compare branch: <tu_usuario>
4. Título: feats: <breve título de lo trabajado>
5. Describe qué has implementado y a qué Historia de Usuario corresponde.
6. Asigna a un compañero para revisión y crea el PR.
7. Avisa para poder hacer merge con la rama develop por favor.

¡Gracias!

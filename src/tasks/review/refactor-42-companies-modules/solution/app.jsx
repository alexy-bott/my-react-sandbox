import { createRoot } from 'react-dom/client';
import Root from './root';

// Точка входа исходного приложения при использовании React проекта.
createRoot(document.querySelector('#app')).render(<Root />);

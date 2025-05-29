import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Пути к файлам - проверяем разные возможные местоположения
const possibleSources = [
  path.join(__dirname, '..', 'out', 'index.html'),
  path.join(__dirname, '..', '.next', 'server', 'app', 'index.html'),
];

const targetFile = path.join(__dirname, '..', 'index.html');

try {
  let sourceFile = null;
  
  // Ищем index.html в возможных местах
  for (const possibleSource of possibleSources) {
    if (fs.existsSync(possibleSource)) {
      sourceFile = possibleSource;
      break;
    }
  }
  
  if (sourceFile) {
    // Копируем index.html в корень
    fs.copyFileSync(sourceFile, targetFile);
    console.log('✅ index.html скопирован в корневую папку');
    console.log(`📁 Источник: ${sourceFile}`);
    console.log(`📁 Назначение: ${targetFile}`);
  } else {
    console.error('❌ Файл index.html не найден в:');
    possibleSources.forEach(src => console.log(`   - ${src}`));
    console.log('Сначала выполните: npm run build');
  }
} catch (error) {
  console.error('❌ Ошибка копирования:', error.message);
} 
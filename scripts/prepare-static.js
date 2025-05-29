import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для временного переименования API папки
function prepareForStatic() {
  const apiPath = path.join(__dirname, '..', 'app', 'api');
  const apiBackupPath = path.join(__dirname, '..', 'app', 'api_backup');
  
  try {
    if (fs.existsSync(apiPath)) {
      // Переименовываем api в api_backup
      fs.renameSync(apiPath, apiBackupPath);
      console.log('✅ API папка временно отключена для статического экспорта');
    } else {
      console.log('ℹ️ API папка уже отключена');
    }
  } catch (error) {
    console.error('❌ Ошибка подготовки:', error.message);
  }
}

// Функция для восстановления API папки
function restoreAPI() {
  const apiPath = path.join(__dirname, '..', 'app', 'api');
  const apiBackupPath = path.join(__dirname, '..', 'app', 'api_backup');
  
  try {
    if (fs.existsSync(apiBackupPath)) {
      // Восстанавливаем api из api_backup
      fs.renameSync(apiBackupPath, apiPath);
      console.log('✅ API папка восстановлена');
    } else {
      console.log('ℹ️ Нет резервной копии API для восстановления');
    }
  } catch (error) {
    console.error('❌ Ошибка восстановления:', error.message);
  }
}

// Определяем действие по аргументу
const action = process.argv[2];

if (action === 'prepare') {
  prepareForStatic();
} else if (action === 'restore') {
  restoreAPI();
} else {
  console.log('Использование:');
  console.log('node scripts/prepare-static.js prepare  # Отключить API');
  console.log('node scripts/prepare-static.js restore  # Восстановить API');
} 
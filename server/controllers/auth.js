import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../config/db.js';

// Проверка переменных окружения
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in .env file');
}

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const SALT_ROUNDS = 10;
/**
 * Регистрация нового пользователя
 */
export const register = async (userData) => {
  const {
    username,
    email,
    password,
    firstName = null,
    lastName = null,
    phone = null,
    birthDate = null,
    childBirthDate = null,
    telegramUsername = null
  } = userData;

  // Проверка существующих пользователей
  const existingUsers = await pool.query(
    `SELECT email, username FROM users 
     WHERE email = $1 OR username = $2`,
    [email, username]
  );

  // Формирование ошибок
  const errors = {};
  existingUsers.rows.forEach(user => {
    if (user.email === email) errors.email = 'Email уже используется';
    if (user.username === username) errors.username = 'Username уже используется';
  });

  if (Object.keys(errors).length > 0) {
    throw new Error(JSON.stringify(errors));
  }

  // Хеширование пароля
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Расчет скидки
  const discount = childBirthDate ? 5 : 0;

  // Создание пользователя
  const result = await pool.query(
    `INSERT INTO users (
      username, email, password_hash,
      first_name, last_name, phone,
      birth_date, child_birth_date, telegram_username,
      discount
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING 
      id, username, email, first_name, last_name, phone,
      birth_date, child_birth_date, telegram_username, discount, created_at`,
    [
      username,
      email,
      hashedPassword,
      firstName,
      lastName,
      phone,
      birthDate,
      childBirthDate,
      telegramUsername,
      discount
    ]
  );

  // Генерация токена
  const token = generateToken(result.rows[0].id);

  return {
    user: result.rows[0],
    token
  };
};

/**
 * Аутентификация пользователя
 */
export const login = async (login, password) => {
  // Поиск пользователя
  const result = await pool.query(
    `SELECT 
      id, username, email, password_hash,
      first_name, last_name, phone,
      birth_date, child_birth_date, telegram_username,
      discount, created_at
     FROM users 
     WHERE email = $1 OR username = $1`,
    [login]
  );

  if (result.rows.length === 0) {
    throw new Error('Пользователь не найден');
  }

  const user = result.rows[0];

  // Проверка пароля
  const isPasswordValid = await bcrypt.compare(password, user.password_hash);
  if (!isPasswordValid) {
    throw new Error('Неверный пароль');
  }

  // Удаляем хеш пароля из объекта пользователя
  const { password_hash, ...userData } = user;

  // Генерация токена
  const token = generateToken(user.id);

  return {
    user: userData,
    token
  };
};

/**
 * Проверка доступности email
 */
export const checkEmail = async (email) => {
  const result = await pool.query(
    'SELECT 1 FROM users WHERE email = $1',
    [email]
  );
  return { available: result.rows.length === 0 };
};

/**
 * Проверка доступности username
 */
export const checkUsername = async (username) => {
  const result = await pool.query(
    'SELECT 1 FROM users WHERE username = $1',
    [username]
  );
  return { available: result.rows.length === 0 };
};

/**
 * Генерация JWT токена
 */
const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};
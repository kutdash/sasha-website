// Site-wide configuration. Update links here, they propagate everywhere.

export const SITE = {
  title: 'Путь видеографа — by Sasha Burtasova',
  description:
    'Двухмесячный курс по видеографии: с нуля до первых клиентов и стабильного дохода. Старт 10 марта 2026.',
  url: 'https://sasha-burtasova.ru',
  startDate: '6 июля 2026',
  duration: '2 месяца',
};

export const SOCIALS = {
  instagram: 'https://instagram.com/sasha.burtasova',
  telegram: 'https://t.me/sasha_burtasova',
  email: 'hello@sasha-burtasova.ru',
};

// Payment / checkout links — replace with real checkout URLs (ЮKassa / Tinkoff / GetCourse / etc.)
export const CHECKOUT = {
  personal: SOCIALS.telegram, // SOLD — TG для записи в лист ожидания
  group: SOCIALS.telegram, // TODO: replace with group tariff checkout URL
  selfpaced: SOCIALS.telegram, // TODO: replace with self-paced tariff checkout URL
  generic: SOCIALS.telegram, // CTA в hero и т.д.
};

export const TARIFFS = [
  {
    id: 'personal',
    name: 'Личный',
    tagline: 'Если нужна опора и быстрый результат',
    price: '149 900 ₽',
    priceUsd: '2 000 $',
    oldPrice: '164 900 ₽',
    seats: '0 из 6 мест',
    sold: true,
    features: [
      'Личная работа с Сашей',
      'Связь в личном чате 24/7',
      '2 онлайн-встречи с Сашей',
      '3 групповых встречи-разбора',
      'Воркшоп сопровождение',
      'Воркшоп по продажам',
      'Домашние задания',
      'Обратная связь по каждому вопросу',
      'Месяц поддержки в чате после',
      '31 урок в записи',
      'Упакованное портфолио как дипломная работа',
      'Доступ к материалам на 6 месяцев',
    ],
    checkout: CHECKOUT.personal,
    cta: 'Лист ожидания',
  },
  {
    id: 'group',
    name: 'Групповой',
    tagline: 'Если важен результат, обратная связь и движение в группе',
    price: '99 900 ₽',
    priceUsd: '1 300 $',
    oldPrice: '109 900 ₽',
    seats: '2 из 10 мест',
    sold: false,
    highlighted: true,
    features: [
      'Работа в группе',
      '3 групповых встречи-разбора с Сашей',
      'Воркшоп по продажам',
      'Домашние задания',
      'Отработка материала на практике',
      'Обратная связь куратора и Саши 24/7',
      'Месяц поддержки после обучения',
      '31 урок в записи',
      'Готовое портфолио как дипломная работа',
      'Доступ к материалам на 3 месяца',
    ],
    checkout: CHECKOUT.group,
    cta: 'Купить',
  },
  {
    id: 'selfpaced',
    name: 'Самостоятельный',
    tagline: 'Если хочешь пройти программу в своём темпе',
    price: '34 900 ₽',
    priceUsd: '460 $',
    oldPrice: '49 900 ₽',
    sold: false,
    features: [
      'Доступ к материалам на 3 месяца',
      'Пошаговая система уроков',
      '31 урок в записи',
      'Домашние задания для самостоятельной практики',
      'Самостоятельная сборка портфолио по инструкции',
      'Персональные ответы Саши на 5 ваших вопросов',
      'Поддержка куратора по орг. вопросам',
    ],
    note: 'В тариф не входят воркшопы, созвоны, групповые разборы и сопровождение',
    checkout: CHECKOUT.selfpaced,
    cta: 'Купить',
  },
];

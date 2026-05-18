// Site-wide configuration. Update links here, they propagate everywhere.

export const SITE = {
  title: 'Путь видеографа — by Sasha Burtasova',
  description:
    'Двухмесячный курс по видеографии: с нуля до первых клиентов и стабильного дохода. Старт 6 июля 2026.',
  url: 'https://sasha-burtasova.ru',
  startDate: '6 июля 2026',
  duration: '2 месяца',
  discountEndDate: '28 июня 2026',
};

export const OUTCOMES = [
  {
    headline: '5 видео',
    title: 'упакованное портфолио',
    description:
      'снимем и смонтируем 5 коммерческих видео, которые наполнят портфолио и приведут первых клиентов',
  },
  {
    headline: '20+ заявок',
    title: 'воркшоп по продажам',
    description:
      'разберём 3 схемы поиска клиентов и сгенерируем 20+ заявок в режиме реального времени',
  },
  {
    headline: 'под ключ',
    title: 'продюсирование съёмки',
    description:
      'от поиска бренда и мудборда до сценария и курирования съёмки — пройдём все этапы для true-бренда',
  },
  {
    headline: 'gpt + видео',
    title: 'работа с ии',
    description:
      'gpt как ассистент и креативный директор, генерация роликов с ии и промпты под видеографа',
  },
  {
    headline: 'твой днк',
    title: 'продающий блог',
    description:
      'найдём твой стиль, упакуем визуал и шапку, начнём делать рилс, которые приводят клиентов',
  },
];

export const REELS = [
  {
    id: 'reel-1',
    cover: '/images/reels/reel-1.jpg',
    url: 'https://www.instagram.com/reel/DRY5yk3iPff/',
    views: '177K',
  },
  {
    id: 'reel-2',
    cover: '/images/reels/reel-2.jpg',
    url: 'https://www.instagram.com/reel/DO8cDIGiMsC/',
    views: '42.9K',
  },
  {
    id: 'reel-3',
    cover: '/images/reels/reel-3.jpg',
    url: 'https://www.instagram.com/reel/DSAFRiSiJdW/',
    views: '101K',
  },
];

export const CASES = [
  {
    id: 'natasha',
    name: 'Наташа',
    handle: '@by.suhorukova',
    handleUrl: 'https://instagram.com/by.suhorukova',
    avatar: '/images/cases/natasha.jpg',
    hookStat: 'доход 60-100к → 150к+ ₽/мес',
    before: [
      'съёмка рилс свадеб',
      'нет клиентов из инсты',
      'низкий чек',
    ],
    after: [
      '2-3 запроса в день',
      '30+ дат забронировано',
      'подписчики x2',
      'прайс x2',
    ],
    quote: 'Твой курс дал мне спокойствие, что работу можно всегда найти',
  },
  {
    id: 'olesya',
    name: 'Олеся',
    handle: '@lesya_swan_',
    handleUrl: 'https://instagram.com/lesya_swan_',
    avatar: '/images/cases/olesya.jpg',
    hookStat: 'доход 100к → 350к+ ₽/мес',
    before: [
      '3 года в СММ',
      'снимала на телефон',
      'потолок 2 клиента в месяц',
    ],
    after: [
      'чек 75к на первых свадьбах',
      '5 свадеб в сезон',
      '+2000 подписчиков с одного Reels',
      'клиенты приходят из инстаграма',
    ],
    quote: 'Я поменяла сферу деятельности и стала работать сама на себя',
  },
  {
    id: 'karina',
    name: 'Карина',
    handle: '@karina_gul_',
    handleUrl: 'https://instagram.com/karina_gul_',
    avatar: '/images/cases/karina.jpg',
    hookStat: 'найм 5/2 → свободный график',
    before: [
      'найм 5/2',
      'снимала бесплатно на телефон',
    ],
    after: [
      'ушла из найма',
      'запросы на съёмки каждый день',
      '7 свадебных проектов забронировано',
      'первый чек 80к ещё на обучении',
    ],
    quote: 'На этапе обучения уже стали поступать заказы — огромная мотивация',
  },
  {
    id: 'lilya',
    name: 'Лиля',
    handle: '@lilya_dosmukhamedova',
    handleUrl: 'https://instagram.com/lilya_dosmukhamedova',
    avatar: '/images/cases/lilya.jpg',
    hookStat: 'офис 24/7 → 137к ₽ в августе',
    before: [
      'СММ в офисе 24/7',
      'монтировала в CapCut',
      'зарплата 75к',
    ],
    after: [
      'первый клиент ещё до старта курса',
      'ушла с работы во время обучения',
      'рекорд 137к в августе',
      'работает 4-5 часов из любой точки',
    ],
    quote: 'Уже не представляю себя в офисе',
  },
];

export const MODULES = [
  {
    title: 'самоорганизация',
    description: 'основы тайм-менеджмента и привычка работать стабильно',
  },
  {
    title: 'основы съёмки и монтажа',
    description: 'настройки камеры, монтаж с нуля в Adobe Premiere Pro, фишки съёмки и монтажа',
  },
  {
    title: 'упаковка блога',
    description: 'шапка, визуал, аватарка, хештеги, рилс',
  },
  {
    title: 'основы продаж',
    description: 'создание офферов, отработка возражений, поиск клиентов · воркшоп по продажам',
  },
  {
    title: 'наработка портфолио',
    description: 'воркшоп-сопровождение и монтаж из моих исходников для личного тарифа',
  },
  {
    title: 'основы продюсирования',
    description: 'как делать съёмки под ключ',
  },
  {
    title: 'дополнительные уроки от спикеров',
    description: 'свет, стилистика, фото',
  },
  {
    title: 'работа с ИИ',
    description: 'GPT, генерация роликов с ИИ, эффективные промпты',
    isNew: true,
  },
];

export const SOCIALS = {
  instagram: 'https://instagram.com/sasha.burtasova',
  telegram: 'https://t.me/burtasovasasha',
  email: 'alexanyarain@gmail.com',
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
    id: 'selfpaced',
    name: 'Самостоятельный',
    tagline: 'Если хочешь пройти программу в своём темпе',
    price: '38 900 ₽',
    priceUsd: '510 $',
    oldPrice: '49 900 ₽',
    seats: '20+ мест',
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
  {
    id: 'group',
    name: 'Групповой',
    tagline: 'Если важен результат, обратная связь и движение в группе',
    price: '99 900 ₽',
    priceUsd: '1 300 $',
    oldPrice: '129 900 ₽',
    seats: '15 мест',
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
    id: 'personal',
    name: 'Личный',
    tagline: 'Если нужна опора и быстрый результат',
    price: '169 900 ₽',
    priceUsd: '2 250 $',
    oldPrice: '209 900 ₽',
    seats: '8 мест',
    sold: false,
    chip: 'максимум поддержки',
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
    cta: 'Купить',
  },
];

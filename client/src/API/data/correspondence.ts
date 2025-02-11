export interface CorrespondenceScheme {
  id: number;
  incomingNumber: string;
  sender: string;
  topic: string;
  dateReceived: string;
  status: string;
  term: string;
  file: string;
}

export const correspondence: CorrespondenceScheme[] = [
  {
    id: 1,
    incomingNumber: "ВИ-4126",
    sender: "Чамоати дехоти Пунук",
    topic: "Ивази рохбари МБ",
    dateReceived: "22.01.2025 09:00",
    status: "На резолюции",
    term: "24.01.2025",
    file: "Документ.pdf",
  },
  {
    id: 2,
    incomingNumber: "ВИ-4127",
    sender: "ООО 'Прогресс Трейд'",
    topic: "Запрос коммерческого предложения",
    dateReceived: "22.01.2025 11:30",
    status: "На резолюции",
    term: "25.01.2025",
    file: "Запрос_Прогресс.pdf",
  },
  {
    id: 3,
    incomingNumber: "ВИ-4128",
    sender: "МУП 'Городское хозяйство'",
    topic: "Согласование сметы на ремонт",
    dateReceived: "23.01.2025 10:15",
    status: "На резолюции",
    term: "26.01.2025",
    file: "Смета_ремонт.pdf",
  },
  {
    id: 4,
    incomingNumber: "ВИ-4129",
    sender: "АО 'Инвестстрой'",
    topic: "Заключение договора на поставку материалов",
    dateReceived: "24.01.2025 14:00",
    status: "Завершено",
    term: "28.01.2025",
    file: "Договор_материалы.pdf",
  },
  {
    id: 5,
    incomingNumber: "ВИ-4130",
    sender: "ООО 'Глобал Логистик'",
    topic: "Рассмотрение претензии по поставке",
    dateReceived: "25.01.2025 12:45",
    status: "Завершено",
    term: "29.01.2025",
    file: "Претензия.pdf",
  },
  {
    id: 6,
    incomingNumber: "ВИ-4131",
    sender: "Министерство экономики",
    topic: "Проведение проверки деятельности",
    dateReceived: "26.01.2025 09:00",
    status: "Завершено",
    term: "30.01.2025",
    file: "Проверка_документ.pdf",
  },
  {
    id: 7,
    incomingNumber: "ВИ-4132",
    sender: "Чамоати дехоти Чорк",
    topic: "Запрос информации о выполнении плана",
    dateReceived: "27.01.2025 10:30",
    status: "Завершено",
    term: "29.01.2025",
    file: "Запрос_информация.pdf",
  },
];

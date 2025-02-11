export interface RequestScheme {
  id: number;
  reqType: string;
  applicant: string;
  organization: string;
  date: string;
  status: string;
}

export const request: RequestScheme[] = [
  {
    id: 1,
    reqType: "Смена главного бухгалтера",
    applicant: "Давлатов Парвиз",
    organization: "Мактаби тахсилоти миёнаи умумии №75",
    date: "10.02.2025",
    status: "Завершено",
  },
  {
    id: 2,
    reqType: "Смена руководителя",
    applicant: "Шоев Диловар",
    organization: "Мактаби тахсилоти миёнаи умумии №75",
    date: "11.02.2025",
    status: "Завершено",
  },
];

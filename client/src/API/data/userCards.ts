import directorImage from "../../assets/director.svg";
import accounterImage from "../../assets/accounter.svg";

export interface UserCardsScheme {
  name: string;
  role: string;
  image: string;
}

export const userCards: UserCardsScheme[] = [
  {
    name: "Шоев Диловар",
    role: "Директор",
    image: directorImage,
  },
  {
    name: "Давлатов Парвиз",
    role: "Главный бухгалтер",
    image: accounterImage,
  },
];

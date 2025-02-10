import { Button } from "@mui/material";
import "./Orgcard.css";

import { OrganizationScheme } from "../../API/services/organizations/OrganizationScheme";

export interface OrgProps {
	//   orgName: string;
	//   orgType: string;
	//   orgInn?: string;
	//   orglocation?: string;
	//   directorName?: string;
	//   directorInn?: string;
	//   directorPhone?: string;
	//   headAccountantName?: string;
	//   headAccountantInn?: string;
	//   headAccountantPhone?: string;
	data: OrganizationScheme;
}

const Orgcard: React.FC<OrgProps> = ({
	//   orgName,
	//   orgType,
	//   orgInn,
	//   orglocation,
	//   directorName,
	//   directorInn,
	//   directorPhone,
	//   headAccountantName,
	//   headAccountantInn,
	//   headAccountantPhone,
	data,
}) => {
	return (
		<>
			<div className="orgcard__content">
				<ul className="orgcard__list">
					{/* Левая карточка */}
					<li className="orgcard__item orgcard__item-left">
						<div className="orgcard__item-left-top">
							<h3 className="orgcard__item-left-title">{data?.name}</h3>
							<Button className="show-org-structure">Показать структуру</Button>
						</div>
						<div className="orgcard__item-left orgcard__item-left-center">
							{data?.orgType}
						</div>
						<ul className="orgcard__item-left-bottom">
							<li className="orgcard__item-left-item">
								<p>Тип</p>
								{data?.name}
							</li>
							<li className="orgcard__item-left-item">
								<p>Инн</p>
								{data?.address}
							</li>
							<li className="orgcard__item-left-item">
								<p>Адрес</p>
								{data?.address}
							</li>
						</ul>
					</li>

					{/* Правые карточки (директор и бухгалтер) */}
					<li className="orgcard__right-container">
						<li className="orgcard__item orgcard__item-right">
							<div className="orgcard__item-right-top">
								<h3 className="orgcard__item-right-title">
									Директор: Директор директоров
								</h3>
							</div>
							<ul className="orgcard__item-right-bottom">
								<div className="orgcard__item-right orgcard__item-right--nothover">
									<li className="orgcard__item-right-item">
										<p>ФИО</p>
										Директор директоров
									</li>
									<li className="orgcard__item-right-item">
										<p>Инн</p>
										ЛОКАЛЬНО ЧТО НИБУДЬ
									</li>
									<li className="orgcard__item-right-item">
										<p>Телефон</p>
										ЛОКАЛЬНО ЧТО НИБУДЬ
									</li>
								</div>
							</ul>
						</li>
						<li className="orgcard__item orgcard__item-right">
							<div className="orgcard__item-right-top">
								<h3 className="orgcard__item-right-title">
									Главный бухгалтер: Бухгалтер Бухгалтеров
								</h3>
							</div>
							<ul className="orgcard__item-right-bottom">
								<div className="orgcard__item-right orgcard__item-right--nothover">
									<li className="orgcard__item-right-item">
										<p>ФИО</p>
										ЛОКАЛЬНО ЧТО НИБУДЬ
									</li>
									<li className="orgcard__item-right-item">
										<p>Инн</p>
										ЛОКАЛЬНО ЧТО НИБУДЬ
									</li>
									<li className="orgcard__item-right-item">
										<p>Телефон</p>
										ЛОКАЛЬНО ЧТО НИБУДЬ
									</li>
								</div>
							</ul>
						</li>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Orgcard;

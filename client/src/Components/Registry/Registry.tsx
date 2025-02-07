import React from "react";
import "./Registry.css";
import { dataFilter } from "../../API/data/dataFilter";
import { OrganizationScheme } from "../../API/services/organizations/OrganizationScheme";
import { Link, useNavigate } from "react-router";

interface TProps {
  data: OrganizationScheme[];
}

const Registry = ({ data }: TProps) => {
  const headers = dataFilter
    .filter((e) => {
      return [
        "Номер списка",
        "Идентификатор",
        "Наименование",
        "ИНН организации",
        "Тип организации",
        "Статус",
      ].includes(e.title);
    })
    .map((e) => e.title);

  console.log(data);

  const rows = data.map((org: OrganizationScheme, index) => [
    org.id, // Добавляем id в начало строки, но не отображаем его
    index + 1, // Номер списка
    org.identificator, // Идентификатор
    org.name, // Наименование
    org.tax, // ИНН организации
    org.orgType, // Тип организации
    org.status, // Статус
  ]);

  return (
    <div className="flex-table">
      <div className="flex-table-header">
        {/* Заголовки */}
        {headers.map((headers, index) => {
          return (
            <p key={index} className="flex-header-item">
              {headers}
            </p>
          );
        })}
      </div>

      {/* Строки */}
      <div className="flex-table-body">
        {rows.map((row, rowIndex) => (
          <Link key={rowIndex} to={`show/${row[0]}`}>
            {" "}
            {/* Используем id для навигации */}
            <div className="flex-row">
              {row.slice(1).map(
                (
                  cell,
                  cellIndex // Пропускаем id, чтобы не отображать его в таблице
                ) => (
                  <div key={cellIndex} className="flex-cell">
                    <p
                      className={
                        cell === "Активный"
                          ? "active-status"
                          : cell === "Неактивный"
                          ? "inactive-status"
                          : ""
                      }
                    >
                      {cell}
                    </p>
                  </div>
                )
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Registry;

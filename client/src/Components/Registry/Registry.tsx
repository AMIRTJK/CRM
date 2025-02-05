import React from "react";
import "./Registry.css";
import { dataFilter } from "../../API/data/dataFilter";

const Registry = () => {
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

  const rows = [
    [
      "1",
      "432",
      "Организация №1",
      "150003418",
      "Бюджетная организация",
      "Активный",
    ],
    [
      "2",
      "123",
      "Организация №2",
      "123456789",
      "Коммерческая организация",
      "Неактивный",
    ],
    [
      "3",
      "789",
      "Организация №3",
      "987654321",
      "Министерство финансов",
      "Активный",
    ],
  ];

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
          <div key={rowIndex} className="flex-row">
            {row.map((cell, cellIndex) => (
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registry;

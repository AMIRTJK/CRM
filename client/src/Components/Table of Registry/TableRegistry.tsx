import React from "react";
import "./TableRegistry.css";

const TableRegistry = () => {
  return (
    <table className="table-registry">
      <thead>
        <tr>
          <th>№</th>
          <th>Идентификатор</th>
          <th>Наименование</th>
          <th>ИНН Организации</th>
          <th>Тип организации</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>7</td>
          <td>432</td>
          <td>Организация №1</td>
          <td>150003418</td>
          <td>Бюджетная организация</td>
          <td>Активный</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableRegistry;

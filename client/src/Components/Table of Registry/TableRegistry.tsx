import React from "react";
import "./TableRegistry.css";

const TableRegistry = () => {
  return (
    <table>
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
    </table>
  );
};

export default TableRegistry;

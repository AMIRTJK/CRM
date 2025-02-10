import React from "react";
import "./Registry.css";
import { dataFilter } from "../../API/data/dataFilter";
import { OrganizationScheme } from "../../API/services/organizations/OrganizationScheme";
import { Link, useLocation, useNavigate } from "react-router";

interface TProps {
  headersProps: string[];
  rowsProps: any;
  status: any;
}

const Registry = ({ headersProps, rowsProps, status }: TProps) => {
  const headers = headersProps;

  const rows = rowsProps;

  const location = useLocation();

  console.log(location);

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
        {rows?.map((row: any[], rowIndex: React.Key | null | undefined) => (
          <Link
            key={rowIndex}
            to={`${location.pathname === "/crm" ? `/crm/show/${row[0]}` : "#"}`}
          >
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
                        cell === status.active
                          ? "active-status"
                          : cell === status.inactive
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

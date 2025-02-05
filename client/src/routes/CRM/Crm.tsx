import React from "react";
import "./Crm.css";
import Filter from "../../components/Filter/Filter";
import { dataFilter } from "../../API/data/dataFilter";
import TableRegistry from "../../components/Table of Registry/TableRegistry";

const Crm = () => {
  return (
    <main className="submodule-crm">
      <section>
        <h1 className="module-title">Реестр</h1>
        <div className="panel-control">
          <Filter data={dataFilter} />
          <button>Добавить</button>
        </div>
      </section>
      <section>
        <div className="registry">
          <TableRegistry />
        </div>
      </section>
    </main>
  );
};

export default Crm;

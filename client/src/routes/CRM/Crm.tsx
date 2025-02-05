import React from "react";
import "./Crm.css";
import Filter from "../../components/Filter/Filter";
import { dataFilter } from "../../API/data/dataFilter";
import ListOrganization from "../../components/List of organization in Registry/ListOrganization";

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
          <ListOrganization />
        </div>
      </section>
    </main>
  );
};

export default Crm;

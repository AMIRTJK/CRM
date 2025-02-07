import React from "react";
import "./Crm.css";
import Filter from "../../components/Filter/Filter";
import { dataFilter } from "../../API/data/dataFilter";
import Registry from "../../components/Registry/Registry";
import { Link } from "react-router";

const Crm = () => {
  return (
    <main className="submodule-crm">
      <section>
        <h1 className="module-title">Реестр</h1>
        <div className="panel-control-filter">
          <Filter data={dataFilter} />
          <Link to="/crm/create">
            <button>Добавить</button>
          </Link>
        </div>
      </section>
      <section>
        <Registry />
      </section>
    </main>
  );
};

export default Crm;

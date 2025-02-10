import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOrganizations } from "../../../API/services/organizations/getOrganizations";
import { queryClient } from "../../../API/hooks/queryClient";
import { OrganizationScheme } from "../../../API/services/organizations/OrganizationScheme";
import { getOrganizationById } from "../../../API/services/organizations/getOrganizationById";
import PanelControl from "../../../UI/Panel Control/PanelControl";
import "./ShowCRM.css";
import TitleSection from "../../../UI/Title of Section/TitleSection";
import CardOrganization from "../../../UI/Card of Organization/CardOrganization";
import Orgcard from "../../Orgcard/Orgcard";

const ShowCRM = () => {
  const { id: orgId } = useParams();

  const getOrganizationsQuery = useQuery(
    {
      queryFn: () => getOrganizationById(orgId),
      queryKey: [`organizations-${orgId}`],
    },
    queryClient
  );

  const [organizationsById, setOrganizationsById] =
    useState<OrganizationScheme | null>(null);

  useEffect(() => {
    if (getOrganizationsQuery.status === "success") {
      setOrganizationsById(getOrganizationsQuery.data);
    } else if (getOrganizationsQuery.status === "error") {
      console.error(getOrganizationsQuery.error);
    }
  }, [getOrganizationsQuery]);

  return (
    <main className="show-crm">
      <TitleSection title={organizationsById?.name} />
      <PanelControl editButtonState={false} saveButtonState={true} />
      <TitleSection title="Карточка организации" />
      <section>
        {/* <CardOrganization item={organizationsById} /> */}
        <Orgcard
          orgName="km"
          orgType="bo"
          orgInn="1123"
          orglocation="испечак 2"
          directorName="km"
          headAccountantName="km"
        />
      </section>
      <TitleSection title="Данные по модулям" />
      <section></section>
    </main>
  );
};

export default ShowCRM;

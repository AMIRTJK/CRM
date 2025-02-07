import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOrganizations } from "../../../API/services/organizations/getOrganizations";
import { queryClient } from "../../../API/hooks/queryClient";
import { OrganizationScheme } from "../../../API/services/organizations/OrganizationScheme";

const ShowCRM = () => {
  const { id: orgId } = useParams();

  const getOrganizationsQuery = useQuery(
    {
      queryFn: () => getOrganizations(orgId),
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

  console.log(organizationsById);

  return <div>{orgId}</div>;
};

export default ShowCRM;

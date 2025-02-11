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
import Registry from "../../../components/Registry/Registry";
import { dataFilter } from "../../../API/data/dataFilter";
import OrganizationCard from "../../../components/Card/Organization Card/OrganizationCard";
import UserCard from "../../../components/Card/User Card/UserCard";
import { userCards } from "../../../API/data/userCards";
import Input from "../../../UI/Input/Input";
import { useForm } from "react-hook-form";
import DatePickerUI from "../../../UI/Date Picker/DatePickerUI";
import SelectUI from "../../../UI/Select/SelectUI";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  correspondence,
  CorrespondenceScheme,
} from "../../../API/data/correspondence";
import { request, RequestScheme } from "../../../API/data/request";
import InputFile from "../../../components/File Service/File Service Input File/InputFile";

import FileList from "../../../components/File Service/File Service File List/FileList";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import Grid3x3OutlinedIcon from "@mui/icons-material/Grid3x3Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";

const ShowCRM = () => {
  const { id: orgId } = useParams();

  const getOrganizationsQuery = useQuery(
    {
      queryFn: () => getOrganizationById(orgId ? orgId : 0),
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

  const isActive = true;

  const [modulesTabs, setModulesTabs] = useState([
    { id: 1, item: "Корреспонденция", status: true },
    { id: 2, item: "Заявки", status: false },
    { id: 3, item: "Государственные услуги", status: false },
  ]);

  const handleChangeStatus = (item) => {
    setModulesTabs((prevTabs) =>
      prevTabs
        .map((e) => {
          if (e.status) {
            return { ...e, status: false }; // Сбрасываем статус активной вкладки
          }
          return e;
        })
        .map((e) => {
          if (e.id === item.id) {
            return { ...e, status: true }; // Устанавливаем статус активной вкладки
          }
          return e;
        })
    );
  };

  const currentModulesTab = modulesTabs.find((e) => e.status);

  const correspondenceHeaders = [
    "Номер списка",
    "Входящий номер",
    "Отправитель",
    "Тема",
    "Дата получение",
    "Статус",
    "Срок",
    "Файл",
  ];

  const requestHeaders = [
    "Номер списка",
    "Тип заявки",
    "Заявитель",
    "Организация",
    "Дата",
    "Статус",
  ];

  const headers =
    currentModulesTab?.item === "Корреспонденция"
      ? correspondenceHeaders
      : currentModulesTab?.item === "Заявки"
      ? requestHeaders
      : [];

  const handleCurrentRow = (
    correspondenceRow: CorrespondenceScheme[],
    requestRow: RequestScheme[]
  ) => {
    for (let element of modulesTabs) {
      if (element.item === "Корреспонденция" && element.status === true) {
        return correspondenceRow.map((cor, index) => [
          cor.id,
          index + 1,
          cor.incomingNumber,
          cor.sender,
          cor.topic,
          cor.dateReceived,
          cor.status,
          cor.term,
          cor.file,
        ]); // Преобразуем данные в массивы
      } else if (element.item === "Заявки" && element.status === true) {
        return requestRow.map((req, index) => [
          req.id,
          index + 1,
          req.reqType,
          req.applicant,
          req.organization,
          req.date,
          req.status,
        ]); // Преобразуем данные в массивы
      }
    }
  };

  const rows = handleCurrentRow(correspondence, request);

  const directorCard = userCards.find((e) => e.role === "Директор");
  const accounterCard = userCards.find((e) => e.role === "Главный бухгалтер");

  const [editActive, setEditActive] = useState<boolean>(false);
  const [moreOrgInfo, setMoreOrgInfo] = useState<boolean>(false);

  const handleClick = (state: boolean, target: string) => {
    if (target === "editActive") {
      setEditActive(state);
    }

    if (target === "moreOrgInfo") {
      setMoreOrgInfo(state);
    }
  };

  const { register, watch, control, handleSubmit, setValue, getValues } =
    useForm<OrganizationScheme>({
      defaultValues: {
        tax: "",
        identificator: "",
        name: "",
        docNo: "",
        dateDoc: null,
        address: "",
        terCode: "",
        unitAccountingTer: "",
        grbsResonsible: "",
        grbs: "",
        pbs: "",
        bz: [],
        details: [],
        categoryBudget: "",
        orgType: "Бюджетная организация",
        files: [],
      },
    });

  console.log(organizationsById);

  return (
    <main className="show-crm">
      <TitleSection title={organizationsById ? organizationsById?.name : ""} />
      <PanelControl
        editButtonState={editActive}
        saveButtonState={!editActive}
        handleClick={handleClick}
        state={editActive}
        target="editActive"
      />
      <TitleSection title="Карточка организации" />
      <section>
        {moreOrgInfo && (
          <div className="more-wrapper-info">
            <div className="info-navigate">
              <IconButton onClick={() => handleClick(false, "moreOrgInfo")}>
                <ArrowCircleLeftOutlinedIcon sx={{ fontSize: "35px" }} />
              </IconButton>
              <p className="title">{organizationsById?.name}</p>
            </div>
            <ul className="info-list">
              <li>
                <ul>
                  <li>
                    <CorporateFareOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Тип организации: <span>{organizationsById?.orgType}</span>
                    </p>
                  </li>
                  <li>
                    <ArticleOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      ИНН: <span>{organizationsById?.tax}</span>
                    </p>
                  </li>
                  <li>
                    <Grid3x3OutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Идентификатор:{" "}
                      <span>{organizationsById?.identificator}</span>
                    </p>
                  </li>
                  <li>
                    <DocumentScannerOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Номер договора: <span>{organizationsById?.docNo}</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <CalendarMonthOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Дата договора:{" "}
                      <span>{organizationsById?.dateDoc?.toString()}</span>
                    </p>
                  </li>
                  <li>
                    <HomeOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Адрес: <span>{organizationsById?.address}</span>
                    </p>
                  </li>
                  <li>
                    <TerrainOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Код территории: <span>{organizationsById?.terCode}</span>
                    </p>
                  </li>
                  <li>
                    <DatasetOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Единица учета:{" "}
                      <span>{organizationsById?.unitAccountingTer}</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <DatasetOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      ГРБС (Ответственный):{" "}
                      <span>{organizationsById?.grbsResonsible}</span>
                    </p>
                  </li>
                  <li>
                    <DatasetOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      ГРБС: <span>{organizationsById?.grbs}</span>
                    </p>
                  </li>
                  <li>
                    <DatasetOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      ПБС: <span>{organizationsById?.pbs}</span>
                    </p>
                  </li>
                  <li>
                    <DatasetOutlinedIcon sx={{ color: "#313131" }} />
                    <p>
                      Бюджетные заявки: <span>{organizationsById?.bz}</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <DatasetOutlinedIcon sx={{ color: "#313131" }} />
                <p>
                  Реквизиты: <span>{organizationsById?.details}</span>
                </p>
              </li>
            </ul>
          </div>
        )}
        {!editActive && !moreOrgInfo && (
          <div className="wrapper-cards">
            <OrganizationCard
              data={organizationsById}
              handleClick={handleClick}
              target="moreOrgInfo"
            />
            <div className="wrapper-user-cards">
              <UserCard data={directorCard} />
              <UserCard data={accounterCard} />
            </div>
          </div>
        )}
        {editActive && (
          <form action="">
            <Input
              editValue={organizationsById?.tax}
              register={register}
              idValue="tax"
              labelValue="ИНН *"
              borderRadiusStyle="30px"
              heightStyle="90%"
              widthStyle="48%"
            />
            <Input
              editValue={organizationsById?.identificator}
              register={register}
              idValue="identificator"
              labelValue="Идентификатор *"
              borderRadiusStyle="30px"
              heightStyle="90%"
              widthStyle="48%"
            />
            <Input
              editValue={organizationsById?.name}
              register={register}
              idValue="name"
              labelValue="Название *"
              borderRadiusStyle="30px"
              heightStyle="90%"
              widthStyle="48%"
            />
            <Input
              editValue={organizationsById?.docNo}
              register={register}
              idValue="docNo"
              labelValue="Номер договора"
              borderRadiusStyle="30px"
              heightStyle="90%"
              widthStyle="48%"
            />
            <DatePickerUI
              editValue={organizationsById?.dateDoc}
              control={control}
              nameValue="dateDoc"
              labelValue="Дата договора"
              borderRadiusStyle="30px"
              heightStyle="90%"
              widthStyle="48%"
            />
            <Input
              editValue={organizationsById?.address}
              register={register}
              idValue="address"
              labelValue="Адрес"
              borderRadiusStyle="30px"
              heightStyle="90%"
              widthStyle="48%"
            />
            <SelectUI
              editValue={organizationsById?.terCode}
              control={control}
              nameValue="terCode"
              labelValue="Код территории"
              borderRadiusStyle="30px"
              widthStyle="48%"
              data={[
                { id: 1, title: "Бадахшан" },
                { id: 2, title: "Хатлон" },
                { id: 3, title: "Душанбе" },
              ]}
            />
            <SelectUI
              editValue={organizationsById?.unitAccountingTer}
              control={control}
              nameValue="unitAccountingTer"
              labelValue="Единица учета"
              borderRadiusStyle="30px"
              widthStyle="48%"
              data={[
                { id: 1, title: "100-Сарраёсати хазинадории марказии ҶТ" },
                { id: 2, title: "101-шаҳри Душанбе" },
                { id: 3, title: "102-ноҳияи Синои" },
              ]}
            />
            <SelectUI
              editValue={organizationsById?.grbsResonsible}
              control={control}
              nameValue="grbsResonsible"
              labelValue="ГРБС (Ответственный)"
              borderRadiusStyle="30px"
              widthStyle="48%"
              data={[
                { id: 1, title: "103-Сарраёсати хазинадории марказии ҶТ" },
                { id: 2, title: "104-шаҳри Душанбе" },
                { id: 3, title: "105-ноҳияи Синои" },
              ]}
            />
            <SelectUI
              editValue={organizationsById?.grbs}
              control={control}
              nameValue="grbs"
              labelValue="ГРБС"
              borderRadiusStyle="30px"
              widthStyle="48%"
              data={[
                {
                  id: 1,
                  title: "108-108-Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон",
                },
                {
                  id: 2,
                  title: "109-109-Вазорати мудофиаи Ҷумҳурии Тоҷикистон",
                },
                {
                  id: 3,
                  title:
                    "101-101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон",
                },
              ]}
            />
            <SelectUI
              editValue={organizationsById?.pbs}
              control={control}
              nameValue="pbs"
              labelValue="ПБС"
              borderRadiusStyle="30px"
              widthStyle="48%"
              data={[
                {
                  id: 1,
                  title: "10801013-10801013-Шуъбаи корҳои дохилии ноҳияи Лахш",
                },
                {
                  id: 2,
                  title:
                    "10703001-10703001-Дастгоҳи марказии Бозрасии назорати давлатии тухмии Вазорати кишоварзии Ҷумҳурии Тоҷикистон",
                },
                {
                  id: 3,
                  title:
                    "10703002-10703002-Бозрасии назорати давлатии тухмӣ дар вилояти Хатлон",
                },
              ]}
            />
            <SelectUI
              editValue={organizationsById?.bz}
              control={control}
              nameValue="bz"
              labelValue="Бюджетные заявки *"
              borderRadiusStyle="30px"
              widthStyle="48%"
              data={[
                {
                  id: 1,
                  title: "63581",
                },
                { id: 2, title: "63582" },
                {
                  id: 3,
                  title: "63583",
                },
              ]}
            />
            <SelectUI
              editValue={organizationsById?.details}
              control={control}
              nameValue="details"
              labelValue="Реквизиты"
              borderRadiusStyle="30px"
              widthStyle="44%"
              data={[
                {
                  id: 1,
                  title: "123",
                },
                { id: 2, title: "1234" },
                {
                  id: 3,
                  title: "12345",
                },
              ]}
            />
            <IconButton>
              <AddIcon />
            </IconButton>
            <SelectUI
              editValue={organizationsById?.orgType}
              control={control}
              nameValue="orgType"
              labelValue="Тип организации"
              borderRadiusStyle="30px"
              widthStyle="48%"
              data={[
                {
                  id: 1,
                  title: "Бюджетная организация",
                },
                { id: 2, title: "Коммерческая организация" },
                {
                  id: 3,
                  title: "Министерство финансов",
                },
              ]}
            />
          </form>
        )}

        {/* <CardOrganization item={organizationsById} /> */}
        {/* <Orgcard
          data={organizationsById}
          orgName="km"
          orgType="bo"
          orgInn="1123"
          orglocation="испечак 2"
          directorName="km"
          headAccountantName="km"
        /> */}
      </section>
      {editActive && (
        <>
          <TitleSection title="Документы" />
          <section>
            <div className="wrapper-documents">
              <InputFile setValue={setValue} getValues={getValues} />
              {organizationsById?.files.map((file: File, index: number) => (
                <FileList key={index} item={file} />
              ))}
              {/* {formValues.files &&
            formValues.files.map((file: File, index: number) => (
              <FileList key={index} item={file} />
            ))} */}
            </div>
          </section>
        </>
      )}
      {!editActive && (
        <>
          <TitleSection title="Данные по модулям" />
          <section className="section-tabs">
            <ul className="wrapper-tabs">
              {modulesTabs.map((e) => {
                return (
                  <li
                    onClick={() => handleChangeStatus(e)}
                    key={e.id}
                    className={`tab ${e.status ? "tab-active" : ""}`}
                  >
                    <p className={e.status ? "active" : ""}>{e.item}</p>
                  </li>
                );
              })}
              {/* <li className="tab">
            <p className={isActive ? "active" : ""}>Корреспонденция</p>
          </li>
          <li className={`tab ${isActive ? "tab-active" : ""}`}>
            <p className="">Заявки</p>
          </li> */}
            </ul>
            <div className="wrapper-registry">
              <Registry
                headersProps={headers}
                rowsProps={rows}
                status={{ active: "Завершено", inactive: "На резолюции" }}
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default ShowCRM;

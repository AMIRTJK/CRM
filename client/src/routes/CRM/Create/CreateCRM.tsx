import React, { useEffect, useState } from "react";
import "./CreateCRM.css";
import TitleSection from "../../../UI/Title of Section/TitleSection";
import PanelControl from "../../../UI/Panel Control/PanelControl";
import { IconButton, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import AddIcon from "@mui/icons-material/Add";
import InputFile from "../../../components/File Service/File Service Input File/InputFile";
import FileList from "../../../components/File Service/File Service File List/FileList";

import { Controller, useForm } from "react-hook-form";
import { OrganizationScheme } from "./OrganizationScheme";

const CreateCRM = () => {
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

  const orgType = watch("orgType");

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const formValues = watch();

  const onSubmit = (data: OrganizationScheme) => {
    //  Нужно data отправить в сервер
  };

  return (
    <main className="create-crm">
      <TitleSection title="Новая организация" />
      <PanelControl handleSubmit={handleSubmit(onSubmit)} />
      <TitleSection title="Создание организации" />
      <section>
        <form action="">
          <TextField
            {...register("tax")}
            id="tax"
            label="ИНН *"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },

              width: "48%",
            }}
          />
          <TextField
            {...register("identificator")}
            id="identificator"
            label="Идентификатор *"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },
              width: "48%",
            }}
          />
          <TextField
            {...register("name")}
            id="name"
            label="Название "
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },
              width: "48%",
            }}
          />
          <TextField
            {...register("docNo")}
            id="docNo"
            label="Номер договора "
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },
              width: "48%",
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <Controller
                name="dateDoc"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    label="Дата договора"
                    value={field.value} // Теперь это либо объект Dayjs, либо null
                    onChange={(newValue) => field.onChange(newValue)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "30px",
                        height: "90%",
                      },
                      width: "48%",
                    }}
                  />
                )}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            {...register("address")}
            id="address"
            label="Адрес"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "90%",
              },
              width: "48%",
            }}
          />
          {/* Селект: Код территории */}
          <Box width="48%">
            <Controller
              name="terCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="terCode-label">Код территории</InputLabel>
                  <Select
                    {...field}
                    id="terCode"
                    labelId="terCode-label"
                    label="Код территории"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="10">Бадахшан</MenuItem>
                    <MenuItem value="20">Хатлон</MenuItem>
                    <MenuItem value="30">Душанбе</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          {/* Селект: Единица учета */}
          <Box width="48%">
            <Controller
              name="unitAccountingTer"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="unitAccountingTer-label">
                    Единица учета
                  </InputLabel>
                  <Select
                    {...field}
                    id="unitAccountingTer"
                    labelId="unitAccountingTer-label"
                    label="Единица учета"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="10">
                      100-Сарраёсати хазинадории марказии ҶТ
                    </MenuItem>
                    <MenuItem value="20">101-шаҳри Душанбе</MenuItem>
                    <MenuItem value="30">102-ноҳияи Синои</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          {/* Селект: ГРБС (Ответственный) */}
          <Box width="48%">
            <Controller
              name="grbsResonsible"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="grbsResonsible-label">
                    ГРБС (Ответственный)
                  </InputLabel>
                  <Select
                    {...field}
                    id="grbsResonsible"
                    labelId="grbsResonsible-label"
                    label="ГРБС (Ответственный)"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="10">19391-</MenuItem>
                    <MenuItem value="20">19392-</MenuItem>
                    <MenuItem value="30">19393-</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          {/* Селект: ГРБС */}
          <Box width="48%">
            <Controller
              name="grbs"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="grbs-label">ГРБС</InputLabel>
                  <Select
                    {...field}
                    id="grbs"
                    labelId="grbs-label"
                    label="ГРБС"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="10">
                      108-108-Вазорати корҳои дохилии Ҷумҳурии Тоҷикистон
                    </MenuItem>
                    <MenuItem value="20">
                      109-109-Вазорати мудофиаи Ҷумҳурии Тоҷикистон
                    </MenuItem>
                    <MenuItem value="30">
                      101-101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          {/* Селект: ПБС */}
          <Box width="48%">
            <Controller
              name="pbs"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="pbs-label">ПБС</InputLabel>
                  <Select
                    {...field}
                    id="pbs"
                    labelId="pbs-label"
                    label="ПБС"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="10">
                      10801013-10801013-Шуъбаи корҳои дохилии ноҳияи Лахш
                    </MenuItem>
                    <MenuItem value="20">
                      10703001-10703001-Дастгоҳи марказии Бозрасии назорати
                      давлатии тухмии Вазорати кишоварзии Ҷумҳурии Тоҷикистон
                    </MenuItem>
                    <MenuItem value="30">
                      10703002-10703002-Бозрасии назорати давлатии тухмӣ дар
                      вилояти Хатлон
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          {/* Селект: Бюджетные заявки */}
          <Box width="48%">
            <Controller
              name="bz"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="bz-label">Бюджетные заявки *</InputLabel>
                  <Select
                    {...field}
                    id="bz"
                    labelId="bz-label"
                    label="Бюджетные заявки *"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="63581">63581</MenuItem>
                    <MenuItem value="63582">63582</MenuItem>
                    <MenuItem value="63583">63583</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          {/* Селект: Реквизиты */}
          <Box width="43.5%">
            <Controller
              name="details" // Замените на нужное поле, если оно отличается
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="details-label">Реквизиты </InputLabel>
                  <Select
                    {...field}
                    id="details"
                    labelId="details-label"
                    label="Реквизиты *"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="123">123</MenuItem>
                    <MenuItem value="1234">1234</MenuItem>
                    <MenuItem value="12345">12345</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>

          <IconButton>
            <AddIcon />
          </IconButton>

          {/* Селект: Тип организации */}
          <Box width="48%">
            <Controller
              name="orgType"
              control={control}
              defaultValue="Бюджетная организация"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="orgType-label">Тип организации</InputLabel>
                  <Select
                    {...field}
                    id="orgType"
                    labelId="orgType-label"
                    label="Тип организации"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "30px",
                      },
                    }}
                  >
                    <MenuItem value="Бюджетная организация">
                      Бюджетная организация
                    </MenuItem>
                    <MenuItem value="Коммерческая организация">
                      Коммерческая организация
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </form>
      </section>
      <TitleSection title="Документы" />
      <section>
        <div className="wrapper-documents">
          <InputFile setValue={setValue} getValues={getValues} />
          <FileList />
        </div>
      </section>
    </main>
  );
};

export default CreateCRM;

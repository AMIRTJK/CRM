import { Request, Response } from "express";
import { readFile } from "../../modules/fs/readFile";
import { ORGANIZATIONS_FILE_PATH } from "../../services/filePaths";
import { generateUniqueId } from "../../utils/generateUniqueId";
import { writeFile } from "../../modules/fs/writeFile";

export const createOrganization = (req: Request, res: Response) => {
  const file = (req as any).file;
  const orgData = req.body;

  if (!orgData.tax) {
    return res.status(400).json({ error: "ИНН организации не заполнен!" });
  }

  const organizations = readFile(ORGANIZATIONS_FILE_PATH);

  const newOrganization = {
    id: generateUniqueId(organizations),
    file: file ? file.path : null,
    ...orgData,
  };

  organizations.push(newOrganization);

  writeFile(ORGANIZATIONS_FILE_PATH, organizations);

  res.status(201).json({
    message: "Организация успешно создана",
    organization: newOrganization,
  });
};

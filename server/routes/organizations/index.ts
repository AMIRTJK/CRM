import Router from "express";

import { createOrganization } from "./createOrganization";
import { deleteOrganization } from "./deleteOrganization";
import { upload } from "../../modules/multer/fileService";

const router = Router();

router.post("/organizations", upload.single("file"), createOrganization);
router.post("/organizations/:id", upload.single("file"), deleteOrganization);

export default router;

import { Router } from "express";
import testUsers from "./testUsers";
import account from "./account";
import content from "./content";
import profile from "./profile";
import vaccine from "./vaccine";
import trip from "./trip";
import adminUsers from "./adminUsers";
import adminTrips from "./adminTrips";
import applicationConfigs from "./applicationConfigs";
import { auth, onError } from "../middleware";
import { ConfigService } from "../utils";

const routes = Router();

routes.use("/test-users", auth(), testUsers);
routes.use("/me", auth(), account);
routes.use("/content", content);
routes.use("/profile", auth(), profile);
routes.use("/vaccine-registry", auth(), vaccine);
routes.use("/trip", auth(), trip);

//////////// Admin ///////////////////
routes.use("/admin/me", auth(), account);
routes.use("/admin/content", content);
routes.use("/admin/user", auth(), adminUsers);
routes.use("/admin/trip", auth(), adminTrips);
routes.use("/admin/application-configs", auth(), applicationConfigs);

routes.use(onError);

ConfigService.initialConfig();

export default routes;

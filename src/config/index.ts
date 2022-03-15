import * as cors from "cors";
function getOptional(name: string): string | null {
  return process.env[name] || null;
}

function getRequired(name: string): string {
  const val = getOptional(name);
  if (!val) {
    throw new Error(`${name} environment variable is required.`);
  }
  return val;
}

export const PORT: number = +(getOptional("PORT") || 8000);

// CORS
export const CORS_OPTIONS: cors.CorsOptions = {
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: (_origin, callback) => callback(null, true),
};

//build
export const NODE_ENV = getOptional("NODE_ENV") || "development";
export const IS_DEVELOPMENT = NODE_ENV !== "production";

// PostgreSQL
export const TYPEORM_URL = getRequired("NODE_TYPEORM_URL");
export const DB_MIGRATION =
  getOptional("NODE_DB_MIGRATION") || IS_DEVELOPMENT ? "alter" : "safe";
export const DB_POOL_SIZE = getOptional("DB_POOL_SIZE") || 30;
export const DB_SEED =
  (getOptional("DB_SEED") || "false").toLowerCase() === "true";

//Firebase
export const BUCKET = getRequired("NODE_BUCKET_FB");
export const APP_KEY = getRequired("NODE_FIRE_BASE_KEY");
export const AUTH_DOMAIN = getRequired("NODE_AUTH_DOMAIN");
export const PROJECT_ID = getRequired("NODE_PROJECT_ID");
export const STORAGE_BUCKET = getRequired("NODE_BUCKET");
export const MESSAGING_SENDER_ID = getRequired("NODE_MESSAGING_SENDER_ID");
export const API_ID = getRequired("NODE_API_ID");
export const MEASUREMENT_ID = getRequired("NODE_MEASUREMENT_ID");

export const DRAFT_TRIP_STATUS_ID = 6;
export const PENDING_ITEM_STATUS = 1;
export const APPROVED_ITEM_STATUS = 2;

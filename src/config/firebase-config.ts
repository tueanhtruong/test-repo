import * as admin from "firebase-admin";
// import * as serviceAccount from "./serviceAccountKey.json";
const serviceAccount = require("./serviceAccountKey.json");
import { GetSignedUrlConfig } from "@google-cloud/storage";
import {
  API_ID,
  APP_KEY,
  AUTH_DOMAIN,
  BUCKET,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from ".";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: APP_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: API_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const storage = admin.storage().bucket(BUCKET);

const urlOptions = (): GetSignedUrlConfig => ({
  version: "v4",
  action: "read",
  expires: Date.now() + 60 * 60 * 15,
});

export { admin, storage, urlOptions };

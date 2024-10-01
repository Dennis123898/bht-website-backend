import * as admin from "firebase-admin";
import serviceAccount from "./serverAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://bht-website-f8cb7-default-rtdb.asia-southeast1.firebasedatabase.app"
});

export default admin;
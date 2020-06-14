import db from "./db";
import app from "./app";

db.connect();

const port = 9000;

app.listen(port, () => console.log(`server listen on port ${port}`));

import { initServer } from "./app"


initServer()
.then(app => {
  app.listen(process.env.PORT, () => {
    console.log(`server is ready`);
  });
})





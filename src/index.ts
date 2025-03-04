import { initServer } from "./app"


initServer()
.then(app => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
  });
})





const app = require("./app");

//emplearemos async & await
async function main() {
  await app.listen(app.get('port'));
  console.log("server on port" , app.get('port'));
}

main();
//esto solo es lo que va a arrancar la aplicacion 

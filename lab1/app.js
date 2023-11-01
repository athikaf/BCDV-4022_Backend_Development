const fsModule = require("./modules/fileSystem");
const eventEmitterModule = require("./modules/eventEmitter");
const cryptoModule = require("./modules/crypto");

fsModule.writeToFile(
  "athikaFatima.txt",
  "Hello, File System! This is Athika Fatima - 101502209"
);
const content = fsModule.readFromFile("athikaFatima.txt");
console.log(`File content: ${content}`);

eventEmitterModule.listenForCustomEvent((message) => {
  console.log(`Received custom event: ${message}`);
});
eventEmitterModule.emitCustomEvent("Hello, NodeJS! This is Athika Fatima!");

const hashedPassword = cryptoModule.hashPassword("MySecurePassword");
console.log(`Hashed password: ${hashedPassword}`);

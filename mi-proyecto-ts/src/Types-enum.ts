// Tipo litera

type OrdenStatus = "pending" | "shipped" | "delivered";

let ordenStatus: OrdenStatus = "pending";

console.log(`estado de la orden del producto comprado: ${ordenStatus}`);

// Enum

enum Loglevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

let message: string = "error en la base de datos";

function logMessage(level: Loglevel, message: string): void {
  return console.log(`[${level}]: ${message}`);
}

logMessage(Loglevel.Error, "error en la base de dato");

const { exec } = require('child_process');
const fs = require('fs');

// ❌ Entrada del usuario sin validar
const input = process.argv[2];

// 🔥 1. Command Injection
exec(`rm -rf ${input}`, (err, stdout, stderr) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Deleted:", stdout);
});

// 🔥 2. Operación bloqueante (sincrónica)
const data = fs.readFileSync('data.json');
console.log("Data:", data.toString());

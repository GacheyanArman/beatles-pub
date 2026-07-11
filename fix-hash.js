const bcrypt = require('bcryptjs');
const fs = require('fs');

async function main() {
  const newPassword = 'beatlespassword2026'; // Hardcoded to avoid shell issues
  const hash = await bcrypt.hash(newPassword, 12);
  
  let env = fs.readFileSync('.env.local', 'utf-8');
  env = env.replace(/ADMIN_PASSWORD_HASH=".+"/, `ADMIN_PASSWORD_HASH="${hash}"`);
  fs.writeFileSync('.env.local', env);
  
  console.log("Updated .env.local with correct hash for beatlespassword2026");
}
main();

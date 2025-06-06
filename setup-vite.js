// This script helps migrate from CRA to Vite
const fs = require('fs');
const path = require('path');

// Create .env file for Vite
const envContent = `VITE_APP_TITLE=Youssef Fawzi Portfolio
`;
fs.writeFileSync(path.join(__dirname, '.env'), envContent);

console.log('✅ Created .env file');

// Ensure public directory is properly set up
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log('✅ Created public directory');
}

console.log('✅ Setup complete! Run "npm run dev" to start the development server.');
console.log('✅ To deploy to Vercel, run "vercel" or connect your GitHub repository to Vercel.');

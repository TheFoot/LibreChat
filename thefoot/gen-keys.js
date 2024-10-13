const crypto = require('crypto');

// Generate a 32-byte key (64 characters in hex)
const key = crypto.randomBytes(32).toString('hex');

// Generate a 16-byte IV (32 characters in hex)
const iv = crypto.randomBytes(16).toString('hex');

// Generate a 32-byte key (64 characters in hex)
const jwt = crypto.randomBytes(32).toString('hex');

// Generate a 32-byte key (64 characters in hex)
const jwt2 = crypto.randomBytes(32).toString('hex');

console.log(`CREDS_KEY=${key}`);
console.log(`CREDS_IV=${iv}`);
console.log(`JWT_SECRET=${jwt}`);
console.log(`JWT_REFRESH_SECRET=${jwt2}`);

module.exports = {
    NAME: process.env.NAME || 'content microservice',
    VERSION: process.env.VERSION || '1.0.0-beta',
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    DB_URI: process.env.DB_URI || '',

    DTRACE_STATUS: process.env.DTRACE_STATUS || true
};
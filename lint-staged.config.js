/** @type {import('lint-staged').Config} */
const config = {
  "*": [
    () => "npm run lint:editor",
    () => "npm run lint:fs"],
};

export default config;

const requiredEnvVars = [
  'DB_HOST',
  'DB_PORT',
  'DB_USER',
  'DB_PASS',
  'DB_NAME',
] as const;

export function validateEnv(): void {
  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    console.error(
      `❌ Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
    process.exit(1);
  }
}


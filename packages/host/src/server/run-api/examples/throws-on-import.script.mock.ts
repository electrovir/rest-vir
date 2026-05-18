/**
 * Intentionally imports a missing module so the `setupService` helper's stderr-rejection path
 * (matching `Cannot find module`) can be exercised by tests. The module path is built at runtime so
 * TypeScript doesn't try to resolve it at compile time.
 */
const missing = './does-not-exist.js';
await import(missing);

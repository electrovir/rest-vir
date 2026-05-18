/**
 * Intentionally exits before printing a "started on" line so the `setupService` helper's
 * `childProcess.exit` rejection path can be exercised by tests.
 */
process.exit(7);

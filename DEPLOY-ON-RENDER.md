# Deploy Aarthi Mart on Render — Free demo

This project uses Java 17, Tomcat 9, Maven, and a file-backed H2 database. The Dockerfile builds the WAR from source.

## Free-plan limitation

This blueprint uses Render's Free web-service plan, so no persistent disk is attached and H2 is stored under `/tmp`. **Database contents can disappear whenever the service sleeps, restarts, or redeploys.** Free services also sleep after 15 minutes without incoming traffic and may take about a minute to wake. This is suitable for a college demo, not reliable storage for real users, orders, or payments. Persistent disk storage requires a paid service.

## Deploy

1. Extract this ZIP on your computer.
2. Create a GitHub repository named `aarthi-mart` (private is fine) and push the extracted project files to its root. Do not commit local database files, API keys, or passwords.
3. Sign in at https://dashboard.render.com/ and connect GitHub if prompted.
4. Choose **New + → Blueprint**, select your repository, and apply `render.yaml`. Confirm that the service plan says **Free** before creating it.
5. Wait for the Docker build and deployment to finish. Review the logs for startup or schema errors.
6. Open the service's generated `https://<service-name>.onrender.com/` URL.
7. Test `https://<service-name>.onrender.com/api/v1/health`. Expected response: `{"status":"UP","db":"UP"}`.
8. Test registration, login, product listing, cart, checkout, and order history. Do not submit the URL until those journeys work.

## Important limitations

- Creating a service in Render and connecting GitHub must be done while signed into your own account. This package cannot create a URL without your account's authorization.
- The app's schema and startup behavior must still be verified in the deployed logs and health endpoint.
- Never publish production passwords or API keys in GitHub. Add them as Render environment variables/secrets if needed.

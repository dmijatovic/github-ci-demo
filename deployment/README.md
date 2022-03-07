# Deploying RSD

RSD consist of following modules which are combined into one application

- Authentication service
- Backend
  - database
  - api
- Frontend
- Reverse proxy
- Scrapers

All services are build as docker images and can be used with docker-compose or other container environment.

In this release we provide an example docker-compose file.

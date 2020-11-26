## REST api for fake stocks 

### Dependencies

- Last version running:
    - docker
- Test and build
    - node 12 or higher
    - package manager like yarn or npm
    - webpack global installed
    - mysql 8.0 or higher

### Run last version

- Clone this repository on master branch
- run docker compose up
- Api is available on port 8888 (For change it, yo should rebuild using the build instructions)

### Build the app 

- Create .env

``` cp env.example .env```

- Change the values on .env according with your database setup

- Install dependencies

```  yarn ```

- Build on dev mode with webpack

``` yarn web pack``` 

- Start (other terminal)

``` yarn start ```

- Happy coding

### Endpoints

A collection for postman is available on project root. CRUD basic operations are implemented on /api/stock ... , an extra endpoint (for development only) y available for database seeding at api/stock/seed

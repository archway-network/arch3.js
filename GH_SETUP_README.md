# The Github Workflow configuration information

- Prerequisites are trivial so will not mention here
- test.yml is file that sets up a test environment and runs tests
- Notice archway and archway cli are pre-installed
- Step "Start local node" notice this script uses a dynamically created env file instead of passing env. This is due to limitation of docker compose up where it cannot accept env via as arguments
- If errors occur you can view docker terminal by running "docker compose up" without passing -d
- The expect command installation is needed in order to use archwayd to rehydrate the devx test account
- Gpg is installed because archwayd uses gpg on linux as the keystore mechanism
- Prior to running any tests a build:all is required

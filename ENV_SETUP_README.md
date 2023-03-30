# This Readme shows how to setup the environment so that tests run successfully
- Note required scripts are in the scripts folder
- The testing system uses a local node instance and the airdrop contract


### Integration testing

For integration test, please use the local node configured in the `docker-compose.yml` file.

#### Configure the Genesis Accounts

It's possible to add custom accounts to the genesis file by copying the `local-node.env.example` file to
`local-node.env` and adding the addresses to the `GENESIS_ACCOUNTS` var.

```bash
cp local-node.env.example local-node.env
# add your accounts to GENESIS_ACCOUNTS
```

#### Starting the local node

To start the node, please run the script `scripts/local-node.sh`. It will run `docker compose` and also stake tokens
with the validator - which is a requirement to test the governance vote.

```bash
scripts/local-node.sh
```

#### Deploying the contract

You'll need the latest version of the `archway-cli` installed. Before running the script, make sure that the local
network is selected:

```bash
archway network -m -e local
```

Then, run the deployment script specifying the name of the deployer account:

```bash
scripts/deploy.sh <account-name>
```
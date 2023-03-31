# This Readme shows how to setup the environment so that tests run successfully
- Note required scripts are in the scripts folder
- The testing system uses a local node instance and the airdrop contract
- It is assumed you've already installed archwayd and archway cli
- Note: For the withdrawRewards tests you cannot run them more than once!


# A necessary explaner for MsgWithdrawRewards
- WithdrawRewards are the rewards developers receive for participating on the Archway network. These are not user rewards
- These rewards are per contract and there can only be one rewardsAddress at any given time
- RewardsRecords are needed to be able to withdrawRewards, and RewardsRecords are only created once tx are executed for the contract.
Again these RewardRecords are given only to the owner of the rewardsAddress of the contract metadata
- In order for withdrawRewards to succeed, the rewardsAddress and the tx signer must be the same account
- A rewardsAddress will only accrue RewardsRecords once the contract processes some tx
- A rewardsAddress can be changed, however prior rewards do not move to the new address
- Since some tx can only be done once, for example the action claims transactions for airdrops, the test for withdrawRewards can only be run once
- if you need to run it multiple times you must reset the local node and contract!

# Github Actions 
- If the local node on docker is not deploying do this to view the logs:
  1. add -d to docker compose up
  2. docker logs -f --details --until=20s arch3js-node-1 


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

config.json is already set to run local, but if needed run this to set to local

```bash
archway network -m -e local
```

Then, run the deployment script specifying the name of the deployer account:

```bash
scripts/deploy.sh <account-name>
```
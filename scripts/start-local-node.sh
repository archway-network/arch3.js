#!/bin/bash

set -euo pipefail

docker compose up --remove-orphans -d

echo "Waiting for the node to generate the first block..."
curl --retry 30 -f --retry-all-errors --retry-delay 1 -s "http://localhost:26657/block?height=1" | \
  jq '.error == null' && \
  echo "OK: node started" || {
    echo "Error: node failed to start!"
    docker compose logs
    docker compose down --volumes
    exit 1
}

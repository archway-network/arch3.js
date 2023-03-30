#!/bin/bash

echo "Starting / Restarting node..."
docker compose down --remove-orphans --volumes
docker compose up -d
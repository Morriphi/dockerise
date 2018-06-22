#!/bin/bash

set -e

docker-compose rm -f
docker-compose kill
docker-compose build
docker-compose run acceptance
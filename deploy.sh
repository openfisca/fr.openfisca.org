#!/bin/bash

set -ex
pwd

# Update fr.openfisca.org website to last revision
git checkout master
git pull

# Rebuild website
# User must have rights on '/node_modules' & '/.next'
npm install
npm run build

# The current user must have been specifically allowed to run the next command
# Use the visudo command to do so
sudo systemctl restart fr.openfisca.org.service

#!/bin/sh

set -e

if ! git rev-parse `npm run version --silent` 2>/dev/null ; then
    git tag `npm run version --silent`
    git push --tags  # update the repository version
    ssh deploy-fr-openfisca-org@fr.openfisca.org
else
    echo "No deployment - Only non-functional elements were modified in this change"
fi

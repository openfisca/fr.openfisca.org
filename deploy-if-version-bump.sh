#!/bin/sh

set -e
if ! git rev-parse `npm run version` 2>/dev/null ; then
    git tag `npm run version`
    git push --tags  # update the repository version
    ssh deploy-fr-openfisca-org@fr.openfisca.org
else
    echo "No deployment - Only non-functional elements were modified in this change"
fi

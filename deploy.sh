#!/usr/bin/env sh

# abort on errors
set -e


git init
git add -A
git commit -m 'added new design'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f 



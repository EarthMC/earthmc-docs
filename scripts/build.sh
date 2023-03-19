#!/bin/bash
git reset --hard HEAD
git checkout main
git pull

npm i
npm run build

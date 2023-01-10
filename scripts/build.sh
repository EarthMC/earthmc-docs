#!/bin/bash
git reset --hard HEAD
git checkout main
git pull

npm run build

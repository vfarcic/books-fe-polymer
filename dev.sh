#!/usr/bin/env bash

npm install
bower install --allow-root --config.interactive=false -s
gulp serve
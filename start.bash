#!/bin/bash
pm2 describe common-apis > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  pm2 start --name common-apis  app.js 
else
  pm2 reload common-apis
fi;
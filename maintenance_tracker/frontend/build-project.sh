#! /bin/bash
node --max_old_space_size=8096 ./node_modules/.bin/ng build --progress --verbose --output-path ../DjangoCore/core/templates/ang/ --output-hashing none
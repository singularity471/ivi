#!/bin/bash

<<<<<<< HEAD
if [ ${TRAVIS_BRANCH} = "master" ]; then 
=======
if [ ${TRAVIS_BRANCH} = "deploy_test" ]; then 
  echo "deploy test"
>>>>>>> 91f2f8e37de336e3673cf4e4a938763d7cbbeb1e
  MESSAGE=$(git log --format=%B -n 1 $TRAVIS_COMMIT)
	git clone git://${GH_REPO}
  mkdir ${REPO}/ivi
	cp -R ${FILES} ${REPO}/ivi
	cd ${REPO}
	git remote
	git config user.email ${EMAIL}
	git config user.name ${USER}
	git add .
	git commit -m $TRAVIS_BUILD_NUMBER
	git push "https://${GH_TOKEN}@${GH_REPO}" master > /dev/null 2>&1
fi

#!/bin/bash -e
#
# Purpose: Pack a Chromium extension directory into crx format
crxmake --pack-extension=src --extension-output=package/weibo_follow_only.crx --key-output=weibo_follow_only.pem

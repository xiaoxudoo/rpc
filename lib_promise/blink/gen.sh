#!/bin/bash

cd `dirname $0`
pbjs -t static-module -w commonjs -o mns.js mns.proto


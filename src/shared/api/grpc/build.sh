#!/bin/bash

PROTO_DIR=./src/shared/api/grpc/protobuff

yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I${PROTO_DIR} \
    ${PROTO_DIR}/*.proto

yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTO_DIR}/generate/ \
    -I${PROTO_DIR} \
    ${PROTO_DIR}/*.proto
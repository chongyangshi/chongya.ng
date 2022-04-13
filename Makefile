.PHONY: build
ALPINE_VERSION := 3.15
SVC := web-scy-email
COMMIT := $(shell git log -1 --pretty='%h')

.PHONY: pull build push

all: pull build push

build:
	docker build -t ${SVC} --platform linux/amd64 --build-arg ALPINE_VERSION=${ALPINE_VERSION} .

pull:
	docker pull alpine:${ALPINE_VERSION}

push:
	docker tag ${SVC}:latest icydoge/web:${SVC}-${COMMIT}
	docker push icydoge/web:${SVC}-${COMMIT}

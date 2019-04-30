.PHONY: build
ALPINE_VERSION := 3.7
SVC := web-scy-email

.PHONY: pull build push

all: pull build push

build:
	docker build -t ${SVC} --build-arg ALPINE_VERSION=${ALPINE_VERSION} .

pull:
	docker pull alpine:${ALPINE_VERSION}

push:
	docker tag ${SVC}:latest icydoge/web:${SVC}
	docker push icydoge/web:${SVC}

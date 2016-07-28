.PHONY: test

BIN = node_modules/.bin

test:
	$(BIN)/karma start --single-run
	$(BIN)/standard

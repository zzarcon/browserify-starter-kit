default: server watch

server:
	cd dev && python -m SimpleHTTPServer

watch:
	node_modules/watchify/bin/cmd.js src/main.js -o dev/bundle.js

tests:
	./node_modules/karma/bin/karma start --single-run  --browsers PhantomJS
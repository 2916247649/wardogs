#!/bin/sh
# Container entrypoint: one image, several roles (WARCON_ROLE):
#   migrate -> apply pending DB migrations and exit (Compose runs this first)
#   worker  -> the background poller/relay process
#   web|all -> the SvelteKit web server (all also runs the poller in-process)
set -e

role="${WARCON_ROLE:-all}"

case "$role" in
	migrate)
		exec bun ./build/migrate.js
		;;
	worker)
		exec bun ./build/worker.js
		;;
	web | all)
		exec bun ./build/index.js
		;;
	*)
		echo "WARCON_ROLE must be all, web, worker or migrate (got '$role')" >&2
		exit 2
		;;
esac

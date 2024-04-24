echo "start"
yarn dev --port 3335 &
pid=$!
sleep 5
kill-port 3335
kill -SIGINT $pid
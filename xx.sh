yarn dev &
pid=$!
echo $pid
sleep 5
kill $pid
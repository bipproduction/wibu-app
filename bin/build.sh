yarn install
npx prisma db push
yarn build
pm2 restart wibu-app_3025

echo "start"
yarn dev --port 3025 &
pid=$!
echo $pid
wait $pid
echo "done"
sleep 5
echo "kill"
kill -9 $pid
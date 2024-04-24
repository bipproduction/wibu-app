# git pull origin build
yarn install
npx prisma db push
yarn dev --port 3333 &
pid=$!
echo $pid
sleep 10
kill $pid
yarn build
pm2 restart wibu-app_3025
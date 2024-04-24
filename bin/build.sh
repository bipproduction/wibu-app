git pull origin build
yarn install
timeout 5s yarn dev
npx prisma db push
yarn build
pm2 restart wibu-app_3025
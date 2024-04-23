git pull origin build
yarn install
npx prisma db push
yarn build
pm2 restart wibu-app_3025
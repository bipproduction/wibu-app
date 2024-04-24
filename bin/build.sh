yarn install
npx prisma db push
timeout 10 yarn dev --port 3333
yarn build
pm2 restart wibu-app_3025
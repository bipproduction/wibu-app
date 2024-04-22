git pull origin build
yarn build
pm2 restart wibu-app_3025
pm2 status
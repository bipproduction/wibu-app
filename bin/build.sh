yarn install
npx prisma db push
timeout 10 yarn dev
yarn build
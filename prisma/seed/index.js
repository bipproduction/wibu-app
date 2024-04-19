const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const apps = require('./apps.json');

; (async () => {
    for (let app of apps) {
        await prisma.apps.upsert({
            where: {
                id: app.id
            },
            update: app,
            create: app
        })
    }
})().then(() => {
    console.log('done')
    prisma.$disconnect()
}).catch((e) => {
    console.error(e)
    prisma.$disconnect()
}).finally(() => {
    console.log('done')
    prisma.$disconnect()
})
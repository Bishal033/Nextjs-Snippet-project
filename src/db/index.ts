import { PrismaClient } from "@/generated/prisma/client";

export const db = new PrismaClient();

db.snippet.create({
    data: {
        title: 'Title!',
        code: 'const abc = ()=>{}'
    }
})
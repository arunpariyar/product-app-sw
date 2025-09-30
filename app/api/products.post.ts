import { PrismaClient } from "~/generated/prisma";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const products = await $fetch<string>(
    "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json"
  );

  await prisma.product.createMany({
    data: JSON.parse(products),
  });

  return { success: true, count: products.length };
});

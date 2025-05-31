const fs = require("fs");
const { parse } = require("csv-parse");
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

// Load variabel dari .env
config({
  path: '../../.env',
})

// Initialize Prisma client
const prisma = new PrismaClient();

console.log('Seeding database...');

// async function createDataBarang(buku: any){  
//   const barang = await prisma.dataBarang.findFirst({
//     where: {
//       kodeBarang: String(buku[0]),
//     },
//   })

//   if (barang) return barang.id

//   const newBarang = await prisma.dataBarang.create({
//     data: {
//       kodeBarang: String(buku[0]),
//       nama: buku[1],
//       type: 'buku',
//       posisiBarang: 'rak buku',
//       jumlah: buku[5],
//       tersedia: buku[7]      
//     },
//   });

//   return newBarang.id
// }  

async function seedProject() {
  console.log('Seeding project database...');

  fs.createReadStream("./project.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", async function (row) {
      const project_name = row[0];
      const gambars = String(row[1]).trim().split("\n");
      const deskripsi = row[2];
      const roleEcs = row[3];

      const newBarang =  await prisma.project.create({
        data: {
          name: project_name,
          description: deskripsi,
          images: gambars,
          role_ecs: roleEcs,          
        },
      });
    })
    .on("end", function () {
      console.log("finished");
    })
    .on("error", function (error) {
      console.log(error.message);
    });
}

seedProject()
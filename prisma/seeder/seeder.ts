import * as XLSX from 'xlsx';
import { PrismaClient } from '@prisma/client';
import {config} from 'dotenv';

// Load variabel dari .env
config({
  path: '../../.env',
})

// Initialize Prisma client
const prisma = new PrismaClient();

console.log('Seeding database...');

const workbook = XLSX.readFile('Inventarisasi ECS 2025.xlsx');
console.log("found sheet count : ", workbook.SheetNames.length);
const sheetName = workbook.SheetNames[0];

async function createDataBarang(buku: any){  
  const barang = await prisma.dataBarang.findFirst({
    where: {
      kodeBarang: String(buku[0]),
    },
  })

  if (barang) return barang.id

  const newBarang = await prisma.dataBarang.create({
    data: {
      kodeBarang: String(buku[0]),
      nama: buku[1],
      type: 'buku',
      posisiBarang: 'rak buku',
      jumlah: buku[5],
      tersedia: buku[7]      
    },
  });

  return newBarang.id
}

async function seedBukuDatabase() {
  console.log('Sheet Name:', sheetName);
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  try {
    console.log('Seeding data...');
    const filteredData = jsonData.slice(1).filter(buku => {
      return buku[0] && buku[1] && buku[5] && buku[7]; // Check if kodeBarang, nama, jumlah, tersedia are not empty
    });

    await prisma.detailBuku.createMany({
    data: await Promise.all(filteredData.slice(1).map(async buku => ({
      idBarang: await createDataBarang(buku),
      penulis: buku[2],
      jilid: Number(buku[3]),
      edisi: Number(buku[4])
    }))),      
    });
    console.log('Data Buku seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedBukuDatabase().catch((error) => {
  console.error('Error seeding database:', error);
})

// e-204

async function createDataBarang2(barang: any, posisi: string){  
  const oldbarang = await prisma.dataBarang.findFirst({
    where: {
      kodeBarang: String(barang[1]),
    },
  })

  if (oldbarang) return oldbarang.id

  const newBarang = await prisma.dataBarang.create({
    data: {
      kodeBarang: String(barang[1]),
      nama: barang[3],
      type: 'alat',
      posisiBarang: String(barang[6]) || posisi,
      tersedia: parseInt(barang[5]) || 0,
      jumlah: parseInt(barang[5]) || 0
    },
  });

  return newBarang.id
}

async function seedBarang() {
  for (let index = 1; index <= 2; index++) {        
  const sheetn = workbook.SheetNames[index];
  console.log('\nSheet Name:', sheetn);
  const sheet = workbook.Sheets[sheetn];
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  try {
    console.log('Seeding data...');
    const filteredData = jsonData.slice(1).filter(barang => {
      return barang[1] && barang[3] && barang[4]; 
    });

    await prisma.detailAlat.createMany({
    data: await Promise.all(filteredData.slice(1).map(async barang => ({
      idBarang: await createDataBarang2(barang, sheetn),
      merek: barang[4],
      tahunPerolehan: Number(barang[8]),
      nilaiPerolehan: Number(barang[9]),
      manualOperation: barang[11],
      available: barang[15] == "ADA" ? true : false,
      pemutihan: barang[13] == "IYA" ? true : false,
    }))),      
    });
    console.log('Data Barang successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}
}

seedBarang().catch((error) => {
  console.error('Error seeding database:', error);
})
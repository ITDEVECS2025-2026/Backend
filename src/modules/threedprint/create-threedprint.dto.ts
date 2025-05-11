import { z } from 'zod';

export const createThreeDPrintSchema = z.object({
  idPemesan: z.string().min(1, 'idPemesan wajib diisi'),
  idPembayaran: z.string().min(1, 'idPembayaran wajib diisi'),
  file: z.string().min(1, 'file wajib diisi'),
  keterangan: z.string().min(1, 'keterangan wajib diisi'),
});

export type CreateThreeDPrintDto = z.infer<typeof createThreeDPrintSchema>;

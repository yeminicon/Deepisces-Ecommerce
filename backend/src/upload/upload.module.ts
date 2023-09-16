// src/uploads/uploads.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // Specify the temporary storage folder for uploaded files
    }),
  ],
})
export class UploadsModule {}

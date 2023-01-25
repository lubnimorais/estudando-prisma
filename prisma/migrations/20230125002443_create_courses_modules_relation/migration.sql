-- CreateTable
CREATE TABLE "courses_modules" (
    "id" TEXT NOT NULL,
    "courses_id" TEXT NOT NULL,
    "modules_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "courses_modules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_courses_id_fkey" FOREIGN KEY ("courses_id") REFERENCES "coursers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_modules_id_fkey" FOREIGN KEY ("modules_id") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

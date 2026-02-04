-- CreateTable
CREATE TABLE "Verb" (
    "id" SERIAL NOT NULL,
    "base" TEXT NOT NULL,
    "past" TEXT NOT NULL,
    "participle" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Verb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Verb_base_key" ON "Verb"("base");

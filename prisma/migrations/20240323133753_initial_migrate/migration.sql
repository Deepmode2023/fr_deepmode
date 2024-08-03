-- CreateTable
CREATE TABLE "user" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roles" TEXT NOT NULL,
    "updated_account" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "namedSession" TEXT NOT NULL,
    "expireTime" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "session_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "user" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_namedSession_key" ON "session"("namedSession");

-- CreateIndex
CREATE UNIQUE INDEX "session_userEmail_key" ON "session"("userEmail");

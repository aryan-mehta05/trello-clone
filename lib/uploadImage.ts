import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64f063da632710ccfb5d",
    ID.unique(),
    file
  );

  return fileUploaded;
}

export default uploadImage;
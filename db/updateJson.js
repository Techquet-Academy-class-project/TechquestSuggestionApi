import { writeFile } from "fs/promises";

export default function updateJsonFile(path, data) {
  const updatedData = JSON.stringify(data, null, 2);
  writeFile(path, updatedData, (error) => {
    if (error) {
      console.log("Failed to update Json", error);
      return;
    }
    console.log("File updated successfully");
  });

  //Todo this function should return a flag and messages
  //indicating the success of the operation
}

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Dispatch } from "react";

type storageType = {
  fileUploaded: File | null | undefined,
  bucketType: string,
  alertState: Dispatch<React.SetStateAction<boolean>>
}

export const storage = async ({ fileUploaded, bucketType,alertState }: storageType) => {
  const file = fileUploaded;
  console.log(file)
  const bucket = bucketType
  const supabase = createClientComponentClient();

  // Call Storage API to upload file
  if (file != null || file != undefined) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(file.name, file);

    // Handle error if upload failed
    if (error) {
      alert('Error uploading file.');
      console.log(error)
      return;
    }
    alertState(true)
    console.log(data)
  }

}

import { FileEntry } from "@tauri-apps/api/fs"
import { FC } from "react"

interface Props {
    file: FileEntry
}

const handleOpenFile = async (file:FileEntry) => {
    console.log(file.path);
}

export const File: FC<Props> = ({file}:Props) => {
  return (
    <div>
        <button onClick={()=>handleOpenFile(file)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2 text-center">{file.name}</button>
    </div>
  )
}

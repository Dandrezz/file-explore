import { useState, FC } from "react"
import { FileEntry } from "@tauri-apps/api/fs"
import { File } from "./File"

interface Props {
    file: FileEntry
}

export const Folder: FC<Props> = ({ file }: Props) => {

    const [showChildren, setShowChildren] = useState<Boolean>(false)

    const handleShowChildren = () => {
        setShowChildren(!showChildren)
    }

    return (
        <div>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={handleShowChildren}>{file.name}</button>
            {
                showChildren &&
                (<div className="ml-20">
                    {file.children?.map((fileChildren, index) => (
                        fileChildren.children 
                        ?
                        <Folder key={index} file={fileChildren} />
                        :
                        <File key={index} file={fileChildren}/>
                    ))}
                </div>)
            }
        </div>
    )
}

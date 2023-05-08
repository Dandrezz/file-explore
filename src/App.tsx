import { useState } from "react";
import { readDir, BaseDirectory, FileEntry } from '@tauri-apps/api/fs';
import "./App.css";
import { Folder } from "./components/Folder";

function App() {

	const [files, setFiles] = useState<FileEntry[]>([]);


 	const handleReadDir = async () => {
		const files = await readDir(".",{dir:BaseDirectory.Home, recursive: true});
		setFiles(files);
		console.log("Metodo de lectura");
	}

	const handleClickFolder = async (file:FileEntry) => {
		console.log(file.children);
		console.log("Metodo de lectura");
	}

	return (
		<div className="bg-slate-900 min-h-screen text-white">
			<h1 className="text-4xl text-center">Welcome to Tauri!</h1>
			<div className="justify-center align-middle flex">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5" onClick={handleReadDir}>Leer</button>
			</div>
			<div>
				{
					files.filter( file => file.name?.at(0)!="." ).map((file, index) => (
						<Folder 
							key={index}
							file={file}
						/>
					))
				}
			</div>
		</div>
	);
}	

export default App;

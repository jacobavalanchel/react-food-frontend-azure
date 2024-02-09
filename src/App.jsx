import React, {useRef, useState,ChangeEvent} from "react";

function App() {
    const [value, setValue]= useState('')
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadResult, setUploadResult] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('file changed');
        setUploadedFile(file);
    };

    const handleUpload = async () => {
        console.log("starting upload");
        if (!uploadedFile) {
            console.log('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', uploadedFile);

        try {
            const response = await fetch('https://contosowebbackend20240207112230.azurewebsites.net/api/first/OnPostUpload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('File uploaded successfully');
            } else {
                console.error('Failed to upload file');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    // get dom
    const inputRef = useRef(null)
    const showDom=()=>{
        console.log(inputRef.current)
    }
    return (
        //data binding
        <div className="App">
            <input
                ref={inputRef}
                value={value}
                type="text" />
            <button onClick={handleUpload}>click im new button me</button>
            <input type="file" onChange={handleFileChange} accept="image/gif,image/jpeg,image/jpg,image/png" multiple/>
        </div>



    );




}

export default App;

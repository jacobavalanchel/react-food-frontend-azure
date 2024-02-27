import React, {useState} from 'react';
import {Button, Container, TextField} from "@mui/material";

const UploadPage = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadResult, setUploadResult] = useState(null);
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
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('file changed');
        setUploadedFile(file);
    };
    return (
        <div>
            <Container>
                <div className="file-upload-container">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                        multiple
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={handleUpload}>
                        Upload
                    </Button>
                </div>
            </Container>

        </div>
    );
};

export default UploadPage;

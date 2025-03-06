import React, { useState } from 'react';
import axios from 'axios';

const CVManager: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [downloadStatus, setDownloadStatus] = useState<string>('');

  // File selection handler
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF and Word documents are allowed');
        return;
      }

      if (file.size > maxSize) {
        alert('File size should not exceed 5MB');
        return;
      }

      setSelectedFile(file);
    }
  };

  // CV Upload Handler
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('cv', selectedFile);

    try {
      setUploadStatus('Uploading...');
      const response = await axios.post('/api/cv/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setUploadStatus('Upload successful');
      alert(response.data.message);
    } catch (error) {
      setUploadStatus('Upload failed');
      console.error('Upload error:', error);
      alert('CV upload failed');
    }
  };

  // CV Download Handler
  const handleDownload = async () => {
    try {
      setDownloadStatus('Downloading...');
      const response = await axios.get('/api/cv/download', {
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'my-cv.pdf');
      document.body.appendChild(link);
      link.click();

      setDownloadStatus('Download successful');
    } catch (error) {
      setDownloadStatus('Download failed');
      console.error('Download error:', error);
      alert('CV download failed');
    }
  };

  return (
    <div className="cv-manager">
      <h2>CV Management</h2>

      {/* File Upload Section */}
      <div className="upload-section">
        <input
          type="file"
          onChange={handleFileSelect}
          accept=".pdf,.doc,.docx"
        />
        <button onClick={handleUpload} disabled={!selectedFile}>
          Upload CV
        </button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>

      {/* Download Section */}
      <div className="download-section">
        <button onClick={handleDownload}>Download CV</button>
        {downloadStatus && <p>{downloadStatus}</p>}
      </div>
    </div>
  );
};

export default CVManager;

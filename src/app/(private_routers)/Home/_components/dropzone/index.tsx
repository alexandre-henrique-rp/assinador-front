'use client';
import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

interface DropzoneProps {
    onFilesDropped: (files: FileList) => void;
}

const Dropzone = ({ onFilesDropped }: DropzoneProps) => {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (event: { preventDefault: () => void; dataTransfer: { files: any; }; }) => {
        event.preventDefault();
        setIsDragOver(false);
        const files = event.dataTransfer.files;
        onFilesDropped(files);
    };

    const handleChange = (event: { target: { files: any; }; }) => {
        const files = event.target.files;
        onFilesDropped(files);
    };

    return (
        <Box
            border="2px dashed"
            borderColor={isDragOver ? "gray.600" : "gray.300"}
            borderRadius="md"
            width="300px"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color={isDragOver ? "gray.600" : "gray.300"}
            fontFamily="Arial, sans-serif"
            fontSize="16px"
            margin="0 auto"
            position="relative"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input").click()}
            cursor="pointer"
        >
            <Text>
                Arraste e solte arquivos aqui ou clique para selecionar.
            </Text>
            <Input
                type="file"
                id="file-input"
                display="none"
                multiple
                onChange={handleChange}
            />
        </Box>
    );
};

export default Dropzone;

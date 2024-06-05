'use client';
import { Box, Image } from "@chakra-ui/react";


interface Props {
    fileUrl: string;
}

export const PdfRenderProps = async(data: Props) => {
 const Url = `http://localhost:3000/api/pdf?url=http://127.0.0.1:1337${data.fileUrl}`;

 console.log("🚀 ~ PdfRenderProps ~ Url:", Url)
    return (
        <Box w={"100%"} h={"100%"} overflowY={"auto"}>
            <Image src={`${Url}`} />
        </Box>
    );
};

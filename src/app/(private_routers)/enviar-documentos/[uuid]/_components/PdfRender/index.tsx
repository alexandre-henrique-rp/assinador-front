
import { Box } from "@chakra-ui/react";

interface Props {
    id: string;
}

export const PdfRenderProps = async (data: Props) => {

    const Url = `/api/pdf/${data.id}`;

    return (
        <Box
            w={"95%"}
            h={"100%"}
            border={"6px solid #00713D"}
            borderRadius={"10px"}
        >
            <Box w={"100%"} h={"100%"} overflowY={"auto"}>
                {!data.id && null}
                {!!data.id && <iframe src={Url} width="100%" height="100%"></iframe>}
            </Box>
        </Box>
    );
};

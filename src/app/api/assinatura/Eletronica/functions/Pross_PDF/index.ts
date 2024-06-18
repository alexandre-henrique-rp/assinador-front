import PdfPrinter from "pdfmake";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ContentText, TDocumentDefinitions } from "pdfmake/interfaces";

// Obter __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ProssPDF = () => {
    try {
        const fonts = {
            Roboto: {
                normal: path.resolve(__dirname, "./fonts/Roboto-Regular.ttf"),
                bold: path.resolve(__dirname, "./fonts/Roboto-Medium.ttf"),
                italics: path.resolve(__dirname, "./fonts/Roboto-Regular.ttf"),
                bolditalics: path.resolve(__dirname, "./fonts/Roboto-MediumItalic.ttf"),
            },
        };

        const printer = new PdfPrinter(fonts);

        const greeting: string = 'Can you see me';
        const url = 'http://pdfmake.org';
        const longText = 'The amount of data that can be stored in the QR code symbol depends on the datatype (mode, or input character set), version (1, …, 40, indicating the overall dimensions of the symbol), and error correction level. The maximum storage capacities occur for 40-L symbols (version 40, error correction level L):';

        const header = (text: string): ContentText => {
            return { text: text, margin: [0, 0, 0, 8] }; // margin, não margins
        };

        const docDefinition: TDocumentDefinitions = {
            pageMargins: [10, 10, 10, 10],
            content: [
                header(greeting),
                { qr: greeting },
                '\n',

                header('Colored QR'),
                { qr: greeting, foreground: 'red', background: 'yellow' },
                '\n',

                header(url),
                { qr: url },
                '\n',

                header('A very long text (' + longText.length + ' chars)'),
                { qr: longText },
                '\n',

                header('same long text with fit = 100 and alignment = right'),
                { qr: longText, fit: 150, alignment: 'right' },
                '\n',

                header('same long text with fit = 100 and padding = 1 modules in pixel'),
                { qr: longText, fit: 150, padding: 1 },
            ],
        };

        const pdfDoc = printer.createPdfKitDocument(docDefinition);
        // pdfDoc.pipe(fs.createWriteStream(path.resolve(__dirname, "./qrCode.pdf")));
        // pdfDoc.end();

        return pdfDoc
        return { message: "PDF gerado com sucesso" };
    } catch (error) {
        throw { message: "Erro ao gerar o PDF", erro: error };
    }
};


import { Document, Page, pdfjs} from 'react-pdf';
import './PDFViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFViewer = ({ route }: { route: string }) => {
    return <Document
            file={route}
        >
        <Page pageNumber={1} />
    </Document>
}
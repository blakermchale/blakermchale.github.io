import React from 'react';
import styled from 'styled-components';

// import React, { Component } from 'react';
// import { pdfjs, Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// class PDFViewer extends Component {
//   constructor(props){
//     super(props);
//     this.state = { numPages: null, pageNumber: 1 };
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   onItemClick = ({ pageNumber }) => {
//     this.setState(state => ({ pageNumber: pageNumber }));
//   }

//   goToPrevPage = () => {
//     const { pageNumber } = this.state;
//     if (pageNumber !== 1) {
//       this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
//     }
//   }
//   goToNextPage = () => { 
//     const { pageNumber, numPages } = this.state;
//     if (pageNumber !== numPages) {
//       this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
//     }
//   }
//   getPages = () => {
//     const items = [];
//     let i = 1;
//     let { numPages } = this.state;
//     while (i <= numPages) {
//       items.push(<Page pageNumber={i} key={i * Math.floor(Math.random() * 1000) + 1} style=""/>);
//       i++;
//     }  
//     return items;
//   }

//   render() {
//     const { pageNumber, numPages } = this.state;
//     return (
//       <div class="magazine">
//         <div>
//           <Document
//             file={this.props.file}
//             onLoadSuccess={this.onDocumentLoadSuccess}
//             onItemClick={this.onItemClick}
//           > 
//             <Page pageNumber={ pageNumber }/>
//             {/* {this.getPages()} */}
//           </Document>
//           <div>
//             <button
//               type="button"
//               disabled={pageNumber <= 1}
//               onClick={this.goToPrevPage}
//             >
//               Previous
//             </button>
//             <button
//               type="button"
//               disabled={pageNumber >= numPages}
//               onClick={this.goToNextPage}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const PDFViewer = ({ file }) => {

  return (
    <StyledIFrame src={file} width="100%" height="800px"/>
  );
}

const StyledIFrame = styled.iframe`
  height: 800px;

  @media (max-width: 450px) {
    height: 450px;
  }

  @media (max-width: 400px) {
    height: 450px;
  }
`

export default PDFViewer;

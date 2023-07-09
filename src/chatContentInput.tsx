// import pdfParse from 'pdf-parse';
// import Browser from "webextension-polyfill";
import React, { useState } from "react";
// import { debounce } from "lodash";
import {TableItem} from "../types";

/*
Given the length of the following context, I'll be providing it in several parts. Please hold off on providing any responses until you've received all of the information.
Part 1:  ```
"Final Part: ```    setIsLoading(true);
    setDisplayedMessage("");
    setInputValue("");
    port.postMessage({ text, type: "NEW_PROMPT" });
  }
};```. Now that I've given all the parts of the context, here's my question: explain the code provided and give the optimization one.

// Load Mammoth.js library
const script = document.createElement("script");
script.src = Browser.runtime.getURL("mammoth.browser.min.js");
document.head.appendChild(script);
// Load xlsx.min.js library
const xlsxScript = document.createElement("script");
xlsxScript.src = Browser.runtime.getURL("xlsx.min.js");
document.head.appendChild(xlsxScript); 
*/

export type ContentInputProps = {
    value: string;
    onChange: (value: string) => void;
    onTextExtracted: (filetext:string) => void;
    inputHistory: string[];
}

export const ContentInput = ({ value, onChange, onTextExtracted, inputHistory }: ContentInputProps) => {

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (ev: any) => {
          const buffer = ev.target.result;
          let extractedText = '';
          switch (file.type) {
            // case 'application/pdf':
            //   // const data = new Uint8Array(buffer);
            //   const pdfData = await pdfParse(buffer);
            //   extractedText = pdfData.text;
            //   break;
            // case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            //   const docxText = await mammoth.extractRawText({ arrayBuffer: buffer });
            //   extractedText = docxText.value;
            //   break;
            // case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            //   const workbook = XLSX.read(new Uint8Array(buffer), { type: 'array' });
            //   const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            //   extractedText = XLSX.utils.sheet_to_txt(worksheet);
            //   break;
            default:
              extractedText = await file.text();
              console.log(extractedText)
              extractedText = extractedText.replace(/\/\/.*$/gm, '\n');
              extractedText = extractedText.replace(/\/\*[\s\S]*?\*\//gm, '');
              extractedText = extractedText.replace(/(\r\n|\n|\r)/gm, ' ');
              console.log(extractedText)
          }
          // const chunks = splitIntoChunks(extractedText, CHUNK_SIZE);  // CHUNK_SIZE is your specified size

          // // Call your 'onTextExtracted' function here so that 'extractedText' is correctly passed to it
          onTextExtracted(extractedText);
        };

        reader.readAsArrayBuffer(file);

      }
    };
    
    
    // const handleHistorySelect = (value: string) => {
    //     onChange(value);
    //     setShowHistory(false);
    // };
    return (
      <div className="content-input">
        <div className="input-group">
          <input type="file" onChange={handleFileUpload} />
        </div>
      </div>
    );
};

const template: TableItem = {
  id: {key: 'id', label: 'ID', value: '1'},
  name: {key: 'name', label: 'Name', value: 'File 1'},
  version: {key: 'version', label: 'Version', value: '1.0'},
  description: {key: 'description', label: 'Description', value: 'This is a description'},
  created_at: { key: 'created_at', label: 'Created At', value: new Date() },
  updated_at: { key: 'updated_at', label: 'Updated At', value: new Date() },
};
export const templateList: TableItem[] = [
  {
    // id: {key: 'id', label: 'ID', value: '1'},
    name: {key: 'name', label: 'Name', value: 'Template 1'},
    description: {key: 'description', label: 'Description', value: 'give the changes as a complete modifi ...'},
    // content: {key: 'description', label: 'Description', value: 'give the changes as a complete modified version {modified_code} with {newversion} : the new requirement {requirement} based on the code below which is labeled as "selectall" with a current version of {version} and provide an explanation no more than 15 words of {explanation} about the changes {changes} ,"selectall":{{content}},"version": "{version}","requirement": the floating button should be locate at up-right of current tab,format the response as a pretty format JSON containing the following keys: modified_code, explanation in 15 words or less., changes, and the version number after changes "newversion". (no more other words, just the json)'},
    // version: {key: 'version', label: 'Version', value: '1.0'},
    // created_at: { key: 'created_at', label: 'Created At', value: new Date() },
    updated_at: { key: 'updated_at', label: 'Updated At', value: new Date().toDateString() },

  },
  {
    // id: {key: 'id', label: 'ID', value: '1'},
    name: {key: 'name', label: 'Name', value: 'Template 1'},
    description: {key: 'description', label: 'Description', value: 'give the changes as a  ...'},
    // content: {key: 'description', label: 'Description', value: 'give the changes as a complete modified version {modified_code} with {newversion} : the new requirement {requirement} based on the code below which is labeled as "selectall" with a current version of {version} and provide an explanation no more than 15 words of {explanation} about the changes {changes} ,"selectall":{{content}},"version": "{version}","requirement": the floating button should be locate at up-right of current tab,format the response as a pretty format JSON containing the following keys: modified_code, explanation in 15 words or less., changes, and the version number after changes "newversion". (no more other words, just the json)'},
    // version: {key: 'version', label: 'Version', value: '1.0'},
    // created_at: { key: 'created_at', label: 'Created At', value: new Date() },
    updated_at: { key: 'updated_at', label: 'Updated At', value: new Date().toDateString() },

  }
];
export const historyList = [
    "Hello, here is a template message!",
  ];
  
export type TemplateListProps = {
    items: TableItem[];
    onSelect: (value: TableItem) => void;
    onAdd: (template: TableItem) => void;
  };
export type HistoryListProps = {
    items: string[];
    onSelect: (value: string) => void;
  };
  
export const TemplateList = ({ items, onSelect, onAdd }: TemplateListProps) => {
    const [newTemplate, setNewTemplate] = useState<TableItem>({} as TableItem);

    const handleNewTemplateChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        // setNewTemplate({
        //   ...newTemplate,
        //   description: {
        //     ...newTemplate.description.value,
        //     value: event.target.value
        //   }
        // });
      };
    
      const handleAddTemplate = () => {
        onAdd(newTemplate);
        setNewTemplate({} as TableItem);
      };
    
    return (
        <div className="template-list">
          <div className="template-list-header">
            <input
              type="text"
              placeholder="Enter new template..."
              value={newTemplate.description?.value?.toString() || ''}
              onChange={handleNewTemplateChange}
            />
            <button onClick={handleAddTemplate}>Add</button>
          </div>
          {items.map((item) => (
            <div key={item.id?.value?.toString()} onClick={() => onSelect(item)}>
              {item.description?.value?.toString()}
            </div>
          ))}
        </div>
      );
  };
export const HistoryList = ({ items, onSelect }: HistoryListProps) => {
    return (
      <div className="history-list">
        {items.map((item) => (
          <div key={item} onClick={() => onSelect(item)}>
            {item}
          </div>
        ))}
      </div>
    );
  };

export type LanguageInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const LanguageInput = ({ value, onChange }: LanguageInputProps) => {
  const [showList, setShowList] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(value);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    onChange(language);
    setShowList(false);
  };

  const languageList = [
    "English",
    "Spanish",
    "Chinese",
  ];

  return (
    <div className="language-input">
      <div className="input-group">
        <input
          type="text"
          placeholder="Select language..."
          value={selectedLanguage}
          onClick={() => setShowList(!showList)}
          readOnly
        />
        <button onClick={() => setShowList(!showList)}>
          <span>Select language...</span>
          <i className={`fas fa-caret-${showList ? 'up' : 'down'}`}></i>
        </button>
      </div>
      {showList && (
        <div className="language-list">
          {languageList.map((language) => (
            <div
              key={language}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
import React, { useState } from "react";
// import {Stack, Text, IconButton,HoverCard} from '@fluentui/react';
import Button from "@material-ui/core/Button";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionHeader,
} from "@fluentui/react-accordion";
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Collapse,
  TextareaAutosize,
  useTheme,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import SvgIcon from "@mui/material/SvgIcon";
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
  onTextExtracted: (filetext: string) => void;
  inputHistory: string[];
};

export const ContentInput = ({
  value,
  onChange,
  onTextExtracted,
  inputHistory,
}: ContentInputProps) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (ev: any) => {
        const buffer = ev.target.result;
        let extractedText = "";
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
            console.log(extractedText);
            extractedText = extractedText.replace(/\/\/.*$/gm, "\n");
            extractedText = extractedText.replace(/\/\*[\s\S]*?\*\//gm, "");
            extractedText = extractedText.replace(/(\r\n|\n|\r)/gm, " ");
            console.log(extractedText);
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

export const templateList = [
  "And here is a third template message.",
  'give the changes as a complete modified version {modified_code} with {newversion} : the new requirement {requirement} based on the code below which is labeled as \'selectall\' with a current version of {version} and provide an explanation no more than 15 words of {explanation} about the changes {changes} ,\'selectall\':{{content}},"version": "0.2","requirement": the floating button should be locate at up-right of current tab,format the response as a pretty format JSON containing the following keys: modified_code, explanation in 15 words or less., changes, and the version number after changes "newversion". (no more other words, just the json)',
];
export const historyList = ["Hello, here is a template message!"];

export type TemplateListProps = {
  items: string[];
  onSelect: (value: string) => void;
  onAdd: (template: string) => void;
};
export type HistoryListProps = {
  items: string[];
  onSelect: (value: string) => void;
};

export const TemplateList = ({ items, onSelect, onAdd }: TemplateListProps) => {
  const [newTemplate, setNewTemplate] = useState("");

  const handleNewTemplateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTemplate(event.target.value);
  };

  const handleAddTemplate = (event: any) => {
    event?.preventDefault();
    onAdd(newTemplate);
    setNewTemplate("");
  };
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [value, setValue] = useState<string | null>(null);
  const theme = useTheme();
  const handleClick = (event: React.ChangeEvent<{}>) => {
    setValue(theme.palette.primary.main);
    console.log(value);
  };
  //   return (
  //     <Button variant="contained" color="primary" onClick={handleClick}>
  //       Hello World
  //       <p>value: {value}</p>
  //     </Button>
  //   );
  //   return (
  //     <Card style={{ backgroundColor: "lightblue"}}>
  //       <CardContent>
  //         <IconButton aria-label="emoji">
  //           <EmojiEmotionsIcon />
  //         </IconButton>
  //         {/* <Typography variant="body2" color="textSecondary" component="p"> */}
  //         {/* </Typography> */}
  //         <IconButton
  //           onClick={handleExpandClick}
  //           aria-expanded={expanded}
  //           aria-label="show more"
  //         >
  //           <ExpandMoreIcon />
  //         </IconButton>
  //         <Collapse in={expanded} timeout="auto" unmountOnExit>
  //           <CardContent>
  //             <TextareaAutosize
  //               minRows={3}
  //               style={{
  //                 width: "100%",
  //                 backgroundColor: "#333333",
  //                 color: "white"
  //               }}
  //               placeholder="Expanded content..."
  //             />
  //           </CardContent>
  //         </Collapse>
  //       </CardContent>
  //     </Card>
  //   );
  return (
    <Accordion collapsible>
      <AccordionItem value="item">
        <AccordionHeader
          expandIconPosition="end"
          color="blue"
          style={{ fontSize: "20px" }}
        >
          Accordion Header
          <button onClick={handleAddTemplate}>Add</button>
        </AccordionHeader>
        <AccordionPanel>
          <table>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} onClick={() => onSelect(item)}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export const HistoryList = ({ items, onSelect }: HistoryListProps) => {
  return (
    <div className="history-list" style={{ backgroundColor: "gray" }}>
      {items.map((item) => (
        <div
          key={item}
          onClick={() => onSelect(item)}
          style={{ fontSize: "20px" }}
        >
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

  const languageList = ["English", "Spanish", "Chinese"];

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
          <i className={`fas fa-caret-${showList ? "up" : "down"}`}></i>
        </button>
      </div>
      {showList && (
        <div className="language-list">
          {languageList.map((language) => (
            <div key={language} onClick={() => handleLanguageSelect(language)}>
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

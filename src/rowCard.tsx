import { useState } from "react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGlobe, faClock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {  Accordion,  AccordionItem,  AccordionHeader,  AccordionPanel,  Text,  Button,  Field,  ProgressBar,  makeStyles,  Avatar,  TableBody,  TableCell,  TableRow,  Table,  TableHeader,  TableHeaderCell,  TableCellLayout,} from "@fluentui/react-components";
import {  FolderRegular,  EditRegular,  OpenRegular,  DocumentRegular,  PeopleRegular,  DocumentPdfRegular,  VideoRegular,  Important16Regular,  FlagRegular} from "@fluentui/react-icons";
import { TableItem, Column } from "../types";
// import { FlagRegular, Important16Regular } from "@fluentui/react-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  gap: 0px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 0.2em;
  // color: palevioletred;
`;

const Subtitle = styled.text`
  display: flex;
  align-items: center;
  font-size: 0.01em;
  // color: palevioletred;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1px;
  font-size: 0.2em;
  // background-color: #e9e9e9;
`;

const StatusBar = styled.div`
  align-self: flex-end;
  font-size: 0.2em;
  color: gray;
`;

const useStyles = makeStyles({
  thickProgressBar: {
    height: "20px", // Adjust this value to change the thickness of the progress bar
    backgroundColor: "whitesmoke", // Add a background color to the progress bar
    // background-color:"green"// color: "yellow",
  },
});
// const colorPaletteRedBackground3 = "#ff0000";
interface RowCardProps {
  items : TableItem[];
  onSelect: (value: TableItem) => void;
  columns?: Column[];
  type: string;
};
export const RowCard = ({ items, onSelect, type, columns }: RowCardProps) => {
  const [textareaValue, setTextareaValue] = useState("");
  const styles = useStyles();
  const handleTextareaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextareaValue(event.target.value);
  };
  // return (
  //   <Field validationMessage="Large ProgressBar" validationState="none">
  //     <ProgressBar
  //       className={styles.thickProgressBar}
  //       shape="square"
  //       color="error"
  //       value={0.7}
  //     />
  //   </Field>
  //   // <ProgressBar className={styles.thickProgressBar} value={50} />
  // );
  return (
    <Accordion collapsible>
      <AccordionItem value="1">
        <AccordionHeader expandIconPosition="end">
          <Container>
            <Title>
              {/* <Button icon={<FlagRegular />} /> */}
              Title
              {/* <Important16Regular /> */}
            </Title>
            <Subtitle>Extract colors from an image to</Subtitle>
            {/* <Footer>
              <div>Footer text and html</div>
            </Footer> */}
          </Container>
        </AccordionHeader>
        <AccordionPanel>
          {type === "table" && (
          <Table size="extra-small" aria-label="Table with extra-small size">
          <TableHeader>
            <TableRow>
              {columns?.map((column) => {
                if (items[0].hasOwnProperty(column.key)) {
                  return (
                    <TableHeaderCell key={column.key}>
                      {column.label}
                    </TableHeaderCell>
                  );
                }
                return null;
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item:TableItem) => (
              <TableRow key={item.name?.label}>
                <TableCell>
                  <TableCellLayout media={item.name?.icon}>
                    {item.name?.label}
                  </TableCellLayout>
                </TableCell>
                <TableCell>{item.created_at?.label}</TableCell>
                <TableCell>
                  <TableCellLayout media={item.created_at?.icon}>
                    {item.created_at?.label}
                  </TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
          )}
          {type === "textarea" && (
            <>
              <Text>
                <textarea
                  rows={3}
                  style={{
                    width: "100%",
                    backgroundColor: "#333333",
                    color: "white",
                  }}
                  placeholder="Expanded content..."
                  value={textareaValue}
                  onChange={handleTextareaChange}
                />
              </Text>
              <StatusBar>{textareaValue.length} tokens </StatusBar>
              <Field>
                <ProgressBar value={textareaValue.length/15000} />
              </Field>
            </>
          )}
          {type === "accordion" && (
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader expandIconPosition="end">
                  <Text>Sub Accordion Header</Text>
                </AccordionHeader>
                <AccordionPanel>Sub Accordion Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default RowCard;

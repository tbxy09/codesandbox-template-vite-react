import { useState } from "react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGlobe, faClock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {  Accordion,  AccordionItem,  AccordionHeader,  AccordionPanel,  Text,  Button,  Field,  ProgressBar,  makeStyles,  Avatar,  TableBody,  TableCell,  TableRow,  Table,  TableHeader,  TableHeaderCell,  TableCellLayout,} from "@fluentui/react-components";
import {  FolderRegular,  EditRegular,  OpenRegular,  DocumentRegular,  PeopleRegular,  DocumentPdfRegular,  VideoRegular,  Important16Regular,  FlagRegular} from "@fluentui/react-icons";
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

export type RowCardProps = {
  items: string[];
  onSelect: (item: string) => void;
  type: string;
};

const useStyles = makeStyles({
  thickProgressBar: {
    height: "20px", // Adjust this value to change the thickness of the progress bar
    backgroundColor: "whitesmoke", // Add a background color to the progress bar
    // background-color:"green"// color: "yellow",
  },
});
// const colorPaletteRedBackground3 = "#ff0000";
export const RowCard = ({ items, onSelect, type }: RowCardProps) => {
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
              {columns.map((column) => (
                <TableHeaderCell key={column.columnKey}>
                  {column.label}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.file.label}>
                <TableCell>
                  <TableCellLayout media={item.file.icon}>
                    {item.file.label}
                  </TableCellLayout>
                </TableCell>
                {/* <TableCell>
                  <TableCellLayout
                    media={
                      <Avatar
                        aria-label={item.version.label}
                        name={item.version.label}
                        badge={{ status: item.version.status }}
                      />
                    }
                  >
                    {item.version.label}
                  </TableCellLayout>
                </TableCell> */}
                <TableCell>{item.lastUpdated.label}</TableCell>
                <TableCell>
                  <TableCellLayout media={item.lastUpdate.icon}>
                    {item.lastUpdate.label}
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

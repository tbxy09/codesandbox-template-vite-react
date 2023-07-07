import React from 'react';
import { Accordion, AccordionItem, AccordionPanel, AccordionHeader} from '@fluentui/react-accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
export type RowCardProps = {
  items: string[];
  onSelect: (item: string) => void;
};

export const RowCard = ({ items, onSelect }: RowCardProps) => {
  return (
    <Accordion collapsible>
      <AccordionItem value="item">
        <AccordionHeader
          expandIconPosition="end"
          color="blue"
          style={{ fontSize: "20px" }}
        >
          Accordion Header
          {/* <button onClick={handleAddTemplate}>Add</button> */}
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
export default RowCard;

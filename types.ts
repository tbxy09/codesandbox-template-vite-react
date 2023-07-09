// import { Answer } from '../messaging'

// /**
//  * Represents a message object with text, role, and timestamp properties.
//  */
export const BASE_URL = "https://chat.openai.com"
export const BASE_URL_GPT4 = `${BASE_URL}/?model=gpt-4`
export const BASE_URL_GPT3 = `${BASE_URL}/?model=text-davinci-002-render-sha`
export interface Message {
  text: string;
  role: string;
  timestamp: Date;
}


export interface Answer {
  text: string
  messageId: string
  conversationId: string
}
export interface TabMsg{
  type: string
  data: Answer
}
  
export type Event =
  | {
      type: 'answer'
      data: Answer
    }
  | {
      type: 'done'
    }

export interface GenerateAnswerParams {
  prompt: string
  onEvent: (event: Event) => void
  signal?: AbortSignal
}

export interface Provider {
  generateAnswer(params: GenerateAnswerParams): Promise<{ cleanup?: () => void }>
}

type TableField = {
  key: string;
  label: string;
  value: string | number | boolean | Date;
  icon?: string;
};
// const columns = [
//   { columnKey: "file", label: "File" }, // add different later
//   { columnKey: "template", label: "File" },
//   { columnKey: "lastUpdated", label: "Last updated" },
//   { columnKey: "actions", label: "Actions" }, // remove the item from the list and add the item to the list
// ];
// for both template list and file upload list(for workplace outline and file packed)
export interface FileItem {
  id?: TableField;
  name?: TableField;
  version?: TableField;
  description?: TableField;
  created_at?: TableField;
  updated_at?: TableField;
}
export interface TemplateItem {
  id?: TableField;
  name?: TableField;
  version?: TableField;
  description?: TableField
  created_at?: TableField;
  updated_at?: TableField;
}
export type TableItem = TemplateItem | FileItem;
export interface RowCardProps {
  onSelect: (item: TableItem) => void;
  items: TableItem[];
  type: string;
};
// Extract columns from the member of FileItem or the TemplateItem
export type Column = {
  key: keyof TableItem;
  label: string;
};
// custom columns for both template list and file upload list
export const columns: Column[] = [
  { key: "name", label: "Name" },
  { key: "version", label: "Version" },
  { key: "description", label: "Description" },
  { key: "created_at", label: "Created at" },
  { key: "updated_at", label: "Updated at" },
];


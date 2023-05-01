import { RichTitleInput } from "../ProjectInro";

export declare type BackgroundColor =
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background";
export declare type Color =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";
export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: Color | BackgroundColor;
}
export interface RichTextBaseInput {
  plain_text?: string;
  href?: string;
  annotations?: Annotations;
  type: string;
}
export interface RichTextTextInput extends RichTextBaseInput {
  type: "text";
  text: {
    content: string;
    link?: {
      type: "url";
      url: string;
    };
  };
}
export interface BlockBase {
  object: "block";
  id: string;
  type: string;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
}

export interface ParagraphBlock extends BlockBase {
  type: "paragraph";
  paragraph: {
    rich_text: RichTextTextInput[];
    children?: Block[];
  };
}
export interface HeadingOneBlock extends BlockBase {
  type: "heading_1";
  heading_1: {
    rich_text: RichTextTextInput[];
  };
  has_children: false;
}
export interface HeadingTwoBlock extends BlockBase {
  type: "heading_2";
  heading_2: {
    rich_text: RichTextTextInput[];
  };
  has_children: false;
}
export interface HeadingThreeBlock extends BlockBase {
  type: "heading_3";
  heading_3: {
    rich_text: RichTextTextInput[];
  };
  has_children: false;
}
export interface BulletedListItemBlock extends BlockBase {
  type: "bulleted_list_item";
  bulleted_list_item: {
    rich_text: RichTextTextInput[];
    children?: Block[];
  };
}
export interface NumberedListItemBlock extends BlockBase {
  type: "numbered_list_item";
  numbered_list_item: {
    rich_text: RichTextTextInput[];
    children?: Block[];
  };
}
export interface ToDoBlock extends BlockBase {
  type: "to_do";
  to_do: {
    rich_text: RichTextTextInput[];
    checked: boolean;
    children?: Block[];
  };
}
export interface Cells {
  type: "text";
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: Color | BackgroundColor;
  };
  plain_text: string;
  href: null;
}

export interface NotionTableRow {
  type: "table_row";
  table_row: {
    cells: Cells[][];
  };
}
export interface TableBlock extends BlockBase {
  type: "table";
  table: {
    has_column_header: boolean;
    has_row_header: boolean;
    table_width: number;
    children?: NotionTableRow[];
  };
}
export interface ToggleBlock extends BlockBase {
  type: "toggle";
  toggle: {
    rich_text: RichTextTextInput[];
    children?: Block[];
  };
}

interface DateRange {
  start: string;
  end: string;
  time_zone: null;
}

interface MultiSelect {
  id: string;
  name: string;
  color: string;
}
interface Title extends RichTitleInput {
  annotations: Annotations;
  href: null;
  plain_text: string;
}

export interface Property {
  id: string;
  type: string;
  date?: DateRange;
  multi_select?: MultiSelect[];
  title?: Title[];
  status?: {
    id: string;
    name: string;
    color: string;
  };
}
// export interface ProjectData {
//   id: string;
//   url: string;
//   이름?: {
//     id: string;
//     title: {
//       text: {
//         content: string;
//         link: null;
//       };
//       annotations: {
//         bold: boolean;
//         italic: boolean;
//         strikethrough: boolean;
//         underline: boolean;
//         code: boolean;
//         color: Color | BackgroundColor;
//       };
//       plain_text: string;
//       href: null;
//     }[];
//     type: "title";
//   };
//   인원?: {
//     id: string;
//     multi_select: {
//       id: string;
//       name: string;
//       color: Color | BackgroundColor;
//     }[];
//     type: "multi_select";
//   };
//   프로젝트?: {
//     id: string;
//     multi_select: {
//       id: string;
//       name: string;
//       color: Color | BackgroundColor;
//     }[];
//     type: "multi_select";
//   };
//   "언어 및 프레임워크"?: {
//     id: string;
//     multi_select: {
//       id: string;
//       name: string;
//       color: Color | BackgroundColor;
//     }[];
//     type: "multi_select";
//   };
//   "프로젝트 상태"?: {
//     id: string;
//     status: {
//       id: string;
//       name: string;
//       color: Color | BackgroundColor;
//     };
//     type: "status";
//   };
//   기간?: {
//     id: string;
//     date: {
//       start: string;
//       end: string | null;
//       timezone: string | null;
//     };
//     type: "date";
//   };
// }

export interface QuoteBlock extends BlockBase {
  type: "quote";
  quote: {
    rich_text: RichTextTextInput[];
    children?: Block[];
    color: Color | BackgroundColor;
  };
}
export interface ChildPageBlock extends BlockBase {
  type: "child_page";
  child_page: {
    title: string;
  };
}
export interface CalloutBlock extends BlockBase {
  type: "callout";
  callout: {
    rich_text: RichTextTextInput[];
    icon: {
      type: "emoji";
      emoji: string;
    };

    children?: Block[];
  };
}
export interface ColumnListBlock extends BlockBase {
  type: "column_list";
  column_list: {
    children: Block[];
  };
}
export interface ColumnBlock extends BlockBase {
  type: "column";
  column: {
    children: Block[];
  };
}
export interface ImageBlock extends BlockBase {
  type: "image";
  image: {
    caption: any[]; // You can define a more specific type if necessary
    file: {
      expiry_time: string;
      url: string;
    };
  };
}
export interface CaptionContent {
  type: "text";
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    code: boolean;
    color: Color | BackgroundColor;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
  href: null;
  plain_text: string;
}

export interface CodeBlock extends BlockBase {
  type: "code";
  code: {
    caption: CaptionContent[]; // You can define a more specific type if necessary
    language: string;
    rich_text: RichTextTextInput[]; // You can define a more specific type if necessary
  };
}

export interface Divider extends BlockBase {
  type: "divider";
}
export declare type Block =
  | ParagraphBlock
  | HeadingOneBlock
  | HeadingTwoBlock
  | HeadingThreeBlock
  | BulletedListItemBlock
  | NumberedListItemBlock
  | ToDoBlock
  | ToggleBlock
  | ChildPageBlock
  | Divider
  | CalloutBlock
  | ColumnListBlock
  | Column
  | ImageBlock
  | CodeBlock
  | TableBlock;

import { ReactNode } from 'react';

export type CheckboxType = "Heard" | "Studied" | "Solved" | "Rev 1" | "Rev 2";

export interface SubjectData {
  color: string;
  lightColor: string; // for lighter backgrounds
  icon: ReactNode;
  categories: {
    [key: string]: string[];
  };
}

export interface SubjectMap {
  [key: string]: SubjectData;
}

export interface ProgressState {
  [key: string]: string[]; // key is `${subject}-${category}-${topic}`, value is array of CheckboxTypes
}
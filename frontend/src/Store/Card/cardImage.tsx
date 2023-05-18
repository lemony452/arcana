import { create } from 'zustand';

interface ImageDataList {
  indexList: number[];
  setIndexList: (indexList: number[]) => void;
}

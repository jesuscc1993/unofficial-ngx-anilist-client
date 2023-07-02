import { ListEntryStatus } from './anilist/listEntry.types';
import { Media } from './anilist/media.types';
import { PageInfo } from './anilist/pageInfo.types';

export type MediaPage = {
  media: Media[];
  pageInfo: PageInfo;
};

export type MediaExportEntry = {
  entryId: number;
  mediaId: number;
  progress: number;
  repeat: number;
  scoreRaw: number;
  status: ListEntryStatus;
  title: string;
};

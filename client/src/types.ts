export interface NoteType {
  id: number
  title: string;
  body: string;
  tags: TagType[]
}

export interface TagType {
  id: number
  name: string
  notes: NoteType[]
}
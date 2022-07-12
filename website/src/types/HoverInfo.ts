export type Coordinates = { x: number; y: number }
export type HoverData = number | string
export type HoverInfo = (Coordinates & { data: HoverData }) | null

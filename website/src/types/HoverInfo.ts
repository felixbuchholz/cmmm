export type Coordinates = { x: number; y: number }
export type HoverData = number
export type HoverInfo = (Coordinates & { data: HoverData }) | null

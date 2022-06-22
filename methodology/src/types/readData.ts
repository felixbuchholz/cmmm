import { Offer } from './offer'
import { Category, CategoryConfig } from './scenario'

export type CallbackData = (offers: Offer[], category: Category) => void

export type ReadData = (
  callback: CallbackData,
  categoryConfig: CategoryConfig
) => void

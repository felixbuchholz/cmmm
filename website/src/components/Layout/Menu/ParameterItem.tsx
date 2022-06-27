import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { useSelectionSend } from '../../../state/selection/hooks'
import {
  IncomeItemProps,
  ParameterItemProps,
  ScenarioItemProps,
  SizeItemProps,
} from '../../../types/MenusParameter'
import { ScenarioParameters } from '../../../types/selectionMachine'
import { p } from '../../../utils/translatePlurals'

export const ParameterItem: FC<ParameterItemProps> = ({
  size,
  income,
  translateKey,
}) => {
  if (typeof size === 'number' && typeof income === 'number') {
    return (
      <ScenarioItem size={size} income={income} translateKey={translateKey} />
    )
  }

  if (typeof size === 'number') {
    return <SizeItem size={size} />
  }

  if (typeof income === 'number') {
    return <IncomeItem income={income} />
  }

  return null
}

export const ScenarioItem: FC<ScenarioItemProps> = ({
  size,
  income,
  translateKey,
}) => {
  const send = useSelectionSend()
  const handleClick = (props: ScenarioParameters): void => {
    send({ type: 'SELECT_SCENARIO', ...props })
  }
  const { t } = useTranslation()

  return (
    <div>
      <button
        onClick={() => {
          handleClick({ size, income })
        }}
      >
        {size} {t(`person${p(size)}`)} {t(translateKey)}
      </button>{' '}
      ({income} {t('units.euroPerMonth')})
    </div>
  )
}

export const SizeItem: FC<SizeItemProps> = ({ size }) => {
  const send = useSelectionSend()
  const handleClick = (props: SizeItemProps): void => {
    send({ type: 'SELECT_SIZE', ...props })
  }
  const { t } = useTranslation()

  return (
    <div>
      <button
        onClick={() => {
          handleClick({ size })
        }}
      >
        {size} {t(`person${p(size)}`)}
      </button>
    </div>
  )
}

export const IncomeItem: FC<IncomeItemProps> = ({ income }) => {
  const send = useSelectionSend()
  const handleClick = (props: IncomeItemProps): void => {
    send({ type: 'SELECT_INCOME', ...props })
  }
  const { t } = useTranslation()

  return (
    <div>
      <button
        onClick={() => {
          handleClick({ income })
        }}
      >
        {income} {t('units.euroPerMonth')}
      </button>
    </div>
  )
}

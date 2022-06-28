import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useResolveStateArrayToBool,
  useSelectionSend,
} from '../../../state/selection/hooks'

import styles from './modeToggleButton.module.css'

export const ModeToggleButton: FC = () => {
  const { t } = useTranslation()
  const send = useSelectionSend()
  const isScenarioMode = useResolveStateArrayToBool(['menu.mode_scenario'])
  const icon = isScenarioMode ? <ToggleScenarioIcon /> : <ToggleOptionsIcon />
  const translationKeyMode = isScenarioMode ? 'Options' : 'Scenario'
  const translationKey = 'menuOverview.modeToggleTooltip' + translationKeyMode

  const handleClick = (): void => {
    send('TOGGLE_SELECTION_MODE')
  }

  return (
    <aside>
      <button className={styles.button} onClick={handleClick}>
        <span className={styles.tooltipText}>{t(translationKey)}</span>
        {icon}
      </button>
    </aside>
  )
}

const ToggleScenarioIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="1em"
      height="1em"
    >
      <path d="M250 25a224 224 0 0 1 225 225 224 224 0 0 1-225 225A224 224 0 0 1 25 250 224 224 0 0 1 250 25m0-25a250 250 0 1 0 0 500 250 250 0 0 0 0-500Z" />
      <path fill="currentColor" d="M393 249 154 111v276l239-138z" />
    </svg>
  )
}

const ToggleOptionsIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="1em"
      height="1em"
    >
      <path d="M250 25a224 224 0 0 1 225 225 224 224 0 0 1-225 225A224 224 0 0 1 25 250 224 224 0 0 1 250 25m0-25a250 250 0 1 0 0 500 250 250 0 0 0 0-500Z" />
      <path
        fill="currentColor"
        d="M315 187 158 96v181l157-90zM185 326l157 91V236l-157 90z"
      />
    </svg>
  )
}

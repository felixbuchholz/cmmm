/* eslint-disable max-lines-per-function */
import { ParsedUrlQuery } from 'querystring'

import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../../state/selection/hooks'
import { allOptions } from '../../../../state/selection/scenarios'
import {
  Category,
  OptionsKey,
  ScenarioParameter,
  SelectionMachineContext,
} from '../../../../types/selectionMachine'

export const useUpdateQueryWithContext = (): void => {
  const router = useRouter()
  const context = useContextParams()
  const send = useSelectionSend()

  useEffect(() => {
    if (router.isReady) {
      const shouldUpdateContext = getShouldUpdateContext({ router, context })
      if (shouldUpdateContext) {
        send({
          type: 'ENTER_QUERY_PARAMS',
          ...encodeQueryToContext(router.query),
        })
      } else {
        const shouldUpdateQuery = getShouldUpdateQuery({ router, context })
        if (shouldUpdateQuery) {
          updateQuery({ context, router })
        }
      }
    }
  }, [context, router, send])
}

const useContextParams = (): Context => {
  const [category, income, size] = useSelectionContext(comparisonParams)
  return { category, income, size }
}

const comparisonParams: OptionsKey[] = ['category', 'income', 'size']
const categories = ['buy', 'rent']
type QueryParam = undefined | string | string[]
type ContextParam = Category | ScenarioParameter | null
type Context = Record<OptionsKey, ContextParam>

const decodeQuery = (param: QueryParam): ContextParam => {
  if (typeof param === 'undefined' || Array.isArray(param)) {
    return null
  }

  if (param === 'buy' || param === 'rent') {
    return param
  }

  return decodeNumberString(param)
}

const decodeNumberString = (str: string): number | null => {
  const number = +str
  if (isNaN(number)) {
    return null
  }

  return number
}

const isEqualDecoded = (query: QueryParam, context: ContextParam): boolean => {
  return decodeQuery(query) === context
}

const areParamsEqualContext = (
  query: ParsedUrlQuery,
  context: Context
): boolean => {
  const areEquals = comparisonParams.map(it =>
    isEqualDecoded(query[it], context[it])
  )
  return areEquals.every(it => it)
}

const encodeContextParam = (contextParam: ContextParam): string => {
  if (contextParam === null) {
    return 'null'
  }

  if (typeof contextParam === 'string' && categories.includes(contextParam)) {
    return contextParam
  }

  return contextParam.toString()
}

const encodeContext = (context: Context): Record<OptionsKey, string> => {
  const newContext = { category: '', income: '', size: '' }
  for (const key in context) {
    newContext[key] = encodeContextParam(context[key])
  }
  return newContext
}

const getShouldUpdateQuery = ({
  router,
  context,
}: {
  router: NextRouter
  context: Context
}): boolean => {
  return !areParamsEqualContext(router.query, context)
}

const updateQuery = ({
  context,
  router,
}: {
  context: Context
  router: NextRouter
}): void => {
  const newContext = encodeContext(context)
  router.replace(
    {
      query: {
        ...router.query,
        ...newContext,
      },
    },
    null,
    { shallow: true }
  )
}

const getShouldUpdateContext = ({
  router,
  context,
}: {
  router: NextRouter
  context: Context
}): boolean => {
  const isInitial = getIsInitialContext(context)

  const isValid = getIsValidQuery(router.query)
  return isInitial && isValid
}

const getIsValidQuery = (query: ParsedUrlQuery): boolean => {
  return comparisonParams.map(it => getIsValidParam(query, it)).every(it => it)
}

const getIsValidParam = (
  query: ParsedUrlQuery,
  optionsKey: OptionsKey
): boolean => {
  const decoded = decodeQuery(query[optionsKey])
  const paramOptions = allOptions[optionsKey] as unknown[]
  return paramOptions.includes(decoded)
}

const getIsInitialContext = (context: Context): boolean => {
  return comparisonParams
    .map(it => context[it] === initialValues[it])
    .every(it => it)
}

const initialValues: Omit<SelectionMachineContext, 'data'> = {
  category: 'rent',
  size: null,
  income: null,
}

const encodeQueryToContext = (
  query: ParsedUrlQuery
): Omit<SelectionMachineContext, 'data'> => {
  const encoded = { ...initialValues }
  for (const key in initialValues) {
    encoded[key] = decodeQuery(query[key])
  }
  return encoded
}

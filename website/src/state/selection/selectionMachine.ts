/* eslint-disable max-lines */
import { createMachine, assign } from 'xstate'

import {
  Category,
  SelectionMachineContext,
  SelectionMachineEvents,
} from '../../types/selectionMachine'
import { basePath } from '../../utils/environment'

export const selectionMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SzAGzAYwC4EsD2AdgHQC2YBArqXhGAPqwbkCGATvqeRXXgG5iteOMAHcAxAGEA8gDkAYgEkASgFk6AZQCiAGU0SAKgtmJQABzywcuQiZAAPRAFoAjACYArEWfeAbD4DMAOzBPoE+rj4ANCAAnojOAAz+RAAsKQk+CQkAnM4AHIEe+QC+xdEo6Nj4xGSU1LQMTARsHLXcfAJComJSAAqaMnQqAwCqdBIAgvqaAOJSSgCatuaW1gS2DgguHl6+AcFhYRHRcQgp-s5EeXnZgbfXPm75gaXlaJhrnHUkNPSMLOw8F92vxBMJxH0BkNRhoJAMJkojMsLFZqhsnG5PN5nH4giEjlFYk5XHkiK5nEFXB5silAnl-O4wq8QBUPtVgfU-k0WkC2nQMMwsGAoHhWDExFpdAZxlNZvMlkgQCtUTZFZt-K5kgk8u4stlcsF9f4TohXIFkikKbkGQkUtkCu5mayqoQOT8Gv9moDgY0AfgJTo9PpYfDEVJkas0WrEBqfKlGSlXLa9f4Liatvk4z4bj53NjApafLSne8XTUuJzfV7WlweAAzOs9fqDYYyMZSABqmiUHYUmgA6hGVeto1tsgkiAWLoFnO5E2lArb0+5PClGe4k4ztbkfNkS5VPm1K56eT68A2m1DW2NJtM5osh2t0QgSYFUn47e48ulF2b01ayUybIkzyWdZxyFJ9zZV0j3dLk-V5Wtz0bSEWxhdQ4RkBEkUVZUn1HV93yLbIvx-BI-yJBBcjJYJQMCRlrX8DIoLLN1firHkxH0KQZhmXQNEDAwjBbKQABFNEfKNQE2AtPH2BIv13OdNTydMqTfPIAncC4FPSfwUgKFjDwrOCeFMNZYC4ni+M0ASpUMWQhjEiTcJRfDpMQWSiHkxSSMTfxVMoxwSS8ZT6JI5xsmzfU8iM9khFgChmFQHAAC9BWqOhWDAOsBHIJgiFQPBmAgOgIEFZgxAgQgwCIHACF4PAAGtaudT4EqSlL0rWLKcryggCqKkqyoqhB6sagU1gAbQSABdSTVQ8jMAi8DIUlzQ00lA5x-2nVJ6P8cI7VtdxgLi10OuStKMsIXrcuygbaqG0ryqwSqBFYUUiFMVBBTrUUSCINr4pwRKru6zLsvu-KnuKl7RvGvBJuqGb5tcyNFvsDEVsSIsNruLbvH-S1LhIukSWAgyZx8UoyhAAhfngRVgZgkz2JPb0+Q6MFRAWkclscQ6UjJRiVznC4dso9I41cdazW-b9-GA+jzvLb52e5Tna0m4VRVOMw3KkrGEDzOM81O0JTueBJJdOEk43HclzXSW5vCi1W2I9TWa0oDjAT559TaIc2ovC63bacC5J2cMIEjpfImNo-wPdgjWELPBsA9HCk40Tx5NRpApcf-HYckzYDd0TXVHTplm1aoUyOY4D7RSzgWNU8YCqXIpXY+NSjUzfDxtPCVwaV3b9INr0tjPVr2ELb43BeuEWKQZFdziJoLqW8vIFOUklnAMjwU7Zho8HM6pYDPUEuhERfNkFpXV9TMXN4jhACmyK45yLDd8m0hSU+c96AXwsj6HWIoxQP0js-CISYAqhDyBTVw6ZC5XDXObAIADszAIbuxMBV8fSWFSmAGBWwNSXHjoyQ65NzTplAhOTSQQ8wGnIkfPBlZCGEGvnyeqGA8BkHIU-YWiZZyZETPaOOH9EgxyuIdRBJ18iy04aZbhBAmYGwxvzJeCiX7r3FlvU45oNKFHHN4KkVoabTwPOyI8LdWDCKVsLMea834S3TCI7yM51oBTpIdCkNc3i2NZpQYRlpSSuNfhvDxQUfzeXCExdwmRdyUKnsE6CxBLpdRugQO6-UCo4AgOgJxQQiDmMpPpY6NJ-wrlcJOIsNxtI3DpAWD22Tro9ShgU2Gw1XrMCcTSfR7ijHxD0XvLIuo95K2sRk1iHSIa3W6Q9Aq2VYB4FQPweGb1yH6SILQvMOkj7TJkSSTudwaT6kSOkWc7TQadU6ZDPqKzarZQAFYfEgCNHZ6NhzPj2QciksiDJJBkekTuzT-EZG0kElkM8QZgxyV055MMiAwAIAIQU9AhCpScbmYOjJwhZF7omTUxN6STnNLcYCWQcjJxsZkogCzcn5JeUDCgGAmCwFgHQHFeL6kGXWvaGOUUgiElOG4HYoFkH5HnIybwdzEWPKWSix6RA6zMBwKgCg2VeVpScSuaOGQ1okTNKmEuQy97WnWkfCIK5FUPMWXk5ZMNwn5GGTE0ZCBvAbiuGa8imoqahAdeDFlAiSCmDYJYTGeEjaP3nB6wxH9HDH28tpckbg0h2iCKrcJBlE3v08WLbyaRvDXBtrkMetNihAA */
  createMachine(
    {
      predictableActionArguments: true,
      context: {
        category: 'rent',
        income: null,
        size: null,
        data: null,
      },
      tsTypes: {} as import('./selectionMachine.typegen').Typegen0,
      schema: {
        context: {} as SelectionMachineContext,
        events: {} as SelectionMachineEvents,
        services: {} as {
          fetchData: {
            data: SelectionMachineContext['data']
          }
        },
      },
      id: 'selection',
      type: 'parallel',
      states: {
        menu: {
          initial: 'mode_scenario',
          states: {
            mode_scenario: {
              id: 'selection_start',
              initial: 'menu_overview',
              states: {
                menu_overview: {
                  on: {
                    CONFIRM_SELECTION: {
                      cond: 'completedSelection',
                      target: 'menu_off',
                    },
                    OPEN_MENU_CATEGORY: {
                      target: 'menu_category',
                    },
                    OPEN_MENU_SCENARIO: {
                      target: 'menu_scenario',
                    },
                    OPEN_MENU_INCOME: {
                      target: '#menu_income',
                    },
                    OPEN_MENU_SIZE: {
                      target: '#menu_size',
                    },
                    ENTER_QUERY_PARAMS: {
                      actions: 'selectQueryParams',
                      target: ['#viz_load_data', '#entered_query_params'],
                    },
                  },
                },
                menu_category: {
                  on: {
                    SELECT_CATEGORY: [
                      {
                        actions: 'selectCategory',
                        target: ['menu_off', '#viz_load_data'],
                        cond: 'completedSelection',
                      },
                      {
                        actions: 'selectCategory',
                        target: ['menu_overview', '#viz_load_data'],
                      },
                    ],
                  },
                },
                menu_scenario: {
                  id: 'menu_scenario',
                  on: {
                    SELECT_SCENARIO: [
                      {
                        actions: 'selectScenario',
                        target: ['menu_off', '#viz_load_data'],
                        cond: 'completedSelection',
                      },
                      {
                        actions: 'selectScenario',
                        target: ['menu_overview', '#viz_load_data'],
                      },
                    ],
                  },
                },
                menu_off: {
                  on: {
                    OPEN_MENU_OVERVIEW: {
                      target: 'menu_overview',
                    },
                    OPEN_MENU_CATEGORY: {
                      target: 'menu_category',
                    },
                    OPEN_MENU_SCENARIO: {
                      target: 'menu_scenario',
                    },
                  },
                },
              },
            },
            mode_options: {
              initial: 'menu_overview',
              states: {
                menu_overview: {
                  on: {
                    CONFIRM_SELECTION: {
                      cond: 'completedSelection',
                      target: 'menu_off',
                    },
                    OPEN_MENU_CATEGORY: {
                      target: 'menu_category',
                    },
                    OPEN_MENU_SIZE: {
                      target: 'menu_size',
                    },
                    OPEN_MENU_INCOME: {
                      target: 'menu_income',
                    },
                    OPEN_MENU_SCENARIO: {
                      target: '#menu_scenario',
                    },
                  },
                },
                menu_category: {
                  on: {
                    SELECT_CATEGORY: [
                      {
                        actions: 'selectCategory',
                        target: ['menu_off', '#viz_load_data'],
                        cond: 'completedSelection',
                      },
                      {
                        actions: 'selectCategory',
                        target: ['menu_overview', '#viz_load_data'],
                      },
                    ],
                  },
                },
                menu_off: {
                  id: 'entered_query_params',
                  on: {
                    OPEN_MENU_OVERVIEW: {
                      target: 'menu_overview',
                    },
                    OPEN_MENU_CATEGORY: {
                      target: 'menu_category',
                    },
                    OPEN_MENU_SIZE: {
                      target: 'menu_size',
                    },
                    OPEN_MENU_INCOME: {
                      target: 'menu_income',
                    },
                  },
                },
                menu_size: {
                  id: 'menu_size',
                  on: {
                    SELECT_SIZE: [
                      {
                        actions: 'selectSize',
                        target: ['menu_off', '#viz_load_data'],
                        cond: 'completedSelection',
                      },
                      {
                        actions: 'selectSize',
                        target: ['menu_overview', '#viz_load_data'],
                      },
                    ],
                  },
                },
                menu_income: {
                  id: 'menu_income',
                  on: {
                    SELECT_INCOME: [
                      {
                        actions: 'selectIncome',
                        target: ['menu_off', '#viz_load_data'],
                        cond: 'completedSelection',
                      },
                      {
                        actions: 'selectIncome',
                        target: ['menu_overview', '#viz_load_data'],
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        visualization_reference: {
          initial: 'load_data',
          states: {
            idle: {},
            load_data: {
              id: 'viz_load_data',
              invoke: {
                src: 'fetchData',
                onDone: [
                  {
                    target: 'resolved_data',
                    actions: 'assignResolvedData',
                  },
                ],
                onError: { target: ['rejected_data', '#global_error'] },
              },
            },
            resolved_data: {},
            rejected_data: {},
            generate_viz: {},
            success_viz: {},
            failure_viz: {},
          },
        },
        error: {
          initial: 'disabled',
          states: {
            active: {
              id: 'global_error',
              on: {
                RESET: {
                  target: ['disabled', '#selection_start', '#viz_load_data'],
                  actions: 'reset',
                },
              },
            },
            disabled: {},
          },
        },
      },
    },
    {
      actions: {
        assignResolvedData: assign({
          data: (context, event) => {
            if ('data' in event) {
              return event.data
            }
            return context.data
          },
        }),
        selectQueryParams: assign({
          category: (context, event) => {
            if ('category' in event) {
              return event.category
            }
            return context.category
          },
          income: (context, event) => {
            if ('income' in event) {
              return event.income
            }
            return context.income
          },
          size: (context, event) => {
            if ('size' in event) {
              return event.size
            }
            return context.size
          },
        }),
        selectCategory: assign({
          category: (context, event) => {
            if ('category' in event) {
              return event.category
            }
            return context.category
          },
        }),
        selectScenario: assign({
          income: (context, event) => {
            if ('income' in event) {
              return event.income
            }
            return context.income
          },
          size: (context, event) => {
            if ('size' in event) {
              return event.size
            }
            return context.size
          },
        }),
        selectIncome: assign({
          income: (context, event) => {
            if ('income' in event) {
              return event.income
            }
            return context.income
          },
        }),
        selectSize: assign({
          size: (context, event) => {
            if ('size' in event) {
              return event.size
            }
            return context.size
          },
        }),
        reset: assign({
          category: () => 'rent' as Category,
          income: () => null,
          size: () => null,
        }),
      },
      guards: {
        completedSelection: context => {
          return getCompletedSelection(context)
        },
      },
      services: {
        fetchData: async context => {
          const path = getDataPathFromContext(context)
          try {
            const response = await fetch(path)
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            const data = await response.json()
            return data
          } catch (e) {
            throw new Error(e)
          }
        },
      },
    }
  )

export const getCompletedSelection = (
  context: SelectionMachineContext
): boolean => {
  return !!(context.category && context.size && context.income)
}

export const getDataPathFromContext = ({
  category,
  size,
  income,
}: SelectionMachineContext): string => {
  return `${basePath}/data/c=${category}&size=${size}&income=${income}${dataFileSuffix}`
}

const dataFileSuffix = '.geo.json'

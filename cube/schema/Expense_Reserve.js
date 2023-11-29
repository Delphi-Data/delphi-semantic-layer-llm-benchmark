cube('Expense_Reserve', {
  sql: `SELECT * FROM PUBLIC.EXPENSE_RESERVE`,
  description: 'Expense Reserve is the amount set aside for the expected expenses to settle a Claim.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Claim_Amount: {
      relationship: 'one_to_one',
      sql: `${CUBE}.claim_amount_identifier = ${Claim_Amount.claim_amount_identifier}`
    }
  },

  measures: {
    total_expense_reserve: {
      type: 'sum',
      sql: `${Claim_Amount.claim_amount}`,
      filters: [
        {
          sql: `${CUBE}.claim_amount_identifier IS NOT NULL`
        }
      ]
    }
  },

  dimensions: {
    claim_amount_identifier: {
      type: 'number',
      sql: 'Claim_Amount_Identifier',
      primaryKey: true
    }
  }
});


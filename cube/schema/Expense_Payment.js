cube('Expense_Payment', {
  sql: `SELECT * FROM PUBLIC.EXPENSE_PAYMENT`,
  description: 'Expense Payment is the amount paid for the expenses to settle a claim in whole or in part.',

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
    total_expense_payment: {
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


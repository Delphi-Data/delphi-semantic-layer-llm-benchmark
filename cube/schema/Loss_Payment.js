cube('Loss_Payment', {
  sql: `SELECT * FROM PUBLIC.LOSS_PAYMENT`,
  description: 'Loss Payment is the amount paid to claimants to settle a claim.',

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
    total_loss_payment: {
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


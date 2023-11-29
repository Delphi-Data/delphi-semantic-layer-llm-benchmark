cube('Premium', {
  sql: `SELECT * FROM PUBLIC.PREMIUM`,
  description: 'Premium is money amount that is charged for the amount of insurance and the coverage terms provided under the policy.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Policy_Amount: {
      relationship: 'one_to_one',
      sql: `${CUBE}.policy_amount_identifier = ${Policy_Amount.policy_amount_identifier}`
    }
  },

  measures: {
    total_premium: {
      type: 'sum',
      sql: `${Policy_Amount.policy_amount}`,
      filters: [
        {
          sql: `${CUBE}.policy_amount_identifier IS NOT NULL`
        }
      ]
    },
    average_premium: {
      type: 'avg',
      sql: `${Policy_Amount.policy_amount}`,
      filters: [
        {
          sql: `${CUBE}.policy_amount_identifier IS NOT NULL`
        }
      ]
    }
  },

  dimensions: {
    policy_amount_identifier: {
      type: 'number',
      sql: 'Policy_Amount_Identifier',
      primaryKey: true
    }
  }
});


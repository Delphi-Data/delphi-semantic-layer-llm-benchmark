cube('Policy', {
  sql: `SELECT * FROM PUBLIC.POLICY`,
  description: 'Policy is a kind of written Agreement that puts insurance coverage into effect.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Policy_Coverage_Detail: {
      relationship: 'one_to_many',
      sql: `${CUBE}.policy_identifier = ${Policy_Coverage_Detail.policy_identifier}`
    }
  },

  measures: {
    count_of_policies: {
      type: 'count'
    },
    average_policy_size: {
      description: "The total amount of premium divided by the number of policies",
      type: 'number',
      sql: `${Policy_Amount.total_policy_amount} / ${CUBE}.count_of_policies`
    }
  },

  dimensions: {
    policy_identifier: {
      type: 'number',
      sql: 'Policy_Identifier',
      primaryKey: true,
      shown: true
    },
    effective_date: {
      type: 'time',
      sql: 'Effective_Date',
    },
    expiration_date: {
      type: 'time',
      sql: 'Expiration_Date',
    },
    policy_number: {
      type: 'string',
      sql: 'Policy_Number'
    },
    geographic_location_identifier: {
      type: 'string',
      sql: 'Geographic_Location_Identifier'
    }
  }
});


cube('Policy_Amount', {
  sql: `SELECT * FROM PUBLIC.POLICY_AMOUNT`,
  description: 'Policy Amount is a central entity for defining all monies associated with a Policy.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Premium: {
      relationship: 'one_to_one',
      sql: `${CUBE}.policy_amount_identifier = ${Premium.policy_amount_identifier}`
    },
    Policy_Coverage_Detail: {
      relationship: 'many_to_one',
      sql: `${CUBE}.policy_coverage_detail_identifier = ${Policy_Coverage_Detail.policy_coverage_detail_identifier}`
    }
  },

  measures: {
    total_policy_amount: {
      type: 'sum',
      sql: 'policy_amount'
    },
    average_policy_amount: {
      type: 'avg',
      sql: 'policy_amount'
    }
  },

  dimensions: {
    policy_amount_identifier: {
      type: 'number',
      sql: 'Policy_Amount_Identifier',
      primaryKey: true,
      shown: true
    },
    geographic_location_identifier: {
      type: 'number',
      sql: 'Geographic_Location_Identifier'
    },
    policy_identifier: {
      type: 'number',
      sql: 'Policy_Identifier'
    },
    effective_date: {
      type: 'time',
      sql: 'Effective_Date',
    },
    amount_type_code: {
      type: 'string',
      sql: 'Amount_Type_Code'
    },
    earning_begin_date: {
      type: 'time',
      sql: 'Earning_Begin_Date'
    },
    earning_end_date: {
      type: 'time',
      sql: 'Earning_End_Date'
    },
    policy_coverage_detail_identifier: {
      type: 'number',
      sql: 'Policy_Coverage_Detail_Identifier'
    },
    policy_amount: {
      type: 'number',
      sql: 'Policy_Amount'
    },
    insurable_object_identifier: {
      type: 'number',
      sql: 'Insurable_Object_Identifier'
    },
    insurance_type_code: {
      type: 'string',
      sql: 'Insurance_Type_Code'
    }
  }
});


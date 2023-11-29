cube('Policy_Coverage_Detail', {
  sql: `SELECT * FROM PUBLIC.POLICY_COVERAGE_DETAIL`,
  description: 'Policy Coverage Detail defines the specific coverages within the terms of a Policy.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Claim_Coverage: {
      relationship: 'one_to_many',
      sql: `${CUBE}.policy_coverage_detail_identifier = ${Claim_Coverage.policy_coverage_detail_identifier}`
    },
    Policy_Amount: {
      relationship: 'one_to_many',
      sql: `${CUBE}.policy_coverage_detail_identifier = ${Policy_Amount.policy_coverage_detail_identifier}`
    },
    Policy: {
      relationship: 'many_to_one',
      sql: `${CUBE}.policy_identifier = ${Policy.policy_identifier}`
    },
    Agreement_Party_Role: {
      relationship: 'one_to_many',
      sql: `${CUBE}.policy_identifier = ${Agreement_Party_Role.agreement_identifier}`
    }
  },

  measures: {

  },

  dimensions: {
    effective_date: {
      type: 'time',
      sql: `Effective_Date`
    },
    policy_coverage_detail_identifier: {
      type: 'number', 
      sql: `Policy_Coverage_Detail_Identifier`,
      primaryKey: true,
      shown: true,
    },
    coverage_identifier: {
      type: 'number',
      sql: `Coverage_Identifier`
    },
    insurable_object_identifier: {
      type: 'number',
      sql: `Insurable_Object_Identifier`
    },
    policy_identifier: {
      type: 'number',
      sql: `Policy_Identifier`
    },
    coverage_part_code: {
      type: 'string',
      sql: `Coverage_Part_Code`
    },
    coverage_description: {
      type: `string`,
      sql: `Coverage_Description`
    },
    expiration_date: {
      type: `string`,
      sql: `Expiration_Date`
    },
    coverage_inclusion_exclusion_code: {
      type: 'boolean',
      sql: `Coverage_Inclusion_Exclusion_Code`
    }
  }
});


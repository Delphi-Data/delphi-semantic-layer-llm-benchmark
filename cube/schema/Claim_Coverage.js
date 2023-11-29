cube('Claim_Coverage', {
  sql: `SELECT * FROM PUBLIC.CLAIM_COVERAGE`,
  description: 'Claim Coverage is an associative entity that relates a Claim to the Policy Coverage under which the claim is paid.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Policy_Coverage_Detail: {
      relationship: 'many_to_one',
      sql: `${CUBE}.policy_coverage_detail_identifier = ${Policy_Coverage_Detail.policy_coverage_detail_identifier}`
    }
  },

  measures: {

  },

  dimensions: {
    claim_identifier: {
      type: 'number',
      sql: 'Claim_Identifier',
      description: 'Claim Identifier is the unique identifier for a Claim.',
    },
    effective_date: {
      type: 'time',
      sql: 'Effective_Date',
      description: 'Effective Date is a point in time for when a contractual provision commences or goes into effect.'
    },
    policy_coverage_detail_identifier: {
      type: 'number',
      sql: 'Policy_Coverage_Detail_Identifier',
      description: 'Policy Coverage Detail Identifier is the unique identifier of each of the specific coverages within a Policy.'
    }
  },
});


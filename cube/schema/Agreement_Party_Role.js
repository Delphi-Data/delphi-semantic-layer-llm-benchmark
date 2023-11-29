cube('Agreement_Party_Role', {
  sql: `SELECT * FROM PUBLIC.AGREEMENT_PARTY_ROLE`,
  description: 'Agreement Party Role defines how a Party relates to the agreement. Examples: Party is a primary named insured on a policy agreement; Party is a broker who sold the agreement.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Policy: {
      relationship: 'many_to_one',
      sql: `${CUBE}.agreement_identifier = ${Policy.policy_identifier}`
    }
  },

  measures: {

  },

  dimensions: {
    agreement_identifier: {
      type: 'number',
      sql: 'Agreement_Identifier',
      description: 'Agreement Identifier is the unique identifier of an Agreement.',
    },
    party_identifier: {
      type: 'number',
      sql: 'Party_Identifier',
      description: 'Party Identifier is a unique identifier of Person, Organization, or Grouping that can enter into a contract or other legal proceeding, and plays a role in the insurance industry.'
    },
    party_role_code: {
      type: 'string',
      sql: 'Party_Role_Code',
      description: 'Must filter using this dimension if referring to agents or policyholders. If party_role_code = \'PH\' then Party_Identifier refers to policy_holder_id, if party_role_code = \'AG\' then Party_Identifier refers to agent_id. Should be used in coordination with party_identifier'
    },
    effective_date: {
      type: 'time',
      sql: 'Effective_Date',
      description: 'Effective Date is a point in time for when a contractual provision commences or goes into effect.'
    }, 
    expiration_date: {
      type: 'time',
      sql: 'Expiration_Date',
      description: 'Expiration Date is the year, month, and day when a contractual term or coverage is ended or when a policy expires.'
    }
  }
});


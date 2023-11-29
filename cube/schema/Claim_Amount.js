cube('Claim_Amount', {
  sql: `SELECT * FROM PUBLIC.CLAIM_AMOUNT`,
  description: 'Claim Amount is the money being paid or collected for settling a claim and paying the claimants, reinsurers, other insurers, and other interested parties. Claim amounts are classified by various attributes.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Expense_Payment: {
      relationship: 'one_to_one',
      sql: `${CUBE}.claim_amount_identifier = ${Expense_Payment.claim_amount_identifier}`
    },
    Expense_Reserve: {
      relationship: 'one_to_one',
      sql: `${CUBE}.claim_amount_identifier = ${Expense_Reserve.claim_amount_identifier}`
    },
    Loss_Payment: {
      relationship: 'one_to_one',
      sql: `${CUBE}.claim_amount_identifier = ${Loss_Payment.claim_amount_identifier}`
    },
    Loss_Reserve: {
      relationship: 'one_to_one',
      sql: `${CUBE}.claim_amount_identifier = ${Loss_Reserve.claim_amount_identifier}`
    },
    Claim: {
      relationship: 'many_to_one',
      sql: `${CUBE}.claim_identifier = ${Claim.claim_identifier}`
    }
  },

  measures: {
    average_claim_amount: {
      type: 'avg',
      sql: `${CUBE}.claim_amount`
    },
    total_claim_amount: {
      type: 'sum',
      sql: `${CUBE}.claim_amount`
    }
  },

  dimensions: {
    claim_amount_identifier: {
      description: 'Claim Amount Identifier is the unique identifier of the financial amount reserved, paid, or collected in connection with a claim.',
      type: 'number',
      sql: 'Claim_Amount_Identifier',
      primaryKey: true,
      shown: true
    },
    claim_identifier: {
      description: 'Claim Identifier is the unique identifier for a Claim.',
      type: 'number',
      sql: 'Claim_Identifier',
    },
    claim_offer_identifier: {
      description: 'Claim Offer Identifier is the unique identifier for a Claim Offer.',
      type: 'number',
      sql: 'Claim_Offer_Identifier'
    },
    amount_type_code: {
      description: 'Amount Type Code defines the category to which a monetary amount will be applied. Example: premium, commission, taxes, surcharge.',
      type: 'string',
      sql: 'Amount_Type_Code'
    },
    claim_amount: {
      description: 'Claim Amount is the financial amount reserved or paid in connection with a claim.',
      type: 'number',
      sql: 'Claim_Amount'
    },
    insurance_type_code: {
      description: 'Insurance Type Code represents the category under which risk is assumed. Examples: Direct for policies directly issued by a company; Assumed for risks assumed from another company; Ceded for portions of risk ceded to another insurer',
      type: 'string',
      sql: 'Insurance_Type_Code'
    }
  }
});


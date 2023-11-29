cube('Claim', {
  sql: `SELECT * FROM PUBLIC.CLAIM`,
  description: 'Claim is a request for indemnification by an insurance company for loss incurred from an insured peril or hazard.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Claim_Amount: {
      relationship: 'one_to_many',
      sql: `${CUBE}.claim_identifier = ${Claim_Amount.claim_identifier}`
    },
    Catastrophe: {
      relationship: 'many_to_one',
      sql: `${CUBE}.catastrophe_identifier = ${Catastrophe.catastrophe_identifier}`
    },
    Claim_Coverage: {
      relationship: 'one_to_many',
      sql: `${CUBE}.claim_identifier = ${Claim_Coverage.claim_identifier}`
    }
  },

  measures: {
    count_of_claims: {
      type: 'count',
    },
    average_time_to_settle_claim: {
      type: 'avg',
      sql: `${CUBE.days_to_settle_claim}`
    },
    total_time_to_settle_claim: {
      type: 'sum',
      sql: `${CUBE.days_to_settle_claim}`
    },
    total_loss_amount: {
      description: 'The total loss payment plus the loss reserve amount',
      type: 'number',
      sql: `${Loss_Payment.total_loss_payment} + ${Loss_Reserve.total_loss_reserve}`
    }
  },

  dimensions: {
    claim_identifier: {
      description: 'Claim Identifier is the unique identifier for a Claim.',
      type: 'number',
      sql: 'Claim_Identifier',
      primaryKey: true,
      shown: true
    },
    catastrophe_identifier: {
      description: 'Catastrophe Identifier is the uniue identifier for a Catastrophe.',
      type: 'number',
      sql: 'Catastrophe_Identifier'
    },
    claim_description: {
      description: 'Claim Description is the text describing the circumstances which resulted in a claim.',
      type: 'string',
      sql: 'Claim_Description'
    },
    claim_made_date: {
      description: 'Claims Made Date is the date on which claims were made during the extended reporting period of claims-made contracts.',
      type: 'time',
      sql: 'Claims_Made_Date'
    },
    company_claim_number: {
      description: 'Company Claim Number is the number or alpha-numeric assigned to a claim by the company.',
      type: 'string',
      sql: 'Company_Claim_Number'
    },
    company_subclaim_number: {
      description: 'Company Subclaim Number is the number assigned by the company to identify a specific claim for a specific entity that is part of a larger claim.',
      type: 'string',
      sql: 'Company_Subclaim_Number'
    },
    insurable_object_identifier: {
      description: 'Insurable Object Identifier is the unique identifier of an item relevant to an Insurance coverage or policy as an inclusion or an exclusion.',
      type: 'number',
      sql: 'Insuranble_Object_Identifier'
    },
    occurrence_identifier: {
      description: 'Occurrence Identifier uniquely identifies an event occurrence.',
      type: 'number',
      sql: 'Occurrence_Identifier'
    },
    entry_into_claims_made_program_date: {
      description: 'Entry Into Claims Made Program Date is the date that the insured registered with the claims made program.',
      type: 'time',
      sql: 'Entry_Into_Claims_Made_Program_Date'
    },
    claim_open_date: {
      description: 'Claim Open Date is the date that a claim or sub claim file is set up and a potential claim is acknowledged.',
      type: 'time',
      sql: 'Claim_Open_Date'
    },
    claim_close_date: {
      description: 'Claim Close Date is the date that a claim is considered resolved.',
      type: 'time',
      sql: 'Claim_Close_Date'
    },
    claim_reopen_date: {
      description: 'Claim Reopen Date is the date a previously closed claim is reopened for further examination and additional handling.',
      type: 'time',
      sql: 'Claim_Reopen_Date'
    },
    claim_status_code: {
      description: 'Claim Status Code represents the current state of a claim setup and resolution. Example: Open, Pending Arbitration, In Litigation, Closed.',
      type: 'string',
      sql: 'Claim_Status_Code'
    },
    claim_reported_date: {
      description: 'Claim Reported Date is the date a claim is filed and recorded by the Insurance carrier responsible for handling the claim.',
      type: 'time',
      sql: 'Claim_Reported_Date'
    },
    days_to_settle_claim: {
      type: 'number',
      sql: 'DATEDIFF(day, Claim_Open_Date, Claim_Close_Date)'
    }
  }
});


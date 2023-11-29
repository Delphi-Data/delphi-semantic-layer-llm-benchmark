cube('Catastrophe', {
  sql: `SELECT * FROM PUBLIC.CATASTROPHE`,
  description: 'Catastrophe is a destructive event of significant importance. Due to both the scope and the scale of losses under the event, it is classified separately from other loss events. These events may also be formally classified by a political entity whose jurisdiction the event took place.',

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Claim: {
      relationship: 'one_to_many',
      sql: `${CUBE}.catastrophe_identifier = ${Claim.catastrophe_identifier}`
    }
  },

  measures: {
  
  },

  dimensions: {
    catastrophe_identifier: {
      description: 'Catastrophe Identifier is the uniue identifier for a Catastrophe.',
      type: 'number',
      sql: 'Catastrophe_Identifier',
      primaryKey: true,
      shown: true
    },
    catastrophe_type_code: {
      description: 'Catastrophe Type Code represents the type of severe loss characterized by extreme force and/or sizable financial loss.',
      type: 'string',
      sql: 'Catastrophe_Type_Code'
    },
    catastrophe_name: {
      description: 'Catastrophe Name is the wording assigned to a catastrophe by regulatory agency or Insurance Company.',
      type: 'string',
      sql: 'Catastrophe_Name'
    },
    industry_catastrophe_code: {
      description: 'Industry Catastrophe Code is a code assigned by regulatory agency to identify a single major loss occurring on a specified date or to a single loss incurred over a number of days.',
      type: 'string',
      sql: 'Industry_Catastrophe_Code',
    },
    company_catastrophe_code: {
      description: 'Company Catastrophe Code is the Code assigned to a Catastrophe by the Company.',
      type: 'string',
      sql: 'Company_Catastrophe_Code'
    }
  }
});


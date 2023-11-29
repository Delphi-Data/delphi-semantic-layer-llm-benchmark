
CREATE OR REPLACE TABLE Claim
( 
	Claim_Identifier     int  NULL ,
	Catastrophe_Identifier int  NULL ,
	Claim_Description    varchar(5000)  NULL ,
	Claims_Made_Date     datetime  NULL ,
	Company_Claim_Number varchar(20)  NULL ,
	Company_Subclaim_Number varchar(5)  NULL ,
	Insurable_Object_Identifier int  NULL ,
	Occurrence_Identifier int  NULL ,
	Entry_Into_Claims_Made_Program_Date datetime  NULL ,
	Claim_Open_Date      datetime  NULL ,
	Claim_Close_Date     datetime  NULL ,
	Claim_Reopen_Date    datetime  NULL ,
	Claim_Status_Code    varchar(5)  NULL ,
	Claim_Reported_Date  datetime  NULL 
);

CREATE OR REPLACE TABLE Claim_Amount
( 
	Claim_Amount_Identifier bigint  NULL ,
	Claim_Identifier     int  NULL ,
	Claim_Offer_Identifier int  NULL ,
	Amount_Type_Code     varchar(20)  NULL ,
	Event_Date           datetime  NULL ,
	Claim_Amount         decimal(15,2)  NULL ,
	Insurance_Type_Code  char(1)  NULL 
);

CREATE OR REPLACE TABLE Loss_Payment
( 
	Claim_Amount_Identifier bigint  NULL 
);

CREATE OR REPLACE TABLE Loss_Reserve
( 
	Claim_Amount_Identifier bigint  NULL 
);

CREATE OR REPLACE TABLE Expense_Payment
( 
	Claim_Amount_Identifier bigint  NULL 
);

CREATE OR REPLACE TABLE Expense_Reserve
( 
	Claim_Amount_Identifier bigint  NULL 
);

CREATE OR REPLACE TABLE Claim_Coverage
( 
	Claim_Identifier     int  NULL ,
	Effective_Date       datetime  NULL ,
	Policy_Coverage_Detail_Identifier int  NULL 
);

CREATE OR REPLACE TABLE Policy_Coverage_Detail
( 
	Effective_Date       datetime  NULL ,
	Policy_Coverage_Detail_Identifier int  NULL ,
	Coverage_Identifier  int  NULL ,
	Insurable_Object_Identifier int  NULL ,
	Policy_Identifier    int  NULL ,
	Coverage_Part_Code   varchar(20)  NULL ,
	Coverage_Description varchar(2000)  NULL ,
	Expiration_Date      datetime  NULL ,
	Coverage_Inclusion_Exclusion_Code char(1)  NULL 
);

CREATE OR REPLACE TABLE Policy
( 
	Policy_Identifier    int  NULL ,
	Effective_Date       datetime  NULL ,
	Expiration_Date      datetime  NULL ,
	Policy_Number        varchar(50)  NULL ,
	Status_Code          varchar(20)  NULL ,
	Geographic_Location_Identifier int  NULL 
);

CREATE OR REPLACE TABLE Policy_Amount
( 
	Policy_Amount_Identifier bigint  NULL ,
	Geographic_Location_Identifier int  NULL ,
	Policy_Identifier    int  NULL ,
	Effective_Date       datetime  NULL ,
	Amount_Type_Code     varchar(5)  NULL ,
	Earning_Begin_Date   datetime  NULL ,
	Earning_End_Date     datetime  NULL ,
	Policy_Coverage_Detail_Identifier int  NULL ,
	Policy_Amount        decimal(15,2)  NULL ,
	Insurable_Object_Identifier int  NULL ,
	Insurance_Type_Code  char(1)  NULL 
);

CREATE OR REPLACE TABLE Agreement_Party_Role
( 
	Agreement_Identifier int  NULL ,
	Party_Identifier     bigint  NULL ,
	Party_Role_Code      varchar(20)  NULL ,
	Effective_Date       datetime  NULL ,
	Expiration_Date      datetime  NULL 
);

CREATE OR REPLACE TABLE Premium
( 
	Policy_Amount_Identifier bigint  NULL 
);

CREATE OR REPLACE TABLE Catastrophe
( 
	Catastrophe_Identifier int  NULL ,
	Catastrophe_Type_Code varchar(20)  NULL ,
	Catastrophe_Name     varchar(100)  NULL ,
	Industry_Catastrophe_Code varchar(20)  NULL ,
	Company_Catastrophe_Code varchar(20)  NULL 
);

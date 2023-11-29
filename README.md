# Delphi Labs - data.world Semantic Layer LLM Benchmark
## Purpose
The team at data.world recently published [a paper](https://arxiv.org/pdf/2311.07509.pdf) showing how important knowledge graphs and semantic layers are when using AI large language models (LLMs) to query enterprise scale data.

The goal of this repository is to apply their benchmark to [Delphi](https://delphihq.com), the enterprise platform for AI self-service data analytics.

## Usage
### 1. Database setup
First, in a Snowflake data warehouse, run the DDL in this repository to create the necessary tables (it is slightly modified from the [data.world DDL](https://github.com/datadotworld/cwd-benchmark-data/blob/main/ACME_Insurance/DDL/ACME_small.ddl) to remove primary/foreign keys since they will be defined in the semantic layer).

Next, via your preferred method (such as the Snowflake UI), upload the relevant data files from https://github.com/datadotworld/cwd-benchmark-data/tree/main/ACME_Insurance/data to the tables you just created.

### 2. Semantic Layer setup (Cube)
If you don't already have an account, sign up for Cube's free tier at https://cube.dev.

Create a new project using your Snowflake credentials and the Cube schema contained in this repository.

### 3. Connect Delphi to Cube
Sign up for the free tier of Delphi at https://app.delphihq.com.

Click "Cube" on the connection screen and enter your credentials from Cube. Click through to save the connection.

### 4. Run queries
Go to the benchmark results sheet and copy/paste questions from the `challenge_text` field into Delphi.

It will tell you the results and you can also view the Cube query that was run to validate it.

Notes: 
* We used the GPT-4 (OpenAI) LLM; you can choose this or others in the Settings tab in Delphi
* You will get best/fastest results if you reload the explore tab to create a new conversation for each question

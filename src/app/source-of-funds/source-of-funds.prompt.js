const sourceoffundsPrompt = `
**Instruction**: 
- You will receive background data.
- Determine the **source of funds** of the person using this data.
- Use the structure provided below for your response.
- **Avoid assumptions**. 

**Example**: 
If the background data says: "Internal transfer to Max from account of Vontobel BRS 2828.001 (5000000 CHF) that belonged to his father René Müller. It is a donation from his father , which was decided on July 23, 2020. 
Your output might be:
\`\`\`
{{
    "sourceoffunds": [
        {{
            "Origin_type": "Transfer",
            "Fund_amount": "5000000",
            "Fund_Currency": "CHF",
            "Incoming_institute": "Vontobel",
            "Origin_fund_from_deposit": "2828.001",
            "name_of_origin_person": "Father of Client"
            "date_of_funds": "23th of July 2020"
            "reasoning": "Max get a transfer of 5000000 CHF from his Father René Müller account 2828.001 at 23th of July 2020"
        }}
    ]
}}
\`\`\`

**Expected Output Structure**: 
\`\`\`
{{
    "sourceoffunds": [
        {{
            "Origin_type": "Ttype of the funds-income as a enum-vale. This are the enums: cash, transfer, interests, realestate, others",
            "Fund_amount": "Amount of the specifiy fund position",
            "Fund_Currency": "Currency of the fund position",
            "Incoming_institute": "Name of the institute from where the funds is comming",
            "Origin_fund_from_deposit": "Number or identifyer of the account where the funds are comming from",
            "name_of_origin_person": "Name of the owner of the account where the funds are comming from",
            "date_of_funds": "Date of the fund-delivery in 'dd. mm. yyyy' format",
            "additionalInformation": "Any extra or missing details about this specific source of fund",
            "reasoning": "Your basis for the provided details"
        }}
    ]
}}
\`\`\`

--- Begin Background ---

{background}

--- End Background --- 
`
`
export {
    sourceoffundsPrompt
}

import memoize from "lodash.memoize";

const URL_API = "https://7kedjhmlme.execute-api.us-east-1.amazonaws.com/v1/company"
let companies:any 

async function fetchCompaniesData(){
    const response = await fetch(URL_API)
    
return await response.json()
    
}

async function createCompany(company:any){
    const response = await fetch(URL_API, {
        method: 'POST',
        body: JSON.stringify(company)
    });

    return response.json()
}

async function getAll(){
    if(companies == null)
        companies = await fetchCompaniesData()
        
    return companies
}

const getCompanies = memoize(getAll)


async function addCompany(company:any){
    const newCompany = await createCompany(company)
    companies.push(newCompany)
    console.log(companies)
}

export {getCompanies, addCompany};

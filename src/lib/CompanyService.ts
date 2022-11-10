import memoize from "lodash.memoize";

const URL_API = "https://7kedjhmlme.execute-api.us-east-1.amazonaws.com/v1/company"
var companies:any 

async function fetchCompaniesData() {
    const response = await fetch(URL_API)
    const data = await response.json()
    return data
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

function addCompany(company:any){
    const newCompany = createCompany(company)
    companies.push(newCompany)
}

export {getCompanies, addCompany};

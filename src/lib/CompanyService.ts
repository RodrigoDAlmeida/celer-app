import memoize from "lodash.memoize";

const URL_API = "https://gbpjn8sulk.execute-api.us-east-1.amazonaws.com/prod/company"
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

    console.log(response)
    console.log(response.json())
    return response.json()
}

async function getAll(){
    if(companies == null)
        companies = await fetchCompaniesData()
        
    return companies
}

const getCompanies = memoize(getAll)

function addCompany(company:any){
    createCompany(company)
    companies.push(company)
}

export {getCompanies, addCompany};

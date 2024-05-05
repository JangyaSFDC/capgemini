public   class  wiring {
    

        @AuraEnabled(cacheable = true)    
    Public static List<Account> GetAllAccounts()
    {
        List<Account> lstAccounts = [Select id, name, rating, industry, annualrevenue, 
                                            phone, fax
                                                from Account
                                                    ORDER BY name];

        return lstAccounts;
    
    }
}
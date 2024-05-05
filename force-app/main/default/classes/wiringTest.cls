public with sharing class wiringTest {
   
      @AuraEnabled(cacheable = true)    
        Public static  List<Opportunity> GetAllOpp()
        {
            List<Opportunity> lstOpp = [Select id,Name,StageName,OwnerId
                                                    from Opportunity where StageName!=''];
    
            return lstOpp;
        
        }
        @AuraEnabled(cacheable=true)
        public static List<Account> SearchAccountsByName(String startingChars) {
            List<Account> lstAccounts = [SELECT Id, Name, Rating, Industry, AnnualRevenue, Phone, Fax
                                          FROM Account
                                          WHERE Name LIKE :startingChars+'%'];
            return lstAccounts;
        }
}
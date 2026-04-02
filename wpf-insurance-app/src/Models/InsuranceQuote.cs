using System;

namespace WpfInsuranceApp.Models
{
    public class InsuranceQuote
    {
        public decimal QuoteAmount { get; set; }
        public string CoverageDetails { get; set; }
        public DateTime ExpirationDate { get; set; }

        public InsuranceQuote(decimal quoteAmount, string coverageDetails, DateTime expirationDate)
        {
            QuoteAmount = quoteAmount;
            CoverageDetails = coverageDetails;
            ExpirationDate = expirationDate;
        }

        public override string ToString()
        {
            return $"Quote Amount: {QuoteAmount:C}, Coverage: {CoverageDetails}, Expires on: {ExpirationDate.ToShortDateString()}";
        }
    }
}
function Affiliates() {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Affiliates Program</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Partner with Cycling Guides</h2>
            <p className="text-gray-700 mb-4">
              Join our affiliates program and earn commissions by promoting cycling adventures. 
              We offer competitive rates and support for all our partners.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">How it works</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Sign up for our affiliate program</li>
                  <li>Get your unique referral link</li>
                  <li>Promote on your website or social media</li>
                  <li>Earn commissions on bookings</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Commission Rates</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>10% commission on all bookings</li>
                  <li>Bonuses for top performers</li>
                  <li>Monthly payouts</li>
                  <li>Detailed analytics dashboard</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Get Started</h2>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Apply for Affiliates Program
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Affiliates;
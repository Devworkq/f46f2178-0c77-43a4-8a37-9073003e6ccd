import appScreenshot from "@/assets/app-screenshot.png";
import { Button } from "@/components/ui/button";

const AppCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={appScreenshot}
              alt="Quidax Mobile App"
              className="w-full max-w-sm mx-auto drop-shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold">Your portal to cryptocurrency</h2>
            <p className="text-lg opacity-90">
              All your cryptocurrency, wallets, and markets right in your pocket. Download the Quidax app for mobile trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="h-14"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
